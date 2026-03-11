import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text">CTYC 2026</span>
            <p>Engineering the next generation of innovators.</p>
          </div>
          <div className="footer-nav">
            <div className="nav-group">
              <h4>Organization</h4>
              <a href="#about">Mission</a>
              <a href="#journey">Journey</a>
            </div>
            <div className="nav-group">
              <h4>Connect</h4>
              <a href="#contact">Partnership</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 KITS INNOVATION HUB. Akola, MH.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
