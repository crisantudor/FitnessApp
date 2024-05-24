import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Heading, Text, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from '@chakra-ui/react';
import { logoutUser } from '../state/slices/userSlice';
import axios from 'axios';

function HomePage() {
  // Select user from the Redux state
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  // Get the current date
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = '/';
  }

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:8080/users/${user.id}`);
      // Handle successful deletion
      console.log("User deleted");
      window.location.href = '/';
    } catch (error) {
      // Handle error
      console.error("Error deleting user:", error);
    }
  }

  const handleCloseDeleteAlert = () => {
    setIsDeleteAlertOpen(false);
  }

  const handleConfirmDelete = () => {
    setIsDeleteAlertOpen(false);
    handleDeleteAccount();
  }

  return (
    <Flex h="100vh" w="100vw">
      {/* Side Menu */}
      <Box w="250px" bg="gray.100" p="4" boxShadow="md">
        <Heading as="h2" fontSize="xl" mb="4">
          Menu
        </Heading>
        <Text>Dashboard</Text>
        <Text>Profile</Text>
        <Text>Settings</Text>
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

        {/* Page Content */}
        <Box mt="8">
          <Heading as="h2" fontSize="xl" mb="4">
            About Us
          </Heading>
          <Text>
            Welcome to our website! We provide a platform for users to interact and share their experiences.
            Feel free to explore the various features and functionalities.
          </Text>
        </Box>

        {/* Logout Button */}
        <Button mt="8" onClick={handleLogout}>Logout</Button>

        {/* Delete Account Button */}
        <Button mt="4" colorScheme="red" onClick={() => setIsDeleteAlertOpen(true)}>Delete Account</Button>

        {/* Delete Account Alert */}
        <AlertDialog isOpen={isDeleteAlertOpen} onClose={handleCloseDeleteAlert}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Account
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure you want to delete your account? This action cannot be undone.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={handleCloseDeleteAlert}>Cancel</Button>
                <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Flex>
  );
}

export default HomePage;
