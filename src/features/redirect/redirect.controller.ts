import { Request, Response } from "express";
import z from "zod";
import { RedirectService } from "./redirect.service";

export const shortCodeSchema = z.object({
  shortCode: z.string().length(6).regex(/^[A-Za-z0-9_-]+$/, "Invalid shortCode format")
})

export class RedirectController {
  private redirectService = new RedirectService();

  handleRedirect = async (req: Request<{ shortCode: string }>, res: Response) => {
    try {
      const { data, success, error } = shortCodeSchema.safeParse(req.params);

      if (!success) {
        return res.status(400).json({ message: "Invalid short code", errors: error.issues });
      }

      const destinationUrl = await this.redirectService.getRedirectUrl(data.shortCode);

      if (!destinationUrl) {
        return res.status(404).json({ message: "Short link not found" });
      }

      return res.redirect(301, destinationUrl);

    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}