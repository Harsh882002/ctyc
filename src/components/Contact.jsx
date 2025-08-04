const Contact = () => {
  return (
    <section id="contact" style={{ padding: "100px 0", background: "#f7fafc" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "16px" }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#718096" }}>Have questions? We're here to help!</p>
        </div>

        <div className="contact-grid">
          {/* Email Us */}
          <div className="contact-card">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📧</div>
            <h4 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }}>
              Email Us
            </h4>
            <p style={{ color: "#718096", marginBottom: "0.5rem" }}>kitsctyc@gmail.com</p>
            <p style={{ color: "#718096", marginBottom: "0.5rem" }}>info@kitstechlearning.co.in</p>
          </div>

          {/* Call Us */}
          <div className="contact-card">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📞</div>
            <h4 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }}>
              Call Us
            </h4>
            <p style={{ color: "#718096", marginBottom: "0.5rem" }}>+91 8767665695</p>
            <p style={{ color: "#718096", marginBottom: "0.5rem" }}>+91 9112383892</p>
            <p style={{ color: "#718096", marginBottom: "0.5rem" }}>Mon–Sat: 10AM–6PM</p>
          </div>

          {/* WhatsApp Community */}
          <div className="contact-card">
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💬</div>
            <h4 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#2d3748", marginBottom: "1rem" }}>
              Join WhatsApp Community
            </h4>
            <p style={{ color: "#718096", marginBottom: "1rem" }}>
              Stay updated, connect with fellow participants, and get instant support.
            </p>
            <a
              href="https://chat.whatsapp.com/BMj0eWlV5LCHIr4GgiU5I0?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              👉 Join Now
            </a>

          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .contact-grid {
          display: flex;
          gap: 2rem;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .contact-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
          flex: 1 1 30%;
        }

        .whatsapp-btn {
          display: inline-block;
          padding: 0.8rem 1.6rem;
          font-size: 1rem;
          color: white;
          background-color: #25d366;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-btn:hover {
          background-color: #1ebe5d;
        }

        @media (max-width: 768px) {
          .contact-grid {
            flex-direction: column;
          }

          .contact-card {
            flex: 1 1 100%;
          }

          h2 {
            font-size: 2rem !important;
          }

          h4 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
