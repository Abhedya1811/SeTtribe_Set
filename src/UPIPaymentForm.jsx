import React, { useState } from "react";
import axios from "axios";

const UPIPaymentForm = ({ paymentAmount, setPaymentError }) => {
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentProcessing(true);

    try {
      const response = await axios.post("http://localhost:8080/api/payments/upi", {
        upiId: upiId,
        amount: paymentAmount,
      });

      if (response.data === "UPI Payment Successful") {
        console.log("UPI Payment successful");
        // Handle the successful payment
        setPaymentProcessing(false);
      } else {
        setError(response.data);
        setPaymentProcessing(false);
      }
    } catch (error) {
      console.error("Error processing UPI payment:", error);
      setPaymentError("An error occurred while processing the UPI payment");
      setPaymentProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>UPI Payment</h2>
      <div className="form-group">
        <label htmlFor="upi-id">UPI ID</label>
        <input
          type="text"
          id="upi-id"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={paymentProcessing}>
        {paymentProcessing ? "Processing..." : "Pay with UPI"}
      </button>
    </form>
  );
};

export default UPIPaymentForm;