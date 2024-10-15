import React from 'react';

function OurClasses() {
  return (
    <section id="our-classes">
      <h2 data-aos="fade-up" data-aos-delay="600">Our Classes</h2>
      <div className="underline"></div>
      <p>
        Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
      </p>

      <div className="class-buttons">
        <button className="class-btn" data-target="yoga-section">Yoga</button>
        <button className="class-btn show-content-btn" data-target="group-section">Group</button>
        <button className="class-btn show-content-btn" data-target="solo-section">Solo</button>
        <button className="class-btn show-content-btn" data-target="stretching-section">Stretching</button>
      </div>

      <div className="container">
        <div className="text-section">
          <h2 id="dynamic-title">Why are your Yoga?</h2>
          <p id="dynamic-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur possimus voluptatem impedit odit perferendis dolorum placeat.
          </p>
          <h3 id="dynamic-schedule-title">When comes Yoga Your Time.</h3>
          <p id="dynamic-schedule-1">Saturday-Sunday: 8:00am - 10:00am</p>
        </div>

        <div className="image-section">
          <img id="dynamic-image" src="/photos/yoga.jpg" width="500px" height="300px" alt="Yoga" />
        </div>
      </div>
    </section>
  );
}

export default OurClasses;
