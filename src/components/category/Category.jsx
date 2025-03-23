import React from "react";
import "./category.css";
import Navbar from "../homepage/Navbar";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const products = [
    {
      id: 1,
      name: "Noise Colorfit Icon 2.18'' Display with Bluetooth Call",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.45f3iLLTv6F7qaZ55d0QpwHaHa&pid=Api&P=0&h=220",
      rating: 4.1,
      reviews: "6,83,784",
      price: 1099,
      oldPrice: 5999,
      discount: "81% off",
      assured: true,
      dprice: 300,
    },
    {
      id: 2,
      name: "Noise Crew 1.38'' Round Display with Bluetooth Calling",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.45f3iLLTv6F7qaZ55d0QpwHaHa&pid=Api&P=0&h=220",
      rating: 4.2,
      reviews: "1,28,436",
      price: 1099,
      oldPrice: 4999,
      discount: "78% off",
      assured: true,
      dprice: 300,
    },
    {
      id: 3,
      name: "Noise Icon Buzz 1.69'' Display with Bluetooth Calling",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.45f3iLLTv6F7qaZ55d0QpwHaHa&pid=Api&P=0&h=220",
      rating: 4.1,
      reviews: "6,22,047",
      price: 1099,
      oldPrice: 4999,
      discount: "78% off",
      assured: true,
      dprice: 300,
    },
    {
      id: 4,
      name: "Noise Crew 1.38'' Round Display with Bluetooth Calling",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.45f3iLLTv6F7qaZ55d0QpwHaHa&pid=Api&P=0&h=220",
      rating: 4.2,
      reviews: "1,28,436",
      price: 1099,
      oldPrice: 4999,
      discount: "78% off",
      assured: true,
      dprice: 300,
    },
  ];
const navigate=useNavigate();
  return (
    <div className="category-central-div">
       <Navbar/>
    <div className="category-container">
      <div className="filters">
        <h3>Filters</h3>
        <div className="filter-section">
          <h4 className="gard">CATEGORIES</h4>
          <p className="big">Wearable Smart Devices</p>
          <p>Smart Watches</p>
        </div>
        <div className="filter-section">
          <h4>Price</h4>
          <input type="range" min="0" max="20000" />
          <div className="psection">
            {/* <select name="" id="">
            <option value="">Lowest - $1000 </option>
            <option value="">$2000 - $3000 </option>
            <option value="">$3000 - $4000 </option>
            <option value="">$4000 - $5000 </option>
            <option value="">$6000 - $7000 </option>
            <option value="">$8000 - $9000 </option>
           </select> */}

            <div>
              <input type="checkbox" name="price" id="" value="10000" />
              1000 - 2000
            </div>
            <div>
              <input type="checkbox" name="price" id="" value="10000" />
              2000 - 3000
            </div>
            <div>
              <input type="checkbox" name="price" id="" value="10000" />
              3000 - 4000
            </div>
            <div>
              <input type="checkbox" name="price" id="" value="10000" />
              4000 - 5000
            </div>
            <div>
              <input type="checkbox" name="price" id="" value="10000" />
              5000 - 6000
            </div>
          </div>
        </div>
        <div className="filter-section">
          <h4>Brand</h4>

          <select name="" id="">
            <option value="">Noise</option>
            <option value="">Firstrack</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>Customer Ratings</h4>
          <select name="" id="">
            <option value="">4★ & above</option>
            <option value="">3★ & above</option>
            <option value="">2★ & above</option>
            <option value="">1★ & above</option>
          </select>
        </div>
      </div>

      <div className="products">
        <div className="sort-bar">
          <p>Best Of Noise Smartwatches (Showing 1 – 40 of 72 products)</p>
          <div className="sort-options">
            <span className="sort">Sort By:</span>
            <button className="active fbt">Popularity</button>
            <button className=" fbt">Price -- Low to High</button>
            <button className=" fbt">Price -- High to Low</button>
          </div>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card" onClick={()=>navigate("/view")}>
              <img src={product.image} alt={product.name}  className="imgdetails"/>
              <h3 className="product-title">{product.name}</h3>
              <p className="rating">
                <div className="ratingdiv">
                  <div className="greenstar"> {product.rating} ⭐ </div>
                  <div className="realpricediv">({product.reviews})</div>
                  <div>
                    {product.assured && <p className="assured">✔ Assured</p>}
                  </div>
                </div>
              </p>
              <p className="price">
                ₹{product.price}{" "}
                <span className="old-price">₹{product.oldPrice}</span>
                <span className="discount">({product.discount})</span>
              </p>
              <div className="dprice">
                Upto <span className="dpricespan">₹{product.dprice}</span> off on Exchange
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  );
};

export default Category;
