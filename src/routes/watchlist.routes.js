


import { Router } from "express";
import { mostrarHome } from "../controllers/watchlist.controller.js";
import service from '../services/watchlist.service.js'

const router = Router();

router.get('/', mostrarHome);

router.get('/:id', async (req, res) => {
    const userId = 1774545626897;
    const id = req.params.id;

    const watch = await service.obtenerUno({ id, userId });
    console.log(watch);

    res.render('item', { watch: watch });
});

export {
    router
}