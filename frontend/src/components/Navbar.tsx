import "./Navbar.css";
import SignUp from "./navbar/SignUp";
import { Link } from "react-router-dom";
import SearchBar from "./navbar/SearchBar";
import Logo from "./navbar/Logo";
import Carousel from "./navbar/Carousel";
function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Map", path: "/map" },
    { label: "Other", path: "/other" },
  ];
  return (
    <nav className="navbar">
      <Logo />
      <div
        id="taskbar"
        data-scheme="primary"
        data-menu-container="true"
        className="taskbar"
      >
        <div className="navbar-content">
          <div role="menu" className="left-menu">
            {navLinks.map((link) => (
              /* Use Link instead of button so it doesn't refresh the page */
              <Link key={link.label} to={link.path} className="nav-item">
                {link.label}
              </Link>
            ))}
          </div>
          <Carousel />
          <aside className="right-menu">
            <SearchBar />
            <SignUp />
          </aside>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
