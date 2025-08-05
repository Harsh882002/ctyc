const Timeline = () => {
  const events = [
    {
      date: "August 10, 2025",
      title: "Registration Opens",
      description: "Start your journey by registering for the challenge",
    },
     
    {
      date: "August 30, 2025 - 11:59 PM",
      title: "Registration Close and Project Material Submission",
      description: "Project Material Submission like ppt,project video.",
    },
    {
      date: "September 1, 2025",
      title: "Project Shortlisting",
      description: "Project will shortlist and project roll number allocation starts",
    },
    
    {
      date: "september 15, 2025",
      title: "Grand Finale",
      description: "Award ceremony and project showcase event",
    },
  ]

  return (
    <section
      id="timeline"
      style={{ padding: "100px 0", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "white", marginBottom: "16px" }}>
            Event Timeline
          </h2>
          <p style={{ fontSize: "1.2rem", color: "white" }}>Your journey to innovation starts here</p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {events.map((event, index) => (
            <div
              key={index}
              style={{ position: "relative", marginBottom: "3rem", display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "2rem",
                  borderRadius: "12px",
                  width: "100%",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div style={{ fontSize: "0.9rem", color: "#ffd700", fontWeight: "600", marginBottom: "0.5rem" }}>
                  {event.date}
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem" }}>{event.title}</h3>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
