// // import React from 'react';
// // import './home.css'
// // import './App.css'
// // import './style.css'

// // function HomePage() {
// //   // Sample data
// //   const categories = ['South Indian', 'North Indian', 'Maharashtrian','Italan','Mexican','Thai','Punjabi','Hydrabadi','kashmiri','chaines','Rajshthani'];
// //   const topFeedback = [
// //     { name: 'John Doe', city: 'New York', opinion: 'Great food and service!' },
// //     { name: 'Jane Smith', city: 'Los Angeles', opinion: 'Amazing experience, will come again!' },
// //     // Add more feedback objects as needed
// //   ];

// //   return (
// //     <div className="home-page">
// //       {/* Navigation Bar */}
      

// //       {/* Rotator with Categories */}
// //       <div className="category-rotator">
// //         <h2>Explore Our Categories</h2>
// //         <div className="categories">
// //           {categories.map(category => (
// //             <div key={category} className="category">{category}</div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Our Happy Clients Section */}
// //       <div className="happy-clients">
// //         <h2>Our Happy Clients</h2>
// //         <ul>
// //           {topFeedback.map(feedback => (
// //             <li key={feedback.name}>
// //               <strong>{feedback.name}</strong> from {feedback.city}: {feedback.opinion}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Feedback Form */}
// //       <div className="feedback-form">
// //         <h2>Send Us Your Feedback</h2>
// //         <form>
// //           <input type="text" placeholder="Your Name" />
// //           <input type="text" placeholder="City" />
// //           <textarea placeholder="Opinion"></textarea>
// //           <button type="submit">Submit</button>
// //         </form>
// //       </div>

// //       {/* Restaurant Opening Hours and Contact Us Section */}
// //       <div className="contact-info">
// //         <div>
// //           <h2>Opening Hours</h2>
// //           <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
// //           <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
// //           <p>Status: Open Now</p>
// //         </div>
// //         <div>
// //           <h2>Contact Us</h2>
// //           <p>Call: +91 123 456 7890</p>
// //           <p>WhatsApp: +91 123 456 7890</p>
// //           {/* Add more contact options as needed */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomePage;



// //import React from 'react';
// import './home.css'
// import './App.css'
// import './style.css'
// import React, { useState } from 'react';
// // import logo from './—Pngtree—javanese character with blangkon holding_8999487.png';


// function HomePage() {
//   // Sample data
//   const categories = ['South Indian', 'North Indian', 'Maharashtrian','Italan','Mexican','Thai','Punjabi','Hydrabadi','kashmiri','chaines','Rajshthani'];
//   const topFeedback = [
//     { name: 'John Doe', city: 'New York', opinion: 'Great food and service!' },
//     { name: 'Jane Smith', city: 'Los Angeles', opinion: 'Amazing experience, will come again!' },
//     // Add more feedback objects as needed
//   ];
//   const [name, setName] = useState('');
//   const [city, setCity] = useState('');
//   const [opinion, setOpinion] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = { name, city, opinion };

//     try {
//       const response = await fetch('/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Feedback submitted successfully!');
//         // Clear form fields after successful submission
//         setName('');
//         setCity('');
//         setOpinion('');
//       } else {
//         alert('Failed to submit feedback.');
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const formData = { name, city, opinion };
  
//     try {
//       const response = await fetch('http://localhost:8080/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         alert('Feedback submitted successfully!');
//         // Clear form fields after successful submission
//         setName('');
//         setCity('');
//         setOpinion('');
//       } else {
//         alert('Failed to submit feedback.');
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };
  

//   return (
//     <div className="home-page">
//       {/* Navigation Bar */}
//       <nav>
//         <div className="logo">
//           <img src='' alt="RESTRO" />
//           {/* {logo} width={4} height={8} */}
//         </div>
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">See Menu</a></li>
//           <li><a href="#">Book a Table</a></li>
//           <li><a href="#">About Us</a></li>
//         </ul>
//       </nav>

//       {/* Rotator with Categories */}
//       <div className="category-rotator">
//         <h2>Explore Our Categories</h2>
//         <div className="categories">
//           {categories.map(category => (
//             <div key={category} className="category">{category}</div>
//           ))}
//         </div>
//       </div>

//       {/* Our Happy Clients Section */}
//       <div className="happy-clients">
//         <h2>Our Happy Clients</h2>
//         <ul>
//           {topFeedback.map(feedback => (
//             <li key={feedback.name}>
//               <strong>{feedback.name}</strong> from {feedback.city}: {feedback.opinion}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="feedback-form">
//       <h2>Send Us Your Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
//         <textarea placeholder="Opinion" value={opinion} onChange={(e) => setOpinion(e.target.value)}></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>

//       {/* Feedback Form
//       <div className="feedback-form">
//         <h2>Send Us Your Feedback</h2>
//         <form>
//           <input type="text" placeholder="Your Name" />
//           <input type="text" placeholder="City" />
//           <textarea placeholder="Opinion"></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div> */}

//       {/* Restaurant Opening Hours and Contact Us Section */}
//       <div className="contact-info">
//         <div>
//           <h2>Opening Hours</h2>
//           <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
//           <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
//           <p>Status: Open Now</p>
//         </div>
//         <div>
//           <h2>Contact Us</h2>
//           <p>Call: +91 123 456 7890</p>
//           <p>WhatsApp: +91 123 456 7890</p>
//           {/* Add more contact options as needed */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


//import React from 'react';
import './home.css'
import './App.css'
import './style.css'
import React, { useEffect, useRef, useState } from 'react';


// import logo from './—Pngtree—javanese character with blangkon holding_8999487.png';


function HomePage() {
  // Sample data
  const categories = ['South Indian', 'North Indian', 'Maharashtrian','Italan','Mexican','Thai','Punjabi','Hydrabadi','kashmiri','chaines','Rajshthani'];
  const topFeedback = [
    { name: 'John Doe', city: 'New York', opinion: 'Great food and service!' },
    { name: 'Jane Smith', city: 'Los Angeles', opinion: 'Amazing experience, will come again!' },
    { name: 'Joh Tennison', city: 'Luxumburg', opinion: 'Taste is Amazing, will come again!' },
    { name: 'John Cena', city: 'Toranto', opinion: 'Best Restro, will come again!' },
    { name: 'Angilna Juoli', city: 'Wancover', opinion: 'Service is best, will come again!' },
    { name: 'Alen Musk', city: 'Mexico', opinion: 'Neat & clean, will come again!' }
    // Add more feedback objects as needed
  ];
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [opinion, setOpinion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, city, opinion };

    try {
      const response = await fetch('http://localhost:8081/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Feedback submitted successfully!');
        // Clear form fields after successful submission
        setName('');
        setCity('');
        setOpinion('');
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  const categoriesRef = useRef(null);

  useEffect(() => {
    const categories = categoriesRef.current;
    const handleAnimationEnd = () => {
      categories.style.animation = 'none';
      void categories.offsetWidth; // Trigger reflow
      categories.style.animation = 'scroll 20s linear infinite'; // Adjust the duration as needed
    };
    categories.addEventListener('animationiteration', handleAnimationEnd);
    return () => {
      categories.removeEventListener('animationiteration', handleAnimationEnd);
    };
  }, []);


 return (


  <div className="home-page">
  {/* Navigation Bar */}
  <nav>
   
    {/* Your navigation links... */}
  
        
      </nav>

      {/* Rotator with Categories */}
      {/* Rotator with Categories */}
      <div className="category-rotator" ref={categoriesRef}>
        <h2>Explore Our Categories</h2>
        <div className="categories">
          {categories.map(category => (
            <div key={category} className="category">{category}</div>
          ))}
          </div>
          </div>

      {/* Our Happy Clients Section */}
      <div className="happy-clients">
      <div class="happy-clients-content">
        <h2>Our Happy Clients</h2>
        <ul>
  {topFeedback.map(feedback => (
    <li key={feedback.name} style={{  marginBottom: '10px' }}>
      <strong>{feedback.name}</strong> from {feedback.city}: {feedback.opinion}
    </li>
  ))}
</ul>
      </div>
      </div>

      <div className="feedback-form">
        <h2>Send Us Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <textarea placeholder="Opinion" value={opinion} onChange={(e) => setOpinion(e.target.value)}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Restaurant Opening Hours and Contact Us Section */}
      <div className="contact-info">
        <div>
          <h2>Opening Hours</h2>
          <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          <p>Status: Open Now</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>Call: +91 123 456 7890</p>
          <p>WhatsApp: +91 123 456 7890</p>
          {/* Add more contact options as needed */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
