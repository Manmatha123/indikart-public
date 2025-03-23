import React, { useState } from "react";
import "./Addtocart.css";
import Navbar from "../homepage/Navbar";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 15 Pro Max",
      details: "blue color Regular size",
      image:
        "https://external-preview.redd.it/apple-iphone-15-pro-max-review-more-camera-power-and-v0-uBnXQu7Iq_Rvm4WedHSJRXpvVqS-413_TyMFsjy8wXI.jpg?width=1080&crop=smart&auto=webp&s=e1c4c1edd2f8b94276306ebca93d019b88b23710",
      price: 159999,
      discountPrice: 139999,
      qty: 1,
    },
    {
      id: 2,
      name: "Sony WH-1000XM5 Wireless Headphones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VINgVQsovk_IL8AKjWwTy9583VXy4tgZCA&s",
      price: 34999,
      discountPrice: 29999,
      qty: 1,
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const saveForLater = (id) => {
    alert("Item moved to Save for Later!");
  };

  const totalMRP = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const totalDiscount = cartItems.reduce(
    (total, item) => total + (item.price - item.discountPrice) * item.qty,
    0
  );
  const deliveryCharge = totalMRP > 50000 ? 0 : 100;
  const totalAmount = totalMRP - totalDiscount + deliveryCharge;

  return (
    <div className="cart-central-container">
      <Navbar/>
    <div className="cart-container">
      {/* Left: Cart Items */}
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-price">
                <span className="original-price">
                  ₹{item.price.toLocaleString()}
                </span>
                <span className="discounted-price">
                  ₹{item.discountPrice.toLocaleString()}
                </span>
                <span className="discount-percentage">
                  {Math.round(
                    ((item.price - item.discountPrice) / item.price) * 100
                  )}
                  % off
                </span>
              </p>
              <div className="cart-actions">
                <div className="cart-qty">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="cart-buttons">
                  <button className="save-later-btn" onClick={() => saveForLater(item.id)}>
                    SAVE FOR LATER
                  </button>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Price Summary */}
      <div className="cart-summary">
        <h2>Price Details</h2>
        <div className="summary-row">
          <span>Price</span>
          <span>₹{totalMRP.toLocaleString()}</span>
        </div>
        <div className="summary-row discount">
          <span>Discount</span>
          <span>-₹{totalDiscount.toLocaleString()}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Charges</span>
          <span>{deliveryCharge === 0 ? "Free" : "₹" + deliveryCharge.toLocaleString()}</span>
        </div>
        <hr />
        <div className="summary-row total">
          <span>Total Amount</span>
          <span>₹{totalAmount.toLocaleString()}</span>
        </div>
        <p className="saving-text">You save ₹{totalDiscount.toLocaleString()} on this order!</p>
        <p className="secure-text">
          ✅ Safe and Secure Payments | ✅ Easy Returns Available
        </p>
      </div>

      {/* Bottom: Fixed Place Order Button */}
      <div className="order-section">
        <button className="order-btn">Place Order</button>
      </div>
    </div>
    </div>
  );
};

export default AddToCart;







