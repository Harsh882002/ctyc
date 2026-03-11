import "./Contact.css"

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-centered">
          <span className="badge">Contact</span>
          
          <div className="contact-info-grid">
            <div className="info-item">
              <strong>Venue</strong>
              <p>Shri R.L.T. College of Science, Akola</p>
              <div className="contact-map-mini">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1094269783043!2d77.00352737386594!3d20.70578059879612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd731e33f8850a1%3A0x82ffff94cde6585!2sR%20L%20T%20College%20of%20Science-%20Akola!5e0!3m2!1sen!2sin!4v1773139165118!5m2!1sen!2sin" 
                  width="100%" 
                  height="150" 
                  style={{ border: 0, borderRadius: "8px", marginTop: "1rem" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Contact Venue Map"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps?q=Shri+R.L.T.+College+of+Science+Akola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link-small"
              >
                View Larger Map
              </a>
            </div>
            <div className="info-item">
              <strong>Email</strong>
              <p><a href="mailto:info@kitstechsolutions.com">info@kitstechsolutions.com</a></p>
              <p><a href="mailto:sales@techsolutions.com">sales@techsolutions.com</a></p>
            </div>
            <div className="info-item">
              <strong>Phone</strong>
              <p><a href="tel:+917066233456">+91 70662 33456</a></p>
              <p><a href="tel:+919226983129">+91 92269 83129</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
