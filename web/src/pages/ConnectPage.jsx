import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import RegisterForm from '../components/connect/RegisterForm';
import LoginForm from '../components/connect/LoginForm';
import ConnectButton from '../components/connect/ConnectButton';


const ConnectPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleConnectClick = () => {
    setShowLogin(true);
  };

  const handleNewUserClick = () => {
    setShowRegister(true);
  };

  const handleBackClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      backgroundColor="#f0f0f0"
      backgroundImage="url('images/background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      padding="20px"
    >
      <Box
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        backgroundColor="rgba(0, 0, 0, 0.5)"
      ></Box>

      <Box
        textAlign="center"
        zIndex="1"
        color="white"
      >
        {showRegister ? (
          <RegisterForm onBackClick={handleBackClick} />
        ) : showLogin ? (
          <LoginForm onNewUserClick={handleNewUserClick} />
        ) : (
          <ConnectButton onConnectClick={handleConnectClick} />
        )}
      </Box>
    </Box>
  );
}

export default ConnectPage;
