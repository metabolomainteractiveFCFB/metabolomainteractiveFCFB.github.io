/* ============================================================
   METABOLOMA INTERACTIVO — Aplicación
   ============================================================ */

const app = document.getElementById("app");
const state = {
  selectedOrganelle: null,
  hoveredOrganelle: null,
  explorerOrganelle: "",
  explorerPathway: "",
  explorerCategory: "",
  explorerQuery: "",
  focusDisease: null,
  mapSelection: null
};

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const organelleOf = (id) => ORGANELLE_BY_ID[id];
const countLabel = (n, singular, plural) => `${n} ${n === 1 ? singular : plural}`;

/* ---------------- Iconos ---------------- */
function icon(name, cls = "") {
  return `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

/* ---------------- Cabecera / navegación ---------------- */
function setActiveNav(route) {
  const map = { atlas: "atlas", pathways: "pathways", pathway: "pathways", explorer: "explorer", disease: "explorer", quiz: "quiz", sustento: "", manual: "" };
  const active = map[route] !== undefined ? map[route] : "atlas";
  document.querySelectorAll(".main-nav button, .mobile-nav button").forEach((btn) => {
    const isActive = btn.dataset.route === active;
    btn.classList.toggle("active", isActive);
    if (isActive) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
  const menuToggle = document.getElementById("menuToggle");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
  document.getElementById("mobileNav").classList.remove("open");
}

/* ---------------- Pie ---------------- */
function updateCounts() {
  document.getElementById("footerCounts").textContent =
    `Prototipo educativo · ${ORGANELLES.length} organelos · ${PATHWAYS.length} rutas · ${DISEASES.length} enfermedades`;
}

/* ---------------- Panel contextual ---------------- */
function renderContextPanel(id) {
  const panel = document.getElementById("contextPanel");
  if (!panel) return;

  if (!id) {
    panel.innerHTML = `
      <div class="panel-head">
        <span class="section-label">Panel contextual</span>
        <span class="tag tone-faint">En espera</span>
      </div>
      <div class="panel-body">
        <p class="desc">Pasa el cursor sobre la célula para identificar sus estructuras. Selecciona la mitocondria, el lisosoma, el peroxisoma, el citosol o el aparato de Golgi para ver sus rutas metabólicas y las enfermedades asociadas.</p>
        <div class="context-empty">Ningún organelo seleccionado</div>
        <button class="btn primary block" data-organelle-filter="mitochondrion" onclick="location.hash='#/pathways'">${icon("map")} Ver todas las rutas</button>
      </div>`;
    return;
  }

  const org = organelleOf(id);
  if (!org) return;
  const paths = org.pathwayIds.map((pid) => PATHWAY_BY_ID[pid]).filter(Boolean);
  const diseases = org.diseaseIds.map((did) => DISEASE_BY_ID[did]).filter(Boolean);
  const isPrimary = org.tier === "primary";
  const hasRoutes = paths.length > 0;
  const panelTag = isPrimary ? "Organelo diana" : hasRoutes ? "Compartimento con rutas" : "Contexto celular";
  const panelTone = isPrimary ? "teal" : hasRoutes ? "blue" : "faint";

  panel.innerHTML = `
    <div class="panel-head">
      <span class="section-label">Panel contextual</span>
      <span class="tag tone-${panelTone}">${panelTag}</span>
    </div>
    <div class="panel-body">
      <div class="org-identity">
        <span class="org-emblem" style="color:${org.color}"></span>
        <div>
          <h2>${org.name}</h2>
          <p>${org.tagline}</p>
        </div>
      </div>
      <p class="desc">${org.description}</p>
      ${org.functions.length ? `
        <div>
          <span class="panel-subhead">Funciones principales</span>
          <ul class="check-list" style="margin-top:8px">
            ${org.functions.map((f) => `<li>${icon("check")}<span>${f}</span></li>`).join("")}
          </ul>
        </div>` : ""}
      ${paths.length ? `
        <div>
          <span class="panel-subhead">Rutas metabólicas</span>
          <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
            ${paths.map((p) => `
              <a class="mini-path" href="#/pathway/${p.id}">
                <span class="mp-main">${icon("map")}<span class="mp-title">${p.name}</span></span>
                <span class="mp-sub">${p.diseaseIds.length} enf.</span>
              </a>`).join("")}
          </div>
        </div>` : `<div class="context-empty">Sin rutas de EIM representadas en este prototipo. Se muestra como contexto celular.</div>`}
      ${diseases.length ? `
        <div>
          <span class="panel-subhead">Enfermedades relacionadas</span>
          <div class="disease-chips" style="margin-top:8px">
            ${diseases.map((d) => `<a class="disease-chip" href="#/disease/${d.id}">${d.name}</a>`).join("")}
          </div>
        </div>` : ""}
      ${paths.length ? `<a class="btn primary block" href="#/explorer" data-organelle-filter="${org.id}">${icon("compass")} Explorar este organelo</a>` : ""}
    </div>`;
}

/* ---------------- Célula SVG ---------------- */
function cellSvg() {
  return `
  <svg class="cell-svg" viewBox="0 0 1000 720" role="img" aria-label="Ilustración interactiva de una célula eucariota humana">
    <defs>
      <radialGradient id="cytoGrad" cx="42%" cy="34%" r="72%">
        <stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#eff9fa"/><stop offset="100%" stop-color="#e4f1f7"/>
      </radialGradient>
      <linearGradient id="membraneGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0f9b8e" stop-opacity=".95"/><stop offset="50%" stop-color="#2f7fc1" stop-opacity=".7"/><stop offset="100%" stop-color="#7c5cd6" stop-opacity=".85"/>
      </linearGradient>
      <radialGradient id="nucleusGrad" cx="38%" cy="32%" r="75%">
        <stop offset="0%" stop-color="#8ea6ff"/><stop offset="60%" stop-color="#5f7ded"/><stop offset="100%" stop-color="#3b53b0"/>
      </radialGradient>
      <linearGradient id="mitoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f7a06b"/><stop offset="100%" stop-color="#d9694a"/>
      </linearGradient>
      <radialGradient id="lysoGrad" cx="40%" cy="35%" r="75%">
        <stop offset="0%" stop-color="#c9a9ff"/><stop offset="100%" stop-color="#8b5fd6"/>
      </radialGradient>
      <radialGradient id="peroxGrad" cx="40%" cy="35%" r="75%">
        <stop offset="0%" stop-color="#7ce8bd"/><stop offset="100%" stop-color="#2fae86"/>
      </radialGradient>
      <clipPath id="mitoClip"><ellipse cx="250" cy="520" rx="128" ry="72" transform="rotate(-14 250 520)"/></clipPath>
    </defs>

    <g class="organelle" data-org="cytosol" tabindex="0" role="button" aria-label="Citosol">
      <g class="organelle-shape">
        <path d="M120 360 C120 158 262 66 500 66 C742 66 902 150 902 342 C902 542 758 656 500 656 C248 656 120 542 120 360 Z" fill="url(#cytoGrad)" stroke="url(#membraneGrad)" stroke-width="3"/>
        <path d="M120 360 C120 158 262 66 500 66 C742 66 902 150 902 342 C902 542 758 656 500 656 C248 656 120 542 120 360 Z" fill="none" stroke="#0f9b8e" stroke-opacity=".22" stroke-width="12" stroke-dasharray="2 9"/>
        <circle cx="430" cy="120" r="4" fill="#0f9b8e" opacity=".22"/><circle cx="620" cy="150" r="6" fill="#0f9b8e" opacity=".22"/>
        <circle cx="780" cy="240" r="4" fill="#0f9b8e" opacity=".22"/><circle cx="820" cy="430" r="6" fill="#0f9b8e" opacity=".22"/>
        <circle cx="640" cy="590" r="4" fill="#0f9b8e" opacity=".22"/><circle cx="360" cy="610" r="6" fill="#0f9b8e" opacity=".22"/>
        <circle cx="170" cy="430" r="4" fill="#0f9b8e" opacity=".22"/><circle cx="180" cy="260" r="6" fill="#0f9b8e" opacity=".22"/>
        <circle cx="300" cy="200" r="3" fill="#7c5cd6" opacity=".26"/><circle cx="700" cy="520" r="3" fill="#7c5cd6" opacity=".26"/>
      </g>
    </g>

    <g class="organelle" data-org="er" tabindex="0" role="button" aria-label="Retículo endoplasmático">
      <g class="organelle-shape">
        <path d="M470 170 C520 140 600 200 648 168" fill="none" stroke="#e0b15f" stroke-width="9" stroke-opacity=".85" stroke-linecap="round"/>
        <path d="M470 236 C520 206 600 266 648 234" fill="none" stroke="#e0b15f" stroke-width="7" stroke-opacity=".85" stroke-linecap="round"/>
        <path d="M470 302 C520 272 600 332 648 300" fill="none" stroke="#e0b15f" stroke-width="9" stroke-opacity=".85" stroke-linecap="round"/>
        <path d="M470 368 C520 338 600 398 648 366" fill="none" stroke="#e0b15f" stroke-width="7" stroke-opacity=".85" stroke-linecap="round"/>
        <path d="M470 170 C520 140 600 200 648 168" fill="none" stroke="#f5d79a" stroke-width="2" stroke-opacity=".6"/>
        <path d="M470 236 C520 206 600 266 648 234" fill="none" stroke="#f5d79a" stroke-width="2" stroke-opacity=".6"/>
        <path d="M470 302 C520 272 600 332 648 300" fill="none" stroke="#f5d79a" stroke-width="2" stroke-opacity=".6"/>
        <path d="M470 368 C520 338 600 398 648 366" fill="none" stroke="#f5d79a" stroke-width="2" stroke-opacity=".6"/>
      </g>
    </g>

    <g class="organelle" data-org="nucleus" tabindex="0" role="button" aria-label="Núcleo">
      <g class="organelle-shape">
        <circle cx="350" cy="285" r="128" fill="url(#nucleusGrad)" stroke="#9db4ff" stroke-width="3"/>
        <circle cx="350" cy="285" r="128" fill="none" stroke="#c9d5ff" stroke-width="8" stroke-opacity=".16"/>
        <circle cx="350" cy="285" r="110" fill="none" stroke="#dfe6ff" stroke-width="1.4" stroke-opacity=".35"/>
        <circle cx="322" cy="256" r="40" fill="#eef2ff" opacity=".85"/>
        <circle cx="322" cy="256" r="40" fill="none" stroke="#b9c6ff" stroke-width="2"/>
        <circle cx="330" cy="250" r="7" fill="#8b9bff" opacity=".7"/>
        <circle cx="470" cy="285" r="7" fill="#0a1a2d" stroke="#9db4ff" stroke-width="2"/>
        <circle cx="410" cy="388.9" r="7" fill="#0a1a2d" stroke="#9db4ff" stroke-width="2"/>
        <circle cx="290" cy="388.9" r="7" fill="#0a1a2d" stroke="#9db4ff" stroke-width="2"/>
        <circle cx="230" cy="285" r="7" fill="#0a1a2d" stroke="#9db4ff" stroke-width="2"/>
        <circle cx="290" cy="181.1" r="7" fill="#0a1a2d" stroke="#9db4ff" stroke-width="2"/>
        <circle cx="410" cy="181.1" r="7" fill="#0a1a2d" stroke="#9db4ff" stroke-width="2"/>
      </g>
    </g>

    <g class="organelle" data-org="golgi" tabindex="0" role="button" aria-label="Aparato de Golgi">
      <g class="organelle-shape">
        <path d="M636 262 C670 240 726 244 762 262" fill="none" stroke="#e879b9" stroke-width="10" stroke-opacity=".9" stroke-linecap="round"/>
        <path d="M642 284 C670 262 726 266 762 284" fill="none" stroke="#e879b9" stroke-width="10" stroke-opacity=".8" stroke-linecap="round"/>
        <path d="M648 306 C670 284 726 288 762 306" fill="none" stroke="#e879b9" stroke-width="10" stroke-opacity=".7" stroke-linecap="round"/>
        <path d="M654 328 C670 306 726 310 762 328" fill="none" stroke="#e879b9" stroke-width="10" stroke-opacity=".6" stroke-linecap="round"/>
        <circle cx="760" cy="300" r="8" fill="#f7a9d4" opacity=".8"/><circle cx="748" cy="306" r="8" fill="#f7a9d4" opacity=".8"/><circle cx="736" cy="312" r="8" fill="#f7a9d4" opacity=".8"/>
      </g>
    </g>

    <g class="organelle" data-org="mitochondrion" tabindex="0" role="button" aria-label="Mitocondria">
      <g class="organelle-shape">
        <ellipse cx="250" cy="520" rx="128" ry="72" transform="rotate(-14 250 520)" fill="url(#mitoGrad)" stroke="#ffb27a" stroke-width="3"/>
        <g clip-path="url(#mitoClip)" transform="rotate(-14 250 520)">
          <path d="M150 520 q20 -46 34 0 q20 46 34 0 q20 -46 34 0 q20 46 34 0 q20 -46 34 0 q20 46 34 0 q20 -46 34 0" fill="none" stroke="#7d2f1f" stroke-width="7" stroke-opacity=".55"/>
        </g>
      </g>
    </g>

    <g class="organelle" data-org="peroxisome" tabindex="0" role="button" aria-label="Peroxisoma">
      <g class="organelle-shape">
        <circle cx="515" cy="515" r="46" fill="url(#peroxGrad)" stroke="#8bf0cb" stroke-width="3"/>
        <rect x="505" y="505" width="20" height="20" rx="3" fill="#0c3a2e" stroke="#c8f7e6" stroke-width="1.6" opacity=".85"/>
      </g>
    </g>

    <g class="organelle" data-org="lysosome" tabindex="0" role="button" aria-label="Lisosoma">
      <g class="organelle-shape">
        <circle cx="705" cy="505" r="56" fill="url(#lysoGrad)" stroke="#cbb2ff" stroke-width="3"/>
        <circle cx="690" cy="490" r="9" fill="#4c2f8a" opacity=".6"/><circle cx="722" cy="512" r="7" fill="#4c2f8a" opacity=".55"/><circle cx="700" cy="528" r="5" fill="#4c2f8a" opacity=".5"/>
      </g>
    </g>

    <g class="organelle membrane-ring" data-org="membrane" tabindex="0" role="button" aria-label="Membrana plasmática">
      <g class="organelle-shape">
        <path d="M100 360 C100 145 250 44 500 44 C762 44 922 136 922 342 C922 556 766 678 500 678 C236 678 100 554 100 360 Z" fill="none" stroke="url(#membraneGrad)" stroke-width="5"/>
        <path d="M100 360 C100 145 250 44 500 44 C762 44 922 136 922 342 C922 556 766 678 500 678 C236 678 100 554 100 360 Z" fill="none" stroke="#0f9b8e" stroke-width="14" stroke-opacity=".001" pointer-events="stroke"/>
        <path d="M112 360 C112 162 258 60 500 60 C750 60 910 150 910 342 C910 542 758 662 500 662 C246 662 112 540 112 360 Z" fill="none" stroke="#0f9b8e" stroke-opacity=".28" stroke-width="1.2" stroke-dasharray="4 7"/>
      </g>
    </g>
  </svg>`;
}

function initCell() {
  const stage = document.getElementById("cellStage");
  if (!stage) return;
  const groups = stage.querySelectorAll(".organelle");
  const tip = document.getElementById("cellTooltip");

  const placeTip = (e, org) => {
    if (!tip) return;
    const r = stage.getBoundingClientRect();
    tip.style.left = `${e.clientX - r.left}px`;
    tip.style.top = `${e.clientY - r.top}px`;
    tip.innerHTML = `<span class="dot" style="background:${org.color}"></span>${org.name}`;
    tip.classList.add("visible");
  };

  const highlight = (id) => {
    groups.forEach((g) => {
      g.classList.toggle("dimmed", !!id && g.dataset.org !== id);
      g.classList.toggle("selected", g.dataset.org === state.selectedOrganelle);
    });
  };

  groups.forEach((g) => {
    const org = organelleOf(g.dataset.org);
    g.addEventListener("mouseenter", (e) => {
      if (state.hoveredOrganelle === g.dataset.org) return;
      state.hoveredOrganelle = g.dataset.org;
      highlight(g.dataset.org);
      placeTip(e, org);
      renderContextPanel(g.dataset.org);
    });
    g.addEventListener("mousemove", (e) => placeTip(e, org));
    g.addEventListener("mouseleave", () => {
      state.hoveredOrganelle = null;
      if (tip) tip.classList.remove("visible");
      highlight(state.selectedOrganelle);
      renderContextPanel(state.selectedOrganelle);
    });
    g.addEventListener("focus", () => highlight(g.dataset.org));
    g.addEventListener("blur", () => highlight(state.selectedOrganelle));
    g.addEventListener("click", () => selectOrganelleFromAtlas(g.dataset.org, true));
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectOrganelleFromAtlas(g.dataset.org, true);
      }
    });
  });
}

function selectOrganelleFromAtlas(id, toggle = false) {
  state.selectedOrganelle = toggle && state.selectedOrganelle === id ? null : id;
  document.querySelectorAll(".cell-svg .organelle").forEach((g) => {
    g.classList.toggle("selected", g.dataset.org === state.selectedOrganelle);
    g.classList.toggle("dimmed", !!state.hoveredOrganelle && g.dataset.org !== state.hoveredOrganelle);
  });
  document.querySelectorAll(".org-pill[data-org]").forEach((p) => {
    p.classList.toggle("active", p.dataset.org === state.selectedOrganelle);
  });
  renderContextPanel(state.hoveredOrganelle || state.selectedOrganelle);
  if (window.innerWidth < 980 && state.selectedOrganelle) {
    document.getElementById("contextPanel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ---------------- Vista: Atlas ---------------- */
function renderAtlas() {
  const pills = ORGANELLES.map((o) => `
    <button class="org-pill ${state.selectedOrganelle === o.id ? "active" : ""}" data-org="${o.id}" aria-pressed="${state.selectedOrganelle === o.id}">
      <span class="dot" style="background:${o.color}"></span>${o.shortName}
      <span class="count">${o.pathwayIds.length ? `· ${o.pathwayIds.length}` : ""}</span>
    </button>`).join("");

  app.innerHTML = `
  <div class="page">
    <div class="container">
      <div class="page-head">
        <span class="eyebrow">${icon("atlas")} Vista principal</span>
        <h1 class="hero-title">${SITE_NAME} : <span class="hero-title-sub">Cartografía de los Errores Innatos del Metabolismo</span></h1>
        <p class="lede">Un atlas dinámico e interactivo organizado por <strong>organelos</strong>. Explora la célula, abre una vía metabólica y consulta las <strong>enzimas mutadas</strong>, los <strong>biomarcadores de diagnóstico</strong> en sangre u orina y el <strong>tratamiento metabólico o dietario</strong>.</p>
        <div class="hero-stats" aria-label="Alcance del atlas">
          <div><strong>${ORGANELLES.length}</strong><span>organelos</span></div>
          <div><strong>${PATHWAYS.length}</strong><span>rutas metabólicas</span></div>
          <div><strong>${DISEASES.length}</strong><span>enfermedades con ficha</span></div>
          <div><strong>${DISEASES.reduce((n, d) => n + d.sources.length, 0)}</strong><span>referencias citadas</span></div>
        </div>
        <div class="hero-cta">
          <a class="btn primary" href="#/quiz">${icon("quiz")} Quiz por rutas</a>
          <span>${QUIZ_PER_ROUTE} preguntas por ruta · ${QUIZ_TOTAL} en total</span>
        </div>
      </div>

      <div class="atlas-layout">
        <section class="card cell-card" aria-label="Célula interactiva">
          <div class="hint">${icon("atlas")} Pasa el cursor para identificar · haz clic para seleccionar</div>
          <div class="cell-stage" id="cellStage">
            ${cellSvg()}
            <div class="cell-tooltip" id="cellTooltip"></div>
          </div>
          <div class="organelle-pills">${pills}</div>
        </section>
        <aside class="card context-panel" id="contextPanel" aria-live="polite"></aside>
      </div>

      <div class="card steps-card">
        <div class="steps-title">
          <span class="section-label">Cómo empezar</span>
          <strong>Cuatro pasos por la ruta</strong>
        </div>
        <div class="steps-list">
          <div class="step"><span class="step-num">1</span><p><strong>Elige un organelo</strong>en la célula o en las píldoras</p></div>
          <div class="step"><span class="step-num">2</span><p><strong>Consulta sus rutas</strong>y abre el diagrama</p></div>
          <div class="step"><span class="step-num">3</span><p><strong>Selecciona una enzima</strong>o un punto de bloqueo</p></div>
          <div class="step"><span class="step-num">4</span><p><strong>Lee la ficha</strong>biomarcadores y tratamiento</p></div>
        </div>
        <a class="steps-doc" href="#/manual">${icon("book")} ¿Primera vez? Abre el manual de uso</a>
      </div>
    </div>
  </div>`;

  initCell();
  renderContextPanel(state.selectedOrganelle);
  document.querySelectorAll(".org-pill[data-org]").forEach((btn) => {
    btn.addEventListener("click", () => selectOrganelleFromAtlas(btn.dataset.org));
  });
}

/* ---------------- Vista: listado de rutas ---------------- */
function renderPathways() {
  const groups = ORGANELLES.filter((o) => o.pathwayIds.length).map((org) => {
    const paths = org.pathwayIds.map((id) => PATHWAY_BY_ID[id]).filter(Boolean);
    return `
      <section aria-labelledby="group-${org.id}">
        <div class="group-head">
          <span class="dot" style="background:${org.color}"></span>
          <h2 id="group-${org.id}">${org.name}</h2>
          <span class="sep">· ${countLabel(paths.length, "ruta", "rutas")}</span>
          <a class="more" href="#/explorer" data-organelle-filter="${org.id}">Ver enfermedades →</a>
        </div>
        <div class="pathway-grid">
          ${paths.map((p) => {
            const orgs = p.organelleIds.map((id) => organelleOf(id)?.shortName).filter(Boolean);
            const cats = p.category ? CATEGORIES[p.category] : null;
            return `
            <a class="card pathway-card ${p.context ? "context-card" : ""}" href="#/pathway/${p.id}">
              <div class="pc-head">
                <h3>${p.name}</h3>
                ${p.context ? `<span class="tag tone-faint">Contexto</span>` : (cats ? `<span class="tag tone-${cats.tone}">${p.diseaseIds.length} enf.</span>` : "")}
              </div>
              <p>${p.summary}</p>
              <div class="pc-foot">
                <span class="pc-meta">${orgs.join(" · ")}</span>
                <span class="pc-open">Abrir diagrama ${icon("chevron-right")}</span>
              </div>
            </a>`;
          }).join("")}
        </div>
      </section>`;
  }).join("");

  app.innerHTML = `
  <div class="page">
    <div class="container">
      <div class="breadcrumbs">
        <a class="crumb" href="#/atlas">${icon("arrow-left")} Atlas celular</a>
      </div>
      <div class="page-head">
        <span class="eyebrow">${icon("map")} Mapa metabólico</span>
        <h1>Selecciona una ruta metabólica</h1>
        <p class="lede">Elige una ruta para abrir su diagrama interactivo, donde podrás explorar enzimas, metabolitos y puntos de bloqueo. Cada ficha enlaza con las enfermedades, los biomarcadores y el tratamiento.</p>
      </div>
      <div class="pathway-groups">${groups}</div>
    </div>
  </div>`;
}

/* ---------------- Diagrama de ruta ---------------- */
function buildPathwaySvg(pathway) {
  const W = 1400;
  const rowH = 190;
  const top = 72;
  const cardH = 62;
  const chains = pathway.chains || [];
  const maxSteps = Math.max(1, ...chains.map((c) => c.steps.length));
  const cardW = maxSteps >= 7 ? 162 : 192;
  const labelMax = Math.floor((cardW - 24) / 6.4);
  const subMax = Math.floor((cardW - 24) / 5.1);
  const H = top + Math.max(0, chains.length - 1) * rowH + 112;
  const nodes = [];
  let body = "";

  chains.forEach((chain, ci) => {
    const y = top + ci * rowH;
    const n = chain.steps.length;
    const available = W - 140;
    const gap = n > 1 ? Math.min(88, Math.max(20, (available - n * cardW) / (n - 1))) : 0;
    const total = n * cardW + (n - 1) * gap;
    const startX = (W - total) / 2;
    const tone = chain.tone || "mito";
    const bandColor = tone === "context" ? "rgba(91,114,136,.28)" : "rgba(15,155,142,.28)";

    body += `
      <g>
        <rect x="26" y="${y - 58}" width="${W - 52}" height="120" rx="14" fill="rgba(248,251,253,.92)" stroke="${bandColor}" stroke-opacity=".6" stroke-dasharray="3 5"/>
        <text x="44" y="${y - 40}" fill="#466276" font-family="JetBrains Mono, monospace" font-weight="600" font-size="11" letter-spacing="1.2">${chain.label.toUpperCase()}</text>
      </g>`;

    chain.steps.forEach((step, si) => {
      const cx = startX + cardW / 2 + si * (cardW + gap);
      const idx = nodes.length;
      nodes.push({ ...step, chainLabel: chain.label, x: cx, y });
      const styles = {
        m: { stroke: "rgba(15,155,142,.6)", fill: "rgba(15,155,142,.07)", sub: "#0e7490", type: "Metabolito" },
        e: { stroke: "rgba(124,92,214,.55)", fill: "rgba(124,92,214,.06)", sub: "#6d4fc4", type: "Enzima / transportador" },
        b: { stroke: "rgba(217,79,92,.8)", fill: "rgba(217,79,92,.08)", sub: "#b23c48", type: "Punto de alteración" },
        a: { stroke: "rgba(183,121,31,.65)", fill: "rgba(183,121,31,.07)", sub: "#96631a", type: "Metabolito acumulado" },
        x: { stroke: "rgba(91,114,136,.5)", fill: "rgba(241,246,250,.9)", sub: "#5b7288", type: "Contexto" }
      }[step.t] || {};
      const shownLabel = trim(step.label, labelMax);
      const shownSub = trim(step.sub || "", subMax);
      const nodeName = [shownLabel, shownSub, step.t === "b" ? "Punto de alteración" : ""].filter(Boolean).join(". ");

      body += `
        <g class="map-node ${step.diseaseId ? "blocked" : ""}" data-idx="${idx}" tabindex="0" role="button" aria-label="${esc(nodeName)}">
          <rect x="${cx - cardW / 2}" y="${y - cardH / 2}" width="${cardW}" height="${cardH}" rx="10"
                fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${step.t === "b" ? 1.6 : 1.2}"
                ${step.t === "x" ? 'stroke-dasharray="3 4"' : ""}/>
          <text x="${cx - cardW / 2 + 12}" y="${y - 5}" fill="#0b2538" font-family="Inter, sans-serif" font-size="12.5" font-weight="600">${esc(shownLabel)}</text>
          <text x="${cx - cardW / 2 + 12}" y="${y + 11}" fill="${styles.sub}" font-family="JetBrains Mono, monospace" font-size="9.2">${esc(shownSub)}</text>
          <circle cx="${cx + cardW / 2 - 11}" cy="${y - cardH / 2 + 11}" r="3.4" fill="${styles.stroke}"/>
          ${step.t === "b" ? `<g fill="#ffffff" pointer-events="none">
            <rect x="${cx + cardW / 2 - 11.8}" y="${y - cardH / 2 + 7.4}" width="1.6" height="5.2" rx="0.8"/>
            <circle cx="${cx + cardW / 2 - 11}" cy="${y - cardH / 2 + 15.1}" r="1"/>
          </g>` : ""}
        </g>`;

      if (si < n - 1) {
        const nx = startX + cardW / 2 + (si + 1) * (cardW + gap);
        const x1 = cx + cardW / 2 + 5;
        const x2 = nx - cardW / 2 - 8;
        const col = step.t === "a" ? "rgba(183,121,31,.55)" : "rgba(15,155,142,.4)";
        body += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${col}" stroke-width="1.4" marker-end="url(#arrowHead)"/>`;
      }
    });
  });

  return {
    nodes,
    svg: `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Diagrama de la ruta ${pathway.name}">
      <defs>
        <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(15,155,142,.55)"/>
        </marker>
      </defs>
      <g class="map-viewport">${body}</g>
    </svg>`
  };
}

function trim(str, max) {
  return str.length > max ? `${str.slice(0, max - 1)}…` : str;
}

function initMap(pathway, focusDisease) {
  const shell = document.getElementById("mapShell");
  if (!shell) return;
  const { nodes, svg } = buildPathwaySvg(pathway);
  shell.innerHTML = svg + `
    <div class="map-hint-card">Rueda para zoom · arrastra para mover</div>
    <div class="map-controls">
      <button data-zoom="in" aria-label="Acercar">${icon("plus")}</button>
      <button data-zoom="out" aria-label="Alejar">${icon("minus")}</button>
      <button data-zoom="reset" aria-label="Restablecer vista">${icon("reset")}</button>
    </div>`;

  const svgEl = shell.querySelector("svg");
  const viewport = shell.querySelector(".map-viewport");
  let scale = 1, tx = 0, ty = 0, dragging = false, moved = false;
  let startX = 0, startY = 0, startTx = 0, startTy = 0;

  const apply = () => viewport.setAttribute("transform", `translate(${tx} ${ty}) scale(${scale})`);
  const clampScale = (v) => Math.min(2.4, Math.max(0.6, v));

  shell.querySelectorAll("[data-zoom]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.zoom;
      if (action === "reset") { scale = 1; tx = 0; ty = 0; }
      else {
        const next = clampScale(action === "in" ? scale * 1.25 : scale / 1.25);
        const rect = svgEl.getBoundingClientRect();
        const cx = rect.width / 2, cy = rect.height / 2;
        tx = cx - (cx - tx) * (next / scale);
        ty = cy - (cy - ty) * (next / scale);
        scale = next;
      }
      apply();
    });
  });

  shell.addEventListener("wheel", (e) => {
    if (!e.ctrlKey && Math.abs(e.deltaY) < 2) return;
    e.preventDefault();
    const rect = svgEl.getBoundingClientRect();
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    const next = clampScale(scale * Math.exp(-e.deltaY * 0.0014));
    tx = px - (px - tx) * (next / scale);
    ty = py - (py - ty) * (next / scale);
    scale = next;
    apply();
  }, { passive: false });

  shell.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    dragging = true; moved = false;
    startX = e.clientX; startY = e.clientY; startTx = tx; startTy = ty;
    shell.classList.add("grabbing");
    shell.setPointerCapture(e.pointerId);
  });
  shell.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
    tx = startTx + dx; ty = startTy + dy;
    apply();
  });
  const endDrag = () => { dragging = false; shell.classList.remove("grabbing"); };
  shell.addEventListener("pointerup", endDrag);
  shell.addEventListener("pointercancel", endDrag);

  const selectNode = (idx) => {
    const node = nodes[idx];
    if (!node) return;
    state.mapSelection = idx;
    shell.querySelectorAll(".map-node").forEach((n) => n.classList.toggle("active", Number(n.dataset.idx) === idx));
    renderInspector(node);
  };

  shell.querySelectorAll(".map-node").forEach((nodeEl) => {
    nodeEl.addEventListener("click", (e) => {
      e.stopPropagation();
      if (moved) return;
      selectNode(Number(nodeEl.dataset.idx));
    });
    nodeEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectNode(Number(nodeEl.dataset.idx)); }
    });
  });

  const initial = focusDisease ? nodes.findIndex((n) => n.diseaseId === focusDisease) : -1;
  if (initial >= 0) {
    selectNode(initial);
    const el = shell.querySelector(`.map-node[data-idx="${initial}"]`);
    el?.classList.add("focus-node");
  } else {
    renderInspector(null);
  }
}

function renderInspector(node) {
  const box = document.getElementById("inspector");
  if (!box) return;
  if (!node) {
    box.innerHTML = `
      <span class="section-label">Inspector del mapa</span>
      <h3>Selecciona un nodo</h3>
      <p class="empty">Haz clic sobre una enzima, un metabolito o un punto de bloqueo para ver su función, el gen implicado y las consecuencias.</p>
      <div class="inspector-foot"><a class="btn sm block" href="#/pathways">${icon("map")} Volver al listado</a></div>`;
    return;
  }

  const typeMeta = {
    m: { label: "Metabolito", cls: "tone-teal" },
    e: { label: "Enzima", cls: "tone-violet" },
    b: { label: "Punto de alteración", cls: "tone-coral" },
    a: { label: "Acumulación", cls: "tone-amber" },
    x: { label: "Contexto", cls: "tone-faint" }
  }[node.t] || { label: "Nodo", cls: "tone-faint" };
  const disease = node.diseaseId ? DISEASE_BY_ID[node.diseaseId] : null;

  box.innerHTML = `
    <span class="section-label">Inspector del mapa</span>
    <div class="badge-row"><span class="tag ${typeMeta.cls}">${typeMeta.label}</span>${disease ? `<span class="tag tone-coral">${disease.gene}</span>` : ""}</div>
    <h3>${node.label}</h3>
    <p style="font-family:var(--font-mono);font-size:10px;color:var(--faint)">${node.sub || ""} · ${node.chainLabel}</p>
    <p>${node.note || (node.t === "a" ? "Metabolito que tiende a acumularse cuando la ruta se bloquea. Su medición en sangre u orina orienta el diagnóstico." : node.t === "b" ? "Punto de bloqueo enzimático representado en esta ruta." : "Componente de la ruta metabólica. Selecciona otros nodos para comparar su papel.")}</p>
    ${disease ? `<div class="inspector-foot"><a class="btn coral block sm" href="#/disease/${disease.id}">${icon("flask")} Abrir ficha: ${disease.name}</a></div>` : ""}`;
}

/* ---------------- Vista: detalle de ruta ---------------- */
function renderPathway(id, focusDisease) {
  const pathway = PATHWAY_BY_ID[id];
  if (!pathway) { location.hash = "#/pathways"; return; }
  const org = organelleOf(pathway.organelleIds[0]);
  const orgs = pathway.organelleIds.map((oid) => organelleOf(oid)).filter(Boolean);
  const diseases = pathway.diseaseIds.map((did) => DISEASE_BY_ID[did]).filter(Boolean);
  const cats = pathway.category ? CATEGORIES[pathway.category] : null;

  const quickPaths = PATHWAYS.map((p) => `
    <a class="quick-path ${p.id === pathway.id ? "active" : ""}" href="#/pathway/${p.id}">${p.shortName}</a>`).join("");

  app.innerHTML = `
  <div class="page">
    <div class="container">
      <div class="breadcrumbs">
        <a class="crumb" href="#/atlas">${icon("arrow-left")} Atlas celular</a>
        <a class="crumb" href="#/pathways">${icon("map")} Mapa metabólico</a>
        <span class="crumb current">${pathway.shortName}</span>
      </div>

      <div class="pathway-head">
        <span class="eyebrow">${icon("map")} ${orgs.map((o) => o.shortName).join(" + ")}</span>
        <h1>${pathway.name}</h1>
        <p class="lede" style="max-width:860px">${pathway.summary}</p>
        <div class="chips">
          ${cats ? `<span class="tag tone-${cats.tone}">${cats.label}</span>` : `<span class="tag tone-faint">Ruta de contexto</span>`}
          ${diseases.map((d) => `<a class="tag tone-coral" href="#/disease/${d.id}">${d.name}</a>`).join("")}
        </div>
      </div>

      <div class="quick-paths" aria-label="Todas las rutas metabólicas">
        ${quickPaths}
      </div>

      <div class="map-shell" id="mapShell"></div>

      <div class="route-layout">
        <section class="card detail-card">
          <span class="eyebrow faint">${icon("flask")} Detalle de la ruta</span>
          <h2>${pathway.shortName}</h2>
          <p class="overview">${pathway.functionOverview}</p>
          <div class="note-box">${icon("info")} Selecciona una enzima (violeta) o un metabolito para ver su función, su gen y sus consecuencias en el inspector del mapa.</div>

          ${pathway.alterationPoints.length ? `
            <div class="detail-block">
              <span class="section-label">Puntos de alteración</span>
              <ul class="bullet-list">
                ${pathway.alterationPoints.map((a) => `<li><span class="dot dot-coral"></span>${a}</li>`).join("")}
              </ul>
            </div>` : ""}

          ${pathway.accumulated.length ? `
            <div class="detail-block">
              <span class="section-label">Metabolitos que pueden acumularse</span>
              <ul class="bullet-list">
                ${pathway.accumulated.map((a) => `<li><span class="dot dot-amber"></span>${a}</li>`).join("")}
              </ul>
            </div>` : ""}

          ${diseases.length ? `
            <div class="detail-block">
              <span class="section-label">Enfermedades de la ruta</span>
              <div class="inline-chips">
                ${diseases.map((d) => `<a class="tag tone-coral" href="#/disease/${d.id}">${d.name}</a>`).join("")}
              </div>
            </div>` : ""}

          <div class="actions">
            <a class="btn block" href="#/atlas" data-select-organelle="${pathway.organelleIds[0]}">${icon("arrow-left")} Volver al organelo</a>
          </div>
        </section>
        <aside class="inspector" id="inspector" aria-live="polite"></aside>
      </div>

      <section class="card legend-card">
        <span class="section-label">Leyenda del mapa</span>
        <div class="legend-grid">
          <div class="legend-item"><span class="legend-swatch sw-metabolite"></span>Metabolito o intermediario de la ruta</div>
          <div class="legend-item"><span class="legend-swatch sw-enzyme"></span>Gen o proteína implicada (enzima / transportador)</div>
          <div class="legend-item"><span class="legend-swatch sw-block"></span>Punto de alteración enzimática</div>
          <div class="legend-item"><span class="legend-swatch sw-accumulate"></span>Metabolito que puede acumularse</div>
          <div class="legend-item"><span class="legend-swatch sw-context"></span>Componente secundario o conexión de contexto</div>
        </div>
        <p class="legend-note">Estas convenciones son propias del prototipo y no constituyen afirmaciones diagnósticas.</p>
      </section>
    </div>
  </div>`;

  initMap(pathway, focusDisease);

  const quickList = document.querySelector(".quick-paths");
  const activeQuick = quickList?.querySelector(".quick-path.active");
  if (quickList && activeQuick && quickList.scrollWidth > quickList.clientWidth) {
    quickList.scrollLeft = activeQuick.offsetLeft - (quickList.clientWidth - activeQuick.offsetWidth) / 2;
  }
}

/* ---------------- Vista: explorador ---------------- */
function renderExplorer() {
  if (state.explorerOrganelle) { /* filtro conservado */ }
  const organelleOptions = ORGANELLES.map((o) => `<option value="${o.id}">${o.name}</option>`).join("");
  const pathwayOptions = PATHWAYS.map((p) => `<option value="${p.id}">${p.name}</option>`).join("");
  const usedCats = [...new Set(DISEASES.map((d) => d.category).filter(Boolean))];
  const categoryOptions = usedCats.map((c) => `<option value="${c}">${CATEGORIES[c].label}</option>`).join("");

  app.innerHTML = `
  <div class="page">
    <div class="container">
      <div class="page-head">
        <span class="eyebrow">${icon("compass")} Explorador</span>
        <h1>Rutas y enfermedades</h1>
        <p class="lede">Busca por enfermedad, gen, enzima o metabolito y combina los filtros para acotar los resultados. Cada ficha reúne el mecanismo, los biomarcadores y el tratamiento.</p>
      </div>

      <div class="card filters-card">
        <div class="filter-search">
          ${icon("search")}
          <input type="search" id="explorerQuery" placeholder="Buscar enfermedad, gen, enzima o metabolito…" value="${esc(state.explorerQuery)}" />
        </div>
        <div class="filter-grid">
          <div class="filter-group">
            <label for="filterOrganelle">Organelo</label>
            <div class="select-wrap">
              <select id="filterOrganelle"><option value="">Todos los organelos</option>${organelleOptions}</select>
              ${icon("chevron-down")}
            </div>
          </div>
          <div class="filter-group">
            <label for="filterPathway">Ruta metabólica</label>
            <div class="select-wrap">
              <select id="filterPathway"><option value="">Todas las rutas</option>${pathwayOptions}</select>
              ${icon("chevron-down")}
            </div>
          </div>
          <div class="filter-group">
            <label for="filterCategory">Categoría</label>
            <div class="select-wrap">
              <select id="filterCategory"><option value="">Todas las categorías</option>${categoryOptions}</select>
              ${icon("chevron-down")}
            </div>
          </div>
        </div>
      </div>

      <div class="results-bar">
        <h2 class="count" id="resultsCount" aria-live="polite"></h2>
        <button class="clear" id="clearFilters">Limpiar filtros</button>
      </div>
      <div class="disease-grid" id="diseaseGrid"></div>
    </div>
  </div>`;

  const elOrg = document.getElementById("filterOrganelle");
  const elPath = document.getElementById("filterPathway");
  const elCat = document.getElementById("filterCategory");
  const elQuery = document.getElementById("explorerQuery");

  elOrg.value = state.explorerOrganelle || "";
  elPath.value = state.explorerPathway || "";
  elCat.value = state.explorerCategory || "";
  elQuery.value = state.explorerQuery || "";

  const apply = () => {
    state.explorerOrganelle = elOrg.value;
    state.explorerPathway = elPath.value;
    state.explorerCategory = elCat.value;
    state.explorerQuery = elQuery.value;
    renderResults();
  };

  elOrg.addEventListener("change", apply);
  elPath.addEventListener("change", apply);
  elCat.addEventListener("change", apply);
  elQuery.addEventListener("input", apply);

  document.getElementById("clearFilters").addEventListener("click", () => {
    state.explorerOrganelle = ""; state.explorerPathway = ""; state.explorerCategory = ""; state.explorerQuery = "";
    elOrg.value = ""; elPath.value = ""; elCat.value = ""; elQuery.value = "";
    renderResults();
  });

  renderResults();
}

function renderResults() {
  const grid = document.getElementById("diseaseGrid");
  const count = document.getElementById("resultsCount");
  if (!grid) return;

  const q = state.explorerQuery.trim().toLowerCase();
  const results = DISEASES.filter((d) => {
    if (state.explorerOrganelle && d.organelleId !== state.explorerOrganelle) return false;
    if (state.explorerPathway && d.pathwayId !== state.explorerPathway) return false;
    if (state.explorerCategory && d.category !== state.explorerCategory) return false;
    if (q) {
      const path = PATHWAY_BY_ID[d.pathwayId];
      const hay = [d.name, d.gene, d.protein, d.summary, ...(d.aka || []), path?.name || "", ...(d.mechanism.accumulate || [])]
        .join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  count.textContent = `${results.length} ${results.length === 1 ? "resultado" : "resultados"}`;

  if (!results.length) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        ${icon("search")}
        <h3>Sin resultados</h3>
        <p>Prueba con otro término o elimina algún filtro para ampliar la búsqueda.</p>
      </div>`;
    return;
  }

  grid.innerHTML = results.map((d) => {
    const org = organelleOf(d.organelleId);
    const path = PATHWAY_BY_ID[d.pathwayId];
    const cat = CATEGORIES[d.category];
    return `
      <a class="card disease-card" href="#/disease/${d.id}">
        <div class="dc-head">
          <h3>${d.name}</h3>
          <span class="tag tone-violet">${d.inheritance}</span>
        </div>
        <p class="summary">${d.summary}</p>
        <div class="dc-tags">
          <span class="tag tone-neutral"><span class="dot" style="background:${org?.color || "#93aecb"}"></span>${org?.shortName || d.organelleId}</span>
          <span class="tag tone-${cat?.tone || "faint"}">${cat?.label || "EIM"}</span>
          <span class="tag tone-blue">${d.gene.split(" ")[0]}</span>
        </div>
        <div class="dc-path">${icon("map")} ${path?.name || "Ruta no asignada"}</div>
        <div class="dc-foot"><span class="btn block primary sm">${icon("flask")} Abrir ficha</span></div>
      </a>`;
  }).join("");
}

/* ---------------- Vista: ficha de enfermedad ---------------- */
function renderDisease(id) {
  const d = DISEASE_BY_ID[id];
  if (!d) { location.hash = "#/explorer"; return; }
  const org = organelleOf(d.organelleId);
  const path = PATHWAY_BY_ID[d.pathwayId];
  const cat = CATEGORIES[d.category];

  const listBlock = (title, items, dotClass = "dot-coral") => `
    <div class="acc-block">
      <h3>${title}</h3>
      <ul>${items.map((i) => `<li><span class="dot ${dotClass}"></span>${i}</li>`).join("")}</ul>
    </div>`;

  const acc = (opts) => `
    <section class="card acc ${opts.open ? "open" : ""}">
      <h2 class="acc-title">
        <button class="acc-head" aria-expanded="${!!opts.open}">
          <span class="acc-icon ${opts.iconTone || ""}">${icon(opts.iconName)}</span>
          <span class="acc-titles"><span class="acc-title-text">${opts.title}</span><span class="acc-sub">${opts.sub}</span></span>
          ${icon("chevron-down", "chev")}
        </button>
      </h2>
      <div class="acc-body"><div class="acc-inner"><div class="acc-content">${opts.content}</div></div></div>
    </section>`;

  app.innerHTML = `
  <div class="page">
    <div class="container">
      <div class="breadcrumbs">
        <a class="crumb" href="#/atlas">${icon("arrow-left")} Atlas</a>
        ${path ? `<a class="crumb" href="#/pathway/${path.id}">${icon("map")} ${path.shortName}</a>` : ""}
        <span class="crumb current">Ficha</span>
      </div>

      <div class="disease-head">
        <div class="tags">
          ${cat ? `<span class="tag tone-${cat.tone}">${cat.label}</span>` : ""}
          <span class="tag tone-violet">${d.inheritance}</span>
        </div>
        <h1>${d.name}</h1>
        <p class="aka"><strong>También conocida como:</strong> ${d.aka.join(" · ")}</p>
      </div>
      <p class="disease-summary">${d.summary}</p>

      <div class="disease-layout">
        <div>
          <div class="acc-list">
            ${acc({
              title: "Mecanismo bioquímico", sub: "Cómo se altera la ruta metabólica", iconName: "flask", open: true,
              content: `
                <div class="acc-block"><h3>Función normal de la enzima</h3><p>${d.mechanism.normal}</p></div>
                <div class="acc-block"><h3>Tipo de alteración</h3><p>${d.mechanism.alteration}</p></div>
                <div class="two-col">
                  ${listBlock("Sustratos que pueden acumularse", d.mechanism.accumulate, "dot-amber")}
                  ${listBlock("Productos que pueden disminuir", d.mechanism.decrease, "dot-teal")}
                </div>
                ${listBlock("Consecuencias metabólicas principales", d.mechanism.consequences, "dot-coral")}`
            })}

            ${acc({
              title: "Diagnóstico", sub: "Biomarcadores, muestras y pruebas", iconName: "search", iconTone: "violet",
              content: `
                ${listBlock("Biomarcadores relevantes", d.diagnosis.biomarkers, "dot-teal")}
                ${listBlock("Muestras", d.diagnosis.samples, "dot-violet")}
                <div class="acc-block"><h3>Pruebas de cribado</h3><p>${d.diagnosis.screening}</p></div>
                ${listBlock("Pruebas confirmatorias", d.diagnosis.confirmatory, "dot-teal")}
                <div class="acc-block"><h3>Pruebas enzimáticas o genéticas</h3><p>${d.diagnosis.enzymatic}</p></div>
                <p class="mini-note">Los valores de referencia concretos dependen del laboratorio y deben validarse localmente.</p>`
            })}

            ${acc({
              title: "Tratamiento", sub: "Estrategias terapéuticas y seguimiento", iconName: "activity", iconTone: "amber",
              content: `
                ${listBlock("Principales estrategias terapéuticas", d.treatment.strategies, "dot-coral")}
                <div class="acc-block"><h3>Manejo dietético</h3><p>${d.treatment.diet}</p></div>
                <div class="acc-block"><h3>Cofactores o suplementos (si están indicados)</h3><p>${d.treatment.cofactors}</p></div>
                ${listBlock("Seguimiento clínico", d.treatment.followup, "dot-teal")}`
            })}

            ${acc({
              title: "Fuentes", sub: `${d.sources.length} referencias verificables`, iconName: "book",
              content: `<div class="sources">${d.sources.map((s) => `
                <div class="source">
                  <span class="src-badge">${s.label}</span>
                  <span class="src-main"><span class="src-title">${s.title}</span><span class="src-ref">${s.ref}</span></span>
                </div>`).join("")}</div>`
            })}
          </div>

          <div class="warning">
            ${icon("alert")}
            <p><strong>Aviso educativo.</strong> Este atlas es un prototipo formativo. La información está simplificada y puede no reflejar todos los matices clínicos. No sustituye la valoración, el diagnóstico ni el tratamiento por parte de profesionales sanitarios.</p>
          </div>
        </div>

        <aside class="side-panel">
          <div class="card id-card">
            <span class="section-label">Identificación</span>
            <div class="id-list">
              <div class="id-row"><span class="section-label">Gen implicado</span><strong class="mono">${d.gene}</strong></div>
              <div class="id-row"><span class="section-label">Enzima / proteína</span><strong>${d.protein}</strong></div>
              <div class="id-row"><span class="section-label">Número EC</span><strong class="mono">${d.ec || "No aplica"}</strong></div>
              <div class="id-row"><span class="section-label">Compartimento celular</span><strong>${org?.name || "—"}</strong></div>
              <div class="id-row"><span class="section-label">Ruta metabólica</span><strong>${path?.name || "—"}</strong></div>
              <div class="id-row"><span class="section-label">Herencia</span><strong>${d.inheritance}</strong></div>
            </div>
            <div class="actions">
              ${path ? `<a class="btn primary block" href="#/pathway/${path.id}" data-focus-disease="${d.id}">${icon("map")} Ver en el mapa metabólico</a>` : ""}
              ${org ? `<a class="btn block" href="#/atlas" data-select-organelle="${org.id}">${icon("atlas")} Ver organelo</a>` : ""}
            </div>
          </div>

          <div class="card validation-card">
            <h3>${icon("alert")} Requiere validación</h3>
            <ul>${d.validation.map((v) => `<li>${v}</li>`).join("")}</ul>
          </div>

          <p class="side-disclaimer">Recurso educativo. No sustituye la valoración de profesionales sanitarios.</p>
        </aside>
      </div>
    </div>
  </div>`;
}

/* ---------------- Vista: documentación académica ---------------- */
let docObserver = null;

function renderDocPage(kind) {
  const isSupport = kind === "sustento";
  const sections = isSupport ? SUPPORT_SECTIONS : MANUAL_SECTIONS;
  const title = isSupport ? "Sustento científico" : "Manual de uso";
  const eyebrow = isSupport ? "Documentación académica" : "Guía de uso";
  const lede = isSupport
    ? "Justificación, objetivos, contenido científico, funcionalidades, evidencia de funcionamiento, limitaciones y referencias de la herramienta."
    : "Guía paso a paso para recorrer el metaboloma, interpretar los diagramas, filtrar enfermedades, consultar las fichas y usar el quiz por rutas sin ayuda externa.";
  const download = isSupport ? "docs/Documento_Sustento_Cientifico.md" : "docs/Manual_de_Uso.md";
  const downloadName = isSupport ? "Documento_Sustento_Cientifico.md" : "Manual_de_Uso.md";
  const otherHref = isSupport ? "#/manual" : "#/sustento";
  const otherLabel = isSupport ? "Manual de uso" : "Sustento científico";
  const briefLink = isSupport ? "" : `<a class="btn" href="docs/Manual_Breve_de_Uso.md" download="Manual_Breve_de_Uso.md">${icon("download")} Manual breve (1 página)</a>`;

  app.innerHTML = `
  <div class="page doc-page">
    <div class="container">
      <div class="breadcrumbs">
        <a class="crumb" href="#/atlas">${icon("arrow-left")} Atlas celular</a>
        <span class="crumb current">${title}</span>
      </div>

      <div class="page-head doc-head">
        <span class="eyebrow">${icon(isSupport ? "book" : "compass")} ${eyebrow}</span>
        <h1>${title}</h1>
        <p class="lede">${lede}</p>
        <div class="doc-meta">
          <span><strong>Versión</strong> ${DOC_VERSION}</span>
          <span><strong>Actualizado</strong> ${DOC_DATE}</span>
          <span><strong>Estructura</strong> ${sections.length} secciones</span>
          <span><strong>Formato</strong> documento abierto</span>
        </div>
        <div class="doc-actions">
          <button class="btn primary" type="button" data-doc-print>${icon("printer")} Imprimir / guardar PDF</button>
          <a class="btn" href="${download}" download="${downloadName}">${icon("download")} Descargar Markdown</a>
          ${briefLink}
          <a class="btn" href="${otherHref}">${icon(isSupport ? "compass" : "book")} ${otherLabel}</a>
        </div>
      </div>

      <div class="doc-layout">
        <aside class="doc-toc card" aria-label="Contenido del documento">
          <span class="section-label">Contenido</span>
          <div class="doc-toc-list">
            ${sections.map((s, i) => `
              <button type="button" class="doc-toc-link ${i === 0 ? "active" : ""}" data-doc-scroll="${s.id}">
                <span>${s.num}</span>${s.title}
              </button>`).join("")}
          </div>
          <div class="doc-toc-foot">
            <span class="mini-note">Documento educativo. No sustituye guías clínicas ni la valoración profesional.</span>
          </div>
        </aside>

        <article class="doc-body">
          ${sections.map((s) => `
            <section class="doc-section" id="${s.id}">
              <div class="doc-sec-head">
                <span class="doc-num">${s.num}</span>
                <h2>${s.title}</h2>
              </div>
              <div class="doc-prose">${s.body()}</div>
            </section>`).join("")}

          <div class="doc-end">
            ${icon("shield")}
            <div>
              <strong>Recurso educativo y trazable</strong>
              <p>La información está simplificada y cuenta con referencias verificables. Antes de reutilizarla, comprueba la versión vigente de las fuentes y consulta a profesionales sanitarios.</p>
              <div class="doc-actions doc-actions-bottom">
                <a class="btn" href="#/atlas">${icon("atlas")} Volver al atlas</a>
                <a class="btn" href="${otherHref}">${icon(isSupport ? "compass" : "book")} ${otherLabel}</a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>`;

  if (docObserver) docObserver.disconnect();
  const links = [...document.querySelectorAll("[data-doc-scroll]")];
  if ("IntersectionObserver" in window) {
    docObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.toggle("active", link.dataset.docScroll === entry.target.id));
        }
      });
    }, { rootMargin: "-104px 0px -64% 0px", threshold: 0 });
    document.querySelectorAll(".doc-section").forEach((sec) => docObserver.observe(sec));
  }
}

/* ---------------- Vista: quiz por rutas ---------------- */
let quizState = { routeId: null, started: false, index: 0, answers: [], completed: false };
let activeQuiz = [];
let activeQuizRoute = null;

function resetQuizState(started = false) {
  quizState.started = started;
  quizState.index = 0;
  quizState.answers = new Array(activeQuiz.length).fill(null);
  quizState.completed = false;
}

function quizScore() {
  return quizState.answers.reduce((total, answer, index) =>
    total + (answer === activeQuiz[index]?.correct ? 1 : 0), 0);
}

function focusQuizElement(id) {
  const element = document.getElementById(id);
  if (element) element.focus();
}

function setActiveQuizRoute(routeId) {
  const route = QUIZ_ROUTE_META.find((item) => item.id === routeId);
  if (!route) return null;
  if (quizState.routeId !== route.id) {
    quizState.routeId = route.id;
    activeQuiz = route.questions || [];
    activeQuizRoute = route;
    resetQuizState(false);
  } else {
    activeQuiz = route.questions || [];
    activeQuizRoute = route;
  }
  return route;
}

function clearActiveQuiz() {
  quizState.routeId = null;
  quizState.started = false;
  quizState.index = 0;
  quizState.answers = [];
  quizState.completed = false;
  activeQuiz = [];
  activeQuizRoute = null;
}

function renderQuiz(routeMeta = null) {
  if (!routeMeta) {
    clearActiveQuiz();
  } else if (!setActiveQuizRoute(routeMeta.id)) {
    location.hash = "#/quiz";
    return;
  }

  const route = routeMeta ? activeQuizRoute : null;
  const diseaseCount = route ? route.diseases.length : 0;
  const diseaseLabel = diseaseCount === 1
    ? "la enfermedad de esta ruta"
    : `las ${diseaseCount} enfermedades ${route?.relatedOnly ? "relacionadas" : "de esta ruta"}`;
  const lede = route
    ? `${QUIZ_PER_ROUTE} preguntas de opción múltiple sobre ${diseaseLabel}, con retroalimentación inmediata y revisión final.`
    : `Elige una de las ${QUIZ_ROUTE_META.length} rutas metabólicas. Cada una tiene ${QUIZ_PER_ROUTE} preguntas sobre sus enfermedades, con retroalimentación inmediata.`;

  app.innerHTML = `
  <div class="page quiz-page">
    <div class="container quiz-container">
      <div class="page-head">
        <span class="eyebrow">${icon("quiz")} Actividad de retroalimentación</span>
        ${route ? `<a class="quiz-back-link" href="#/quiz">${icon("arrow-left")} Ver todas las rutas</a>` : ""}
        <h1>${route ? `Quiz: ${route.name}` : "Quiz por rutas"}</h1>
        <p class="lede">${lede}</p>
      </div>
      <div id="quizMount"></div>
    </div>
  </div>`;

  if (route) renderQuizContent();
  else renderQuizLanding();
}

function renderQuizLanding() {
  const mount = document.getElementById("quizMount");
  if (!mount) return;

  const cards = QUIZ_ROUTE_META.map((route) => {
    const organelle = ORGANELLE_BY_ID[route.organelleId];
    const names = route.diseases.map((disease) => disease.name);
    const preview = names.slice(0, 3).join(" · ") + (names.length > 3 ? ` · +${names.length - 3} más` : "");
    return `
      <a class="card quiz-route-card" href="#/quiz/${route.id}">
        <div class="quiz-route-top">
          <span class="quiz-route-org"><span class="dot" style="background:${organelle?.color || "var(--turquoise)"}"></span>${organelle?.shortName || "Ruta"}</span>
          <span class="quiz-route-count">${QUIZ_PER_ROUTE}</span>
        </div>
        <h2>${route.name}</h2>
        <p>${preview || "Enfermedades relacionadas con esta ruta"}</p>
        ${route.relatedOnly ? `<span class="quiz-route-flag">Enfermedades relacionadas</span>` : ""}
        <span class="quiz-route-open">${icon("arrow-right")} Comenzar quiz</span>
      </a>`;
  }).join("");

  mount.innerHTML = `
    <section class="card quiz-landing" aria-labelledby="quizRoutesTitle">
      <div class="quiz-landing-head">
        <div>
          <span class="eyebrow">${QUIZ_ROUTE_META.length} rutas · ${QUIZ_PER_ROUTE} preguntas por ruta</span>
          <h2 id="quizRoutesTitle">Elige una ruta metabólica</h2>
          <p>Cada ruta reúne ${QUIZ_PER_ROUTE} preguntas sobre sus enfermedades: genes, proteínas, biomarcadores, mecanismos, diagnóstico y tratamiento. Las preguntas se generan a partir de las fichas del atlas.</p>
        </div>
        <div class="quiz-landing-stats" aria-label="Alcance del quiz">
          <div><strong>${QUIZ_ROUTE_META.length}</strong><span>rutas</span></div>
          <div><strong>${QUIZ_PER_ROUTE}</strong><span>preguntas por ruta</span></div>
          <div><strong>${QUIZ_TOTAL}</strong><span>preguntas en total</span></div>
        </div>
      </div>
    </section>
    <div class="quiz-route-grid">${cards}</div>
    <p class="quiz-note">${icon("info")} La glucólisis no tiene una enfermedad primaria en el atlas; su quiz utiliza enfermedades que alteran el flujo glucolítico, el glucógeno o la oxidación del piruvato. Actividad educativa: no sustituye la evaluación clínica.</p>`;
}

function renderQuizIntro() {
  const route = activeQuizRoute;
  const diseases = route.diseases;
  const diseaseTags = diseases
    .map((disease) => `<span class="quiz-disease-tag">${disease.name}</span>`)
    .join("");
  return `
    <section class="card quiz-intro quiz-route-intro" aria-labelledby="quizIntroTitle">
      <div class="quiz-intro-icon">${icon("quiz")}</div>
      <span class="eyebrow">${QUIZ_PER_ROUTE} preguntas · ${diseases.length} ${diseases.length === 1 ? "enfermedad" : "enfermedades"}</span>
      <h2 id="quizIntroTitle">Pon a prueba esta ruta</h2>
      <p>Responde ${QUIZ_PER_ROUTE} preguntas sobre las enfermedades de esta ruta. Cada respuesta recibe retroalimentación inmediata y un enlace a la ficha correspondiente.</p>
      <div class="quiz-disease-list" aria-label="Enfermedades incluidas">${diseaseTags}</div>
      ${route.relatedOnly ? `<p class="quiz-related-note">${icon("info")} Esta ruta no tiene una enfermedad primaria en el atlas. Las preguntas se centran en enfermedades relacionadas con su flujo metabólico.</p>` : ""}
      <div class="quiz-intro-stats">
        <div><strong>${QUIZ_PER_ROUTE}</strong><span>preguntas</span></div>
        <div><strong>${diseases.length}</strong><span>${diseases.length === 1 ? "enfermedad" : "enfermedades"}</span></div>
        <div><strong>∞</strong><span>intentos</span></div>
      </div>
      <div class="quiz-intro-actions">
        <button class="btn primary" type="button" data-quiz-start>${icon("bolt")} Comenzar esta ruta</button>
        <a class="btn" href="#/pathway/${route.id}">${icon("map")} Ver la ruta</a>
        <a class="btn" href="#/quiz">${icon("arrow-left")} Elegir otra ruta</a>
      </div>
      <p class="quiz-note">${icon("info")} Las preguntas se basan en las fichas del atlas. Actividad educativa: no sustituye la evaluación clínica ni el estudio de las fuentes originales.</p>
    </section>`;
}

function renderQuizContent() {
  const mount = document.getElementById("quizMount");
  if (!mount || !activeQuizRoute) return;

  if (!quizState.started) {
    mount.innerHTML = renderQuizIntro();
    return;
  }

  if (quizState.completed) {
    mount.innerHTML = renderQuizResult();
    return;
  }

  const total = activeQuiz.length;
  const question = activeQuiz[quizState.index];
  const answer = quizState.answers[quizState.index];
  const answered = answer !== null && answer !== undefined;
  const isLast = quizState.index === total - 1;
  const progress = ((quizState.index + 1) / total) * 100;

  const options = question.options.map((option, index) => {
    const selected = answer === index;
    const correct = index === question.correct;
    const classes = ["quiz-option"];
    if (answered && correct) classes.push("is-correct");
    if (answered && selected && !correct) classes.push("is-wrong");
    const mark = answered && correct
      ? `<span class="quiz-mark is-ok">${icon("check")}</span>`
      : answered && selected && !correct
        ? `<span class="quiz-mark is-bad">${icon("x")}</span>`
        : "";
    return `
      <button class="${classes.join(" ")}" type="button" data-quiz-option="${index}" ${answered ? "disabled" : ""} aria-pressed="${selected}">
        <span class="quiz-letter">${String.fromCharCode(65 + index)}</span>
        <span class="quiz-option-text">${option}</span>
        ${mark}
      </button>`;
  }).join("");

  const feedback = answered ? `
    <div class="quiz-feedback ${answer === question.correct ? "is-ok" : "is-bad"}" id="quizFeedback" role="status" tabindex="-1">
      <span class="quiz-feedback-icon">${icon(answer === question.correct ? "check" : "x")}</span>
      <div>
        <strong>${answer === question.correct ? "¡Correcto!" : "Todavía no"}</strong>
        <p>${question.explanation}</p>
        <a class="quiz-feedback-link" href="${question.link.href}">${question.link.label} ${icon("arrow-right")}</a>
      </div>
    </div>` : "";

  mount.innerHTML = `
    <div class="quiz-progress" aria-label="Progreso del quiz">
      <div class="quiz-progress-meta">
        <span>Pregunta ${quizState.index + 1} de ${total}</span>
        <span>${activeQuizRoute.shortName}</span>
      </div>
      <div class="quiz-progress-track" role="progressbar" aria-label="Pregunta ${quizState.index + 1} de ${total}" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${quizState.index + 1}">
        <span style="width:${progress}%"></span>
      </div>
    </div>
    <section class="card quiz-card" aria-labelledby="quizQuestion">
      <span class="section-label">${question.typeLabel} · ${question.topic}</span>
      <h2 id="quizQuestion" tabindex="-1">${question.question}</h2>
      <div class="quiz-options" role="group" aria-labelledby="quizQuestion">${options}</div>
      ${feedback}
      <div class="quiz-footer">
        <span class="quiz-hint">${answered ? "Revisa la explicación y continúa." : "Elige una opción para ver la retroalimentación."}</span>
        ${answered ? `<button class="btn primary" type="button" data-quiz-next>${isLast ? "Ver resultado" : "Siguiente pregunta"} ${icon("arrow-right")}</button>` : ""}
      </div>
    </section>`;
}

function renderQuizResult() {
  const total = activeQuiz.length;
  const score = quizScore();
  const percentage = Math.round((score / total) * 100);
  const message = score >= 18
    ? "Excelente dominio de esta ruta metabólica."
    : score >= 14
      ? "Muy buen trabajo: tienes una base sólida."
      : score >= 10
        ? "Vas por buen camino; conviene repasar algunos puntos."
        : "Este es un buen punto de partida. Repasa las explicaciones y vuelve a intentarlo.";

  const review = activeQuiz.map((question, index) => {
    const answer = quizState.answers[index];
    const correct = answer === question.correct;
    return `
      <li class="quiz-review-item ${correct ? "is-ok" : "is-bad"}">
        <span class="quiz-review-status">${icon(correct ? "check" : "x")}</span>
        <div>
          <strong>${String(index + 1).padStart(2, "0")}. ${question.question}</strong>
          <span>${correct ? "Respuesta correcta" : `Respuesta correcta: ${question.options[question.correct]}`}</span>
          <a href="${question.link.href}">${question.link.label} ${icon("arrow-right")}</a>
        </div>
      </li>`;
  }).join("");

  return `
    <section class="card quiz-result" aria-labelledby="quizResultTitle">
      <div class="quiz-score" style="--quiz-pct:${percentage}%">
        <div><strong>${score}</strong><span>/ ${total}</span></div>
      </div>
      <span class="eyebrow">Resultado · ${activeQuizRoute.name}</span>
      <h2 id="quizResultTitle" tabindex="-1">${message}</h2>
      <p>Has acertado <strong>${score} de ${total}</strong> preguntas (${percentage} %). Cada explicación enlaza con la ficha de la enfermedad para que puedas repasar el concepto.</p>
      <div class="quiz-result-actions">
        <button class="btn primary" type="button" data-quiz-restart>${icon("reset")} Repetir esta ruta</button>
        <a class="btn" href="#/quiz">${icon("quiz")} Elegir otra ruta</a>
        <a class="btn" href="#/pathway/${activeQuizRoute.id}">${icon("map")} Ver la ruta</a>
      </div>
      <h3 class="quiz-review-title">Revisión de respuestas</h3>
      <ol class="quiz-review">${review}</ol>
    </section>`;
}

function startQuiz() {
  if (!activeQuizRoute) return;

  /* La generación de cada ruta se hace bajo demanda. Si aún no está en
     memoria, se muestra un estado breve mientras se preparan las preguntas. */
  if (!activeQuiz.length) {
    const route = activeQuizRoute;
    const mount = document.getElementById("quizMount");
    if (mount) {
      mount.innerHTML = `
        <section class="card quiz-intro" role="status" aria-live="polite">
          <div class="quiz-intro-icon">${icon("quiz")}</div>
          <h2>Preparando las preguntas…</h2>
          <p>Estamos organizando las ${QUIZ_PER_ROUTE} preguntas de ${route.name} a partir de las fichas del atlas.</p>
        </section>`;
    }
    setTimeout(() => {
      if (!activeQuizRoute || activeQuizRoute.id !== route.id) return;
      activeQuiz = ensureRouteQuiz(route);
      if (!activeQuiz.length) {
        if (mount) mount.innerHTML = `<p class="quiz-note">${icon("info")} No se pudieron preparar las preguntas de esta ruta. Vuelve a intentarlo.</p>`;
        return;
      }
      resetQuizState(true);
      renderQuizContent();
      focusQuizElement("quizQuestion");
    }, 30);
    return;
  }

  resetQuizState(true);
  renderQuizContent();
  focusQuizElement("quizQuestion");
}

function answerQuiz(optionIndex) {
  const answer = quizState.answers[quizState.index];
  if (answer !== null && answer !== undefined) return;
  quizState.answers[quizState.index] = optionIndex;
  renderQuizContent();
  focusQuizElement("quizFeedback");
}

function nextQuizQuestion() {
  if (quizState.index >= activeQuiz.length - 1) {
    quizState.completed = true;
    renderQuizContent();
    focusQuizElement("quizResultTitle");
  } else {
    quizState.index += 1;
    renderQuizContent();
    focusQuizElement("quizQuestion");
  }
}

function restartQuiz() {
  startQuiz();
}

/* ---------------- Router ---------------- */
function router() {
  const raw = location.hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  const route = parts[0] || "atlas";
  const id = parts[1];
  const focus = parts[2];

  setActiveNav(route);
  window.scrollTo({ top: 0, behavior: "instant" });

  if (route === "atlas") { renderAtlas(); document.title = SITE_FULL_NAME; }
  else if (route === "pathways") { renderPathways(); document.title = `Mapa metabólico — ${SITE_NAME}`; }
  else if (route === "pathway") {
    renderPathway(id, focus || state.focusDisease);
    state.focusDisease = null;
    document.title = `${PATHWAY_BY_ID[id]?.name || "Ruta"} — ${SITE_NAME}`;
  }
  else if (route === "explorer") { renderExplorer(); document.title = `Explorador — ${SITE_NAME}`; }
  else if (route === "disease") {
    renderDisease(id);
    document.title = `${DISEASE_BY_ID[id]?.name || "Ficha"} — ${SITE_NAME}`;
  }
  else if (route === "quiz") {
    const quizRoute = id ? QUIZ_ROUTE_META.find((item) => item.id === id) : null;
    if (id && !quizRoute) { location.hash = "#/quiz"; return; }
    renderQuiz(quizRoute);
    document.title = quizRoute ? `Quiz: ${quizRoute.name} — ${SITE_NAME}` : `Quiz por rutas — ${SITE_NAME}`;
  }
  else if (route === "sustento") { renderDocPage("sustento"); document.title = `Sustento científico — ${SITE_NAME}`; }
  else if (route === "manual") { renderDocPage("manual"); document.title = `Manual de uso — ${SITE_NAME}`; }
  else { location.hash = "#/atlas"; }

  if (focusMainAfterRoute) {
    focusMainAfterRoute = false;
    app.focus({ preventScroll: true });
  }
}

/* ---------------- Búsqueda global ---------------- */
function buildSearchIndex() {
  return [
    ...DISEASES.map((d) => ({
      type: "Enfermedad", title: d.name, sub: `${d.gene} · ${PATHWAY_BY_ID[d.pathwayId]?.name || ""}`,
      href: `#/disease/${d.id}`, iconName: "flask",
      hay: [d.name, d.gene, d.protein, ...(d.aka || []), ...(d.mechanism.accumulate || [])].join(" ").toLowerCase()
    })),
    ...PATHWAYS.map((p) => ({
      type: "Ruta metabólica", title: p.name, sub: p.summary,
      href: `#/pathway/${p.id}`, iconName: "map",
      hay: [p.name, p.summary, p.shortName, ...p.alterationPoints, ...p.accumulated].join(" ").toLowerCase()
    })),
    ...ORGANELLES.map((o) => ({
      type: "Organelo", title: o.name, sub: o.tagline,
      href: `#/atlas`, iconName: "atlas", organelle: o.id,
      hay: [o.name, o.description, o.tagline].join(" ").toLowerCase()
    })),
    {
      type: "Actividad", title: "Quiz por rutas", sub: `${QUIZ_ROUTE_META.length} rutas · ${QUIZ_PER_ROUTE} preguntas por ruta`,
      href: "#/quiz", iconName: "quiz",
      hay: "quiz actividad repaso autoevaluación retroalimentación preguntas rutas enfermedades".toLowerCase()
    }
  ];
}
const SEARCH_INDEX = buildSearchIndex();
let searchCursor = -1;
let searchReturnFocus = null;
let focusMainAfterRoute = false;

function setSearchCursor(index) {
  const results = [...document.querySelectorAll(".search-result")];
  results.forEach((el, i) => el.classList.toggle("selected", i === index));
  if (results[index]) results[index].scrollIntoView({ block: "nearest" });
  searchCursor = index;
}

function renderSearchResults(query) {
  const box = document.getElementById("searchResults");
  const q = query.trim().toLowerCase();
  searchCursor = -1;
  if (!q) {
    box.innerHTML = `<div class="search-empty">Escribe una enfermedad, un gen, una enzima o una ruta metabólica.</div>`;
    return;
  }
  const found = SEARCH_INDEX.filter((item) => item.hay.includes(q));
  if (!found.length) {
    box.innerHTML = `<div class="search-empty">No se encontraron coincidencias para “${esc(query)}”.</div>`;
    return;
  }
  const grouped = ["Enfermedad", "Ruta metabólica", "Organelo", "Actividad"].map((type) => {
    const items = found.filter((i) => i.type === type).slice(0, 5);
    if (!items.length) return "";
    return `<div class="search-group">${type}</div>` + items.map((item) => `
      <button class="search-result" data-href="${item.href}" data-organelle="${item.organelle || ""}">
        <span class="sr-icon">${icon(item.iconName)}</span>
        <span class="sr-main"><span class="sr-title">${item.title}</span><span class="sr-sub">${item.sub}</span></span>
      </button>`).join("");
  }).join("");
  box.innerHTML = grouped;
}

function openSearch() {
  const overlay = document.getElementById("searchOverlay");
  searchReturnFocus = document.activeElement;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  const input = document.getElementById("searchInput");
  input.value = "";
  renderSearchResults("");
  setTimeout(() => input.focus(), 60);
}
function closeSearch(restoreFocus = true) {
  const overlay = document.getElementById("searchOverlay");
  if (!overlay.classList.contains("open")) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (restoreFocus && searchReturnFocus && typeof searchReturnFocus.focus === "function") searchReturnFocus.focus();
  searchReturnFocus = null;
}

function initGlobalUI() {
  document.getElementById("skipLink")?.addEventListener("click", () => {
    const main = document.getElementById("app");
    main.focus();
    main.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ---------------- Eventos globales ---------------- */
initGlobalUI();

document.addEventListener("click", (e) => {
  const searchResult = e.target.closest(".search-result");
  if (searchResult) {
    if (searchResult.dataset.organelle) state.selectedOrganelle = searchResult.dataset.organelle;
    closeSearch(false);
    focusMainAfterRoute = true;
    location.hash = searchResult.dataset.href.replace(/^#/, "");
    return;
  }
  const orgFilter = e.target.closest("[data-organelle-filter]");
  if (orgFilter) state.explorerOrganelle = orgFilter.dataset.organelleFilter;
  const focusDis = e.target.closest("[data-focus-disease]");
  if (focusDis) state.focusDisease = focusDis.dataset.focusDisease;
  const selOrg = e.target.closest("[data-select-organelle]");
  if (selOrg) state.selectedOrganelle = selOrg.dataset.selectOrganelle;
  const accHead = e.target.closest(".acc-head");
  if (accHead) {
    const acc = accHead.closest(".acc");
    const isOpen = acc.classList.toggle("open");
    accHead.setAttribute("aria-expanded", String(isOpen));
  }
  const docLink = e.target.closest("[data-doc-scroll]");
  if (docLink) {
    const target = document.getElementById(docLink.dataset.docScroll);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelectorAll("[data-doc-scroll]").forEach((b) => b.classList.toggle("active", b === docLink));
    return;
  }
  const quizStart = e.target.closest("[data-quiz-start]");
  if (quizStart) { startQuiz(); return; }
  const quizOption = e.target.closest("[data-quiz-option]");
  if (quizOption) { answerQuiz(Number(quizOption.dataset.quizOption)); return; }
  const quizNext = e.target.closest("[data-quiz-next]");
  if (quizNext) { nextQuizQuestion(); return; }
  const quizRestart = e.target.closest("[data-quiz-restart]");
  if (quizRestart) { restartQuiz(); return; }
  const printBtn = e.target.closest("[data-doc-print]");
  if (printBtn) { window.print(); return; }
});

document.querySelectorAll(".main-nav button, .mobile-nav button").forEach((btn) => {
  btn.addEventListener("click", () => {
    location.hash = `#/${btn.dataset.route}`;
    document.getElementById("mobileNav").classList.remove("open");
  });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mobileNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
  document.getElementById("menuToggle").setAttribute("aria-label", open ? "Cerrar menú de navegación" : "Abrir menú de navegación");
});

document.getElementById("searchTrigger").addEventListener("click", openSearch);
document.getElementById("searchClose").addEventListener("click", closeSearch);
document.getElementById("searchInput").addEventListener("input", (e) => renderSearchResults(e.target.value));
document.getElementById("searchOverlay").addEventListener("click", (e) => {
  if (e.target.id === "searchOverlay") closeSearch();
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); return; }
  if (e.key === "Escape") {
    const nav = document.getElementById("mobileNav");
    const menuWasOpen = nav.classList.contains("open");
    closeSearch();
    if (menuWasOpen) {
      nav.classList.remove("open");
      const menuToggle = document.getElementById("menuToggle");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
      menuToggle.focus();
    }
    return;
  }

  const overlay = document.getElementById("searchOverlay");
  if (overlay.classList.contains("open")) {
    const results = [...overlay.querySelectorAll(".search-result")];

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSearchCursor(searchCursor >= results.length - 1 ? 0 : searchCursor + 1);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSearchCursor(searchCursor <= 0 ? results.length - 1 : searchCursor - 1);
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      (results[searchCursor] || results[0])?.click();
      return;
    }
    if (e.key === "Tab") {
      const focusables = [...overlay.querySelectorAll("button, input, [href], [tabindex]:not([tabindex='-1'])")]
        .filter((el) => el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    return;
  }

  if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    e.preventDefault(); openSearch();
  }
});

window.addEventListener("hashchange", router);

updateCounts();
router();
