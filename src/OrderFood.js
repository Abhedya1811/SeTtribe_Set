import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

import './OrderFood.css';

// Food item data with prices
const foodItems = [
  { name: 'Pizza', price: 12.99 },
  { name: 'Burger', price: 8.99 },
  { name: 'Sushi', price: 15.99 },
  { name: 'Pasta', price: 10.99 },
];

const OrderFood = () => {
  const [orders, setOrders] = useState([]);
  const [currentFood, setCurrentFood] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const { isLoggedIn } = useAuth(); // Check if the user is logged in
  const navigate = useNavigate(); // Redirect if not logged in

  const handleFoodChange = (e) => {
    setCurrentFood(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setCurrentQuantity(parseInt(e.target.value, 10));
  };

  const addOrder = () => {
    if (currentFood && currentQuantity > 0) {
      const existingOrderIndex = orders.findIndex(
        (order) => order.food === currentFood
      );

      const foodItem = foodItems.find((item) => item.name === currentFood);

      if (existingOrderIndex !== -1) {
        const updatedOrders = [...orders];
        updatedOrders[existingOrderIndex].quantity += currentQuantity;
        setOrders(updatedOrders);
      } else {
        setOrders([
          ...orders,
          { food: currentFood, quantity: currentQuantity, price: foodItem.price },
        ]);
      }

      setCurrentFood('');
      setCurrentQuantity(1);
    } else {
      alert('Please select a food item and enter a valid quantity.');
    }
  };

  const removeOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  
  const calculateTotal = (orders) => {
    return orders.reduce(
      (total, order) => total + order.quantity * order.price, 0);
  };


  const moveToAnotherPage = () => {
    // Replace '/another-page' with the path of the page you want to navigate to
    window.location.href =('/pay');
  };
    const placeOrder = () => {
    if (isLoggedIn) {
      if (orders.length > 0) {
        const total = calculateTotal();
        alert(`Order placed! Total value: $${total.toFixed(2)}`);
        setOrders([]); // Clear orders after placing
      } else {
        alert('No items to order.');
      }
    } else {
      navigate('/login'); // Redirect if not logged in
    }
  };

  // const placeOrder = () => {
  //   if (isLoggedIn) {
  //     if (orders.length > 0) {
  //       axios.post('/api/orders', { orders })
  //         .then((response) => {
  //           const total = calculateTotal();
  //           alert(`Order placed! Total value: $${total.toFixed(2)}`);
  //           setOrders([]); // Clear orders after placing
  //         })
  //         .catch((error) => {
  //           console.error('Error placing order:', error);
  //           alert('There was an error placing the order. Please try again.');
  //         });
  //     } else {
  //       alert('No items to order.');
  //     }
  //   } else {
  //     navigate('/login'); // Redirect if not logged in
  //   }
  // };



  // const placeOrder = (isLoggedIn, orders, setOrders, navigate) => {
  //   if (!isLoggedIn) {
  //     navigate('/login'); // Redirect to login if not logged in
  //     return;
  //   }

  //   if (orders.length === 0) {
  //     alert('No items to order.');
  //     return;
  //   }

  //   axios.post('/api/orders', { orders })
  //     .then((response) => {
  //       const total = calculateTotal(orders); // Calculate total order value
  //       alert(`Order placed! Total value: $${total.toFixed(2)}`);
  //       setOrders([]); // Clear orders after placing
  //     })
  //     .catch((error) => {
  //       console.error('Error placing order:', error);
  //       alert('There was an error placing the order. Please try again.');
  //     });
  // };

  return (
    <div className="order-food">
      <h2>Order Multiple Food Items</h2>
      <div className="form-group">
        <label htmlFor="food">Choose food:</label>
        <select id="food" value={currentFood} onChange={handleFoodChange}>
          <option value="">Select a food item</option>
          {foodItems.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name} - ${item.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={currentQuantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={addOrder}>Add to Order</button>

      <div className="order-list">
        {orders.length > 0 && (
          <>
            <h3>Current Order</h3>
            <ul>
              {orders.map((order, index) => (
                <li key={index}>
                  {order.food} x {order.quantity} = $
                  {(order.quantity * order.price).toFixed(2)}
                  <button onClick={() => removeOrder(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {orders.length > 0 && (
        <div className="total-order-value">
          <h3>Total Order Value: ${calculateTotal().toFixed(2)}</h3>
        </div>
      )}

      <button onClick={moveToAnotherPage}>Place Order</button>
    </div>
  );
};

export default OrderFood;
