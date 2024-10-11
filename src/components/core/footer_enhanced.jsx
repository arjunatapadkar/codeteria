import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Codetria</h3>
          <p className="footer-links">
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/services">Services</a> | <a href="/contact">Contact</a>
          </p>
          <p className="footer-company-name">© 2024 Codetria. All rights reserved.</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>123 Codetria Lane</span> Tech City, TC 12345</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1 555 123456</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@codetria.com">support@codetria.com</a></p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-about">
            <span>About Codetria</span>
            Codetria is a leading tech platform focused on providing cutting-edge software solutions and tech resources. Stay connected with us for the latest in technology.
          </p>

          <div className="footer-socials">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
