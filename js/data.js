/* ============================================================
   METABOLOMA INTERACTIVO — Datos de organelos y rutas
   ============================================================ */

const SITE_NAME = "Metaboloma interactivo";
const SITE_FULL_NAME = "Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo";

const ORGANELLES = [
  {
    id: "mitochondrion",
    name: "Mitocondria",
    shortName: "Mitocondria",
    tier: "primary",
    color: "#f08a5d",
    glow: "#ffb27a",
    tagline: "Central energética y sede de la β-oxidación",
    description: "Organelo de doble membrana donde se produce la mayor parte del ATP. Alberga la β-oxidación de ácidos grasos, el ciclo de Krebs, la fosforilación oxidativa y las etapas iniciales del ciclo de la urea.",
    functions: [
      "Producción de energía mediante la fosforilación oxidativa",
      "β-oxidación de ácidos grasos y ciclo de Krebs",
      "Etapas mitocondriales del ciclo de la urea",
      "Regulación de la muerte celular programada"
    ],
    processes: [
      "Oxidación de ácidos grasos para obtener acetil-CoA",
      "Conversión del amonio en carbamoil fosfato (inicio del ciclo de la urea)",
      "Generación de un gradiente de protones para sintetizar ATP"
    ],
    pathwayIds: ["fa-beta-oxidation", "urea-cycle", "energy-metabolism", "propionate-metabolism", "leucine-metabolism", "lysine-tryptophan-metabolism"],
    diseaseIds: ["mcad", "vlcad", "otc", "pdh", "leigh", "cps1", "propionic", "methylmalonic", "iva", "glutaric1", "hmg"]
  },
  {
    id: "lysosome",
    name: "Lisosoma",
    shortName: "Lisosoma",
    tier: "primary",
    color: "#b18cf0",
    glow: "#cbb2ff",
    tagline: "Sistema de degradación y reciclaje",
    description: "Vesícula ácida que contiene hidrolasas para degradar y reciclar macromoléculas. La mayoría de las enfermedades de almacenamiento lisosomal se deben al fallo de una de estas enzimas.",
    functions: [
      "Degradación de esfingolípidos, glucosaminoglucanos y glucógeno",
      "Reciclaje de componentes celulares (autofagia)",
      "Recaptación de los productos de la degradación"
    ],
    processes: [
      "Hidrólisis escalonada de esfingolípidos de membrana",
      "Cadena enzimática de degradación de glucosaminoglucanos",
      "Degradación lisosomal del glucógeno por la α-glucosidasa ácida"
    ],
    pathwayIds: ["sphingolipid-degradation", "gag-degradation", "glycogen-degradation"],
    diseaseIds: ["gaucher", "fabry", "taysachs", "niemannpick", "pompe", "mps1", "mps2", "krabbe", "mld", "mps3a"]
  },
  {
    id: "peroxisome",
    name: "Peroxisoma",
    shortName: "Peroxisoma",
    tier: "primary",
    color: "#4fd1a5",
    glow: "#8bf0cb",
    tagline: "Lípidos especiales y detoxificación",
    description: "Organelo de una sola membrana que oxida ácidos grasos de cadena muy larga y sintetiza plasmalógenos. Su disfunción afecta sobre todo a la mielina y al metabolismo lipídico.",
    functions: [
      "β-oxidación inicial de los ácidos grasos de cadena muy larga (VLCFA)",
      "Síntesis de plasmalógenos",
      "Detoxificación de peróxido de hidrógeno"
    ],
    processes: [
      "Transporte peroxisomal de VLCFA y su acortamiento",
      "Síntesis de lípidos de membrana tipo ether (plasmalógenos)",
      "α-oxidación del ácido fitánico"
    ],
    pathwayIds: ["vlcfa-oxidation", "plasmalogen-synthesis", "alpha-oxidation"],
    diseaseIds: ["xald", "zellweger", "refsum"]
  },
  {
    id: "cytosol",
    name: "Citosol",
    shortName: "Citosol",
    tier: "secondary",
    color: "#3f6f9c",
    glow: "#6ea8d8",
    tagline: "Medio donde ocurren la glucólisis y parte del ciclo de la urea",
    description: "Compartimento acuoso que rodea a los organelos. En él tienen lugar la glucólisis, la síntesis de proteínas y las etapas finales del ciclo de la urea.",
    functions: [
      "Glucólisis y metabolismo de carbohidratos",
      "Etapas citosólicas del ciclo de la urea",
      "Metabolismo de aminoácidos y azúcares"
    ],
    processes: [
      "Conversión de glucosa en piruvato",
      "Formación de urea y regeneración de ornitina",
      "Conexión entre compartimentos celulares"
    ],
    pathwayIds: ["glycolysis", "amino-acid-metabolism", "glycogenolysis", "galactose-metabolism", "fructose-metabolism", "biotin-metabolism"],
    diseaseIds: ["pku", "gsd1", "galactosemia", "homocystinuria", "tyrosinemia1", "gsd3", "mcardle", "fructosemia", "ass1", "biotinidase", "holocarboxylase"]
  },
  {
    id: "nucleus",
    name: "Núcleo",
    shortName: "Núcleo",
    tier: "secondary",
    color: "#6b8cff",
    glow: "#9db4ff",
    tagline: "Almacén de la información genética",
    description: "Contiene el ADN y dirige la expresión de los genes que codifican las enzimas y proteínas del metabolismo. Las variantes en estos genes originan los errores innatos del metabolismo.",
    functions: [
      "Almacenamiento y transmisión de la información genética",
      "Transcripción de los genes que codifican enzimas metabólicas",
      "Regulación de la expresión génica"
    ],
    processes: [
      "Transcripción del gen y maduración del ARN",
      "Conexión entre genotipo y actividad enzimática"
    ],
    pathwayIds: [],
    diseaseIds: []
  },
  {
    id: "er",
    name: "Retículo endoplasmático",
    shortName: "Retículo endoplasmático",
    tier: "secondary",
    color: "#e0b15f",
    glow: "#f5d79a",
    tagline: "Síntesis y plegado de proteínas y lípidos",
    description: "Red de membranas donde se sintetizan, pliegan y modifican las proteínas de secreción y de membrana, y donde muchas enzimas metabólicas adquieren su forma funcional.",
    functions: [
      "Síntesis y plegado de proteínas",
      "Síntesis de lípidos de membrana",
      "Control de calidad del plegado proteico"
    ],
    processes: [
      "Producción de enzimas destinadas al lisosoma y a la secreción",
      "Metabolismo de lípidos"
    ],
    pathwayIds: [],
    diseaseIds: []
  },
  {
    id: "golgi",
    name: "Aparato de Golgi",
    shortName: "Aparato de Golgi",
    tier: "secondary",
    color: "#e879b9",
    glow: "#f7a9d4",
    tagline: "Distribución y modificación de proteínas",
    description: "Sistema de membranas que modifica, clasifica y empaqueta las proteínas y lípidos, incluyendo las enzimas dirigidas al lisosoma mediante señales de manosa-6-fosfato.",
    functions: [
      "Modificación postraduccional de proteínas",
      "Clasificación y envío de enzimas lisosomales",
      "Síntesis de glucolípidos y esfingolípidos"
    ],
    processes: [
      "Direccionamiento de hidrolasas hacia el lisosoma",
      "Glucosilación de proteínas",
      "Transporte y homeostasis del cobre (ATP7B)"
    ],
    pathwayIds: ["copper-transport"],
    diseaseIds: ["wilson", "menkes"]
  },
  {
    id: "membrane",
    name: "Membrana plasmática",
    shortName: "Membrana",
    tier: "secondary",
    color: "#3b82c4",
    glow: "#7dd3fc",
    tagline: "Transporte y comunicación con el exterior",
    description: "Bicapa lipídica que delimita la célula y alberga transportadores de nutrientes, iones y aminoácidos. Los defectos de estos transportadores alteran la captación celular y la reabsorción tubular renal.",
    functions: [
      "Regulación del intercambio de sustancias con el medio",
      "Transporte de aminoácidos y nutrientes",
      "Reabsorción tubular de aminoácidos en el riñón"
    ],
    processes: [
      "Entrada de aminoácidos a la célula mediante transportadores específicos",
      "Reabsorción de aminoácidos filtrados en el túbulo proximal",
      "Acoplamiento del transporte al gradiente de sodio"
    ],
    pathwayIds: ["amino-acid-transport"],
    diseaseIds: ["lpi", "hartnup", "cystinuria"]
  }
];

const ORGANELLE_BY_ID = Object.fromEntries(ORGANELLES.map((o) => [o.id, o]));

const CATEGORIES = {
  fao: { label: "Error de la β-oxidación de ácidos grasos", tone: "coral" },
  urea: { label: "Trastorno del ciclo de la urea", tone: "amber" },
  energy: { label: "Trastorno del metabolismo energético", tone: "blue" },
  lsd: { label: "Enfermedad de almacenamiento lisosomal", tone: "violet" },
  perox: { label: "Trastorno peroxisomal", tone: "teal" },
  aa: { label: "Error del metabolismo de aminoácidos", tone: "blue" },
  glycogen: { label: "Glucogenosis", tone: "amber" },
  carbs: { label: "Trastorno del metabolismo de carbohidratos", tone: "amber" },
  oa: { label: "Acidemia orgánica", tone: "coral" },
  metal: { label: "Trastorno del metabolismo de metales", tone: "violet" },
  cofactor: { label: "Trastorno de cofactores", tone: "teal" }
};

const PATHWAYS = [
  {
    id: "fa-beta-oxidation",
    name: "β-oxidación de ácidos grasos",
    shortName: "β-oxidación",
    organelleIds: ["mitochondrion"],
    category: "fao",
    summary: "Oxidación escalonada de los ácidos grasos para obtener acetil-CoA y energía, especialmente relevante durante el ayuno.",
    functionOverview: "Los ácidos grasos se activan a acil-CoA y entran a la mitocondria. Cada ronda de β-oxidación acorta la cadena en dos carbonos, con deshidrogenasas específicas para cadenas largas, medias y cortas.",
    diseaseIds: ["mcad", "vlcad"],
    alterationPoints: ["MCAD", "VLCAD"],
    accumulated: ["Acilcarnitinas C6–C10", "Acilcarnitinas C14:1"],
    chains: [
      {
        label: "β-oxidación mitocondrial",
        steps: [
          { t: "m", label: "Acil-CoA cadena larga", sub: "C16–C20" },
          { t: "e", label: "LCAD", sub: "ACADL", note: "Deshidrogenasa de cadena larga. No se representa una enfermedad concreta en este prototipo." },
          { t: "m", label: "Acil-CoA cadena media", sub: "C8–C10" },
          { t: "b", label: "MCAD", sub: "ACADM", diseaseId: "mcad", note: "Punto de bloqueo de la deficiencia de MCAD." },
          { t: "m", label: "Acil-CoA cadena corta", sub: "C4–C6" }
        ]
      },
      {
        label: "Continuación y destino",
        steps: [
          { t: "e", label: "SCAD", sub: "ACADS", note: "Deshidrogenasa de cadena corta." },
          { t: "m", label: "Acetil-CoA", sub: "2 carbonos", tone: "teal" },
          { t: "x", label: "Ciclo de Krebs → OXPHOS", sub: "energía" },
          { t: "a", label: "Acilcarnitinas C6–C10", sub: "octanoilcarnitina" }
        ]
      }
    ]
  },
  {
    id: "urea-cycle",
    name: "Ciclo de la urea",
    shortName: "Ciclo de la urea",
    organelleIds: ["mitochondrion", "cytosol"],
    category: "urea",
    summary: "Convierte el amonio tóxico en urea para su eliminación. Sus primeros pasos ocurren en la mitocondria y el resto en el citosol.",
    functionOverview: "El amonio libre procedente del catabolismo de aminoácidos se incorpora al ciclo en la mitocondria. La ornitina transporta los intermediarios entre compartimentos hasta formar urea, que se elimina por el riñón.",
    diseaseIds: ["otc", "ass1", "cps1"],
    alterationPoints: ["CPS1", "OTC", "ASS1"],
    accumulated: ["Amonio", "Glutamina", "Ácido orótico (en OTC)", "Citrulina y arginina bajas (defectos proximales)"],
    chains: [
      {
        label: "Etapa mitocondrial",
        steps: [
          { t: "m", label: "Amonio + CO₂", sub: "NH₄⁺" },
          { t: "b", label: "CPS1", sub: "carbamoil-fosfato sintetasa", diseaseId: "cps1", note: "Deficiencia de CPS1: el amonio no se convierte en carbamoil fosfato y se acumula." },
          { t: "m", label: "Carbamoil fosfato", sub: "intermediario" },
          { t: "b", label: "OTC", sub: "OTC", diseaseId: "otc", note: "Deficiencia de OTC: el carbamoil fosfato no se convierte en citrulina y el amonio se acumula." },
          { t: "m", label: "Citrulina", sub: "sale al citosol" }
        ]
      },
      {
        label: "Etapa citosólica",
        steps: [
          { t: "b", label: "ASS1", sub: "ASS1", diseaseId: "ass1", note: "Deficiencia de ASS1: la citrulina se acumula y no se forma argininosuccinato." },
          { t: "m", label: "Argininosuccinato", sub: "intermediario" },
          { t: "e", label: "ASL", sub: "argininosuccinato liasa" },
          { t: "m", label: "Arginina", sub: "+ fumarato" },
          { t: "e", label: "ARG1", sub: "arginasa I" },
          { t: "x", label: "Urea", sub: "excreción renal", tone: "teal" }
        ]
      },
      {
        label: "Marcadores de acumulación",
        steps: [
          { t: "a", label: "Amonio y glutamina", sub: "sangre" },
          { t: "a", label: "Ácido orótico", sub: "orina (OTC)" },
          { t: "x", label: "Urea", sub: "disminuida en sangre" }
        ]
      }
    ]
  },
  {
    id: "energy-metabolism",
    name: "Metabolismo energético mitocondrial",
    shortName: "Metabolismo energético",
    organelleIds: ["mitochondrion"],
    category: "energy",
    summary: "El piruvato se oxida a acetil-CoA, ingresa al ciclo de Krebs y alimenta la cadena respiratoria para producir ATP.",
    functionOverview: "La glucólisis citosólica produce piruvato, que la PDH convierte en acetil-CoA dentro de la mitocondria. El ciclo de Krebs genera NADH y FADH₂, cuyos electrones recorren la cadena respiratoria para bombear protones y sintetizar ATP.",
    diseaseIds: ["pdh", "leigh"],
    alterationPoints: ["Complejo PDH", "Complejo I / OXPHOS"],
    accumulated: ["Lactato", "Piruvato", "Alanina"],
    chains: [
      {
        label: "Entrada del piruvato",
        steps: [
          { t: "m", label: "Glucosa", sub: "glucólisis" },
          { t: "m", label: "Piruvato", sub: "3 carbonos" },
          { t: "b", label: "PDH", sub: "PDHA1", diseaseId: "pdh", note: "El complejo piruvato deshidrogenasa no convierte el piruvato en acetil-CoA." },
          { t: "m", label: "Acetil-CoA", sub: "entra al ciclo de Krebs" },
          { t: "x", label: "Ciclo de Krebs", sub: "NADH + FADH₂" }
        ]
      },
      {
        label: "Cadena respiratoria",
        steps: [
          { t: "b", label: "Complejo I", sub: "NDUF — OXPHOS", diseaseId: "leigh", note: "Las deficiencias de la cadena respiratoria reducen la producción de ATP." },
          { t: "e", label: "Complejo III", sub: "citocromo bc₁" },
          { t: "e", label: "Complejo IV", sub: "citocromo c oxidasa" },
          { t: "e", label: "ATP sintasa", sub: "Complejo V" },
          { t: "x", label: "ATP", sub: "energía celular", tone: "teal" }
        ]
      },
      {
        label: "Acumulación",
        steps: [
          { t: "a", label: "Lactato", sub: "sangre / LCR" },
          { t: "a", label: "Piruvato y alanina", sub: "sangre" }
        ]
      }
    ]
  },
  {
    id: "sphingolipid-degradation",
    name: "Degradación lisosomal de esfingolípidos",
    shortName: "Esfingolípidos",
    organelleIds: ["lysosome"],
    category: "lsd",
    summary: "Hidrólisis escalonada de los esfingolípidos de membrana dentro del lisosoma. Reúne a Gaucher, Fabry, Tay-Sachs, Niemann-Pick, Krabbe y la leucodistrofia metacromática.",
    functionOverview: "Los esfingolípidos de las membranas celulares llegan al lisosoma y se degradan de forma secuencial por hidrolasas ácidas. El fallo de una enzima detiene la cadena y el sustrato se acumula en el interior del lisosoma.",
    diseaseIds: ["gaucher", "fabry", "taysachs", "niemannpick", "krabbe", "mld"],
    alterationPoints: ["GBA1", "GLA", "HEXA", "SMPD1", "GALC", "ARSA"],
    accumulated: ["Glucosilceramida", "Gb3 / lyso-Gb3", "GM2 gangliósido", "Esfingomielina", "Psicosina", "Sulfátidos"],
    chains: [
      {
        label: "Gaucher",
        steps: [
          { t: "m", label: "Glucosilceramida", sub: "glucoesfingolípido" },
          { t: "b", label: "GBA1", sub: "β-glucocerebrosidasa", diseaseId: "gaucher", note: "El déficit de glucocerebrosidasa ácida acumula glucosilceramida en macrófagos." },
          { t: "m", label: "Glucosa + ceramida", sub: "productos" }
        ]
      },
      {
        label: "Fabry",
        steps: [
          { t: "m", label: "Gb3", sub: "globotriaosilceramida" },
          { t: "b", label: "GLA", sub: "α-galactosidasa A", diseaseId: "fabry", note: "El déficit de α-galactosidasa A acumula Gb3 y lyso-Gb3." },
          { t: "m", label: "Lactosilceramida", sub: "producto" }
        ]
      },
      {
        label: "Tay-Sachs",
        steps: [
          { t: "m", label: "GM2 gangliósido", sub: "membrana neuronal" },
          { t: "b", label: "HEXA", sub: "hexosaminidasa A", diseaseId: "taysachs", note: "El déficit de hexosaminidasa A acumula GM2 en las neuronas." },
          { t: "m", label: "GM3", sub: "producto" }
        ]
      },
      {
        label: "Niemann-Pick A/B",
        steps: [
          { t: "m", label: "Esfingomielina", sub: "membrana" },
          { t: "b", label: "SMPD1", sub: "esfingomielinasa ácida", diseaseId: "niemannpick", note: "El déficit de esfingomielinasa ácida acumula esfingomielina." },
          { t: "m", label: "Ceramida + fosforilcolina", sub: "productos" }
        ]
      },
      {
        label: "Krabbe",
        steps: [
          { t: "m", label: "Galactosilceramida", sub: "mielina" },
          { t: "b", label: "GALC", sub: "galactocerebrosidasa", diseaseId: "krabbe", note: "La enfermedad de Krabbe acumula psicosina, tóxica para la mielina." },
          { t: "m", label: "Galactosa + ceramida", sub: "productos" },
          { t: "a", label: "Psicosina", sub: "plasma" }
        ]
      },
      {
        label: "Leucodistrofia metacromática",
        steps: [
          { t: "m", label: "Sulfátido", sub: "mielina" },
          { t: "b", label: "ARSA", sub: "arilsulfatasa A", diseaseId: "mld", note: "El déficit de arilsulfatasa A acumula sulfátidos y desmieliniza." },
          { t: "m", label: "Ceramida", sub: "producto" },
          { t: "a", label: "Sulfátidos", sub: "orina" }
        ]
      }
    ]
  },
  {
    id: "gag-degradation",
    name: "Degradación lisosomal de glucosaminoglucanos",
    shortName: "Glucosaminoglucanos",
    organelleIds: ["lysosome"],
    category: "lsd",
    summary: "Cadena escalonada de enzimas lisosomales que degradan los glucosaminoglucanos de la matriz extracelular.",
    functionOverview: "Los glucosaminoglucanos (GAG) de la matriz extracelular se internalizan y se degradan por una secuencia de sulfatasas y exoglucosidasas lisosomales. La deficiencia de una enzima bloquea el siguiente paso y produce mucopolisacaridosis.",
    diseaseIds: ["mps1", "mps2", "mps3a"],
    alterationPoints: ["IDUA", "IDS", "SGSH"],
    accumulated: ["Dermatán sulfato", "Heparán sulfato"],
    chains: [
      {
        label: "Mucopolisacaridosis I",
        steps: [
          { t: "m", label: "Dermatán / heparán sulfato", sub: "GAG" },
          { t: "b", label: "IDUA", sub: "α-L-iduronidasa", diseaseId: "mps1", note: "El déficit de α-L-iduronidasa causa MPS I (Hurler/Scheie)." },
          { t: "m", label: "Oligosacáridos", sub: "parcialmente degradados" }
        ]
      },
      {
        label: "Mucopolisacaridosis II",
        steps: [
          { t: "m", label: "Heparán / dermatán sulfato", sub: "GAG" },
          { t: "b", label: "IDS", sub: "iduronato-2-sulfatasa", diseaseId: "mps2", note: "El déficit de iduronato-2-sulfatasa causa MPS II (Hunter)." },
          { t: "m", label: "Fragmentos de GAG", sub: "acumulación lisosomal" }
        ]
      },
      {
        label: "Mucopolisacaridosis IIIA",
        steps: [
          { t: "m", label: "Heparán sulfato", sub: "GAG" },
          { t: "b", label: "SGSH", sub: "heparán-N-sulfatasa", diseaseId: "mps3a", note: "El déficit de heparán-N-sulfatasa causa MPS IIIA (Sanfilippo A)." },
          { t: "m", label: "Fragmentos de heparán sulfato", sub: "acumulación en el SNC" },
          { t: "a", label: "Heparán sulfato", sub: "orina" }
        ]
      }
    ]
  },
  {
    id: "glycogen-degradation",
    name: "Degradación lisosomal del glucógeno",
    shortName: "Glucógeno lisosomal",
    organelleIds: ["lysosome"],
    category: "lsd",
    summary: "Degradación del glucógeno dentro del lisosoma por la α-glucosidasa ácida.",
    functionOverview: "Una pequeña fracción del glucógeno celular se degrada dentro del lisosoma. La α-glucosidasa ácida (GAA) hidroliza este glucógeno a glucosa; su déficit produce la enfermedad de Pompe.",
    diseaseIds: ["pompe"],
    alterationPoints: ["GAA"],
    accumulated: ["Glucógeno lisosomal en músculo"],
    chains: [
      {
        label: "Vía lisosomal",
        steps: [
          { t: "m", label: "Glucógeno", sub: "gránulos autofágicos" },
          { t: "b", label: "GAA", sub: "α-glucosidasa ácida", diseaseId: "pompe", note: "El déficit de GAA acumula glucógeno en lisosomas de músculo y corazón." },
          { t: "m", label: "Glucosa", sub: "sale del lisosoma", tone: "teal" }
        ]
      },
      {
        label: "Acumulación",
        steps: [
          { t: "a", label: "Glucógeno lisosomal", sub: "músculo esquelético y cardíaco" },
          { t: "a", label: "Creatina quinasa", sub: "elevada en sangre" }
        ]
      }
    ]
  },
  {
    id: "vlcfa-oxidation",
    name: "β-oxidación peroxisomal de VLCFA",
    shortName: "β-oxidación peroxisomal",
    organelleIds: ["peroxisome"],
    category: "perox",
    summary: "Acortamiento inicial de los ácidos grasos de cadena muy larga (VLCFA) dentro del peroxisoma, tras su transporte por ABCD1.",
    functionOverview: "Los VLCFA (≥C22) no pueden oxidarse en la mitocondria y se acortan primero en el peroxisoma. ABCD1 los introduce en el organelo y las enzimas ACOX1, DBP y tiolasa los reducen hasta acil-CoA de cadena más corta.",
    diseaseIds: ["xald", "zellweger"],
    alterationPoints: ["ABCD1", "ACOX1 / importación PEX"],
    accumulated: ["VLCFA (C26:0)", "Ácidos grasos de cadena muy larga plasmáticos"],
    chains: [
      {
        label: "Entrada y acortamiento",
        steps: [
          { t: "m", label: "VLCFA", sub: "C24–C26" },
          { t: "b", label: "ABCD1", sub: "transportador peroxisomal", diseaseId: "xald", note: "El defecto de ABCD1 impide la entrada de VLCFA al peroxisoma y causa adrenoleucodistrofia ligada al X." },
          { t: "m", label: "VLCFA intraperoxisomal", sub: "acil-CoA" },
          { t: "e", label: "ACOX1", sub: "acil-CoA oxidasa" },
          { t: "m", label: "Acil-CoA acortado", sub: "2 carbonos menos" }
        ]
      },
      {
        label: "Continuación",
        steps: [
          { t: "e", label: "DBP", sub: "HSD17B4" },
          { t: "e", label: "Tiolasa", sub: "ACAA1" },
          { t: "x", label: "Acetil-CoA + ácidos biliares", sub: "destino" },
          { t: "a", label: "VLCFA plasmáticos", sub: "C26:0 elevado" }
        ]
      }
    ]
  },
  {
    id: "plasmalogen-synthesis",
    name: "Síntesis de plasmalógenos",
    shortName: "Plasmalógenos",
    organelleIds: ["peroxisome"],
    category: "perox",
    summary: "Vía peroxisomal de contexto que produce lípidos de membrana tipo ether esenciales para la mielina y las membranas celulares.",
    functionOverview: "Los plasmalógenos son fosfolípidos con un enlace éter vinílico, abundantes en la mielina, el corazón y los espermatozoides. Su síntesis comienza en el peroxisoma con la DHAP acetiltransferasa (GNPAT) y la alquilglicerona fosfato sintasa (AGPS).",
    diseaseIds: ["zellweger"],
    alterationPoints: ["Importación peroxisomal (PEX)"],
    accumulated: ["Plasmalógenos disminuidos"],
    chains: [
      {
        label: "Síntesis peroxisomal",
        steps: [
          { t: "b", label: "PEX / importación", sub: "biogénesis peroxisomal", diseaseId: "zellweger", note: "Los defectos de biogénesis peroxisomal (PEX) alteran la síntesis de plasmalógenos." },
          { t: "m", label: "DHAP", sub: "dihidroxiacetona fosfato" },
          { t: "e", label: "GNPAT", sub: "DHAP acetiltransferasa" },
          { t: "m", label: "Lípido intermediario", sub: "alquil-DHAP" },
          { t: "e", label: "AGPS", sub: "alquilglicerona fosfato sintasa" },
          { t: "x", label: "Plasmalógeno", sub: "membrana", tone: "teal" }
        ]
      }
    ]
  },
  {
    id: "alpha-oxidation",
    name: "α-oxidación del ácido fitánico",
    shortName: "α-oxidación",
    organelleIds: ["peroxisome"],
    category: "perox",
    summary: "Vía peroxisomal que degrada el ácido fitánico de la dieta; su bloqueo causa la enfermedad de Refsum.",
    functionOverview: "El ácido fitánico, presente en productos lácteos y carnes de rumiantes, no puede metabolizarse por β-oxidación. El peroxisoma lo α-oxida mediante la fitanoil-CoA hidroxilasa (PHYH) para acortarlo y permitir su posterior β-oxidación.",
    diseaseIds: ["refsum"],
    alterationPoints: ["PHYH"],
    accumulated: ["Ácido fitánico plasmático"],
    chains: [
      {
        label: "α-oxidación peroxisomal",
        steps: [
          { t: "m", label: "Ácido fitánico", sub: "dieta" },
          { t: "b", label: "PHYH", sub: "fitanoil-CoA hidroxilasa", diseaseId: "refsum", note: "El déficit de PHYH acumula ácido fitánico y causa la enfermedad de Refsum." },
          { t: "m", label: "Ácido 2-hidroxifitánico", sub: "intermediario" },
          { t: "e", label: "Racemasa", sub: "procesamiento" },
          { t: "x", label: "Ácido pristánico", sub: "→ β-oxidación" },
          { t: "a", label: "Ácido fitánico", sub: "plasma elevado" }
        ]
      }
    ]
  },
  {
    id: "glycolysis",
    name: "Glucólisis",
    shortName: "Glucólisis",
    organelleIds: ["cytosol"],
    category: null,
    context: true,
    summary: "Conjunto de reacciones citosólicas que convierten la glucosa en piruvato y conectan el metabolismo de carbohidratos con la mitocondria.",
    functionOverview: "La glucólisis transforma una molécula de glucosa en dos de piruvato, generando ATP y NADH. Es la puerta de entrada de la glucosa al metabolismo energético y conecta con la mitocondria a través de la PDH.",
    diseaseIds: [],
    alterationPoints: [],
    accumulated: [],
    chains: [
      {
        label: "Fase de inversión energética",
        steps: [
          { t: "m", label: "Glucosa", sub: "6 carbonos" },
          { t: "e", label: "Hexoquinasa", sub: "HK1" },
          { t: "m", label: "Glucosa-6-P", sub: "intermediario" },
          { t: "e", label: "Fosfofructoquinasa", sub: "PFK1" },
          { t: "m", label: "Fructosa-1,6-BP", sub: "intermediario" }
        ]
      },
      {
        label: "Fase de generación de ATP",
        steps: [
          { t: "e", label: "Aldolasa", sub: "ALDOA" },
          { t: "m", label: "Gliceraldehído-3-P", sub: "triosa" },
          { t: "e", label: "GAPDH", sub: "deshidrogenasa" },
          { t: "m", label: "Piruvato", sub: "2 moléculas" },
          { t: "x", label: "Acetil-CoA / lactato", sub: "destino" }
        ]
      }
    ]
  },
  {
    id: "amino-acid-metabolism",
    name: "Metabolismo de aminoácidos",
    shortName: "Aminoácidos",
    organelleIds: ["cytosol"],
    category: "aa",
    summary: "Degradación citosólica de la fenilalanina, la tirosina y la homocisteína. Sus bloqueos originan fenilcetonuria, tirosinemia y homocistinuria.",
    functionOverview: "Los aminoácidos se degradan en el citosol por vías específicas. La fenilalanina hidroxilasa (PAH) convierte la fenilalanina en tirosina; la tirosina se cataboliza hasta fumarato y acetoacetato mediante la FAH; y la homocisteína se transulfura a cistationina por la CBS, dependiente de piridoxal-5-fosfato.",
    diseaseIds: ["pku", "homocystinuria", "tyrosinemia1"],
    alterationPoints: ["PAH", "FAH", "CBS"],
    accumulated: ["Fenilalanina", "Succinilacetona", "Homocisteína", "Metionina"],
    chains: [
      {
        label: "Fenilalanina",
        steps: [
          { t: "m", label: "Fenilalanina", sub: "aminoácido esencial" },
          { t: "b", label: "PAH", sub: "fenilalanina hidroxilasa", diseaseId: "pku", note: "El déficit de PAH bloquea la conversión de fenilalanina en tirosina." },
          { t: "m", label: "Tirosina", sub: "aminoácido" },
          { t: "e", label: "Tirosinasa", sub: "TYR" },
          { t: "x", label: "Melanina / catecolaminas", sub: "productos" }
        ]
      },
      {
        label: "Tirosina",
        steps: [
          { t: "m", label: "Tirosina", sub: "dieta o PAH" },
          { t: "m", label: "Fumarilacetoacetato", sub: "intermediario" },
          { t: "b", label: "FAH", sub: "fumarilacetoacetato hidrolasa", diseaseId: "tyrosinemia1", note: "La tirosinemia tipo I acumula succinilacetona, hepatotóxica y nefrotóxica." },
          { t: "m", label: "Fumarato + acetoacetato", sub: "entran en el ciclo de Krebs" },
          { t: "a", label: "Succinilacetona", sub: "sangre y orina" }
        ]
      },
      {
        label: "Homocisteína",
        steps: [
          { t: "m", label: "Metionina", sub: "aminoácido esencial" },
          { t: "m", label: "Homocisteína", sub: "intermediario" },
          { t: "b", label: "CBS", sub: "cistationina β-sintasa", diseaseId: "homocystinuria", note: "La homocistinuria clásica bloquea la transulfuración y acumula homocisteína." },
          { t: "e", label: "Cistationina liasa", sub: "CTH" },
          { t: "x", label: "Cisteína", sub: "producto" }
        ]
      },
      {
        label: "Marcadores",
        steps: [
          { t: "a", label: "Fenilalanina", sub: "plasma elevada" },
          { t: "a", label: "Homocisteína total", sub: "plasma elevada" },
          { t: "a", label: "Succinilacetona", sub: "orina" }
        ]
      }
    ]
  },
  {
    id: "glycogenolysis",
    name: "Glucogenólisis y glucosa-6-fosfatasa",
    shortName: "Glucogenólisis",
    organelleIds: ["cytosol", "er"],
    category: "glycogen",
    summary: "Liberación de glucosa a partir del glucógeno hepático; su bloqueo causa la glucogenosis tipo I y el defecto de la enzima desramificante la glucogenosis tipo III.",
    functionOverview: "El glucógeno hepático se degrada a glucosa-6-fosfato. La enzima desramificante (AGL) resuelve los puntos de ramificación y la glucosa-6-fosfatasa (G6PC), situada en la membrana del retículo endoplasmático, libera glucosa libre a la sangre; sus déficits provocan hipoglucemia y acumulación de glucógeno o de glucosa-6-fosfato.",
    diseaseIds: ["gsd1", "gsd3", "mcardle"],
    alterationPoints: ["G6PC", "AGL", "PYGM"],
    accumulated: ["Glucosa-6-fosfato", "Lactato", "Ácido úrico", "Triglicéridos", "Glucógeno anómalo"],
    chains: [
      {
        label: "Glucogenólisis hepática",
        steps: [
          { t: "m", label: "Glucógeno", sub: "hígado" },
          { t: "e", label: "Glucógeno fosforilasa", sub: "PYGL" },
          { t: "m", label: "Glucosa-6-P", sub: "intermediario" },
          { t: "b", label: "G6PC", sub: "glucosa-6-fosfatasa", diseaseId: "gsd1", note: "El déficit de G6PC impide liberar glucosa libre a la sangre." },
          { t: "m", label: "Glucosa", sub: "sangre", tone: "teal" }
        ]
      },
      {
        label: "Desramificación del glucógeno",
        steps: [
          { t: "m", label: "Glucógeno ramificado", sub: "dextrinas límite" },
          { t: "b", label: "AGL", sub: "enzima desramificante", diseaseId: "gsd3", note: "El déficit de AGL causa la glucogenosis tipo III (enfermedad de Cori)." },
          { t: "m", label: "Glucógeno lineal", sub: "susceptible de fosforilasa" },
          { t: "a", label: "Glucógeno anómalo", sub: "hígado y músculo" }
        ]
      },
      {
        label: "Glucogenólisis muscular",
        steps: [
          { t: "m", label: "Glucógeno muscular", sub: "músculo esquelético" },
          { t: "b", label: "PYGM", sub: "miofosforilasa", diseaseId: "mcardle", note: "El déficit de miofosforilasa causa la glucogenosis tipo V (McArdle)." },
          { t: "m", label: "Glucosa-6-P", sub: "alimenta la glucólisis local" },
          { t: "a", label: "Glucógeno subsarcolemal", sub: "biopsia muscular" }
        ]
      },
      {
        label: "Acumulación",
        steps: [
          { t: "a", label: "Lactato", sub: "acidosis láctica" },
          { t: "a", label: "Ácido úrico", sub: "hiperuricemia" },
          { t: "a", label: "Triglicéridos", sub: "hiperlipidemia" }
        ]
      }
    ]
  },
  {
    id: "galactose-metabolism",
    name: "Metabolismo de la galactosa",
    shortName: "Galactosa",
    organelleIds: ["cytosol"],
    category: "carbs",
    summary: "Ruta de utilización de la galactosa procedente de la lactosa; su bloqueo causa galactosemia clásica.",
    functionOverview: "La galactosa se fosforila por la galactoquinasa (GALK1) y se convierte en glucosa-1-fosfato por la galactosa-1-fosfato uridiltransferasa (GALT). El déficit de GALT acumula galactosa-1-fosfato y galactitol.",
    diseaseIds: ["galactosemia"],
    alterationPoints: ["GALT"],
    accumulated: ["Galactosa-1-fosfato", "Galactitol"],
    chains: [
      {
        label: "Vía de Leloir",
        steps: [
          { t: "m", label: "Galactosa", sub: "de la lactosa" },
          { t: "e", label: "GALK1", sub: "galactoquinasa" },
          { t: "m", label: "Galactosa-1-P", sub: "intermediario" },
          { t: "b", label: "GALT", sub: "uridiltransferasa", diseaseId: "galactosemia", note: "El déficit de GALT bloquea la conversión en glucosa-1-fosfato." },
          { t: "m", label: "Glucosa-1-P / UDP-Gal", sub: "productos" }
        ]
      },
      {
        label: "Acumulación",
        steps: [
          { t: "a", label: "Galactosa-1-P", sub: "hígado" },
          { t: "a", label: "Galactitol", sub: "cristalino" }
        ]
      }
    ]
  },
  {
    id: "propionate-metabolism",
    name: "Metabolismo del propionato",
    shortName: "Propionato",
    organelleIds: ["mitochondrion"],
    category: "oa",
    summary: "Degradación mitocondrial del propionato procedente de aminoácidos ramificados, ácidos grasos de cadena impar y de la flora intestinal hasta succinil-CoA, que entra en el ciclo de Krebs.",
    functionOverview: "El propionil-CoA se carboxila a D-metilmalonil-CoA por la propionil-CoA carboxilasa (PCC, dependiente de biotina). La metilmalonil-CoA epimerasa lo convierte en L-metilmalonil-CoA y la metilmalonil-CoA mutasa (MUT, dependiente de adenosilcobalamina) lo transforma en succinil-CoA. El bloqueo acumula propionil-CoA, propionilcarnitina y 3-hidroxipropionato o, si el defecto es distal, metilmalonato.",
    diseaseIds: ["propionic", "methylmalonic"],
    alterationPoints: ["PCC (PCCA/PCCB)", "Metilmalonil-CoA mutasa (MUT)"],
    accumulated: ["Propionilcarnitina (C3)", "3-hidroxipropionato", "Metilmalonato", "Amonio"],
    chains: [
      {
        label: "Vía mitocondrial del propionato",
        steps: [
          { t: "m", label: "Propionil-CoA", sub: "3 carbonos" },
          { t: "e", label: "Biotinidasa", sub: "BTD · recambio de biotina" },
          { t: "b", label: "PCC", sub: "PCCA / PCCB", diseaseId: "propionic", note: "Acidemia propiónica: la carboxilación a metilmalonil-CoA está bloqueada." },
          { t: "m", label: "D-metilmalonil-CoA", sub: "epimerasa" },
          { t: "m", label: "L-metilmalonil-CoA", sub: "intermediario" },
          { t: "b", label: "MUT", sub: "metilmalonil-CoA mutasa", diseaseId: "methylmalonic", note: "Acidemia metilmalónica: no se forma succinil-CoA y el metilmalonato se acumula." },
          { t: "x", label: "Succinil-CoA → Krebs", sub: "energía", tone: "teal" }
        ]
      },
      {
        label: "Marcadores de acumulación",
        steps: [
          { t: "a", label: "Propionilcarnitina C3", sub: "sangre en gota seca" },
          { t: "a", label: "3-hidroxipropionato", sub: "orina" },
          { t: "a", label: "Metilmalonato", sub: "orina (formas distales)" },
          { t: "x", label: "Hiperamonemia", sub: "crisis metabólicas" }
        ]
      }
    ]
  },
  {
    id: "copper-transport",
    name: "Transporte y homeostasis del cobre",
    shortName: "Cobre",
    organelleIds: ["golgi"],
    category: "metal",
    summary: "El cobre se absorbe en el intestino y se distribuye entre tejidos. ATP7B lo incorpora a la ceruloplasmina y lo excreta por la bilis en el hígado; ATP7A lo moviliza desde el intestino hacia la circulación. Sus defectos producen la enfermedad de Wilson y la enfermedad de Menkes.",
    functionOverview: "El cobre entra en la célula por el transportador CTR1 y llega al aparato de Golgi unido a chaperonas como ATOX1. ATP7B, una ATPasa tipo P de la red trans-Golgi, transfiere el cobre a la apoceruloplasmina y, cuando el cobre aumenta, se desplaza a la membrana canalicular para excretarlo por la bilis. ATP7A cumple una función equivalente en la salida de cobre desde el enterocito y otros tejidos. La disfunción de ATP7B acumula cobre en el hígado y otros tejidos; la de ATP7A lo retiene en el intestino y reduce su disponibilidad en el cerebro y otros órganos.",
    diseaseIds: ["wilson", "menkes"],
    alterationPoints: ["ATP7B", "ATP7A"],
    accumulated: ["Cobre hepático", "Cobre urinario", "Cobre en ganglios basales y córnea"],
    chains: [
      {
        label: "Ruta del cobre en el hepatocito",
        steps: [
          { t: "m", label: "Cobre dietético", sub: "absorción intestinal" },
          { t: "e", label: "CTR1", sub: "SLC31A1 · entrada celular" },
          { t: "m", label: "Cobre unido a ATOX1", sub: "chaperona citosólica" },
          { t: "b", label: "ATP7B", sub: "ATPasa tipo P", diseaseId: "wilson", note: "Enfermedad de Wilson: el cobre no se incorpora a la ceruloplasmina ni se excreta por la bilis." },
          { t: "m", label: "Apoceruloplasmina", sub: "sin cobre" },
          { t: "x", label: "Excreción biliar", sub: "vía principal de eliminación", tone: "teal" }
        ]
      },
      {
        label: "Ruta de ATP7A (distribución periférica)",
        steps: [
          { t: "m", label: "Cobre en el enterocito", sub: "absorción" },
          { t: "b", label: "ATP7A", sub: "ATPasa tipo P", diseaseId: "menkes", note: "Enfermedad de Menkes: el cobre queda retenido en el intestino y no llega a los tejidos." },
          { t: "m", label: "Cobre en circulación", sub: "unido a albúmina y otros ligandos" },
          { t: "e", label: "Captación tisular", sub: "CTR1" },
          { t: "x", label: "Metaloenzimas", sub: "cobre disponible", tone: "teal" }
        ]
      },
      {
        label: "Marcadores de acumulación",
        steps: [
          { t: "a", label: "Cobre en orina de 24 h", sub: "elevado en Wilson" },
          { t: "a", label: "Ceruloplasmina sérica", sub: "baja en Wilson" },
          { t: "a", label: "Anillo de Kayser-Fleischer", sub: "córnea" }
        ]
      }
    ]
  },
  {
    id: "leucine-metabolism",
    name: "Metabolismo de la leucina",
    shortName: "Leucina",
    organelleIds: ["mitochondrion"],
    category: "oa",
    summary: "Degradación mitocondrial de la leucina hasta acetil-CoA y acetoacetato. Los bloqueos en IVD y HMGCL causan aciduria isovalérica y aciduria 3-hidroxi-3-metilglutárica.",
    functionOverview: "La leucina se transamina a α-cetoisocaproato, se descarboxila a isovaleril-CoA y se degrada mediante deshidrogenación, carboxilación y lisis. La IVD actúa al inicio de la vía y la HMGCL en el paso final, que genera acetil-CoA y cuerpos cetónicos.",
    diseaseIds: ["iva", "hmg"],
    alterationPoints: ["IVD", "HMGCL"],
    accumulated: ["Ácido isovalérico y 3-hidroxiisovalérico", "3-hidroxi-3-metilglutárico", "Isovalerilcarnitina C5"],
    decrease: ["Producción de cuerpos cetónicos durante el ayuno"],
    chains: [
      {
        label: "Degradación de la leucina",
        steps: [
          { t: "m", label: "Leucina", sub: "aminoácido ramificado" },
          { t: "e", label: "BCAT", sub: "transaminasa" },
          { t: "m", label: "α-cetoisocaproato", sub: "intermediario" },
          { t: "b", label: "IVD", sub: "isovaleril-CoA deshidrogenasa", diseaseId: "iva", note: "Aciduria isovalérica: el isovaleril-CoA no se oxida y se acumula como ácido isovalérico." },
          { t: "m", label: "Isovaleril-CoA", sub: "intermediario" },
          { t: "e", label: "MCCC", sub: "metilcrotonil-CoA carboxilasa" },
          { t: "m", label: "3-metilcrotonil-CoA", sub: "intermediario" }
        ]
      },
      {
        label: "Paso final y cetogénesis",
        steps: [
          { t: "m", label: "HMG-CoA", sub: "intermediario" },
          { t: "b", label: "HMGCL", sub: "HMG-CoA liasa", diseaseId: "hmg", note: "Aciduria 3-hidroxi-3-metilglutárica: se acumula HMG-CoA y disminuye la cetogénesis." },
          { t: "m", label: "Acetil-CoA", sub: "2 carbonos" },
          { t: "x", label: "Acetoacetato", sub: "cuerpos cetónicos", tone: "teal" }
        ]
      },
      {
        label: "Marcadores de acumulación",
        steps: [
          { t: "a", label: "Isovalerilcarnitina C5", sub: "sangre en gota seca" },
          { t: "a", label: "3-hidroxiisovalérico", sub: "orina" },
          { t: "a", label: "3-hidroxi-3-metilglutárico", sub: "orina" },
          { t: "x", label: "Hipoglucemia hipocetósica", sub: "crisis metabólicas" }
        ]
      }
    ]
  },
  {
    id: "lysine-tryptophan-metabolism",
    name: "Metabolismo de lisina y triptófano",
    shortName: "Lisina / triptófano",
    organelleIds: ["mitochondrion"],
    category: "oa",
    summary: "Degradación mitocondrial de lisina y triptófano. El bloqueo de GCDH produce aciduria glutárica tipo I y lesión de los ganglios basales.",
    functionOverview: "La lisina y el triptófano convergen en glutaril-CoA, que la glutaril-CoA deshidrogenasa (GCDH) oxida a crotonil-CoA. Cuando GCDH falla, el ácido glutárico y el 3-hidroxiglutárico se acumulan y resultan neurotóxicos.",
    diseaseIds: ["glutaric1"],
    alterationPoints: ["GCDH"],
    accumulated: ["Ácido glutárico", "3-hidroxiglutárico", "Glutarilcarnitina C5DC"],
    chains: [
      {
        label: "Vía común",
        steps: [
          { t: "m", label: "Lisina / triptófano", sub: "aminoácidos" },
          { t: "m", label: "Glutaril-CoA", sub: "intermediario" },
          { t: "b", label: "GCDH", sub: "glutaril-CoA deshidrogenasa", diseaseId: "glutaric1", note: "Aciduria glutárica tipo I: el glutaril-CoA no se convierte en crotonil-CoA." },
          { t: "m", label: "Crotonil-CoA", sub: "intermediario" },
          { t: "x", label: "Acetil-CoA", sub: "ciclo de Krebs", tone: "teal" }
        ]
      },
      {
        label: "Acumulación y efecto neurológico",
        steps: [
          { t: "a", label: "Glutarilcarnitina C5DC", sub: "sangre en gota seca" },
          { t: "a", label: "Ácido glutárico", sub: "orina" },
          { t: "a", label: "3-hidroxiglutárico", sub: "orina" },
          { t: "x", label: "Lesión de ganglios basales", sub: "crisis encefalopáticas" }
        ]
      }
    ]
  },
  {
    id: "biotin-metabolism",
    name: "Metabolismo de la biotina",
    shortName: "Biotina",
    organelleIds: ["cytosol", "mitochondrion"],
    category: "cofactor",
    summary: "Reciclaje de biotina y biotinilación de las carboxilasas. Los defectos de BTD y HLCS producen una deficiencia múltiple de carboxilasas.",
    functionOverview: "La biotina unida a proteínas se libera por la biotinidasa (BTD); después, la holocarboxilasa sintetasa (HLCS) la une covalentemente a las apo-carboxilasas: piruvato carboxilasa, propionil-CoA carboxilasa, metilcrotonil-CoA carboxilasa y acetil-CoA carboxilasa.",
    diseaseIds: ["biotinidase", "holocarboxylase"],
    alterationPoints: ["BTD", "HLCS"],
    accumulated: ["Biotinilpéptidos", "3-hidroxiisovalérico", "Metilcitrato", "Lactato"],
    decrease: ["Actividad de las carboxilasas dependientes de biotina"],
    chains: [
      {
        label: "Reciclaje y activación",
        steps: [
          { t: "m", label: "Biotina ligada a proteínas", sub: "dieta y proteínas endógenas" },
          { t: "b", label: "BTD", sub: "biotinidasa", diseaseId: "biotinidase", note: "Deficiencia de biotinidasa: no se libera la biotina de los biotinilpéptidos." },
          { t: "m", label: "Biotina libre", sub: "cofactor disponible" },
          { t: "b", label: "HLCS", sub: "holocarboxilasa sintetasa", diseaseId: "holocarboxylase", note: "Deficiencia de holocarboxilasa sintetasa: la biotina no se une a las carboxilasas." },
          { t: "x", label: "Carboxilasas activas", sub: "PC · PCC · MCC · ACC", tone: "teal" }
        ]
      },
      {
        label: "Marcadores de deficiencia",
        steps: [
          { t: "a", label: "3-hidroxiisovalérico", sub: "orina" },
          { t: "a", label: "Metilcitrato", sub: "orina" },
          { t: "a", label: "Lactato y piruvato", sub: "sangre" },
          { t: "x", label: "Crisis metabólicas", sub: "acidosis y erupción cutánea" }
        ]
      }
    ]
  },
  {
    id: "fructose-metabolism",
    name: "Metabolismo de la fructosa",
    shortName: "Fructosa",
    organelleIds: ["cytosol"],
    category: "carbs",
    summary: "Metabolismo de la fructosa dietética. El déficit de aldolasa B bloquea la degradación de fructosa-1-fosfato y causa intolerancia hereditaria a la fructosa.",
    functionOverview: "La fructosa se fosforila por la fructoquinasa (KHK) a fructosa-1-fosfato. La aldolasa B (ALDOB) la divide en dihidroxiacetona fosfato y gliceraldehído. Si ALDOB falla, la fructosa-1-fosfato se acumula, atrapa fosfato y reduce el ATP celular.",
    diseaseIds: ["fructosemia"],
    alterationPoints: ["ALDOB"],
    accumulated: ["Fructosa-1-fosfato", "Fructosa urinaria"],
    decrease: ["ATP y fosfato inorgánico", "Glucosa (hipoglucemia)"],
    chains: [
      {
        label: "Vía de la fructosa",
        steps: [
          { t: "m", label: "Fructosa", sub: "dieta" },
          { t: "e", label: "KHK", sub: "fructoquinasa" },
          { t: "m", label: "Fructosa-1-fosfato", sub: "intermediario" },
          { t: "b", label: "ALDOB", sub: "aldolasa B", diseaseId: "fructosemia", note: "Intolerancia hereditaria a la fructosa: la fructosa-1-fosfato no se divide." },
          { t: "m", label: "DHAP + gliceraldehído", sub: "destino glucolítico" },
          { t: "x", label: "Glucosa / energía", sub: "metabolismo hepático", tone: "teal" }
        ]
      },
      {
        label: "Consecuencias metabólicas",
        steps: [
          { t: "a", label: "Fructosa-1-fosfato", sub: "hígado" },
          { t: "a", label: "Fructosa urinaria", sub: "orina" },
          { t: "x", label: "Hipoglucemia y acidosis", sub: "tras la ingesta" }
        ]
      }
    ]
  },
  {
    id: "amino-acid-transport",
    name: "Transporte de aminoácidos",
    shortName: "Transporte de aminoácidos",
    organelleIds: ["membrane"],
    category: "aa",
    summary: "Transporte de aminoácidos en la membrana plasmática y el túbulo renal. Los defectos de transportadores causan LPI, Hartnup y cistinuria.",
    functionOverview: "Los aminoácidos filtrados se reabsorben en el túbulo proximal mediante transportadores acoplados a sodio. Cada transportador reconoce un grupo de aminoácidos; su fallo produce pérdida urinaria selectiva y, en algunos casos, déficit sistémico.",
    diseaseIds: ["lpi", "hartnup", "cystinuria"],
    alterationPoints: ["SLC7A7", "SLC6A19", "SLC3A1/SLC7A9"],
    accumulated: ["Aminoácidos en orina (patrón específico)", "Cistina urinaria (cistinuria)"],
    decrease: ["Aminoácidos plasmáticos en LPI y Hartnup"],
    chains: [
      {
        label: "Transporte de aminoácidos dibásicos (LPI)",
        steps: [
          { t: "m", label: "Lisina, arginina y ornitina", sub: "luz tubular" },
          { t: "b", label: "SLC7A7", sub: "y+LAT1", diseaseId: "lpi", note: "Intolerancia a las proteínas con lisina: falla el transporte de aminoácidos dibásicos." },
          { t: "m", label: "Aminoácidos intracelulares", sub: "reabsorción" },
          { t: "x", label: "Déficit plasmático", sub: "y orotic aciduria" }
        ]
      },
      {
        label: "Transporte de aminoácidos neutros (Hartnup)",
        steps: [
          { t: "m", label: "Triptófano y neutros", sub: "luz tubular" },
          { t: "b", label: "SLC6A19", sub: "B0AT1", diseaseId: "hartnup", note: "Enfermedad de Hartnup: se pierden aminoácidos neutros por la orina." },
          { t: "m", label: "Pérdida urinaria", sub: "triptófano" },
          { t: "x", label: "Déficit de niacina", sub: "manifestaciones cutáneas y neurológicas" }
        ]
      },
      {
        label: "Transporte de cistina (cistinuria)",
        steps: [
          { t: "m", label: "Cistina y dibásicos", sub: "luz tubular" },
          { t: "b", label: "SLC3A1 / SLC7A9", sub: "rBAT / b0,+AT", diseaseId: "cystinuria", note: "Cistinuria: la cistina no se reabsorbe y precipita en la orina." },
          { t: "a", label: "Cistina urinaria", sub: "cristales" },
          { t: "x", label: "Cálculos renales", sub: "cólico y obstrucción" }
        ]
      }
    ]
  }
];

const PATHWAY_BY_ID = Object.fromEntries(PATHWAYS.map((p) => [p.id, p]));
