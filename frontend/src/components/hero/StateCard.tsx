import "./StateCard.css";
import { type StateInfo } from "../../data/stateHints";

type StateCardProps = {
  article: Partial<StateInfo>;
  displayType: "population" | "gdp" | "fertility" | "voters";
  label?: string;
  unit?: string;
};

function StateCard({ article, displayType, label, unit }: StateCardProps) {
  let value: string | number | undefined;
  switch (displayType) {
    case "population":
      value = article.population;
      break;
    case "gdp":
      value = article.gdp;
      break;
    case "fertility":
      value = article.fertility;
      break;
    case "voters":
      value = article.voters;
      break;
    default:
      value = undefined;
  }

  const displayValue =
    value !== undefined ? `${value} ${unit || ""}` : "No data";
  const hasData = value !== undefined;

  return (
    <article className={`state-card ${!hasData ? "placeholder" : ""}`}>
      {/* Optionally show an image if you have one */}
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.imageAlt || ""}
          className="state-image"
        />
      )}
      <div className="overlay-content">
        <span className="stat">{displayValue}</span>
        <h2 className="label">{label || displayType.toUpperCase()}</h2>
      </div>
    </article>
  );
}

export default StateCard;
