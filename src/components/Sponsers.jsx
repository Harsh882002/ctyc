import React from 'react'
import "./Sponsers.css"

const Sponsers = () => {
  return (
    <section className="sponsors-section">
      <div className="container sponsors-container">
        <div className="sponsors-grid">
          <div className="sponsor-item reveal">
            <span className="sponsor-label">Organized By</span>
            <img src="/logo/kits.jpg" alt="KITS Logo" className="sponsor-logo" />
          </div>
          <div className="sponsor-item reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="sponsor-label">Supported By</span>
            <img src="/logo/rotary.png" alt="Rotary Club Logo" className="sponsor-logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsers
