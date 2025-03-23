import { useState } from "react";
import "./User.css"
import Navbar from "../homepage/Navbar";


export default function User() {
  const [email, setEmail] = useState("example@email.com");
  const [mobile, setMobile] = useState("+1234567890");

  return (
    <div className="user-main-div">
       <Navbar/>
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Hello, PRITAM KUMAR PATRA</h2>
        <nav>
          <ul className="sidebar-menu">
            <li className="active">Profile Information</li>
            <li>Manage Addresses</li>
            <li>PAN Card Information</li>
            <li>Payments</li>
            <li>My Stuff</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="main-title">Personal Information <span className="edit">Edit</span></h1>
        <div className="form-group">
          <input type="text" className="input-field" value="PRITAM KUMAR" readOnly />
          <input type="text" className="input-field" value="PATRA" readOnly />
        </div>
        
        <div className="form-group">
          <label>Your Gender</label>
          <div className="gender-group">
            <label><input type="radio" name="gender" checked readOnly /> Male</label>
            <label><input type="radio" name="gender" readOnly /> Female</label>
          </div>
        </div>

        <div className="form-group">
          <label>Email Address <span className="edit">Edit</span></label>
          <input type="email" className="input-field" value={email} readOnly />
        </div>

        <div className="form-group">
          <label>Mobile Number <span className="edit">Edit</span></label>
          <input type="text" className="input-field" value={mobile} readOnly />
        </div>

        {/* <div className="faq-section">
          <h2 className="faq-title">FAQs</h2>
          <p className="faq-text"><strong>What happens when I update my email address (or mobile number)?</strong></p>
          <p className="faq-text">Your login email ID (or mobile number) changes, likewise...</p>
          <p className="faq-text"><strong>When will my Flipkart account be updated?</strong></p>
          <p className="faq-text">It happens as soon as you confirm the verification...</p>
          <p className="faq-text"><strong>What happens to my existing Flipkart account?</strong></p>
          <p className="faq-text">Updating email or mobile doesn’t invalidate your account...</p>
        </div> */}
      </main>
    </div>

    </div>
  );
}

