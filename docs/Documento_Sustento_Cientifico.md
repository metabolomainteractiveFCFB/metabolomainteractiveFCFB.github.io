# Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo
## Un atlas dinámico e interactivo organizado por organelos

**Documento de sustento científico**

- **Tipo de recurso:** aplicación web educativa, interactiva y de consulta.
- **Idioma:** español.
- **Público principal:** estudiantes de pregrado de Medicina, Bioquímica, Nutrición, Farmacia y Biología.
- **Público secundario:** docentes, profesionales de la salud y divulgadores científicos.
- **Alcance:** 8 organelos, 20 rutas metabólicas y 40 enfermedades.
- **Tecnologías:** HTML5, CSS3 y JavaScript sin framework, sin compilación y sin backend.
- **Versión y fecha:** 1.3 · octubre de 2026.
- **Carácter:** recurso educativo; no es un dispositivo médico ni sustituye la valoración clínica.

> **Aviso de uso responsable.** La información está simplificada con fines de aprendizaje. No debe utilizarse para autodiagnóstico, para tomar decisiones terapéuticas ni para sustituir guías clínicas, la valoración de profesionales sanitarios o la confirmación bioquímica y genética de cada caso.

---

## 1. Título de la herramienta

**Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo.**

La herramienta es una aplicación web que organiza enfermedades metabólicas hereditarias representativas según el organelo celular en el que ocurre la ruta alterada. Cada ruta conduce a una ficha con el mecanismo bioquímico, los biomarcadores de diagnóstico en sangre u orina, el tratamiento metabólico o dietético y las fuentes consultadas.

---

## 2. Justificación

Los errores innatos del metabolismo (EIM) son trastornos de base genética que alteran una ruta bioquímica, una enzima, un transportador o un cofactor. Se han descrito más de un millar de entidades y, aunque cada una es poco frecuente, en conjunto afectan aproximadamente a 1 de cada 1.000–5.000 nacidos vivos, según la serie y los trastornos incluidos. Muchas se manifiestan en el periodo neonatal o en la infancia con signos inespecíficos —letargo, vómitos, hipoglucemia, acidosis, ictericia, hipotonía o encefalopatía—, lo que dificulta la sospecha inicial.

El diagnóstico integra la clínica, los biomarcadores bioquímicos (aminoácidos, acilcarnitinas, ácidos orgánicos, enzimas lisosomales, ácidos grasos de cadena muy larga, entre otros) y la confirmación enzimática o genética. La interpretación correcta exige relacionar compartimentos celulares, sustratos, productos y rutas. Sin ese mapa mental, el aprendizaje suele reducirse a listas aisladas de enfermedades y enzimas.

La enseñanza tradicional de los EIM presenta tres dificultades frecuentes:

1. **Fragmentación:** cada enfermedad se estudia por separado, sin un hilo conductor entre organelo, ruta, enzima y fenotipo.
2. **Abstracción:** las rutas se presentan como esquemas estáticos que no permiten explorar el punto de bloqueo ni su consecuencia.
3. **Dispersión de la información:** el mecanismo, los biomarcadores y el tratamiento aparecen en fuentes y formatos distintos.

Este atlas responde a esa necesidad con una organización **por organelos**: el estudiante parte de una estructura celular, identifica sus rutas, localiza la enzima alterada, reconoce los metabolitos que se acumulan o disminuyen y llega al tratamiento metabólico o dietético. El formato web permite consultar la información en cualquier orden, buscar por gen o biomarcador y actualizar el contenido sin reinstalar nada.

La propuesta también responde a los criterios de la guía de la asignatura: utilidad real, funcionalidad comprobable, rigor científico, facilidad de uso y comunicación clara. El nivel de programación no es el criterio principal; por eso el esfuerzo se concentra en la exactitud del contenido, la trazabilidad de las fuentes y la experiencia de consulta.

---

## 3. Público objetivo

**Público principal**

- Estudiantes de pregrado de Medicina, Bioquímica, Nutrición, Farmacia y Biología que cursan metabolismo o bioquímica aplicada.
- Estudiantes que preparan exámenes y necesitan repasar la relación entre organelo, ruta, enzima y enfermedad.
- Docentes que buscan un recurso visual para explicar los EIM en clase.

**Público secundario**

- Profesionales de la salud que desean refrescar conceptos generales antes de consultar una guía clínica.
- Divulgadores científicos y estudiantes de posgrado que necesitan una visión panorámica.
- Personas interesadas en la biología de las enfermedades metabólicas, con acompañamiento profesional.

**Qué se espera del usuario.** No se requieren conocimientos de programación. Se recomienda manejar nociones básicas de enzimas, rutas metabólicas, herencia y compartimentos celulares. El sitio está en español y utiliza una interfaz visual; los términos técnicos se acompañan de una explicación breve en cada ficha.

**Usos previstos:** estudio autónomo, clase expositiva, aprendizaje basado en casos y repaso mediante el explorador y la búsqueda.

> **No es el público previsto:** pacientes o familias que buscan un diagnóstico, una dosis o una decisión terapéutica. Para esas necesidades deben consultarse equipos de metabolismo, genetistas clínicos y guías actualizadas.

---

## 4. Objetivo de la herramienta

**Objetivo general.** Facilitar la comprensión integrada de los errores innatos del metabolismo mediante un atlas interactivo organizado por organelos, que conecte cada ruta metabólica con las enzimas mutadas, los biomarcadores de diagnóstico en sangre u orina y el tratamiento metabólico o dietético.

**Objetivos específicos**

1. Representar de forma visual los organelos implicados en los EIM y las rutas metabólicas que albergan.
2. Identificar, para cada ruta, las enzimas, los metabolitos y los puntos de bloqueo relevantes.
3. Relacionar cada enfermedad con sus biomarcadores en sangre u orina, sus muestras y sus pruebas confirmatorias.
4. Resumir las estrategias terapéuticas, el manejo dietético, los cofactores y el seguimiento, sin sustituir las guías clínicas.
5. Ofrecer una experiencia de consulta clara, accesible y adaptable a diferentes tamaños de pantalla.
6. Documentar las fuentes y las limitaciones para que el recurso sea trazable y responsable.

**Criterios de logro**

| Criterio | Indicador observable |
|---|---|
| Organización por organelos | Los 8 organelos se seleccionan en la célula o en las píldoras y muestran sus rutas y enfermedades. |
| Integración de contenido | Cada ficha reúne mecanismo, diagnóstico, tratamiento, fuentes y necesidades de validación. |
| Interactividad | El diagrama permite seleccionar nodos, ampliar, desplazar y abrir fichas relacionadas. |
| Rigor | Cada enfermedad incluye al menos tres referencias verificables (GeneReviews, OMIM, Orphanet). |
| Usabilidad | La navegación principal, la búsqueda y los filtros funcionan sin instrucciones externas. |

---

## 5. Descripción de la herramienta

La aplicación es una web de una sola página con enrutamiento por *hash*. No requiere instalación, servidor de aplicaciones ni base de datos: los datos de organelos, rutas y enfermedades se cargan desde archivos JavaScript y la interfaz se construye en el navegador. Puede abrirse localmente o publicarse en un alojamiento estático.

### Vistas principales

| Vista | Ruta | Propósito |
|---|---|---|
| Atlas celular | `#/atlas` | Explorar la célula, seleccionar un organelo y consultar su panel contextual. |
| Mapa metabólico | `#/pathways` | Ver todas las rutas agrupadas por organelo. |
| Diagrama de ruta | `#/pathway/<id>` | Recorrer la secuencia, seleccionar enzimas y metabolitos, y abrir fichas. |
| Ruta enfocada | `#/pathway/<id>/<enfermedad>` | Resaltar el nodo de bloqueo de una enfermedad concreta. |
| Explorador | `#/explorer` | Filtrar enfermedades por organelo, categoría y texto libre. |
| Ficha de enfermedad | `#/disease/<id>` | Consultar mecanismo, diagnóstico, tratamiento, fuentes y validación. |
| Sustento científico | `#/sustento` | Documento académico con justificación, contenido, evidencia y referencias. |
| Manual de uso | `#/manual` | Guía paso a paso para usar el recurso sin explicaciones externas. |

### Modelo de datos

- **Organelos:** nombre, color, nivel (diana o contexto), funciones, procesos, rutas y enfermedades asociadas.
- **Rutas:** resumen, función normal, puntos de alteración, metabolitos acumulados y cadenas de pasos con tipo de nodo (metabolito, enzima, bloqueo, biomarcador o destino).
- **Enfermedades:** sinónimos, herencia, gen, proteína, número EC, mecanismo, diagnóstico, tratamiento, fuentes y notas de validación.

### Diseño

La interfaz adopta un lenguaje de atlas científico: fondo azul profundo, paneles con bordes finos, tipografía de exhibición (Space Grotesk), texto de lectura (Inter) y datos técnicos en monoespaciada (JetBrains Mono). Cada organelo tiene un color propio que se mantiene en la célula, las píldoras, las tarjetas y las etiquetas. Los acentos turquesa, violeta, ámbar y coral distinguen tipos de información. La retícula es adaptable y se reorganiza en una columna en pantallas estrechas.

### Alcance y exclusiones

El prototipo incluye 40 enfermedades representativas. Las rutas se distribuyen en la mitocondria, el lisosoma, el peroxisoma, el citosol, el aparato de Golgi (transporte de cobre) y la membrana plasmática (transporte de aminoácidos); el núcleo y el retículo endoplasmático se incluyen como contexto celular. No es un catálogo exhaustivo ni una herramienta de historia clínica: no gestiona datos de pacientes, no calcula dosis y no emite diagnósticos.

---

## 6. Contenido científico

### Marco conceptual

Los EIM se clasifican habitualmente por el tipo de molécula o ruta afectada (aminoácidos, ácidos orgánicos, ácidos grasos, carbohidratos, lisosomas, peroxisomas, mitocondrias, porfirinas, metales, etc.). Este atlas utiliza una clasificación **didáctica por organelo**, no una taxonomía nosológica formal. Una misma enfermedad puede afectar varios compartimentos y una misma ruta puede distribuirse entre ellos; el ciclo de la urea, por ejemplo, comienza en la mitocondria y continúa en el citosol.

La secuencia de lectura propuesta es: **organelo → ruta → enzima o transportador → sustrato/producto → biomarcador → tratamiento**. Esa cadena explica por qué un bloqueo enzimático produce una acumulación tóxica, un déficit energético o ambas cosas, y por qué el tratamiento puede consistir en restringir un sustrato, aportar un producto, estimular una vía alternativa o reemplazar la enzima.

### Organelos y rutas representadas

| Organelo | Rutas representadas | Enfermedades |
|---|---|---|
| **Mitocondria** (diana) | β-oxidación de ácidos grasos; ciclo de la urea; metabolismo energético mitocondrial; metabolismo del propionato | MCAD; VLCAD; OTC; citrulinemia tipo I; déficit de PDH; síndrome de Leigh; déficit de CPS1; acidemia propiónica; acidemia metilmalónica |
| **Lisosoma** (diana) | Degradación de esfingolípidos; degradación de glucosaminoglucanos; degradación lisosomal del glucógeno | Gaucher; Fabry; Tay-Sachs; Niemann-Pick A/B; Pompe; MPS I; MPS II; Krabbe; leucodistrofia metacromática; MPS IIIA |
| **Peroxisoma** (diana) | β-oxidación peroxisomal de VLCFA; síntesis de plasmalógenos; α-oxidación del ácido fitánico | X-ALD; espectro de Zellweger; Refsum |
| **Citosol** | Glucólisis; metabolismo de aminoácidos; glucogenólisis; metabolismo de la galactosa; etapa citosólica del ciclo de la urea | PKU; glucogenosis tipo I; galactosemia clásica; homocistinuria; tirosinemia tipo I; glucogenosis tipo III; McArdle |
| **Aparato de Golgi** | Transporte y homeostasis del cobre (ATP7B) | Enfermedad de Wilson |
| **Núcleo** (contexto) | Sin rutas propias en esta versión | — |
| **Retículo endoplasmático** (contexto) | Sin rutas propias en esta versión | — |

### Enfermedades incluidas

La selección prioriza entidades con relevancia clínica y educativa, cobertura de los principales compartimentos (mitocondria, lisosoma, peroxisoma, citosol y aparato de Golgi), disponibilidad de referencias actualizadas y variedad de estrategias terapéuticas (dieta, cofactores, enzimas recombinantes, trasplante, quelantes o soporte).

| Enfermedad | Gen | Organelo | Ruta | Biomarcador clave | Eje terapéutico |
|---|---|---|---|---|---|
| Deficiencia de MCAD | ACADM | Mitocondria | β-oxidación | Acilcarnitinas C8 y C8:1 | Evitar ayuno; glucosa en crisis |
| Deficiencia de VLCAD | ACADVL | Mitocondria | β-oxidación | Acilcarnitinas C14:1, C14, C16 | Evitar ayuno; MCT; control cardíaco |
| Deficiencia de OTC | OTC | Mitocondria | Ciclo de la urea | Amonio, glutamina, ácido orótico | Restricción proteica; captores de nitrógeno |
| Citrulinemia tipo I | ASS1 | Citosol | Ciclo de la urea | Citrulina y amonio | Arginina; captores; restricción proteica |
| Deficiencia del complejo PDH | PDHA1 | Mitocondria | Metabolismo energético | Lactato, piruvato, alanina | Dieta cetogénica seleccionada; soporte |
| Síndrome de Leigh | Múltiples | Mitocondria | OXPHOS | Lactato; imagen | Soporte multidisciplinario |
| Enfermedad de Gaucher | GBA1 | Lisosoma | Esfingolípidos | Glucosilceramida; lyso-GL1 | Enzima recombinante; reducción de sustrato |
| Enfermedad de Fabry | GLA | Lisosoma | Esfingolípidos | Gb3; lyso-Gb3 | Enzima recombinante; chaperona |
| Enfermedad de Tay-Sachs | HEXA | Lisosoma | Esfingolípidos | Hexosaminidasa A; GM2 | Soporte; consejo genético |
| Niemann-Pick A/B | SMPD1 | Lisosoma | Esfingolípidos | Esfingomielina; lyso-SM | Soporte; enzima recombinante en tipo B |
| Enfermedad de Pompe | GAA | Lisosoma | Glucógeno lisosomal | GAA; CK; Glc4 urinario | Enzima recombinante; soporte |
| Mucopolisacaridosis I | IDUA | Lisosoma | GAG | Dermatán/heparán sulfato | Enzima recombinante; trasplante seleccionado |
| Mucopolisacaridosis II | IDS | Lisosoma | GAG | Heparán/dermatán sulfato | Enzima recombinante |
| Adrenoleucodistrofia ligada al X | ABCD1 | Peroxisoma | VLCFA | C26:0 | Trasplante temprano; aceite de Lorenzo; reemplazo adrenal |
| Espectro de Zellweger | PEX1, PEX2, PEX6… | Peroxisoma | VLCFA / plasmalógenos | VLCFA; plasmalógenos | Soporte multidisciplinario |
| Enfermedad de Refsum | PHYH | Peroxisoma | α-oxidación | Ácido fitánico | Dieta baja en fitánico; plasmaféresis |
| Fenilcetonuria | PAH | Citosol | Fenilalanina | Fenilalanina; Phe/Tyr | Dieta baja en Phe; sapropterina; pegvaliasa |
| Glucogenosis tipo I | G6PC | Citosol/RE | Glucogenólisis | Glucosa, lactato, ácido úrico | Almidón de maíz; alopurinol |
| Galactosemia clásica | GALT | Citosol | Galactosa | Galactosa-1-P; galactitol | Restricción de galactosa/lactosa |
| Deficiencia de CPS1 | CPS1 | Mitocondria | Ciclo de la urea | Amonio y glutamina altos; citrulina baja | Restricción proteica; captores; arginina/citrulina; trasplante |
| Homocistinuria clásica | CBS | Citosol | Metabolismo de aminoácidos | Homocisteína total; metionina | Dieta baja en metionina; piridoxina; betaina; folato/B12 |
| Tirosinemia tipo I | FAH | Citosol | Metabolismo de aminoácidos | Succinilacetona; tirosina | Nitisinona; dieta baja en tirosina/fenilalanina; trasplante |
| Enfermedad de Krabbe | GALC | Lisosoma | Esfingolípidos | Actividad de GALC; psicosina | Trasplante temprano; soporte |
| Leucodistrofia metacromática | ARSA | Lisosoma | Esfingolípidos | Actividad de ARSA; sulfátidos | Trasplante temprano; soporte |
| Mucopolisacaridosis IIIA | SGSH | Lisosoma | GAG | Heparán sulfato; actividad de SGSH | Manejo multidisciplinario; terapias en investigación |
| Glucogenosis tipo III | AGL | Citosol | Glucogenólisis | Glucosa, lactato, cetonas y CK | Almidón de maíz; dieta rica en proteínas; evitar ayuno |
| Glucogenosis tipo V (McArdle) | PYGM | Citosol | Glucogenólisis | CK y mioglobina tras ejercicio | Acondicionamiento físico; sacarosa antes del ejercicio |
| Acidemia propiónica | PCCA/PCCB | Mitocondria | Metabolismo del propionato | Propionilcarnitina C3; metilcitrato; amonio | Dieta baja en proteínas; carnitina; captores; trasplante |
| Acidemia metilmalónica | MUT | Mitocondria | Metabolismo del propionato | Ácido metilmalónico; C3; amonio | Dieta baja en proteínas; carnitina; prueba con B12; trasplante |
| Enfermedad de Wilson | ATP7B | Aparato de Golgi | Transporte de cobre | Ceruloplasmina baja; cobre libre y urinario | Quelantes; zinc; dieta baja en cobre; trasplante |

> **Lectura de la tabla.** Los biomarcadores son orientativos y no constituyen valores de corte. Los intervalos de referencia, las unidades y los algoritmos diagnósticos varían entre laboratorios y deben validarse localmente. El tratamiento se presenta por categorías; las dosis y los protocolos corresponden a las guías clínicas y al equipo tratante.

### Nivel de detalle de cada ficha

- **Mecanismo:** función normal de la enzima, tipo de alteración, sustratos que se acumulan, productos que disminuyen y consecuencias metabólicas.
- **Diagnóstico:** biomarcadores, muestras, cribado, pruebas confirmatorias y pruebas enzimáticas o genéticas.
- **Tratamiento:** estrategias, manejo dietético, cofactores o suplementos y seguimiento clínico.
- **Fuentes y validación:** al menos tres referencias y una lista de datos que requieren confirmación local.

---

## 7. Sustento científico y bibliográfico

El contenido se elaboró a partir de fuentes secundarias de alta calidad y de revisiones especializadas. La jerarquía utilizada fue: guías de práctica y libros de referencia de metabolismo; revisiones en revistas arbitradas; capítulos de *GeneReviews*; registros OMIM y Orphanet; y, cuando fue necesario, literatura primaria citada por esas fuentes.

### Proceso de curación

1. **Selección de entidades:** enfermedades representativas de cada organelo, con información suficiente y estable.
2. **Extracción de datos:** gen, proteína, número EC, mecanismo, biomarcadores, muestras, pruebas y tratamiento.
3. **Contraste:** verificación cruzada entre al menos tres fuentes (GeneReviews, OMIM y Orphanet) y revisión de coherencia con la ruta.
4. **Simplificación controlada:** redacción para el público objetivo, sin dosis ni valores de corte, conservando la lógica bioquímica.
5. **Marcado de incertidumbre:** cada ficha incluye una tarjeta de «Requiere validación» con los aspectos que dependen del contexto clínico o del laboratorio.

### Referencias generales

1. Saudubray, J.-M., Baumgartner, M. R. y Walter, J. (Eds.). (2022). *Inborn Metabolic Diseases: Diagnosis and Treatment* (7.ª ed.). Springer.
2. Blau, N., Duran, M., Gibson, K. M. y Dionisi-Vici, C. (Eds.). (2022). *Physician's Guide to the Diagnosis, Treatment, and Follow-Up of Inherited Metabolic Diseases* (2.ª ed.). Springer.
3. Ferreira, C. R., Rahman, S., Keller, M., Zschocke, J. y ICIMD Advisory Group. (2021). An international classification of inherited metabolic disorders (ICIMD). *Journal of Inherited Metabolic Disease, 44*(1), 164–177.
4. Valle, D., Antonarakis, S., Ballabio, A., Beaudet, A. L. y Mitchell, G. A. (Eds.). *The Online Metabolic and Molecular Bases of Inherited Disease (OMMBID)*. McGraw Hill.
5. Houten, S. M., Violante, S., Ventura, F. V. y Wanders, R. J. A. (2016). The biochemistry and physiology of mitochondrial fatty acid β-oxidation and its genetic disorders. *Annual Review of Physiology, 78*, 23–44.
6. Häberle, J., Burlina, A., Chakrapani, A., Dixon, M., Karall, D., Lindner, M., … Dionisi-Vici, C. (2019). Suggested guidelines for the diagnosis and management of urea cycle disorders: First revision. *Journal of Inherited Metabolic Disease, 42*(6), 1192–1230.
7. Platt, F. M., d'Azzo, A., Davidson, B. L., Neufeld, E. F. y Tifft, C. J. (2018). Lysosomal storage diseases. *Nature Reviews Disease Primers, 4*, 27.
8. Wanders, R. J. A., Waterham, H. R. y Ferdinandusse, S. (2023). Peroxisomal disorders: A review. *Journal of Inherited Metabolic Disease*.
9. Gorman, G. S., Chinnery, P. F., DiMauro, S., Hirano, M., Koga, Y., McFarland, R., … Turnbull, D. M. (2016). Mitochondrial diseases. *Nature Reviews Disease Primers, 2*, 16080.
10. van Spronsen, F. J., Blau, N., Harding, C., Burlina, A., Longo, N. y Muntau, A. C. (2021). Phenylketonuria. *Nature Reviews Disease Primers, 7*, 36.
11. Kishnani, P. S., Austin, S. L., Abdenur, J. E., Arn, P., Bali, D. S., Boney, A., … Watson, M. S. (2014). Diagnosis and management of glycogen storage disease type I: A practice guideline of the American College of Medical Genetics and Genomics. *Genetics in Medicine, 16*(11), e1.
12. Berry, G. T. (2020). Classic galactosemia and clinical variant galactosemia. En *GeneReviews*. University of Washington.
13. National Center for Biotechnology Information. *GeneReviews* [base de datos]. NCBI Bookshelf. https://www.ncbi.nlm.nih.gov/books/NBK1116/
14. Online Mendelian Inheritance in Man (OMIM). Johns Hopkins University. https://omim.org/
15. Orphanet. Portal de enfermedades raras y medicamentos huérfanos. https://www.orpha.net/

### Referencias específicas por enfermedad

| Enfermedad | GeneReviews | OMIM | Orphanet |
|---|---|---|---|
| Deficiencia de MCAD | Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency | #201450 | ORPHA:42 |
| Deficiencia de VLCAD | Very Long-Chain Acyl-Coenzyme A Dehydrogenase Deficiency | #201475 | Orphanet |
| Deficiencia de OTC | Ornithine Transcarbamylase Deficiency | #311250 | ORPHA:664 |
| Citrulinemia tipo I | Citrullinemia Type I | #215700 | Orphanet |
| Deficiencia del complejo PDH | Primary Pyruvate Dehydrogenase Complex Deficiency | #312170 | Orphanet |
| Síndrome de Leigh | Leigh Syndrome | #256000 | Orphanet |
| Enfermedad de Gaucher | Gaucher Disease | #230800 | ORPHA:355 |
| Enfermedad de Fabry | Fabry Disease | #301500 | ORPHA:324 |
| Enfermedad de Tay-Sachs | Tay-Sachs Disease | #272800 | Orphanet |
| Niemann-Pick A/B | Acid Sphingomyelinase Deficiency | #257200 | Orphanet |
| Enfermedad de Pompe | Pompe Disease | #232300 | ORPHA:308 |
| Mucopolisacaridosis I | Mucopolysaccharidosis Type I | #607014 | Orphanet |
| Mucopolisacaridosis II | Mucopolysaccharidosis Type II | #309900 | Orphanet |
| Adrenoleucodistrofia ligada al X | X-Linked Adrenoleukodystrophy | #300100 | ORPHA:43 |
| Espectro de Zellweger | Zellweger Spectrum Disorder | #214100 | ORPHA:912 |
| Enfermedad de Refsum | Refsum Disease | #266500 | ORPHA:773 |
| Fenilcetonuria | Phenylalanine Hydroxylase Deficiency | #261600 | ORPHA:716 |
| Glucogenosis tipo I | Glucose-6-Phosphatase Deficiency | #232200 | Orphanet |
| Galactosemia clásica | Classic Galactosemia | #230400 | Orphanet |
| Deficiencia de CPS1 | Urea Cycle Disorders Overview | #237300 | ORPHA:147 |
| Homocistinuria clásica | Homocystinuria Caused by Cystathionine Beta-Synthase Deficiency | #236200 | ORPHA:394 |
| Tirosinemia tipo I | Tyrosinemia Type I | #276700 | ORPHA:28378 |
| Enfermedad de Krabbe | Krabbe Disease | #245200 | ORPHA:487 |
| Leucodistrofia metacromática | Metachromatic Leukodystrophy | #250100 | ORPHA:512 |
| Mucopolisacaridosis IIIA | Mucopolysaccharidosis Type III | #252900 | ORPHA:79269 |
| Glucogenosis tipo III | Glycogen Storage Disease Type III | #232400 | ORPHA:366 |
| Glucogenosis tipo V (McArdle) | Glycogen Storage Disease Type V | #232600 | ORPHA:368 |
| Acidemia propiónica | Propionic Acidemia | #606054 | ORPHA:35 |
| Acidemia metilmalónica | Isolated Methylmalonic Acidemia | #251000 | ORPHA:26 |
| Enfermedad de Wilson | Wilson Disease | #277900 | ORPHA:905 |

### Sobre las figuras

La célula y los diagramas de ruta son ilustraciones esquemáticas originales, dibujadas con SVG. No están a escala, no representan la estequiometría de las reacciones y no sustituyen los mapas metabólicos completos. Las flechas indican la dirección didáctica del flujo, no una cinética enzimática.

**Fecha de curación y consulta de fuentes:** octubre de 2026. *GeneReviews* se actualiza de forma continua; OMIM y Orphanet también modifican sus registros. Antes de reutilizar el contenido con fines docentes, conviene comprobar la versión vigente de cada fuente.

---

## 8. Funcionalidades principales

| Función | Cómo se accede | Qué resuelve |
|---|---|---|
| Atlas celular interactivo | Vista principal | Relaciona cada estructura celular con sus rutas y enfermedades. |
| Panel contextual | Clic en un organelo o píldora | Muestra funciones, rutas, enfermedades y acceso al explorador. |
| Listado de rutas | Menú «Mapa metabólico» | Agrupa las 20 rutas por organelo. |
| Diagrama interactivo | Clic en una ruta | Representa metabolitos, enzimas, bloqueos y biomarcadores. |
| Inspector de nodos | Clic en un nodo | Explica el paso y enlaza con la enfermedad cuando corresponde. |
| Zoom y desplazamiento | Botones +, −, reinicio o arrastre | Facilita la lectura en pantallas pequeñas y rutas extensas. |
| Explorador de enfermedades | Menú «Explorador» | Filtra por organelo, categoría y texto libre. |
| Ficha de enfermedad | Clic en una tarjeta o nodo | Reúne mecanismo, diagnóstico, tratamiento, fuentes y validación. |
| Búsqueda global | Ctrl/Cmd + K, tecla «/» o buscador | Encuentra enfermedades, genes, enzimas, rutas y organelos. |
| Quiz por rutas | Menú «Quiz», pie de página o botón «Quiz por rutas» | Ofrece 20 preguntas por cada una de las 20 rutas (400 en total), con retroalimentación inmediata, puntuación y revisión de respuestas. |
| Documentación integrada | Pie de página | Ofrece el sustento y el manual, con opción de imprimir o descargar. |

El quiz se organiza en una vista de selección de ruta y en una vista independiente por ruta (`#/quiz/:id`). Cada ruta conserva sus 20 preguntas, la retroalimentación inmediata, la puntuación sobre 20 y la revisión final. La glucólisis, que no tiene una enfermedad primaria en el atlas, utiliza enfermedades relacionadas con el flujo glucolítico, el glucógeno o la oxidación del piruvato; la interfaz lo advierte antes de comenzar.

### Rutas directas

`#/atlas` · `#/pathways` · `#/pathway/urea-cycle` · `#/pathway/fa-beta-oxidation/mcad` · `#/explorer` · `#/disease/gaucher` · `#/quiz` · `#/quiz/urea-cycle` · `#/sustento` · `#/manual`

### Características de experiencia de uso

- Navegación persistente y migas de pan para volver al organelo o a la ruta.
- Colores consistentes por organelo y etiquetas de categoría en todas las vistas.
- Estados vacíos y mensajes de error que explican cómo continuar.
- Diseño adaptable con reorganización de paneles y controles en pantallas estrechas.
- Uso de iconos SVG y texto alternativo en los controles principales.
- Sin registro, sin cookies de seguimiento y sin recogida de datos personales.

---

## 9. Evidencia del funcionamiento

Se realizó una validación funcional en un navegador Chromium sobre un servidor estático local. Las pruebas cubrieron la navegación, la selección de organelos, los diagramas, los filtros, la búsqueda, las fichas y el quiz por rutas. También se comprobó que las 20 rutas generan exactamente 20 preguntas y que cada ruta incluye sus enfermedades.

| N.º | Funcionalidad | Resultado esperado | Estado |
|---|---|---|---|
| 01 | Selección de organelo en la célula | El panel muestra nombre, funciones, rutas y enfermedades. | Verificado |
| 02 | Píldoras de organelos | Cambian la selección y actualizan el panel. | Verificado |
| 03 | Listado de rutas | Se agrupan por organelo y enlazan al diagrama correcto. | Verificado |
| 04 | Diagrama de ruta | Renderiza cadenas, nodos, flechas y etiquetas sin desbordamientos. | Verificado |
| 05 | Inspector de nodos | Al pulsar un nodo se muestra su detalle y el enlace a la enfermedad. | Verificado |
| 06 | Zoom, reinicio y arrastre | La escala y el desplazamiento se actualizan y pueden restaurarse. | Verificado |
| 07 | Explorador y filtros | Los filtros se combinan y actualizan el contador. | Verificado |
| 08 | Ficha de enfermedad | Los acordeones abren y cierran; las fuentes son visibles. | Verificado |
| 09 | Búsqueda global | Encuentra por enfermedad, gen, enzima, ruta o metabolito. | Verificado |
| 10 | Navegación y rutas | El enrutamiento por hash conserva la vista esperada. | Verificado |
| 11 | Diseño adaptable | La retícula se reorganiza a una columna. | Verificado en 800 y 500 px |
| 12 | Impresión de la documentación | El botón de impresión oculta la navegación y conserva el contenido. | Verificado |
| 13 | Selección de ruta del quiz | Muestra las 20 rutas, sus enfermedades y el acceso a 20 preguntas por ruta. | Verificado |
| 14 | Quiz por ruta y resultado | Permite responder 20 preguntas, muestra retroalimentación inmediata, calcula el resultado y conserva la revisión de respuestas. | Verificado |

### Capturas de las funciones principales

Las capturas se incluyen en la vista `#/sustento` del sitio y en la carpeta `assets/`:

- `assets/captura-atlas.png`: atlas celular con la célula interactiva y el panel contextual.
- `assets/captura-explorador.png`: explorador con filtros y tarjetas de enfermedad.
- `assets/captura-busqueda.png`: búsqueda global con resultados agrupados.
- `assets/captura-quiz.png`: selección de ruta del quiz, con las 20 rutas y 20 preguntas por ruta.

### Observaciones de la validación

- Las pruebas se ejecutaron con datos locales y sin conexión a servicios externos, salvo la carga de tipografías.
- La comprobación en 1440, 1024, 800 y 500 px confirma la reorganización; queda pendiente una auditoría con lector de pantalla y una prueba en dispositivos móviles reales.
- No se encontraron errores de JavaScript en la consola durante los recorridos principales, incluida la validación de las 20 rutas y el recorrido completo de un quiz de 20 preguntas.
- Las capturas corresponden al entorno de prueba y pueden variar ligeramente respecto de la versión final.

---

## 10. Manual de uso

El manual completo está disponible en `#/manual` y en `docs/Manual_de_Uso.md`. Estos son los pasos esenciales:

1. **Abre el sitio** en un navegador actualizado. Si lo ejecutas localmente, abre `index.html` o sírvelo con un servidor estático.
2. **Explora la célula:** pasa el cursor para identificar estructuras y haz clic en la mitocondria, el lisosoma, el peroxisoma o el citosol.
3. **Lee el panel contextual:** encontrarás funciones, rutas y enfermedades. Usa «Explorar este organelo» para filtrar el explorador.
4. **Abre una ruta:** desde el panel o desde «Mapa metabólico». El diagrama muestra metabolitos, enzimas, bloqueos y biomarcadores.
5. **Selecciona un nodo:** el inspector explica el paso y enlaza con la ficha de la enfermedad cuando corresponde.
6. **Consulta la ficha:** despliega mecanismo, diagnóstico, tratamiento y fuentes. Usa «Ver en el mapa metabólico» para volver al punto de bloqueo.
7. **Filtra o busca:** el explorador permite combinar organelo, categoría y texto; la búsqueda global acepta genes, enzimas, rutas y metabolitos.
8. **Cierra con el quiz de la ruta:** elige una de las 20 rutas y responde sus 20 preguntas con retroalimentación inmediata.
9. **Profundiza:** abre el sustento científico o el manual desde el pie de página. Puedes imprimir o guardar en PDF.

### Atajos

| Acción | Atajo |
|---|---|
| Abrir la búsqueda global | Ctrl + K o ⌘ + K |
| Abrir la búsqueda (fuera de un campo) | / |
| Cerrar la búsqueda | Esc |
| Abrir el primer resultado | Enter |

> **Recomendación docente.** Pide al estudiante que elija un biomarcador, localice la ruta, identifique la enzima y explique por qué se acumula el sustrato. Después, que contraste dos enfermedades del mismo organelo y justifique por qué reciben tratamientos distintos.

---

## 11. Limitaciones y trabajo futuro

### Limitaciones del recurso

- **No es una herramienta clínica:** no emite diagnósticos, no calcula dosis, no interpreta resultados de laboratorio y no sustituye guías ni equipos de metabolismo.
- **Cobertura parcial:** incluye 40 enfermedades representativas de más de un millar de EIM. Algunas entidades se agrupan y otras quedan fuera.
- **Contenido simplificado:** los mecanismos se presentan con un nivel didáctico; no se detallan isoformas, modificadores genéticos, fenotipos intermedios ni todas las complicaciones.
- **Sin valores de corte:** los biomarcadores se enumeran, pero no se incluyen intervalos de referencia ni unidades, porque dependen del laboratorio y de la edad.
- **Organelos de contexto:** el núcleo y el retículo endoplasmático se muestran para orientar la célula; no tienen rutas propias en el atlas. El aparato de Golgi alberga el transporte del cobre y la membrana plasmática agrupa el transporte de aminoácidos.
- **Datos estáticos:** la información se actualiza manualmente; no existe una base de datos ni una API que sincronice cambios.
- **Idioma:** el contenido está en español y no se ha validado en otros idiomas.
- **Accesibilidad:** se cuidaron el contraste, el foco y las etiquetas, pero falta una auditoría formal con lectores de pantalla y pruebas con usuarios.
- **Dependencia de la conexión:** la versión publicada requiere internet; las tipografías y los recursos visuales se sirven localmente, sin depender de Google Fonts.
- **Validación experta pendiente:** antes de un uso docente formal, el contenido debe ser revisado por un bioquímico clínico o genetista metabólico.

### Trabajo futuro

1. Incorporar más enfermedades y completar el núcleo y el retículo endoplasmático con rutas propias.
2. Añadir valores de referencia configurables por laboratorio y unidades.
3. Añadir casos clínicos integrados y preguntas de razonamiento que complementen el banco actual de 400 preguntas.
4. Realizar una auditoría de accesibilidad y pruebas con usuarios del público objetivo.
5. Versionar el contenido y registrar la fecha de la última revisión de cada ficha.
6. Mantener publicado el sitio y actualizar el contenido con control de versiones.

> **Uso responsable.** Si el recurso se utiliza en un contexto clínico o educativo formal, debe acompañarse de la guía docente, declarar sus limitaciones y remitir a las fuentes primarias. La información no reemplaza el juicio profesional.

---

## 12. Referencias bibliográficas

### Bibliografía general

1. Saudubray, J.-M., Baumgartner, M. R. y Walter, J. (Eds.). (2022). *Inborn Metabolic Diseases: Diagnosis and Treatment* (7.ª ed.). Springer.
2. Blau, N., Duran, M., Gibson, K. M. y Dionisi-Vici, C. (Eds.). (2022). *Physician's Guide to the Diagnosis, Treatment, and Follow-Up of Inherited Metabolic Diseases* (2.ª ed.). Springer.
3. Ferreira, C. R., Rahman, S., Keller, M., Zschocke, J. y ICIMD Advisory Group. (2021). An international classification of inherited metabolic disorders (ICIMD). *Journal of Inherited Metabolic Disease, 44*(1), 164–177.
4. Valle, D., Antonarakis, S., Ballabio, A., Beaudet, A. L. y Mitchell, G. A. (Eds.). *The Online Metabolic and Molecular Bases of Inherited Disease (OMMBID)*. McGraw Hill.
5. Houten, S. M., Violante, S., Ventura, F. V. y Wanders, R. J. A. (2016). The biochemistry and physiology of mitochondrial fatty acid β-oxidation and its genetic disorders. *Annual Review of Physiology, 78*, 23–44.
6. Häberle, J., Burlina, A., Chakrapani, A., Dixon, M., Karall, D., Lindner, M., … Dionisi-Vici, C. (2019). Suggested guidelines for the diagnosis and management of urea cycle disorders: First revision. *Journal of Inherited Metabolic Disease, 42*(6), 1192–1230.
7. Platt, F. M., d'Azzo, A., Davidson, B. L., Neufeld, E. F. y Tifft, C. J. (2018). Lysosomal storage diseases. *Nature Reviews Disease Primers, 4*, 27.
8. Wanders, R. J. A., Waterham, H. R. y Ferdinandusse, S. (2023). Peroxisomal disorders: A review. *Journal of Inherited Metabolic Disease*.
9. Gorman, G. S., Chinnery, P. F., DiMauro, S., Hirano, M., Koga, Y., McFarland, R., … Turnbull, D. M. (2016). Mitochondrial diseases. *Nature Reviews Disease Primers, 2*, 16080.
10. van Spronsen, F. J., Blau, N., Harding, C., Burlina, A., Longo, N. y Muntau, A. C. (2021). Phenylketonuria. *Nature Reviews Disease Primers, 7*, 36.
11. Kishnani, P. S., Austin, S. L., Abdenur, J. E., Arn, P., Bali, D. S., Boney, A., … Watson, M. S. (2014). Diagnosis and management of glycogen storage disease type I: A practice guideline of the American College of Medical Genetics and Genomics. *Genetics in Medicine, 16*(11), e1.
12. Berry, G. T. (2020). Classic galactosemia and clinical variant galactosemia. En *GeneReviews*. University of Washington.
13. National Center for Biotechnology Information. *GeneReviews* [base de datos]. NCBI Bookshelf. https://www.ncbi.nlm.nih.gov/books/NBK1116/
14. Online Mendelian Inheritance in Man (OMIM). Johns Hopkins University. https://omim.org/
15. Orphanet. Portal de enfermedades raras y medicamentos huérfanos. https://www.orpha.net/

### Referencias por enfermedad

Consulta la tabla del apartado 7 y las fuentes específicas de cada ficha en el sitio. Cada enfermedad incluye tres referencias: un capítulo de *GeneReviews*, una entrada de OMIM y un registro de Orphanet.

### Cómo citar este recurso

Proyecto académico de Bioquímica Aplicada. (2026). *Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo* [Recurso educativo web].

> Las referencias se consultaron en octubre de 2026. Las bases de datos GeneReviews, OMIM y Orphanet se actualizan periódicamente; verifica la versión vigente antes de reutilizar el contenido.

