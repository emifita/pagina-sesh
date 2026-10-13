import { Router } from "express";
import musicController from "../controllers/music.controller.js";
import historyController from "../controllers/history.controller.js";
import removeHistoryController from "../controllers/removeHistory.controller.js";
import validateMusic from "../validators/music.validator.js";

const router = Router();

// Validate searches before the controller; history routes read and remove saved entries.
router.get('/music', validateMusic, musicController.search)
router.get('/history', historyController)
router.delete('/history/:index', removeHistoryController)

export default router;
