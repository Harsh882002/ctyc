"use client"

import { useState, useEffect } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: scrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(20px)",
        zIndex: 1000,
        padding: "1rem 0",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(255, 0, 110, 0.3)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "var(--gradient-1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                animation: "pulse 2s infinite",
              }}
            >
              ⚡
            </div>
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  background: "var(--gradient-1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "Space Grotesk",
                }}
              >
                CATCH THEM YOUNG
              </h2>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--neon-blue)",
                  fontFamily: "JetBrains Mono",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                CHALLENGE 2025
              </span>
            </div>
          </div>

          <nav
            style={{
              display: window.innerWidth > 768 ? "flex" : isMenuOpen ? "flex" : "none",
              flexDirection: window.innerWidth > 768 ? "row" : "column",
              position: window.innerWidth > 768 ? "static" : "absolute",
              top: window.innerWidth > 768 ? "auto" : "100%",
              left: 0,
              right: 0,
              background: window.innerWidth > 768 ? "transparent" : "rgba(10, 10, 10, 0.98)",
              padding: window.innerWidth > 768 ? "0" : "2rem",
              gap: window.innerWidth > 768 ? "2rem" : "1rem",
              backdropFilter: "blur(20px)",
              border: window.innerWidth > 768 ? "none" : "1px solid rgba(255, 0, 110, 0.2)",
            }}
          >
            {["HOME", "ABOUT", "COMPETITION", "TIMELINE", "GALLERY", "PRIZES", "CONTACT"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  fontFamily: "JetBrains Mono",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  position: "relative",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 0",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--neon-pink)"
                  e.target.style.textShadow = "0 0 10px var(--neon-pink)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--text-primary)"
                  e.target.style.textShadow = "none"
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            style={{
              display: window.innerWidth > 768 ? "none" : "flex",
              flexDirection: "column",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              gap: "4px",
            }}
          >
            <span
              style={{
                width: "25px",
                height: "3px",
                background: "var(--neon-pink)",
                transition: "all 0.3s ease",
                transform: isMenuOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
                boxShadow: "0 0 10px var(--neon-pink)",
              }}
            />
            <span
              style={{
                width: "25px",
                height: "3px",
                background: "var(--neon-blue)",
                transition: "all 0.3s ease",
                opacity: isMenuOpen ? 0 : 1,
                boxShadow: "0 0 10px var(--neon-blue)",
              }}
            />
            <span
              style={{
                width: "25px",
                height: "3px",
                background: "var(--neon-green)",
                transition: "all 0.3s ease",
                transform: isMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
                boxShadow: "0 0 10px var(--neon-green)",
              }}
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
