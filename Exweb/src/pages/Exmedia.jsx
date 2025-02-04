import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Deliverables from "./Deliverables";

function Exmedia() {
  return (
    <>
      <Header />
      <section className="bg">
        <div className="bg-overlay"></div>
        <div className="bg-content">
          <h1>Think Beyond Your Ads</h1>
          <p className="bg-subtitle">
            ! We are driving brand success through innovation, creativity, and
            strategic excellence. !
          </p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </section>

      <section className="content">
        <h2 className="section-title">The Exmedia</h2>

        <div className="highlight-quote">
          <blockquote>
            "Break All Acceptations With Existing, Transform Your Business With
            A Perfect Strategy, Brand Identity Can Resonate With The Respective
            Community"
          </blockquote>
        </div>

        <div className="about-content">
          <p className="about-text">
            Exmedia is a well-experienced and successful company in the segment
            of branding and advertising for 17 years. We have transformed the
            business ideas of about 1000+ valuable clients to position their
            brands in respective environments. Our expertise includes:
          </p>

          <ul className="expertise-list">
            <li>Strategic Brand Positioning</li>
            <li>Market Leadership Development</li>
            <li>360° Advertising Solutions</li>
            <li>Digital Transformation Strategies</li>
          </ul>

          <p className="about-text">
            As trailblazers in strategic branding, we've redefined the
            advertising landscape through innovation and creative excellence.
            Our holistic approach combines market intelligence with artistic
            execution, ensuring your brand remains at the forefront of industry
            innovation.
          </p>
        </div>
      </section>

      <section className="cards-container">
        <div className="card">
          <div className="card-icon">🎯</div>
          <h3>Brand Strategy</h3>
          <p>Comprehensive brand positioning and identity development</p>
        </div>
        <div className="card">
          <div className="card-icon">📈</div>
          <h3>Digital Marketing</h3>
          <p>Data-driven campaigns with measurable results</p>
        </div>
        <div className="card">
          <div className="card-icon">💡</div>
          <h3>Creative Solutions</h3>
          <p>Innovative approaches for maximum impact</p>
        </div>
        <div className="card">
          <div className="card-icon">🤝</div>
          <h3>Client Partnership</h3>
          <p>Long-term collaboration for sustained growth</p>
        </div>
      </section>

      <Deliverables />
      <section className="youtube-section">
        <div className="youtube-container">
          <div className="youtube-content">
            <h2>Watch Our Success Stories</h2>
            <p>
              Get inspired by our client journeys and see how we've transformed
              brands.
            </p>
          </div>
          <div className="youtube-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/a_WfraAC868?si=lMfxEkDeWVBoOfGI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {/* Channel Button */}
          <a
            href="https://youtube.com/@exmedia-?si=0KqayFfJs_jtagaj"
            className="channel-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Exmedia;
