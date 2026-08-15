import { Router } from "express";
import musicController from "../controllers/music.controller.js";

const router = Router();

router.get('/music', musicController.search)

export default router;