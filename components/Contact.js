import React from 'react';

function Contact() {
  return (
    <section id="contact-us">
      <h1>CONTACT US</h1>
      <div className="underline"></div>
      <p className="description">Lorem Ipsum is not simply random text...</p>

      <div className="content">
        <div className="left-section">
          <div className="contact-details">
            <div className="contact-item">
              <h2>Mobile Number</h2>
              <p>+135 773 321 4442</p>
            </div>
            <div className="contact-item2">
              <h2>Email Address</h2>
              <p>demo@demo.com</p>
            </div>
          </div>

          <form className="appointment-form">
            <h2>Make An Appointment</h2>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </form>
        </div>

        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="400"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
