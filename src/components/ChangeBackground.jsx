import React from "react";
import "./changebackground.css";

const ChangeBackground = () => {
  return (
    <>
      <section class="network-section">
        <h2 class="network-title">
          Connect with music professionals and grow your <br /> network
        </h2>

        <div class="network-grid">
          <div class="network-card-wrapper">
            <div class="card-header">
              <span class="card-label">INFLUENCERS</span>
              <span class="card-line"></span>
            </div>

            <img src="img/influencer.jpg" class="network-card default-img" />

            <img
              src="img/influencer-hover.jpg"
              class="network-card hover-img"
            />

            <div class="card-overlay">
              <span class="card-label">INFLUENCERS</span>
              <span class="card-line"></span>
            </div>
          </div>
        </div>

        <button class="card-btn">Promote your music</button>
      </section>
    </>
  );
};

export default ChangeBackground;
