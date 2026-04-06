/**
 * ================================================================
 * INTRODUCCIÓN AL DOM - PARA PRINCIPIANTES
 * Proyecto: Watchlist App
 * ================================================================
 * 
 * FASES (Muy simple):
 * 1. ¿QUÉ ES EL DOM?
 * 2. BUSCAR ELEMENTOS
 * 3. CAMBIAR ELEMENTOS
 * 4. CREAR ELEMENTOS
 * 
 * Copia en la consola (F12) y ejecuta:
 * fase1()
 * fase2()
 * fase3()
 * fase4()
 */

// ================================================================
// FASE 1: ¿QUÉ ES EL DOM?
// ================================================================

const fase1 = () => {
  console.clear();
  console.log('╔════════════════════════════════════════╗');
  console.log('║    FASE 1: ¿QUÉ ES EL DOM?             ║');
  console.log('╚════════════════════════════════════════╝\n');

  console.log('El DOM es el HTML que ves en la página.');
  console.log('Lo controlas con JavaScript.\n');

  console.log('Puedes acceder al DOM así:');
  console.log('  document');
  console.log('  document.body');
  console.log('  document.head\n');

  console.log('Ya entiendes qué es el DOM.\n');
}

// ================================================================
// FASE 2: BUSCAR ELEMENTOS
// ================================================================

const fase2 = () => {
  console.clear();
  console.log('╔════════════════════════════════════════╗');
  console.log('║    FASE 2: BUSCAR ELEMENTOS            ║');
  console.log('╚════════════════════════════════════════╝\n');

  console.log('Para trabajar con un elemento, primero lo buscas.\n');

  // Ejemplo 1
  console.log('--- EJEMPLO 1: Buscar el título ---');


  // Ejemplo 2
  console.log('\n--- EJEMPLO 2: Buscar todos los cards ---');

  // Ejemplo 3: Mostrar los títulos
  console.log('\n--- EJEMPLO 3: Mostrar los títulos ---');

}

// ================================================================
// FASE 3: CAMBIAR ELEMENTOS
// ================================================================

const fase3 = () => {
  console.clear();
  console.log('╔════════════════════════════════════════╗');
  console.log('║    FASE 3: CAMBIAR ELEMENTOS           ║');
  console.log('╚════════════════════════════════════════╝\n');

  console.log('Puedes cambiar el texto, colores, estilos, etc.\n');

  // Cambiar texto
  console.log('--- CAMBIAR TEXTO ---');


  // Cambiar color
  console.log('--- CAMBIAR COLOR ---');

  // Cambiar tamaño
  console.log('--- CAMBIAR TAMAÑO ---');
}

// ================================================================
// FASE 4: CREAR ELEMENTOS
// ================================================================

const fase4 = () => {
  console.clear();
  console.log('╔════════════════════════════════════════╗');
  console.log('║    FASE 4: CREAR ELEMENTOS             ║');
  console.log('╚════════════════════════════════════════╝\n');

  console.log('Puedes crear elementos nuevos desde cero.\n');

  console.log('--- PASO 1: Crear un elemento ---');


  console.log('\n--- PASO 2: Agregarle clase ---');

  console.log('\n--- PASO 3: Agregarle contenido ---');


}

// ================================================================
// FUNCIÓN PARA RESTAURAR
// ================================================================

const restaurar = () => {
  location.reload();
}

// ================================================================
// MENSAJE INICIAL
// ================================================================

console.log(`
╔════════════════════════════════════════════════════════╗
║  BIENVENIDO - INTRODUCCIÓN AL DOM PARA PRINCIPIANTES   ║
╚════════════════════════════════════════════════════════╝

En la consola (F12), escribe una de estas:

  fase1()     ← Qué es el DOM
  fase2()     ← Buscar elementos
  fase3()     ← Cambiar elementos
  fase4()     ← Crear elementos

También puedes:
  restaurar() ← Volver a cargar la página

¡Adelante!
`);
