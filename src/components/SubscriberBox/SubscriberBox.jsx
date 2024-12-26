import React from "react";
import "./SubscriptionBox.css";

const SubscriptionBox = () => {
  return (
    <div className="subs-container">
    <div className="subscription-box">
        <div className="subs-heading">

            <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>

        </div>
      <div className="subscription-content">
        <div className="subscription-form">
          <div className="input-wrapper">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="subscription-input"
            />
          </div>
          <button className="subscription-button">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubscriptionBox;
