import React, { useEffect } from "react"
import "./Gallery.css"

const FullGallery = ({ setView }) => {
  const images = [
    { src: "/gallery/winner.jpg", title: "Champion's Moment" },
    { src: "/gallery/team.jpg", title: "The Dream Team" },
    { src: "/gallery/project.jpg", title: "Innovative Projects" },
    { src: "/gallery/trophy.jpg", title: "Victory & Honors" },
    { src: "/gallery/1.jfif", title: "Collaborative Spirit" },
    { src: "/gallery/2.jfif", title: "Creative Design" },
    { src: "/gallery/3.jfif", title: "Future Leaders" },
    { src: "/gallery/4.jfif", title: "Idea Pitching" },
    { src: "/gallery/5.jfif", title: "Expert Feedback" },
    { src: "/gallery/6.jfif", title: "Design Sprint" },
    { src: "/gallery/7.jfif", title: "Team Building" },
    { src: "/gallery/8.jfif", title: "Final Presentation" },
    { src: "/gallery/9.jfif", title: "Excellence Awards" },
    { src: "/gallery/10.jfif", title: "Global Vision" },
    { src: "/gallery/11.jfif", title: "Tech Workshop" },
    { src: "/gallery/12.jfif", title: "Networking Hub" },
    { src: "/gallery/13.jfif", title: "Keynote Address" },
    { src: "/gallery/14.jfif", title: "Skill Development" },
    { src: "/gallery/15.jfif", title: "Strategic Planning" },
    { src: "/gallery/16.jfif", title: "Problem Solving" },
    { src: "/gallery/guest.jpg", title: "Mentorship Sessions" },
    { src: "/gallery/rangoli.jpg", title: "Cultural Vibrancy" },
    { src: "/gallery/ev1.jpg", title: "Event Highlights" },
    { src: "/gallery/ev2.jpg", title: "Innovation Lab" },
    { src: "/gallery/ev3.jpg", title: "Future Engineers" },
    { src: "/gallery/ev4.jpg", title: "Project Launch" },
    { src: "/gallery/winner1.jpg", title: "Top Scorers" },
    { src: "/gallery/winner3.jpg", title: "Outstanding Performance" },
    { src: "/gallery/project1.jpg", title: "Sustainability Model" },
    { src: "/gallery/project2.jpg", title: "Tech Showcase" }
  ]

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '50px' // Start loading slightly before they enter viewport
    });

    const revealElements = document.querySelectorAll(".reveal, .reveal-stagger");
    revealElements.forEach(el => observer.observe(el));

    // Fallback: If after 1 second things aren't revealed, reveal them anyway (debug)
    const timeout = setTimeout(() => {
      revealElements.forEach(el => el.classList.add('active'));
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="full-gallery-page">
      <section className="section-padding bg-light" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-header-clean reveal">
            <span className="badge">Complete Gallery</span>
            <h2 className="title-section">Capturing Every Moment.</h2>
            <p className="desc-text">Explore the full journey of Catch Them Young Challenge 2026.</p>
          </div>

          <div className="gallery-grid reveal-stagger">
            {images.map((item, i) => (
              <div key={i} className="gallery-item">
                <div className="image-container">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="overlay">
                    <div className="overlay-content">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-footer reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button 
              className="btn btn-outline" 
              onClick={() => { setView('home'); window.scrollTo(0, 0); }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FullGallery
