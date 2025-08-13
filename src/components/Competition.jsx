"use client"
import { useState, useEffect } from "react"

const Competition = () => {
  const [rulesText, setRulesText] = useState("")
  const [selectedRule, setSelectedRule] = useState("")

  useEffect(() => {
    fetch("/rules.txt")
      .then((res) => res.text())
      .then((text) => setRulesText(text))
  }, [])

  const getRuleByKeyword = (keyword) => {
    const sections = rulesText.split(/🎨|🚀|🌍|✨|🌿/).filter((s) => s.trim() !== "")
    return sections.find((s) => s.includes(keyword))?.trim() || "Rule not found."
  }

  const categories = [
    {
      title: "AI & APP Innovation",
      description: "Build the future with cutting-edge technology",
      icon: "💻",
      ageGroup: "15-22 years",
      color: "var(--gradient-1)",
      emoji: "🚀",
      keyword: "TechNova",
    },
    {
      title: "O3 Shield:Technical",
      description: "O3 Shield: Innovation to Protect the Ozone",
      icon: "🌍",
      ageGroup: "10-22 years",
      color: "var(--gradient-2)",
      emoji: "💝",
      keyword: "O3 Shield",
    },
    {
      title: "Toy Making",
      description: "Express your creativity in digital form",
      icon: "🧸",
      ageGroup: "10-15 years",
      color: "var(--gradient-3)",
      emoji: "✨",
      keyword: "EduToys",
    },
    {
      title: "3D Modeling & AR-VR",
      description: "Embrace the world with your Innovative Idea",
      icon: "🤖",
      ageGroup: "10-22 years",
      color: "var(--gradient-2)",
      emoji: "🌿",
      keyword: "",
    },
    {
      title: "O3 Shield:Civil/Architecture",
      description: "O3 Shield: Innovation to Protect the Ozone",
      icon: "🌍",
      ageGroup: "15-22 years",
      color: "var(--gradient-2)",
      emoji: "💝",
      keyword: "O3 Shield(Civil Engineer)",
    },
    
  ]

  return (
    <section id="competition" style={{ padding: "120px 0", background: "var(--darker-bg)" }}>
      <div className="container">
        <div className="section-header">
          <h2>COMPETITION CATEGORIES</h2>
          <p>{"< CHOOSE YOUR BATTLEFIELD />"}</p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="glass-effect neon-border fade-in-up"
              style={{
                padding: "2.5rem",
                borderRadius: "20px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                animationDelay: `${index * 0.1}s`,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)"
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 0, 110, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)"
                e.currentTarget.style.boxShadow = "0 0 10px var(--neon-pink), inset 0 0 10px rgba(255, 0, 110, 0.1)"
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{category.icon}</div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  background: category.color,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {category.title}
              </h3>

              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.6, fontSize: "1.1rem" }}>
                {category.description}
              </p>

              <div
                style={{
                  background: category.color,
                  color: "var(--dark-bg)",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "25px",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontFamily: "JetBrains Mono",
                  marginBottom: "1rem",
                }}
              >
                {category.emoji} AGE: {category.ageGroup}
              </div>

              {category.keyword && (
                <button
                  onClick={() => setSelectedRule(getRuleByKeyword(category.keyword))}
                  style={{
                    padding: "0.6rem 1.2rem",
                    background: "black",
                    color: "#fff",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontFamily: "JetBrains Mono",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  📜 Read Rule
                </button>
              )}

              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "100px",
                  height: "100px",
                  background: category.color,
                  borderRadius: "50%",
                  filter: "blur(40px)",
                  opacity: 0.1,
                  animation: "float 6s ease-in-out infinite reverse",
                }}
              />
            </div>
          ))}
        </div>

        {/* Competition Rules Summary */}
        <div
          className="glass-effect"
          style={{
            padding: "3rem",
            borderRadius: "20px",
            border: "2px solid var(--neon-blue)",
            boxShadow: "0 0 30px rgba(0, 245, 255, 0.2)",
          }}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "3rem",
              background: "var(--gradient-2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textTransform: "uppercase",
            }}
          >
            COMPETITION RULES
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[{ title: "ELIGIBILITY", desc: "Students aged 10-22 years", emoji: "🎯" },
              { title: "TEAM SIZE", desc: "Solo or squad up to 4 members + Teacher", emoji: "👥" },
              { title: "SUBMISSION", desc: "Original work only, no copying!", emoji: "📝" },
              { title: "JUDGING", desc: "Innovation + Impact + Execution", emoji: "⚖️" }
            ].map((rule, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "2rem",
                  borderRadius: "15px",
                  textAlign: "center",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 0, 110, 0.1)"
                  e.currentTarget.style.borderColor = "var(--neon-pink)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{rule.emoji}</div>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "var(--neon-pink)",
                    marginBottom: "0.5rem",
                    fontFamily: "JetBrains Mono",
                    textTransform: "uppercase",
                  }}
                >
                  {rule.title}
                </h4>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 RULE MODAL */}
      {selectedRule && (
        <div
          onClick={() => setSelectedRule("")}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              border: "2px solid var(--neon-pink)",
              padding: "2rem",
              borderRadius: "20px",
              maxWidth: "700px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              color: "#fff",
              fontFamily: "JetBrains Mono",
              whiteSpace: "pre-wrap",
              lineHeight: 1.6,
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedRule("")}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
            {selectedRule}
          </div>
        </div>
      )}
    </section>
  )
}

export default Competition
