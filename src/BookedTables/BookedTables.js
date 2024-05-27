import React, { useState } from 'react';
import './BookedTables.css'

const BookedTables = () => {
  const [tables, setTables] = useState([]);
  const [newTable, setNewTable] = useState({ status: '', details: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTable(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddTable = () => {
    setTables(prevTables => [...prevTables, { ...newTable }]);
    setNewTable({ status: '', details: '' });
  };

  const filteredTables = tables.filter(table =>
    table.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortByStatus = (a, b) => {
    const statusOrder = {
      'Completed': 1,
      'Canceled': 2,
    };
    return statusOrder[a.status] - statusOrder[b.status];
  };

  const sortedTables = filteredTables.sort(sortByStatus);

  return (
    <div>
      <h2>Booked Tables Report</h2>
      <input
        type="text"
        placeholder="Search by table details..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {sortedTables.map((table, index) => (
          <li key={index}>
            <strong>Table Status: {table.status}</strong>
            <p>Table Details: {table.details}</p>
          </li>
        ))}
      </ul>
      <h3>Add New Table Booking</h3>
      <label htmlFor="statusInput">Table Status:</label>
      <input
        type="text"
        id="statusInput"
        name="status"
        value={newTable.status}
        onChange={handleInputChange}
      />
      <label htmlFor="detailsInput">Table Details:</label>
      <input
        type="text"
        id="detailsInput"
        name="details"
        value={newTable.details}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTable}>Book Table</button>
    </div>
  );
};

export default BookedTables;