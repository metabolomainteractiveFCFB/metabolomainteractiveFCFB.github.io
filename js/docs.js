/* ============================================================
   METABOLOMA INTERACTIVO — Documentación académica
   Documento de sustento científico y manual de uso
   ============================================================ */

const DOC_VERSION = "1.3";
const DOC_DATE = "octubre de 2026";

const GENERAL_REFERENCES = [
  `<strong>Saudubray, J.-M., Baumgartner, M. R. y Walter, J. (Eds.). (2022).</strong> <em>Inborn Metabolic Diseases: Diagnosis and Treatment</em> (7.ª ed.). Springer.`,
  `<strong>Blau, N., Duran, M., Gibson, K. M. y Dionisi-Vici, C. (Eds.). (2022).</strong> <em>Physician's Guide to the Diagnosis, Treatment, and Follow-Up of Inherited Metabolic Diseases</em> (2.ª ed.). Springer.`,
  `<strong>Ferreira, C. R., Rahman, S., Keller, M., Zschocke, J. y ICIMD Advisory Group. (2021).</strong> An international classification of inherited metabolic disorders (ICIMD). <em>Journal of Inherited Metabolic Disease, 44</em>(1), 164–177.`,
  `<strong>Valle, D., Antonarakis, S., Ballabio, A., Beaudet, A. L. y Mitchell, G. A. (Eds.).</strong> <em>The Online Metabolic and Molecular Bases of Inherited Disease (OMMBID)</em>. McGraw Hill.`,
  `<strong>Houten, S. M., Violante, S., Ventura, F. V. y Wanders, R. J. A. (2016).</strong> The biochemistry and physiology of mitochondrial fatty acid β-oxidation and its genetic disorders. <em>Annual Review of Physiology, 78</em>, 23–44.`,
  `<strong>Häberle, J., Burlina, A., Chakrapani, A., Dixon, M., Karall, D., Lindner, M., … Dionisi-Vici, C. (2019).</strong> Suggested guidelines for the diagnosis and management of urea cycle disorders: First revision. <em>Journal of Inherited Metabolic Disease, 42</em>(6), 1192–1230.`,
  `<strong>Platt, F. M., d'Azzo, A., Davidson, B. L., Neufeld, E. F. y Tifft, C. J. (2018).</strong> Lysosomal storage diseases. <em>Nature Reviews Disease Primers, 4</em>, 27.`,
  `<strong>Wanders, R. J. A., Waterham, H. R. y Ferdinandusse, S. (2023).</strong> Peroxisomal disorders: A review. <em>Journal of Inherited Metabolic Disease</em> (revisión).`,
  `<strong>Gorman, G. S., Chinnery, P. F., DiMauro, S., Hirano, M., Koga, Y., McFarland, R., … Turnbull, D. M. (2016).</strong> Mitochondrial diseases. <em>Nature Reviews Disease Primers, 2</em>, 16080.`,
  `<strong>van Spronsen, F. J., Blau, N., Harding, C., Burlina, A., Longo, N. y Muntau, A. C. (2021).</strong> Phenylketonuria. <em>Nature Reviews Disease Primers, 7</em>, 36.`,
  `<strong>Kishnani, P. S., Austin, S. L., Abdenur, J. E., Arn, P., Bali, D. S., Boney, A., … Watson, M. S. (2014).</strong> Diagnosis and management of glycogen storage disease type I: A practice guideline of the American College of Medical Genetics and Genomics. <em>Genetics in Medicine, 16</em>(11), e1.`,
  `<strong>Berry, G. T. (2020).</strong> Classic galactosemia and clinical variant galactosemia. En <em>GeneReviews</em>. University of Washington.`,
  `<strong>National Center for Biotechnology Information.</strong> <em>GeneReviews</em> [base de datos]. NCBI Bookshelf. https://www.ncbi.nlm.nih.gov/books/NBK1116/`,
  `<strong>Online Mendelian Inheritance in Man (OMIM).</strong> Johns Hopkins University. https://omim.org/`,
  `<strong>Orphanet.</strong> Portal de enfermedades raras y medicamentos huérfanos. https://www.orpha.net/`
];

const SUPPORT_SECTIONS = [
  {
    id: "titulo",
    num: "01",
    title: "Título y ficha técnica",
    body: () => `
      <p class="doc-title">Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo</p>
      <p>Este documento acompaña a la aplicación web del mismo nombre y reúne la justificación, los objetivos, el contenido científico, las funcionalidades, la evidencia de funcionamiento, el manual de uso, las limitaciones y las referencias del recurso. Se elaboró como proyecto académico de Bioquímica Aplicada y sigue la estructura solicitada en la guía de la asignatura.</p>
      <div class="doc-facts">
        <div><strong>${ORGANELLES.length}</strong><span>organelos representados</span></div>
        <div><strong>${PATHWAYS.length}</strong><span>rutas metabólicas</span></div>
        <div><strong>${DISEASES.length}</strong><span>enfermedades con ficha</span></div>
        <div><strong>${SUPPORT_SECTIONS.length}</strong><span>apartados</span></div>
      </div>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <tbody>
            <tr><th>Tipo de recurso</th><td>Aplicación web educativa estática, interactiva y de consulta</td></tr>
            <tr><th>Idioma</th><td>Español</td></tr>
            <tr><th>Público principal</th><td>Estudiantes de pregrado de Medicina, Bioquímica, Nutrición, Farmacia y Biología</td></tr>
            <tr><th>Público secundario</th><td>Docentes, profesionales de la salud y divulgadores científicos</td></tr>
            <tr><th>Alcance</th><td>${ORGANELLES.length} organelos, ${PATHWAYS.length} rutas y ${DISEASES.length} enfermedades</td></tr>
            <tr><th>Tecnologías</th><td>HTML5, CSS3 y JavaScript sin framework, sin proceso de compilación y sin backend</td></tr>
            <tr><th>Versión y fecha</th><td>${DOC_VERSION} · ${DOC_DATE}</td></tr>
            <tr><th>Carácter</th><td>Recurso educativo; no es un dispositivo médico ni sustituye la valoración clínica</td></tr>
          </tbody>
        </table>
      </div>
      <div class="doc-callout">
        <strong>Aviso de uso responsable.</strong> La información está simplificada con fines de aprendizaje. No debe utilizarse para autodiagnóstico, para tomar decisiones terapéuticas ni para sustituir guías clínicas, la valoración de profesionales sanitarios o la confirmación bioquímica y genética de cada caso.
      </div>`
  },
  {
    id: "justificacion",
    num: "02",
    title: "Justificación",
    body: () => `
      <p>Los errores innatos del metabolismo (EIM) son trastornos de base genética que alteran una ruta bioquímica, una enzima, un transportador o un cofactor. Se han descrito más de un millar de entidades y, aunque cada una es poco frecuente, en conjunto afectan aproximadamente a 1 de cada 1.000–5.000 nacidos vivos, según la serie y los trastornos incluidos. Muchas se manifiestan en el periodo neonatal o en la infancia con signos inespecíficos —letargo, vómitos, hipoglucemia, acidosis, ictericia, hipotonía o encefalopatía—, lo que dificulta la sospecha inicial.</p>
      <p>El diagnóstico integra la clínica, los biomarcadores bioquímicos (aminoácidos, acilcarnitinas, ácidos orgánicos, enzimas lisosomales, ácidos grasos de cadena muy larga, entre otros) y la confirmación enzimática o genética. La interpretación correcta exige relacionar compartimentos celulares, sustratos, productos y rutas. Sin ese mapa mental, el aprendizaje suele reducirse a listas aisladas de enfermedades y enzimas.</p>
      <p>La enseñanza tradicional de los EIM presenta tres dificultades frecuentes:</p>
      <ul>
        <li><strong>Fragmentación:</strong> cada enfermedad se estudia por separado, sin un hilo conductor entre organelo, ruta, enzima y fenotipo.</li>
        <li><strong>Abstracción:</strong> las rutas se presentan como esquemas estáticos que no permiten explorar el punto de bloqueo ni su consecuencia.</li>
        <li><strong>Dispersión de la información:</strong> el mecanismo, los biomarcadores y el tratamiento aparecen en fuentes y formatos distintos.</li>
      </ul>
      <p>Este atlas responde a esa necesidad con una organización <strong>por organelos</strong>: el estudiante parte de una estructura celular, identifica sus rutas, localiza la enzima alterada, reconoce los metabolitos que se acumulan o disminuyen y llega al tratamiento metabólico o dietético. El formato web permite consultar la información en cualquier orden, buscar por gen o biomarcador y actualizar el contenido sin reinstalar nada.</p>
      <p>La propuesta también responde a los criterios de la guía de la asignatura: utilidad real, funcionalidad comprobable, rigor científico, facilidad de uso y comunicación clara. El nivel de programación no es el criterio principal; por eso el esfuerzo se concentra en la exactitud del contenido, la trazabilidad de las fuentes y la experiencia de consulta.</p>`
  },
  {
    id: "publico",
    num: "03",
    title: "Público objetivo",
    body: () => `
      <div class="doc-two">
        <div>
          <h3>Público principal</h3>
          <ul>
            <li>Estudiantes de pregrado de Medicina, Bioquímica, Nutrición, Farmacia y Biología que cursan metabolismo o bioquímica aplicada.</li>
            <li>Estudiantes que preparan exámenes y necesitan repasar la relación entre organelo, ruta, enzima y enfermedad.</li>
            <li>Docentes que buscan un recurso visual para explicar los EIM en clase.</li>
          </ul>
        </div>
        <div>
          <h3>Público secundario</h3>
          <ul>
            <li>Profesionales de la salud que desean refrescar conceptos generales antes de consultar una guía clínica.</li>
            <li>Divulgadores científicos y estudiantes de posgrado que necesitan una visión panorámica.</li>
            <li>Personas interesadas en la biología de las enfermedades metabólicas, con acompañamiento profesional.</li>
          </ul>
        </div>
      </div>
      <h3>Qué se espera del usuario</h3>
      <p>No se requieren conocimientos de programación. Se recomienda manejar nociones básicas de enzimas, rutas metabólicas, herencia y compartimentos celulares. El sitio está en español y utiliza una interfaz visual; los términos técnicos se acompañan de una explicación breve en cada ficha.</p>
      <h3>Usos previstos</h3>
      <ul>
        <li><strong>Estudio autónomo:</strong> recorrer el atlas, abrir una ruta y contrastar dos enfermedades del mismo organelo.</li>
        <li><strong>Clase expositiva:</strong> proyectar la célula, el diagrama de una ruta y la ficha de una enfermedad.</li>
        <li><strong>Aprendizaje basado en casos:</strong> partir de un biomarcador y reconstruir la ruta y el posible bloqueo.</li>
        <li><strong>Repaso:</strong> usar el explorador y la búsqueda para localizar genes, enzimas o metabolitos concretos.</li>
      </ul>
      <div class="doc-callout">
        <strong>No es el público previsto:</strong> pacientes o familias que buscan un diagnóstico, una dosis o una decisión terapéutica. Para esas necesidades deben consultarse equipos de metabolismo, genetistas clínicos y guías actualizadas.
      </div>`
  },
  {
    id: "objetivo",
    num: "04",
    title: "Objetivo de la herramienta",
    body: () => `
      <p class="doc-lead">Facilitar la comprensión integrada de los errores innatos del metabolismo mediante un atlas interactivo organizado por organelos, que conecte cada ruta metabólica con las enzimas mutadas, los biomarcadores de diagnóstico en sangre u orina y el tratamiento metabólico o dietético.</p>
      <h3>Objetivos específicos</h3>
      <ol class="doc-numbered">
        <li>Representar de forma visual los organelos implicados en los EIM y las rutas metabólicas que albergan.</li>
        <li>Identificar, para cada ruta, las enzimas, los metabolitos y los puntos de bloqueo relevantes.</li>
        <li>Relacionar cada enfermedad con sus biomarcadores en sangre u orina, sus muestras y sus pruebas confirmatorias.</li>
        <li>Resumir las estrategias terapéuticas, el manejo dietético, los cofactores y el seguimiento, sin sustituir las guías clínicas.</li>
        <li>Ofrecer una experiencia de consulta clara, accesible y adaptable a diferentes tamaños de pantalla.</li>
        <li>Documentar las fuentes y las limitaciones para que el recurso sea trazable y responsable.</li>
      </ol>
      <h3>Criterios de logro</h3>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Criterio</th><th>Indicador observable</th></tr></thead>
          <tbody>
            <tr><td>Organización por organelos</td><td>Los ${ORGANELLES.length} organelos se seleccionan en la célula o en las píldoras y muestran sus rutas y enfermedades.</td></tr>
            <tr><td>Integración de contenido</td><td>Cada ficha reúne mecanismo, diagnóstico, tratamiento, fuentes y necesidades de validación.</td></tr>
            <tr><td>Interactividad</td><td>El diagrama permite seleccionar nodos, ampliar, desplazar y abrir fichas relacionadas.</td></tr>
            <tr><td>Rigor</td><td>Cada enfermedad incluye al menos tres referencias verificables (GeneReviews, OMIM, Orphanet).</td></tr>
            <tr><td>Usabilidad</td><td>La navegación principal, la búsqueda y los filtros funcionan sin instrucciones externas.</td></tr>
          </tbody>
        </table>
      </div>`
  },
  {
    id: "descripcion",
    num: "05",
    title: "Descripción de la herramienta",
    body: () => `
      <p>El recurso es una aplicación web de una sola página con enrutamiento por <em>hash</em>. No requiere instalación, servidor de aplicaciones ni base de datos: los datos de organelos, rutas y enfermedades se cargan desde archivos JavaScript y la interfaz se construye en el navegador. Está pensada para abrirse localmente o publicarse en un alojamiento estático.</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Vista</th><th>Ruta</th><th>Propósito</th></tr></thead>
          <tbody>
            <tr><td>Atlas celular</td><td><code>#/atlas</code></td><td>Explorar la célula, seleccionar un organelo y consultar su panel contextual.</td></tr>
            <tr><td>Mapa metabólico</td><td><code>#/pathways</code></td><td>Ver todas las rutas agrupadas por organelo.</td></tr>
            <tr><td>Diagrama de ruta</td><td><code>#/pathway/&lt;id&gt;</code></td><td>Recorrer la secuencia, seleccionar enzimas y metabolitos, y abrir fichas.</td></tr>
            <tr><td>Ruta enfocada</td><td><code>#/pathway/&lt;id&gt;/&lt;enfermedad&gt;</code></td><td>Resaltar el nodo de bloqueo de una enfermedad concreta.</td></tr>
            <tr><td>Explorador</td><td><code>#/explorer</code></td><td>Filtrar enfermedades por organelo, categoría y texto libre.</td></tr>
            <tr><td>Ficha de enfermedad</td><td><code>#/disease/&lt;id&gt;</code></td><td>Consultar mecanismo, diagnóstico, tratamiento, fuentes y validación.</td></tr>
            <tr><td>Sustento científico</td><td><code>#/sustento</code></td><td>Documento académico con justificación, contenido, evidencia y referencias.</td></tr>
            <tr><td>Manual de uso</td><td><code>#/manual</code></td><td>Guía paso a paso para usar el recurso sin explicaciones externas.</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Modelo de datos</h3>
      <ul>
        <li><strong>Organelos:</strong> nombre, color, nivel (diana o contexto), funciones, procesos, rutas y enfermedades asociadas.</li>
        <li><strong>Rutas:</strong> resumen, función normal, puntos de alteración, metabolitos acumulados y cadenas de pasos con tipo de nodo (metabolito, enzima, bloqueo, biomarcador o destino).</li>
        <li><strong>Enfermedades:</strong> sinónimos, herencia, gen, proteína, número EC, mecanismo, diagnóstico, tratamiento, fuentes y notas de validación.</li>
      </ul>
      <h3>Diseño</h3>
      <p>La interfaz adopta un lenguaje de atlas científico: fondo azul profundo, paneles con bordes finos, tipografía de exhibición (Space Grotesk), texto de lectura (Inter) y datos técnicos en monoespaciada (JetBrains Mono). Cada organelo tiene un color propio que se mantiene en la célula, las píldoras, las tarjetas y las etiquetas. Los acentos turquesa, violeta, ámbar y coral distinguen tipos de información. La retícula es responsive y se reorganiza en una columna en pantallas estrechas.</p>
      <h3>Alcance y exclusiones</h3>
      <p>El prototipo incluye ${DISEASES.length} enfermedades representativas de mitocondria, lisosoma, peroxisoma, citosol, aparato de Golgi, membrana plasmática y otros compartimentos, con rutas ampliadas para cubrir el ciclo de la urea, los aminoácidos, el glucógeno, las acidemias orgánicas, el transporte de aminoácidos y el transporte del cobre. No es un catálogo exhaustivo ni una herramienta de historia clínica: no gestiona datos de pacientes, no calcula dosis y no emite diagnósticos.</p>`
  },
  {
    id: "contenido",
    num: "06",
    title: "Contenido científico",
    body: () => `
      <h3>Marco conceptual</h3>
      <p>Los EIM se clasifican habitualmente por el tipo de molécula o ruta afectada (aminoácidos, ácidos orgánicos, ácidos grasos, carbohidratos, lisosomas, peroxisomas, mitocondrias, porfirinas, metales, etc.). Este atlas utiliza una clasificación <strong>didáctica por organelo</strong>, no una taxonomía nosológica formal. Una misma enfermedad puede afectar varios compartimentos y una misma ruta puede distribuirse entre ellos; el ciclo de la urea, por ejemplo, comienza en la mitocondria y continúa en el citosol.</p>
      <p>La secuencia de lectura propuesta es: <strong>organelo → ruta → enzima o transportador → sustrato/producto → biomarcador → tratamiento</strong>. Esa cadena explica por qué un bloqueo enzimático produce una acumulación tóxica, un déficit energético o ambas cosas, y por qué el tratamiento puede consistir en restringir un sustrato, aportar un producto, estimular una vía alternativa o reemplazar la enzima.</p>
      <h3>Organelos y rutas representadas</h3>
      ${docOrganelleTable()}
      <h3>Enfermedades incluidas</h3>
      <p>La selección prioriza entidades con relevancia clínica y educativa, cobertura de los tres organelos diana, disponibilidad de referencias actualizadas y variedad de estrategias terapéuticas (dieta, cofactores, enzimas recombinantes, trasplante, quelantes o soporte).</p>
      ${docDiseaseTable()}
      <div class="doc-callout">
        <strong>Lectura de la tabla.</strong> Los biomarcadores son orientativos y no constituyen valores de corte. Los intervalos de referencia, las unidades y los algoritmos diagnósticos varían entre laboratorios y deben validarse localmente. El tratamiento se presenta por categorías; las dosis y los protocolos corresponden a las guías clínicas y al equipo tratante.
      </div>
      <h3>Nivel de detalle de cada ficha</h3>
      <ul>
        <li><strong>Mecanismo:</strong> función normal de la enzima, tipo de alteración, sustratos que se acumulan, productos que disminuyen y consecuencias metabólicas.</li>
        <li><strong>Diagnóstico:</strong> biomarcadores, muestras, cribado, pruebas confirmatorias y pruebas enzimáticas o genéticas.</li>
        <li><strong>Tratamiento:</strong> estrategias, manejo dietético, cofactores o suplementos y seguimiento clínico.</li>
        <li><strong>Fuentes y validación:</strong> al menos tres referencias y una lista de datos que requieren confirmación local.</li>
      </ul>`
  },
  {
    id: "sustento",
    num: "07",
    title: "Sustento científico y bibliográfico",
    body: () => `
      <p>El contenido se elaboró a partir de fuentes secundarias de alta calidad y de revisiones especializadas. La jerarquía utilizada fue: guías de práctica y libros de referencia de metabolismo; revisiones sistemáticas o narrativas en revistas arbitradas; capítulos de <em>GeneReviews</em>; registros OMIM y Orphanet; y, cuando fue necesario, literatura primaria citada por esas fuentes.</p>
      <h3>Proceso de curación</h3>
      <ol class="doc-numbered">
        <li><strong>Selección de entidades:</strong> enfermedades representativas de cada organelo, con información suficiente y estable.</li>
        <li><strong>Extracción de datos:</strong> gen, proteína, número EC, mecanismo, biomarcadores, muestras, pruebas y tratamiento.</li>
        <li><strong>Contraste:</strong> verificación cruzada entre al menos tres fuentes (GeneReviews, OMIM y Orphanet) y revisión de coherencia interna con la ruta.</li>
        <li><strong>Simplificación controlada:</strong> redacción para el público objetivo, sin dosis ni valores de corte, conservando la lógica bioquímica.</li>
        <li><strong>Marcado de incertidumbre:</strong> cada ficha incluye una tarjeta de «Requiere validación» con los aspectos que dependen del contexto clínico o del laboratorio.</li>
      </ol>
      <h3>Referencias generales</h3>
      <ol class="doc-refs">${GENERAL_REFERENCES.map((r) => `<li>${r}</li>`).join("")}</ol>
      <h3>Referencias específicas por enfermedad</h3>
      <p>Cada ficha enlaza con sus propias fuentes. Las ${DISEASES.reduce((n, d) => n + d.sources.length, 0)} referencias específicas (tres por enfermedad) se reúnen, agrupadas por enfermedad, en el <strong>apartado 12</strong>.</p>
      <button class="btn doc-jump" type="button" data-doc-scroll="referencias">${icon("arrow-right")} Ver referencias por enfermedad</button>
      <h3>Sobre las figuras</h3>
      <p>La célula y los diagramas de ruta son ilustraciones esquemáticas originales, dibujadas con SVG. No están a escala, no representan la estequiometría de las reacciones y no sustituyen los mapas metabólicos completos. Las flechas indican la dirección didáctica del flujo, no una cinética enzimática.</p>
      <p class="mini-note">Fecha de curación y consulta de fuentes: octubre de 2026. GeneReviews se actualiza de forma continua; OMIM y Orphanet también modifican sus registros. Antes de reutilizar el contenido con fines docentes, conviene comprobar la versión vigente de cada fuente.</p>`
  },
  {
    id: "funcionalidades",
    num: "08",
    title: "Funcionalidades principales",
    body: () => `
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Función</th><th>Cómo se accede</th><th>Qué resuelve</th></tr></thead>
          <tbody>
            <tr><td>Atlas celular interactivo</td><td>Vista principal</td><td>Relaciona cada estructura celular con sus rutas y enfermedades.</td></tr>
            <tr><td>Panel contextual</td><td>Clic en un organelo o en una píldora</td><td>Muestra funciones, rutas, enfermedades y acceso al explorador.</td></tr>
            <tr><td>Listado de rutas</td><td>Menú «Mapa metabólico»</td><td>Agrupa las ${PATHWAYS.length} rutas por organelo y ofrece una entrada directa al diagrama.</td></tr>
            <tr><td>Diagrama interactivo</td><td>Clic en una ruta</td><td>Representa la secuencia de metabolitos, enzimas y puntos de bloqueo.</td></tr>
            <tr><td>Inspector de nodos</td><td>Clic en un nodo del diagrama</td><td>Explica el paso, la enzima, la consecuencia y la enfermedad asociada.</td></tr>
            <tr><td>Zoom y desplazamiento</td><td>Botones +, −, reinicio o arrastre</td><td>Facilita la lectura en pantallas pequeñas y en rutas extensas.</td></tr>
            <tr><td>Explorador de enfermedades</td><td>Menú «Explorador»</td><td>Filtra por organelo, categoría y texto libre; muestra el número de resultados.</td></tr>
            <tr><td>Ficha de enfermedad</td><td>Clic en una tarjeta o en un nodo</td><td>Reúne mecanismo, diagnóstico, tratamiento, fuentes y validación.</td></tr>
            <tr><td>Búsqueda global</td><td>Ctrl/Cmd + K, la tecla «/» o el buscador</td><td>Encuentra enfermedades, genes, enzimas, rutas y organelos.</td></tr>
            <tr><td>Quiz por rutas</td><td>Menú «Quiz», pie de página o botón «Quiz por rutas»</td><td>Ofrece ${QUIZ_PER_ROUTE} preguntas por cada una de las ${QUIZ_ROUTE_META.length} rutas (${QUIZ_TOTAL} en total), con retroalimentación inmediata, puntuación y revisión de respuestas.</td></tr>
            <tr><td>Documentación integrada</td><td>Pie de página</td><td>Ofrece este sustento y el manual de uso, con opción de imprimir o descargar.</td></tr>
          </tbody>
        </table>
      </div>
      <p>El quiz se organiza en una vista de selección de ruta y en una vista independiente por ruta (<code>#/quiz/:id</code>). Cada ruta conserva sus ${QUIZ_PER_ROUTE} preguntas, la retroalimentación inmediata, la puntuación sobre ${QUIZ_PER_ROUTE} y la revisión final. La glucólisis, que no tiene una enfermedad primaria en el atlas, utiliza enfermedades relacionadas con el flujo glucolítico, el glucógeno o la oxidación del piruvato; la interfaz lo advierte antes de comenzar.</p>
      <h3>Rutas directas</h3>
      <p>Las vistas pueden enlazarse o marcarse como favoritas mediante las siguientes rutas:</p>
      <div class="doc-routes">
        <code>#/atlas</code><code>#/pathways</code><code>#/pathway/urea-cycle</code><code>#/pathway/fa-beta-oxidation/mcad</code><code>#/explorer</code><code>#/disease/gaucher</code><code>#/quiz</code><code>#/quiz/urea-cycle</code><code>#/sustento</code><code>#/manual</code>
      </div>
      <h3>Características de experiencia de uso</h3>
      <ul>
        <li>Navegación persistente y migas de pan para volver al organelo o a la ruta.</li>
        <li>Colores consistentes por organelo y etiquetas de categoría en todas las vistas.</li>
        <li>Estados vacíos y mensajes de error que explican cómo continuar.</li>
        <li>Diseño responsive con reorganización de paneles y controles en pantallas estrechas.</li>
        <li>Uso de iconos SVG y texto alternativo en los controles principales.</li>
        <li>Sin registro, sin cookies de seguimiento y sin recogida de datos personales.</li>
      </ul>`
  },
  {
    id: "evidencia",
    num: "09",
    title: "Evidencia del funcionamiento",
    body: () => `
      <p>Se realizó una validación funcional en un navegador Chromium sobre un servidor estático local. Las pruebas cubrieron la navegación, la selección de organelos, los diagramas, los filtros, la búsqueda, las fichas y el quiz por rutas. También se comprobó que las ${QUIZ_ROUTE_META.length} rutas generan exactamente ${QUIZ_PER_ROUTE} preguntas y que cada ruta incluye sus enfermedades. La tabla resume los casos comprobados.</p>
      <div class="doc-table-wrap">
        <table class="doc-table doc-test">
          <thead><tr><th>N.º</th><th>Funcionalidad</th><th>Resultado esperado</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>01</td><td>Selección de organelo en la célula</td><td>El panel muestra nombre, funciones, rutas y enfermedades.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>02</td><td>Píldoras de organelos</td><td>Cambian la selección y actualizan el panel; un segundo clic no deselecciona.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>03</td><td>Listado de rutas</td><td>Se agrupan por organelo y enlazan al diagrama correcto.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>04</td><td>Diagrama de ruta</td><td>Renderiza cadenas, nodos, flechas y etiquetas sin desbordamientos.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>05</td><td>Inspector de nodos</td><td>Al pulsar un nodo se muestra su detalle y el enlace a la enfermedad.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>06</td><td>Zoom, reinicio y arrastre</td><td>La escala y el desplazamiento se actualizan y pueden restaurarse.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>07</td><td>Explorador y filtros</td><td>Los filtros de organelo, categoría y texto se combinan y actualizan el contador.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>08</td><td>Ficha de enfermedad</td><td>Los acordeones abren y cierran; las fuentes y la validación son visibles.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>09</td><td>Búsqueda global</td><td>Encuentra por enfermedad, gen, enzima, ruta o metabolito; Enter abre el primer resultado.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>10</td><td>Navegación y rutas</td><td>El enrutamiento por hash conserva la vista y el estado de selección esperado.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>11</td><td>Diseño adaptable</td><td>La retícula se reorganiza a una columna y los controles siguen accesibles.</td><td><span class="doc-pass">Verificado en 800 y 500 px</span></td></tr>
            <tr><td>12</td><td>Impresión de la documentación</td><td>El botón de impresión oculta la navegación y conserva el contenido.</td><td><span class="doc-pass">Verificado</span></td></tr>
            <tr><td>13</td><td>Selección de ruta del quiz</td><td>Muestra las ${QUIZ_ROUTE_META.length} rutas, sus enfermedades y el acceso a ${QUIZ_PER_ROUTE} preguntas por ruta.</td><td><span class="doc-pass">Verificado</span></td></tr>\n            <tr><td>14</td><td>Quiz por ruta y resultado</td><td>Permite responder ${QUIZ_PER_ROUTE} preguntas, muestra retroalimentación inmediata, calcula el resultado y conserva la revisión de respuestas.</td><td><span class="doc-pass">Verificado</span></td></tr>
          </tbody>
        </table>
      </div>
      <h3>Capturas de las funciones principales</h3>
      <div class="doc-shots">
        <figure>
          <img src="assets/captura-atlas.png" alt="Vista principal del atlas con la célula interactiva y el panel contextual" />
          <figcaption>Atlas celular: estructura interactiva, píldoras de organelos y panel contextual.</figcaption>
        </figure>
        <figure>
          <img src="assets/captura-explorador.png" alt="Explorador de enfermedades con filtros por organelo y categoría" />
          <figcaption>Explorador: filtros combinables, contador de resultados y tarjetas de enfermedad.</figcaption>
        </figure>
        <figure>
          <img src="assets/captura-busqueda.png" alt="Buscador global con resultados agrupados por tipo" />
          <figcaption>Búsqueda global: resultados agrupados por enfermedad, ruta y organelo.</figcaption>
        </figure>
        <figure>
          <img src="assets/captura-quiz.png" alt="Selección de ruta del quiz con las 20 rutas y 20 preguntas por ruta" />
          <figcaption>Quiz por rutas: selección de la ruta, número de enfermedades y 20 preguntas por ruta.</figcaption>
        </figure>
      </div>
      <h3>Observaciones de la validación</h3>
      <ul>
        <li>Las pruebas se ejecutaron con datos locales y sin conexión a servicios externos.</li>
        <li>La comprobación en 1440, 1024, 800 y 500 px confirma la reorganización; queda pendiente una auditoría con lector de pantalla y una prueba en dispositivos móviles reales.</li>
        <li>No se encontraron errores de JavaScript en la consola durante los recorridos principales, incluida la validación de las ${QUIZ_ROUTE_META.length} rutas y el recorrido completo de un quiz de ${QUIZ_PER_ROUTE} preguntas.</li>
        <li>Las capturas corresponden al entorno de prueba y pueden variar ligeramente respecto de la versión final.</li>
      </ul>`
  },
  {
    id: "manual",
    num: "10",
    title: "Manual de uso (resumen)",
    body: () => `
      <p>El manual completo, con capturas y actividades sugeridas, está disponible en la vista <a href="#/manual">Manual de uso</a>. Estos son los pasos esenciales.</p>
      <ol class="doc-numbered">
        <li><strong>Abre el sitio</strong> en un navegador actualizado. Si lo ejecutas localmente, puedes abrir <code>index.html</code> o servirlo con un servidor estático.</li>
        <li><strong>Explora la célula:</strong> pasa el cursor para identificar estructuras y haz clic en la mitocondria, el lisosoma, el peroxisoma o el citosol.</li>
        <li><strong>Lee el panel contextual:</strong> encontrarás funciones, rutas y enfermedades. Usa «Explorar este organelo» para filtrar el explorador.</li>
        <li><strong>Abre una ruta:</strong> desde el panel o desde «Mapa metabólico». El diagrama muestra metabolitos, enzimas, bloqueos y biomarcadores.</li>
        <li><strong>Selecciona un nodo:</strong> el inspector explica el paso y enlaza con la ficha de la enfermedad cuando corresponde.</li>
        <li><strong>Consulta la ficha:</strong> despliega mecanismo, diagnóstico, tratamiento y fuentes. Usa «Ver en el mapa metabólico» para volver al punto de bloqueo.</li>
        <li><strong>Filtra o busca:</strong> el explorador permite combinar organelo, categoría y texto; la búsqueda global acepta genes, enzimas, rutas y metabolitos.</li>
        <li><strong>Cierra con el quiz de la ruta:</strong> elige una de las ${QUIZ_ROUTE_META.length} rutas y responde sus ${QUIZ_PER_ROUTE} preguntas con retroalimentación inmediata.</li>
        <li><strong>Profundiza:</strong> abre este sustento científico o el manual desde el pie de página. Puedes imprimir o guardar en PDF.</li>
      </ol>
      <h3>Atajos</h3>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Acción</th><th>Atajo</th></tr></thead>
          <tbody>
            <tr><td>Abrir la búsqueda global</td><td><kbd>Ctrl</kbd> + <kbd>K</kbd> o <kbd>⌘</kbd> + <kbd>K</kbd></td></tr>
            <tr><td>Abrir la búsqueda (fuera de un campo)</td><td><kbd>/</kbd></td></tr>
            <tr><td>Cerrar la búsqueda</td><td><kbd>Esc</kbd></td></tr>
            <tr><td>Abrir el primer resultado</td><td><kbd>Enter</kbd></td></tr>
          </tbody>
        </table>
      </div>
      <div class="doc-callout">
        <strong>Recomendación docente.</strong> Pide al estudiante que elija un biomarcador, localice la ruta, identifique la enzima y explique por qué se acumula el sustrato. Después, que contraste dos enfermedades del mismo organelo y justifique por qué reciben tratamientos distintos.
      </div>`
  },
  {
    id: "limitaciones",
    num: "11",
    title: "Limitaciones y trabajo futuro",
    body: () => `
      <h3>Limitaciones del recurso</h3>
      <ul>
        <li><strong>No es una herramienta clínica:</strong> no emite diagnósticos, no calcula dosis, no interpreta resultados de laboratorio y no sustituye guías ni equipos de metabolismo.</li>
        <li><strong>Cobertura parcial:</strong> incluye ${DISEASES.length} enfermedades representativas de más de un millar de EIM. Algunas entidades se agrupan (por ejemplo, el espectro de Zellweger o la enfermedad de Niemann-Pick A/B) y otras quedan fuera.</li>
        <li><strong>Contenido simplificado:</strong> los mecanismos se presentan con un nivel didáctico; no se detallan isoformas, modificadores genéticos, fenotipos intermedios ni todas las complicaciones.</li>
        <li><strong>Sin valores de corte:</strong> los biomarcadores se enumeran, pero no se incluyen intervalos de referencia ni unidades, porque dependen del laboratorio y de la edad.</li>
        <li><strong>Organelos de contexto:</strong> el núcleo y el retículo endoplasmático se muestran para orientar la célula, pero no tienen rutas ni enfermedades propias en esta versión. El aparato de Golgi y la membrana plasmática sí agrupan rutas de transporte.</li>
        <li><strong>Datos estáticos:</strong> la información se actualiza manualmente; no existe una base de datos ni una API que sincronice cambios.</li>
        <li><strong>Idioma:</strong> el contenido está en español y no se ha validado en otros idiomas.</li>
        <li><strong>Accesibilidad:</strong> se cuidaron el contraste, el foco y las etiquetas, pero falta una auditoría formal con lectores de pantalla y pruebas con usuarios.</li>
        <li><strong>Dependencia de la conexión:</strong> la versión publicada requiere internet; las tipografías y los recursos visuales se sirven localmente, sin depender de Google Fonts.</li>
        <li><strong>Validación experta pendiente:</strong> antes de un uso docente formal, el contenido debe ser revisado por un bioquímico clínico o genetista metabólico.</li>
      </ul>
      <h3>Trabajo futuro</h3>
      <ol class="doc-numbered">
        <li>Incorporar más enfermedades y completar el núcleo y el retículo endoplasmático con rutas propias.</li>
        <li>Añadir valores de referencia configurables por laboratorio y unidades.</li>
        <li>Añadir casos clínicos integrados y preguntas de razonamiento que complementen el banco actual de 400 preguntas.</li>
        <li>Realizar una auditoría de accesibilidad y pruebas con usuarios del público objetivo.</li>
        <li>Versionar el contenido y registrar la fecha de la última revisión de cada ficha.</li>
        <li>Mantener publicado el sitio y actualizar el contenido con control de versiones.</li>
      </ol>
      <div class="doc-callout">
        <strong>Uso responsable.</strong> Si el recurso se utiliza en un contexto clínico o educativo formal, debe acompañarse de la guía docente, declarar sus limitaciones y remitir a las fuentes primarias. La información no reemplaza el juicio profesional.
      </div>`
  },
  {
    id: "referencias",
    num: "12",
    title: "Referencias bibliográficas",
    body: () => `
      <h3>Bibliografía general</h3>
      <ol class="doc-refs">${GENERAL_REFERENCES.map((r) => `<li>${r}</li>`).join("")}</ol>
      <h3>Referencias por enfermedad</h3>
      ${docDiseaseReferences()}
      <h3>Cómo citar este recurso</h3>
      <p class="doc-citation">Proyecto académico de Bioquímica Aplicada. (2026). <em>Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo</em> [Recurso educativo web].</p>
      <p class="mini-note">Las referencias se consultaron en octubre de 2026. Las bases de datos GeneReviews, OMIM y Orphanet se actualizan periódicamente; verifica la versión vigente antes de reutilizar el contenido.</p>`
  }
];

/* ---------------- Manual de uso ---------------- */
const MANUAL_SECTIONS = [
  {
    id: "requisitos",
    num: "01",
    title: "Antes de empezar",
    body: () => `
      <p>El atlas funciona en navegadores modernos de escritorio o móvil (Chrome, Edge, Firefox o Safari recientes). No necesita instalación, registro ni conexión a una base de datos. La forma más sencilla de abrirlo es hacer doble clic en <code>index.html</code>; si prefieres un servidor local, puedes usar cualquier servidor estático.</p>
      <div class="doc-quick">
        <span class="section-label">Guía rápida · 60 segundos</span>
        <ol>
          <li><strong>Elige un organelo</strong> en la célula o en las píldoras.</li>
          <li><strong>Abre una ruta</strong> y pulsa el nodo de bloqueo.</li>
          <li><strong>Lee el inspector</strong> y abre la ficha de la enfermedad.</li>
          <li><strong>Revisa biomarcadores y tratamiento</strong>; vuelve al atlas para comparar.</li>
        </ol>
      </div>
      <div class="doc-two">
        <div>
          <h3>Lo que necesitas</h3>
          <ul>
            <li>Un navegador actualizado.</li>
            <li>Conexión a internet para abrir la versión publicada; las tipografías se sirven localmente.</li>
            <li>Nociones básicas de bioquímica para aprovechar al máximo las fichas.</li>
          </ul>
        </div>
        <div>
          <h3>Lo que no necesitas</h3>
          <ul>
            <li>Instalar programas adicionales.</li>
            <li>Crear una cuenta.</li>
            <li>Introducir datos personales o clínicos.</li>
          </ul>
        </div>
      </div>
      <div class="doc-callout"><strong>Consejo.</strong> Si vas a proyectar el atlas en clase, usa una ventana amplia (a partir de 1.100 px) para ver la célula y el panel contextual en paralelo. En pantallas estrechas, los paneles se apilan y el diagrama se puede ampliar y arrastrar.</div>`
  },
  {
    id: "navegacion",
    num: "02",
    title: "Navegación general",
    body: () => `
      <p>La cabecera se mantiene visible y contiene la marca, cuatro accesos principales y el buscador:</p>
      <ul>
        <li><strong>Atlas celular:</strong> vista principal con la célula interactiva.</li>
        <li><strong>Mapa metabólico:</strong> listado de las ${PATHWAYS.length} rutas agrupadas por organelo.</li>
        <li><strong>Explorador:</strong> catálogo filtrable de las ${DISEASES.length} enfermedades.</li>
        <li><strong>Quiz:</strong> ${QUIZ_ROUTE_META.length} rutas con ${QUIZ_PER_ROUTE} preguntas por ruta (${QUIZ_TOTAL} en total) y retroalimentación inmediata.</li>
        <li><strong>Buscar:</strong> abre la búsqueda global; también puedes pulsar <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> o <kbd>/</kbd>.</li>
      </ul>
      <p>Las migas de pan aparecen en las vistas internas. Por ejemplo, en una ficha puedes volver al atlas, a la ruta o al organelo. El pie de página enlaza este manual, el sustento científico y el aviso educativo.</p>
      <h3>Qué hace cada tipo de etiqueta</h3>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Etiqueta</th><th>Significado</th></tr></thead>
          <tbody>
            <tr><td><span class="tag tone-coral">Error de la β-oxidación</span></td><td>Categoría bioquímica de la enfermedad.</td></tr>
            <tr><td><span class="tag tone-violet">Autosómica recesiva</span></td><td>Tipo de herencia descrito en la ficha.</td></tr>
            <tr><td><span class="tag tone-teal">Organelo diana</span></td><td>Organelo con rutas y enfermedades representadas.</td></tr>
            <tr><td><span class="tag tone-faint">Contexto celular</span></td><td>Estructura incluida para orientar la célula, sin rutas propias en esta versión.</td></tr>
            <tr><td><span class="tag tone-blue">Contexto</span></td><td>Ruta incluida como referencia, sin una enfermedad asociada en el prototipo.</td></tr>
          </tbody>
        </table>
      </div>`
  },
  {
    id: "atlas",
    num: "03",
    title: "Atlas celular",
    body: () => `
      <ol class="doc-numbered">
        <li>Entra en <strong>Atlas celular</strong> desde la cabecera o la marca.</li>
        <li>Pasa el cursor sobre la célula: aparecerá un globo con el nombre de la estructura.</li>
        <li>Haz clic en la mitocondria, el lisosoma, el peroxisoma, el citosol, el aparato de Golgi o el anillo de la membrana plasmática. También puedes usar las píldoras inferiores; muestran el número de rutas de cada organelo.</li>
        <li>Lee el <strong>panel contextual</strong>: verás la descripción, las funciones, las rutas y las enfermedades relacionadas.</li>
        <li>Pulsa una ruta para abrir su diagrama o una enfermedad para ir a la ficha. El botón <strong>Explorar este organelo</strong> abre el explorador con el filtro aplicado.</li>
        <li>Para quitar la selección, vuelve a pulsar el organelo seleccionado en la célula. Las píldoras mantienen la selección al pulsarlas de nuevo.</li>
      </ol>
      <div class="doc-callout"><strong>Interpretación.</strong> El núcleo y el retículo endoplasmático se incluyen como contexto celular y no tienen rutas propias en esta versión. El aparato de Golgi alberga el transporte del cobre y la membrana plasmática agrupa el transporte de aminoácidos; el panel lo indica en cada caso.</div>`
  },
  {
    id: "mapa",
    num: "04",
    title: "Mapa metabólico y diagramas",
    body: () => `
      <p>El mapa metabólico agrupa las rutas por organelo. Cada tarjeta indica el nombre de la ruta, un resumen, los compartimentos implicados y el número de enfermedades. Al abrirla se muestra un diagrama con la secuencia de pasos.</p>
      <h3>Tipos de nodo</h3>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Color / forma</th><th>Tipo</th><th>Qué representa</th></tr></thead>
          <tbody>
            <tr><td>Tarjeta neutra</td><td>Metabolito</td><td>Sustrato, intermediario o producto de la ruta.</td></tr>
            <tr><td>Borde turquesa</td><td>Enzima</td><td>Proteína que cataliza el paso; incluye el gen cuando se conoce.</td></tr>
            <tr><td>Borde coral</td><td>Punto de bloqueo</td><td>Enzima cuya deficiencia causa una enfermedad representada.</td></tr>
            <tr><td>Borde ámbar</td><td>Biomarcador</td><td>Metabolito que se mide en sangre, orina u otra muestra.</td></tr>
            <tr><td>Borde verde</td><td>Destino</td><td>Producto final o conexión con otra ruta.</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Acciones del diagrama</h3>
      <ul>
        <li><strong>Seleccionar un nodo:</strong> muestra el inspector con la explicación, la enzima, la consecuencia y el enlace a la ficha.</li>
        <li><strong>Ampliar o reducir:</strong> usa los botones <strong>+</strong> y <strong>−</strong>; el botón de reinicio recupera la vista inicial.</li>
        <li><strong>Desplazarse:</strong> arrastra el diagrama con el ratón o el dedo. En pantallas táctiles, el desplazamiento está integrado en el lienzo.</li>
        <li><strong>Enfocar una enfermedad:</strong> si abres una ruta desde una ficha con «Ver en el mapa metabólico», el nodo de bloqueo se resalta y el inspector se abre automáticamente.</li>
        <li><strong>Volver:</strong> usa la miga de pan «Volver al organelo» o el menú principal.</li>
      </ul>
      <div class="doc-callout"><strong>Lectura sugerida.</strong> Empieza por el sustrato, sigue la flecha hasta la enzima y observa qué metabolito aparece después. Si el nodo está marcado como bloqueo, pregúntate qué se acumula antes y qué deja de producirse después.</div>`
  },
  {
    id: "explorador",
    num: "05",
    title: "Explorador de enfermedades",
    body: () => `
      <ol class="doc-numbered">
        <li>Abre <strong>Explorador</strong> en la cabecera.</li>
        <li>Escribe en el campo de búsqueda un nombre, un gen, una enzima o un biomarcador.</li>
        <li>Combina los filtros de <strong>organelo</strong> y <strong>categoría</strong> si necesitas acotar.</li>
        <li>El contador superior indica cuántos resultados cumplen todos los criterios.</li>
        <li>Pulsa una tarjeta para abrir la ficha completa. El botón <strong>Limpiar filtros</strong> restablece la vista.</li>
      </ol>
      <p>Los filtros se combinan con una lógica conjuntiva: un resultado debe cumplir el texto, el organelo y la categoría seleccionados. Si no hay coincidencias, el sitio muestra un estado vacío con una sugerencia para ampliar la búsqueda.</p>
      <h3>Ejemplos de consulta</h3>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Objetivo</th><th>Qué escribir o seleccionar</th></tr></thead>
          <tbody>
            <tr><td>Encontrar enfermedades del lisosoma</td><td>Organelo: Lisosoma.</td></tr>
            <tr><td>Buscar un gen concreto</td><td>Texto: <code>GBA1</code>, <code>ACADM</code> o <code>PAH</code>.</td></tr>
            <tr><td>Explorar un biomarcador</td><td>Texto: <code>amonio</code>, <code>lactato</code> o <code>VLCFA</code>.</td></tr>
            <tr><td>Ver solo glucogenosis</td><td>Categoría: Glucogenosis.</td></tr>
          </tbody>
        </table>
      </div>`
  },
  {
    id: "ficha",
    num: "06",
    title: "Ficha de enfermedad",
    body: () => `
      <p>La ficha reúne la información clave en cuatro acordeones y una columna lateral de identificación. Al abrir la página, el mecanismo aparece desplegado; los demás bloques se abren con un clic.</p>
      <ul>
        <li><strong>Mecanismo bioquímico:</strong> función normal, alteración, sustratos que se acumulan, productos que disminuyen y consecuencias.</li>
        <li><strong>Diagnóstico:</strong> biomarcadores, muestras, cribado, pruebas confirmatorias y pruebas enzimáticas o genéticas.</li>
        <li><strong>Tratamiento:</strong> estrategias, manejo dietético, cofactores y seguimiento.</li>
        <li><strong>Fuentes:</strong> referencias verificables con su identificador (GeneReviews, OMIM, Orphanet).</li>
      </ul>
      <p>La columna lateral muestra el gen, la proteína, el número EC, el compartimento, la ruta y la herencia. Desde allí puedes abrir el diagrama con el nodo de bloqueo resaltado o volver al organelo. La tarjeta <strong>Requiere validación</strong> señala los datos que dependen del contexto y deben confirmarse con fuentes o con el equipo clínico.</p>
      <div class="doc-callout"><strong>Recuerda.</strong> Los biomarcadores se presentan como orientaciones, no como valores de corte. La confirmación y la interpretación corresponden al laboratorio y al equipo tratante.</div>`
  },
  {
    id: "busqueda",
    num: "07",
    title: "Búsqueda global",
    body: () => `
      <p>La búsqueda global recorre enfermedades, genes, proteínas, sinónimos, rutas, metabolitos y organelos. Los resultados se agrupan por tipo y muestran una descripción breve.</p>
      <ol class="doc-numbered">
        <li>Abre la búsqueda con el botón de la cabecera, <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> o <kbd>/</kbd>.</li>
        <li>Escribe al menos dos caracteres; los resultados se actualizan mientras escribes.</li>
        <li>Pulsa un resultado para abrirlo. Si es un organelo, te llevará al atlas con ese organelo seleccionado.</li>
        <li>Pulsa <kbd>Enter</kbd> para abrir el primer resultado o <kbd>Esc</kbd> para cerrar.</li>
      </ol>
      <p>El pie del buscador ofrece sugerencias: <em>MCAD · OTC · Gaucher · ABCD1 · β-oxidación · amonio</em>. Son un buen punto de partida si no sabes qué término usar.</p>`
  },
  {
    id: "quiz",
    num: "08",
    title: "Quiz por rutas",
    body: () => `
      <p>El quiz está dividido por ruta metabólica. Hay ${QUIZ_ROUTE_META.length} rutas y cada una ofrece ${QUIZ_PER_ROUTE} preguntas sobre sus enfermedades: genes, proteínas, herencia, biomarcadores, mecanismos, diagnóstico, seguimiento y tratamiento. En total, el banco genera ${QUIZ_TOTAL} preguntas.</p>
      <ol class="doc-numbered">
        <li>Abre <strong>Quiz por rutas</strong> desde la cabecera, el pie de página o el botón de la portada.</li>
        <li>Elige una ruta. La tarjeta indica el organelo, las enfermedades incluidas y el número de preguntas.</li>
        <li>Pulsa <strong>Comenzar esta ruta</strong> y selecciona una opción en cada pregunta.</li>
        <li>La respuesta se corrige de inmediato y muestra la explicación con un enlace a la ficha de la enfermedad.</li>
        <li>Al terminar las ${QUIZ_PER_ROUTE} preguntas verás la puntuación, el porcentaje y la revisión de todas las respuestas.</li>
        <li>Puedes <strong>repetir la misma ruta</strong> o elegir otra. No hay límite de intentos ni registro de datos personales.</li>
      </ol>
      <div class="doc-callout"><strong>Glucólisis.</strong> Esta ruta no tiene una enfermedad primaria en el atlas. Para completar sus ${QUIZ_PER_ROUTE} preguntas se utilizan enfermedades relacionadas con el flujo glucolítico, el glucógeno o la oxidación del piruvato; la interfaz lo indica antes de comenzar.</div>
      <p>Las preguntas se construyen de forma determinista a partir de las fichas del atlas. Las preguntas clínicas indican expresamente que deben responderse según la ficha, porque varias enfermedades pueden compartir hallazgos generales. El quiz es una actividad de repaso y no sustituye la evaluación clínica.</p>`
  },
  {
    id: "rutas",
    num: "09",
    title: "Rutas directas y atajos",
    body: () => `
      <p>Puedes guardar o compartir enlaces directos a cualquier vista. El sitio utiliza rutas con <code>#</code>, por lo que funcionan también en un servidor estático.</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Vista</th><th>Enlace</th></tr></thead>
          <tbody>
            <tr><td>Atlas celular</td><td><code>#/atlas</code></td></tr>
            <tr><td>Mapa metabólico</td><td><code>#/pathways</code></td></tr>
            <tr><td>Ruta de la urea</td><td><code>#/pathway/urea-cycle</code></td></tr>
            <tr><td>β-oxidación con MCAD resaltada</td><td><code>#/pathway/fa-beta-oxidation/mcad</code></td></tr>
            <tr><td>Explorador</td><td><code>#/explorer</code></td></tr>
            <tr><td>Ficha de Gaucher</td><td><code>#/disease/gaucher</code></td></tr>
            <tr><td>Quiz por rutas</td><td><code>#/quiz</code></td></tr>\n            <tr><td>Quiz del ciclo de la urea</td><td><code>#/quiz/urea-cycle</code></td></tr>
            <tr><td>Sustento científico</td><td><code>#/sustento</code></td></tr>
            <tr><td>Manual de uso</td><td><code>#/manual</code></td></tr>
          </tbody>
        </table>
      </div>
      <h3>Atajos de teclado</h3>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Acción</th><th>Atajo</th></tr></thead>
          <tbody>
            <tr><td>Abrir la búsqueda global</td><td><kbd>Ctrl</kbd> + <kbd>K</kbd> o <kbd>⌘</kbd> + <kbd>K</kbd></td></tr>
            <tr><td>Abrir la búsqueda (fuera de un campo)</td><td><kbd>/</kbd></td></tr>
            <tr><td>Cerrar la búsqueda</td><td><kbd>Esc</kbd></td></tr>
            <tr><td>Abrir el primer resultado</td><td><kbd>Enter</kbd></td></tr>
          </tbody>
        </table>
      </div>`
  },
  {
    id: "flujo",
    num: "10",
    title: "Flujo de estudio recomendado",
    body: () => `
      <p>Si es tu primera vez, sigue este recorrido guiado. Después podrás adaptarlo a tus objetivos.</p>
      <ol class="doc-numbered">
        <li><strong>Elige un organelo</strong> en la célula. Empieza por la mitocondria, el lisosoma o el peroxisoma.</li>
        <li><strong>Lee sus funciones</strong> y pregunta qué pasaría si una de ellas fallara.</li>
        <li><strong>Abre una ruta</strong> y recorre el diagrama de izquierda a derecha.</li>
        <li><strong>Localiza la enzima</strong> y el gen asociado. Identifica el sustrato y el producto.</li>
        <li><strong>Pulsa el nodo de bloqueo</strong> y lee el inspector: ¿qué se acumula y qué deja de producirse?</li>
        <li><strong>Abre la ficha</strong> y contrasta el mecanismo con los biomarcadores.</li>
        <li><strong>Revisa el tratamiento</strong> y relaciónalo con el punto de bloqueo: ¿se restringe un sustrato, se aporta un producto o se reemplaza la enzima?</li>
        <li><strong>Vuelve al atlas</strong> y compara con otra enfermedad del mismo organelo.</li>
        <li><strong>Formula una pregunta</strong> que puedas responder con la ficha y verifica la respuesta.</li>
        <li><strong>Cierra con el quiz de la ruta</strong> para comprobar qué conceptos ya dominas y qué conviene repasar.</li>
        <li><strong>Consulta las fuentes</strong> si necesitas profundizar o preparar una exposición.</li>
      </ol>
      <div class="doc-callout"><strong>Ejercicio guiado.</strong> Abre la β-oxidación y selecciona MCAD. Explica por qué la hipoglucemia es hipocetósica, qué biomarcador buscarías en sangre y por qué el manejo se centra en evitar el ayuno.</div>`
  },
  {
    id: "actividades",
    num: "11",
    title: "Actividades sugeridas",
    body: () => `
      <h3>Para clase o estudio individual</h3>
      <ol class="doc-numbered">
        <li><strong>Quiz por rutas:</strong> elegir la ruta estudiada, completar sus ${QUIZ_PER_ROUTE} preguntas, revisar la retroalimentación de cada respuesta y repetir el intento tras consultar las fichas enlazadas.</li>
        <li><strong>Del biomarcador a la ruta:</strong> el docente proporciona un biomarcador (por ejemplo, citrulina alta) y el estudiante debe localizar la ruta, la enzima y la enfermedad.</li>
        <li><strong>Dos enfermedades, un organelo:</strong> comparar Gaucher y Fabry, o MCAD y VLCAD, y explicar por qué comparten organelo pero difieren en manifestaciones y tratamiento.</li>
        <li><strong>El tratamiento tiene lógica:</strong> elegir una enfermedad y justificar cada estrategia terapéutica a partir del punto de bloqueo.</li>
        <li><strong>Mapa inverso:</strong> dar el nombre de una enzima y pedir al estudiante que reconstruya la ruta y los biomarcadores.</li>
        <li><strong>Caso clínico breve:</strong> presentar hipoglucemia, hiperamonemia o miocardiopatía y pedir un diagnóstico diferencial usando el explorador.</li>
        <li><strong>Debate sobre límites:</strong> discutir por qué una herramienta educativa no sustituye una guía clínica ni una consulta especializada.</li>
      </ol>
      <h3>Criterios de una buena respuesta</h3>
      <ul>
        <li>Identifica correctamente el organelo y la ruta.</li>
        <li>Nombra la enzima y el gen, y distingue sustrato de producto.</li>
        <li>Explica el mecanismo de la acumulación o del déficit energético.</li>
        <li>Relaciona al menos un biomarcador con la muestra adecuada.</li>
        <li>Justifica el tratamiento sin inventar dosis ni indicaciones.</li>
        <li>Reconoce los límites de la información y cita la fuente.</li>
      </ul>`
  },
  {
    id: "problemas",
    num: "12",
    title: "Problemas frecuentes",
    body: () => `
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Situación</th><th>Qué comprobar</th></tr></thead>
          <tbody>
            <tr><td>La página aparece en blanco</td><td>Confirma que abriste <code>index.html</code> desde la carpeta completa del proyecto y que los archivos <code>js/</code> y <code>css/</code> están presentes. Si usas un servidor, revisa la ruta.</td></tr>
            <tr><td>Los estilos o iconos no cargan</td><td>Actualiza con <kbd>Ctrl</kbd> + <kbd>F5</kbd> y verifica que <code>css/styles.css</code> y el sprite SVG estén disponibles.</td></tr>
            <tr><td>Las tipografías se ven distintas</td><td>Comprueba que los archivos WOFF2 locales estén disponibles; si no, el navegador usa las fuentes de respaldo. No afecta el contenido ni la navegación.</td></tr>
            <tr><td>El diagrama se ve pequeño</td><td>Usa los botones de zoom o arrastra el lienzo. En pantallas estrechas, el diagrama está pensado para explorarse.</td></tr>
            <tr><td>No encuentro una enfermedad</td><td>Prueba con el gen, un sinónimo o un biomarcador. También puedes limpiar los filtros del explorador.</td></tr>
            <tr><td>El botón de imprimir no responde</td><td>Algunos navegadores bloquean la impresión desde páginas locales; abre el sitio desde un servidor estático o usa el menú del navegador.</td></tr>
            <tr><td>Un enlace directo no abre la vista</td><td>Verifica que el enlace incluya el <code>#</code> y que el identificador exista (por ejemplo, <code>#/disease/gaucher</code>).</td></tr>
          </tbody>
        </table>
      </div>
      <p>Si el problema persiste, revisa la consola del navegador (F12 → Consola) y anota el mensaje. Para un uso académico, conserva la versión de los archivos y la fecha de la consulta.</p>`
  },
  {
    id: "creditos",
    num: "13",
    title: "Buenas prácticas y créditos",
    body: () => `
      <h3>Buenas prácticas de uso</h3>
      <ul>
        <li>Utiliza el atlas como apoyo de estudio o material docente, no como fuente única.</li>
        <li>Contrasta los datos con las guías clínicas y las fuentes originales antes de una exposición o publicación.</li>
        <li>No introduzcas datos de pacientes: el sitio no los solicita ni los almacena, pero evita pegarlos en herramientas externas.</li>
        <li>Si detectas un error, anótalo con la vista, el nodo y la fuente y comunícalo al responsable del proyecto.</li>
        <li>Respeta la autoría y cita el recurso cuando lo reutilices.</li>
      </ul>
      <h3>Créditos</h3>
      <p>Proyecto académico de Bioquímica Aplicada. Contenido elaborado a partir de GeneReviews, OMIM, Orphanet y la bibliografía general citada en el sustento científico. Diseño e implementación web con HTML, CSS y JavaScript. Las ilustraciones celulares y los diagramas son esquemas originales en SVG.</p>
      <p class="mini-note">Versión ${DOC_VERSION} · ${DOC_DATE}. Este manual y el sustento científico pueden imprimirse o guardarse en PDF desde sus respectivas vistas.</p>
      <div class="doc-actions doc-actions-bottom">
        <a class="btn primary" href="#/sustento">${icon("book")} Ver sustento científico</a>
        <a class="btn" href="#/atlas">${icon("atlas")} Volver al atlas</a>
      </div>`
  }
];

/* ---------------- Tablas y listas dinámicas ---------------- */
function docOrganelleTable() {
  const rows = ORGANELLES.map((o) => {
    const paths = o.pathwayIds.map((id) => PATHWAY_BY_ID[id]?.name).filter(Boolean);
    const diseases = o.diseaseIds.map((id) => DISEASE_BY_ID[id]?.name).filter(Boolean);
    return `<tr>
      <td><span class="doc-org"><span class="dot" style="background:${o.color}"></span><strong>${o.name}</strong></span><br><small>${o.tier === "primary" ? "Organelo diana" : o.pathwayIds.length ? "Compartimento con rutas" : "Contexto celular"}</small></td>
      <td>${paths.length ? paths.join("<br>") : "<em>Sin rutas propias en esta versión</em>"}</td>
      <td>${diseases.length ? diseases.join("<br>") : "—"}</td>
    </tr>`;
  }).join("");
  return `<div class="doc-table-wrap"><table class="doc-table">
    <thead><tr><th>Organelo</th><th>Rutas representadas</th><th>Enfermedades</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

const DOC_DISEASE_SUMMARY = {
  mcad: { biomarker: "Acilcarnitinas C8 y C8:1 en sangre", treatment: "Evitar el ayuno; glucosa en crisis; plan de emergencia" },
  vlcad: { biomarker: "Acilcarnitinas C14:1, C14 y C16", treatment: "Evitar el ayuno; triglicéridos de cadena media; control cardíaco" },
  otc: { biomarker: "Amonio, glutamina y ácido orótico", treatment: "Restricción proteica; captores de nitrógeno; arginina/citrulina" },
  ass1: { biomarker: "Citrulina y amonio elevados", treatment: "Restricción proteica; arginina; captores de nitrógeno" },
  pdh: { biomarker: "Lactato, piruvato y alanina", treatment: "Dieta cetogénica en casos seleccionados; cofactores; soporte" },
  leigh: { biomarker: "Lactato en sangre/LCR; hallazgos de imagen", treatment: "Soporte multidisciplinario; cofactores; dieta individualizada" },
  gaucher: { biomarker: "Glucosilceramida y glucosilesfingosina (lyso-GL1)", treatment: "Enzima recombinante; reducción de sustrato; seguimiento" },
  fabry: { biomarker: "Gb3 y lyso-Gb3 en plasma", treatment: "Enzima recombinante; chaperona; manejo renal y cardíaco" },
  taysachs: { biomarker: "Actividad de hexosaminidasa A; GM2", treatment: "Manejo de soporte; consejo genético" },
  niemannpick: { biomarker: "Esfingomielina y lyso-esfingomielina", treatment: "Soporte en tipo A; enzima recombinante en tipo B" },
  pompe: { biomarker: "Actividad de GAA; CK; glucosa tetrasacárido urinario", treatment: "Enzima recombinante; soporte respiratorio y nutricional" },
  mps1: { biomarker: "Dermatán y heparán sulfato; actividad de IDUA", treatment: "Enzima recombinante; trasplante de progenitores en casos seleccionados" },
  mps2: { biomarker: "Heparán y dermatán sulfato; actividad de IDS", treatment: "Enzima recombinante; manejo multidisciplinario" },
  xald: { biomarker: "Ácidos grasos de cadena muy larga (C26:0)", treatment: "Trasplante temprano en formas cerebrales; aceite de Lorenzo seleccionado; reemplazo adrenal" },
  zellweger: { biomarker: "VLCFA, plasmalógenos y ácidos biliares", treatment: "Soporte multidisciplinario; manejo nutricional y sensorial" },
  refsum: { biomarker: "Ácido fitánico plasmático", treatment: "Dieta baja en ácido fitánico; plasmaféresis en crisis" },
  pku: { biomarker: "Fenilalanina y relación Phe/Tyr", treatment: "Dieta baja en fenilalanina; sapropterina; pegvaliasa" },
  gsd1: { biomarker: "Glucosa, lactato, ácido úrico y triglicéridos", treatment: "Almidón de maíz; evitar el ayuno; alopurinol; seguimiento" },
  galactosemia: { biomarker: "Galactosa-1-fosfato y galactitol", treatment: "Restricción de galactosa y lactosa; seguimiento" },
  cps1: { biomarker: "Amonio y glutamina altos; citrulina baja", treatment: "Restricción proteica; captores de nitrógeno; arginina/citrulina; trasplante seleccionado" },
  homocystinuria: { biomarker: "Homocisteína total y metionina", treatment: "Dieta baja en metionina; piridoxina; betaina; folato/B12" },
  tyrosinemia1: { biomarker: "Succinilacetona; tirosina y metionina", treatment: "Nitisinona; dieta baja en tirosina/fenilalanina; trasplante seleccionado" },
  krabbe: { biomarker: "Actividad de GALC; psicosina", treatment: "Trasplante de progenitores temprano; manejo de soporte" },
  mld: { biomarker: "Actividad de ARSA; sulfátidos urinarios", treatment: "Trasplante de progenitores temprano; manejo de soporte" },
  mps3a: { biomarker: "Heparán sulfato; actividad de SGSH", treatment: "Manejo multidisciplinario; trasplante/enzima en investigación" },
  gsd3: { biomarker: "Glucosa, lactato, cetonas y CK", treatment: "Almidón de maíz; dieta rica en proteínas; evitar el ayuno" },
  mcardle: { biomarker: "CK y mioglobina tras ejercicio; intolerancia al ejercicio", treatment: "Acondicionamiento físico; sacarosa antes del ejercicio; evitar estatinas" },
  propionic: { biomarker: "Propionilcarnitina C3; metilcitrato; amonio", treatment: "Dieta baja en proteínas; carnitina; captores; trasplante seleccionado" },
  methylmalonic: { biomarker: "Ácido metilmalónico; C3; amonio", treatment: "Dieta baja en proteínas; carnitina; prueba con B12; trasplante seleccionado" },
  wilson: { biomarker: "Ceruloplasmina baja; cobre libre y urinario", treatment: "Quelantes de cobre; zinc; dieta baja en cobre; trasplante seleccionado" },
  menkes: { biomarker: "Cobre y ceruloplasmina bajos; pelo ensortijado", treatment: "Cobre parenteral precoz; soporte neurológico y nutricional" },
  iva: { biomarker: "Isovalerilcarnitina C5; ácido 3-hidroxiisovalérico", treatment: "Dieta baja en leucina; carnitina; evitar el ayuno; plan de emergencia" },
  glutaric1: { biomarker: "Glutarilcarnitina C5DC; ácido glutárico", treatment: "Dieta baja en lisina y triptófano; carnitina; evitar crisis encefalopáticas" },
  hmg: { biomarker: "3-hidroxi-3-metilglutárico; C6DC", treatment: "Dieta baja en leucina y grasas; carnitina; evitar el ayuno; bicarbonato en crisis" },
  biotinidase: { biomarker: "Actividad de biotinidasa; biotinilpéptidos", treatment: "Biotina oral a dosis farmacológica; seguimiento" },
  holocarboxylase: { biomarker: "Actividad de HLCS; ácidos orgánicos y lactato", treatment: "Biotina oral en dosis altas; control metabólico" },
  lpi: { biomarker: "Aminoácidos plasmáticos bajos; orotato y amonio", treatment: "Dieta baja en proteínas; citrulina/arginina; evitar exceso de proteína" },
  hartnup: { biomarker: "Aminoácidos neutros en orina; triptófano bajo", treatment: "Nicotinamida; dieta rica en proteínas; protección solar" },
  cystinuria: { biomarker: "Cistina urinaria; cristales y cálculos", treatment: "Hidratación abundante; alcalinización; tioles; dieta baja en sodio" },
  fructosemia: { biomarker: "Fructosa-1-fosfato; prueba genética de ALDOB", treatment: "Evitar fructosa, sacarosa y sorbitol; asesoría dietética" }
};

function docDiseaseTable() {
  const rows = DISEASES.map((d) => {
    const org = organelleOf(d.organelleId);
    const path = PATHWAY_BY_ID[d.pathwayId];
    const s = DOC_DISEASE_SUMMARY[d.id] || { biomarker: "—", treatment: "—" };
    return `<tr>
      <td><strong>${d.name}</strong><br><small>${d.inheritance}</small></td>
      <td><code>${d.gene}</code></td>
      <td>${org?.shortName || "—"}</td>
      <td>${path?.shortName || "—"}</td>
      <td>${s.biomarker}</td>
      <td>${s.treatment}</td>
    </tr>`;
  }).join("");
  return `<div class="doc-table-wrap"><table class="doc-table doc-disease-table">
    <thead><tr><th>Enfermedad</th><th>Gen</th><th>Organelo</th><th>Ruta</th><th>Biomarcador clave</th><th>Eje terapéutico</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function docDiseaseReferences() {
  const cards = DISEASES.map((d) => `
    <div class="doc-ref-card">
      <div class="doc-ref-head"><strong>${d.name}</strong><span>${d.gene}</span></div>
      <ul>${d.sources.map((s) => `<li><span class="src-badge">${s.label}</span><span>${s.title}<small>${s.ref}</small></span></li>`).join("")}</ul>
    </div>`).join("");
  return `<div class="doc-ref-grid">${cards}</div>`;
}




