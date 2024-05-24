import React from 'react';
import { Button } from '@chakra-ui/react';

const ConnectButton = ({ onConnectClick }) => {
  return (
    <Button
      marginTop="20px"
      colorScheme="blue"
      size="lg"
      onClick={onConnectClick}
    >
      Continue to Fitness App
    </Button>
  );
}

export default ConnectButton;
