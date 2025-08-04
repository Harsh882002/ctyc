import "./About.css" // Make sure this path is correct

const About = () => {
  return (
    <section id="about" className="about">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "16px" }}>
            About the Challenge
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#718096" }}>Nurturing Innovation in Young Minds</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/image.png"
              alt="Students working on projects"
            />
          </div>

          <div className="about-text">
            <h3>What is Catch Them Young Challenge?</h3>
            <p>
              The Catch Them Young Challenge is an innovative competition designed to identify, nurture, and celebrate
              the creative potential of young minds. We believe that early exposure to problem-solving, technology, and
              entrepreneurship can shape the leaders of tomorrow.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Mission-Driven</h4>
                  <p>Empowering youth through hands-on learning and real-world problem solving</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Innovation Focus</h4>
                  <p>Encouraging creative thinking and technological innovation among participants</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div>
                  <h4>Community Impact</h4>
                  <p>Building solutions that address real community challenges and needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
