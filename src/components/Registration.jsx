"use client"

import { useState } from "react"

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    school: "",
    category: "",
    teamSize: "1",
    experience: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Registration submitted:", formData)
    alert("Registration submitted successfully! We will contact you soon.")
  }

  return (
    <section
      id="registration"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>
            Register Now
          </h2>
          <p style={{ fontSize: "1.2rem" }}>Join the Challenge and Shape Your Future</p>
        </div>

        <div className="registration-grid">
          {/* Left Side - Why Register */}
          <div>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "2rem" }}>Why Register?</h3>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
              <li style={{ padding: "0.75rem 0", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                🎯 Develop real-world problem-solving skills
              </li>
              <li style={{ padding: "0.75rem 0", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                🤝 Network with like-minded peers
              </li>
              <li style={{ padding: "0.75rem 0", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                👨‍🏫 Learn from industry experts
              </li>
              <li style={{ padding: "0.75rem 0", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                🏆 Win exciting prizes and recognition
              </li>
            </ul>
          </div>

          {/* Right Side - Register Button */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href="https://forms.gle/jndSKkqZ5oFieHhR8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "1.5rem 3rem",
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: "#fff",
                background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                borderRadius: "50px",
                boxShadow: "0 10px 25px rgba(255, 75, 43, 0.6)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                animation: "pulse 1.8s infinite",
              }}
            >
              🚀 Register Here
            </a>
          </div>
        </div>
      </div>

      {/* CSS for Responsiveness & Animation */}
      <style jsx>{`
        .registration-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 4rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .registration-grid {
            flex-direction: column;
            gap: 2rem;
          }

          h2 {
            font-size: 2rem !important;
          }

          h3 {
            font-size: 1.5rem !important;
          }

          a {
            font-size: 1.2rem !important;
            padding: 1rem 2rem !important;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 75, 43, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(255, 75, 43, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 75, 43, 0);
          }
        }
      `}</style>
    </section>
  )
}

export default Registration
