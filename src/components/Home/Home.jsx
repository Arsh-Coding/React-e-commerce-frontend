import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="left-container">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="homebtn">Shop Now</button>
          <div className="figures">
            <ul>
              <li>
                <h2>200+</h2>
                <p>International Brands</p>
              </li>
              <li>
                <h2>2,000+</h2>
                <p>High-Quality Products</p>
              </li>
              <li>
                <h2>30,000+</h2>
                <p>Happy Customers</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-container">
          <img className="heroImage" src="./Hero Image.jpg" alt="" />
          <img className="homepage-star1" src="./star.png" alt="" />
          <img className="homepage-star2" src="./star.png" alt="" />
        </div>
      </div>
      <div className="brandRectangle">
        <ul className="brandList">
          <li>
            <img className="BrandName" src="./Versace.webp" alt="" />
          </li>
          <li>
            <img className="BrandName" src="./Gucci.webp" alt="" />
          </li>
          <li>
            <img className="BrandName" src="./Prada.webp" alt="" />
          </li>
          <li>
            <img className="BrandName" src="./Zara.webp" alt="" />
          </li>
          <li>
            <img className="BrandName" src="./Calvin Klein.webp" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
