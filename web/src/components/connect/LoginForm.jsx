import React from 'react';
import { useState } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/slices/userSlice';

const LoginForm = ({ onNewUserClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/connect/login`, {
        email,
        password
      });

      const userData = response.data.user;
      console.log("User Data: ", userData)
      if(userData) {
        dispatch(setUser(userData));
        window.location.href = '/home';
      }
    } catch (error) {
      setMessage('Invalid email or password', error);
      console.error(error);
    }
  };

  return (
    <Box>
      <Text marginBottom="15px">Login to your account</Text>
      <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
        <Button type="submit" colorScheme="blue" marginBottom="10px">
          Login
        </Button>
        {message && <Text color="green">{message}</Text>}

        <Button variant="link" color="blue" onClick={onNewUserClick}>
          New User? Create Account
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
