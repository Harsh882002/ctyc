import React, { useState, useEffect } from "react"
import "./Header.css"

const Header = ({ setView, currentView }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleNavClick = (view, e) => {
    e.preventDefault();
    setView(view);
    closeMenu();
    if (view === 'home') {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="header-flex">
          <a href="/" className="logo" onClick={(e) => handleNavClick('home', e)}>
            <img src="/logo/ctyc.png" alt="CTYC 2026 Logo" className="logo-img" />
            <span className="logo-text">CTYC 2026</span>
          </a>

          <button className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
            <a href="#home" className={currentView === 'home' ? 'active' : ''} onClick={(e) => handleNavClick('home', e)}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick('home', e)}>Mission</a>
            <a href="#journey" onClick={(e) => handleNavClick('home', e)}>Journey</a>
            <a href="#gallery" className={currentView === 'gallery' ? 'active' : ''} onClick={(e) => handleNavClick('gallery', e)}>Gallery</a>
            <a href="#contact" className="btn btn-primary btn-nav" onClick={(e) => handleNavClick('home', e)}>Join</a>
          </nav>
        </div>
      </div>
      {isMenuOpen && <div className="header-backdrop" onClick={closeMenu}></div>}
    </header>
  )
}

export default Header
