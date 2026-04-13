// src/components/hero/NewsCard.tsx
// A reusable card component for a single news article.
// Used by NewsReport — accepts a NewsArticle and renders image, title, summary, link.

import { type NewsArticle } from "../../data/newsArticles";
import "./NewsCard.css";

type NewsCardProps = {
  article: NewsArticle;
};

function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="news-card">
      <img src={article.imageUrl} alt={article.imageAlt} />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <div className="news-card-footer">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </article>
  );
}

export default NewsCard;
