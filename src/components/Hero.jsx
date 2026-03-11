import React, { useEffect } from "react"
import { Bot, Settings, Cpu, Zap, CircuitBoard, Settings2, Microchip, Atom } from "lucide-react"
import "./Hero.css"

const Hero = () => {
  useEffect(() => {
    const initParticles = async () => {
      if (window.tsParticles) {
        await window.tsParticles.load("tsparticles", {
          fpsLimit: 120,
          particles: {
            color: { value: "#2563EB" },
            links: {
              color: "#2563EB",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
          fullScreen: { enable: false },
        })
      }
    }

    if (document.readyState === 'complete') {
      initParticles();
    } else {
      window.addEventListener('load', initParticles);
      return () => window.removeEventListener('load', initParticles);
    }
  }, [])

  return (
    <section id="home" className="hero-section">
      <div id="tsparticles" className="particles-container"></div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <div className="floating-icon icon-1"><Bot size={48} /></div>
        <div className="floating-icon icon-2"><Settings size={40} /></div>
        <div className="floating-icon icon-3"><Cpu size={44} /></div>
        <div className="floating-icon icon-4"><Zap size={36} /></div>
        <div className="floating-icon icon-5"><CircuitBoard size={42} /></div>
        <div className="floating-icon icon-6"><Settings2 size={38} /></div>
        <div className="floating-icon icon-7"><Microchip size={46} /></div>
        <div className="floating-icon icon-8"><Atom size={40} /></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Catch Them <span className="text-gradient">Young Challenge</span>
          </h1>
          <p className="hero-tagline">
            "We often wait for the future to happen, forgetting that the future is currently sitting in a classroom, waiting for a spark."
          </p>
          <p className="hero-description">
            The Catch Them Young Challenge 2026 is where curiosity meets direction.
            We are building the confidence, grit, and vision of the next generation of leaders.
          </p>

          <div className="hero-actions">
            <button className="btn-ecosystem">Join the Journey</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

