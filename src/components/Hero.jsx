"use client"

import { useState, useEffect } from "react"

const Hero = () => {
  const [currentEmoji, setCurrentEmoji] = useState(0)
  const emojis = ["🚀", "💡", "⚡", "🔥", "✨", "🎯"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: "150px", // ✅ fixes header overlap
        display: "flex",
        alignItems: "center",
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 0, 110, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 245, 255, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(57, 255, 20, 0.2) 0%, transparent 50%),
          var(--dark-bg)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "100px",
          height: "100px",
          background: "var(--gradient-1)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: "150px",
          height: "150px",
          background: "var(--gradient-2)",
          borderRadius: "50%",
          filter: "blur(50px)",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />

      <div className="container">
        <div style={{ textAlign: "center", color: "white", maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "4rem",
              marginBottom: "2rem",
              animation: "pulse 2s infinite",
            }}
          >
            {emojis[currentEmoji]}
          </div>

          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: "900",
              marginBottom: "2rem",
              lineHeight: 1.1,
              background: "var(--gradient-1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "glow 3s ease-in-out infinite alternate",
            }}
          >
            CATCH THEM
            <br />
            <span
              style={{
                background: "var(--gradient-2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              YOUNG 2025
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.4rem",
              marginBottom: "3rem",
              opacity: 0.9,
              fontFamily: "JetBrains Mono, monospace",
              textTransform: "uppercase",
              letterSpacing: "2px",
              animation: "fadeInUp 1s ease-out 0.5s both",
            }}
          >
            {"< INNOVATE. CREATE. DOMINATE />"}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              marginBottom: "4rem",
              flexWrap: "wrap",
              animation: "fadeInUp 1s ease-out 0.8s both",
            }}
          >
            {[
              { label: "PARTICIPANTS", value: "100+", gradient: "var(--gradient-1)" },
              { label: "PRIZE POOL", value: "₹1 Lakh", gradient: "var(--gradient-2)" },
              { label: "CATEGORIES", value: "5", gradient: "var(--gradient-3)" },
            ].map((item, i) => (
              <div key={i} className="floating" style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "900",
                    background: item.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.value}
                </div>
                <p style={{ fontFamily: "JetBrains Mono", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeInUp 1s ease-out 1.2s both",
            }}
          >
            <a
              href="https://forms.gle/jndSKkqZ5oFieHhR8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "1rem 2.5rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#fff",
                background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                borderRadius: "50px",
                boxShadow: "0 10px 25px rgba(255, 75, 43, 0.5)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                animation: "pulse-glow 2s infinite",
              }}
            >
              🚀 JOIN THE REVOLUTION
            </a>

            <style jsx>{`
              @keyframes pulse-glow {
                0% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(255, 75, 43, 0.7);
                }
                70% {
                  transform: scale(1.05);
                  box-shadow: 0 0 0 15px rgba(255, 75, 43, 0);
                }
                100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(255, 75, 43, 0);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
