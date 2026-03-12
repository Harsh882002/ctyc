import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import "./Popup.css"

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup almost immediately on every refresh
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleRegister = () => {
    setIsOpen(false)
    const regSection = document.getElementById("registration")
    if (regSection) {
      regSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isOpen) return null

  // Use Portal to render at the end of body to escape any container transforms
  return createPortal(
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-inner">
          <button className="popup-close-btn" onClick={handleClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="popup-visual">
            <img src="/assets/phase_1.png" alt="Phase 1 - The Spark" />
            <div className="visual-overlay"></div>
            <div className="popup-tag">Live Now</div>
          </div>

          <div className="popup-body">
            <div className="popup-header">
              <span className="popup-subtitle"> The Spark</span>
              <h2 className="popup-title">Ignite Your Future.</h2>
            </div>

            <p className="popup-description">
              The CTYC 2026 journey has officially begun! Don't miss your chance
              to join our <strong>free-entry gateway</strong> into the world of
              innovation and technology.
            </p>

            <div className="popup-footer">
              <button className="btn-popup-primary" onClick={handleRegister}>
                Secure Your Spot
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginLeft: '8px' }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Popup
