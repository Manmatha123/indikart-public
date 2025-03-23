import React, { useState } from "react";
import "./Addtocart.css";
import Navbar from "../homepage/Navbar";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 15 Pro Max",
      details: "Blue, 256GB",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695046394/Croma%20Assets/Communication/Cases%20and%20Covers/Images/300878_0_clodxl.png",
      price: 159999,
      discountPrice: 139999,
      qty: 1,
      deliveryDate: "March 28, 2025",
    },
    {
      id: 2,
      name: "Sony WH-1000XM5 Wireless Headphones",
      details: "Black, Noise Cancelling",
      image:
        "https://media.croma.com/image/upload/v1682757035/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/272419_7_ysrxpo.png",
      price: 34999,
      discountPrice: 29999,
      qty: 1,
      deliveryDate: "March 29, 2025",
    },
    {
    id: 3,
      name: "Apple Watch Series 10",
      details: " 46mm Jet Black, GPS+Cellular ",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-cell-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aWp3UWRQeU9ENTVkdnpWZ2VCQ1JYVkF1Z0RaeFB5LzRxZEliRVE2WkswOW5YNUh6UG9VcVpLK2VQampYMHFQR0ZraFRqYm9IdFcyZHNBc3g5MFNqQkIxRVpGM0VTYkFEYWkrVUpmdm5HMEsvZzdYL1dmbHI1ck0vS0dDZmJkTUNtcXlYK1hMV0U1ZW9xcCtlRHF3V3gyZThGL0dtL1JkeEJQSnRCMXJsZFBFY2doN2ZiODFwWklZeDgrZ0RtbVRXag",
      price: 59900,
      discountPrice: 49990,
      qty: 1,
      deliveryDate: "March 28, 2025",
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
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items-container">
          <h2>Shopping Cart</h2>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <p className="delivery-date">Delivery by {item.deliveryDate}</p>
                </div>
                <p className="item-details">{item.details}</p>
                <p className="cart-price">
                  <span className="original-price">₹{item.price.toLocaleString()}</span>
                  <span className="discounted-price">₹{item.discountPrice.toLocaleString()}</span>
                  <span className="discount-percentage">
                    {Math.round(((item.price - item.discountPrice) / item.price) * 100)}% off
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

        <div className="cart-summary-container">
          <div className="cart-summary">
            <h2>Price Details</h2>
            <hr />
            <div className="summary-row"><span>Price</span><span>₹{totalMRP.toLocaleString()}</span></div>
            <div className="summary-row discount"><span>Discount</span><span>-₹{totalDiscount.toLocaleString()}</span></div>
            <div className="summary-row"><span>Delivery Charges</span><span>{deliveryCharge === 0 ? "Free" : "₹" + deliveryCharge.toLocaleString()}</span></div>
            <hr />
            <div className="summary-row total"><span>Total Amount</span><span>₹{totalAmount.toLocaleString()}</span></div>
            <p className="saving-text">You save ₹{totalDiscount.toLocaleString()} on this order!</p>
            <p className="secure-text">✅ Safe and Secure Payments | ✅ Easy Returns Available</p>
          </div>
        </div>
      </div>

      <div className="order-section">
        <button className="order-btn">Place Order</button>
      </div>
    </div>
    </div>
  );
};

export default AddToCart;







