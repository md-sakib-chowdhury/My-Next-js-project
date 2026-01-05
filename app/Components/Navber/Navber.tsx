"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./navber.css";

const Navber = () => {
  const [open, setOpen] = useState(false);

  // Menu close করার function
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            DEPOT
          </Link>

          <Menu
            className="menu-icon"
            size={26}
            onClick={() => setOpen(true)}
          />
        </div>
      </header>

      {/* ===== OVERLAY MENU ===== */}
      <div className={`overlay ${open ? "active" : ""}`}>
        <X
          size={28}
          className="close-icon"
          onClick={() => setOpen(false)}
        />

        <div className="overlay-content">
          <h1 className="overlay-logo">DEPOT</h1>
          <p className="overlay-sub">WELCOME TO DEPOT</p>

          <nav className="overlay-menu">
            <Link href="/homepage" onClick={handleLinkClick}>
              HOMEPAGE
            </Link>
            <Link href="/shop" onClick={handleLinkClick}>
              SHOP
            </Link>
            <Link href="/landing" onClick={handleLinkClick}>
              LANDING PAGE
            </Link>
            <Link href="/contact" onClick={handleLinkClick}>
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navber; 
