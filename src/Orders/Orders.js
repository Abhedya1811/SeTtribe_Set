import React, { useState } from 'react';

const OrdersReport = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ status: '', details: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddOrder = () => {
    setOrders(prevOrders => [...prevOrders, { ...newOrder }]);
    setNewOrder({ status: '', details: '' });
  };

  const filteredOrders = orders.filter(order =>
    order.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortByStatus = (a, b) => {
    const statusOrder = {
      'Pending': 1,
      'Canceled': 2,
      'Completed': 3
    };
    return statusOrder[a.status] - statusOrder[b.status];
  };

  const sortedOrders = filteredOrders.sort(sortByStatus);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: 'blue', marginBottom: '1rem' }}>Orders Report</h2>
      <input
        type="text"
        placeholder="Search by details..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sortedOrders.map(order => (
          <li key={order.id} style={{ marginBottom: '1rem' }}>
            <strong>Status: {order.status}</strong>
            <p>{order.details}</p>
          </li>
        ))}
      </ul>
      <h3 style={{ color: 'green', marginTop: '2rem', marginBottom: '1rem' }}>Add New Order</h3>
      <label>Status:</label>
      <input
        type="text"
        name="status"
        value={newOrder.status}
        onChange={handleInputChange}
        style={{ marginBottom: '0.5rem', padding: '0.5rem' }}
      />
      <label>Details:</label>
      <input
        type="text"
        name="details"
        value={newOrder.details}
        onChange={handleInputChange}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      <button onClick={handleAddOrder} style={{ padding: '0.5rem', backgroundColor: 'blue', color: 'white', border: 'none' }}>Add Order</button>
    </div>
  );
};

export default OrdersReport;