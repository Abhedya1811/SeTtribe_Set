import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFileAlt, faTable, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './AdminDashboard.css';



const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('');
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State to track loading state
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filteredTables, setFilteredTables] = useState([]);
  
  ///gpt changes/////
  const [ordersData, setOrdersData] = useState(null);
  const [bookedTablesData, setBookedTablesData] = useState(null);
///ended 

  // State variables for managing staff members
  const [staffMembers, setStaffMembers] = useState([]);
  const [newStaffMember, setNewStaffMember] = useState({
    fullName: '',
    designation: '',
    username: '',
    password: ''
  });

  const [editedIndex, setEditedIndex] = useState(null); // State to track the index of the staff member being edited
//changes of handle section
const handleSectionClick = (section) => {
  setActiveSection(section);
  if (section === 'dashboard') {
    fetchDashboardData();
  } else if (section === 'orders') {
    fetchOrdersData();
  } else if (section === 'bookedTables') {
    fetchBookedTablesData();
  }
 
    
};

const fetchDashboardData = () => {
  fetch('http://localhost:8080/admin_dashborad/getAllOrder')
    .then(response => response.json())
    .then(data => setDashboardData(data))
    .catch(error => console.error('Error fetching dashboard data:', error));
};

const fetchOrdersData = () => {
  fetch('http://localhost:8080/ordetable/getAllOrder')
    .then(response => response.json())
    .then(data => {setOrdersData(data);
    setFilteredOrders(data);})
    .catch(error => console.error('Error fetching orders data:', error));
};

const fetchBookedTablesData = () => {
  fetch('http://localhost:8080/admin_table/getAllTable')
    .then(response => response.json())
    .then(data => {
      setBookedTablesData(data);
      setFilteredTables(data); // Initialize filteredTables with all tables
    })
    .catch(error => console.error('Error fetching booked tables data:', error));
};
///end here////
const renderSection = () => {
  switch (activeSection) {
    case 'dashboard':
      return renderDashboard();
    case 'orders':
      return renderOrdersReport();
    case 'bookedTables':
      return renderBookedTablesReport();
    case 'createUsers':
      return renderCreateUser();
    default:
      return null;
    }
  };
  

  const renderDashboard = () => {
    if (!dashboardData) {
      // Render loading indicator or return null if data is not available yet
      return <p>Loading...</p>;
    }

    if (Object.keys(dashboardData).length === 0) {
      // Render an empty table when data is not available
      return (
        <section className="dashboard-section">
          <h3>No data available</h3>
        </section>
      );
    }

    return (
      <section className="dashboard-section">
        <h3>Total Orders</h3>
        <p>{dashboardData.totalOrders}</p>
    
        <h3>Delivered Orders</h3>
        <p>{dashboardData.deliveredOrders}</p>
    
        <h3>Canceled Orders</h3>
        <p>{dashboardData.canceledOrders}</p>
    
        <h3>Total Cash Collection</h3>
        <p>{dashboardData.totalCashCollection}</p>
    
        <h3>Total Tables Booked</h3>
        <p>{dashboardData.totalTablesBooked}</p>
    
        <h3>Canceled Tables</h3>
        <p>{dashboardData.canceledTables}</p>
      </section>
    );
  };
////////////////////////////////////////////////////order report////////////////////////////////////////////
  const renderOrdersReport = () => {

    if (!ordersData) {
      // Render loading indicator or return null if data is not available yet
      return <p>Loading...</p>;
    }
  
    if (!ordersData.length) {
      // Render a message when no orders are available
      return <p>No orders available</p>;
    }
  
    // Master search functionality
    const handleSearch = (event) => {
      const searchQuery = event.target.value.toLowerCase();
      // Filter orders based on search query
      const filteredOrders = ordersData.filter(order =>
        order.customer.toLowerCase().includes(searchQuery) ||
        order.orderNumber.toLowerCase().includes(searchQuery)
      );
      // Update state with filtered orders
      setFilteredOrders(filteredOrders);
    };
  
    return (
      <section className="orders-report">
        <div className="search-bar">
          <input type="text" placeholder="Search..." onChange={(e) => handleSearch(e)} />
        </div>
        <div className="orders-list">
          {filteredOrders.map(order => (
            <div key={order.id} className="order-item">
              <p>Order Number: {order.id}</p>
              <p>Status: {order.status}</p>
              <p>Customer: {order.customer}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </section>
    );
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);
////////////////////////////////////////////////////book table////////////////////////////////////////////
  const renderBookedTablesReport = () => {

    if (!bookedTablesData) {
      // Render loading indicator or return null if data is not available yet
      return <p>Loading...</p>;
    }
  
    if (!bookedTablesData.length) {
      // Render a message when no booked tables are available
      return <p>No booked tables available</p>;
    }
  
    // Master search functionality
    const handleSearch = (event) => {
      const searchQuery = event.target.value.toLowerCase();
      // Filter tables based on search query
      const filteredTables = bookedTablesData.filter(table =>
        table.customer.toLowerCase().includes(searchQuery) ||
        table.tableNumber.toLowerCase().includes(searchQuery)
      );
      // Update state with filtered tables
      setFilteredTables(filteredTables);
    };
  
    return (
      <section className="booked-tables-report">
        <div className="search-bar">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
        <div className="tables-list">
          {filteredTables.map(table => (
            <div key={table.id} className="table-item">
              <p>Table Number: {table.tableNumber}</p>
              <p>Status: {table.status}</p>
              <p>Customer: {table.username}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </section>
    );
  };
  useEffect(() => {
    fetchBookedTablesData();
  }, []);

///////////////////////////////////////////ordertableend////////////

  useEffect(() => {
    // Fetch all staff members from backend when component mounts
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStaffMembers(result);
      })
      .catch((error) => {
        console.error('Error fetching staff members:', error);
        // Handle the error as needed, e.g., display an error message to the user
      });
  }, []);
  //////////////////////////////////////////////////////////////create user///////////////////////////////////
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);
  const renderCreateUser = () => {
    // Define regular expressions for validation
    const alphabetRegex = /^[a-zA-Z\s]+$/; // Allows only alphabets and spaces
    const alphanumericRegex = /^[a-zA-Z0-9]+$/; // Allows alphanumeric characters
    const usernameRegex = /^[a-zA-Z0-9.@]+$/; // Allows alphanumeric characters, '.', and '@'
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/; // Allows all special characters
  
    // Function to handle changes in the new staff member form inputs
    const handleInputChange = (event) => {
      const { name, value, } = event.target;

      

      // Perform validation based on the field name
  switch (name) {
    case 'fullName':
    case 'designation':
      // Validate for alphabets and spaces
      if (!alphabetRegex.test(value)) {
        alert('Please enter only alphabetic characters.');
        return;
      }
      break;
    case 'username':
      // Validate for alphanumeric characters, '.', and '@'
      if (!usernameRegex.test(value)) {
        alert('Username should be alphanumeric and may contain ".", "@"');
        return;
      }
      break;
    case 'password':
      // No validation required for password
      break;
    default:
      break;
  }

  // Update the state with the validated input value
  setNewStaffMember({ ...newStaffMember, [name]: value });
};


    // Function to add a new staff member
    const handleAddStaffMember = (e) => {
      e.preventDefault();
      const { fullName, designation, username, password } = newStaffMember;
      const student = { fullName, designation, username, password };
      console.log(student);
      fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      })
        .then(() => {
          console.log("New Student added");
          // Fetch updated list of staff members after adding a new member
          fetch("http://localhost:8080/student/getAll")
            .then((res) => res.json())
            .then((result) => {
              setStaffMembers(result);
            })
            .catch((error) => {
              console.error('Error fetching staff members:', error);
              // Handle the error as needed
            });
        })
        .catch((error) => {
          console.error('Error adding new student:', error);
          // Handle the error as needed
        });
    
      // Clear the form fields after adding
      setNewStaffMember({
        fullName: "",
        designation: "",
        username: "",
        password: "",
      });
    };


    // Function to delete a staff member/////////////////////
    const handleDeleteStaffMember = (index) => {
      // Make API call to delete the data in the database
      fetch('http://localhost:8080/student/delete/${staffMembers[index].username}', {
        method: 'DELETE',
      }).then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete data from the database');
        }
        // If deletion is successful, update the state to reflect the change
        const updatedStaffMembers = [...staffMembers];
        updatedStaffMembers.splice(index, 1);
        setStaffMembers(updatedStaffMembers);
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        alert('Failed to delete data. Please try again.');
      });
    };

    // Function to edit a staff member
    const handleEditStaffMember = (index) => {
      // Set the newStaffMember state with the details of the staff member being edited
      setNewStaffMember(staffMembers[index]);
      // Set the index of the staff member being edited
      setEditedIndex(index);
    };
    
    // Function to save the edited staff member
    const handleSaveEditedStaffMember = () => {
      // Validate if all fields are filled
      if (!newStaffMember.fullName || !newStaffMember.designation || !newStaffMember.username || !newStaffMember.password) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Create a copy of the staff members array
      const updatedStaffMembers = [...staffMembers];
      
      // Update the staff member at the edited index
      updatedStaffMembers[editedIndex] = newStaffMember;
      
      // Make API call to update the data in the database
      fetch("http://localhost:8080/student/update", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStaffMember),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update data in the database');
        }
        // Set the updated staff members array to state
        setStaffMembers(updatedStaffMembers);
        // Clear the form fields after updating
        setNewStaffMember({
          fullName: '',
          designation: '',
          username: '',
          password: ''
        });
        // Reset the edited index
      })
      .catch(error => {
        console.error('Error updating data:', error);
        alert('Failed to update data. Please try again.');
      });
    };
  

    return (
      <section className="create-user">
      <h3>Create Staff Member</h3>
      <div className="new-staff-form">
        <input type="text" name="fullName" value={newStaffMember.fullName} placeholder="Full Name" onChange={handleInputChange} /><br/>
        <select name="designation" value={newStaffMember.designation} onChange={handleInputChange}>
          <option value="">Select Designation</option>
          <option value="Housekeeping">Housekeeping</option>
          <option value="Manager">Manager</option>
          <option value="Chef">Chef</option>
          <option value="Kitchen Manager">Kitchen Manager</option>
          <option value="Event Planner">Event Planner</option>
          <option value="Cook">Cook</option>
          <option value="Catering Manager">Catering Manager</option>
          <option value="Maintenance Supervisor">Maintenance Supervisor</option>
          <option value="Account Manager">Account Manager</option>
        </select><br/>
        <input type="text" name="username" value={newStaffMember.username} placeholder="Username" onChange={handleInputChange} /><br/>
        <input type="password" name="password" value={newStaffMember.password} placeholder="Password" onChange={handleInputChange} /><br/>
        {editedIndex !== null ? (
          <button onClick={handleSaveEditedStaffMember}>Save</button>/////////////
        ) : (
          <button onClick={handleAddStaffMember} >Add Staff Member</button> ////////////
        )}
      </div>
      <h3>All Staff Members</h3>
      <div className="staff-members-list">
        {staffMembers.map((staffMember, index) => (
          <div key={index} className="staff-member-item">
            <p>Full Name: {staffMember.fullName}</p>
            <p>Designation: {staffMember.designation}</p>
            <p>Username: {staffMember.username}</p>
            <div className="staff-member-actions">
              <button onClick={() => handleDeleteStaffMember(index)}>Delete</button>{/*button */}
              <button onClick={() => handleEditStaffMember(index)}>Edit</button>{/*button */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



  // return (
  //   <div className="container">
  //     <div>
  //     <h2>Admin Dashboard</h2>
  //     <div className="section-buttons">
  //       <button onClick={() => handleSectionClick('dashboard')}>
  //         <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
  //       </button>
  //       <button onClick={() => handleSectionClick('orders')}>
  //         <FontAwesomeIcon icon={faFileAlt} /> Orders Report
  //       </button>
  //       <button onClick={() => handleSectionClick('bookedTables')}>
  //         <FontAwesomeIcon icon={faTable} /> Booked Tables Report
  //       </button>
  //       <button onClick={() => handleSectionClick('createUsers')}>
  //         <FontAwesomeIcon icon={faUserPlus} /> Create User
  //       </button>
  //     </div>
  //    {renderSection()}
  //     </div>
  //   </div>
  // );

  useEffect(() => {
    fetchOrdersData();;
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <div className="section-buttons">
        <button onClick={() => handleSectionClick('dashboard')}>
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </button>
        <button onClick={() => handleSectionClick('orders')}>
          <FontAwesomeIcon icon={faFileAlt} /> Orders Report
        </button>
        <button onClick={() => handleSectionClick('bookedTables')}>
          <FontAwesomeIcon icon={faTable} /> Booked Tables Report
        </button>
        <button onClick={() => handleSectionClick('createUsers')}>
          <FontAwesomeIcon icon={faUserPlus} /> Create User
        </button>
      </div>
      {renderSection()}
    </div>
  ); 
  
};

export default AdminDashboard;