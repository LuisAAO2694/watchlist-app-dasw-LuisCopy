/**
 * 1. IMPORTACIONES DE EXPRESS
 * Traemos 'Router' para crear un mini-paquete de rutas independiente.
 * 'request' y 'response' se importan a veces solo para ayudar al 
 * autocompletado del editor (IntelliSense).
 */
import { request, response, Router } from 'express';

// Inicializamos el enrutador
const router = Router();

/**
 * 2. RUTA DE REGISTRO (POST)
 * Usamos POST porque estamos enviando datos sensibles (usuario, contraseña) 
 * para crear un nuevo recurso en la base de datos.
 * * @param {request} req - Contiene los datos que envía el usuario (en req.body).
 * @param {response} res - Objeto para enviar la respuesta al cliente.
 */
router.post('/registro', (req = request, res = response) => {
    // Aquí iría la lógica para guardar en la base de datos.
    // Por ahora, devolvemos un JSON de éxito y un código 201 (Created).
    res.status(201).json({
        mensaje: 'Usuario creado exitosamente.'
    });
});

/**
 * 3. RUTA DE INGRESO / LOGIN (POST)
 * También usamos POST para proteger las credenciales en el cuerpo de la petición.
 */
router.post('/ingresar', (req, res) => {
    // Pendiente: Lógica de validación de credenciales y generación de Token (JWT).
});

/**
 * 4. EXPORTACIÓN
 * Exportamos el objeto 'router' para que pueda ser importado en el 
 * archivo central de rutas (index.api.route.js).
 */
export { router };