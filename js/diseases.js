/* ============================================================
   METABOLOMA INTERACTIVO — Fichas de enfermedades
   Versión estable: 40 enfermedades integradas en rutas y organelos.
   ============================================================ */

const DISEASES = [
  {
    id: "mcad",
    name: "Deficiencia de MCAD",
    aka: ["MCADD", "Deficiencia de acil-CoA deshidrogenasa de cadena media", "Trastorno de la oxidación de ácidos grasos de cadena media"],
    inheritance: "Autosómica recesiva",
    category: "fao",
    summary: "El déficit de MCAD interrumpe la β-oxidación de ácidos grasos de cadena media en la mitocondria. Durante el ayuno el organismo no puede oxidar grasas ni producir cuerpos cetónicos, lo que puede provocar hipoglucemia hipocetósica.",
    gene: "ACADM",
    protein: "Acil-CoA deshidrogenasa de cadena media (MCAD)",
    ec: "1.3.8.7",
    organelleId: "mitochondrion",
    pathwayId: "fa-beta-oxidation",
    mechanism: {
      normal: "La MCAD cataliza el primer paso de la β-oxidación de los acil-CoA de cadena media (C4–C12), una vía clave para obtener energía durante el ayuno.",
      alteration: "Variantes patogénicas bialélicas en ACADM que reducen o anulan la actividad enzimática.",
      accumulate: [
        "Acilcarnitinas de cadena media en sangre (C6–C10; típicamente octanoilcarnitina C8 y C8:1)",
        "Ácidos dicarboxílicos de cadena media en orina",
        "Acilglicinas urinarias"
      ],
      decrease: [
        "Producción de cuerpos cetónicos durante el ayuno",
        "Obtención de energía a partir de ácidos grasos"
      ],
      consequences: [
        "Hipoglucemia hipocetósica durante el ayuno prolongado o enfermedades intercurrentes",
        "Vómitos, letargo y encefalopatía en las crisis metabólicas",
        "Riesgo de arritmias y muerte súbita si la crisis no se trata"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Perfil de acilcarnitinas en sangre (elevación de C8 y C8:1)",
        "Ácidos orgánicos urinarios (dicarboxílicos de cadena media)",
        "Acilglicinas urinarias"
      ],
      samples: ["Sangre en gota seca (cribado neonatal)", "Plasma/suero", "Orina"],
      screening: "Cribado neonatal ampliado mediante espectrometría de masas en tándem (perfil de acilcarnitinas).",
      confirmatory: ["Perfil de acilcarnitinas diagnóstico", "Análisis mutacional del gen ACADM"],
      enzymatic: "La medición de actividad enzimática en fibroblastos o linfocitos rara vez es necesaria cuando el perfil bioquímico y el estudio genético son concluyentes."
    },
    treatment: {
      strategies: [
        "Evitar el ayuno prolongado",
        "Aporte de glucosa intravenosa durante los episodios agudos",
        "Manejo de las enfermedades intercurrentes con aporte energético frecuente"
      ],
      diet: "Evitar ayunos prolongados y asegurar un aporte adecuado de carbohidratos; el esquema individualizado debe definirlo el equipo de metabolismo.",
      cofactors: "La suplementación con L-carnitina o triglicéridos de cadena media se decide de forma individualizada; no debe generalizarse.",
      followup: [
        "Seguimiento por una unidad de metabolismo",
        "Educación sobre los periodos de ayuno tolerados y planes de emergencia",
        "Vigilancia del crecimiento y del estado nutricional"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ACYL-CoA DEHYDROGENASE, MEDIUM-CHAIN, DEFICIENCY OF", ref: "#201450" },
      { label: "Orphanet", title: "Medium-chain acyl-CoA dehydrogenase deficiency", ref: "ORPHA:42" }
    ],
    validation: ["Duración exacta del ayuno tolerado según la edad", "Umbrales concretos de acilcarnitinas para el diagnóstico"]
  },
  {
    id: "vlcad",
    name: "Deficiencia de VLCAD",
    aka: ["Deficiencia de acil-CoA deshidrogenasa de cadena muy larga", "VLCADD"],
    inheritance: "Autosómica recesiva",
    category: "fao",
    summary: "El déficit de VLCAD altera la primera deshidrogenación de la β-oxidación mitocondrial de ácidos grasos de cadena muy larga. Puede manifestarse con hipoglucemia hipocetósica, miopatía o cardiomiopatía.",
    gene: "ACADVL",
    protein: "Acil-CoA deshidrogenasa de cadena muy larga (VLCAD)",
    ec: "1.3.8.9",
    organelleId: "mitochondrion",
    pathwayId: "fa-beta-oxidation",
    mechanism: {
      normal: "La VLCAD cataliza la deshidrogenación inicial de los acil-CoA de cadena larga (C14–C20) en la matriz mitocondrial.",
      alteration: "Variantes bialélicas de ACADVL que reducen la actividad de la enzima, con fenotipos infantil grave, infantil moderado y de inicio tardío.",
      accumulate: [
        "Acilcarnitinas de cadena larga (C14:1, C14, C16) en sangre",
        "Ácidos dicarboxílicos en orina durante las crisis",
        "Triglicéridos hepáticos en algunas formas"
      ],
      decrease: ["Cuerpos cetónicos durante el ayuno", "Producción mitocondrial de energía a partir de grasas"],
      consequences: [
        "Hipoglucemia hipocetósica en el ayuno o con infecciones",
        "Cardiomiopatía y arritmias en la forma infantil",
        "Rabdomiólisis y mioglobinuria en la forma de inicio tardío"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Perfil de acilcarnitinas (C14:1 elevada, C14 y C16)",
        "Ácidos orgánicos urinarios",
        "Creatina quinasa elevada durante la rabdomiólisis"
      ],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "Cribado neonatal con espectrometría de masas en tándem (acilcarnitinas).",
      confirmatory: ["Perfil de acilcarnitinas y estudio de ACADVL", "Actividad enzimática en fibroblastos en casos dudosos"],
      enzymatic: "La medición de la actividad de VLCAD en fibroblastos o linfocitos puede confirmar el diagnóstico cuando la genética no es concluyente."
    },
    treatment: {
      strategies: [
        "Evitar el ayuno y las crisis catabólicas",
        "Glucosa intravenosa durante los episodios agudos",
        "Manejo de la rabdomiólisis y de la afectación cardíaca"
      ],
      diet: "Dieta con restricción de grasas de cadena muy larga y suplementación de triglicéridos de cadena media (MCT) según el protocolo del equipo de metabolismo.",
      cofactors: "L-carnitina y MCT pueden considerarse de forma individualizada.",
      followup: [
        "Evaluación cardiológica periódica",
        "Control de CK, crecimiento y estado nutricional",
        "Plan de emergencia para episodios de ayuno o infección"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Very Long-Chain Acyl-Coenzyme A Dehydrogenase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ACYL-CoA DEHYDROGENASE, VERY LONG-CHAIN, DEFICIENCY OF", ref: "#201475" },
      { label: "Orphanet", title: "Very long chain acyl-CoA dehydrogenase deficiency", ref: "Orphanet" }
    ],
    validation: ["Umbrales de ayuno tolerado según edad y fenotipo", "Selección de pacientes candidatos a MCT"]
  },
  {
    id: "otc",
    name: "Deficiencia de OTC",
    aka: ["Deficiencia de ornitina transcarbamilasa", "OTC deficiency"],
    inheritance: "Ligada al X",
    category: "urea",
    summary: "El déficit de OTC interrumpe el ciclo de la urea en su etapa mitocondrial. El amonio no se detoxifica correctamente y se acumula, causando hiperamonemia con riesgo de encefalopatía.",
    gene: "OTC",
    protein: "Ornitina transcarbamilasa (OTC)",
    ec: "2.1.3.3",
    organelleId: "mitochondrion",
    pathwayId: "urea-cycle",
    mechanism: {
      normal: "La OTC convierte el carbamoil fosfato y la ornitina en citrulina dentro de la matriz mitocondrial, segundo paso del ciclo de la urea.",
      alteration: "Variantes en OTC (gen ligado al X) con actividad residual variable; las mujeres portadoras pueden presentar síntomas por inactivación sesgada del cromosoma X.",
      accumulate: [
        "Amonio en sangre",
        "Glutamina (marcador de hiperamonemia crónica)",
        "Ácido orótico en orina"
      ],
      decrease: ["Citrulina plasmática", "Arginina", "Urea"],
      consequences: [
        "Hiperamonemia con vómitos, letargo y rechazo del alimento en el neonato",
        "Edema cerebral y encefalopatía en crisis graves",
        "Retraso del crecimiento y deterioro neurológico en formas parciales"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Amonio plasmático elevado",
        "Aminoácidos plasmáticos: glutamina alta y citrulina baja",
        "Ácido orótico urinario elevado"
      ],
      samples: ["Plasma", "Orina", "Sangre en gota seca (según programa)"],
      screening: "No todos los programas neonatales incluyen OTC; la sospecha clínica y el amonio son clave.",
      confirmatory: ["Estudio de aminoácidos y ácido orótico", "Secuenciación de OTC; análisis enzimático hepático en casos seleccionados"],
      enzymatic: "La actividad de OTC puede medirse en tejido hepático, pero rara vez es necesaria si la genética es concluyente."
    },
    treatment: {
      strategies: [
        "Reducción urgente del amonio con benzoato de sodio y fenilbutirato",
        "Hemodiálisis o hemofiltración en la hiperamonemia grave",
        "Arginina o citrulina para mantener el ciclo y la síntesis de proteínas"
      ],
      diet: "Restricción individualizada de proteínas con aporte calórico suficiente, controlada por una unidad de metabolismo.",
      cofactors: "No hay cofactor específico; la citrulina y la arginina son sustratos condicionalmente esenciales.",
      followup: [
        "Control de amonio y aminoácidos",
        "Seguimiento del crecimiento y del desarrollo neurológico",
        "Plan de emergencia y educación familiar"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Ornithine Transcarbamylase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ORNITHINE TRANSCARBAMYLASE DEFICIENCY", ref: "#311250" },
      { label: "Orphanet", title: "Ornithine transcarbamylase deficiency", ref: "ORPHA:664" }
    ],
    validation: ["Umbral de amonio para iniciar diálisis", "Ajuste proteico según edad y tolerancia"]
  },
  {
    id: "ass1",
    name: "Citrulinemia tipo I",
    aka: ["Deficiencia de argininosuccinato sintetasa", "CTLN1"],
    inheritance: "Autosómica recesiva",
    category: "urea",
    summary: "El déficit de argininosuccinato sintetasa bloquea la unión de citrulina y aspartato en el citosol. La citrulina y el amonio se acumulan, con riesgo de hiperamonemia grave.",
    gene: "ASS1",
    protein: "Argininosuccinato sintetasa (ASS1)",
    ec: "6.3.4.5",
    organelleId: "cytosol",
    pathwayId: "urea-cycle",
    mechanism: {
      normal: "La ASS1 convierte la citrulina y el aspartato en argininosuccinato en el citosol, tercer paso del ciclo de la urea.",
      alteration: "Variantes bialélicas en ASS1 que reducen la actividad enzimática; existen formas neonatales graves y formas de inicio tardío.",
      accumulate: ["Citrulina en plasma", "Amonio", "Glutamina"],
      decrease: ["Arginina", "Urea"],
      consequences: [
        "Hiperamonemia neonatal con encefalopatía",
        "Vómitos, letargo y edema cerebral en las crisis",
        "Retraso del crecimiento y del desarrollo en formas parciales"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Citrulina plasmática muy elevada",
        "Amonio elevado",
        "Glutamina elevada"
      ],
      samples: ["Plasma", "Orina", "Sangre en gota seca"],
      screening: "La citrulina forma parte de muchos paneles de cribado neonatal por espectrometría de masas.",
      confirmatory: ["Perfil de aminoácidos", "Secuenciación de ASS1"],
      enzymatic: "La actividad de ASS1 puede medirse en fibroblastos o tejido hepático en casos seleccionados."
    },
    treatment: {
      strategies: [
        "Reducción del amonio con benzoato y fenilbutirato",
        "Arginina como sustrato condicionalmente esencial",
        "Hemodiálisis en crisis graves"
      ],
      diet: "Restricción proteica individualizada con aporte energético adecuado y seguimiento nutricional estrecho.",
      cofactors: "No existe cofactor farmacológico específico.",
      followup: ["Amonio y aminoácidos periódicos", "Crecimiento y neurodesarrollo", "Consejo genético familiar"]
    },
    sources: [
      { label: "GeneReviews", title: "Citrullinemia Type I", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "CITRULLINEMIA, TYPE I", ref: "#215700" },
      { label: "Orphanet", title: "Citrullinemia type I", ref: "Orphanet" }
    ],
    validation: ["Protocolo de rescate de amonio según centro", "Objetivos de arginina plasmática"]
  },
  {
    id: "pdh",
    name: "Deficiencia del complejo PDH",
    aka: ["Déficit de piruvato deshidrogenasa", "PDHD"],
    inheritance: "Ligada al X (PDHA1)",
    category: "energy",
    summary: "El complejo piruvato deshidrogenasa no convierte el piruvato en acetil-CoA. El piruvato se desvía a lactato y el cerebro dispone de menos energía, lo que puede causar acidosis láctica y retraso del desarrollo.",
    gene: "PDHA1",
    protein: "Subunidad E1α del complejo piruvato deshidrogenasa",
    ec: "1.2.4.1",
    organelleId: "mitochondrion",
    pathwayId: "energy-metabolism",
    mechanism: {
      normal: "El complejo PDH, formado por múltiples subunidades, descarboxila el piruvato y lo convierte en acetil-CoA, conectando la glucólisis con el ciclo de Krebs.",
      alteration: "Variantes en PDHA1 (X-linked) u otros genes del complejo que reducen su actividad; el fenotipo es muy variable.",
      accumulate: ["Lactato", "Piruvato", "Alanina"],
      decrease: ["Acetil-CoA derivado del piruvato", "Producción de ATP por el ciclo de Krebs"],
      consequences: [
        "Acidosis láctica, especialmente tras comidas ricas en carbohidratos",
        "Hipotonía, retraso psicomotor y convulsiones",
        "Lesiones tipo Leigh en ganglios basales en algunos pacientes"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Lactato y piruvato elevados",
        "Alanina elevada en plasma",
        "Ácidos orgánicos urinarios con lactato"
      ],
      samples: ["Plasma", "LCR en casos seleccionados", "Orina"],
      screening: "No está incluido de forma universal en el cribado neonatal; se sospecha por clínica y lactato.",
      confirmatory: ["Estudio de PDHA1 y otros genes del complejo", "Actividad enzimática en fibroblastos o músculo"],
      enzymatic: "La medición de la actividad del complejo PDH en fibroblastos o tejido es útil cuando la genética no es concluyente."
    },
    treatment: {
      strategies: [
        "Dieta cetogénica, que aporta acetil-CoA sin depender de la PDH",
        "Prueba con tiamina en casos seleccionados",
        "Manejo de la acidosis y de las crisis metabólicas"
      ],
      diet: "La dieta cetogénica es la base del tratamiento en muchos pacientes; debe instaurarse y supervisarse por un equipo especializado.",
      cofactors: "Tiamina (vitamina B1) como cofactor del complejo; la respuesta es variable. Dicloroacetato solo en protocolos seleccionados.",
      followup: ["Lactato, estado ácido-base y crecimiento", "Neurodesarrollo y control de convulsiones", "Tolerancia a la dieta cetogénica"]
    },
    sources: [
      { label: "GeneReviews", title: "Primary Pyruvate Dehydrogenase Complex Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "PYRUVATE DEHYDROGENASE E1-ALPHA DEFICIENCY", ref: "#312170" },
      { label: "Orphanet", title: "Pyruvate dehydrogenase deficiency", ref: "Orphanet" }
    ],
    validation: ["Indicación y duración de la dieta cetogénica", "Criterios de respuesta a tiamina"]
  },
  {
    id: "leigh",
    name: "Síndrome de Leigh",
    aka: ["Encefalomielopatía necrotizante subaguda", "Leigh syndrome"],
    inheritance: "Heterogénea (mitocondrial o nuclear)",
    category: "energy",
    summary: "Las deficiencias de la cadena respiratoria reducen la producción de ATP y provocan lesiones neurodegenerativas en ganglios basales y tronco del encéfalo. Es un síndrome genéticamente heterogéneo.",
    gene: "Múltiples (p. ej. NDUFS4, SURF1, MT-ATP6)",
    protein: "Complejos I–V de la cadena respiratoria",
    ec: "7.1.1.2 / 7.1.1.9",
    organelleId: "mitochondrion",
    pathwayId: "energy-metabolism",
    mechanism: {
      normal: "La cadena respiratoria transfiere electrones del NADH y FADH₂ al oxígeno y genera el gradiente de protones que impulsa la ATP sintasa.",
      alteration: "Variantes en genes nucleares o mitocondriales que afectan a los complejos de la cadena respiratoria o a su ensamblaje.",
      accumulate: ["Lactato", "Piruvato", "Alanina"],
      decrease: ["Producción de ATP", "Actividad de la cadena respiratoria en tejido"],
      consequences: [
        "Regresión psicomotora y pérdida de habilidades adquiridas",
        "Lesiones simétricas en ganglios basales y tronco del encéfalo",
        "Hipotonía, oftalmoplejía, convulsiones y fallo respiratorio"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Lactato elevado en sangre y LCR",
        "Relación lactato/piruvato alterada",
        "Ácidos orgánicos urinarios con lactato"
      ],
      samples: ["Plasma", "LCR", "Orina", "Músculo (biopsia)"],
      screening: "No existe un cribado neonatal universal; se investiga ante clínica compatible y lactato elevado.",
      confirmatory: ["RM cerebral con lesiones características", "Panel genético mitocondrial y estudio de mtDNA", "Biopsia muscular con análisis enzimático"],
      enzymatic: "La medición de actividades de los complejos I–V en músculo o fibroblastos orienta el defecto."
    },
    treatment: {
      strategies: [
        "Tratamiento de soporte multidisciplinar",
        "Manejo de crisis metabólicas y de la acidosis láctica",
        "Fisioterapia, logopedia y soporte respiratorio según necesidad"
      ],
      diet: "La dieta cetogénica puede considerarse en casos seleccionados; no existe una dieta única para todos los fenotipos.",
      cofactors: "Coenzima Q10, riboflavina, tiamina o carnitina se ensayan de forma individualizada, con evidencia limitada.",
      followup: ["Neurológico y respiratorio periódico", "Lactato y estado nutricional", "Consejo genético y estudio familiar"]
    },
    sources: [
      { label: "GeneReviews", title: "Leigh Syndrome", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "LEIGH SYNDROME", ref: "#256000" },
      { label: "Orphanet", title: "Leigh syndrome", ref: "Orphanet" }
    ],
    validation: ["Criterios de uso de cofactores", "Selección de pacientes para dieta cetogénica"]
  },
  {
    id: "gaucher",
    name: "Enfermedad de Gaucher",
    aka: ["Déficit de glucocerebrosidasa", "Gaucher disease"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de glucocerebrosidasa ácida acumula glucosilceramida en los lisosomas de los macrófagos, que se transforman en células de Gaucher. Es la enfermedad de almacenamiento lisosomal más frecuente.",
    gene: "GBA1",
    protein: "Glucocerebrosidasa ácida (β-glucosidasa)",
    ec: "3.2.1.45",
    organelleId: "lysosome",
    pathwayId: "sphingolipid-degradation",
    mechanism: {
      normal: "La glucocerebrosidasa ácida hidroliza la glucosilceramida en glucosa y ceramida dentro del lisosoma.",
      alteration: "Variantes bialélicas en GBA1 que reducen la actividad enzimática; la gravedad depende del genotipo y del tipo clínico.",
      accumulate: [
        "Glucosilceramida en macrófagos (células de Gaucher)",
        "Quitotriosidasa y CCL18 elevadas en plasma",
        "Glucosilesfingosina en formas neuronopáticas"
      ],
      decrease: ["Degradación lisosomal normal de glucoesfingolípidos"],
      consequences: [
        "Hepatoesplenomegalia y citopenias",
        "Afectación ósea: dolor, fracturas y necrosis avascular",
        "Formas neuronopáticas con regresión neurológica"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Actividad de glucocerebrosidasa disminuida en leucocitos o fibroblastos",
        "Quitotriosidasa plasmática elevada",
        "CCL18 y lyso-Gb1 como marcadores de seguimiento"
      ],
      samples: ["Sangre periférica (leucocitos)", "Gota seca", "Plasma"],
      screening: "No hay cribado neonatal universal; se investiga por clínica o antecedentes familiares.",
      confirmatory: ["Ensayo enzimático en leucocitos", "Secuenciación de GBA1"],
      enzymatic: "La medición de la actividad enzimática es el patrón de referencia diagnóstico."
    },
    treatment: {
      strategies: [
        "Terapia de reemplazo enzimático (imiglucerasa, velaglucerasa o taliglucerasa)",
        "Terapia de reducción de sustrato (miglustat o eliglustat) en pacientes seleccionados",
        "Soporte hematológico y ortopédico"
      ],
      diet: "No requiere una dieta específica; en la forma neuronopática el soporte nutricional es sintomático.",
      cofactors: "No aplica.",
      followup: ["Hemograma, tamaño hepatoesplénico y marcadores", "Densitometría y evaluación ósea", "Valoración neurológica en formas de riesgo"]
    },
    sources: [
      { label: "GeneReviews", title: "Gaucher Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GAUCHER DISEASE, TYPE I", ref: "#230800" },
      { label: "Orphanet", title: "Gaucher disease", ref: "ORPHA:355" }
    ],
    validation: ["Selección de ERT frente a SRT", "Objetivos de lyso-Gb1 en el seguimiento"]
  },
  {
    id: "fabry",
    name: "Enfermedad de Fabry",
    aka: ["Déficit de α-galactosidasa A", "Fabry disease", "Enfermedad de Anderson-Fabry"],
    inheritance: "Ligada al X",
    category: "lsd",
    summary: "El déficit de α-galactosidasa A acumula globotriaosilceramida (Gb3) en los lisosomas, con afectación progresiva de vasos sanguíneos, riñón, corazón y, en algunos casos, el sistema nervioso.",
    gene: "GLA",
    protein: "α-galactosidasa A",
    ec: "3.2.1.22",
    organelleId: "lysosome",
    pathwayId: "sphingolipid-degradation",
    mechanism: {
      normal: "La α-galactosidasa A degrada el Gb3 y otros glucoesfingolípidos con galactosa terminal en el lisosoma.",
      alteration: "Variantes en GLA (X-linked) con actividad residual variable; las mujeres heterocigotas pueden tener afectación multiorgánica.",
      accumulate: ["Gb3 en células endoteliales y podocitos", "Lyso-Gb3 en plasma", "Globotriaosilceramida en orina"],
      decrease: ["Degradación lisosomal de glucoesfingolípidos"],
      consequences: [
        "Acroparestesias y crisis de dolor neuropático",
        "Angioqueratomas, hipohidrosis e intolerancia al calor",
        "Enfermedad renal crónica, hipertrofia cardíaca y accidentes cerebrovasculares"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Actividad de α-galactosidasa A disminuida en varones",
        "Lyso-Gb3 plasmático elevado",
        "Proteinuria y albuminuria como marcadores renales"
      ],
      samples: ["Sangre (leucocitos o gota seca)", "Plasma", "Orina"],
      screening: "El cribado neonatal no es universal; el estudio familiar tras un caso índice es fundamental.",
      confirmatory: ["Ensayo enzimático", "Secuenciación de GLA (especialmente en mujeres)"],
      enzymatic: "La actividad enzimática en leucocitos o plasma confirma el diagnóstico en varones; en mujeres puede ser normal."
    },
    treatment: {
      strategies: [
        "Terapia de reemplazo enzimático (agalsidasa alfa o beta)",
        "Chaperona farmacológica (migalastat) en variantes susceptibles",
        "Control renal, cardíaco y del dolor neuropático"
      ],
      diet: "No requiere dieta específica; se recomienda control de factores de riesgo cardiovascular.",
      cofactors: "La migalastat actúa como chaperona en mutaciones amenables, no como suplemento nutricional.",
      followup: ["Función renal y proteinuria", "Ecocardiograma y RM cardíaca", "Lyso-Gb3 y valoración neurológica"]
    },
    sources: [
      { label: "GeneReviews", title: "Fabry Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "FABRY DISEASE", ref: "#301500" },
      { label: "Orphanet", title: "Fabry disease", ref: "ORPHA:324" }
    ],
    validation: ["Criterios de inicio de ERT", "Interpretación de lyso-Gb3 en mujeres"]
  },
  {
    id: "taysachs",
    name: "Enfermedad de Tay-Sachs",
    aka: ["GM2 gangliosidosis tipo I", "Déficit de hexosaminidasa A"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de hexosaminidasa A impide degradar el gangliósido GM2, que se acumula en las neuronas. La forma infantil clásica causa una neurodegeneración progresiva e irreversible.",
    gene: "HEXA",
    protein: "Hexosaminidasa A (subunidad α)",
    ec: "3.2.1.52",
    organelleId: "lysosome",
    pathwayId: "sphingolipid-degradation",
    mechanism: {
      normal: "La hexosaminidasa A, formada por subunidades α y β, hidroliza el GM2 gangliósido en el lisosoma neuronal.",
      alteration: "Variantes bialélicas en HEXA que anulan o reducen la actividad; la forma infantil es la más grave.",
      accumulate: ["GM2 gangliósido en neuronas", "GM2 en tejido nervioso"],
      decrease: ["Degradación lisosomal de gangliósidos"],
      consequences: [
        "Regresión psicomotora a partir de los 3–6 meses",
        "Respuesta de sobresalto exagerada y mancha rojo cereza",
        "Convulsiones, ceguera y muerte temprana en la forma infantil"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Actividad de hexosaminidasa A disminuida",
        "Actividad de hexosaminidasa total variable",
        "Estudio enzimático en leucocitos o fibroblastos"
      ],
      samples: ["Sangre (leucocitos)", "Fibroblastos", "Plasma"],
      screening: "Existe cribado de portadores en poblaciones de riesgo; no es universal.",
      confirmatory: ["Ensayo enzimático de HEXA", "Secuenciación de HEXA"],
      enzymatic: "La actividad enzimática es diagnóstica; debe interpretarse junto con el cuadro clínico."
    },
    treatment: {
      strategies: [
        "Tratamiento de soporte y paliativo",
        "Manejo de convulsiones y de la alimentación",
        "Consejo genético y apoyo familiar"
      ],
      diet: "No existe dieta específica; el soporte nutricional depende de la deglución y del estado general.",
      cofactors: "No aplica.",
      followup: ["Neurológico y nutricional", "Control de convulsiones", "Apoyo respiratorio según evolución"]
    },
    sources: [
      { label: "GeneReviews", title: "Tay-Sachs Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "TAY-SACHS DISEASE", ref: "#272800" },
      { label: "Orphanet", title: "Tay-Sachs disease", ref: "Orphanet" }
    ],
    validation: ["Pronóstico individual en formas juveniles", "Criterios de soporte paliativo"]
  },
  {
    id: "niemannpick",
    name: "Enfermedad de Niemann-Pick A/B",
    aka: ["Déficit de esfingomielinasa ácida", "ASMD"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de esfingomielinasa ácida acumula esfingomielina en el sistema reticuloendotelial. La forma A cursa con neurodegeneración grave; la forma B afecta principalmente al pulmón, el hígado y el bazo.",
    gene: "SMPD1",
    protein: "Esfingomielinasa ácida",
    ec: "3.1.4.12",
    organelleId: "lysosome",
    pathwayId: "sphingolipid-degradation",
    mechanism: {
      normal: "La esfingomielinasa ácida hidroliza la esfingomielina en ceramida y fosforilcolina dentro del lisosoma.",
      alteration: "Variantes bialélicas en SMPD1 con actividad residual variable; la forma A tiene actividad prácticamente nula.",
      accumulate: ["Esfingomielina en hígado, bazo y pulmón", "Células espumosas en médula ósea"],
      decrease: ["Degradación lisosomal de esfingomielina"],
      consequences: [
        "Hepatosplenomegalia y citopenias",
        "Infiltración pulmonar intersticial en la forma B",
        "Regresión neurológica y muerte temprana en la forma A"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Actividad de esfingomielinasa ácida disminuida",
        "Esfingomielina plasmática elevada",
        "Biopsia de médula ósea con células espumosas"
      ],
      samples: ["Sangre (leucocitos)", "Fibroblastos", "Plasma"],
      screening: "No hay cribado neonatal universal.",
      confirmatory: ["Ensayo enzimático", "Secuenciación de SMPD1"],
      enzymatic: "La actividad enzimática en leucocitos o fibroblastos confirma el diagnóstico."
    },
    treatment: {
      strategies: [
        "Terapia de reemplazo enzimático con olipudasa alfa en la forma B",
        "Soporte hepático, pulmonar y hematológico",
        "Manejo nutricional y de las complicaciones"
      ],
      diet: "No hay dieta específica; el soporte nutricional depende de la afectación hepática y pulmonar.",
      cofactors: "No aplica.",
      followup: ["Función pulmonar y hepática", "Hemograma y crecimiento", "Evaluación neurológica en formas A"]
    },
    sources: [
      { label: "GeneReviews", title: "Acid Sphingomyelinase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "NIEMANN-PICK DISEASE, TYPE A", ref: "#257200" },
      { label: "Orphanet", title: "Niemann-Pick disease type A/B", ref: "Orphanet" }
    ],
    validation: ["Indicaciones de ERT en la forma B", "Seguimiento pulmonar a largo plazo"]
  },
  {
    id: "pompe",
    name: "Enfermedad de Pompe",
    aka: ["Glucogenosis tipo II", "Déficit de α-glucosidasa ácida", "GSD II"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de α-glucosidasa ácida acumula glucógeno en los lisosomas del músculo y del corazón. La forma infantil clásica causa hipotonía grave y cardiomiopatía; la forma tardía afecta la musculatura proximal y la respiración.",
    gene: "GAA",
    protein: "α-glucosidasa ácida (maltasa ácida)",
    ec: "3.2.1.20",
    organelleId: "lysosome",
    pathwayId: "glycogen-degradation",
    mechanism: {
      normal: "La α-glucosidasa ácida hidroliza el glucógeno lisosomal a glucosa en todos los tejidos, especialmente en músculo.",
      alteration: "Variantes bialélicas en GAA que reducen la actividad; la cantidad de enzima residual determina la forma clínica.",
      accumulate: ["Glucógeno lisosomal en músculo esquelético", "Glucógeno en miocardio", "Creatina quinasa elevada"],
      decrease: ["Degradación lisosomal del glucógeno", "Función contráctil muscular"],
      consequences: [
        "Hipotonía y cardiomiopatía en el lactante",
        "Insuficiencia respiratoria por debilidad del diafragma",
        "Debilidad muscular proximal en la forma de inicio tardío"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Actividad de α-glucosidasa ácida disminuida en gota seca o leucocitos",
        "Creatina quinasa elevada",
        "Patrón miopático en electromiografía"
      ],
      samples: ["Sangre en gota seca", "Leucocitos", "Fibroblastos"],
      screening: "Algunos programas incluyen Pompe en el cribado neonatal; la detección temprana mejora el pronóstico.",
      confirmatory: ["Ensayo enzimático", "Secuenciación de GAA"],
      enzymatic: "La actividad enzimática en DBS o leucocitos es la prueba inicial; se confirma con genética."
    },
    treatment: {
      strategies: [
        "Terapia de reemplazo enzimático con alglucosidasa alfa",
        "Fisioterapia y rehabilitación respiratoria",
        "Soporte ventilatorio y cardiológico"
      ],
      diet: "No requiere una dieta específica; se recomienda una alimentación adecuada para preservar la masa muscular.",
      cofactors: "No aplica.",
      followup: ["Función respiratoria y fuerza muscular", "Ecocardiograma en formas infantiles", "CK y valoración nutricional"]
    },
    sources: [
      { label: "GeneReviews", title: "Pompe Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GLYCOGEN STORAGE DISEASE II", ref: "#232300" },
      { label: "Orphanet", title: "Pompe disease", ref: "ORPHA:308" }
    ],
    validation: ["Momento de inicio de ERT", "Criterios de soporte ventilatorio"]
  },
  {
    id: "mps1",
    name: "Mucopolisacaridosis I",
    aka: ["Síndrome de Hurler", "Síndrome de Hurler-Scheie", "Síndrome de Scheie", "MPS I"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de α-L-iduronidasa impide degradar el dermatán y el heparán sulfato, que se acumulan en los lisosomas. El espectro va del síndrome de Hurler grave al de Scheie atenuado.",
    gene: "IDUA",
    protein: "α-L-iduronidasa",
    ec: "3.2.1.76",
    organelleId: "lysosome",
    pathwayId: "gag-degradation",
    mechanism: {
      normal: "La α-L-iduronidasa elimina residuos de iduronato del dermatán y del heparán sulfato en el lisosoma.",
      alteration: "Variantes bialélicas en IDUA con actividad residual variable, lo que determina la forma clínica.",
      accumulate: ["Dermatán sulfato en orina", "Heparán sulfato en orina", "GAG en tejidos"],
      decrease: ["Degradación lisosomal de glucosaminoglucanos"],
      consequences: [
        "Rasgos faciales toscos, hepatosplenomegalia y hernias",
        "Disostosis múltiple, rigidez articular y afectación cardíaca",
        "Opacidad corneal y deterioro cognitivo en la forma grave"
      ]
    },
    diagnosis: {
      biomarkers: [
        "GAG urinarios elevados (dermatán y heparán sulfato)",
        "Actividad de α-L-iduronidasa disminuida",
        "Oligosacáridos urinarios"
      ],
      samples: ["Orina", "Sangre (leucocitos o gota seca)", "Fibroblastos"],
      screening: "El cribado neonatal no es universal; la sospecha clínica es clave.",
      confirmatory: ["Ensayo enzimático", "Secuenciación de IDUA"],
      enzymatic: "La actividad enzimática en leucocitos o fibroblastos confirma el diagnóstico."
    },
    treatment: {
      strategies: [
        "Terapia de reemplazo enzimático con laronidasa",
        "Trasplante de progenitores hematopoyéticos en la forma grave y precoz",
        "Cirugía y soporte multiorgánico"
      ],
      diet: "No requiere dieta específica; el soporte nutricional es sintomático.",
      cofactors: "No aplica.",
      followup: ["GAG urinarios y función cardíaca", "Evaluación oftalmológica, auditiva y esquelética", "Neurodesarrollo en formas graves"]
    },
    sources: [
      { label: "GeneReviews", title: "Mucopolysaccharidosis Type I", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "MUCOPOLYSACCHARIDOSIS TYPE I", ref: "#607014" },
      { label: "Orphanet", title: "Mucopolysaccharidosis type 1", ref: "Orphanet" }
    ],
    validation: ["Ventana para trasplante en Hurler", "Seguimiento esquelético a largo plazo"]
  },
  {
    id: "mps2",
    name: "Mucopolisacaridosis II",
    aka: ["Síndrome de Hunter", "MPS II"],
    inheritance: "Ligada al X",
    category: "lsd",
    summary: "El déficit de iduronato-2-sulfatasa bloquea la degradación del heparán y del dermatán sulfato. Afecta predominantemente a varones y puede incluir deterioro cognitivo progresivo.",
    gene: "IDS",
    protein: "Iduronato-2-sulfatasa",
    ec: "3.1.6.13",
    organelleId: "lysosome",
    pathwayId: "gag-degradation",
    mechanism: {
      normal: "La iduronato-2-sulfatasa elimina grupos sulfato de los GAG en el lisosoma, paso necesario para su degradación completa.",
      alteration: "Variantes en IDS (X-linked) con actividad residual variable; las formas neuronopáticas graves se manifiestan en la infancia.",
      accumulate: ["Heparán sulfato en orina", "Dermatán sulfato en orina", "GAG en tejidos"],
      decrease: ["Degradación lisosomal de glucosaminoglucanos"],
      consequences: [
        "Rasgos toscos, hepatosplenomegalia y disostosis múltiple",
        "Engrosamiento valvular y afectación respiratoria",
        "Deterioro cognitivo y regresión en la forma grave"
      ]
    },
    diagnosis: {
      biomarkers: [
        "GAG urinarios elevados",
        "Actividad de iduronato-2-sulfatasa disminuida",
        "Estudio familiar en mujeres portadoras"
      ],
      samples: ["Orina", "Sangre (leucocitos o gota seca)", "Fibroblastos"],
      screening: "No es universal; se investiga por clínica y antecedentes familiares.",
      confirmatory: ["Ensayo enzimático", "Secuenciación de IDS"],
      enzymatic: "La actividad enzimática es diagnóstica; en mujeres portadoras puede requerir genética."
    },
    treatment: {
      strategies: [
        "Terapia de reemplazo enzimático con idursulfasa",
        "Trasplante de progenitores hematopoyéticos en casos seleccionados",
        "Soporte respiratorio, cardíaco y ortopédico"
      ],
      diet: "No requiere dieta específica.",
      cofactors: "No aplica.",
      followup: ["GAG urinarios y pruebas funcionales", "Evaluación cardiológica y respiratoria", "Neurodesarrollo en formas graves"]
    },
    sources: [
      { label: "GeneReviews", title: "Mucopolysaccharidosis Type II", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "MUCOPOLYSACCHARIDOSIS TYPE II", ref: "#309900" },
      { label: "Orphanet", title: "Mucopolysaccharidosis type 2", ref: "Orphanet" }
    ],
    validation: ["Indicación de trasplante", "Seguimiento neurológico en formas graves"]
  },
  {
    id: "xald",
    name: "Adrenoleucodistrofia ligada al X",
    aka: ["X-ALD", "ALD", "Enfermedad de Addison ligada al X"],
    inheritance: "Ligada al X",
    category: "perox",
    summary: "El defecto del transportador peroxisomal ABCD1 impide el catabolismo de los ácidos grasos de cadena muy larga (VLCFA), que se acumulan y dañan la mielina y la corteza suprarrenal.",
    gene: "ABCD1",
    protein: "Transportador ABCD1 (ALDP)",
    ec: "—",
    organelleId: "peroxisome",
    pathwayId: "vlcfa-oxidation",
    mechanism: {
      normal: "ABCD1 introduce los VLCFA en el peroxisoma para que se acorten por β-oxidación antes de pasar a la mitocondria.",
      alteration: "Variantes en ABCD1 (X-linked) que alteran el transporte; el fenotipo varía desde la forma cerebral infantil a la adrenomieloneuropatía del adulto.",
      accumulate: ["Ácidos grasos de cadena muy larga (C26:0) en plasma", "VLCFA en mielina y corteza suprarrenal", "Ácidos grasos saturados de cadena larga"],
      decrease: ["Degradación peroxisomal de VLCFA", "Respuesta normal de cortisol"],
      consequences: [
        "Insuficiencia suprarrenal (enfermedad de Addison)",
        "Desmielinización cerebral progresiva en la forma cerebral",
        "Paraparesia espástica y disfunción vesical en la adrenomieloneuropatía"
      ]
    },
    diagnosis: {
      biomarkers: [
        "VLCFA plasmáticos: C26:0 elevado y cociente C26:0/C22:0 aumentado",
        "Cortisol bajo y ACTH elevada",
        "RM cerebral con desmielinización parietooccipital"
      ],
      samples: ["Plasma", "Sangre (cortisol/ACTH)", "Fibroblastos"],
      screening: "El cribado neonatal de X-ALD se ha implementado en algunos países; el estudio familiar es esencial.",
      confirmatory: ["Perfil de VLCFA", "Secuenciación de ABCD1"],
      enzymatic: "La medición de VLCFA en plasma o fibroblastos es la prueba bioquímica inicial."
    },
    treatment: {
      strategies: [
        "Reemplazo de glucocorticoides y mineralocorticoides",
        "Trasplante de progenitores hematopoyéticos en la forma cerebral precoz",
        "Fisioterapia y manejo urológico"
      ],
      diet: "La dieta con aceite de Lorenzo (mezcla de erucato y oleato) se ha utilizado en formas seleccionadas; su indicación debe individualizarse.",
      cofactors: "No aplica.",
      followup: ["VLCFA y función suprarrenal", "RM cerebral periódica en varones asintomáticos", "Evaluación neurológica y urológica"]
    },
    sources: [
      { label: "GeneReviews", title: "X-Linked Adrenoleukodystrophy", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ADRENOLEUKODYSTROPHY, X-LINKED", ref: "#300100" },
      { label: "Orphanet", title: "X-linked adrenoleukodystrophy", ref: "ORPHA:43" }
    ],
    validation: ["Criterios de trasplante cerebral", "Papel de la dieta con aceite de Lorenzo"]
  },
  {
    id: "zellweger",
    name: "Espectro de Zellweger",
    aka: ["Síndrome de Zellweger", "Trastorno de la biogénesis peroxisomal", "ZSD"],
    inheritance: "Autosómica recesiva",
    category: "perox",
    summary: "Los defectos de biogénesis peroxisomal (genes PEX) impiden la formación o la importación de proteínas en el peroxisoma. Se alteran la β-oxidación de VLCFA, la síntesis de plasmalógenos y el metabolismo de ácidos biliares.",
    gene: "PEX1 (más frecuente), PEX2, PEX6, PEX10, PEX12…",
    protein: "Proteínas de importación y biogénesis peroxisomal",
    ec: "—",
    organelleId: "peroxisome",
    pathwayId: "vlcfa-oxidation",
    mechanism: {
      normal: "Las proteínas PEX ensamblan el peroxisoma e importan las enzimas con señal PTS1/PTS2 desde el citosol.",
      alteration: "Variantes bialélicas en genes PEX que reducen la importación de proteínas o la formación del organelo.",
      accumulate: ["VLCFA (C26:0)", "Ácidos biliares intermediarios", "Ácido pipecólico"],
      decrease: ["Plasmalógenos", "β-oxidación peroxisomal", "Síntesis de ácidos biliares"],
      consequences: [
        "Hipotonía grave, convulsiones y dismorfia facial",
        "Hepatopatía con colestasis y fallo hepático",
        "Retraso profundo del desarrollo y muerte temprana en formas graves"
      ]
    },
    diagnosis: {
      biomarkers: [
        "VLCFA plasmáticos elevados",
        "Plasmalógenos eritrocitarios disminuidos",
        "Ácidos biliares intermediarios y ácido pipecólico elevados"
      ],
      samples: ["Plasma", "Eritrocitos", "Orina"],
      screening: "No es universal; se sospecha por clínica y perfil bioquímico.",
      confirmatory: ["Perfil de VLCFA y plasmalógenos", "Panel genético de genes PEX"],
      enzymatic: "El estudio de importación de proteínas peroxisomales en fibroblastos puede confirmar el defecto funcional."
    },
    treatment: {
      strategies: [
        "Soporte multidisciplinar (nutrición, convulsiones, hepatología)",
        "Ácido cólico para mejorar la absorción de grasas y la colestasis",
        "Vitaminas liposolubles y seguimiento del crecimiento"
      ],
      diet: "Restricción de VLCFA y soporte con triglicéridos de cadena media en algunos pacientes; la dieta debe individualizarse.",
      cofactors: "Vitamina E, vitaminas liposolubles y ácido cólico según deficiencias documentadas.",
      followup: ["Función hepática y niveles de vitaminas", "Crecimiento y neurodesarrollo", "Valoración auditiva y oftalmológica"]
    },
    sources: [
      { label: "GeneReviews", title: "Zellweger Spectrum Disorder", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ZELLWEGER SYNDROME", ref: "#214100" },
      { label: "Orphanet", title: "Zellweger syndrome", ref: "ORPHA:912" }
    ],
    validation: ["Composición exacta de la dieta", "Uso de ácido cólico en cada fenotipo"]
  },
  {
    id: "refsum",
    name: "Enfermedad de Refsum",
    aka: ["Enfermedad de Refsum clásica", "Déficit de fitanoil-CoA hidroxilasa", "Heredopathia atactica polyneuritiformis"],
    inheritance: "Autosómica recesiva",
    category: "perox",
    summary: "El déficit de fitanoil-CoA hidroxilasa impide la α-oxidación del ácido fitánico, que se acumula en plasma y tejidos. Produce retinitis pigmentosa, polineuropatía, ataxia y sordera.",
    gene: "PHYH",
    protein: "Fitanoil-CoA hidroxilasa",
    ec: "1.14.99.39",
    organelleId: "peroxisome",
    pathwayId: "alpha-oxidation",
    mechanism: {
      normal: "La PHYH hidroxila el fitanoil-CoA en el peroxisoma, primer paso de la α-oxidación que permite degradar el ácido fitánico de la dieta.",
      alteration: "Variantes bialélicas en PHYH que reducen la α-oxidación; el ácido fitánico se acumula en membranas y tejidos.",
      accumulate: ["Ácido fitánico plasmático", "Ácido fitánico en tejido adiposo y nervioso"],
      decrease: ["α-oxidación peroxisomal del fitanato"],
      consequences: [
        "Retinitis pigmentosa y pérdida progresiva de visión",
        "Polineuropatía sensitivomotora y ataxia",
        "Sordera neurosensorial y anosmia"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Ácido fitánico plasmático elevado",
        "VLCFA normales (ayuda a diferenciarlo de otros trastornos peroxisomales)",
        "Estudio oftalmológico y electromiográfico"
      ],
      samples: ["Plasma", "Suero", "Fibroblastos"],
      screening: "No es universal; se investiga ante la combinación de retinitis pigmentosa y neuropatía.",
      confirmatory: ["Cuantificación de ácido fitánico", "Secuenciación de PHYH"],
      enzymatic: "La actividad de PHYH puede medirse en fibroblastos en casos seleccionados."
    },
    treatment: {
      strategies: [
        "Dieta estricta baja en ácido fitánico",
        "Plasmaféresis en crisis agudas o antes de cirugía",
        "Seguimiento oftalmológico, auditivo y neurológico"
      ],
      diet: "Restricción de productos ricos en fitanato (grasas de rumiantes, lácteos y algunos pescados); supervisión por dietista especializado.",
      cofactors: "No aplica.",
      followup: ["Ácido fitánico plasmático", "Visión, audición y función neurológica", "Estado nutricional y adherencia dietética"]
    },
    sources: [
      { label: "GeneReviews", title: "Refsum Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "REFSUM DISEASE", ref: "#266500" },
      { label: "Orphanet", title: "Refsum disease", ref: "ORPHA:773" }
    ],
    validation: ["Contenido exacto de fitanato en alimentos", "Indicaciones de plasmaféresis"]
  },
  {
    id: "pku",
    name: "Fenilcetonuria",
    aka: ["PKU", "Déficit de fenilalanina hidroxilasa", "Fenilcetonuria clásica"],
    inheritance: "Autosómica recesiva",
    category: "aa",
    summary: "El déficit de fenilalanina hidroxilasa impide convertir la fenilalanina en tirosina. La fenilalanina se acumula y es neurotóxica, por lo que la detección y el tratamiento precoces son esenciales.",
    gene: "PAH",
    protein: "Fenilalanina hidroxilasa",
    ec: "1.14.16.1",
    organelleId: "cytosol",
    pathwayId: "amino-acid-metabolism",
    mechanism: {
      normal: "La PAH hidroxila la fenilalanina a tirosina utilizando tetrahidrobiopterina (BH4) como cofactor.",
      alteration: "Variantes bialélicas en PAH que reducen la actividad; también existen defectos del metabolismo de BH4.",
      accumulate: ["Fenilalanina plasmática", "Fenilcetonas en orina", "Metabolitos de la fenilalanina"],
      decrease: ["Tirosina", "Neurotransmisores derivados de la tirosina"],
      consequences: [
        "Retraso intelectual y microcefalia si no se trata",
        "Convulsiones, hiperactividad y alteraciones del comportamiento",
        "Olor característico a ratón y piel/ojos claros"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Fenilalanina elevada en sangre",
        "Relación fenilalanina/tirosina aumentada",
        "Fenilcetonas en orina"
      ],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "El cribado neonatal de fenilcetonuria es universal en la mayoría de los programas.",
      confirmatory: ["Cuantificación de fenilalanina y tirosina", "Secuenciación de PAH y prueba de carga de BH4 en casos seleccionados"],
      enzymatic: "La actividad de PAH no suele medirse en la práctica; el diagnóstico es bioquímico y genético."
    },
    treatment: {
      strategies: [
        "Dieta restringida en fenilalanina desde el diagnóstico",
        "Suplementación con fórmula de aminoácidos sin fenilalanina",
        "Sapropterina (BH4) o pegvaliasa en pacientes seleccionados"
      ],
      diet: "Dieta baja en fenilalanina de por vida, con control de niveles y aporte de tirosina y nutrientes esenciales; supervisión por unidad de metabolismo.",
      cofactors: "La sapropterina es un análogo del cofactor BH4 y solo es eficaz en pacientes con respuesta.",
      followup: ["Fenilalanina plasmática periódica", "Crecimiento y neurodesarrollo", "Adherencia dietética y estado nutricional"]
    },
    sources: [
      { label: "GeneReviews", title: "Phenylalanine Hydroxylase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "PHENYLKETONURIA", ref: "#261600" },
      { label: "Orphanet", title: "Phenylketonuria", ref: "ORPHA:716" }
    ],
    validation: ["Objetivos de fenilalanina según edad", "Criterios de respuesta a sapropterina"]
  },
  {
    id: "gsd1",
    name: "Glucogenosis tipo I",
    aka: ["Enfermedad de von Gierke", "Déficit de glucosa-6-fosfatasa", "GSD I"],
    inheritance: "Autosómica recesiva",
    category: "glycogen",
    summary: "El déficit de glucosa-6-fosfatasa impide liberar glucosa libre desde el hígado. Aparecen hipoglucemia en ayunas, hepatomegalia, acidosis láctica, hiperuricemia e hiperlipidemia.",
    gene: "G6PC (tipo Ia); SLC37A4 (tipo Ib)",
    protein: "Glucosa-6-fosfatasa (subunidad catalítica)",
    ec: "3.1.3.9",
    organelleId: "cytosol",
    pathwayId: "glycogenolysis",
    mechanism: {
      normal: "La glucosa-6-fosfatasa, en la membrana del retículo endoplasmático, hidroliza la glucosa-6-fosfato y libera glucosa a la sangre.",
      alteration: "Variantes bialélicas en G6PC (tipo Ia) o SLC37A4 (tipo Ib) que impiden la hidrólisis o el transporte.",
      accumulate: ["Glucógeno hepático y renal", "Glucosa-6-fosfato", "Lactato, ácido úrico y triglicéridos"],
      decrease: ["Glucosa sanguínea en el ayuno", "Producción hepática de glucosa"],
      consequences: [
        "Hipoglucemia grave en ayunas con acidosis láctica",
        "Hepatomegalia y riesgo de adenomas hepáticos",
        "Hiperuricemia, hiperlipidemia y retraso del crecimiento"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Hipoglucemia con lactato elevado",
        "Hiperuricemia e hipertrigliceridemia",
        "Glucagón: escaso aumento de glucosa y aumento de lactato"
      ],
      samples: ["Sangre", "Orina", "Hígado (biopsia en casos seleccionados)"],
      screening: "No está en el cribado neonatal universal; se sospecha por hepatomegalia e hipoglucemia.",
      confirmatory: ["Estudio bioquímico y genético de G6PC/SLC37A4", "Biopsia hepática con medición enzimática en casos dudosos"],
      enzymatic: "La actividad de glucosa-6-fosfatasa se mide en tejido hepático cuando la genética no es concluyente."
    },
    treatment: {
      strategies: [
        "Prevención de la hipoglucemia con almidón de maíz crudo o glucosa frecuente",
        "Control de la acidosis láctica y de la hiperuricemia",
        "Trasplante hepático en casos seleccionados"
      ],
      diet: "Almidón de maíz crudo, comidas frecuentes y restricción de galactosa y fructosa; el esquema debe individualizarse.",
      cofactors: "Alopurinol para la hiperuricemia; no corrige el defecto metabólico.",
      followup: ["Glucosa, lactato, urato y lípidos", "Ecografía hepática por adenomas", "Crecimiento y desarrollo puberal"]
    },
    sources: [
      { label: "GeneReviews", title: "Glucose-6-Phosphatase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GLYCOGEN STORAGE DISEASE I", ref: "#232200" },
      { label: "Orphanet", title: "Glycogen storage disease due to glucose-6-phosphatase deficiency", ref: "Orphanet" }
    ],
    validation: ["Dosis y horario del almidón de maíz", "Indicaciones de trasplante hepático"]
  },
  {
    id: "galactosemia",
    name: "Galactosemia clásica",
    aka: ["Déficit de galactosa-1-fosfato uridiltransferasa", "GALT deficiency"],
    inheritance: "Autosómica recesiva",
    category: "carbs",
    summary: "El déficit de galactosa-1-fosfato uridiltransferasa impide metabolizar la galactosa de la lactosa. La acumulación de galactosa-1-fosfato y galactitol causa hepatopatía, cataratas y toxicidad neonatal.",
    gene: "GALT",
    protein: "Galactosa-1-fosfato uridiltransferasa",
    ec: "2.7.7.12",
    organelleId: "cytosol",
    pathwayId: "galactose-metabolism",
    mechanism: {
      normal: "La GALT convierte la galactosa-1-fosfato en glucosa-1-fosfato mediante el intercambio con UDP-glucosa en la vía de Leloir.",
      alteration: "Variantes bialélicas en GALT que reducen la actividad; la forma clásica cursa con actividad prácticamente nula.",
      accumulate: ["Galactosa-1-fosfato", "Galactitol en cristalino", "Galactosa en sangre"],
      decrease: ["Metabolismo normal de la galactosa", "Producción de glucosa-1-fosfato"],
      consequences: [
        "Ictericia, hepatomegalia y fallo hepático neonatal",
        "Cataratas y sepsis por Escherichia coli",
        "Dificultades cognitivas y del lenguaje a largo plazo"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Galactosa y galactosa-1-fosfato elevadas",
        "Actividad de GALT disminuida",
        "Sustancias reductoras en orina"
      ],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "El cribado neonatal de galactosemia está incluido en muchos programas.",
      confirmatory: ["Ensayo enzimático de GALT", "Secuenciación de GALT"],
      enzymatic: "La actividad enzimática en eritrocitos confirma el diagnóstico; debe repetirse tras transfusión."
    },
    treatment: {
      strategies: [
        "Dieta sin galactosa (sin lactosa) desde el diagnóstico",
        "Fórmulas sin galactosa en el lactante",
        "Manejo hepático y oftalmológico"
      ],
      diet: "Eliminación estricta de lactosa y galactosa; se requieren sustitutos lácteos adecuados y seguimiento dietético de por vida.",
      cofactors: "No aplica; se suplementan calcio y vitamina D según necesidad.",
      followup: ["Galactosa-1-fosfato y función hepática", "Evaluación oftalmológica y del desarrollo", "Densidad mineral ósea y nutrición"]
    },
    sources: [
      { label: "GeneReviews", title: "Classic Galactosemia", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GALACTOSEMIA", ref: "#230400" },
      { label: "Orphanet", title: "Classic galactosemia", ref: "Orphanet" }
    ],
    validation: ["Tolerancia a trazas de galactosa", "Seguimiento neuropsicológico a largo plazo"]
  },
  {
    id: "cps1",
    name: "Deficiencia de CPS1",
    aka: ["Deficiencia de carbamoil-fosfato sintetasa I", "CPS1 deficiency", "Defecto proximal del ciclo de la urea"],
    inheritance: "Autosómica recesiva",
    category: "urea",
    summary: "La carbamoil-fosfato sintetasa I cataliza el primer paso del ciclo de la urea en la mitocondria. Su déficit impide detoxificar el amonio y provoca hiperamonemia grave, con riesgo de encefalopatía neonatal.",
    gene: "CPS1",
    protein: "Carbamoil-fosfato sintetasa I (CPS1)",
    ec: "6.3.4.16",
    organelleId: "mitochondrion",
    pathwayId: "urea-cycle",
    mechanism: {
      normal: "La CPS1 condensa amonio y bicarbonato en carbamoil fosfato, consumiendo dos moléculas de ATP y requiriendo N-acetilglutamato como activador alostérico. Es el paso limitante del ciclo de la urea.",
      alteration: "Variantes bialélicas de CPS1 reducen o anulan la actividad; los defectos del activador (deficiencia de NAGS) producen el mismo efecto funcional.",
      accumulate: [
        "Amonio en sangre",
        "Glutamina",
        "Alanina y otros aminoácidos"
      ],
      decrease: [
        "Citrulina y arginina",
        "Urea en sangre",
        "Ácido orótico urinario (normal o bajo, a diferencia de la deficiencia de OTC)"
      ],
      consequences: [
        "Hiperamonemia neonatal grave con letargo, vómitos y encefalopatía",
        "Edema cerebral y riesgo de secuelas neurológicas",
        "Formas de inicio tardío desencadenadas por infecciones o dieta rica en proteínas"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Amonio plasmático elevado",
        "Aminoácidos plasmáticos: glutamina alta, citrulina y arginina bajas",
        "Ácido orótico urinario normal o bajo"
      ],
      samples: ["Plasma", "Suero", "Orina"],
      screening: "El amonio forma parte de la evaluación urgente del neonato con encefalopatía; no todos los programas de cribado neonatal incluyen la CPS1.",
      confirmatory: ["Perfil de aminoácidos y ácido orótico", "Secuenciación de CPS1 y NAGS", "Actividad enzimática en fibroblastos o hígado"],
      enzymatic: "La medición de la actividad de CPS1 requiere material hepático o fibroblastos y se reserva para casos con genética no concluyente."
    },
    treatment: {
      strategies: [
        "Restricción proteica y aporte calórico suficiente",
        "Fármacos eliminadores de nitrógeno (benzoato de sodio, fenilbutirato de sodio)",
        "Arginina o citrulina como suplemento",
        "Hemodiálisis en la hiperamonemia grave"
      ],
      diet: "Dieta hipoproteica con mezcla de aminoácidos esenciales y monitorización del crecimiento; el esquema debe individualizarse.",
      cofactors: "Citrulina o arginina y L-carnitina según el protocolo del centro; el N-carbamilglutamato se usa en defectos del activador en centros especializados.",
      followup: [
        "Amonio y aminoácidos plasmáticos periódicos",
        "Valoración del desarrollo neurológico",
        "Plan de emergencia para episodios catabólicos"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Urea Cycle Disorders Overview", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "CARBAMOYL PHOSPHATE SYNTHETASE I DEFICIENCY", ref: "#237300" },
      { label: "Orphanet", title: "Carbamoyl-phosphate synthetase 1 deficiency", ref: "ORPHA:147" }
    ],
    validation: ["Umbral de amonio para iniciar depuración extracorpórea", "Disponibilidad local de N-carbamilglutamato"]
  },
  {
    id: "homocystinuria",
    name: "Homocistinuria clásica",
    aka: ["Deficiencia de cistationina β-sintasa", "Homocistinuria por déficit de CBS"],
    inheritance: "Autosómica recesiva",
    category: "aa",
    summary: "El déficit de cistationina β-sintasa impide convertir la homocisteína en cistationina. La homocisteína se acumula y produce alteraciones del tejido conectivo, trombosis, ectopia del cristalino y deterioro cognitivo.",
    gene: "CBS",
    protein: "Cistationina β-sintasa (CBS)",
    ec: "4.2.1.22",
    organelleId: "cytosol",
    pathwayId: "amino-acid-metabolism",
    mechanism: {
      normal: "La CBS condensa homocisteína con serina para formar cistationina en una reacción dependiente de piridoxal-5-fosfato (vitamina B6). Es la vía principal de eliminación de la homocisteína por transulfuración.",
      alteration: "Variantes bialélicas de CBS reducen la actividad enzimática; aproximadamente la mitad de los pacientes responden a dosis altas de piridoxina.",
      accumulate: [
        "Homocisteína y homocistina en plasma y orina",
        "Metionina elevada en plasma"
      ],
      decrease: [
        "Cistationina",
        "Cisteína en algunos casos"
      ],
      consequences: [
        "Trombosis venosa y arterial recurrente",
        "Ectopia del cristalino y miopía",
        "Osteoporosis y deformidades esqueléticas",
        "Deterioro cognitivo y trastornos psiquiátricos"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Homocisteína total plasmática elevada",
        "Metionina elevada",
        "Homocistina en orina"
      ],
      samples: ["Plasma", "Orina", "Suero"],
      screening: "El cribado neonatal detecta la elevación de metionina en muchos programas; la confirmación requiere homocisteína total.",
      confirmatory: ["Homocisteína total y perfil de aminoácidos", "Secuenciación de CBS", "Prueba de respuesta a piridoxina"],
      enzymatic: "La actividad de CBS puede medirse en fibroblastos o biopsia hepática, pero rara vez es necesaria con genética y bioquímica concordantes."
    },
    treatment: {
      strategies: [
        "Piridoxina (vitamina B6) en los pacientes respondedores",
        "Dieta restringida en metionina y suplementada con cisteína",
        "Betaína como aceptor alternativo de metilo",
        "Ácido fólico y control de los factores de riesgo trombótico"
      ],
      diet: "Restricción de proteínas ricas en metionina con sustituto de aminoácidos y seguimiento nutricional estrecho.",
      cofactors: "Piridoxina, ácido fólico y betaína; la respuesta a B6 define el subtipo terapéutico.",
      followup: [
        "Homocisteína total periódica",
        "Densitometría y valoración oftalmológica",
        "Vigilancia de eventos trombóticos"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Homocystinuria Caused by Cystathionine Beta-Synthase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "HOMOCYSTINURIA", ref: "#236200" },
      { label: "Orphanet", title: "Classic homocystinuria", ref: "ORPHA:394" }
    ],
    validation: ["Criterios locales de respuesta a piridoxina", "Objetivo terapéutico de homocisteína total"]
  },
  {
    id: "tyrosinemia1",
    name: "Tirosinemia tipo I",
    aka: ["Tirosinemia hepatorrenal", "Deficiencia de fumarilacetoacetato hidrolasa"],
    inheritance: "Autosómica recesiva",
    category: "aa",
    summary: "El déficit de fumarilacetoacetato hidrolasa acumula fumarilacetoacetato y succinilacetona, metabolitos hepatotóxicos y nefrotóxicos. Sin tratamiento produce fallo hepático, raquitismo y un riesgo elevado de hepatocarcinoma.",
    gene: "FAH",
    protein: "Fumarilacetoacetato hidrolasa (FAH)",
    ec: "3.7.1.2",
    organelleId: "cytosol",
    pathwayId: "amino-acid-metabolism",
    mechanism: {
      normal: "La FAH hidroliza el fumarilacetoacetato en fumarato y acetoacetato, último paso de la degradación de la tirosina.",
      alteration: "Variantes bialélicas de FAH bloquean ese paso; los intermediarios se transforman en succinilacetona, que inhibe la porfirina sintasa y daña el hígado y el túbulo renal.",
      accumulate: [
        "Succinilacetona en sangre y orina",
        "Tirosina y metionina",
        "Transaminasas elevadas"
      ],
      decrease: [
        "Fumarato y acetoacetato derivados de la tirosina",
        "Factores de la coagulación sintetizados por el hígado"
      ],
      consequences: [
        "Fallo hepático agudo o crónico y cirrosis",
        "Disfunción tubular renal con raquitismo hipofosfatémico",
        "Crisis neurológicas por acumulación de succinilacetona",
        "Alto riesgo de hepatocarcinoma en la infancia"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Succinilacetona en sangre (gota seca) y orina",
        "Tirosina y metionina elevadas",
        "Alfa-fetoproteína y pruebas hepáticas"
      ],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "La succinilacetona en gota seca permite el cribado neonatal en los programas que la incluyen.",
      confirmatory: ["Succinilacetona cuantitativa", "Secuenciación de FAH", "Actividad enzimática en fibroblastos"],
      enzymatic: "La actividad de FAH en fibroblastos o hígado confirma el diagnóstico cuando el estudio molecular no es concluyente."
    },
    treatment: {
      strategies: [
        "Nitisinona (NTBC), que bloquea la vía antes de la formación de succinilacetona",
        "Dieta restringida en fenilalanina y tirosina",
        "Vigilancia estrecha de hepatocarcinoma",
        "Trasplante hepático en casos seleccionados"
      ],
      diet: "Dieta baja en fenilalanina y tirosina con sustituto de aminoácidos y control periódico de los niveles plasmáticos.",
      cofactors: "La nitisinona es el tratamiento farmacológico de base; requiere ajuste y monitorización de la función hepática y ocular.",
      followup: [
        "Alfa-fetoproteína e imágenes hepáticas",
        "Aminoácidos plasmáticos",
        "Función renal y crecimiento"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Tyrosinemia Type I", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "TYROSINEMIA, TYPE I", ref: "#276700" },
      { label: "Orphanet", title: "Tyrosinemia type 1", ref: "ORPHA:28378" }
    ],
    validation: ["Protocolo local de vigilancia de hepatocarcinoma", "Criterios de trasplante hepático"]
  },
  {
    id: "krabbe",
    name: "Enfermedad de Krabbe",
    aka: ["Leucodistrofia globoide", "Deficiencia de galactocerebrosidasa"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de galactocerebrosidasa impide degradar la galactosilceramida, un componente esencial de la mielina. Se produce desmielinización progresiva y acumulación de células globoides en el sistema nervioso.",
    gene: "GALC",
    protein: "Galactocerebrosidasa (GALC)",
    ec: "3.2.1.46",
    organelleId: "lysosome",
    pathwayId: "sphingolipid-degradation",
    mechanism: {
      normal: "La GALC hidroliza la galactosa terminal de la galactosilceramida y de la psicosina, permitiendo el recambio normal de la mielina en el lisosoma.",
      alteration: "Variantes bialélicas de GALC reducen su actividad; la psicosina acumulada es tóxica para los oligodendrocitos y las células de Schwann.",
      accumulate: [
        "Galactosilceramida",
        "Psicosina (galactosilesfingosina)",
        "Células globoides en el tejido nervioso"
      ],
      decrease: [
        "Productos de degradación de la mielina",
        "Integridad de la vaina de mielina"
      ],
      consequences: [
        "Forma infantil con irritabilidad, hipertonía, regresión y muerte temprana",
        "Formas tardías con espasticidad, ataxia y neuropatía periférica",
        "Desmielinización del sistema nervioso central y periférico"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Actividad de GALC en leucocitos o gota seca",
        "Psicosina plasmática elevada",
        "Proteinorraquia elevada"
      ],
      samples: ["Sangre en gota seca", "Leucocitos", "Plasma", "Líquido cefalorraquídeo"],
      screening: "El cribado neonatal con actividad enzimática en gota seca está implementado en algunos programas.",
      confirmatory: ["Ensayo enzimático de GALC", "Secuenciación de GALC", "Resonancia magnética con patrón de leucodistrofia"],
      enzymatic: "La actividad enzimática es diagnóstica; la genética ayuda a definir el fenotipo y el consejo familiar."
    },
    treatment: {
      strategies: [
        "Trasplante de progenitores hematopoyéticos en formas presintomáticas o precoces",
        "Soporte nutricional y control de la espasticidad",
        "Manejo multidisciplinar de la epilepsia y las complicaciones",
        "Consejo genético familiar"
      ],
      diet: "No existe una dieta específica; se asegura el aporte nutricional y el manejo de la disfagia en fases avanzadas.",
      cofactors: "No hay cofactores establecidos; el tratamiento es de soporte y, en casos seleccionados, trasplante.",
      followup: [
        "Evaluación neurológica y del desarrollo",
        "Resonancia magnética periódica",
        "Valoración de audición y visión"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Krabbe Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "KRABBE DISEASE", ref: "#245200" },
      { label: "Orphanet", title: "Krabbe disease", ref: "ORPHA:487" }
    ],
    validation: ["Ventana óptima para el trasplante", "Umbral de psicosina asociado a progresión"]
  },
  {
    id: "mld",
    name: "Leucodistrofia metacromática",
    aka: ["Deficiencia de arilsulfatasa A", "MLD"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de arilsulfatasa A acumula sulfátidos en los lisosomas de oligodendrocitos y células de Schwann. Provoca desmielinización central y periférica progresiva con material metacromático.",
    gene: "ARSA",
    protein: "Arilsulfatasa A (ARSA)",
    ec: "3.1.6.8",
    organelleId: "lysosome",
    pathwayId: "sphingolipid-degradation",
    mechanism: {
      normal: "La ARSA, con ayuda del activador de sulfatidasas (saposina B), hidroliza el grupo sulfato de los sulfátidos y permite su recambio en la mielina.",
      alteration: "Variantes bialélicas de ARSA o de la saposina B reducen la actividad; los sulfátidos se acumulan y desestabilizan la mielina.",
      accumulate: [
        "Sulfátidos en orina",
        "Material metacromático en nervios y riñón",
        "Células espumosas"
      ],
      decrease: [
        "Degradación normal de sulfátidos",
        "Velocidad de conducción nerviosa"
      ],
      consequences: [
        "Forma infantil tardía con regresión motora y pérdida de la marcha",
        "Formas juvenil y adulta con deterioro cognitivo y síntomas psiquiátricos",
        "Neuropatía periférica y vejiga neurógena"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Actividad de ARSA en leucocitos",
        "Sulfátidos urinarios elevados",
        "Velocidad de conducción nerviosa reducida"
      ],
      samples: ["Leucocitos", "Sangre en gota seca", "Orina", "Líquido cefalorraquídeo"],
      screening: "El cribado neonatal enzimático se ha evaluado en programas piloto pero no es universal.",
      confirmatory: ["Ensayo enzimático de ARSA", "Secuenciación de ARSA y PSAP", "Resonancia magnética"],
      enzymatic: "La actividad enzimática confirma el diagnóstico; conviene descartar el déficit de saposina B."
    },
    treatment: {
      strategies: [
        "Trasplante de progenitores hematopoyéticos en formas precoces",
        "Terapia de reemplazo enzimático intratalámica en centros especializados",
        "Manejo rehabilitador y de soporte",
        "Consejo genético"
      ],
      diet: "No requiere dieta específica; se atiende la disfagia y el estado nutricional en fases avanzadas.",
      cofactors: "No existen cofactores; el tratamiento se centra en el trasplante y las terapias avanzadas.",
      followup: [
        "Evaluación neurológica y neuropsicológica",
        "Estudios de conducción nerviosa",
        "Resonancia magnética seriada"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Metachromatic Leukodystrophy", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "METACHROMATIC LEUKODYSTROPHY", ref: "#250100" },
      { label: "Orphanet", title: "Metachromatic leukodystrophy", ref: "ORPHA:512" }
    ],
    validation: ["Indicación y momento del trasplante", "Acceso a terapia enzimática intratalámica"]
  },
  {
    id: "mps3a",
    name: "Mucopolisacaridosis IIIA",
    aka: ["Síndrome de Sanfilippo A", "Deficiencia de heparán-N-sulfatasa"],
    inheritance: "Autosómica recesiva",
    category: "lsd",
    summary: "El déficit de heparán-N-sulfatasa bloquea la degradación del heparán sulfato. A diferencia de otras mucopolisacaridosis, predomina el deterioro neurológico progresivo con rasgos somáticos discretos.",
    gene: "SGSH",
    protein: "Heparán-N-sulfatasa (SGSH)",
    ec: "3.10.1.1",
    organelleId: "lysosome",
    pathwayId: "gag-degradation",
    mechanism: {
      normal: "La SGSH elimina el grupo sulfato del heparán sulfato en el primer paso de su degradación lisosomal y permite la acción de las sulfatasas y exosidasas siguientes.",
      alteration: "Variantes bialélicas de SGSH interrumpen ese paso; los fragmentos de heparán sulfato se acumulan en el sistema nervioso central.",
      accumulate: [
        "Heparán sulfato en orina",
        "Glucosaminoglucanos en tejidos",
        "Vacuolas en las neuronas"
      ],
      decrease: [
        "Degradación completa de glucosaminoglucanos",
        "Habilidad cognitiva y del lenguaje"
      ],
      consequences: [
        "Regresión del lenguaje y del desarrollo entre los 2 y 6 años",
        "Trastornos del sueño, hiperactividad y alteraciones conductuales",
        "Pérdida progresiva de funciones cognitivas y motoras"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Heparán sulfato urinario elevado",
        "Actividad de SGSH en leucocitos o gota seca",
        "Glucosaminoglucanos totales elevados"
      ],
      samples: ["Orina", "Leucocitos", "Sangre en gota seca"],
      screening: "El cribado neonatal de MPS III se evalúa en programas piloto mediante ensayos enzimáticos en gota seca.",
      confirmatory: ["Ensayo enzimático de SGSH", "Secuenciación de SGSH", "Electroforesis de glucosaminoglucanos urinarios"],
      enzymatic: "La actividad enzimática en leucocitos o fibroblastos es diagnóstica y permite diferenciar los subtipos de MPS III."
    },
    treatment: {
      strategies: [
        "Manejo multidisciplinar del deterioro cognitivo y conductual",
        "Tratamiento de los trastornos del sueño y la epilepsia",
        "Valoración de terapias en ensayo clínico",
        "Apoyo familiar y consejo genético"
      ],
      diet: "No existe dieta específica; se garantiza una nutrición adecuada y se manejan los problemas de deglución.",
      cofactors: "No hay cofactores disponibles; el trasplante no corrige de forma consistente el deterioro neurológico.",
      followup: [
        "Evaluación neuropsicológica seriada",
        "Polisomnografía y control de la epilepsia",
        "Valoración auditiva y oftalmológica"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Mucopolysaccharidosis Type III", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "MUCOPOLYSACCHARIDOSIS TYPE IIIA", ref: "#252900" },
      { label: "Orphanet", title: "Mucopolysaccharidosis type 3A", ref: "ORPHA:79269" }
    ],
    validation: ["Criterios de inclusión en ensayos clínicos", "Umbrales de heparán sulfato en líquido cefalorraquídeo"]
  },
  {
    id: "gsd3",
    name: "Glucogenosis tipo III",
    aka: ["Enfermedad de Cori", "Deficiencia de amilo-α-1,6-glucosidasa (enzima desramificante)"],
    inheritance: "Autosómica recesiva",
    category: "glycogen",
    summary: "El déficit de la enzima desramificante impide liberar la glucosa de los puntos de ramificación del glucógeno. Produce hepatomegalia, hipoglucemia cetósica y miopatía variable.",
    gene: "AGL",
    protein: "Amilo-α-1,6-glucosidasa, enzima desramificante del glucógeno",
    ec: "3.2.1.33",
    organelleId: "cytosol",
    pathwayId: "glycogenolysis",
    mechanism: {
      normal: "La enzima desramificante transfiere cadenas cortas y libera la glucosa unida por enlaces α-1,6 en los puntos de ramificación del glucógeno, completando la glucogenólisis.",
      alteration: "Variantes bialélicas de AGL dejan ramificaciones sin resolver; el glucógeno truncado no puede movilizarse por completo y se acumula en hígado y músculo.",
      accumulate: [
        "Glucógeno anómalo en hígado y músculo",
        "Cuerpos cetónicos durante el ayuno",
        "Transaminasas y creatina quinasa elevadas"
      ],
      decrease: [
        "Glucosa disponible en el ayuno",
        "Capacidad de ejercicio muscular sostenido"
      ],
      consequences: [
        "Hipoglucemia cetósica con hepatomegalia en la infancia",
        "Miopatía proximal e intolerancia al ejercicio en la vida adulta",
        "Fibrosis hepática y riesgo de cirrosis en algunos pacientes",
        "Retraso del crecimiento"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Hipoglucemia con cetonemia",
        "Transaminasas y creatina quinasa elevadas",
        "Perfil anómalo de glucógeno en la biopsia"
      ],
      samples: ["Sangre", "Plasma", "Biopsia hepática o muscular"],
      screening: "El cribado neonatal no incluye esta enfermedad; la sospecha es clínica y bioquímica.",
      confirmatory: ["Secuenciación de AGL", "Estudio enzimático en hígado o músculo", "Análisis del glucógeno tisular"],
      enzymatic: "La medición de la actividad desramificante en tejido confirma el diagnóstico cuando la genética es dudosa."
    },
    treatment: {
      strategies: [
        "Evitar el ayuno prolongado y las crisis de hipoglucemia",
        "Aporte frecuente de carbohidratos complejos y almidón de maíz crudo",
        "Seguimiento hepático y muscular",
        "Manejo nutricional del crecimiento"
      ],
      diet: "Dieta con hidratos de carbono de liberación lenta y proteína suficiente; el almidón de maíz crudo puede ayudar a mantener la glucosa nocturna.",
      cofactors: "No se usan cofactores específicos; la suplementación de vitaminas y minerales se ajusta individualmente.",
      followup: [
        "Glucosa capilar y transaminasas",
        "Ecografía hepática",
        "Pruebas de esfuerzo y función muscular"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Glycogen Storage Disease Type III", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GLYCOGEN STORAGE DISEASE III", ref: "#232400" },
      { label: "Orphanet", title: "Glycogen storage disease due to glycogen debranching enzyme deficiency", ref: "ORPHA:366" }
    ],
    validation: ["Pauta de almidón de maíz según edad", "Criterios de vigilancia de fibrosis hepática"]
  },
  {
    id: "mcardle",
    name: "Glucogenosis tipo V (McArdle)",
    aka: ["Enfermedad de McArdle", "Deficiencia de glucógeno fosforilasa muscular"],
    inheritance: "Autosómica recesiva",
    category: "glycogen",
    summary: "El déficit de la glucógeno fosforilasa muscular impide movilizar el glucógeno del músculo esquelético. El ejercicio provoca calambres, fatigabilidad precoz y mioglobinuria, con el fenómeno del segundo aliento.",
    gene: "PYGM",
    protein: "Glucógeno fosforilasa muscular (miofosforilasa)",
    ec: "2.4.1.1",
    organelleId: "cytosol",
    pathwayId: "glycogenolysis",
    mechanism: {
      normal: "La miofosforilasa libera glucosa-1-fosfato del glucógeno muscular, que se convierte en glucosa-6-fosfato y alimenta la glucólisis para producir ATP en los primeros minutos del ejercicio.",
      alteration: "Variantes bialélicas de PYGM anulan esa liberación; el músculo depende del aporte sanguíneo de glucosa y ácidos grasos, que llega con más lentitud.",
      accumulate: [
        "Glucógeno muscular subsarcolemal",
        "Creatina quinasa y mioglobina tras el ejercicio",
        "AMP y ADP intramusculares"
      ],
      decrease: [
        "Glucosa-6-fosfato de origen glucogénico",
        "Producción anaerobia de ATP en el músculo"
      ],
      consequences: [
        "Intolerancia al ejercicio con calambres y debilidad",
        "Rabdomiólisis con mioglobinuria y riesgo de lesión renal",
        "Fenómeno del segundo aliento tras unos minutos de ejercicio",
        "Elevación de la creatina quinasa basal en algunos pacientes"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Creatina quinasa elevada tras el esfuerzo",
        "Mioglobina en orina tras la rabdomiólisis",
        "Lactato que no asciende en la prueba de ejercicio isquémico"
      ],
      samples: ["Suero", "Orina", "Biopsia muscular"],
      screening: "No existe cribado neonatal; el diagnóstico se sospecha por la clínica y la curva de lactato.",
      confirmatory: ["Secuenciación de PYGM", "Actividad de fosforilasa en biopsia muscular", "Prueba de ejercicio con lactato"],
      enzymatic: "La histoquímica muscular muestra ausencia de fosforilasa; la genética confirma el diagnóstico."
    },
    treatment: {
      strategies: [
        "Evitar el ejercicio intenso súbito y el reposo absoluto",
        "Calentamiento progresivo para favorecer el segundo aliento",
        "Aporte de sacarosa antes del ejercicio en situaciones planificadas",
        "Hidratación y control de la rabdomiólisis"
      ],
      diet: "Dieta equilibrada con énfasis en carbohidratos antes del esfuerzo; no se recomienda restricción proteica ni dietas cetogénicas sin supervisión.",
      cofactors: "La suplementación con vitamina B6 o creatina se ha propuesto sin evidencia sólida; debe individualizarse.",
      followup: [
        "Creatina quinasa y función renal",
        "Evaluación de la tolerancia al ejercicio",
        "Consejo sobre actividades físicas seguras"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Glycogen Storage Disease Type V", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GLYCOGEN STORAGE DISEASE V", ref: "#232600" },
      { label: "Orphanet", title: "Glycogen storage disease due to muscle glycogen phosphorylase deficiency", ref: "ORPHA:368" }
    ],
    validation: ["Pauta de suplementación de sacarosa antes del ejercicio", "Umbrales de creatina quinasa para derivación urgente"]
  },
  {
    id: "propionic",
    name: "Acidemia propiónica",
    aka: ["Deficiencia de propionil-CoA carboxilasa", "Acidemia propiónica por déficit de PCC"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de propionil-CoA carboxilasa bloquea la conversión del propionil-CoA en metilmalonil-CoA. Se acumulan ácidos orgánicos tóxicos y amonio, con crisis metabólicas graves en el neonato.",
    gene: "PCCA/PCCB",
    protein: "Propionil-CoA carboxilasa (PCC), subunidades PCCA y PCCB",
    ec: "6.4.1.3",
    organelleId: "mitochondrion",
    pathwayId: "propionate-metabolism",
    mechanism: {
      normal: "La PCC carboxila el propionil-CoA a D-metilmalonil-CoA en una reacción dependiente de biotina y ATP. Es el paso que permite incorporar el propionato al ciclo de Krebs vía succinil-CoA.",
      alteration: "Variantes bialélicas en PCCA o PCCB reducen la actividad; el propionil-CoA se desvía hacia metabolitos tóxicos y se inhibe el ciclo de la urea.",
      accumulate: [
        "Propionilcarnitina (C3)",
        "3-hidroxipropionato",
        "Metilcitrato",
        "Amonio y glicina"
      ],
      decrease: [
        "Succinil-CoA derivado del propionato",
        "Producción de energía en el ayuno"
      ],
      consequences: [
        "Crisis de acidosis metabólica con cetosis en el neonato",
        "Hiperamonemia y encefalopatía",
        "Cardiomiopatía, pancreatitis y alteraciones del movimiento",
        "Retraso del crecimiento y del desarrollo"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Propionilcarnitina C3 elevada en gota seca",
        "3-hidroxipropionato y metilcitrato en orina",
        "Amonio y glicina elevados"
      ],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "El cribado neonatal mediante acilcarnitinas (C3) detecta la mayoría de los casos.",
      confirmatory: ["Perfil de acilcarnitinas y ácidos orgánicos", "Secuenciación de PCCA y PCCB", "Actividad de PCC en fibroblastos"],
      enzymatic: "La medición de la actividad de PCC en fibroblastos permite confirmar y clasificar el defecto."
    },
    treatment: {
      strategies: [
        "Dieta restringida en aminoácidos precursores (isoleucina, valina, metionina, treonina)",
        "Fórmula especial sin propionato y suplementación de carnitina",
        "Tratamiento agudo de la acidosis y la hiperamonemia",
        "Metronidazol para reducir la producción intestinal de propionato en casos seleccionados"
      ],
      diet: "Restricción individualizada de aminoácidos ramificados y de ácidos grasos de cadena impar, con aporte calórico suficiente.",
      cofactors: "L-carnitina para favorecer la excreción de propionilcarnitina; la biotina no corrige el defecto salvo en trastornos del ciclo de la biotina.",
      followup: [
        "Acilcarnitinas y amonio periódicos",
        "Valoración cardiológica",
        "Seguimiento del crecimiento y del desarrollo"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Propionic Acidemia", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "PROPIONIC ACIDEMIA", ref: "#606054" },
      { label: "Orphanet", title: "Propionic acidemia", ref: "ORPHA:35" }
    ],
    validation: ["Protocolo de restricción de aminoácidos por edad", "Indicaciones de trasplante hepático"]
  },
  {
    id: "methylmalonic",
    name: "Acidemia metilmalónica",
    aka: ["Deficiencia de metilmalonil-CoA mutasa", "Acidemia metilmalónica aislada"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de metilmalonil-CoA mutasa impide convertir el metilmalonil-CoA en succinil-CoA. Se acumula metilmalonato, con acidosis, hiperamonemia y afectación multiorgánica a largo plazo.",
    gene: "MUT",
    protein: "Metilmalonil-CoA mutasa (MUT), dependiente de adenosilcobalamina",
    ec: "5.4.99.2",
    organelleId: "mitochondrion",
    pathwayId: "propionate-metabolism",
    mechanism: {
      normal: "La mutasa, con adenosilcobalamina como cofactor, reorganiza el metilmalonil-CoA en succinil-CoA, que ingresa al ciclo de Krebs.",
      alteration: "Variantes bialélicas de MUT o defectos del metabolismo de la cobalamina reducen la actividad; el metilmalonato y sus derivados se acumulan.",
      accumulate: [
        "Metilmalonato en sangre y orina",
        "Metilcitrato",
        "Propionilcarnitina (C3)",
        "Amonio"
      ],
      decrease: [
        "Succinil-CoA de origen propiónico",
        "Síntesis de energía y de mielina"
      ],
      consequences: [
        "Acidosis metabólica e hiperamonemia en el neonato",
        "Retraso del crecimiento y del desarrollo",
        "Nefropatía crónica y pancreatitis",
        "Leucoencefalopatía y alteraciones del movimiento en formas tardías"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Metilmalonato elevado en sangre y orina",
        "Propionilcarnitina C3 elevada",
        "Homocisteína normal (diferencia de los defectos de cobalamina)"
      ],
      samples: ["Sangre en gota seca", "Plasma", "Orina"],
      screening: "El cribado neonatal con acilcarnitinas detecta la elevación de C3; la confirmación requiere metilmalonato.",
      confirmatory: ["Ácidos orgánicos urinarios y metilmalonato", "Secuenciación de MUT", "Estudio de cobalaminas y actividad de la mutasa"],
      enzymatic: "La actividad de la mutasa en fibroblastos y el estudio de complementación permiten distinguir los defectos de MUT de los de cobalamina."
    },
    treatment: {
      strategies: [
        "Dieta restringida en precursores del propionato",
        "L-carnitina y control agudo de la acidosis y la hiperamonemia",
        "Hidroxicobalamina en los defectos dependientes de cobalamina",
        "Vigilancia renal y multiorgánica"
      ],
      diet: "Restricción de isoleucina, valina, metionina y treonina con sustituto de aminoácidos y aporte energético adecuado.",
      cofactors: "Hidroxicobalamina o cianocobalamina según el subtipo; la respuesta debe evaluarse antes de mantenerla.",
      followup: [
        "Función renal y metilmalonato",
        "Amonio y acilcarnitinas",
        "Crecimiento, desarrollo y valoración neurológica"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Isolated Methylmalonic Acidemia", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "METHYLMALONIC ACIDURIA, MUT TYPE", ref: "#251000" },
      { label: "Orphanet", title: "Methylmalonic acidemia", ref: "ORPHA:26" }
    ],
    validation: ["Protocolo de respuesta a hidroxicobalamina", "Umbrales de metilmalonato para ajuste dietético"]
  },
  {
    id: "wilson",
    name: "Enfermedad de Wilson",
    aka: ["Degeneración hepatolenticular", "Deficiencia de ATP7B"],
    inheritance: "Autosómica recesiva",
    category: "metal",
    summary: "El defecto de la ATPasa ATP7B impide excretar el cobre por la bilis e incorporarlo a la ceruloplasmina. El cobre se acumula en hígado, ganglios basales y córnea, con hepatopatía y síntomas neuropsiquiátricos.",
    gene: "ATP7B",
    protein: "ATPasa transportadora de cobre ATP7B",
    ec: "7.2.2.8",
    organelleId: "golgi",
    pathwayId: "copper-transport",
    mechanism: {
      normal: "ATP7B, situada en la red trans-Golgi, transfiere cobre a la apoceruloplasmina y, cuando el cobre celular aumenta, se desplaza a la membrana canalicular para excretarlo por la bilis.",
      alteration: "Variantes bialélicas de ATP7B impiden ambas funciones; el cobre libre se acumula en el hepatocito y pasa a la circulación, depositándose en otros tejidos.",
      accumulate: [
        "Cobre hepático",
        "Cobre urinario de 24 horas",
        "Cobre en ganglios basales y córnea",
        "Transaminasas en la fase hepática"
      ],
      decrease: [
        "Ceruloplasmina sérica",
        "Excreción biliar de cobre",
        "Cobre unido a ceruloplasmina"
      ],
      consequences: [
        "Hepatitis, esteatosis y cirrosis",
        "Temblor, distonía, disartria y deterioro cognitivo",
        "Anillo de Kayser-Fleischer y cataratas en girasol",
        "Anemia hemolítica en las crisis"
      ]
    },
    diagnosis: {
      biomarkers: [
        "Ceruloplasmina sérica baja",
        "Cobre urinario de 24 horas elevado",
        "Cobre hepático elevado en la biopsia",
        "Anillo de Kayser-Fleischer en lámpara de hendidura"
      ],
      samples: ["Suero", "Orina de 24 horas", "Biopsia hepática"],
      screening: "No hay cribado neonatal; el estudio se indica ante hepatopatía inexplicada o síntomas neurológicos en jóvenes.",
      confirmatory: ["Ceruloplasmina y cobre urinario", "Estudio genético de ATP7B", "Biopsia hepática con cuantificación de cobre"],
      enzymatic: "No se mide actividad enzimática de rutina; el diagnóstico integra bioquímica, genética e histología."
    },
    treatment: {
      strategies: [
        "Quelantes de cobre (D-penicilamina o trientina)",
        "Zinc como bloqueador de la absorción intestinal",
        "Dieta con bajo contenido de cobre",
        "Trasplante hepático en el fallo hepático fulminante"
      ],
      diet: "Evitar hígado, mariscos, frutos secos, chocolate y setas, y usar agua con bajo contenido de cobre cuando sea necesario.",
      cofactors: "La piridoxina se añade con la D-penicilamina para prevenir neuropatía; el ajuste se hace según tolerancia y cupremia.",
      followup: [
        "Cobre urinario y ceruloplasmina",
        "Función hepática y coagulación",
        "Evaluación neurológica y oftalmológica"
      ]
    },
    sources: [
      { label: "GeneReviews", title: "Wilson Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "WILSON DISEASE", ref: "#277900" },
      { label: "Orphanet", title: "Wilson disease", ref: "ORPHA:905" }
    ],
    validation: ["Objetivo de cobre libre sérico", "Protocolo de inicio y ajuste de quelantes"]
  },
  {
    id: "menkes",
    name: "Enfermedad de Menkes",
    aka: ["Síndrome de pelo ensortijado", "Déficit de ATP7A"],
    inheritance: "Ligada al X",
    category: "metal",
    summary: "El defecto de ATP7A impide la absorción intestinal de cobre y su distribución tisular. Se produce deficiencia sistémica de cobre con afectación neurológica grave.",
    gene: "ATP7A",
    protein: "ATPasa transportadora de cobre ATP7A",
    ec: "7.2.2.8",
    organelleId: "golgi",
    pathwayId: "copper-transport",
    mechanism: {
      normal: "ATP7A transporta cobre a través de membranas, esencial para la absorción intestinal y la incorporación a enzimas cuprodependientes.",
      alteration: "Variantes en ATP7A impiden el transporte de cobre, reduciendo la actividad de enzimas como la lisil oxidasa y la citocromo c oxidasa.",
      accumulate: ["Cobre intestinal"],
      decrease: ["Cobre sérico y tisular", "Ceruloplasmina", "Actividad de enzimas cuprodependientes"],
      consequences: ["Hipotonía y convulsiones", "Pelo ensortijado y frágil", "Retraso del desarrollo", "Muerte temprana si no se trata"]
    },
    diagnosis: {
      biomarkers: ["Cobre sérico bajo", "Ceruloplasmina baja", "Ácido vanilmandélico/noradrenalina alterados"],
      samples: ["Suero", "Plasma"],
      screening: "No hay cribado neonatal universal.",
      confirmatory: ["Genética de ATP7A"],
      enzymatic: "No es de rutina."
    },
    treatment: {
      strategies: ["Administración parenteral de cobre precoz"],
      diet: "Normal",
      cofactors: "Histidinato de cobre",
      followup: ["Neurología", "Niveles de cobre"]
    },
    sources: [
      { label: "GeneReviews", title: "Menkes Disease", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "MENKES DISEASE", ref: "#309400" },
      { label: "Orphanet", title: "Menkes disease", ref: "ORPHA:248" }
    ],
    validation: ["Inicio precoz del tratamiento con cobre"]
  },
  {
    id: "iva",
    name: "Aciduria isovalérica",
    aka: ["Deficiencia de isovaleril-CoA deshidrogenasa"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de isovaleril-CoA deshidrogenasa bloquea la degradación de la leucina. Se acumula isovaleryl-CoA con acidosis metabólica y olor característico a sudor de pies.",
    gene: "IVD",
    protein: "Isovaleril-CoA deshidrogenasa",
    ec: "1.3.8.4",
    organelleId: "mitochondrion",
    pathwayId: "leucine-metabolism",
    mechanism: {
      normal: "La IVD oxida isovaleril-CoA en el catabolismo de la leucina.",
      alteration: "Variantes bialélicas en IVD reducen la actividad enzimática.",
      accumulate: ["Isovalerilglicina", "Isovalerylcarnitina (C5)"],
      decrease: ["Productos de la degradación de leucina"],
      consequences: ["Acidosis metabólica", "Hiperamonemia", "Olor a sudor de pies", "Retraso del desarrollo"]
    },
    diagnosis: {
      biomarkers: ["Isovalerylcarnitina C5 elevada", "Isovalerilglicina en orina"],
      samples: ["Sangre en gota seca", "Orina"],
      screening: "Detectable en cribado neonatal con MS/MS.",
      confirmatory: ["Ácidos orgánicos urinarios", "Secuenciación de IVD"],
      enzymatic: "En fibroblastos si es necesario."
    },
    treatment: {
      strategies: ["Restricción de leucina", "Suplementación con glicina"],
      diet: "Baja en leucina con fórmula especializada",
      cofactors: "Glicina, L-carnitina",
      followup: ["Ácidos orgánicos", "Crecimiento"]
    },
    sources: [
      { label: "GeneReviews", title: "Isovaleric Acidemia", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "ISOVALERIC ACIDEMIA", ref: "#243500" },
      { label: "Orphanet", title: "Isovaleric acidemia", ref: "ORPHA:33" }
    ],
    validation: ["Control de isovalerilglicina"]
  },
  {
    id: "glutaric1",
    name: "Aciduria glutárica tipo I",
    aka: ["Deficiencia de glutaryl-CoA deshidrogenasa"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de GCDH bloquea la degradación de lisina, hidroxilisina y triptófano. Se acumulan ácido glutárico y glutacónico con riesgo de daño estriatal agudo.",
    gene: "GCDH",
    protein: "Glutaryl-CoA deshidrogenasa",
    ec: "1.3.8.6",
    organelleId: "mitochondrion",
    pathwayId: "lysine-tryptophan-metabolism",
    mechanism: {
      normal: "La GCDH oxida glutaryl-CoA en el catabolismo de lisina.",
      alteration: "Variantes bialélicas en GCDH reducen la actividad enzimática.",
      accumulate: ["Ácido glutárico", "Ácido 3-hidroxiglutárico", "Glutarylcarnitina (C5DC)"],
      decrease: ["Productos de degradación de lisina"],
      consequences: ["Macrocefalia", "Lesión estriatal aguda", "Distrocia motora", "Movimientos anormales"]
    },
    diagnosis: {
      biomarkers: ["Glutarylcarnitina C5DC elevada", "Ácido glutárico y 3-hidroxiglutárico en orina"],
      samples: ["Sangre en gota seca", "Orina"],
      screening: "Detectable en cribado neonatal con MS/MS.",
      confirmatory: ["Ácidos orgánicos urinarios", "Secuenciación de GCDH"],
      enzymatic: "En fibroblastos."
    },
    treatment: {
      strategies: ["Restricción de lisina", "Carnitina"],
      diet: "Baja en lisina con fórmula especializada",
      cofactors: "L-carnitina",
      followup: ["RM cerebral", "Ácidos orgánicos"]
    },
    sources: [
      { label: "GeneReviews", title: "Glutaric Acidemia Type 1", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "GLUTARIC ACIDEMIA I", ref: "#231670" },
      { label: "Orphanet", title: "Glutaric acidemia type 1", ref: "ORPHA:25" }
    ],
    validation: ["Prevención de crisis estriatales"]
  },
  {
    id: "hmg",
    name: "Aciduria 3-hidroxi-3-metilglutárica",
    aka: ["Deficiencia de HMG-CoA liasa"],
    inheritance: "Autosómica recesiva",
    category: "oa",
    summary: "El déficit de HMG-CoA liasa bloquea la síntesis de cuerpos cetónicos y la degradación de la leucina. Provoca hipoglucemia sin cetosis y acidosis metabólica.",
    gene: "HMGCL",
    protein: "HMG-CoA liasa",
    ec: "4.1.3.4",
    organelleId: "mitochondrion",
    pathwayId: "leucine-metabolism",
    mechanism: {
      normal: "La HMG-CoA liasa participa en la cetogénesis y en el catabolismo de leucina.",
      alteration: "Variantes bialélicas en HMGCL reducen la actividad enzimática.",
      accumulate: ["Ácido 3-hidroxi-3-metilglutárico", "Ácido 3-metilglutacónico", "3-hidroxiisovalerylcarnitina"],
      decrease: ["Cuerpos cetónicos", "Acetoacetato"],
      consequences: ["Hipoglucemia sin cetosis", "Acidosis metabólica", "Hepatomegalia", "Coma"]
    },
    diagnosis: {
      biomarkers: ["C5-OH elevado", "Ácidos orgánicos característicos en orina"],
      samples: ["Sangre en gota seca", "Orina"],
      screening: "Detectable en cribado neonatal.",
      confirmatory: ["Ácidos orgánicos", "Secuenciación de HMGCL"],
      enzymatic: "En fibroblastos."
    },
    treatment: {
      strategies: ["Evitar ayuno prolongado", "Dieta con aporte frecuente de carbohidratos"],
      diet: "Alta en carbohidratos, restricción moderada de leucina",
      cofactors: "L-carnitina",
      followup: ["Glucemia", "Ácidos orgánicos"]
    },
    sources: [
      { label: "GeneReviews", title: "3-Hydroxy-3-Methylglutaryl-CoA Lyase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "3-HYDROXY-3-METHYLGLUTARYL-CoA LYASE DEFICIENCY", ref: "#246450" },
      { label: "Orphanet", title: "3-hydroxy-3-methylglutaryl-CoA lyase deficiency", ref: "ORPHA:20" }
    ],
    validation: ["Prevención de hipoglucemia"]
  },
  {
    id: "biotinidase",
    name: "Deficiencia de biotinidasa",
    aka: ["BTD deficiency"],
    inheritance: "Autosómica recesiva",
    category: "cofactor",
    summary: "El déficit de biotinidasa impide reciclar la biotina, cofactor de carboxilasas. Produce síntomas multisistémicos tratables con biotina.",
    gene: "BTD",
    protein: "Biotinidasa",
    ec: "3.5.1.12",
    organelleId: "cytosol",
    pathwayId: "biotin-metabolism",
    mechanism: {
      normal: "La biotinidasa libera biotina de biocitina y recicla biotina para las carboxilasas.",
      alteration: "Variantes bialélicas en BTD reducen la actividad enzimática.",
      accumulate: ["Biocitina"],
      decrease: ["Biotina libre"],
      consequences: ["Dermatitis", "Alopecia", "Convulsiones", "Ataxia", "Acidosis orgánica"]
    },
    diagnosis: {
      biomarkers: ["Actividad de biotinidasa en sangre"],
      samples: ["Sangre en gota seca"],
      screening: "Incluida en muchos programas de cribado neonatal.",
      confirmatory: ["Actividad enzimática", "Secuenciación de BTD"],
      enzymatic: "Colorimétrico en DBS."
    },
    treatment: {
      strategies: ["Suplementación con biotina"],
      diet: "Normal",
      cofactors: "Biotina 5-20 mg/día",
      followup: ["Clínico", "Neurológico"]
    },
    sources: [
      { label: "GeneReviews", title: "Biotinidase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "BIOTINIDASE DEFICIENCY", ref: "#253260" },
      { label: "Orphanet", title: "Biotinidase deficiency", ref: "ORPHA:112" }
    ],
    validation: ["Inicio precoz de biotina"]
  },
  {
    id: "holocarboxylase",
    name: "Deficiencia de holocarboxilasa sintetasa",
    aka: ["HCS deficiency"],
    inheritance: "Autosómica recesiva",
    category: "cofactor",
    summary: "El déficit de holocarboxilasa sintetasa impide unir biotina a las carboxilasas. Produce aciduria múltiple con respuesta variable a biotina.",
    gene: "HLCS",
    protein: "Holocarboxilasa sintetasa",
    ec: "6.3.4.10",
    organelleId: "cytosol",
    pathwayId: "biotin-metabolism",
    mechanism: {
      normal: "La HLCS biotinila las carboxilasas dependientes de biotina.",
      alteration: "Variantes bialélicas en HLCS reducen la biotinilación.",
      accumulate: ["Ácidos orgánicos múltiples", "Lactato"],
      decrease: ["Carboxilasas biotiniladas activas"],
      consequences: ["Acidosis metabólica", "Dermatitis", "Alopecia", "Convulsiones"]
    },
    diagnosis: {
      biomarkers: ["Ácidos orgánicos en orina", "Actividad de carboxilasas"],
      samples: ["Orina", "Fibroblastos"],
      screening: "Variable según programa.",
      confirmatory: ["Estudio enzimático", "Secuenciación de HLCS"],
      enzymatic: "En fibroblastos."
    },
    treatment: {
      strategies: ["Suplementación con biotina"],
      diet: "Normal",
      cofactors: "Biotina 10-40 mg/día",
      followup: ["Ácidos orgánicos", "Clínico"]
    },
    sources: [
      { label: "GeneReviews", title: "Holocarboxylase Synthetase Deficiency", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "HOLOCARBOXYLASE SYNTHETASE DEFICIENCY", ref: "#253270" },
      { label: "Orphanet", title: "Holocarboxylase synthetase deficiency", ref: "ORPHA:79242" }
    ],
    validation: ["Respuesta a biotina"]
  },
  {
    id: "lpi",
    name: "Intolerancia a las proteínas con lisina (LPI)",
    aka: ["Lysinuric protein intolerance", "LPI", "Deficiencia de SLC7A7"],
    inheritance: "Autosómica recesiva",
    category: "aa",
    summary: "El defecto del transportador y+LAT1 reduce la absorción de aminoácidos dibásicos y puede provocar hiperamonemia tras la ingesta de proteínas.",
    gene: "SLC7A7",
    protein: "y+LAT1",
    ec: null,
    organelleId: "membrane",
    pathwayId: "amino-acid-transport",
    mechanism: {
      normal: "Transporte de arginina, lisina y ornitina en intestino y riñón.",
      alteration: "Defecto de transporte dibásico.",
      accumulate: ["Ornitina/citrulina urinarias", "Amonio postprandial"],
      decrease: ["Arginina y ornitina sistémicas"],
      consequences: ["Hiperamonemia", "Hepatoesplenomegalia", "Osteoporosis", "Inmunodeficiencia"]
    },
    diagnosis: {
      biomarkers: ["Aminoácidos plasmáticos", "Aminoaciduria dibásica"],
      samples: ["Plasma", "Orina"],
      screening: "Clínico",
      confirmatory: ["Genética de SLC7A7"],
      enzymatic: "No rutinario"
    },
    treatment: {
      strategies: ["Citrulina/arginina", "Restricción proteica moderada"],
      diet: "Proteínas limitadas con suplementos de citrulina",
      cofactors: "Citrulina",
      followup: ["Amonio", "Función renal"]
    },
    sources: [
      { label: "GeneReviews", title: "Lysinuric Protein Intolerance", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "LYSINURIC PROTEIN INTOLERANCE", ref: "#222700" },
      { label: "Orphanet", title: "Lysinuric protein intolerance", ref: "ORPHA:470" }
    ],
    validation: ["Control de hiperamonemia postprandial"]
  },
  {
    id: "hartnup",
    name: "Enfermedad de Hartnup",
    aka: ["Hartnup disorder"],
    inheritance: "Autosómica recesiva",
    category: "aa",
    summary: "Defecto de transporte de aminoácidos neutros en intestino y riñón con excreción aumentada de triptófano.",
    gene: "SLC6A19",
    protein: "B0AT1",
    ec: null,
    organelleId: "membrane",
    pathwayId: "amino-acid-transport",
    mechanism: {
      normal: "Transporte de aminoácidos neutros.",
      alteration: "Defecto de transporte.",
      accumulate: ["Aminoácidos neutros en orina"],
      decrease: ["Absorción intestinal"],
      consequences: ["Rash fotosensible", "Ataxia cerebelosa intermitente", "Síntomas psiquiátricos"]
    },
    diagnosis: {
      biomarkers: ["Aminoaciduria de neutros"],
      samples: ["Orina"],
      screening: "Clínico",
      confirmatory: ["Genética de SLC6A19"],
      enzymatic: "No"
    },
    treatment: {
      strategies: ["Nicotinamida"],
      diet: "Proteínas adecuadas",
      cofactors: "Niacina/nicotinamida",
      followup: ["Clínico"]
    },
    sources: [
      { label: "GeneReviews", title: "Hartnup Disorder", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "HARTNUP DISORDER", ref: "#234500" },
      { label: "Orphanet", title: "Hartnup disease", ref: "ORPHA:2116" }
    ],
    validation: ["Respuesta a nicotinamida"]
  },
  {
    id: "cystinuria",
    name: "Cistinuria",
    aka: ["Cystinuria"],
    inheritance: "Autosómica recesiva",
    category: "aa",
    summary: "Defecto de transporte de dibásicos y cisteína con litiasis renal recurrente.",
    gene: "SLC3A1/SLC7A9",
    protein: "rBAT/b0,+AT",
    ec: null,
    organelleId: "membrane",
    pathwayId: "amino-acid-transport",
    mechanism: {
      normal: "Transporte renal e intestinal de cisteína, ornitina, lisina, arginina.",
      alteration: "Defecto de transporte.",
      accumulate: ["Cisteína en orina"],
      decrease: ["Reabsorción tubular"],
      consequences: ["Cálculos de cistina", "Obstrucción renal", "Infecciones"]
    },
    diagnosis: {
      biomarkers: ["Cistinuria", "Cistina en orina"],
      samples: ["Orina"],
      screening: "Clínico",
      confirmatory: ["Nitroprusiato positivo", "Genética"],
      enzymatic: "No"
    },
    treatment: {
      strategies: ["Hidratación", "Alcalinización urinaria", "Tiopronina/penicilamina"],
      diet: "Baja en metionina",
      cofactors: "Alcalinizantes",
      followup: ["Orina 24h", "Ecografía renal"]
    },
    sources: [
      { label: "GeneReviews", title: "Cystinuria", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "CYSTINURIA", ref: "#220100" },
      { label: "Orphanet", title: "Cystinuria", ref: "ORPHA:214" }
    ],
    validation: ["Prevención de litiasis"]
  },
  {
    id: "fructosemia",
    name: "Fructosemia hereditaria",
    aka: ["HFI", "Deficiencia de aldolasa B"],
    inheritance: "Autosómica recesiva",
    category: "carbs",
    summary: "El déficit de aldolasa B impide metabolizar fructosa-1-P con acumulación hepática y renal.",
    gene: "ALDOB",
    protein: "Aldolasa B",
    ec: "4.1.2.13",
    organelleId: "cytosol",
    pathwayId: "fructose-metabolism",
    mechanism: {
      normal: "Conversión de fructosa-1-P a dihidroxiacetona fosfato y gliceraldehído.",
      alteration: "Defecto enzimático.",
      accumulate: ["Fructosa-1-P"],
      decrease: ["ATP hepático"],
      consequences: ["Hipoglucemia", "Hepatomegalia", "Insuficiencia hepática", "Vomitos"]
    },
    diagnosis: {
      biomarkers: ["Fructosuria", "Transaminasas elevadas"],
      samples: ["Orina", "Sangre"],
      screening: "Clínico",
      confirmatory: ["Genética de ALDOB", "Actividad enzimática hepática"],
      enzymatic: "Hígado/fibroblastos"
    },
    treatment: {
      strategies: ["Eliminación estricta de fructosa, sacarosa y sorbitol"],
      diet: "Sin fructosa",
      cofactors: "Soporte",
      followup: ["Función hepática", "Crecimiento"]
    },
    sources: [
      { label: "GeneReviews", title: "Hereditary Fructose Intolerance", ref: "NCBI Bookshelf" },
      { label: "OMIM", title: "FRUCTOSE INTOLERANCE, HEREDITARY", ref: "#229600" },
      { label: "Orphanet", title: "Hereditary fructose intolerance", ref: "ORPHA:469" }
    ],
    validation: ["Cumplimiento estricto de dieta"]
  }
];

const DISEASE_BY_ID = Object.fromEntries(DISEASES.map((d) => [d.id, d]));

const INHERITANCE_TONE = {
  "Autosómica recesiva": "violet",
  "Ligada al X": "violet",
  "Heterogénea (mitocondrial o nuclear)": "violet",
  "Ligada al X (PDHA1)": "violet"
};

