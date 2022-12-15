import express from "express";
import contactoController from "../controllers/contactoController.js";

const
{
    nuevo
} = contactoController;

const router = express.Router();

router.post("/contacto", nuevo);

export default router;