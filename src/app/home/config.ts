export const DESIGN_WIDTH = 1728;

export const HOME_SECTION_POSITIONS = {
  "SOME WORK": 1000,
  "SHORT ABOUT": 2100,
  PASSION: 3200,
} as const;

export const FOOTER_SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@daafheijnekamp?is_from_webapp=1&sender_device=pc",
  instagram: "https://www.instagram.com/daafh_07?igsh=ZmdwZDJvMzd4b3Zu&utm_source=qr",
  linkedin: "https://www.linkedin.com/in/daaf-heijnekamp-95219026a/",
} as const;

export type HomeSectionName = keyof typeof HOME_SECTION_POSITIONS;
export type TrackName = "zandvoort" | "rb-ring";
