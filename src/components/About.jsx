import "./About.css"

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-flex">
          <div className="about-text reveal">
            <span className="badge">Our Mission</span>
            <h2 className="title-section">Where Learning Finds Direction.</h2>
            <p className="about-para">
              At KITS, we bridge the gap between classroom theory and industrial reality.
              Our ecosystem is built on the belief that transformation begins when
              curiosity is met with professional direction.
            </p>

            <ul className="mission-list">
              <li>
                <strong>Democratizing Tech:</strong>
                Free entry workshops ensuring no child is left behind.
              </li>
              <li>
                <strong>Industrial Reality:</strong>
                Moving beyond simulation to real-world projects.
              </li>
            </ul>
          </div>
          <div className="about-img reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="img-container">
              <img src="gallery/ev6.png" alt="Innovation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
