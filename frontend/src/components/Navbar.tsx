// src/components/Navbar.tsx

import "./Navbar.css";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import SearchBar from "./navbar/SearchBar";
import Logo from "./navbar/Logo";
import Carousel from "./navbar/Carousel";

// ── Constants (not state — defined outside the component) ──────────────────
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Map", path: "/map" },
];

function Navbar() {
  return (
    <nav id="navbar">
      <Logo />
      <div data-scheme="primary" data-menu-container="true" className="taskbar">
        <div className="navbar-content">
          <div role="menu" className="left-menu">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.path} className="nav-item">
                {link.label}
              </Link>
            ))}
          </div>
          <Carousel />
          <aside className="right-menu">
            <SearchBar />
            <CustomButton text="Sign Up" href="/signup" />
          </aside>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
