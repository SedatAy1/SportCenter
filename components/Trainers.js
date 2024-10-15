import React from 'react';

function Trainers() {
  return (
    <section id="trainers-section">
      <div className="container2">
        <h2>OUR BEST TRAINERS</h2>
        <div className="underline"></div>
        <p className="description">
          Lorem Ipsum is not simply random text...
        </p>
        <div className="trainers">
          <div className="trainer-card">
            <img src="/photos/trainer1.jpg" alt="Trainer 1" />
            <div className="trainer-info">
              <h3>Jeanette Jenkins</h3>
              <p>Cardio Trainer</p>
            </div>
          </div>
          <div className="trainer-card">
            <img src="/photos/trainer2.jpg" alt="Trainer 2" />
            <div className="trainer-info">
              <h3>Corey Calliet</h3>
              <p>Cardio Trainer</p>
            </div>
          </div>
          <div className="trainer-card">
            <img src="/photos/trainer3.jpg" alt="Trainer 3" />
            <div className="trainer-info">
              <h3>Jane Doe</h3>
              <p>Cardio Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
