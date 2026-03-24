
import { request, response } from "express";
import authService from "../services/auth.service.js";



const registro = async (req = request, res = response) => {
    try {
        const usuario = await authService.registrarUsuario(req.body);

        res.status(201).json({ mensaje: 'Usuario creado', usuario: usuario });
    } catch (error) {
        res.status(error.status || 500).json({ mensaje: 'Ocurrio un error en la solicitud.', error: error.message });
    }
};

const ingresar = async (req = request, res = response) => {
    try {
        const respuesta = await authService.intentarLogin(req.body);
        res.status(200).json({ mensaje: 'Operacion exitosa.', respuesta: respuesta });
    } catch (error) {
        res.status(error.status || 500).json({ mensaje: 'Ocurrio un error en la solicitud.', error: error.message });
    }
}



export {
    registro,
    ingresar
}