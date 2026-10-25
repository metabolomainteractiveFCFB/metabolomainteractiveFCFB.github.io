/* ============================================================
   METABOLOMA INTERACTIVO — Rutas adicionales en preparación
   No se cargan en index.html: sus enfermedades aún no forman
   parte de la versión estable de 40 fichas integradas.
   ============================================================ */

const EXTRA_PATHWAYS = [
  {
    id: "bcaa-metabolism",
    name: "Metabolismo de aminoácidos de cadena ramificada",
    shortName: "BCAA",
    organelleIds: ["mitochondrion"],
    category: "aa",
    summary: "Degradación de leucina, isoleucina y valina por el complejo BCKD.",
    functionOverview: "Los aminoácidos de cadena ramificada se transaminan y se degradan en la mitocondria por el complejo BCKD.",
    diseaseIds: ["msud"],
    alterationPoints: ["Complejo BCKD"],
    accumulated: ["BCAA", "Cetoácidos de cadena ramificada"],
    chains: [{
      label: "Degradación",
      steps: [
        { t: "m", label: "Leucina/Isoleucina/Valina", sub: "BCAA" },
        { t: "e", label: "BCAT", sub: "transaminasa" },
        { t: "b", label: "Complejo BCKD", sub: "BCKDHA/BCKDHB/DBT", diseaseId: "msud", note: "MSUD." },
        { t: "x", label: "Acetil-CoA/propionil-CoA", sub: "destino" }
      ]
    }]
  },
  {
    id: "lysine-tryptophan-metabolism",
    name: "Metabolismo de lisina y triptófano",
    shortName: "Lisina/Triptófano",
    organelleIds: ["mitochondrion"],
    category: "oa",
    summary: "Degradación mitocondrial de lisina; bloqueo en aciduria glutárica tipo I.",
    functionOverview: "GCDH oxida glutaryl-CoA en la degradación de lisina.",
    diseaseIds: ["glutaric1"],
    alterationPoints: ["GCDH"],
    accumulated: ["Ácido glutárico", "3-hidroxiglutárico"],
    chains: [{
      label: "Vía",
      steps: [
        { t: "m", label: "Lisina", sub: "aminoácido" },
        { t: "m", label: "Glutaryl-CoA", sub: "intermediario" },
        { t: "b", label: "GCDH", sub: "glutaryl-CoA deshidrogenasa", diseaseId: "glutaric1", note: "Aciduria glutárica tipo I." },
        { t: "x", label: "Crotonil-CoA", sub: "destino" }
      ]
    }]
  },
  {
    id: "leucine-metabolism",
    name: "Metabolismo de la leucina",
    shortName: "Leucina",
    organelleIds: ["mitochondrion"],
    category: "oa",
    summary: "Vía de degradación de la leucina con IVD, MCCC y HMGCL.",
    functionOverview: "Degradación de la leucina hasta acetil-CoA y acetoacetato.",
    diseaseIds: ["iva", "mcc", "hmgcl"],
    alterationPoints: ["IVD", "MCCC", "HMGCL"],
    accumulated: ["Isovaléricos", "Metilcrotonilos", "Cuerpos cetónicos reducidos"],
    chains: [{
      label: "Leucina",
      steps: [
        { t: "m", label: "Leucina", sub: "BCAA" },
        { t: "b", label: "IVD", sub: "isovaleril-CoA deshidrogenasa", diseaseId: "iva", note: "Aciduria isovalérica." },
        { t: "m", label: "Metilcrotonil-CoA", sub: "intermediario" },
        { t: "b", label: "MCCC", sub: "metilcrotonil-CoA carboxilasa", diseaseId: "mcc", note: "Deficiencia de MCCC." },
        { t: "m", label: "HMG-CoA", sub: "intermediario" },
        { t: "b", label: "HMGCL", sub: "HMG-CoA liasa", diseaseId: "hmgcl", note: "Deficiencia de HMG-CoA liasa." },
        { t: "x", label: "Acetil-CoA / Acetoacetato", sub: "cetogénesis" }
      ]
    }]
  },
  {
    id: "biotin-metabolism",
    name: "Metabolismo de la biotina",
    shortName: "Biotina",
    organelleIds: ["cytosol", "mitochondrion"],
    category: "cofactor",
    summary: "Reciclaje de biotina y biotinilación de carboxilasas.",
    functionOverview: "BTD recicla biotina; HLCS biotinila apo-carboxilasas.",
    diseaseIds: ["biotinidase", "hlcs"],
    alterationPoints: ["BTD", "HLCS"],
    accumulated: ["Biotinilpéptidos"],
    decrease: ["Actividad de carboxilasas dependientes de biotina"],
    chains: [{
      label: "Biotina",
      steps: [
        { t: "m", label: "Biotina ligada", sub: "proteínas" },
        { t: "b", label: "BTD", sub: "biotinidasa", diseaseId: "biotinidase", note: "Deficiencia de biotinidasa." },
        { t: "m", label: "Biotina libre", sub: "cofactor" },
        { t: "b", label: "HLCS", sub: "holocarboxilasa sintetasa", diseaseId: "hlcs", note: "Deficiencia de holocarboxilasa sintetasa." },
        { t: "x", label: "Carboxilasas activas", sub: "PCC/PC/MCCC" }
      ]
    }]
  },
  {
    id: "cholesterol-traffic",
    name: "Tráfico de colesterol lisosomal",
    shortName: "Colesterol",
    organelleIds: ["lysosome"],
    category: "lsd",
    summary: "Transporte de colesterol desde lisosomas por NPC1/NPC2.",
    functionOverview: "NPC2 transfiere colesterol a NPC1 para su salida del lisosoma.",
    diseaseIds: ["npc1", "npc2"],
    alterationPoints: ["NPC1", "NPC2"],
    accumulated: ["Colesterol no esterificado"],
    decrease: ["Colesterol disponible"],
    chains: [{
      label: "Tráfico",
      steps: [
        { t: "m", label: "LDL-Colesterol", sub: "lisosoma" },
        { t: "e", label: "NPC2", sub: "proteína soluble", diseaseId: "npc2", note: "NPC2." },
        { t: "e", label: "NPC1", sub: "proteína transmembrana", diseaseId: "npc1", note: "NPC1." },
        { t: "x", label: "Colesterol citosólico", sub: "destino" }
      ]
    }]
  },
  {
    id: "glycogen-synthesis",
    name: "Síntesis y ramificación del glucógeno",
    shortName: "Síntesis glucógeno",
    organelleIds: ["cytosol"],
    category: "glycogen",
    summary: "Ramificación del glucógeno por GBE1.",
    functionOverview: "GBE1 crea ramificaciones α-1,6.",
    diseaseIds: ["gbe1"],
    alterationPoints: ["GBE1"],
    accumulated: ["Poliglucosano poco ramificado"],
    decrease: ["Glucógeno soluble"],
    chains: [{
      label: "Ramificación",
      steps: [
        { t: "m", label: "UDP-glucosa", sub: "sustrato" },
        { t: "e", label: "Glucógeno sintasa", sub: "elongación" },
        { t: "b", label: "GBE1", sub: "enzima ramificante", diseaseId: "gbe1", note: "Glucogenosis tipo IV." },
        { t: "x", label: "Glucógeno ramificado", sub: "soluble" }
      ]
    }]
  },
  {
    id: "fructose-metabolism",
    name: "Metabolismo de la fructosa",
    shortName: "Fructosa",
    organelleIds: ["cytosol"],
    category: "carbs",
    summary: "Metabolismo de fructosa por aldolasa B.",
    functionOverview: "ALDOB hidroliza fructosa-1-fosfato.",
    diseaseIds: ["aldob"],
    alterationPoints: ["ALDOB"],
    accumulated: ["Fructosa-1-fosfato"],
    decrease: ["ATP", "Fosfato inorgánico"],
    chains: [{
      label: "Vía",
      steps: [
        { t: "m", label: "Fructosa", sub: "dieta" },
        { t: "e", label: "Fructoquinasa", sub: "KHK" },
        { t: "m", label: "Fructosa-1-P", sub: "intermediario" },
        { t: "b", label: "ALDOB", sub: "aldolasa B", diseaseId: "aldob", note: "Intolerancia hereditaria a la fructosa." },
        { t: "x", label: "DHAP/Gliceraldehído", sub: "destino" }
      ]
    }]
  },
  {
    id: "n-glycosylation",
    name: "Glicosilación N-ligada",
    shortName: "N-glicosilación",
    organelleIds: ["er", "golgi"],
    category: "cdg",
    summary: "Síntesis de oligosacáridos para glicosilación N-ligada.",
    functionOverview: "PMM2 y MPI participan en la síntesis de GDP-mannosa.",
    diseaseIds: ["pmm2", "mpi"],
    alterationPoints: ["PMM2", "MPI"],
    accumulated: ["Manosa-6-P/Fructosa-6-P"],
    decrease: ["GDP-mannosa"],
    chains: [{
      label: "Síntesis",
      steps: [
        { t: "e", label: "MPI", sub: "manosa-P isomerasa", diseaseId: "mpi", note: "MPI-CDG tratable con manosa." },
        { t: "m", label: "Manosa-6-P", sub: "intermediario" },
        { t: "b", label: "PMM2", sub: "fosfomanomutasa 2", diseaseId: "pmm2", note: "PMM2-CDG." },
        { t: "m", label: "Manosa-1-P", sub: "intermediario" },
        { t: "x", label: "GDP-mannosa / Glicosilación", sub: "N-ligada" }
      ]
    }]
  },
  {
    id: "oxphos",
    name: "Fosforilación oxidativa / Cadena respiratoria",
    shortName: "OXPHOS",
    organelleIds: ["mitochondrion"],
    category: "energy",
    summary: "Cadena respiratoria y ATP sintasa.",
    functionOverview: "Los complejos I-V generan ATP mediante fosforilación oxidativa.",
    diseaseIds: ["nadh-oxphos"],
    alterationPoints: ["Complejo I"],
    accumulated: ["Lactato", "Piruvato"],
    decrease: ["ATP"],
    chains: [{
      label: "Cadena",
      steps: [
        { t: "m", label: "NADH/FADH2", sub: "donadores" },
        { t: "b", label: "Complejo I", sub: "NDUFS1", diseaseId: "nadh-oxphos", note: "Deficiencia de complejo I." },
        { t: "e", label: "Complejo II/III/IV", sub: "cadena" },
        { t: "x", label: "ATP sintasa", sub: "ATP", tone: "teal" }
      ]
    }]
  },
  {
    id: "ketogenesis-leucine",
    name: "Cetogénesis y degradación de la leucina",
    shortName: "Cetogénesis",
    organelleIds: ["mitochondrion"],
    category: "oa",
    summary: "Cetogénesis y final de la vía de la leucina vía HMGCL.",
    functionOverview: "HMGCL es clave en cetogénesis hepática.",
    diseaseIds: ["hmgcl"],
    alterationPoints: ["HMGCL"],
    accumulated: ["HMG-CoA"],
    decrease: ["Cuerpos cetónicos"],
    chains: [{
      label: "Vía",
      steps: [
        { t: "m", label: "Acetil-CoA", sub: "2 moléculas" },
        { t: "m", label: "HMG-CoA", sub: "intermediario" },
        { t: "b", label: "HMGCL", sub: "HMG-CoA liasa", diseaseId: "hmgcl", note: "Deficiencia de HMG-CoA liasa." },
        { t: "x", label: "Acetoacetato / Acetil-CoA", sub: "cetogénesis" }
      ]
    }]
  }
];

const EXTRA_PATHWAY_BY_ID = Object.fromEntries(EXTRA_PATHWAYS.map((p) => [p.id, p]));

