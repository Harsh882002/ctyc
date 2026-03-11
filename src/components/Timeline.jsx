import "./Timeline.css"

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
  ];

  const venue = {
    name: "Shri R.L.T. College of Science",
    address: "Civil Lines Road, Near New Radhakisan Plots, Civil Line, Akola - 444001, Maharashtra, India",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1094269783043!2d77.00352737386594!3d20.70578059879612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd731e33f8850a1%3A0x82ffff94cde6585!2sR%20L%20T%20College%20of%20Science-%20Akola!5e0!3m2!1sen!2sin!4v1773139165118!5m2!1sen!2sin",
    mapLink:
      "https://www.google.com/maps?q=Shri+R.L.T.+College+of+Science+Akola",
  };

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        {/* Timeline Events */}

        {/* Timeline Events */}
        <div className="timeline-items-wrapper">
          {events.map((event, index) => (
            <div key={index} className="timeline-item-modern">
              <div className="timeline-content-card">
                <div className="timeline-header-meta">
                  <span className="timeline-date-stamp">{event.date}</span>
                </div>
                <h3 className="timeline-item-title">{event.title}</h3>
                <p className="timeline-item-description">
                  {event.description}
                </p>

                {event.subEvents && (
                  <ul className="timeline-subevents">
                    {event.subEvents.map((sub, i) => (
                      <li key={i}>
                        <span className="subevent-time">{sub.time}</span>
                        <span className="subevent-activity">{sub.activity}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="venue-section">
          <div className="map-container reveal">
            <iframe
              src={venue.mapUrl}
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Map"
            ></iframe>
          </div>
          <div className="venue-actions">
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
