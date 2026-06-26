export interface TikTokVideo {
  id: string;
  videoId: string;
  title: string;
  titleFr?: string;
}

/**
 * Add your TikTok videos here.
 * videoId is the numeric ID from the TikTok URL:
 * https://www.tiktok.com/@username/video/VIDEO_ID
 */
export const tiktokVideos: TikTokVideo[] = [
  {
    id: "arch-overview",
    videoId: "7345678901234567890",
    title: "How I Design Scalable Software Architecture",
    titleFr: "Comment je conçois une architecture logicielle scalable",
  },
  {
    id: "devops-pipeline",
    videoId: "7345678901234567891",
    title: "CI/CD Pipeline: From Commit to Production in 4 Minutes",
    titleFr: "Pipeline CI/CD : du commit à la production en 4 minutes",
  },
  {
    id: "cloud-tips",
    videoId: "7345678901234567892",
    title: "Cloud Cost Optimization Tips for Startups",
    titleFr: "Conseils d'optimisation des coûts cloud pour les startups",
  },
];
