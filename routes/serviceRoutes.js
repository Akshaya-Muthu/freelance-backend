import express from "express";
import { getAllServices, createService, getServiceById } from "../controllers/serviceController.js";

const router = express.Router();

router.get("/", getAllServices);
router.post("/", createService);
router.get("/:id", getServiceById);

export default router;
