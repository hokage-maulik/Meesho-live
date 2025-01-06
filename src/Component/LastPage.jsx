import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Lastpage.css'

export default function LastPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="last-page-container">
      <div className="thank-you-card">
        <h1 className="thank-you-header">Thank You for Your Purchase!</h1>
        <p className="thank-you-text">
          Your order has been successfully placed. We will notify you when your items are on their way!
        </p>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Order Number: #123456</p>
          <p>Expected Delivery: 5-7 business days</p>
        </div>
        <button className="home-button" onClick={handleGoHome}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
