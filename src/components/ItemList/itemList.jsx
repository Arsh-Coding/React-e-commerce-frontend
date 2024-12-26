import React from "react";
import "./ItemList.css";
const itemList = () => {
  return (
    <div className="itemList">
      <div className="Heading">
        <h1>New Arrivals</h1>
      </div>
      <div className="productList">
        <div className="productCard">
          <img src="./item1.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>T Shirt</h3>
            <div class="rating">⭐⭐⭐⭐ 4/5</div>
            <p class="price">$120</p>
          </div>
        </div>

        <div className="productCard">
          <img src="/item2.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>Skinny Jeans</h3>
            <div class="rating">⭐⭐⭐ 3/5</div>
            <p class="price">
              $240<span class="original-price">$260</span>
              <span class="discount">-20%</span>
            </p>
          </div>
        </div>

        <div className="productCard">
          <img src="/item3.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>Checkered Shirt</h3>
            <div class="rating">⭐⭐⭐⭐ 4.5/5</div>
            <p class="price">$180</p>
          </div>
        </div>

        <div className="productCard">
          <img src="/item4.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>Sleeve Stripped T Shirt</h3>
            <div class="rating">⭐⭐⭐⭐ 4.5/5</div>
            <p class="price">
              $130<span class="original-price">$160</span>
              <span class="discount">-30%</span>
            </p>
          </div>
        </div>
      </div>
      <button className="ViewAll-btn">View All</button>
      <br />

      {/* top selling */}

      <hr />
      <div className="Heading">
        <h1>Top Selling</h1>
      </div>
      <div className="productList">
        <div className="productCard">
          <img src="/item5.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>Verticle Stripped Shirt</h3>
            <div class="rating">⭐⭐⭐⭐ 4/5</div>
            <p class="price">
              $230<span class="original-price">$250</span>
              <span class="discount">-20%</span>
            </p>
          </div>
        </div>

        <div className="productCard">
          <img src="/item6.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>Courage Graphic T-Shirt</h3>
            <div class="rating">⭐⭐⭐ 3/5</div>
            <p class="price">
              $240<span class="original-price">$260</span>
              <span class="discount">-20%</span>
            </p>
          </div>
        </div>

        <div className="productCard">
          <img src="/item7.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>LOOSE FIT BERMUDA Shorts</h3>
            <div class="rating">⭐⭐⭐⭐ 4.5/5</div>
            <p class="price">$180</p>
          </div>
        </div>

        <div className="productCard">
          <img src="/item8.png" alt="Checkered Shirt" className="itemimg" />
          <div class="product-info">
            <h3>Faded Skinny Jeans</h3>
            <div class="rating">⭐⭐⭐⭐ 4.5/5</div>
            <p class="price">
              $130<span class="original-price">$160</span>
              <span class="discount">-30%</span>
            </p>
          </div>
        </div>
      </div>
      <button className="ViewAll-btn">View All</button>
    </div>
  );
};

export default itemList;
