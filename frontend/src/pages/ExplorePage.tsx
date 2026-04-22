// src/pages/ExplorePage.tsx
// Landing page for a specific state's data explorer.
// Route: /explore/:stateId
// Shows a grid of data categories; clicking one goes to /explore/:stateId/:category

import { Link, useParams } from "react-router-dom";
import "./ExplorePage.css";

type Category = {
  id: string;
  label: string;
  icon: string;
  description: string;
  available: boolean;
};

const CATEGORIES: Category[] = [
  {
    id: "election",
    label: "Election",
    icon: "🗳️",
    description: "2023 Presidential results mapped by LGA — see which party won where.",
    available: true,
  },
  {
    id: "population",
    label: "Population",
    icon: "👥",
    description: "Demographic breakdown, density estimates, and growth trends by LGA.",
    available: false,
  },
  {
    id: "economy",
    label: "Economy",
    icon: "💰",
    description: "GDP contributions, income levels, and major industry data.",
    available: false,
  },
  {
    id: "housing",
    label: "Housing",
    icon: "🏠",
    description: "Housing density, household sizes, and construction data from NBS.",
    available: false,
  },
  {
    id: "health",
    label: "Health",
    icon: "🏥",
    description: "Healthcare facility access, mortality rates, and maternal health stats.",
    available: false,
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    icon: "⚡",
    description: "Roads, electricity, water supply access  across local governments.",
    available: false,
  },
];

// Human-readable state name fallback
function formatStateName(id: string): string {
  return id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ExplorePage() {
  const { stateId = "lagos" } = useParams<{ stateId: string }>();
  const stateName = formatStateName(stateId);

  return (
    <div className="explore-page">
      {/* ── Dark editorial header ── */}
      <div className="explore-header">
        <div className="explore-header-noise" />
        <div className="explore-header-content">
          <Link to="/" className="explore-breadcrumb">
            ← Back to Nigeria Map
          </Link>
          <h1 className="explore-state-title">{stateName}.</h1>
          <p className="explore-state-subtitle">
            Explore structured data across all local government areas
          </p>
          <div className="explore-header-accent" />
        </div>
      </div>

      {/* ── Category grid ── */}
      <div className="explore-body">
        <p className="explore-section-label">Choose a Data Category</p>
        <div className="explore-grid">
          {CATEGORIES.map((cat) =>
            cat.available ? (
              <Link
                key={cat.id}
                to={`/explore/${stateId}/${cat.id}`}
                className="explore-card"
              >
                <span className="explore-card-icon">{cat.icon}</span>
                <h2 className="explore-card-title">{cat.label}</h2>
                <p className="explore-card-desc">{cat.description}</p>
                <span className="explore-card-tag">Explore →</span>
              </Link>
            ) : (
              <div key={cat.id} className="explore-card" style={{ opacity: 0.5, cursor: "default" }}>
                <span className="explore-card-icon">{cat.icon}</span>
                <h2 className="explore-card-title">{cat.label}</h2>
                <p className="explore-card-desc">{cat.description}</p>
                <span className="explore-card-tag coming-soon">Coming Soon</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
