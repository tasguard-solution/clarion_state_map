import "./StateCard.css";
import { type StateInfo } from "../../data/stateHints";

type StateCardProps = {
  article: Partial<StateInfo>;
  displayType: "population" | "gdp" | "fertility" | "voters";
  label?: string;
  unit?: string;
};

function formatNumber(num: number): string {
  if (num >= 1_000_000_000_000) return (num / 1_000_000_000_000).toFixed(2) + "T";
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  return num.toLocaleString();
}

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

  let displayValue = "No data";
  if (value !== undefined) {
    if (typeof value === "number") {
      const formatted = formatNumber(value);
      if (unit === "USD") {
        displayValue = `$${formatted}`;
      } else if (unit === "NGN") {
        displayValue = `₦${formatted}`;
      } else {
        displayValue = `${formatted} ${unit || ""}`;
      }
    } else {
      displayValue = `${value} ${unit || ""}`;
    }
  }
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
