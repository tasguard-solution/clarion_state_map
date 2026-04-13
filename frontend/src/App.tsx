import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import "./styles/colors.css";

function App() {
  return (
    <Routes>
      {/* Layout wraps every route: gives all pages Navbar + Footer for free */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Route>
    </Routes>
  );
}

export default App;
