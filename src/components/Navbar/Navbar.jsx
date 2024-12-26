import React from "react";
import "./navbar.css";

const minimizeUpperLine = () => {
  const upperLineElement = document.querySelector(".upperLine");
  if (upperLineElement) {
    upperLineElement.style.display = "none";
  }
};
const Navbar = () => {
  return (
    <>
      <div className="upperLine">
        <p>
          Signup and get 20% off to your first order.{" "}
          <a href="1">Sign UP Now</a>
        </p>
        <span className="cross" onClick={minimizeUpperLine}>
          &#10006;
        </span>
      </div>
      <div className="navbar">
        <h2 className="Logo">
          <img className="hamburger" src="./image.png" alt="" />
          SHOP.CO
        </h2>
        <ul>
          <li>
            <select name="" id="shopSelect">
              <option value="" selected>
                Shop
              </option>
              <option>Casual</option>
              <option>Formal</option>
              <option>Gym</option>
            </select>
          </li>
          <li>
            <p>On Sale</p>
          </li>
          <li>
            <p>New Arrivals</p>
          </li>
          <li>
            <p>Brands</p>
          </li>
        </ul>
        <img src="/search.png" alt="" className="search-bar-icon" />
        <input
          type="text"
          placeholder="Search for products..."
          class="search-input"
        ></input>
    <div className="icons-nav">
        <img className="searchicon" src="/search.png" alt="" />
        <img src="/cart.png" alt="" />
        <img src="/Profile.png" alt="" />
        </div>
      </div>
    </>
  );
};
export default Navbar;
