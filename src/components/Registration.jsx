import React from "react"
import "./Registration.css"

const Registration = () => {
  return (
    <section id="registration" className="section-padding">
      <div className="container">
        <div className="registration-box reveal">
          <div className="reg-content">
            <h2 className="reg-title">Ready to Join the Challenge?</h2>
            <p className="reg-sub">Registration is officially open for all technical and creative tracks.</p>

            <div className="reg-cta-group">
              <a
                href="https://forms.gle/2KFRxkE1wnxbdcSA8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reg magnetic"
              >
                Register via Google Forms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
