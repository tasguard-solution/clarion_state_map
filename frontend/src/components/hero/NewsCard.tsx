// src/components/hero/NewsCard.tsx
// A reusable card component for a single news article.
// Used by NewsReport — accepts a NewsArticle and renders image, title, summary, link.

import { type NewsArticle } from "../../data/newsArticles";
import CustomButton from "../CustomButton";
import "./NewsCard.css";

type NewsCardProps = {
  article: NewsArticle;
};

function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="news-card">
      <img src={article.imageUrl} alt={article.imageAlt} />
      <div className="news-writeup">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <a href={article.url}></a>
      </div>
    </article>
  );
}

export default NewsCard;
