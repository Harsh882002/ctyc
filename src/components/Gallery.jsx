import "./Gallery.css"

const Gallery = ({ setView }) => {
  const images = [
    { src: "/gallery/winner1.jpg", title: "2024 " },
    { src: "/gallery/project2.jpg", title: "2024 " },
    { src: "/gallery/2.jfif", title: "2025" },


  ]

  return (
    <section id="gallery" className="section-padding bg-light">
      <div className="container">
        <div className="section-header-clean reveal">
          <span className="badge">Showcase</span>
          <h2 className="title-section">Moments of Impact.</h2>
          <p className="desc-text">A glimpse into the creativity, competition, and celebration at CTYC.</p>
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

        <div className="gallery-footer reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            className="btn btn-primary"
            onClick={() => { setView('gallery'); window.scrollTo(0, 0); }}
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
