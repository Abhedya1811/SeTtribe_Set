import React, { useState } from 'react';

const OrdersReport = () => {
    const ordersData = [
        { id: 1, status: 'pending', foodItem: 'Pizza', price: 3.99, date: '2024-05-01' },
        { id: 2, status: 'canceled', foodItem: 'Burger', price: 2.99, date: '2024-05-02' },
        { id: 3, status: 'completed', foodItem: 'Salad', price: 1.49, date: '2024-05-02' },
        { id: 4, status: 'completed', foodItem: 'Biryani', price: 3.19, date: '2024-05-03' },
        { id: 5, status: 'pending', foodItem: 'Dal Tadka', price: 4.49, date: '2024-05-03' }
        // Add more orders here...
    ];

    const [orders, setOrders] = useState(ordersData);
    const [searchInput, setSearchInput] = useState('');

    const exchangeRate = 75;

    const showOrders = (status) => {
        const sortedOrders = ordersData.filter(order => order.status === status).reverse();
        setOrders(sortedOrders);
    };

    const showAllOrders = () => {
        setOrders([...ordersData].reverse());
    };

    const displayOrders = (ordersToDisplay) => {
        return ordersToDisplay.map(order => (
            <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.foodItem}</td>
                <td>₹{(order.price * exchangeRate).toFixed(2)}</td>
                <td>{order.date}</td>
                <td>
                    {order.status === 'pending' && (
                        <button className="btn btn-success btn-sm" onClick={() => markAsDelivered(order.id)}>Delivered</button>
                    )}
                </td>
            </tr>
        ));
    };

    const searchOrders = () => {
        const filteredOrders = ordersData.filter(order =>
            order.foodItem.toLowerCase().includes(searchInput.toLowerCase()) ||
            order.status.toLowerCase().includes(searchInput.toLowerCase()) ||
            order.date.includes(searchInput)
        );
        setOrders(filteredOrders);
    };

    const resetSearch = () => {
        setSearchInput('');
        showAllOrders();
    };

    const markAsDelivered = (orderId) => {
        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status: 'completed' } : order
        );
        setOrders(updatedOrders);
    };

    const goToAnotherPage = () => {
        // Redirect to another page
        window.location.href = 'urlpattern2';
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Orders Report</h1>
            <div className="input-group mb-3">
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={searchOrders}>Search</button>
                    <button className="btn btn-secondary" type="button" onClick={resetSearch}>Reset</button>
                </div>
            </div>
            <div className="btn-group mb-3">
                <button className="btn btn-primary" type="button" onClick={() => showOrders('pending')}>Pending</button>
                <button className="btn btn-warning" type="button" onClick={() => showOrders('canceled')}>Canceled</button>
                <button className="btn btn-success" type="button" onClick={() => showOrders('completed')}>Completed</button>
                <button className="btn btn-info" type="button" onClick={showAllOrders}>Show All</button>
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Food Item</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayOrders(orders)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={goToAnotherPage}>Go to Booked Tables Report</button>
        </div>
    );
};

export default OrdersReport;
