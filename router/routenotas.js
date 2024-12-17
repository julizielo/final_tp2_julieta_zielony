import { Router } from "express";
import NotasController from "../controller/notasController.js";

const notasController = new NotasController();
const routenotas = Router();

routenotas.post("/", notasController.guardarNota);
routenotas.get("/", notasController.obtenerNotas);
routenotas.get("/notas", notasController.obtenerNotasPorAlumno);

export default routenotas;