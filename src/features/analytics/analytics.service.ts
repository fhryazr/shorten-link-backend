import { ShortenRepository } from "../shorten/shorten.repository";
import { AnalyticsResponseDTO } from "./dto/analytics-response.dto";

export class AnalyticsService {
  private repo = new ShortenRepository();

  async getAnalyticsOverview(): Promise<AnalyticsResponseDTO> {
    const totalLinks = await this.repo.countLinks();
    const totalClicks = await this.repo.countTotalClicks();

    return {
      totalLinks,
      totalClicks
    };
  }
}