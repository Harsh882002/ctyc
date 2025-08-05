const Footer = () => {
  return (
    <footer style={{ background: "#2d3748", color: "white", padding: "60px 0 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

        {/* Organised By Section */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: "800",
              textTransform: "uppercase",
              color: "#f6e05e",
              marginBottom: "2rem",
            }}
          >
            Organised by
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            {/* KITS Logo & Name + Button */}
            <div style={{ textAlign: "center" }}>
              <img
                src="/logo/kits.jpg"
                alt="KITS Akola Logo"
                style={{
                  height: "150px",
                  marginBottom: "0.5rem",
                  borderRadius: "6px",
                  background: "#fff",
                  padding: "4px",
                }}
              />
              <p style={{ fontWeight: "600", fontSize: "1.1rem", color: "#f7fafc" }}>KITS Akola</p>

              {/* 👇 Added Button */}
              <a
                href="https://www.kitstechlearning.co.in" target="_blank"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  padding: "10px 20px",
                  background: "#f56565",
                  color: "#fff",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontFamily: "JetBrains Mono",
                  letterSpacing: "1px",
                  boxShadow: "0 0 10px #f56565",
                }}
              >
                Know More About Kits
              </a>
            </div>

            {/* Rotary Logo & Name */}
            <div style={{ textAlign: "center" }}>
              <img
                src="/logo/rotary.png"
                alt="Rotary Club Akola Logo"
                style={{
                  height: "150px",
                  marginBottom: "0.5rem",
                  borderRadius: "6px",
                  background: "#fff",
                  padding: "4px",
                }}
              />
              <p style={{ fontWeight: "600", fontSize: "1.1rem", color: "#f7fafc" }}>
                Rotary Club of Akola East
              </p>
            </div>
          </div>
        </div>

        {/* Footer Main Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* About */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Catch Them Young Challenge
            </h3>
            <p style={{ color: "#a0aec0", lineHeight: 1.6, marginBottom: "1rem" }}>
              Empowering the next generation through innovation, creativity, and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "1rem", color: "#e2e8f0" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="#about" style={{ color: "#a0aec0", textDecoration: "none" }}>About</a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="#competition" style={{ color: "#a0aec0", textDecoration: "none" }}>Competition</a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="#timeline" style={{ color: "#a0aec0", textDecoration: "none" }}>Timeline</a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="#prizes" style={{ color: "#a0aec0", textDecoration: "none" }}>Prizes</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "1rem", color: "#e2e8f0" }}>
              Support
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="#contact" style={{ color: "#a0aec0", textDecoration: "none" }}>Contact Us</a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="#" style={{ color: "#a0aec0", textDecoration: "none" }}>FAQ</a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a href="#" style={{ color: "#a0aec0", textDecoration: "none" }}>Guidelines</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: "1px solid #4a5568",
            paddingTop: "2rem",
            textAlign: "center",
            color: "#a0aec0",
          }}
        >
          <p style={{ marginBottom: "0.5rem" }}>
            &copy; 2025 Catch Them Young Challenge. All rights reserved.
          </p>
          <p>Made with ❤️ for the next generation of innovators</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
