import z from "zod";

export const analyticsResponseSchema = z.object({
  totalLinks: z.number().int().nonnegative(),
  totalClicks: z.number().int().nonnegative(),
})

export type AnalyticsResponseDTO = z.infer<typeof analyticsResponseSchema>;