import { Router } from "express";
import musicController from "../controllers/music.controller.js";
import historyController from "../controllers/history.controller.js";

const router = Router();

router.get('/music', musicController.search)
router.get('/history', historyController)

export default router;