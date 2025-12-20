import { Request, Response, Router } from "express";
import shortenRouter from "../features/shorten/shorten.router"
import redirectRouter from "../features/redirect/redirect.router"
import analyticsRouter from "../features/analytics/analytics.router"

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  res.send("Hello World!");
})

router.use("/links", shortenRouter);
router.use("/analytics", analyticsRouter);
router.use(redirectRouter);

export default router;