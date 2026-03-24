import usuarioRepository from "../repositories/usuario.repository.js";

import { crearUsuario } from '../models/User.model.js'

class AuthService {

    registrarUsuario = async ({ nombre, email, password }) => {
        const existe = await usuarioRepository.obtenerPorEmail(email);

        if (existe) {
            const error = new Error('El correo ya está registrado.');
            error.status = 409;
            throw error;
        }
        const nuevoUsuario = crearUsuario({ nombre, email, password });

        const guardado = await usuarioRepository.guardar(nuevoUsuario);

        return this._sanitizar(guardado);
    }

    intentarLogin = async ({ email, password }) => {
        const existe = await usuarioRepository.obtenerPorEmail(email);

        if (!existe) {
            const error = new Error('Credenciales incorrectas. 1');
            error.status = 401;
            throw error;
        }

        const coincide = existe.password === password;

        if (!coincide) {
            const err = new Error('Credenciales incorrectas.');
            err.status = 401;
            throw err;
        }

        const token = this._generarToken(existe);

        return { user: this._sanitizar(existe), token };
    }

    _generarToken = ({ id, email, rol }) => `${id}|${email}|${rol}`;

    _sanitizar = (usuario) => {
        const { password, ...resto } = usuario;
        return resto;
    }
}



const authService = new AuthService();

export default authService;