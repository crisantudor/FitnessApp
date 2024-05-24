import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/slices/userSlice';

const RegisterForm = ({ onBackClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/connect/register`, {
        name,
        email,
        password,
        age
      });
      const userData = response.data.user;
      console.log("User Data: ", userData)
      if(userData) {
        dispatch(setUser(userData));
        window.location.href = '/home';
      }
    } catch (error) {
      setMessage('Error registering user');
      console.error(error);
    }
  };

  return (
    <Box>
      <Text marginBottom="15px">Register a new user</Text>
      <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button type="submit" colorScheme="blue" marginBottom="10px">
          Register
        </Button>
        <Button variant="link" color="blue" onClick={onBackClick}>
          Back
        </Button>
      </form>
      {message && <Text color="blue">{message}</Text>}
    </Box>
  );
}

export default RegisterForm;
