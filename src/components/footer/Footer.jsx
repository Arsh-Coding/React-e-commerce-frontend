import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-container">
        <div class="footer-column brand-section">
          <div class="logo">SHOP.CO</div>
          <p>
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div class="container-icons">
            <div className="icon-section">
              <img class="icon" src="./twitter.webp" alt="Icon" />
            </div>
            <div className="icon-section">
              <img class="facebook" src="./facebook.png" alt="Icon" />
            </div>
            <div className="icon-section">
              <img class="icon" src="./instagram.png" alt="Icon" />
            </div>
            <div className="icon-section">
              <img class="icon" src="./github.png" alt="Icon" />
            </div>
          </div>
        </div>

        <div class="footer-column">
          <h3>COMPANY</h3>
          <ul class="footer-links">
            <li>
              <a href="1">About</a>
            </li>
            <li>
              <a href="2">Features</a>
            </li>
            <li>
              <a href="3">Works</a>
            </li>
            <li>
              <a href="4">Career</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>HELP</h3>
          <ul class="footer-links">
            <li>
              <a href="1">Customer Support</a>
            </li>
            <li>
              <a href="2">Delivery Details</a>
            </li>
            <li>
              <a href="3">Terms & Conditions</a>
            </li>
            <li>
              <a href="4">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>FAQ</h3>
          <ul class="footer-links">
            <li>
              <a href="1">Account</a>
            </li>
            <li>
              <a href="2">Manage Deliveries</a>
            </li>
            <li>
              <a href="3">Orders</a>
            </li>
            <li>
              <a href="4">Payments</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>RESOURCES</h3>
          <ul class="footer-links">
            <li>
              <a href="5">Free eBooks</a>
            </li>
            <li>
              <a href="6">Development Tutorial</a>
            </li>
            <li>
              <a href="7">How to - Blog</a>
            </li>
            <li>
              <a href="8">Youtube Playlist</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">© Shop.co 2000-2023. All Rights Reserved.</div>
        <div class="payment-methods">
          <img src="/visa.png" alt="Visa" />
          <img src="/card.png" alt="Mastercard" />
          <img src="/paypal.png" alt="PayPal" />
          <img src="/apple-pay.png" alt="Apple Pay" />
          <img src="/google-pay.png" alt="Google Pay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
