// import React, { useState, useEffect } from 'react';

// import './AboutUs.css'; 

// const AboutUs = () => {
 
//   const [ownerDetails] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "123-456-7890"
//   });
//   const [restaurantLocation] = useState({
//     address: "123 Main St, City, Country",
//     phone: "987-654-3210",
//     email: "info@example.com"
//   });
  

   
   

//   return (
//     <div className="about-us-container">
//       <h2>About Us</h2>
//       <div className="restaurant-info">
//         <h3>Restaurant Information</h3>
//         <p><strong>Welcome to our restaurant!</strong> We are dedicated to providing you with a wonderful dining experience. Our restaurant is located at <strong>{restaurantLocation.address}</strong>. For reservations, please call <strong>{restaurantLocation.phone}</strong> or email us at <strong>{restaurantLocation.email}</strong>. We look forward to serving you!</p>
//       </div>
    
//       <div className="owner-details">
//         <h3>Owner Details</h3>
//         <p>Name: {ownerDetails.name}</p>
//         <p>Email: {ownerDetails.email}</p>
//         <p>Phone: {ownerDetails.phone}</p>
//       </div>
//       <div className="restaurant-location">
//         <h3>Restaurant Location</h3>
//         <p>Address: {restaurantLocation.address}</p>
//         <p>Phone: {restaurantLocation.phone}</p>
//         <p>Email: {restaurantLocation.email}</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;




import React, { useState, useEffect } from 'react';

import './AboutUs.css'; 

const AboutUs = () => {
 
  const [ownerDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890"
  });
  const [restaurantLocation] = useState({
    address: "123 Main St, City, Country",
    phone: "987-654-3210",
    email: "info@example.com"
  });
  

   
   

  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="restaurant-info">
        <h3>Restaurant Information</h3>
        <p><strong>Welcome to our restaurant!</strong> We are dedicated to providing you with a wonderful dining experience. Our restaurant is located at <strong>{restaurantLocation.address}</strong>. For reservations, please call <strong>{restaurantLocation.phone}</strong> or email us at <strong>{restaurantLocation.email}</strong>. We look forward to serving you!</p>
      </div>
    
      <div className="owner-details">
        <h3>Owner Details</h3>
        <p>Name: {ownerDetails.name}</p>
        <p>Email: {ownerDetails.email}</p>
        <p>Phone: {ownerDetails.phone}</p>
      </div>
      <div className="restaurant-location">
        <h3>Restaurant Location</h3>
        <p>Address: {restaurantLocation.address}</p>
        <p>Phone: {restaurantLocation.phone}</p>
        <p>Email: {restaurantLocation.email}</p>
      </div>
    </div>
  );
};

export default AboutUs;
