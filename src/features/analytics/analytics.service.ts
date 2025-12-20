import { ShortenRepository } from "../shorten/shorten.repository";
import { AnalyticsResponseDTO } from "./dto/analytics-response.dto";

export class AnalyticsService {
  private repo = new ShortenRepository();

  async getAnalyticsOverview(userId?: string): Promise<AnalyticsResponseDTO> {
    const totalLinks = await this.repo.countLinks(userId);
    const totalClicks = await this.repo.countTotalClicks(userId);

    return {
      totalLinks,
      totalClicks
    };
  }
}