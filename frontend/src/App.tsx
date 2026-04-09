import Navbar from "./components/Navbar";
import "./styles/colors.css";
import "./App.css";

function App() {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="center"></section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
