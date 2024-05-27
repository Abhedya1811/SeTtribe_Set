import React, { useState } from 'react';
import './menu.css'
import './App.css'
import './style.css'


function MenuPage() {

  


  const moveToAnotherPage = () => {
    // Replace '/another-page' with the path of the page you want to navigate to
    window.location.href =('/orderfood');
  };
  // Sample data for food items
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'South Indian Dosa', price: 'RS500', description: 'Delicious dosa served with chutney and sambar.' },
    { id: 2, name: 'Punjabi Butter Chicken', price: 'RS250', description: 'Tender chicken cooked in rich buttery soya sauce.' },
    { id: 3, name: 'Maharashtrian Pav bhaji', price: 'RS120', description: 'Fluppy Bread Baked in full of butter with Tasty Bhaji.' },
    { id: 4, name: 'Maharashtrian Pani Puri', price: 'RS500', description: 'Fluppy Puries and tangy Water.' },
    { id: 5, name: 'Punjabi Sarsoda saag', price: 'RS150', description: 'Tender chicken cooked in rich buttery tomato sauce.' },
    { id: 6, name: 'South Indian Uni Appam', price: 'RS100', description: 'Delicious rice flaour rotti so tender and with Sambhar bhaji.' },
    { id: 7, name: 'Rajstani litti Chokha', price: 'RS150', description: 'Wheat ball Baked in coal with tasty varan .' },
    { id: 8, name: 'Hydrabadi Biryani', price: 'RS100', description: 'Tender chicken cooked in rich buttery rice yummm  .' },
    { id: 9, name: 'North Indian Butter Chicken', price: 'RS1000', description: 'Tender chicken cooked in rich buttery tomato sauce.' },
    { id: 10, name: 'North Indian Butter Chicken', price: 'RS1000', description: 'Tender chicken cooked in rich buttery tomato sauce.' },
    
    // Add more food items as needed
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter food items based on search query
  const filteredFoodItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle filter selection
  const handleFilter = (filterType) => {
    // Implement filtering logic based on filterType
    // For simplicity, we're not implementing actual filtering logic in this example
    alert(`Filtering by ${filterType}`);
  };

  return (
    <div className="menu-page">
      {/* Master Search */}
      <div className="master-search">
        <input
          type="text"
          placeholder="Search for food items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Apply Filters */}
      <div className="apply-filters">
        <button  onClick={() => handleFilter('Veg')}>Veg</button>
        <button  onClick={() => handleFilter('Non-Veg')}>Non-Veg</button>
        {/* Add more filter options as needed */}
      </div>

      {/* List of Food Items */}
      <div className="food-items">
        {filteredFoodItems.map(item => (
          <div key={item.id} className="food-item">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <button onClick={moveToAnotherPage}>Order This</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;