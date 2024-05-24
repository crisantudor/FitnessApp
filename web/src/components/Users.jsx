// src/components/Users.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users`);
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users');
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {error && <p>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user) => (
          <div key={user.id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', borderRadius: '8px', width: '200px' }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
