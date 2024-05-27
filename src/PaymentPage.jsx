import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import NetBankingForm from './NetBankingForm';
import QRCodePayment from './QRCodePayment';
import UPIPaymentForm from './UPIPaymentForm';
import CashOnDelivery from './CashOnDelivery';
import './PaymentPage.css'; // Import the CSS file for PaymentPage

const stripePromise = loadStripe('pk_live_51PDgfhSG2H3L8sTMHvSt9QtYoB5pq6F7vkV44iwSv3n2iz7YFPzxP6HnKSBXsnrrFfQbaQduxh7L0G2bh44ntOmQ00xLK0QAZB');

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentError, setPaymentError] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setPaymentError(''); // Reset the error state when the payment method changes
  };

  const renderPaymentForm = () => {
    const paymentAmount = 1000; // Fixed amount of 10 rupees (1000 paise)

    switch (paymentMethod) {
      case 'net-banking':
        return <NetBankingForm setPaymentError={setPaymentError} />;
      case 'qr-code':
        return <QRCodePayment amount={paymentAmount} setPaymentError={setPaymentError} />;
      case 'upi':
        return <UPIPaymentForm setPaymentError={setPaymentError} />;
      case 'cod':
        return <CashOnDelivery setPaymentError={setPaymentError} />;
      case 'card':
        return (
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentAmount={paymentAmount} setPaymentError={setPaymentError} />
          </Elements>
        );
      default:
        return null;
    }
  };

  return (
    <div className="payment-page">
      <h1>Restaurant Payment</h1>
      <div className="payment-options">
        <div className="form-group">
          <label htmlFor="payment-method">Select Payment Method:</label>
          <select
            id="payment-method"
            className="form-control"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="">Select Payment Method</option>
            <option value="net-banking">Net Banking</option>
            <option value="qr-code">QR Code</option>
            <option value="upi">UPI Payment</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </div>
      </div>
      {paymentError && <div className="payment-error">{paymentError}</div>}
      {renderPaymentForm()}
    </div>
  );
};

export default PaymentPage;
