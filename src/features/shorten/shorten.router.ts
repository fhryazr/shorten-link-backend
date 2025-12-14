import { Router } from "express";
import { ShortenController } from "./shorten.controller";
import { validateRequestBody, validateRequestParams, validateRequestQuery } from "../../middleware/validate";
import { getShortenSchema } from "./dtos/get-shorten.dto";
import { createShortenSchema } from "./dtos/create-shorten.dto";
import { idParamSchema, shortCodeParamSchema } from "./dtos/shorten-response.dto";


const router = Router();
const controller = new ShortenController();

router.get("/", validateRequestQuery(getShortenSchema), controller.getLinks)
router.post("/", validateRequestBody(createShortenSchema), controller.createLink)
router.patch("/:id", validateRequestParams(idParamSchema), validateRequestBody(createShortenSchema), controller.updateLink)
router.delete("/:shortCode", validateRequestParams(shortCodeParamSchema), controller.deleteLink)

export default router;