import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import SignUp from "./pages/SignUp";
import ExplorePage from "./pages/ExplorePage";
import StateDataPage from "./pages/StateDataPage";
import "./styles/colors.css";

function App() {
  return (
    <Routes>
      {/* Layout wraps every route: gives all pages Navbar + Footer for free */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore/:stateId" element={<ExplorePage />} />
        <Route path="/explore/:stateId/:category" element={<StateDataPage />} />
        <Route path="/explore/:stateId/:category/:year" element={<StateDataPage />} />
      </Route>
    </Routes>
  );
}

export default App;
