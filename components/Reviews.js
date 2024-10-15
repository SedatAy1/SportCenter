import React from 'react';

function Reviews() {
  return (
    <section id="review-client">
      <h2>REVIEW CLIENT</h2>
      <div className="underline"></div>
      <p>Lorem Ipsum is not simply random text...</p>

      <div className="client-reviews">
        <div className="review">
          <div className="profile-card">
            <img src="/photos/client1.jpg" className="profile-image" alt="Diet Expert" />
            <div className="profile-info">
              <h2>Diet Expert</h2>
              <p>CFO</p>
            </div>
          </div>
          <div className="review-text">
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <div className="review">
          <div className="profile-card">
            <img src="/photos/client2.jpg" className="profile-image" alt="Cardio Trainer" />
            <div className="profile-info2">
              <h2>Cardio Trainer</h2>
              <p>CEO</p>
            </div>
          </div>
          <div className="review-text">
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
