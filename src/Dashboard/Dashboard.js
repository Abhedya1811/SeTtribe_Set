import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [totalOrders, setTotalOrders] = useState('');
  const [deliveredOrders, setDeliveredOrders] = useState('');
  const [canceledOrders, setCanceledOrders] = useState('');
  const [totalCashCollection, setTotalCashCollection] = useState('');
  const [totalTablesBooked, setTotalTablesBooked] = useState('');
  const [canceledTables, setCanceledTables] = useState('');
  const maxAvailableTables = 200;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if total tables booked is less than available tables
    if (parseInt(totalTablesBooked) > maxAvailableTables) {
      alert('Total tables booked must be between 1 and ' + maxAvailableTables + '.');
      return;
    }

    // Check if canceled tables exceed available tables
    if (parseInt(canceledTables) > maxAvailableTables) {
      alert('Canceled tables cannot exceed the maximum available tables.');
      return;
    }

    // Validate input values
    if (!isValidInput()) {
      alert('Please enter valid input values.');
      return;
    }

    // Prepare data object with input values
    const data = {
      totalOrders: parseInt(totalOrders),
      deliveredOrders: parseInt(deliveredOrders),
      canceledOrders: parseInt(canceledOrders),
      totalCashCollection: parseFloat(totalCashCollection),
      totalTablesBooked: parseInt(totalTablesBooked),
      canceledTables: parseInt(canceledTables),
    };

    // Send data to an API
    try {
      const response = await fetch('https://example.com/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data to API');
      }
    } catch (error) {
      console.error('Error while sending data to API:', error);
    }

    // Reset input fields
    setTotalOrders('');
    setDeliveredOrders('');
    setCanceledOrders('');
    setTotalCashCollection('');
    setTotalTablesBooked('');
    setCanceledTables('');
  };

  const isValidInput = () => {
    // Check if inputs are non-negative numbers
    if (
      !/^\d+$/.test(totalOrders) ||
      !/^\d+$/.test(deliveredOrders) ||
      !/^\d+$/.test(canceledOrders) ||
      !/^\d+$/.test(canceledTables)
    ) {
      return false;
    }

    // Check if total, delivered, and canceled orders have 3 or fewer digits
    if (
      totalOrders.length > 3 ||
      deliveredOrders.length > 3 ||
      canceledOrders.length > 3
    ) {
      return false;
    }

    // Check if total cash collection has 6 or fewer digits
    if (totalCashCollection.length > 6) {
      return false;
    }

    return true;
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Total Orders:</label>
          <input
            type="text"
            pattern="\d*"
            maxLength="3"
            value={totalOrders}
            onChange={(e) => setTotalOrders(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Delivered Orders:</label>
          <input
            type="text"
            pattern="\d*"
            maxLength="3"
            value={deliveredOrders}
            onChange={(e) => setDeliveredOrders(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Canceled Orders:</label>
          <input
            type="text"
            pattern="\d*"
            maxLength="3"
            value={canceledOrders}
            onChange={(e) => setCanceledOrders(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Total Cash Collection:</label>
          <input
            type="text"
            pattern="\d*\.?\d{0,2}"
            maxLength="6"
            value={totalCashCollection}
            onChange={(e) => setTotalCashCollection(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Total Tables Booked:</label>
          <input
            type="number"
            pattern="\d*"
            min="1"
            max={maxAvailableTables}
            value={totalTablesBooked}
            onChange={(e) => setTotalTablesBooked(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Canceled Tables:</label>
          <input
            type="text"
            pattern="\d*"
            value={canceledTables}
            onChange={(e) => setCanceledTables(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;