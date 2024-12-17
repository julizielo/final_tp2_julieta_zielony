import { Router } from "express";
import routenotas from "./routenotas.js";

const router = Router();
router.use("/nota", routenotas);

export default router;