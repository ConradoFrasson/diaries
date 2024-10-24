import { Router } from "express";
import diariesController from "../controllers/diariesController.js"

const router = Router();

router.post("/", diariesController.store)
router.get("/", diariesController.index)
router.get("/:id", diariesController.show)
router.put("/:id", diariesController.update)
router.delete("/:id", diariesController.destroy)

export default router;