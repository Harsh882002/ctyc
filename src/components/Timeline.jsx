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
      description: "Project Material Submission like ppt, project video.",
    },
    {
      date: "September 1, 2025",
      title: "Project Shortlisting",
      description: "Project will shortlist and project roll number allocation starts",
    },
    {
      date: "September 15, 2025",
      title: "Grand Finale",
      description: "Award ceremony and project showcase event",
      subEvents: [
        { time: "8:00 AM", activity: "Reporting and Setup" },
        { time: "10:00 AM - 1:00 PM", activity: "Judging Round" },
        { time: "1:30 PM - 2:30 PM", activity: "Lunch Break" },
        { time: "4:00 PM - 6:00 PM", activity: "Award Ceremony & Closing" },
      ],
    },
  ]

  const venue = {
    name: "Prabhat Kids School",
    address: "Washim - Akola Rd, Akola, Hingna Mhaispur, Maharashtra 444001",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10559.416640618181!2d76.98293985060344!3d20.6566557456574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7325d70f1974d%3A0x48a3e8f47d8cea59!2sPrabhat%20Kids%20School!5e0!3m2!1sen!2sin!4v1755594022010!5m2!1sen!2sin",
    mapLink:
      "https://www.google.com/maps/place/Prabhat+Kids+School/@20.6566557,76.9829399,15z/",
  }

  return (
    <section
      id="timeline"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #060709ff 0%, #391c55ff 100%)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "white",
              marginBottom: "16px",
            }}
          >
            Event Timeline
          </h2>
          <p style={{ fontSize: "1.2rem", color: "white" }}>
            Your journey to innovation starts here
          </p>
        </div>

        {/* Timeline Events */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {events.map((event, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                marginBottom: "3rem",
                display: "flex",
                alignItems: "center",
              }}
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
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#ffd700",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {event.date}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {event.title}
                </h3>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  {event.description}
                </p>

                {/* Sub-events for Grand Finale */}
                {event.subEvents && (
                  <ul style={{ marginTop: "1rem", paddingLeft: "1rem", textAlign: "left" }}>
                    {event.subEvents.map((sub, i) => (
                      <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                        <strong>{sub.time}:</strong> {sub.activity}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Venue Section */}
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Venue Details
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "20px", opacity: 0.9 }}>
            📍 {venue.name}, {venue.address}
          </p>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <iframe
              src={venue.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* View on Maps Button */}
          <div style={{ marginTop: "20px" }}>
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#ffd700",
                color: "#000",
                fontWeight: "600",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#ffcc00")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#ffd700")}
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
