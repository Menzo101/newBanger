import React from "react";
import "./secondcomponent.css";
import usericon from "../assets/usericon.png";
import { BsMegaphoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const SecondComponent = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Get Your Music Heard
            <span className="highlight">Everywhere</span>
          </h1>

          <p>
            Connect with top influencers, playlist curators, and music bloggers
            instantly <br /> NewBanger makes music promotion simple, fast,{" "}
            <br /> and affordable for every artist.
          </p>

          <button className="cta-btn">Promote Your Music</button>

          <div className="social-proof">
            <div className="avatars">
              <img src={usericon} />
            </div>
            <div className="newContainer">
              <div className="icons">
                <BsMegaphoneFill id="trumpet" />
                <span id="stars"> ⭐⭐⭐⭐⭐⭐</span>
              </div>
              <p>Trusted by over 1000 musicians and curators</p>
            </div>
          </div>
        </div>

        <div className="featured-strip">
          <h3>Featured on: </h3>
          <div className="ticker">
            <div className="ticker-track">
              <Link className="tick-link">TechCabal</Link>
              <Link className="tick-link">Vanguard</Link>
              <Link className="tick-link"> Techpoint</Link>
              <Link className="tick-link">The Guardian</Link>
              <Link className="tick-link"> Punch</Link>

              <Link className="tick-link">TechCabal</Link>
              <Link className="tick-link">Vanguard</Link>
              <Link className="tick-link">Techpoint</Link>
              <Link className="tick-link">The Guardian</Link>

              <Link className="tick-link"> Punch</Link>

              <Link className="tick-link">TechCabal</Link>
              <Link className="tick-link">Vanguard</Link>
              <Link className="tick-link"> Techpoint</Link>
              <Link className="tick-link"> The Guardian</Link>
              <Link className="tick-link">Punch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondComponent;
