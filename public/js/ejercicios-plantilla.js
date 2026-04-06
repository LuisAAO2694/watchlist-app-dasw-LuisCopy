/**
 * ================================================================
 * EJERCICIOS DE DOM PARA PRINCIPIANTES - PLANTILLA PARA COMPLETAR
 * ================================================================
 * 
 * INSTRUCCIONES:
 * 1. Copia TODO este código en un archivo new.js
 * 2. Completa lo que falta en cada ejercicio (donde dice "// TU CÓDIGO")
 * 3. En la consola (F12), ejecuta: ejercicio1(), ejercicio2(), etc.
 * 4. ¡Lee la consola para ver si funcionó!
 * 
 * PISTA: Si no sabes qué hacer, mira el archivo "2-ejercicios-simple.js"
 */

console.log('╔═══════════════════════════════════════════╗');
console.log('║  EJERCICIOS DE DOM - PARA COMPLETAR       ║');
console.log('╚═══════════════════════════════════════════╝\n');

// ================================================================
// EJERCICIO 1: CONTAR CARDS
// ================================================================
/**
 * OBJETIVO: Contar cuántos cards hay en la página
 * 
 * PASOS:
 * 1. Busca todos los elementos con clase 'watchlist-card'
 *    (Usa document.querySelectorAll)
 * 2. Guárdalos en una variable llamada 'cards'
 * 3. Muestra en consola: 'Total de cards:', cards.length
 * 
 * RESULTADO ESPERADO: "Total de cards: 6"
 */

const ejercicio1 = () => {
  console.log('\n--- EJERCICIO 1: Contar cuántos cards hay ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 2: LISTAR LAS PELÍCULAS
// ================================================================
/**
 * OBJETIVO: Mostrar el nombre de todas las películas/series
 * 
 * PASOS:
 * 1. Busca todos los cards
 * 2. Para CADA card, busca el título (clase 'card-title')
 * 3. También busca el género (clase 'card-genre')
 * 4. Muestra: "1. Inception (Ciencia Ficción)"
 * 
 * PISTA: Usa .forEach((card, i) => { })
 * PISTA: Usa card.querySelector() para buscar dentro del card
 * PISTA: Usa .textContent para obtener el texto
 * 
 * RESULTADO ESPERADO:
 * 1. Inception (Ciencia Ficción)
 * 2. Breaking Bad (Drama)
 * etc...
 */

const ejercicio2 = () => {
  console.log('\n--- EJERCICIO 2: Listar todas las películas/series ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 3: CAMBIAR EL TÍTULO
// ================================================================
/**
 * OBJETIVO: Cambiar el texto y color del título principal
 * 
 * PASOS:
 * 1. Busca el elemento con clase 'content-title'
 * 2. Cambia su texto a: 'Mi Watchlist 2024'
 *    (Usa elemento.textContent = 'nuevo texto')
 * 3. Cambia su color a rojo: '#ff0000'
 *    (Usa elemento.style.color = '#ff0000')
 * 4. Muestra en consola: '✓ Título cambiado'
 * 
 * RESULTADO ESPERADO:
 * - El título en la página dice "Mi Watchlist 2024"
 * - El título es de color rojo
 */

const ejercicio3 = () => {
  console.log('\n--- EJERCICIO 3: Cambiar el título principal ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 4: CONTAR PELÍCULAS VS SERIES
// ================================================================
/**
 * OBJETIVO: Contar cuántas películas y cuántas series hay
 * 
 * PASOS:
 * 1. Busca todos los elementos con clase 'badge-movie' (películas)
 * 2. Guarda su cantidad en una variable 'peliculas'
 * 3. Busca todos los elementos con clase 'badge-series' (series)
 * 4. Guarda su cantidad en una variable 'series'
 * 5. Muestra:
 *    console.log('Películas:', peliculas);
 *    console.log('Series:', series);
 *    console.log('Total:', peliculas + series);
 * 
 * RESULTADO ESPERADO:
 * Películas: 3
 * Series: 3
 * Total: 6
 */

const ejercicio4 = () => {
  console.log('\n--- EJERCICIO 4: Contar películas vs series ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 5: CREAR UN NUEVO CARD
// ================================================================
/**
 * OBJETIVO: Crear un nuevo card y agregarlo a la página
 * 
 * PASOS:
 * 1. Crea un elemento div: document.createElement('div')
 * 2. Dale la clase 'watchlist-card': elemento.className = 'watchlist-card'
 * 3. Agrégale contenido HTML:
 *    elemento.innerHTML = `
 *      <div class="card-body">
 *        <div class="card-title">Mi Nueva Película</div>
 *        <div class="card-genre">Aventura</div>
 *      </div>
 *    `;
 * 4. Busca el grid: document.querySelector('.watchlist-grid')
 * 5. Agrega el card al grid: grid.appendChild(nuevoCard)
 * 6. Muestra en consola: '✓ Nuevo card agregado'
 * 
 * RESULTADO ESPERADO:
 * - Aparece un nuevo card en la página
 * - El card dice "Mi Nueva Película - Aventura"
 */

const ejercicio5 = () => {
  console.log('\n--- EJERCICIO 5: Crear un nuevo card ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 6: CAMBIAR COLOR DE TODOS LOS TÍTULOS
// ================================================================
/**
 * OBJETIVO: Cambiar el color de TODOS los títulos de películas
 * 
 * PASOS:
 * 1. Busca todos los elementos con clase 'card-title'
 * 2. Para CADA uno, cambia su color a azul: '#6c8eff'
 * 3. Para CADA uno, cambia fontWeight a 'bold'
 * 4. Muestra en consola: '✓ Cambié X títulos a azul'
 * 
 * PISTA: Usa .forEach() para recorrer todos
 * PISTA: Dentro de forEach usa titulo.style.color = '#6c8eff'
 * 
 * RESULTADO ESPERADO:
 * - Todos los títulos de los cards son azules y en negrita
 */

const ejercicio6 = () => {
  console.log('\n--- EJERCICIO 6: Cambiar color de todos los títulos ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 7: CONTAR POR ESTADO
// ================================================================
/**
 * OBJETIVO: Contar cuántas películas hay por estado
 * 
 * PASOS:
 * 1. Busca todos los 'badge-watched' (Vistos) y cuenta
 * 2. Busca todos los 'badge-watching' (Viendo) y cuenta
 * 3. Busca todos los 'badge-pending' (Pendientes) y cuenta
 * 4. Muestra:
 *    console.log('Vistos:', vistos);
 *    console.log('Viendo:', viendo);
 *    console.log('Pendientes:', pendientes);
 * 
 * RESULTADO ESPERADO:
 * Vistos: 3
 * Viendo: 2
 * Pendientes: 1
 */

const ejercicio7 = () => {
  console.log('\n--- EJERCICIO 7: Contar películas por estado ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 8: CREAR UNA FUNCIÓN PARA AGREGAR CARDS
// ================================================================
/**
 * OBJETIVO: Crear una función reutilizable para agregar cards
 * 
 * PASOS:
 * 1. Dentro de ejercicio8(), crea una función llamada 'agregarCard'
 * 2. La función debe recibir 2 parámetros: titulo y genero
 * 3. Dentro de la función:
 *    - Crea un div
 *    - Dale clase 'watchlist-card'
 *    - Agrégale innerHTML con el título y género
 *    - Busca el grid
 *    - Agrega el card al grid
 * 4. USA LA FUNCIÓN para agregar 2 películas:
 *    agregarCard('Avatar', 'Ciencia Ficción');
 *    agregarCard('Dune', 'Acción');
 * 5. Muestra en consola: '✓ Agregué 2 películas nuevas'
 * 
 * RESULTADO ESPERADO:
 * - Avatar y Dune aparecen en la página
 * - Puedes usarla para agregar más películas
 */

const ejercicio8 = () => {
  console.log('\n--- EJERCICIO 8: Crear función para agregar cards ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 9: OCULTAR LAS PELÍCULAS
// ================================================================
/**
 * OBJETIVO: Ocultar todos los cards que sean películas
 * 
 * PASOS:
 * 1. Busca todos los badges 'badge-movie' (películas)
 * 2. Para CADA uno:
 *    - Encuentra su card más cercano: badge.closest('.watchlist-card')
 *    - Cambia su display a 'none': card.style.display = 'none'
 * 3. Muestra en consola: '✓ Ocultadas X películas'
 * 
 * PISTA: .closest() busca hacia ARRIBA en el HTML
 * 
 * RESULTADO ESPERADO:
 * - Los cards de películas desaparecen
 * - Solo quedan visible las series
 * - Para mostrarlas de nuevo, actualiza la página (F5)
 */

const ejercicio9 = () => {
  console.log('\n--- EJERCICIO 9: Ocultar todas las películas ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// EJERCICIO 10: ACTUALIZAR ESTADÍSTICAS
// ================================================================
/**
 * OBJETIVO: Actualizar los números de la stats-bar automáticamente
 * 
 * PASOS:
 * 1. Obtén el grid: document.querySelector('.watchlist-grid')
 * 2. Cuenta:
 *    - Total de cards: grid.querySelectorAll('.watchlist-card').length
 *    - Películas: grid.querySelectorAll('.badge-movie').length
 *    - Series: grid.querySelectorAll('.badge-series').length
 *    - Vistos: grid.querySelectorAll('.badge-watched').length
 * 3. Busca los números de las stats: document.querySelectorAll('.stat-item strong')
 * 4. Cambia cada número:
 *    stats[0].textContent = total;      // Total
 *    stats[1].textContent = peliculas;  // Películas
 *    stats[2].textContent = series;     // Series
 *    stats[3].textContent = vistos;     // Vistos
 * 5. Muestra en consola los números actualizados
 * 
 * RESULTADO ESPERADO:
 * - Los números en la stats-bar se actualizan
 * - Muestran el conteo correcto
 */

const ejercicio10 = () => {
  console.log('\n--- EJERCICIO 10: Actualizar estadísticas ---\n');
  
  // TU CÓDIGO AQUÍ
  
};

// ================================================================
// INSTRUCCIONES FINALES
// ================================================================

console.log(`
╔═══════════════════════════════════════════════════════════╗
║  INSTRUCCIONES PARA COMPLETAR LOS EJERCICIOS            ║
╚═══════════════════════════════════════════════════════════╝

PASO 1: Lee la descripción de cada ejercicio
        (La descripción está en los comentarios /* */)

PASO 2: Completa el código donde dice "// TU CÓDIGO AQUÍ"

PASO 3: En la consola (F12), ejecuta el ejercicio:
        ejercicio1()
        ejercicio2()
        etc...

PASO 4: Verifica:
        ✓ ¿Aparece mensaje en consola?
        ✓ ¿Cambió algo en la página?
        ✓ ¿El resultado es el esperado?

SI NO FUNCIONA:
  • Actualiza la página (F5)
  • Revisa que escribiste bien
  • Mira el archivo "2-ejercicios-simple.js" para ver cómo se hace
  • ¡Pregunta!

CONSEJOS:
✓ Haz un ejercicio a la vez
✓ No saltes de uno a otro
✓ Lee bien qué pide
✓ Si ves un error rojo, LEES QUÉ DICE
✓ Las PISTAS te ayudan a pensar

¡ADELANTE! 🚀
`);
