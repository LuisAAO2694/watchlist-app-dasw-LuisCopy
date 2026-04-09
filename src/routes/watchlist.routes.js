


import { Router } from "express";
import { mostrarHome } from "../controllers/watchlist.controller.js";

const router = Router();

router.get('/home', mostrarHome);


export {
    router
}