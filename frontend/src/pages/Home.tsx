// src/pages/Home.tsx
// The homepage. Layout (Navbar + Footer) is handled by App.tsx's Layout wrapper
// — don't import them here again.

import Hero from "../components/Hero";
import "./Home.css";
import Databar from "../components/Databar";

function Home() {
  return (<>
    <Hero />
    <Databar />
  </>);
}

export default Home;
