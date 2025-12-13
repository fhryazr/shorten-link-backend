import { ShortenRepository } from "../shorten/shorten.repository";

export class RedirectService {
  private repo = new ShortenRepository();

  async getRedirectUrl(shortCode: string) {
    const link = await this.repo.getByShortCode(shortCode);

    if (!link) {
      return null;
    }

    this.repo.incrementAccessCount(link.id).catch(err =>
      console.error('Failed to increment access count:', err)
    );

    return link?.url;
  }
}