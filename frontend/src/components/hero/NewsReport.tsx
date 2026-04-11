import "./NewsReport.css";
import terror from "../../assets/terror.png";

function NewsReport() {
  return (
    <div className="news-report">
      <img src={terror} alt="Clarion State Map Logo" className="logo" />
      <h1>Violence in Kwara State</h1>
      <p>
        <strong>Breaking News:</strong> Terrorists have killed a forest guard
        commander and four others in a recent attack in Kwara State. The
        incident highlights ongoing security challenges in the region and the
        risks faced by those protecting Nigeria’s forests.
      </p>
      <a
        href="https://truthnigeria.com/2026/04/terrorists-kill-forest-guard-commander-four-others-in-kwara-attack/"
        target="_blank"
        rel="noopener noreferrer"
        className="read-more-btn"
      >
        Read More
      </a>
    </div>
  );
}

export default NewsReport;
