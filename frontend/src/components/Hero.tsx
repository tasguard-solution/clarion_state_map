import "./Hero.css";
import MapView from "./hero/MapView";
import terror from "../assets/terror.png";

function Hero() {
  return (
    <section id="hero">
      <div className="news-report">
        <img src={terror} alt="Clarion State Map Logo" className="logo" />
        <h1>Clarion State Map</h1>
        <p>
          Explore the socio-economic landscape of Nigeria with our interactive
          state map. Dive into comprehensive data on population, GDP, and more,
          all visualized for easy understanding. Whether you're a researcher,
          student, or just curious, our map offers valuable insights into
          Nigeria's diverse regions. Start your exploration today!
        </p>
      </div>
      <MapView />
    </section>
  );
}

export default Hero;
