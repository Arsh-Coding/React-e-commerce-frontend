import React from "react";
import "./BrowseStyles.css";
const DressStyleBrowser = () => {
  return (
    <div class="dress-style-container">
      <h1>BROWSE BY DRESS STYLE</h1>
      <div className="background-styles">
        <div class="grid">
          <div class="card casual">
            <img src="/casuals.png" alt="Casual style" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Casual</h2>
            </div>
          </div>

          <div class="card formal">
            <img src="/formals.png" alt="Formal style" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Formal</h2>
            </div>
          </div>

          <div class="card party">
            <img src="/party.png" alt="Party style" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Party</h2>
            </div>
          </div>

          <div class="card gym">
            <img src="/Gym.png" alt="Gym style" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Gym</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyleBrowser;
