const watchlist = [
    {
        id: 1774629703290,
        userId: 1774545626897,
        titulo: "Inception",
        tipo: "pelicula",
        genero: "Ciencia Ficción",
        rating: 10,
        estado: "visto",
        coverUrl: "https://example.com/inception.jpg",
        notas: "Estreno 2010",
        createdAt: "2026-04-08T14:30:00.000Z",
        updatedAt: "2026-04-08T14:30:00.000Z"
    },
    {
        id: 1774629703291,
        userId: 1774545626897,
        titulo: "Breaking Bad",
        tipo: "serie",
        genero: "Drama",
        rating: 9,
        estado: "visto",
        coverUrl: "https://example.com/breaking-bad.jpg",
        notas: "2008-2013",
        createdAt: "2026-04-08T14:30:01.000Z",
        updatedAt: "2026-04-08T14:30:01.000Z"
    },
    {
        id: 1774629703292,
        userId: 1774545626897,
        titulo: "The Dark Knight",
        tipo: "pelicula",
        genero: "Acción",
        rating: 8,
        estado: "viendo",
        coverUrl: "https://example.com/dark-knight.jpg",
        notas: "Estreno 2008",
        createdAt: "2026-04-08T14:30:02.000Z",
        updatedAt: "2026-04-08T14:30:02.000Z"
    },
    {
        id: 1774629703293,
        userId: 1774545626897,
        titulo: "Stranger Things",
        tipo: "serie",
        genero: "Ciencia Ficción",
        rating: 9,
        estado: "pendiente",
        coverUrl: "https://example.com/stranger-things.jpg",
        notas: "2016-Presente",
        createdAt: "2026-04-08T14:30:03.000Z",
        updatedAt: "2026-04-08T14:30:03.000Z"
    },
    {
        id: 1774629703294,
        userId: 1774545626897,
        titulo: "Interstellar",
        tipo: "pelicula",
        genero: "Ciencia Ficción",
        rating: 10,
        estado: "visto",
        coverUrl: "https://example.com/interstellar.jpg",
        notas: "Estreno 2014",
        createdAt: "2026-04-08T14:30:04.000Z",
        updatedAt: "2026-04-08T14:30:04.000Z"
    },
    {
        id: 1774629703295,
        userId: 1774545626897,
        titulo: "The Office",
        tipo: "serie",
        genero: "Comedia",
        rating: 8,
        estado: "viendo",
        coverUrl: "https://example.com/the-office.jpg",
        notas: "2005-2013",
        createdAt: "2026-04-08T14:30:05.000Z",
        updatedAt: "2026-04-08T14:30:05.000Z"
    },
    {
        id: 1742747723001,
        userId: 1774545626897,
        titulo: "Inception",
        tipo: "movie",
        genero: "Sci-Fi",
        rating: 9.5,
        estado: "visto",
        coverUrl: "https://example.com/covers/inception.jpg",
        notas: "Obra maestra, ver de nuevo para entender el final.",
        createdAt: "2026-03-23T10:40:00.000Z",
        updatedAt: "2026-03-23T10:40:00.000Z"
    },
    {
        id: 1742747723002,
        userId: 1774545626897,
        titulo: "The Bear",
        tipo: "serie",
        genero: "Drama",
        rating: 7.3,
        estado: "",
        coverUrl: "https://example.com/covers/the-bear.png",
        notas: "Me estresa pero es excelente.",
        createdAt: "2026-03-23T10:45:15.000Z",
        updatedAt: "2026-03-23T11:00:00.000Z"
    },
    {
        id: 1742747723003,
        userId: 1774545626897,
        titulo: "Succession",
        tipo: "serie",
        genero: "Drama / Comedy",
        rating: 8.9,
        estado: "mirando",
        coverUrl: "",
        notes: "Recomendada por Lucas.",
        createdAt: "2026-03-23T10:50:00.000Z",
        updatedAt: "2026-03-23T10:50:00.000Z"
    },
    {
        id: 1742747723004,
        userId: 1774545626897,
        titulo: "Blade Runner 2049",
        tipo: "movie",
        genero: "Cyberpunk",
        rating: 8.0,
        estado: "visto",
        coverUrl: "https://example.com/covers/br2049.jpg",
        notas: "",
        createdAt: "2026-03-23T11:10:22.000Z",
        updatedAt: "2026-03-23T11:10:22.000Z"
    }
];


const obtenerData = () => {
    return watchlist;
}


const obtenerEstrellas = (rating10) => {
    const rating5 = rating10 / 2;

    const completas = Math.floor(rating5);

    const decimal = rating5 - completas;

    let medias = 0;
    let finales = completas;

    if (decimal >= .75) {
        finales += 1;
    }
    else if (decimal >= .25)
        medias = 1;

    return {
        completas: finales,
        medias: medias,
        rating: rating5
    }
}

const crearTarjeta = ({ id, userId, titulo,
    tipo,
    genero,
    rating,
    estado,
    coverUrl,
    notas,
    createdAt,
    updatedAt }) => {

    const tarjeta = document.createElement('div');

    tarjeta.classList.add('watchlist-card');

    tarjeta.setAttribute('data-id', id);

    const { completas, medias, rating: rating5 } = obtenerEstrellas(rating);


    let estrellas = '';
    for (let i = 0; i < completas; i++)
        estrellas += '<i class="bi bi-star-fill"></i>';

    for (let i = 0; i < medias; i++)
        estrellas += '<i class="bi bi-star-half"></i>';

    tarjeta.innerHTML = `
    <div class="card-poster">
              <i class="bi bi-tv"></i>
              <div class="card-overlay">
                <div class="card-title">${titulo}</div>
                <div class="card-meta">2008-2013</div>
              </div>
            </div>
            <div class="card-body">
              <div class="card-badges">
                <span class="badge-custom badge-series">${tipo}</span>
                <span class="badge-custom badge-watched">${estado}</span>
              </div>
              <div class="card-rating">
                ${estrellas}
                <span>${rating5}</span>
              </div>
              <div class="card-genre">${genero}</div>
            </div>`;

    /**
 * EJERCICIO: Implementación de Navegación Dinámica
 * * Instrucciones para los alumnos:
 * * 1. Definir el Listener: Escuchamos el evento 'click' sobre el elemento 'tarjeta'.
 * Usamos una arrow function para capturar el objeto 'event'.
 * * 2. Identificar el Contenedor: Usamos 'event.currentTarget' para asegurar que 
 * obtenemos la referencia al elemento que posee el evento (la tarjeta), 
 * incluso si se hace click en un elemento hijo (imagen, texto, etc.).
 * * 3. Extraer Datos: Accedemos a la propiedad 'dataset.id'. Esto leerá el 
 * valor del atributo HTML 'data-id' definido en el marcado.
 * * 4. Control de Flujo: Validamos que el ID exista antes de intentar la 
 * redirección para evitar errores de navegación.
 * * 5. Redirección: Utilizamos el objeto 'window.location' para cambiar la URL 
 * actual por el ID obtenido, usando Template Literals.
 */
    return tarjeta;
}

const renderizarContenido = () => {
    const contenedorTarjetas = document.querySelector('.watchlist-grid');

    const tarjetasData = obtenerData();

    tarjetasData.forEach(t => {
        contenedorTarjetas.appendChild(crearTarjeta(t));
    })
}

const inicializarGrid = () => {
    renderizarContenido();
}

document.addEventListener('DOMContentLoaded', (event) => {
    inicializarGrid();
});