import "./Footer.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <h2>
            Portfolio<span>.</span>
          </h2>

          <p>
            Creating modern, responsive and
            high-performance web experiences.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#services">Services</a></li>

            <li><a href="#gallery">Portfolio</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        <div>

          <h3>Newsletter</h3>

          <form className="newsletter">

            <input
              type="email"
              placeholder="Email Address"
            />

            <button className="btn">
              Subscribe
            </button>

          </form>

          <div className="footer-social">

            <a href="#"><FaGithub /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaFacebookF /></a>

          </div>

        </div>

      </div>

      <div className="copyright">

        © {new Date().getFullYear()} Naveen Pandey.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;