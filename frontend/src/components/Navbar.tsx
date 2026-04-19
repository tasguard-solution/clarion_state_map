// src/components/Navbar.tsx

import "./Navbar.css";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import SearchBar from "./navbar/SearchBar";
import Logo from "./navbar/Logo";
import Carousel from "./navbar/Carousel";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import profileIcon from "../assets/Profile by Rizky Studio.svg";

// ── Constants (not state — defined outside the component) ──────────────────
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Map", path: "/map" },
];

function Navbar() {
  /////////////////////////////////////////
  // This code snippet shows how to change something on user sign in or sign out
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const handleSync = async (currentSession: any) => {
      setSession(currentSession);
      if (currentSession?.user?.email) {
        // Sync with backend postgres db
        try {
          await fetch("http://localhost:8000/api/users/sync", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${currentSession.access_token}`,
            },
            body: JSON.stringify({ email: currentSession.user.email }),
          });
        } catch (error) {
          console.error("Failed to sync user with backend", error);
        }
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSync(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSync(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // This code snippet shows how to change something on user sign in or sign out
  /////////////////////////////////////////

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
            {session ? (
              <div className="profile-icon-wrapper">
                <img src={profileIcon} alt="Profile" className="profile-icon" />
              </div>
            ) : (
              <CustomButton text="Sign Up" href="/signup" />
            )}
          </aside>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
