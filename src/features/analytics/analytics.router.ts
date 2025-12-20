import { Router } from "express";
import { AnalyticsController } from "./analytics.controller";
import { requireAuth } from "../../middleware/auth";

const router = Router()
const controller = new AnalyticsController();

router.get("/overview", requireAuth, controller.getOverview);

export default router;