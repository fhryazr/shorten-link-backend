import { Router } from "express";
import { RedirectController } from "./redirect.controller";
import { validateRequestParams } from "../../middleware/validate";
import { shortCodeParamSchema } from "../shorten/dtos/shorten-response.dto";


const router = Router();
const controller = new RedirectController();

router.get("/:shortCode", validateRequestParams(shortCodeParamSchema), controller.handleRedirect);

export default router;