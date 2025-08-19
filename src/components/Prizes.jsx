import React from "react";

const Prizes = () => {
  const categories = [
    {
      title: "AI & App Innovation",
      prizes: [
        {
          position: "1st Place",
          amount: "₹5,000",
          icon: "🥇",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
        {
          position: "2nd Place",
          amount: "₹3,000",
          icon: "🥈",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
      ],
    },
    {
      title: "O3 Shield: Technical",
      prizes: [
        {
          position: "1st Place",
          amount: "₹5,000",
          icon: "🥇",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
        {
          position: "2nd Place",
          amount: "₹3,000",
          icon: "🥈",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
      ],
    },
    {
      title: "Toy Making",
      prizes: [
        {
          position: "1st Place",
          amount: "₹3,000",
          icon: "🥇",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
        {
          position: "2nd Place",
          amount: "₹2,000",
          icon: "🥈",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
      ],
    },
    {
      title: "3D Modeling & AR-VR",
      prizes: [
        {
          position: "1st Place",
          amount: "₹5,000",
          icon: "🥇",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
        {
          position: "2nd Place",
          amount: "₹3,000",
          icon: "🥈",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
      ],
    },
    {
      title: "O3 Shield: Civil / Architecture",
      prizes: [
        {
          position: "1st Place",
          amount: "₹5,000",
          icon: "🥇",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
        {
          position: "2nd Place",
          amount: "₹3,000",
          icon: "🥈",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
      ],
    },
    {
      title: "Other Innovative Ideas",
      prizes: [
        {
          position: "1st Place",
          amount: "₹5,000",
          icon: "🥇",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
        {
          position: "2nd Place",
          amount: "₹3,000",
          icon: "🥈",
          benefits: ["Cash Prize", "Trophy", "Certificate"],
        },
      ],
    },
  ];

  return (
    <section id="prizes" style={{ padding: "100px 0", background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#2d3748",
              marginBottom: "16px",
            }}
          >
            Prizes & Recognition
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#718096" }}>
            Celebrating Excellence and Innovation
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} style={{ marginBottom: "4rem" }}>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "1.5rem",
              }}
            >
              {category.title}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {category.prizes.map((prize, index) => (
                <div
                  key={index}
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)"
                        : "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
                    padding: "2rem",
                    borderRadius: "16px",
                    textAlign: "center",
                    transform: index === 0 ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    {prize.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: "#2d3748",
                    }}
                  >
                    {prize.position}
                  </h4>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      color: index === 0 ? "#2d3748" : "#667eea",
                      marginBottom: "1rem",
                    }}
                  >
                    {prize.amount}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {prize.benefits.map((benefit, bidx) => (
                      <li
                        key={bidx}
                        style={{
                          padding: "0.3rem 0",
                          color: "#4a5568",
                          fontWeight: "500",
                        }}
                      >
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
