// src/components/hero/NewsReport.tsx
// Container for news articles. Reads from src/data/newsArticles.ts.
// To add or edit articles, go to that file — don't touch this one.

import { NEWS_ARTICLES } from "../../data/newsArticles";
import NewsCard from "./NewsCard";
import "./NewsReport.css";

function NewsReport() {
  return (
    <section className="news-report">
      <h3 className="news-report-heading">Latest Reports</h3>
      <div className="news-report-list">
        {NEWS_ARTICLES.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default NewsReport;
