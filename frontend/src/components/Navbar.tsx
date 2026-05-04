// src/components/Navbar.tsx

import "./Navbar.css";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import SearchBar from "./navbar/SearchBar";
import Logo from "./navbar/Logo";
import Carousel from "./navbar/Carousel";
import { useState, useEffect, useRef } from "react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error || !user) {
          await supabase.auth.signOut();
          handleSync(null);
        } else {
          handleSync(session);
        }
      } else {
        handleSync(null);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSync(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Handle clicking outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    }
    setDropdownOpen(false);
  };

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
              <div className="profile-container" ref={dropdownRef}>
                <div 
                  className={`profile-icon-wrapper ${dropdownOpen ? 'active' : ''}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <img src={profileIcon} alt="Profile" className="profile-icon" />
                </div>
                
                {dropdownOpen && (
                  <div className="profile-dropdown">
                    <div className="dropdown-header">
                      <span className="user-email">{session.user.email}</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link to="/profile" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                      Profile
                    </Link>
                    <Link to="/settings" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item sign-out" onClick={handleSignOut}>
                      Sign Out
                    </button>
                  </div>
                )}
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

