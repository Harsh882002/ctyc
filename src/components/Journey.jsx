import React, { useState, useEffect } from "react"
import "./Journey.css"

const Counter = ({ target }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const end = parseInt(target)
    if (start === end) return
    let timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, 150)
  }, [target])
  return <span>0{count}</span>
}

const Journey = () => {
  const phases = [
    { 
      id: "01", 
      title: "The Spark", 
      date: "29th March 2026", 
      desc: "Innovation begins with Day One. A free-entry gateway that democratizes technology for every child in the district.",
      image: "/assets/phase_1.png" 
    },
    { 
      id: "02", 
      title: "The Skill", 
      date: "April - June", 
      desc: "Moving beyond the surface with rigorous, mentorship-led technical mastery in coding and mechanics.",
      image: "/assets/phase_2.png" 
    },
    { 
      id: "03", 
      title: "The Action", 
      date: "August 2026", 
      desc: "Real-world application where schools become hubs of industrial innovation, solving real-world problems.",
      image: "/assets/phase_3.png",
      highlight: true 
    },
    { 
      id: "04", 
      title: "The Impact", 
      date: "15th Sept 2026", 
      desc: "A district-wide celebration on Engineer’s Day, turning students into local heroes and launching careers.",
      image: "/assets/phase_4.png" 
    }
  ]

  return (
    <section id="journey" className="section-padding bg-light">
      <div className="container">
        <div className="section-header-clean reveal">
          <span className="badge">Project Journey</span>
          <h2 className="title-section">A Journey of Transformation.</h2>
          <p className="desc-main">Our 4-Phase model is designed to take students from curiosity to creation.</p>
        </div>

        <div className="journey-timeline-container">
          <div className="drawing-line-path">
            <div className="drawing-line-progress"></div>
          </div>

          <div className="journey-phases-list">
            {phases.map((phase, i) => (
              <div key={i} className={`journey-phase-item reveal ${i % 2 === 0 ? 'left' : 'right'} ${phase.highlight ? 'highlighted' : ''}`}>
                <div className="phase-dot"></div>
                <div className="phase-card">
                  <div className="phase-image">
                    <img src={phase.image} alt={phase.title} />
                    <span className="phase-tag">Phase {phase.id}</span>
                  </div>
                  <div className="phase-info">
                    <span className="phase-time">{phase.date}</span>
                    <h3 className="phase-name">{phase.title}</h3>
                    <p className="phase-detail">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
