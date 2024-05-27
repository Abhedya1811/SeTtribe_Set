import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ paymentAmount, setPaymentError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentProcessing(true);

    try {
      const response = await axios.post("http://localhost:8080/api/payments/card", {
        amount: paymentAmount,
      });
      const clientSecret = response.data;

      if (!stripe || !elements) {
        // Stripe is not loaded yet
        setError("Stripe is not loaded correctly");
        setPaymentProcessing(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        setError(error.message);
        setPaymentProcessing(false);
      } else {
        console.log("Payment successful:", paymentIntent);
        // Handle the successful payment
        setPaymentProcessing(false);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setPaymentError("An error occurred while processing the payment");
      setPaymentProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Credit/Debit Card Payment</h2>
      <div className="form-group">
        <label htmlFor="card-element">Card Details</label>
        <CardElement
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fff",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#fa755a",
              },
            },
          }}
        />
        {error && <div className="error-message">{error}</div>}
      </div>
      <button type="submit" disabled={paymentProcessing}>
        {paymentProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;