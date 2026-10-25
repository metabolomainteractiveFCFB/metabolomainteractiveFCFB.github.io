/* ============================================================
   METABOLOMA INTERACTIVO — Fichas adicionales en preparación
   No se cargan en index.html: sus rutas y organelos aún no están
   integrados en data.js. Se conservan para una ampliación futura.
   ============================================================ */

const EXTRA_DISEASES = [
  {
    id: "cpt2",
    name: "Deficiencia de CPT2",
    aka: ["Deficiencia de carnitina palmitoiltransferasa II", "CPT2 deficiency"],
    inheritance: "Autosómica recesiva",
    category: "fao",
    summary: "El déficit de CPT2 impide el transporte de acilcarnitinas de vuelta a acil-CoA en la matriz mitocondrial. Causa miopatía, cardiopatía o formas neonatales graves.",
    gene: "CPT2",
    protein: "Carnitina palmitoiltransferasa II (CPT2)",
    ec: "2.3.1.21",
    organelleId: "mitochondrion",
    pathwayId: "fa-beta-oxidation",
    mechanism: {
      normal: "La CPT2 transfiere el grupo acilo de las acilcarnitinas a CoA para regenerar acil-CoA y liberar carnitina en la membrana interna mitocondrial.",
      alteration: "Variantes bialélicas de CPT2 dan lugar a fenotipos neonatal grave, infantil hepático y adulto miopático.",
      accumulate: [
        "Acilcarnitinas de cadena larga (C14-C18)",
        "Lípidos intramusculares",
        "Mioglobina tras la rabdomiólisis"
      ],
      decrease: [
        "β-oxidación mitocondrial",
        "Producción de cuerpos cetónicos",
        "ATP durante el ejercicio"
      ],
      consequences: [
        "Rabdomiólisis tras el ejercicio",
        "Mioglobinuria y riesgo de insuficiencia renal aguda",
        "Cardiomiopatía en formas graves",
        "Hipoglucemia hipocetósica en formas hepáticas"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Acilcarnitinas de cadena larga elevadas",
        "Creatina quinasa muy elevada tras el esfuerzo",
        "Mioglobina en orina"
      ],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "Detectable en cribado neonatal con acilcarnitinas.",
      confirmatory: ["Perfil de acilcarnitinas", "Secuenciación de CPT2", "Actividad enzimática en fibroblastos"],
      enzymatic: "Actividad de CPT2 en fibroblastos o tejido muscular puede confirmar el diagnóstico."
    },
    treatment: {
      strategies: [
        "Evitar el ejercicio intenso",
        "Hidratación en episodios de rabdomiólisis",
        "Evitar el ayuno prolongado",
        "Manejo de la cardiomiopatía si existe"
      ],
      diet: "Dieta con restricción moderada de grasas de cadena larga y aporte frecuente de carbohidratos; triglicéridos de cadena media pueden considerarse.",
      cofactors: "Carnitina no está sistemáticamente indicada; individualizar.",
      followup: [
        "Creatina quinasa basal y tras crisis",
        "Función renal",
        "Cardiología en formas con afectación cardíaca"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Carnitine Palmitoyltransferase II Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "CARNITINE PALMITOYLTRANSFERASE II DEFICIENCY", ref: "#600649" },
      { label: "Orphanet", title: "Carnitine palmitoyltransferase II deficiency", ref: "ORPHA:228302" }
    ],
    validation: ["Umbrales de creatina quinasa para hospitalización", "Protocolo de hidratación en rabdomiólisis"]
  },
  {
    id: "cact",
    name: "Deficiencia de CACT (SLC25A20)",
    aka: ["Deficiencia del translocador de carnitina/acilcarnitina", "CACT deficiency"],
    inheritance: "Autosómica recesiva",
    category: "fao",
    summary: "El déficit del translocador SLC25A20 impide el intercambio carnitina/acilcarnitina a través de la membrana interna mitocondrial. Forma neonatal grave con arritmias.",
    gene: "SLC25A20",
    protein: "Translocador carnitina/acilcarnitina (CACT)",
    ec: null,
    organelleId: "mitochondrion",
    pathwayId: "fa-beta-oxidation",
    mechanism: {
      normal: "CACT intercambia acilcarnitinas del espacio intermembrana por carnitina libre de la matriz, permitiendo el reciclaje de carnitina.",
      alteration: "Variantes bialélicas de SLC25A20 bloquean ese intercambio, acumulando acilcarnitinas fuera de la matriz.",
      accumulate: ["Acilcarnitinas de cadena larga", "Carnitina libre plasmática", "Ácidos grasos libres"],
      decrease: ["β-oxidación mitocondrial", "Cuerpos cetónicos", "ATP cardíaco"],
      consequences: ["Hiperamonemia", "Arritmias y cardiomiopatía", "Hipoglucemia hipocetósica", "Muerte si no se trata precozmente"]
    },
    diagnosis: {
      biomarkers: ["Acilcarnitinas de cadena larga elevadas", "Carnitina libre elevada", "Lactato y transaminasas elevadas"],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "Detectable en cribado neonatal.",
      confirmatory: ["Perfil de acilcarnitinas", "Secuenciación de SLC25A20", "Estudio funcional en fibroblastos"],
      enzymatic: "El estudio funcional en fibroblastos confirma el defecto del transportador."
    },
    treatment: {
      strategies: ["Soporte intensivo en neonatal", "Evitar ayuno", "Manejo de arritmias", "Apoyo nutricional"],
      diet: "Dieta con aporte frecuente de carbohidratos; restricción de grasas según protocolo; evitar ayunos.",
      cofactors: "No hay cofactor establecido; soporte según necesidad.",
      followup: ["Cardiología", "Nutrición", "Seguimiento bioquímico"]
    },
    sources: [
      { label: "GeneReviews", title: "Carnitine-Acylcarnitine Translocase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "CARNITINE-ACYLCARNITINE TRANSLOCASE DEFICIENCY", ref: "#212138" },
      { label: "Orphanet", title: "Carnitine-acylcarnitine translocase deficiency", ref: "ORPHA:159" }
    ],
    validation: ["Riesgo arritmogénico", "Necesidad de soporte en neonatal"]
  },
  {
    id: "asl",
    name: "Deficiencia de ASL",
    aka: ["Deficiencia de argininosuccinato liasa", "Argininosuccinic aciduria"],
    inheritance: "Autosómica recesiva",
    category: "urea",
    summary: "El déficit de argininosuccinato liasa bloquea la conversión de argininosuccinato en arginina y fumarato. Causa hiperamonemia y acumulación de argininosuccinato.",
    gene: "ASL",
    protein: "Argininosuccinato liasa (ASL)",
    ec: "4.3.2.1",
    organelleId: "mitochondrion",
    pathwayId: "urea-cycle",
    mechanism: {
      normal: "ASL hidroliza argininosuccinato a arginina y fumarato en el citosol, regenerando arginina para continuar el ciclo de la urea.",
      alteration: "Variantes bialélicas de ASL reducen la actividad; el argininosuccinato se acumula en plasma y orina.",
      accumulate: ["Argininosuccinato", "Citrulina", "Amonio"],
      decrease: ["Arginina", "Urea"],
      consequences: ["Hiperamonemia neonatal o tardía", "Hepatomegalia", "Tricorrexis nodosa", "Retraso del desarrollo"]
    },
    diagnosis: {
      biomarkers: ["Argininosuccinato en orina y plasma", "Citrulina elevada", "Amonio elevado"],
      samples: ["Plasma", "Orina"],
      screening: "Puede detectarse por citrulina elevada en cribado neonatal.",
      confirmatory: ["Aminoácidos y argininosuccinato", "Secuenciación de ASL"],
      enzymatic: "Actividad enzimática en eritrocitos o fibroblastos en casos dudosos."
    },
    treatment: {
      strategies: ["Restricción proteica", "Suplementación con arginina", "Fármacos eliminadores de nitrógeno", "Tratamiento agudo de hiperamonemia"],
      diet: "Dieta hipoproteica con aporte calórico suficiente.",
      cofactors: "Arginina es fundamental para el tratamiento crónico.",
      followup: ["Amonio y aminoácidos", "Desarrollo neurológico", "Función hepática"]
    },
    sources: [
      { label: "GeneReviews", title: "Argininosuccinic Aciduria", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ARGININOSUCCINIC ACIDURIA", ref: "#207900" },
      { label: "Orphanet", title: "Argininosuccinate lyase deficiency", ref: "ORPHA:23" }
    ],
    validation: ["Manejo crónico con arginina", "Vigilancia neurológica a largo plazo"]
  },
  {
    id: "arg1",
    name: "Deficiencia de ARG1",
    aka: ["Deficiencia de arginasa I", "Argininemia"],
    inheritance: "Autosómica recesiva",
    category: "urea",
    summary: "El déficit de arginasa I bloquea la conversión de arginina en ornitina y urea en el citosol hepático. Se caracteriza por hiperargininemia y espasticidad progresiva.",
    gene: "ARG1",
    protein: "Arginasa I (ARG1)",
    ec: "3.5.3.1",
    organelleId: "cytosol",
    pathwayId: "urea-cycle",
    mechanism: {
      normal: "ARG1 hidroliza arginina a ornitina y urea, siendo el último paso del ciclo de la urea.",
      alteration: "Variantes bialélicas de ARG1 acumulan arginina; la hiperamonemia es menos grave que en defectos proximales.",
      accumulate: ["Arginina", "Guanidinoacetato", "Homocitrulina"],
      decrease: ["Urea", "Ornitina"],
      consequences: ["Espasticidad progresiva", "Retraso del desarrollo", "Crisis epilépticas", "Microcefalia en algunos casos"]
    },
    diagnosis: {
      biomarkers: ["Arginina muy elevada en plasma", "Amonio variable", "Guanidinoacetato elevado"],
      samples: ["Plasma", "Orina", "Líquido cefalorraquídeo"],
      screening: "Puede detectarse por arginina elevada en cribado neonatal ampliado.",
      confirmatory: ["Aminoácidos plasmáticos", "Secuenciación de ARG1"],
      enzymatic: "Actividad enzimática en eritrocitos o fibroblastos."
    },
    treatment: {
      strategies: ["Restricción proteica", "Dieta baja en arginina", "Fármacos eliminadores si hay hiperamonemia", "Fisioterapia/rehabilitación"],
      diet: "Restricción de proteínas con control estricto de arginina.",
      cofactors: "Suplementación según necesidad.",
      followup: ["Arginina plasmática", "Evaluación neurológica", "Desarrollo motor"]
    },
    sources: [
      { label: "GeneReviews", title: "Arginase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ARGINASE DEFICIENCY", ref: "#207800" },
      { label: "Orphanet", title: "Arginase deficiency", ref: "ORPHA:90" }
    ],
    validation: ["Control de la espasticidad", "Objetivo de arginina plasmática"]
  },
  {
    id: "msud",
    name: "Enfermedad de la orina con olor a jarabe de arce (MSUD)",
    aka: ["Leucinosis", "Maple syrup urine disease"],
    inheritance: "Autosómica recesiva",
    category: "aa",
    summary: "El déficit del complejo deshidrogenasa de cetoácidos de cadena ramificada (BCKD) impide la degradación de leucina, isoleucina y valina. Produce acidosis, edema cerebral y crisis agudas.",
    gene: "BCKDHA/BCKDHB/DBT",
    protein: "Complejo BCKD (E1α, E1β, E2)",
    ec: "1.2.4.4",
    organelleId: "mitochondrion",
    pathwayId: "bcaa-metabolism",
    mechanism: {
      normal: "El complejo BCKD cataliza la descarboxilación oxidativa de los cetoácidos derivados de leucina, isoleucina y valina en la mitocondria.",
      alteration: "Variantes bialélicas reducen la actividad del complejo, acumulando aminoácidos de cadena ramificada y sus cetoácidos.",
      accumulate: ["Leucina, isoleucina, valina", "Cetoácidos de cadena ramificada", "Alóisoleucina"],
      decrease: ["Acetil-CoA/propionil-CoA derivados", "Energía mitocondrial"],
      consequences: ["Crisis neonatal con coma", "Edema cerebral", "Retraso del desarrollo", "Crisis intercurrentes"]
    },
    diagnosis: {
      biomarkers: ["Aminoácidos de cadena ramificada elevados", "Alóisoleucina", "Cetoácidos en orina"],
      samples: ["Sangre", "Orina", "LCR"],
      screening: "Detectable en cribado neonatal (aminoácidos).",
      confirmatory: ["Perfil de aminoácidos", "Secuenciación de BCKDHA/BCKDHB/DBT"],
      enzymatic: "Actividad del complejo BCKD en linfocitos o fibroblastos."
    },
    treatment: {
      strategies: ["Restricción dietética de BCAA", "Fórmula sin leucina/isoleucina/valina", "Manejo agudo de crisis", "Trasplante hepático en casos seleccionados"],
      diet: "Dieta estricta con control de leucina, isoleucina y valina.",
      cofactors: "Tiamina puede ensayarse en formas sensibles.",
      followup: ["Aminoácidos plasmáticos", "Desarrollo neurológico", "Control dietético"]
    },
    sources: [
      { label: "GeneReviews", title: "Maple Syrup Urine Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "MAPLE SYRUP URINE DISEASE", ref: "#248600" },
      { label: "Orphanet", title: "Maple syrup urine disease", ref: "ORPHA:511" }
    ],
    validation: ["Niveles objetivos de leucina", "Manejo de crisis metabólicas"]
  },
  {
    id: "glutaric1",
    name: "Aciduria glutárica tipo I",
    aka: ["Deficiencia de glutaryl-CoA deshidrogenasa", "GA1"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de GCDH bloquea la degradación de la lisina, hidroxilisina y triptófano. Acumula glutaryl-CoA, glutárico y 3-hidroxiglutárico, con riesgo de daño estriatal agudo.",
    gene: "GCDH",
    protein: "Glutaryl-CoA deshidrogenasa (GCDH)",
    ec: "1.3.8.6",
    organelleId: "mitochondrion",
    pathwayId: "lysine-tryptophan-metabolism",
    mechanism: {
      normal: "GCDH oxida glutaryl-CoA a crotonil-CoA en la degradación de lisina, hidroxilisina y triptófano.",
      alteration: "Variantes bialélicas acumulan glutaryl-CoA y se transforman en ácido glutárico y 3-hidroxiglutárico, neurotóxicos para los ganglios basales.",
      accumulate: ["Ácido glutárico", "3-hidroxiglutárico", "Glutarylcarnitina (C5DC)"],
      decrease: ["Energía en neuronas vulnerables"],
      consequences: ["Macrocefalia", "Crisis estriatales con dystonía", "Atrofia putaminal/caudada", "Retraso del desarrollo"]
    },
    diagnosis: {
      biomarkers: ["Glutarylcarnitina C5DC elevada", "Ácido glutárico y 3-hidroxiglutárico en orina", "Guanidinoacetato puede estar alterado"],
      samples: ["Sangre en gota seca", "Orina", "Plasma"],
      screening: "Detectable en cribado neonatal.",
      confirmatory: ["Ácidos orgánicos urinarios", "Perfil de acilcarnitinas", "Secuenciación de GCDH"],
      enzymatic: "Actividad de GCDH en fibroblastos."
    },
    treatment: {
      strategies: ["Restricción dietética de lisina", "Suplementación con carnitina", "Prevención de catabolismo", "Manejo agudo de crisis"],
      diet: "Dieta baja en lisina con fórmula especial.",
      cofactors: "Carnitina para excreción de glutaryl-CoA.",
      followup: ["Neuroimagen", "Desarrollo neurológico", "Aminoácidos y ácidos orgánicos"]
    },
    sources: [
      { label: "GeneReviews", title: "Glutaric Acidemia Type 1", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GLUTARIC ACIDEMIA I", ref: "#231670" },
      { label: "Orphanet", title: "Glutaric acidemia type 1", ref: "ORPHA:25" }
    ],
    validation: ["Vigilancia de ganglios basales", "Protocolo de emergencia"]
  },
  {
    id: "iva",
    name: "Aciduria isovalérica",
    aka: ["Deficiencia de isovaleril-CoA deshidrogenasa", "IVA"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de IVD bloquea la degradación de la leucina. Acumula isovaleril-CoA e isovalérico, con olor característico a \"pies sudados\".",
    gene: "IVD",
    protein: "Isovaleril-CoA deshidrogenasa (IVD)",
    ec: "1.3.8.4",
    organelleId: "mitochondrion",
    pathwayId: "leucine-metabolism",
    mechanism: {
      normal: "IVD cataliza la deshidrogenación de isovaleril-CoA en la vía de degradación de la leucina.",
      alteration: "Variantes bialélicas acumulan isovaleril-CoA, que se transforma en isovalérico y isovalerylglicina.",
      accumulate: ["Ácido isovalérico", "Isovalerylcarnitina (C5)", "Isovalerylglicina"],
      decrease: ["Degradación de leucina"],
      consequences: ["Crisis aguda con acidosis y hiperamonemia", "Olor característico", "Plaquetopenia", "Retraso si no tratado"]
    },
    diagnosis: {
      biomarkers: ["Isovalerylcarnitina C5 elevada", "Ácido isovalérico e isovalerylglicina en orina", "Cetonuria"],
      samples: ["Sangre en gota seca", "Orina", "Plasma"],
      screening: "Detectable en cribado neonatal.",
      confirmatory: ["Ácidos orgánicos urinarios", "Perfil de acilcarnitinas", "Secuenciación de IVD"],
      enzymatic: "Actividad de IVD en fibroblastos."
    },
    treatment: {
      strategies: ["Restricción de leucina", "Glicina para formar isovalerylglicina excretable", "Carnitina", "Manejo agudo"],
      diet: "Dieta baja en leucina.",
      cofactors: "Glicina y carnitina pueden usarse en crisis.",
      followup: ["Ácidos orgánicos urinarios", "Crecimiento", "Desarrollo"]
    },
    sources: [
      { label: "GeneReviews", title: "Isovaleric Acidemia", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ISOVALERIC ACIDEMIA", ref: "#243500" },
      { label: "Orphanet", title: "Isovaleric acidemia", ref: "ORPHA:33" }
    ],
    validation: ["Control de crisis", "Monitoreo de isovalerylglicina"]
  },
  {
    id: "mcc",
    name: "Deficiencia de metilcrotonil-CoA carboxilasa",
    aka: ["MCC deficiency"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de MCCC bloquea la degradación de la leucina en el paso de metilcrotonil-CoA a metilglutaconil-CoA. Suele detectarse en cribado neonatal.",
    gene: "MCCC1/MCCC2",
    protein: "Metilcrotonil-CoA carboxilasa (MCCC)",
    ec: "6.4.1.4",
    organelleId: "mitochondrion",
    pathwayId: "leucine-metabolism",
    mechanism: {
      normal: "MCCC carboxila metilcrotonil-CoA a 3-metilglutaconil-CoA en la vía de degradación de la leucina.",
      alteration: "Variantes bialélicas acumulan metilcrotonil-CoA y sus derivados.",
      accumulate: ["3-hidroxiisovalérico", "3-metilcrotonilglicina", "Metilcrotonilcarnitina (C5-OH)"],
      decrease: ["Degradación de leucina"],
      consequences: ["Mayoría asintomáticas", "Algunas formas con hipotonia o crisis catabólicas"]
    },
    diagnosis: {
      biomarkers: ["Metilcrotonilcarnitina C5-OH elevada", "3-hidroxiisovalérico y 3-metilcrotonilglicina en orina"],
      samples: ["Sangre en gota seca", "Orina"],
      screening: "Detectable en cribado neonatal.",
      confirmatory: ["Ácidos orgánicos", "Perfil de acilcarnitinas", "Secuenciación de MCCC1/MCCC2"],
      enzymatic: "Actividad de MCCC en fibroblastos."
    },
    treatment: {
      strategies: ["Generalmente no requiere restricción estricta", "Suplementación con biotina en algunos casos", "Manejo en catabolismo"],
      diet: "Dieta normal en la mayoría; individualizar.",
      cofactors: "Biotina puede ensayarse.",
      followup: ["Seguimiento clínico", "Ácidos orgánicos si síntomas"]
    },
    sources: [
      { label: "GeneReviews", title: "3-Methylcrotonyl-CoA Carboxylase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "3-METHYLCROTONYL-CoA CARBOXYLASE DEFICIENCY", ref: "#210200" },
      { label: "Orphanet", title: "3-methylcrotonyl-CoA carboxylase deficiency", ref: "ORPHA:6" }
    ],
    validation: ["Necesidad de tratamiento vs seguimiento", "Respuesta a biotina"]
  },
  {
    id: "biotinidase",
    name: "Deficiencia de biotinidasa",
    aka: ["BTD deficiency"],
    inheritance: "Autosómica recesiva",
    category: "cofactor",
    summary: "El déficit de biotinidasa impide liberar biotina de las proteínas dietéticas y reciclarla. Afecta a las carboxilasas dependientes de biotina.",
    gene: "BTD",
    protein: "Biotinidasa (BTD)",
    ec: "3.5.1.12",
    organelleId: "cytosol",
    pathwayId: "biotin-metabolism",
    mechanism: {
      normal: "La biotinidasa hidroliza biotinilpéptidos liberando biotina libre para su uso por las carboxilasas (PCC, PC, MCCC, ACC).",
      alteration: "Variantes bialélicas reducen la actividad, causando deficiencia funcional de biotina.",
      accumulate: ["Biotinilpéptidos", "Metabolitos de carboxilasas alteradas"],
      decrease: ["Biotina libre", "Actividad de carboxilasas dependientes de biotina"],
      consequences: ["Convulsiones", "Dermatitis", "Alopecia", "Ataxia", "Acidosis orgánica"]
    },
    diagnosis: {
      biomarkers: ["Actividad de biotinidasa en sangre", "Ácidos orgánicos con acidosis láctica", "Acetilcarnitina elevada"],
      samples: ["Sangre en gota seca", "Suero", "Orina"],
      screening: "Incluida en muchos programas de cribado neonatal.",
      confirmatory: ["Actividad enzimática de biotinidasa", "Secuenciación de BTD"],
      enzymatic: "El ensayo enzimático es diagnóstico."
    },
    treatment: {
      strategies: ["Suplementación con biotina libre", "Tratamiento precoz", "Seguimiento"],
      diet: "Dieta normal.",
      cofactors: "Biotina oral (5-20 mg/día) generalmente efectiva.",
      followup: ["Actividad o niveles clínicos", "Desarrollo neurológico", "Piel/cabello"]
    },
    sources: [
      { label: "GeneReviews", title: "Biotinidase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "BIOTINIDASE DEFICIENCY", ref: "#253260" },
      { label: "Orphanet", title: "Biotinidase deficiency", ref: "ORPHA:79241" }
    ],
    validation: ["Dosis de biotina según gravedad", "Seguimiento de síntomas"]
  },
  {
    id: "hlcs",
    name: "Deficiencia de holocarboxilasa sintetasa",
    aka: ["HLCS deficiency"],
    inheritance: "Autosómica recesiva",
    category: "cofactor",
    summary: "El déficit de HLCS impide ligar biotina a las apo-carboxilasas, produciendo deficiencia múltiple de carboxilasas. Responde a biotina.",
    gene: "HLCS",
    protein: "Holocarboxilasa sintetasa (HLCS)",
    ec: "6.3.4.10",
    organelleId: "mitochondrion",
    pathwayId: "biotin-metabolism",
    mechanism: {
      normal: "HLCS cataliza la biotinilación de las apo-carboxilasas (PC, PCC, MCCC, ACC) para formar holocarboxilasas activas.",
      alteration: "Variantes bialélicas reducen la unión de biotina, con deficiencia funcional de múltiples carboxilasas.",
      accumulate: ["Ácidos orgánicos", "Lactato"],
      decrease: ["Actividad de carboxilasas"],
      consequences: ["Acidosis metabólica", "Dermatitis", "Convulsiones", "Hepatomegalia"]
    },
    diagnosis: {
      biomarkers: ["Ácidos orgánicos urinarios", "Acilcarnitinas alteradas", "Lactato elevado"],
      samples: ["Orina", "Sangre", "Fibroblastos"],
      screening: "Puede detectarse en cribado ampliado.",
      confirmatory: ["Estudio de carboxilasas en fibroblastos", "Secuenciación de HLCS"],
      enzymatic: "Actividad de HLCS en fibroblastos."
    },
    treatment: {
      strategies: ["Suplementación con biotina", "Tratamiento agudo de acidosis"],
      diet: "Dieta normal.",
      cofactors: "Biotina oral en dosis altas.",
      followup: ["Respuesta clínica", "Ácidos orgánicos"]
    },
    sources: [
      { label: "GeneReviews", title: "Holocarboxylase Synthetase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "HOLOCARBOXYLASE SYNTHETASE DEFICIENCY", ref: "#253270" },
      { label: "Orphanet", title: "Holocarboxylase synthetase deficiency", ref: "ORPHA:79242" }
    ],
    validation: ["Respuesta a biotina", "Dosis óptimas"]
  },
  {
    id: "npc1",
    name: "Enfermedad de Niemann-Pick tipo C1",
    aka: ["NPC1"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de NPC1 impide el transporte de colesterol desde los lisosomas al citosol. Produce acumulación de colesterol y glicoesfingolípidos en tejidos.",
    gene: "NPC1",
    protein: "NPC1 (proteína transmembrana lisosomal)",
    ec: null,
    organelleId: "lysosome",
    pathwayId: "cholesterol-traffic",
    mechanism: {
      normal: "NPC1 transporta colesterol libre desde el lisosoma al retículo endoplasmático/citosol tras la hidrólisis de LDL.",
      alteration: "Variantes bialélicas bloquean ese transporte, acumulándose colesterol no esterificado en lisosomas.",
      accumulate: ["Colesterol no esterificado", "Glicoesfingolípidos", "Esfingosina"],
      decrease: ["Colesterol disponible para síntesis"],
      consequences: ["Hepatoesplenomegalia", "Ataxia", "Parálisis supranuclear de la mirada", "Deterioro cognitivo"]
    },
    diagnosis: {
      biomarkers: ["Filipina mancha positiva (estudio histoquímico)", "Esfingosina plasmática elevada", "Colesterol en fibroblastos"],
      samples: ["Fibroblastos", "Plasma", "Sangre"],
      screening: "No sistemático.",
      confirmatory: ["Estudio con filipina", "Secuenciación de NPC1"],
      enzymatic: "Prueba con filipina en fibroblastos es diagnóstica."
    },
    treatment: {
      strategies: ["Miglustat (en algunos países)", "Apoyo multidisciplinar", "Fisioterapia", "Tratamiento de epilepsia"],
      diet: "Dieta normal.",
      cofactors: "No hay cofactores curativos.",
      followup: ["Neurología", "Hepatología", "Desarrollo cognitivo"]
    },
    sources: [
      { label: "GeneReviews", title: "Niemann-Pick Disease Type C", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "NIEMANN-PICK DISEASE, TYPE C1", ref: "#257220" },
      { label: "Orphanet", title: "Niemann-Pick disease type C", ref: "ORPHA:646" }
    ],
    validation: ["Indicación de miglustat", "Progresión neurológica"]
  },
  {
    id: "npc2",
    name: "Enfermedad de Niemann-Pick tipo C2",
    aka: ["NPC2"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de NPC2 impide la transferencia de colesterol de NPC2 a NPC1 en el lisosoma. Mecanismo complementario a NPC1.",
    gene: "NPC2",
    protein: "NPC2 (proteína soluble lisosomal)",
    ec: null,
    organelleId: "lysosome",
    pathwayId: "cholesterol-traffic",
    mechanism: {
      normal: "NPC2 une colesterol en el lumen lisosomal y lo transfiere a NPC1 para su transporte.",
      alteration: "Variantes bialélicas reducen la transferencia, acumulando colesterol en lisosomas.",
      accumulate: ["Colesterol no esterificado", "Glicoesfingolípidos"],
      decrease: ["Transporte de colesterol"],
      consequences: ["Fenotipo similar a NPC1", "Hepatoesplenomegalia", "Afectación neurológica progresiva"]
    },
    diagnosis: {
      biomarkers: ["Filipina mancha positiva", "Esfingosina plasmática elevada"],
      samples: ["Fibroblastos", "Plasma"],
      screening: "No sistemático.",
      confirmatory: ["Estudio con filipina", "Secuenciación de NPC2"],
      enzymatic: "Estudio funcional en fibroblastos."
    },
    treatment: {
      strategies: ["Miglustat en casos seleccionados", "Apoyo multidisciplinar"],
      diet: "Dieta normal.",
      cofactors: "No hay cofactores.",
      followup: ["Neurología", "Seguimiento clínico"]
    },
    sources: [
      { label: "GeneReviews", title: "Niemann-Pick Disease Type C", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "NIEMANN-PICK DISEASE, TYPE C2", ref: "#607625" },
      { label: "Orphanet", title: "Niemann-Pick disease type C", ref: "ORPHA:646" }
    ],
    validation: ["Diferenciación NPC1/NPC2", "Respuesta a miglustat"]
  },
  {
    id: "dbp",
    name: "Deficiencia de proteína bifuncional D (DBP/HSD17B4)",
    aka: ["Deficiencia de D-bifuncional protein", "DBP deficiency"],
    inheritance: "Autosómica recesiva",
    category: "perox",
    summary: "El déficit de HSD17B4 afecta a la hidratasa y deshidrogenasa de la β-oxidación peroxisomal de ácidos grasos de cadena muy larga y a la síntesis de ácidos biliares.",
    gene: "HSD17B4",
    protein: "Proteína bifuncional D (DBP)",
    ec: "4.2.1.107 / 1.1.1.35",
    organelleId: "peroxisome",
    pathwayId: "vlcfa-oxidation",
    mechanism: {
      normal: "HSD17B4 cataliza los pasos de hidratación y deshidrogenación en la β-oxidación peroxisomal de VLCFA.",
      alteration: "Variantes bialélicas acumulan VLCFA y ácidos biliares intermediarios.",
      accumulate: ["Ácidos grasos de cadena muy larga", "C27 ácidos biliares"],
      decrease: ["β-oxidación peroxisomal"],
      consequences: ["Hipotonía neonatal", "Convulsiones", "Hepatopatía", "Disfunción visual/auditiva"]
    },
    diagnosis: {
      biomarkers: ["VLCFA en plasma elevados", "Ácidos biliares anormales", "Pristanato/fitanato"],
      samples: ["Plasma", "Orina"],
      screening: "Puede detectarse en cribado ampliado.",
      confirmatory: ["Perfil de VLCFA", "Ácidos biliares", "Secuenciación de HSD17B4"],
      enzymatic: "Actividad enzimática en fibroblastos."
    },
    treatment: {
      strategies: ["Soporte nutricional", "Manejo de convulsiones", "Ácidos biliares en casos seleccionados"],
      diet: "Dieta con restricción de VLCFA en casos seleccionados.",
      cofactors: "Soporte sintomático.",
      followup: ["Hepatología", "Neurología", "VLCFA seriados"]
    },
    sources: [
      { label: "GeneReviews", title: "D-Bifunctional Protein Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "D-BIFUNCTIONAL PROTEIN DEFICIENCY", ref: "#261515" },
      { label: "Orphanet", title: "D-bifunctional protein deficiency", ref: "ORPHA:300" }
    ],
    validation: ["Gravedad fenotípica", "Respuesta al tratamiento"]
  },
  {
    id: "gbe1",
    name: "Glucogenosis tipo IV (Enfermedad de Andersen)",
    aka: ["Enfermedad de Andersen", "Deficiencia de glucógeno sintetasa ramificante"],
    inheritance: "Autosómica recesiva",
    category: "glycogen",
    summary: "El déficit de GBE1 impide formar ramificaciones en el glucógeno, produciendo glucógeno anómalo con estructura similar a amilosa. Causa hepatopatía progresiva.",
    gene: "GBE1",
    protein: "Enzima ramificante del glucógeno (GBE1)",
    ec: "2.4.1.18",
    organelleId: "cytosol",
    pathwayId: "glycogen-synthesis",
    mechanism: {
      normal: "GBE1 crea enlaces α-1,6 ramificando las cadenas de glucógeno, lo que lo hace soluble y accesible.",
      alteration: "Variantes bialélicas producen glucógeno poco ramificado (poliglucosano), insoluble y que se acumula en tejidos.",
      accumulate: ["Poliglucosano anómalo", "Glucógeno poco ramificado"],
      decrease: ["Solubilidad del glucógeno"],
      consequences: ["Cirrosis hepática", "Insuficiencia hepática", "Miopatía", "Cardiomiopatía"]
    },
    diagnosis: {
      biomarkers: ["Transaminasas elevadas", "Glucógeno poco ramificado en biopsia", "Pruebas hepáticas"],
      samples: ["Biopsia hepática/muscular", "Sangre"],
      screening: "No sistemático.",
      confirmatory: ["Análisis de glucógeno tisular", "Secuenciación de GBE1"],
      enzymatic: "Actividad de GBE1 en tejido o leucocitos."
    },
    treatment: {
      strategies: ["Trasplante hepático en formas hepáticas graves", "Apoyo nutricional", "Manejo cardíaco/neuromuscular"],
      diet: "Dieta con aporte frecuente de carbohidratos, individualizar.",
      cofactors: "Soporte sintomático.",
      followup: ["Hepatología", "Cardiología", "Nutrición"]
    },
    sources: [
      { label: "GeneReviews", title: "Glycogen Storage Disease Type IV", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GLYCOGEN STORAGE DISEASE IV", ref: "#232500" },
      { label: "Orphanet", title: "Glycogen storage disease type 4", ref: "ORPHA:2636" }
    ],
    validation: ["Criterios de trasplante hepático", "Vigilancia cardíaca"]
  },
  {
    id: "aldob",
    name: "Intolerancia hereditaria a la fructosa",
    aka: ["HFI", "Deficiencia de fructosa-1-fosfato aldolasa"],
    inheritance: "Autosómica recesiva",
    category: "carbs",
    summary: "El déficit de aldolasa B impide metabolizar la fructosa-1-fosfato en el hígado, riñón e intestino. La ingestión de fructosa provoca hipoglucemia y daño hepático/renal.",
    gene: "ALDOB",
    protein: "Fructosa-1-fosfato aldolasa B (ALDOB)",
    ec: "4.1.2.13",
    organelleId: "cytosol",
    pathwayId: "fructose-metabolism",
    mechanism: {
      normal: "ALDOB hidroliza fructosa-1-fosfato a dihidroxiacetona fosfato y gliceraldehído en el hígado, riñón e intestino.",
      alteration: "Variantes bialélicas acumulan fructosa-1-fosfato, agotando fosfatos y dañando hepatocitos y túbulos renales.",
      accumulate: ["Fructosa-1-fosfato", "Fructosa en orina"],
      decrease: ["ATP", "Fosfato inorgánico"],
      consequences: ["Hipoglucemia tras ingestión de fructosa", "Vómitos", "Hepatomegalia", "Insuficiencia renal"]
    },
    diagnosis: {
      biomarkers: ["Transaminasas elevadas tras exposición", "Ácido úrico", "Fructosuria"],
      samples: ["Sangre", "Orina"],
      screening: "No sistemático.",
      confirmatory: ["Prueba de tolerancia a la fructosa (evitada)", "Secuenciación de ALDOB"],
      enzymatic: "Actividad enzimática en biopsia hepática."
    },
    treatment: {
      strategies: ["Eliminación estricta de fructosa, sacarosa y sorbitol", "Educación dietética", "Manejo agudo de hipoglucemia"],
      diet: "Dieta sin fructosa/sacarosa/sorbitol de por vida.",
      cofactors: "No hay cofactores.",
      followup: ["Función hepática/renal", "Crecimiento", "Control dietético"]
    },
    sources: [
      { label: "GeneReviews", title: "Hereditary Fructose Intolerance", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "FRUCTOSE INTOLERANCE, HEREDITARY", ref: "#229600" },
      { label: "Orphanet", title: "Hereditary fructose intolerance", ref: "ORPHA:469" }
    ],
    validation: ["Cumplimiento dietético", "Riesgo tras exposición accidental"]
  },
  {
    id: "menkes",
    name: "Enfermedad de Menkes",
    aka: ["Síndrome de Menkes", "Kinky hair disease"],
    inheritance: "Ligada al X",
    category: "metal",
    summary: "El déficit de ATP7A impide el transporte de cobre a través de la membrana intestinal y su distribución sistémica. Causa deficiencia sistémica de cobre con afectación cerebral.",
    gene: "ATP7A",
    protein: "ATPasa transportadora de cobre ATP7A",
    ec: "7.2.2.8",
    organelleId: "golgi",
    pathwayId: "copper-transport",
    mechanism: {
      normal: "ATP7A transporta cobre a través del aparato de Golgi para incorporarlo a enzimas cuprodependientes (lisil oxidasa, citocromo c oxidasa, tirosinasa).",
      alteration: "Variantes en ATP7A impiden la absorción intestinal y el transporte tisular, causando deficiencia de cobre.",
      accumulate: ["Cobre en enterocitos", "Cobre reducido en plasma"],
      decrease: ["Cobre sérico", "Ceruloplasmina", "Enzimas cuprodependientes"],
      consequences: ["Pelo ensortijado", "Hipotonía", "Convulsiones", "Degeneración cerebral", "Muerte temprana"]
    },
    diagnosis: {
      biomarkers: ["Cobre sérico bajo", "Ceruloplasmina baja", "Cobre en cabello"],
      samples: ["Suero", "Orina", "Cabello"],
      screening: "No sistemático.",
      confirmatory: ["Cobre y ceruloplasmina", "Secuenciación de ATP7A"],
      enzymatic: "No rutinario."
    },
    treatment: {
      strategies: ["Inyecciones de cobre histidinato", "Soporte neurológico", "Manejo de convulsiones"],
      diet: "Dieta normal.",
      cofactors: "Cobre parenteral precoz puede mejorar pronóstico.",
      followup: ["Neurología", "Desarrollo", "Cobre sérico"]
    },
    sources: [
      { label: "GeneReviews", title: "Menkes Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "MENKES DISEASE", ref: "#309400" },
      { label: "Orphanet", title: "Menkes disease", ref: "ORPHA:248" }
    ],
    validation: ["Ventana terapéutica", "Respuesta a tratamiento parenteral"]
  },
  {
    id: "pmm2",
    name: "CDG tipo Ia (PMM2-CDG)",
    aka: ["PMM2 deficiency", "Congenital disorder of glycosylation type Ia"],
    inheritance: "Autosómica recesiva",
    category: "cdg",
    summary: "El déficit de fosfomanomutasa 2 impide la conversión de manosa-6-fosfato a manosa-1-fosfato, bloqueando la glicosilación N-ligada. Afecta a múltiples sistemas.",
    gene: "PMM2",
    protein: "Fosfomanomutasa 2 (PMM2)",
    ec: "5.4.2.8",
    organelleId: "er",
    pathwayId: "n-glycosylation",
    mechanism: {
      normal: "PMM2 convierte manosa-6-P a manosa-1-P para la síntesis de GDP-mannosa necesaria para la glicosilación N-ligada.",
      alteration: "Variantes bialélicas reducen la disponibilidad de GDP-mannosa, con glicosilación deficiente de glicoproteínas.",
      accumulate: ["Manosa-6-fosfato"],
      decrease: ["GDP-mannosa", "Glicosilación N-ligada"],
      consequences: ["Hipotonía", "Ataxia cerebelosa", "Retraso psicomotor", "Estrabismo", "Pericarditis"]
    },
    diagnosis: {
      biomarkers: ["Isoformas transferrina anómalas (tipo CDG)", "Transferrina con déficit de sialilación"],
      samples: ["Suero"],
      screening: "Detección por electroforesis/isoelectroenfoque de transferrina.",
      confirmatory: ["Perfil de transferrina", "Actividad de PMM2", "Secuenciación de PMM2"],
      enzymatic: "Actividad enzimática en leucocitos o fibroblastos."
    },
    treatment: {
      strategies: ["Apoyo multidisciplinar", "Tratamiento sintomático"],
      diet: "Dieta normal.",
      cofactors: "No hay tratamiento curativo establecido.",
      followup: ["Neurología", "Cardiología", "Endocrinología"]
    },
    sources: [
      { label: "GeneReviews", title: "PMM2-CDG", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "CONGENITAL DISORDER OF GLYCOSYLATION, TYPE Ia", ref: "#212065" },
      { label: "Orphanet", title: "PMM2-CDG", ref: "ORPHA:79318" }
    ],
    validation: ["Seguimiento evolutivo", "Soporte multidisciplinar"]
  },
  {
    id: "mpi",
    name: "CDG tipo Ib (MPI-CDG)",
    aka: ["MPI deficiency"],
    inheritance: "Autosómica recesiva",
    category: "cdg",
    summary: "El déficit de manosa-fosfato isomerasa impide convertir fructosa-6-fosfato a manosa-6-fosfato. A diferencia de PMM2-CDG, responde al tratamiento con manosa oral.",
    gene: "MPI",
    protein: "Manosa-fosfato isomerasa (MPI)",
    ec: "5.3.1.8",
    organelleId: "er",
    pathwayId: "n-glycosylation",
    mechanism: {
      normal: "MPI convierte fructosa-6-P a manosa-6-P para la síntesis de GDP-mannosa.",
      alteration: "Variantes bialélicas reducen la síntesis de manosa-6-P, con glicosilación deficiente.",
      accumulate: ["Fructosa-6-fosfato"],
      decrease: ["Manosa-6-P", "GDP-mannosa"],
      consequences: ["Hepatopatía", "Coagulopatía", "Hipoglucemia", "Diarrea", "Retraso del desarrollo"]
    },
    diagnosis: {
      biomarkers: ["Transferrina con patrón CDG", "Hepatopatía", "Coagulopatía"],
      samples: ["Suero"],
      screening: "Por perfil de transferrina.",
      confirmatory: ["Actividad de MPI", "Secuenciación de MPI"],
      enzymatic: "Actividad enzimática en leucocitos o fibroblastos."
    },
    treatment: {
      strategies: ["Manosa oral", "Soporte de coagulopatía", "Manejo hepático"],
      diet: "Dieta normal con manosa suplementaria según protocolo.",
      cofactors: "D-manosa oral es terapéutica.",
      followup: ["Función hepática/coagulación", "Perfil de transferrina"]
    },
    sources: [
      { label: "GeneReviews", title: "MPI-CDG", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "CONGENITAL DISORDER OF GLYCOSYLATION, TYPE Ib", ref: "#602579" },
      { label: "Orphanet", title: "MPI-CDG", ref: "ORPHA:79319" }
    ],
    validation: ["Respuesta a manosa oral", "Monitorización de transferrina"]
  },
  {
    id: "nadh-oxphos",
    name: "Deficiencia de complejo I mitocondrial (NDUFS1)",
    aka: ["Deficiencia de NADH deshidrogenasa", "CI deficiency"],
    inheritance: "Autosómica recesiva",
    category: "energy",
    summary: "El déficit del complejo I de la cadena respiratoria reduce el flujo de electrones desde NADH, afectando la fosforilación oxidativa. Forma multisistémica grave.",
    gene: "NDUFS1",
    protein: "Subunidad NDUFS1 del complejo I",
    ec: "7.1.1.2",
    organelleId: "mitochondrion",
    pathwayId: "oxphos",
    mechanism: {
      normal: "El complejo I transfiere electrones de NADH a ubiquinona, bombeando protones al espacio intermembrana.",
      alteration: "Variantes bialélicas en subunidades del complejo I reducen su actividad, disminuyendo la producción de ATP.",
      accumulate: ["Lactato", "Piruvato", "Alanina"],
      decrease: ["ATP", "Potencial mitocondrial"],
      consequences: ["Acidosis láctica", "Encefalopatía", "Cardiomiopatía", "Miopatía", "Fallo multiorgánico"]
    },
    diagnosis: {
      biomarkers: ["Lactato y piruvato elevados", "Acidosis láctica", "Alanina elevada"],
      samples: ["Sangre", "LCR", "Orina"],
      screening: "No sistemático.",
      confirmatory: ["Actividad de complejos respiratorios en músculo/fibroblastos", "Secuenciación de NDUFS1"],
      enzymatic: "Espectrofotometría de complejos mitocondriales es diagnóstica."
    },
    treatment: {
      strategies: ["Soporte sintomático", "Tratamiento de acidosis", "Apoyo nutricional"],
      diet: "Dieta con aporte calórico adecuado, individualizar.",
      cofactors: "Coenzima Q10, riboflavina, carnitina pueden ensayarse en algunos casos.",
      followup: ["Neurología", "Cardiología", "Lactato seriado"]
    },
    sources: [
      { label: "GeneReviews", title: "Mitochondrial Complex I Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "MITOCHONDRIAL COMPLEX I DEFICIENCY, NUCLEAR TYPE", ref: "#252010" },
      { label: "Orphanet", title: "Isolated complex I deficiency", ref: "ORPHA:2609" }
    ],
    validation: ["Respuesta a cofactores", "Pronóstico variable"]
  },
  {
    id: "hmgcl",
    name: "Deficiencia de HMG-CoA liasa",
    aka: ["HMGCL deficiency", "3-hydroxy-3-methylglutaryl-CoA lyase deficiency"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de HMG-CoA liasa bloquea la cetogénesis y la degradación de la leucina. Provoca hipoglucemia hipocetósica con acidosis metabólica.",
    gene: "HMGCL",
    protein: "3-hidroxi-3-metilglutaril-CoA liasa (HMGCL)",
    ec: "4.1.3.4",
    organelleId: "mitochondrion",
    pathwayId: "ketogenesis-leucine",
    mechanism: {
      normal: "HMGCL rompe HMG-CoA en acetoacetato y acetil-CoA, fundamental para cetogénesis y para final de la vía de la leucina.",
      alteration: "Variantes bialélicas impiden cetogénesis y degradación de leucina, acumulando HMG-CoA y sus derivados.",
      accumulate: ["Ácido 3-hidroxi-3-metilglutárico", "Ácido 3-metilglutacónico", "HMG-carnitina"],
      decrease: ["Cuerpos cetónicos", "Acetil-CoA"],
      consequences: ["Hipoglucemia hipocetósica", "Acidosis metabólica", "Hepatomegalia", "Convulsiones"]
    },
    diagnosis: {
      biomarkers: ["Cuerpos cetónicos ausentes o bajos", "Ácidos orgánicos en orina", "HMG-carnitina en perfil de acilcarnitinas"],
      samples: ["Sangre en gota seca", "Orina", "Plasma"],
      screening: "Puede detectarse en cribado ampliado.",
      confirmatory: ["Ácidos orgánicos", "Perfil de acilcarnitinas", "Secuenciación de HMGCL"],
      enzymatic: "Actividad enzimática en fibroblastos."
    },
    treatment: {
      strategies: ["Evitar ayuno prolongado", "Aporte de carbohidratos", "Manejo agudo de crisis"],
      diet: "Dieta con aporte frecuente de carbohidratos; restricción moderada de leucina en algunos casos.",
      cofactors: "Carnitina puede considerarse.",
      followup: ["Glucemia", "Cetonuria/cetemia", "Desarrollo"]
    },
    sources: [
      { label: "GeneReviews", title: "3-Hydroxy-3-Methylglutaryl-CoA Lyase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "3-HYDROXY-3-METHYLGLUTARYL-CoA LYASE DEFICIENCY", ref: "#246450" },
      { label: "Orphanet", title: "3-hydroxy-3-methylglutaryl-CoA lyase deficiency", ref: "ORPHA:20" }
    ],
    validation: ["Manejo de ayuno", "Prevención de crisis catabólicas"]
  }
];

const EXTRA_DISEASE_BY_ID = Object.fromEntries(EXTRA_DISEASES.map((d) => [d.id, d]));

