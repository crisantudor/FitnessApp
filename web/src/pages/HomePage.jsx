import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { logoutUser } from '../state/slices/userSlice';

function HomePage() {
  // Select user from the Redux state
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch()

  // Get the current date
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleLogout = () => {
    dispatch(logoutUser())
    window.location.href = '/';

  }

  return (
    <Flex h="100vh" w="100vw"> {/* Set height and width to fullscreen */}
      {/* Side Menu */}
      <Box w="250px" bg="gray.100" p="4" boxShadow="md">
        <Heading as="h2" fontSize="xl" mb="4">
          Menu
        </Heading>
        <Text>Dashboard</Text>
        <Text>Profile</Text>
        <Text>Settings</Text>
        {/* Add more menu items as needed */}
      </Box>

      {/* Main Content */}
      <Box flex="1" p="4">
        {/* Welcome Message */}
        <Box textAlign="right" mb="4">
          <Heading as="h2" fontSize="4xl" color="teal.500" mb="2">
            Welcome {user ? user.name : 'Guest'}
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Today is {currentDate}
          </Text>
        </Box>

        {/* User Information */}
        {user ? (
          <Box bg="white" boxShadow="lg" p="4" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Email: {user.email}</Text>
            <Text fontSize="lg" fontWeight="bold">Age: {user.age}</Text>
          </Box>
        ) : (
          <Text fontSize="lg" mt="4">
            Please log in to view your profile
          </Text>
        )}

        {/* Logout Button */}
        <Button mt="4" onClick={handleLogout}>Logout</Button> {/* Assuming handleLogout function is defined */}
      </Box>
    </Flex>
  );
}

export default HomePage;
