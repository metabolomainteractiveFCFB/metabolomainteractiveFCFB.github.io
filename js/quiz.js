/* ============================================================
   METABOLOMA INTERACTIVO — Actividad de retroalimentación
   Quiz por rutas: 20 preguntas por cada ruta metabólica.
   Las preguntas se construyen de forma determinista a partir de
   las fichas de enfermedad del atlas.
   ============================================================ */

const QUIZ_PER_ROUTE = 20;

/* La glucólisis no tiene una enfermedad primaria en el atlas.
   Para completar sus 20 preguntas se usan enfermedades que alteran
   el flujo glucolítico, el glucógeno o la oxidación del piruvato. */
const QUIZ_RELATED_DISEASE_IDS = {
  glycolysis: ["gsd1", "gsd3", "mcardle", "pdh", "leigh", "pompe"]
};

function quizText(value) {
  if (Array.isArray(value)) {
    const item = value.find((entry) => typeof entry === "string" && entry.trim());
    return item ? item.trim() : "";
  }
  return typeof value === "string" ? value.trim() : "";
}

function quizList(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => (typeof entry === "string" ? entry.trim() : "")).filter(Boolean);
  }
  const text = quizText(value);
  return text ? [text] : [];
}

function quizNth(value, index) {
  const list = quizList(value);
  return list[index] ? [list[index]] : [];
}

const quizNormalizeCache = new Map();
const quizTokensCache = new Map();

function quizNormalize(value) {
  const raw = String(value || "");
  if (quizNormalizeCache.has(raw)) return quizNormalizeCache.get(raw);
  const normalized = raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.;]+$/, "")
    .trim();
  quizNormalizeCache.set(raw, normalized);
  return normalized;
}

function quizUnique(values) {
  const seen = new Set();
  return values.filter((value) => {
    const key = quizNormalize(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function quizInheritance(disease) {
  const raw = quizText(disease.inheritance);
  if (/ligada al x/i.test(raw)) return "Ligada al X";
  if (/heterog[eé]nea/i.test(raw)) return "Herencia heterogénea (mitocondrial o nuclear)";
  return raw;
}

function quizOrganelleName(disease) {
  return quizText(ORGANELLE_BY_ID[disease.organelleId]?.name) || quizText(disease.organelleId);
}

function quizPathwayName(disease) {
  return quizText(PATHWAY_BY_ID[disease.pathwayId]?.name) || quizText(disease.pathwayId);
}

function quizHash(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function quizShuffle(items, seed) {
  const copy = [...items];
  let state = seed >>> 0;
  for (let index = copy.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const swap = state % (index + 1);
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function quizDiseaseLabel(disease) {
  return `«${disease.name}»`;
}

function quizClean(value) {
  return String(value || "").trim().replace(/[.;:]+$/, "");
}

function quizExplain(disease, answer) {
  return `La respuesta correcta es: ${quizClean(answer)}. ${disease.summary}`;
}

function quizTokens(value) {
  const ignored = new Set(["de", "del", "la", "el", "los", "las", "y", "o", "en", "con", "para", "por", "un", "una", "al", "a", "que", "se"]);
  const normalized = quizNormalize(value);
  if (quizTokensCache.has(normalized)) return quizTokensCache.get(normalized);
  const tokens = new Set(normalized
    .replace(/[^a-z0-9%]+/g, " ")
    .split(/\s+/)
    .filter((token) => token && !ignored.has(token)));
  quizTokensCache.set(normalized, tokens);
  return tokens;
}

function quizSimilarity(first, second) {
  const a = quizTokens(first);
  const b = quizTokens(second);
  if (!a.size || !b.size) return { max: 0, min: 0 };
  let intersection = 0;
  a.forEach((token) => {
    if (b.has(token)) intersection += 1;
  });
  return {
    max: intersection / Math.max(a.size, b.size),
    min: intersection / Math.min(a.size, b.size)
  };
}

function quizTokenOverlap(first, second) {
  const a = quizTokens(first);
  const b = quizTokens(second);
  if (!a.size || !b.size) return false;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  return [...small].every((token) => large.has(token));
}

/* Cada tipo produce una pregunta distinta a partir de un campo de la ficha.
   values() devuelve todos los valores válidos del campo; el primero es la
   respuesta correcta y el resto sirve para evitar distractores ambiguos. */
const QUIZ_TYPE_DEFS = [
  {
    id: "gene",
    label: "Gen",
    values: (disease) => quizList(disease.gene),
    prompt: (disease) => `¿Qué gen se asocia con ${quizDiseaseLabel(disease)}?`,
    explain: quizExplain,
  },
  {
    id: "protein",
    label: "Proteína",
    values: (disease) => quizList(disease.protein),
    prompt: (disease) => `¿Qué proteína o enzima está alterada en ${quizDiseaseLabel(disease)}?`,
    explain: quizExplain,
  },
  {
    id: "inheritance",
    label: "Herencia",
    values: (disease) => [quizInheritance(disease)],
    fallbacks: ["Autosómica dominante", "Herencia mitocondrial", "Herencia digénica"],
    prompt: (disease) => `¿Qué patrón de herencia se asocia con ${quizDiseaseLabel(disease)}?`,
    explain: quizExplain,
  },
  {
    id: "organelle",
    label: "Organelo",
    values: (disease) => [quizOrganelleName(disease)],
    prompt: (disease) => `¿En qué organelo se localiza el defecto principal de ${quizDiseaseLabel(disease)}?`,
    explain: quizExplain,
  },
  {
    id: "pathway",
    label: "Ruta",
    values: (disease) => [quizPathwayName(disease)],
    prompt: (disease) => `¿A qué ruta metabólica pertenece ${quizDiseaseLabel(disease)}?`,
    explain: quizExplain,
  },
  {
    id: "biomarker",
    label: "Biomarcador",
    values: (disease) => quizList(disease.diagnosis?.biomarkers),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál es un biomarcador característico?`,
    explain: quizExplain,
  },
  {
    id: "accumulate",
    label: "Acumulación",
    values: (disease) => quizList(disease.mechanism?.accumulate),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué tiende a acumularse?`,
    explain: quizExplain,
  },
  {
    id: "decrease",
    label: "Disminución",
    values: (disease) => quizList(disease.mechanism?.decrease),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué tiende a disminuir?`,
    explain: quizExplain,
  },
  {
    id: "consequence",
    label: "Clínica",
    values: (disease) => quizList(disease.mechanism?.consequences),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál es una consecuencia clínica descrita?`,
    explain: quizExplain,
  },
  {
    id: "confirmatory",
    label: "Diagnóstico",
    values: (disease) => quizList(disease.diagnosis?.confirmatory),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué estudio se considera confirmatorio?`,
    explain: quizExplain,
  },
  {
    id: "strategy",
    label: "Tratamiento",
    values: (disease) => quizList(disease.treatment?.strategies),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué estrategia terapéutica se propone?`,
    explain: quizExplain,
  },
  {
    id: "ec",
    label: "Número EC",
    values: (disease) => {
      const ec = quizText(disease.ec);
      return ec && ec !== "—" ? [ec] : [];
    },
    prompt: (disease) => `¿Qué número EC corresponde a la enzima alterada en ${quizDiseaseLabel(disease)}?`,
    explain: quizExplain,
  },
  {
    id: "aka",
    label: "Otro nombre",
    values: (disease) => quizList(disease.aka),
    prompt: (disease) => `¿Cuál es otro nombre de ${quizDiseaseLabel(disease)}?`,
    explain: quizExplain,
  },
  {
    id: "followup",
    label: "Seguimiento",
    values: (disease) => quizList(disease.treatment?.followup),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué medida de seguimiento se recomienda?`,
    explain: quizExplain,
  },
  {
    id: "biomarker2",
    label: "Biomarcador adicional",
    values: (disease) => quizNth(disease.diagnosis?.biomarkers, 1),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál es otro biomarcador descrito?`,
    explain: quizExplain,
  },
  {
    id: "accumulate2",
    label: "Acumulación adicional",
    values: (disease) => quizNth(disease.mechanism?.accumulate, 1),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál es otro metabolito o material descrito?`,
    explain: quizExplain,
  },
  {
    id: "consequence2",
    label: "Clínica adicional",
    values: (disease) => quizNth(disease.mechanism?.consequences, 1),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál es otra consecuencia descrita?`,
    explain: quizExplain,
  },
  {
    id: "strategy2",
    label: "Tratamiento adicional",
    values: (disease) => quizNth(disease.treatment?.strategies, 1),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál es otra medida terapéutica descrita?`,
    explain: quizExplain,
  },
  {
    id: "enzymatic",
    label: "Estudio enzimático",
    values: (disease) => quizList(disease.diagnosis?.enzymatic),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué estudio enzimático se menciona?`,
    explain: quizExplain,
  },
  {
    id: "normal",
    label: "Función normal",
    values: (disease) => quizList(disease.mechanism?.normal),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál es la función normal descrita?`,
    explain: quizExplain,
  },
  {
    id: "alteration",
    label: "Defecto molecular",
    values: (disease) => quizList(disease.mechanism?.alteration),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿cuál describe el defecto molecular?`,
    explain: quizExplain,
  },
  {
    id: "diet",
    label: "Dieta",
    values: (disease) => quizList(disease.treatment?.diet),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué medida dietética se describe?`,
    explain: quizExplain,
  },
  {
    id: "screening",
    label: "Cribado",
    values: (disease) => quizList(disease.diagnosis?.screening),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué se indica sobre el cribado?`,
    explain: quizExplain,
  },
  {
    id: "cofactors",
    label: "Coadyuvante",
    values: (disease) => quizList(disease.treatment?.cofactors),
    prompt: (disease) => `Según la ficha de ${quizDiseaseLabel(disease)}, ¿qué medida coadyuvante se describe?`,
    explain: quizExplain,
  },
  {
    id: "summary",
    label: "Resumen",
    values: (disease) => quizList(disease.summary),
    prompt: (disease) => `¿Cuál enunciado resume mejor ${quizDiseaseLabel(disease)} en el atlas?`,
    explain: quizExplain,
  }
];

const QUIZ_CLINICAL_TYPES = new Set([
  "biomarker", "accumulate", "decrease", "consequence", "confirmatory",
  "strategy", "followup", "biomarker2", "accumulate2",
  "consequence2", "strategy2", "enzymatic", "normal", "alteration",
  "diet", "screening", "cofactors", "summary"
]);

const quizDiseaseValueCache = new Map();
const quizDiseaseTokenCache = new Map();
const quizDiseaseMatchCache = new Map();
const quizTypeValuesCache = new Map();

function quizTypeValues(typeDef, disease) {
  const cacheKey = `${typeDef.id}:${disease.id}`;
  if (quizTypeValuesCache.has(cacheKey)) return quizTypeValuesCache.get(cacheKey);
  const values = typeDef.values(disease);
  quizTypeValuesCache.set(cacheKey, values);
  return values;
}

function quizDiseaseValues(disease) {
  if (quizDiseaseValueCache.has(disease.id)) return quizDiseaseValueCache.get(disease.id);
  const values = new Set();
  const add = (value) => {
    const key = quizNormalize(value);
    if (key) values.add(key);
  };
  add(disease.name);
  quizList(disease.aka).forEach(add);
  QUIZ_TYPE_DEFS.forEach((typeDef) => {
    quizTypeValues(typeDef, disease).forEach(add);
  });
  quizDiseaseValueCache.set(disease.id, values);
  return values;
}

function quizDiseaseValueTokens(disease) {
  if (quizDiseaseTokenCache.has(disease.id)) return quizDiseaseTokenCache.get(disease.id);
  const entries = [...quizDiseaseValues(disease)].map((known) => known.split(" "));
  quizDiseaseTokenCache.set(disease.id, entries);
  return entries;
}

function quizIsDiseaseValue(value, disease) {
  const key = quizNormalize(value);
  if (!key) return false;
  if (quizDiseaseValues(disease).has(key)) return true;
  const cacheKey = `${disease.id}\n${key}`;
  if (quizDiseaseMatchCache.has(cacheKey)) return quizDiseaseMatchCache.get(cacheKey);
  const tokens = key.split(" ");
  const matches = quizDiseaseValueTokens(disease).some((knownTokens) => {
    const [small, large] = tokens.length <= knownTokens.length
      ? [tokens, knownTokens]
      : [knownTokens, tokens];
    return small.length > 0 && small.every((token) => large.includes(token));
  });
  quizDiseaseMatchCache.set(cacheKey, matches);
  return matches;
}

function quizDistractorsFor(typeDef, disease) {
  const typeValues = quizTypeValues(typeDef, disease);
  const correct = quizText(typeValues[0]);
  if (!correct) return null;
  const sourceKeys = new Set(typeValues.map(quizNormalize));
  const correctKey = quizNormalize(correct);
  const pool = [];

  DISEASES.forEach((other) => {
    if (other.id === disease.id) return;
    quizTypeValues(typeDef, other).forEach((value) => {
      const key = quizNormalize(value);
      if (!key || key === correctKey || sourceKeys.has(key)) return;
      if (quizIsDiseaseValue(value, disease)) return;
      if (quizTokenOverlap(correct, value)) return;
      const similarity = quizSimilarity(correct, value);
      if (similarity.max >= 0.62 || similarity.min >= 0.8) return;
      pool.push({ key, value, disease: other });
    });
  });

  const seen = new Set([correctKey]);
  const selectedValues = [correct];
  const ordered = [];
  const addGroup = (group) => {
    group.forEach((item) => {
      if (seen.has(item.key)) return;
      if (selectedValues.some((value) =>
        quizTokenOverlap(value, item.value) || quizSimilarity(value, item.value).max >= 0.8
      )) return;
      seen.add(item.key);
      selectedValues.push(item.value);
      ordered.push(item);
    });
  };

  if (QUIZ_CLINICAL_TYPES.has(typeDef.id)) {
    /* En las preguntas clínicas se evitan distractores de la misma ruta:
       dos enfermedades de una ruta comparten hallazgos y la opción podría
       ser defendible para la enfermedad preguntada. */
    addGroup(pool.filter((item) => item.disease.organelleId !== disease.organelleId));
    addGroup(pool.filter((item) => item.disease.pathwayId !== disease.pathwayId && item.disease.organelleId === disease.organelleId));
  } else {
    addGroup(pool.filter((item) => item.disease.pathwayId === disease.pathwayId));
    addGroup(pool.filter((item) => item.disease.pathwayId !== disease.pathwayId && item.disease.organelleId === disease.organelleId));
    addGroup(pool.filter((item) => item.disease.organelleId !== disease.organelleId));
  }

  const distractors = ordered.slice(0, 3).map((item) => item.value);
  const fallbacks = [...(typeDef.fallbacks || []), "Ninguna de las anteriores", "Todas las anteriores", "No se ha descrito en el atlas"];
  fallbacks.forEach((fallback) => {
    if (distractors.length >= 3) return;
    const key = quizNormalize(fallback);
    if (!key || key === correctKey || distractors.some((value) => quizNormalize(value) === key)) return;
    if (selectedValues.some((value) =>
      quizTokenOverlap(value, fallback) || quizSimilarity(value, fallback).max >= 0.8
    )) return;
    selectedValues.push(fallback);
    distractors.push(fallback);
  });
  if (distractors.length < 3) return null;

  const options = quizShuffle([correct, ...distractors.slice(0, 3)], quizHash(`${typeDef.id}:${disease.id}`));
  return {
    correct: options.findIndex((option) => option === correct),
    options
  };
}

function buildQuizQuestion(typeDef, disease) {
  const choice = quizDistractorsFor(typeDef, disease);
  if (!choice || choice.correct < 0) return null;
  const correct = choice.options[choice.correct];
  return {
    type: typeDef.id,
    typeLabel: typeDef.label,
    diseaseId: disease.id,
    diseaseName: disease.name,
    topic: disease.name,
    question: typeDef.prompt(disease),
    options: choice.options,
    correct: choice.correct,
    explanation: typeDef.explain(disease, correct),
    link: {
      href: `#/disease/${disease.id}`,
      label: `Repasar ${disease.name}`
    }
  };
}

function buildRouteQuiz(meta, routeIndex) {
  const diseases = meta.diseases;
  if (!diseases.length) return [];

  const candidatesByType = QUIZ_TYPE_DEFS.map((typeDef) => diseases
    .map((disease, diseaseIndex) => {
      const question = buildQuizQuestion(typeDef, disease);
      return question ? { disease, diseaseIndex, question, typeIndex: QUIZ_TYPE_DEFS.indexOf(typeDef) } : null;
    })
    .filter(Boolean));

  const selected = [];
  const usedTypes = new Set();
  const usage = new Map(diseases.map((disease) => [disease.id, 0]));
  const selectedKeys = new Set();

  const selectCandidate = (candidate) => {
    if (!candidate || selected.length >= QUIZ_PER_ROUTE) return false;
    const key = `${candidate.question.type}:${candidate.question.diseaseId}`;
    if (selectedKeys.has(key)) return false;
    selectedKeys.add(key);
    usedTypes.add(candidate.typeIndex);
    usage.set(candidate.disease.id, (usage.get(candidate.disease.id) || 0) + 1);
    selected.push(candidate.question);
    return true;
  };

  /* Primero garantiza al menos una pregunta por enfermedad de la ruta. */
  diseases.forEach((disease, diseaseIndex) => {
    for (let offset = 0; offset < QUIZ_TYPE_DEFS.length; offset += 1) {
      const typeIndex = (diseaseIndex + offset) % QUIZ_TYPE_DEFS.length;
      if (usedTypes.has(typeIndex)) continue;
      const candidate = candidatesByType[typeIndex].find((item) => item.disease.id === disease.id);
      if (candidate && selectCandidate(candidate)) break;
    }
  });

  /* Después recorre los tipos en orden y elige la enfermedad con menos uso. */
  for (let typeIndex = 0; typeIndex < QUIZ_TYPE_DEFS.length && selected.length < QUIZ_PER_ROUTE; typeIndex += 1) {
    if (usedTypes.has(typeIndex)) continue;
    const candidates = candidatesByType[typeIndex];
    if (!candidates.length) continue;
    const ordered = [...candidates].sort((a, b) => {
      const usageDiff = (usage.get(a.disease.id) || 0) - (usage.get(b.disease.id) || 0);
      if (usageDiff !== 0) return usageDiff;
      const offsetA = (a.diseaseIndex - routeIndex + diseases.length) % diseases.length;
      const offsetB = (b.diseaseIndex - routeIndex + diseases.length) % diseases.length;
      return offsetA - offsetB;
    });
    selectCandidate(ordered[0]);
  }

  /* Red de seguridad: si alguna ficha no tuviera suficientes campos, completa
     con preguntas adicionales de la misma ruta sin repetir tipo-enfermedad. */
  if (selected.length < QUIZ_PER_ROUTE) {
    const remaining = candidatesByType.flat().filter((candidate) => {
      const key = `${candidate.question.type}:${candidate.question.diseaseId}`;
      return !selectedKeys.has(key);
    });
    for (const candidate of remaining) {
      if (selected.length >= QUIZ_PER_ROUTE) break;
      selectCandidate(candidate);
    }
  }

  return selected.map((question, index) => ({
    ...question,
    id: `${meta.id}-q${String(index + 1).padStart(2, "0")}`,
    routeId: meta.id,
    routeName: meta.name,
    order: index + 1
  }));
}

const QUIZ_ROUTE_META = [];
const QUIZ_BANK = {};

PATHWAYS.forEach((pathway, routeIndex) => {
  const diseaseIds = pathway.diseaseIds.length
    ? pathway.diseaseIds
    : (QUIZ_RELATED_DISEASE_IDS[pathway.id] || []);
  const diseases = diseaseIds.map((id) => DISEASE_BY_ID[id]).filter(Boolean);
  const meta = {
    id: pathway.id,
    name: pathway.name,
    shortName: pathway.shortName,
    organelleId: (pathway.organelleIds && pathway.organelleIds[0]) || pathway.organelleId || "",
    relatedOnly: !pathway.diseaseIds.length,
    diseases,
    questions: []
  };
  QUIZ_ROUTE_META.push(meta);
  QUIZ_BANK[pathway.id] = meta.questions;
});

const QUIZ_TOTAL = QUIZ_ROUTE_META.length * QUIZ_PER_ROUTE;

/* Las preguntas de cada ruta se generan al abrir su quiz, no al cargar
   la portada. Así el atlas y el resto del sitio aparecen de inmediato. */
function ensureRouteQuiz(route) {
  if (!route) return [];
  if (route.questions && route.questions.length) return route.questions;
  const routeIndex = QUIZ_ROUTE_META.indexOf(route);
  route.questions = buildRouteQuiz(route, routeIndex < 0 ? 0 : routeIndex);
  QUIZ_BANK[route.id] = route.questions;
  return route.questions;
}
