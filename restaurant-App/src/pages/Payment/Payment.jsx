import React from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";


const Payment = () => {
    const navigate = useNavigate();

    return (
        <div className="payment-container">
            <h2 className="payment-title">Payment Details</h2>

            <div className="payment-section">
                <label>Card Holder Name</label>
                <input type="text" placeholder="John Doe" />
            </div>

            <div className="payment-section">
                <label>Card Number</label>
                <input type="text" placeholder="xxxx xxxx xxxx xxxx" />
            </div>

            <div className="payment-row">
                <div className="payment-section small">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                </div>

                <div className="payment-section small">
                    <label>CVV</label>
                    <input type="password" placeholder="123" />
                </div>
            </div>

            <button
                onClick={() => navigate("/success")}
                className="confirm-btn"
            >
                Complete Payment
            </button>
        </div>
    );
};

export default Payment;
