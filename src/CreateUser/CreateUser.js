import React, { useState } from 'react';
import './CreateUser.css';

const CreateUser = () => {
  const [fullName, setFullName] = useState('');
  const [designation, setDesignation] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    // Create a new user object
    const newUser = {
      id: Math.random(), // Generate a unique ID (for demo purposes only)
      fullName,
      designation,
      username,
      password
    };

    // Add the new user to the list of users
    setUsers(prevUsers => [...prevUsers, newUser]);

    // Reset input fields
    setFullName('');
    setDesignation('');
    setUsername('');
    setPassword('');
  };

  const handleDeleteUser = (id) => {
    // Filter out the user with the specified ID
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Create User</h2>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label>
        Designation:
        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleAddUser}>Add User</button>

      <h2>Staff Members</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>
              <strong>Full Name:</strong> {user.fullName}
            </div>
            <div>
              <strong>Designation:</strong> {user.designation}
            </div>
            <div>
              <strong>Username:</strong> {user.username}
            </div>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateUser;