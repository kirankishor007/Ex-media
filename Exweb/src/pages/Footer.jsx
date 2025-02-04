import React from "react";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-section">
            <img src={logo} alt="Ex Media Logo" className="logo-img" />
            <p>Pioneers in Strategic Brand Engineering</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#case-studies">Case Studies</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>KERALA – UAE</p>
            <p>info@exmedia.in</p>
            <p>+919526123466</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/exmedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/exmedia1/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="https://x.com/exmedia_1?mx=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-x-twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC4tqUCDI3l10SZMwNlR1l9w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube" />
              </a>
              <a
                href="https://www.instagram.com/exmedia_1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 exmedia. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
