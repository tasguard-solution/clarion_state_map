import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./Home.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <footer id="footer">
        <p>
          Made by{"Tasker"}
          <a
            href="https://github.com/cherryland120"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
