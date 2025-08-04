"use client"

import { useEffect, useState } from "react"

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/gallery/rangoli.jpg",
      alt: "Students presenting their tech project",
      title: "Rangoli",
    },
    {
      id: 2,
      src: "/gallery/trophy.jpg",
      alt: "Robotics workshop",
      title: "Event Trophy",
    },
    {
      id: 3,
      src: "/gallery/team.jpg",
      alt: "Award ceremony",
      title: "Management Team",
    },
    {
      id: 4,
      src: "/gallery/winner.jpg",
      alt: "Environmental project team",
      title: "Winners Celebration",
    },
    {
      id: 5,
      src: "/gallery/winner1.jpg",
      alt: "Environmental project team",
      title: "Winners Celebration",
    },
    {
      id: 6,
      src: "/gallery/winner3.jpg",
       title: "Winners Celebration",
    },
    {
      id: 7,
      src: "/gallery/guest.jpg",
      alt: "Environmental project team",
      title: "Event Guests",
    },
    {
      id: 8,
      src: "/gallery/project.jpg",
      alt: "Environmental project team",
      title: "Projectie",
    },
    {
      id: 9,
      src: "/gallery/project1.jpg",
      alt: "Environmental project team",
      title: "Projectie",
    },
    {
      id: 10,
      src: "/gallery/project2.jpg",
      alt: "Environmental project team",
      title: "Projectie",
    },

  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(interval) // cleanup
  }, [galleryImages.length])

  const currentImage = galleryImages[currentIndex]

  return (
    <section id="gallery" style={{ padding: "100px 0", background: "#f7fafc" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "16px" }}>
          Gallery
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#718096", marginBottom: "40px" }}>
          Memories from Last Year's Challenge
        </p>

        <div
          style={{
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "12px",
              transition: "opacity 0.5s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0, 0, 0, 0.6)",
              color: "white",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            {currentImage.title}
          </div>
        </div>

        {/* Dots below slider */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
          {galleryImages.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: currentIndex === idx ? "#2d3748" : "#cbd5e0",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
