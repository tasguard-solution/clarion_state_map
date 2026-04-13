// src/data/newsArticles.ts
// ─────────────────────────────────────────────────────────
// All news article content lives here.
// To add a new article, copy one of the objects below and fill it in.
// ─────────────────────────────────────────────────────────

export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string; // relative path from /public, or full URL
  imageAlt: string;
  url: string;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "kwara-attack",
    title: "Violence in Kwara State",
    summary:
      "Terrorists have killed a forest guard commander and four others in a recent attack in Kwara State. The incident highlights ongoing security challenges in the region and the risks faced by those protecting Nigeria's forests.",
    imageUrl: "../src/assets/terror.png",
    imageAlt: "Kwara State attack scene",
    url: "https://truthnigeria.com/2026/04/terrorists-kill-forest-guard-commander-four-others-in-kwara-attack/",
  },
  // ── Add more articles below ──────────────────────────────
  // {
  //   id: "lagos-flooding",
  //   title: "Flooding Crisis in Lagos",
  //   summary: "...",
  //   imageUrl: "/lagos-flood.png",
  //   imageAlt: "Lagos flooding",
  //   url: "https://...",
  // },
];
