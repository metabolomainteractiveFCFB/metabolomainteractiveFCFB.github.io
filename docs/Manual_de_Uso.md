# Manual de uso

## Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo
### Un atlas dinámico e interactivo organizado por organelos

**Versión 1.3 · octubre de 2026**

Este manual explica cómo recorrer el atlas, interpretar los diagramas, filtrar enfermedades, consultar las fichas y usar el quiz por rutas sin ayuda externa. El recurso es educativo: no sustituye la valoración de profesionales sanitarios ni las guías clínicas.

---

## 1. Antes de empezar

El atlas funciona en navegadores modernos de escritorio o móvil (Chrome, Edge, Firefox o Safari recientes). No necesita instalación, registro ni conexión a una base de datos. La forma más sencilla de abrirlo es hacer doble clic en `index.html`; si prefieres un servidor local, puedes usar cualquier servidor estático.

**Lo que necesitas**

- Un navegador actualizado.
- Conexión a internet si quieres cargar las tipografías de Google; sin conexión se usan las fuentes de respaldo.
- Nociones básicas de bioquímica para aprovechar al máximo las fichas.

**Lo que no necesitas**

- Instalar programas adicionales.
- Crear una cuenta.
- Introducir datos personales o clínicos.

> **Consejo.** Si vas a proyectar el atlas en clase, usa una ventana amplia (a partir de 1.100 px) para ver la célula y el panel contextual en paralelo. En pantallas estrechas, los paneles se apilan y el diagrama se puede ampliar y arrastrar.

---

## 2. Navegación general

La cabecera se mantiene visible y contiene la marca, cuatro accesos principales y el buscador:

- **Atlas celular:** vista principal con la célula interactiva.
- **Mapa metabólico:** listado de las 20 rutas agrupadas por organelo.
- **Explorador:** catálogo filtrable de las 40 enfermedades.
- **Quiz:** 20 rutas metabólicas con 20 preguntas por ruta (400 en total), retroalimentación inmediata y revisión final.
- **Buscar:** abre la búsqueda global; también puedes pulsar `Ctrl`/`⌘` + `K` o `/`.

Las migas de pan aparecen en las vistas internas. Por ejemplo, en una ficha puedes volver al atlas, a la ruta o al organelo. El pie de página enlaza este manual, el sustento científico y el aviso educativo.

### Qué hace cada tipo de etiqueta

| Etiqueta | Significado |
|---|---|
| Error de la β-oxidación | Categoría bioquímica de la enfermedad. |
| Autosómica recesiva | Tipo de herencia descrito en la ficha. |
| Organelo diana | Organelo con rutas y enfermedades representadas. |
| Contexto celular | Estructura incluida para orientar la célula, sin rutas propias en esta versión. |
| Contexto | Ruta incluida como referencia, sin una enfermedad asociada en el prototipo. |

---

## 3. Atlas celular

1. Entra en **Atlas celular** desde la cabecera o la marca.
2. Pasa el cursor sobre la célula: aparecerá un globo con el nombre de la estructura.
3. Haz clic en la mitocondria, el lisosoma, el peroxisoma o el citosol. También puedes usar las píldoras inferiores; muestran el número de rutas de cada organelo.
4. Lee el **panel contextual**: verás la descripción, las funciones, las rutas y las enfermedades relacionadas.
5. Pulsa una ruta para abrir su diagrama o una enfermedad para ir a la ficha. El botón **Explorar este organelo** abre el explorador con el filtro aplicado.
6. Para quitar la selección, vuelve a pulsar el organelo seleccionado en la célula. Las píldoras mantienen la selección al pulsarlas de nuevo.

> **Interpretación.** El núcleo y el retículo endoplasmático se incluyen como contexto celular y no tienen rutas propias en el atlas. El aparato de Golgi alberga el transporte del cobre y la membrana plasmática agrupa el transporte de aminoácidos. El panel lo indica en cada caso.

---

## 4. Mapa metabólico y diagramas

El mapa metabólico agrupa las rutas por organelo. Cada tarjeta indica el nombre de la ruta, un resumen, los compartimentos implicados y el número de enfermedades. Al abrirla se muestra un diagrama con la secuencia de pasos.

### Tipos de nodo

| Color / forma | Tipo | Qué representa |
|---|---|---|
| Tarjeta neutra | Metabolito | Sustrato, intermediario o producto de la ruta. |
| Borde turquesa | Enzima | Proteína que cataliza el paso; incluye el gen cuando se conoce. |
| Borde coral | Punto de bloqueo | Enzima cuya deficiencia causa una enfermedad representada. |
| Borde ámbar | Biomarcador | Metabolito que se mide en sangre, orina u otra muestra. |
| Borde verde | Destino | Producto final o conexión con otra ruta. |

### Acciones del diagrama

- **Seleccionar un nodo:** muestra el inspector con la explicación, la enzima, la consecuencia y el enlace a la ficha.
- **Ampliar o reducir:** usa los botones **+** y **−**; el botón de reinicio recupera la vista inicial.
- **Desplazarse:** arrastra el diagrama con el ratón o el dedo. En pantallas táctiles, el desplazamiento está integrado en el lienzo.
- **Enfocar una enfermedad:** si abres una ruta desde una ficha con «Ver en el mapa metabólico», el nodo de bloqueo se resalta y el inspector se abre automáticamente.
- **Volver:** usa la miga de pan «Volver al organelo» o el menú principal.

> **Lectura sugerida.** Empieza por el sustrato, sigue la flecha hasta la enzima y observa qué metabolito aparece después. Si el nodo está marcado como bloqueo, pregúntate qué se acumula antes y qué deja de producirse después.

---

## 5. Explorador de enfermedades

1. Abre **Explorador** en la cabecera.
2. Escribe en el campo de búsqueda un nombre, un gen, una enzima o un biomarcador.
3. Combina los filtros de **organelo** y **categoría** si necesitas acotar.
4. El contador superior indica cuántos resultados cumplen todos los criterios.
5. Pulsa una tarjeta para abrir la ficha completa. El botón **Limpiar filtros** restablece la vista.

Los filtros se combinan con una lógica conjuntiva: un resultado debe cumplir el texto, el organelo y la categoría seleccionados. Si no hay coincidencias, el sitio muestra un estado vacío con una sugerencia para ampliar la búsqueda.

### Ejemplos de consulta

| Objetivo | Qué escribir o seleccionar |
|---|---|
| Enfermedades del lisosoma | Organelo: Lisosoma. |
| Buscar un gen concreto | Texto: `GBA1`, `ACADM` o `PAH`. |
| Explorar un biomarcador | Texto: `amonio`, `lactato` o `VLCFA`. |
| Ver solo glucogenosis | Categoría: Glucogenosis. |

---

## 6. Ficha de enfermedad

La ficha reúne la información clave en cuatro acordeones y una columna lateral de identificación. Al abrir la página, el mecanismo aparece desplegado; los demás bloques se abren con un clic.

- **Mecanismo bioquímico:** función normal, alteración, sustratos que se acumulan, productos que disminuyen y consecuencias.
- **Diagnóstico:** biomarcadores, muestras, cribado, pruebas confirmatorias y pruebas enzimáticas o genéticas.
- **Tratamiento:** estrategias, manejo dietético, cofactores y seguimiento.
- **Fuentes:** referencias verificables con su identificador (GeneReviews, OMIM, Orphanet).

La columna lateral muestra el gen, la proteína, el número EC, el compartimento, la ruta y la herencia. Desde allí puedes abrir el diagrama con el nodo de bloqueo resaltado o volver al organelo. La tarjeta **Requiere validación** señala los datos que dependen del contexto y deben confirmarse con fuentes o con el equipo clínico.

> **Recuerda.** Los biomarcadores se presentan como orientaciones, no como valores de corte. La confirmación y la interpretación corresponden al laboratorio y al equipo tratante.

---

## 7. Búsqueda global

La búsqueda global recorre enfermedades, genes, proteínas, sinónimos, rutas, metabolitos y organelos. Los resultados se agrupan por tipo y muestran una descripción breve.

1. Abre la búsqueda con el botón de la cabecera, `Ctrl`/`⌘` + `K` o `/`.
2. Escribe al menos dos caracteres; los resultados se actualizan mientras escribes.
3. Pulsa un resultado para abrirlo. Si es un organelo, te llevará al atlas con ese organelo seleccionado.
4. Pulsa `Enter` para abrir el primer resultado o `Esc` para cerrar.

El pie del buscador ofrece sugerencias: *MCAD · OTC · Gaucher · ABCD1 · β-oxidación · amonio*. Son un buen punto de partida si no sabes qué término usar.

---

## 8. Quiz por rutas

El quiz está dividido por ruta metabólica. Hay 20 rutas y cada una ofrece 20 preguntas sobre sus enfermedades: genes, proteínas, herencia, biomarcadores, mecanismos, diagnóstico, seguimiento y tratamiento. En total, el banco genera 400 preguntas.

1. Abre **Quiz por rutas** desde la cabecera, el pie de página o el botón de la portada.
2. Elige una ruta. La tarjeta indica el organelo, las enfermedades incluidas y el número de preguntas.
3. Pulsa **Comenzar esta ruta** y selecciona una opción en cada pregunta.
4. La respuesta se corrige de inmediato y muestra la explicación con un enlace a la ficha de la enfermedad.
5. Al terminar las 20 preguntas verás la puntuación, el porcentaje y la revisión de todas las respuestas.
6. Puedes **repetir la misma ruta** o elegir otra. No hay límite de intentos ni registro de datos personales.

> **Glucólisis.** Esta ruta no tiene una enfermedad primaria en el atlas. Para completar sus 20 preguntas se utilizan enfermedades relacionadas con el flujo glucolítico, el glucógeno o la oxidación del piruvato; la interfaz lo indica antes de comenzar.

Las preguntas se construyen de forma determinista a partir de las fichas del atlas. Las preguntas clínicas indican expresamente que deben responderse según la ficha, porque varias enfermedades pueden compartir hallazgos generales. El quiz es una actividad de repaso y no sustituye la evaluación clínica.

---
## 9. Rutas directas y atajos

Puedes guardar o compartir enlaces directos a cualquier vista. El sitio utiliza rutas con `#`, por lo que funcionan también en un servidor estático.

| Vista | Enlace |
|---|---|
| Atlas celular | `#/atlas` |
| Mapa metabólico | `#/pathways` |
| Ruta de la urea | `#/pathway/urea-cycle` |
| β-oxidación con MCAD resaltada | `#/pathway/fa-beta-oxidation/mcad` |
| Explorador | `#/explorer` |
| Ficha de Gaucher | `#/disease/gaucher` |
| Quiz por rutas | `#/quiz` |
| Quiz del ciclo de la urea | `#/quiz/urea-cycle` |
| Sustento científico | `#/sustento` |
| Manual de uso | `#/manual` |

### Atajos de teclado

| Acción | Atajo |
|---|---|
| Abrir la búsqueda global | Ctrl + K o ⌘ + K |
| Abrir la búsqueda (fuera de un campo) | / |
| Cerrar la búsqueda | Esc |
| Abrir el primer resultado | Enter |

---

## 10. Flujo de estudio recomendado

Si es tu primera vez, sigue este recorrido guiado. Después podrás adaptarlo a tus objetivos.

1. **Elige un organelo** en la célula. Empieza por la mitocondria, el lisosoma o el peroxisoma.
2. **Lee sus funciones** y pregunta qué pasaría si una de ellas fallara.
3. **Abre una ruta** y recorre el diagrama de izquierda a derecha.
4. **Localiza la enzima** y el gen asociado. Identifica el sustrato y el producto.
5. **Pulsa el nodo de bloqueo** y lee el inspector: ¿qué se acumula y qué deja de producirse?
6. **Abre la ficha** y contrasta el mecanismo con los biomarcadores.
7. **Revisa el tratamiento** y relaciónalo con el punto de bloqueo: ¿se restringe un sustrato, se aporta un producto o se reemplaza la enzima?
8. **Vuelve al atlas** y compara con otra enfermedad del mismo organelo.
9. **Formula una pregunta** que puedas responder con la ficha y verifica la respuesta.
10. **Cierra con el quiz de la ruta** para comprobar qué conceptos ya dominas y qué conviene repasar.
11. **Consulta las fuentes** si necesitas profundizar o preparar una exposición.

> **Ejercicio guiado.** Abre la β-oxidación y selecciona MCAD. Explica por qué la hipoglucemia es hipocetósica, qué biomarcador buscarías en sangre y por qué el manejo se centra en evitar el ayuno.

---

## 11. Actividades sugeridas

### Para clase o estudio individual

1. **Quiz por rutas:** elegir la ruta estudiada, completar sus 20 preguntas, revisar la retroalimentación de cada respuesta y repetir el intento tras consultar las fichas enlazadas.
2. **Del biomarcador a la ruta:** el docente proporciona un biomarcador (por ejemplo, citrulina alta) y el estudiante debe localizar la ruta, la enzima y la enfermedad.
3. **Dos enfermedades, un organelo:** comparar Gaucher y Fabry, o MCAD y VLCAD, y explicar por qué comparten organelo pero difieren en manifestaciones y tratamiento.
4. **El tratamiento tiene lógica:** elegir una enfermedad y justificar cada estrategia terapéutica a partir del punto de bloqueo.
5. **Mapa inverso:** dar el nombre de una enzima y pedir al estudiante que reconstruya la ruta y los biomarcadores.
6. **Caso clínico breve:** presentar hipoglucemia, hiperamonemia o miocardiopatía y pedir un diagnóstico diferencial usando el explorador.
7. **Debate sobre límites:** discutir por qué una herramienta educativa no sustituye una guía clínica ni una consulta especializada.

### Criterios de una buena respuesta

- Identifica correctamente el organelo y la ruta.
- Nombra la enzima y el gen, y distingue sustrato de producto.
- Explica el mecanismo de la acumulación o del déficit energético.
- Relaciona al menos un biomarcador con la muestra adecuada.
- Justifica el tratamiento sin inventar dosis ni indicaciones.
- Reconoce los límites de la información y cita la fuente.

---

## 12. Problemas frecuentes

| Situación | Qué comprobar |
|---|---|
| La página aparece en blanco | Confirma que abriste `index.html` desde la carpeta completa del proyecto y que los archivos `js/` y `css/` están presentes. |
| Los estilos o iconos no cargan | Actualiza con `Ctrl` + `F5` y verifica que `css/styles.css` y el sprite SVG estén disponibles. |
| Las tipografías se ven distintas | Sin conexión, el navegador usa fuentes de respaldo. No afecta el contenido ni la navegación. |
| El diagrama se ve pequeño | Usa los botones de zoom o arrastra el lienzo. En pantallas estrechas, el diagrama está pensado para explorarse. |
| No encuentro una enfermedad | Prueba con el gen, un sinónimo o un biomarcador. También puedes limpiar los filtros del explorador. |
| El botón de imprimir no responde | Algunos navegadores bloquean la impresión desde páginas locales; abre el sitio desde un servidor estático o usa el menú del navegador. |
| Un enlace directo no abre la vista | Verifica que el enlace incluya el `#` y que el identificador exista (por ejemplo, `#/disease/gaucher`). |

Si el problema persiste, revisa la consola del navegador (F12 → Consola) y anota el mensaje. Para un uso académico, conserva la versión de los archivos y la fecha de la consulta.

---

## 13. Buenas prácticas y créditos

### Buenas prácticas de uso

- Utiliza el atlas como apoyo de estudio o material docente, no como fuente única.
- Contrasta los datos con las guías clínicas y las fuentes originales antes de una exposición o publicación.
- No introduzcas datos de pacientes: el sitio no los solicita ni los almacena.
- Si detectas un error, anótalo con la vista, el nodo y la fuente y comunícalo al responsable del proyecto.
- Respeta la autoría y cita el recurso cuando lo reutilices.

### Créditos

Proyecto académico de Bioquímica Aplicada. Contenido elaborado a partir de GeneReviews, OMIM, Orphanet y la bibliografía citada en el sustento científico. Diseño e implementación web con HTML, CSS y JavaScript. Las ilustraciones celulares y los diagramas son esquemas originales en SVG.

**Cómo citar:** Proyecto académico de Bioquímica Aplicada. (2026). *Metaboloma interactivo : Cartografía de los Errores Innatos del Metabolismo* [Recurso educativo web].

> Recurso educativo. No sustituye la valoración de profesionales sanitarios ni constituye consejo médico.

