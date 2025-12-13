import { Router } from "express";
import { RedirectController } from "./redirect.controller";


const router = Router();
const controller = new RedirectController();

router.get("/:shortCode", controller.handleRedirect);

export default router;