import { Request, Response } from "express";
import { AnalyticsService } from "./analytics.service";

export class AnalyticsController {
  private analyticsService = new AnalyticsService();

  getOverview = async (req: Request, res: Response) => {
    try {
      const analyticsDataOverview = await this.analyticsService.getAnalyticsOverview();
      return res.status(200).json(analyticsDataOverview);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}