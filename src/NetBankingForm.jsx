import React, { useState } from 'react';

const NetBankingForm = () => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit the net banking payment
    if (!bankName || !accountNumber) {
      setError('Please fill in all the required fields.');
    } else {
      // Submit the net banking payment
      console.log('Net Banking Payment:', { bankName, accountNumber });
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Net Banking</h2>
      <div className="form-group">
        <label htmlFor="bank-name">Bank Name</label>
        <input
          type="text"
          id="bank-name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="account-number">Account Number</label>
        <input
          type="text"
          id="account-number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default NetBankingForm;