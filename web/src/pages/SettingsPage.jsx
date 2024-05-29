import React, { useEffect, useState } from 'react'
import colors from '../utils/colors'
import { Box, Flex, Text, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Link } from '@chakra-ui/react';
import { logoutUser } from '../state/slices/userSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { IoSettingsSharp } from "react-icons/io5";
import ActivityIndicatorView from '../components/ActivityIndicatorView';


function SettingsPage() {
    const dispatch = useDispatch();
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

    const user = useSelector(state => state.user.data);

    useEffect(() => {
        if(!user) {
            window.location.href = '/';
        }
    }, [user])

 const sectionSpacing = "0.5rem"
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
    <Flex h="100vh" w="100vw" >
      {/* Side Menu */}
      <Box display={"flex"}  textAlign={"left"} alignItems={"center"} fontWeight={"semibold"} flexDirection={"column"} w="250px" bg={colors.sidebarBackground} p="4" boxShadow="md" color={colors.unfocusedText}>
        <Text w={"100%"} fontSize={24} paddingY={"2rem"} textAlign={"center"} color={colors.focusedText} >Fitness App</Text>
        <Link   paddingBottom={sectionSpacing} w={"100%"} href="/home" passHref>
          <Text fontSize={18} as="a">Overview</Text>
        </Link>
        <Link  paddingBottom={sectionSpacing} w={"100%"} href="/activity" passHref>
          <Text fontSize={18} as="a">Activities</Text>
        </Link>
        <Link   paddingBottom={sectionSpacing} w={"100%"} href="/profile" passHref>
          <Text fontSize={18} as="a">Profile</Text>
        </Link>
        <Link   paddingBottom={sectionSpacing} w={"100%"} href="/settings" passHref>
          <Text fontSize={18} as="a" color={colors.focusedText}>Settings</Text>
        </Link>
        <Box display={"flex"} flex={1}/>
        <Button w={"100%"} mt={sectionSpacing} colorScheme='black' onClick={handleLogout} textColor={colors.unfocusedText}>Logout</Button>
        <Button w={"100%"} mt={sectionSpacing} colorScheme="red" onClick={() => setIsDeleteAlertOpen(true)} textColor={colors.focusedText}>Delete Account</Button>
      </Box>

      {/* Main Content */}
      <Box flex="1" p="4" backgroundColor={colors.pageBackground} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      {user  ?
        <IoSettingsSharp color={colors.sidebarBackground} fontSize={400}/>
        : 
        <ActivityIndicatorView/>
      }
    </Box>

        {/* Delete Account Alert */}
        <AlertDialog isOpen={isDeleteAlertOpen} onClose={handleCloseDeleteAlert}>
          <AlertDialogOverlay backgroundColor={`${colors.pageBackground}50`}>
            <AlertDialogContent backgroundColor={colors.sidebarBackground}>
              <AlertDialogHeader fontSize="lg" fontWeight="bold" color={colors.focusedText}>
                Delete Account
              </AlertDialogHeader>
              <AlertDialogBody color={colors.focusedText}>
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
        </Flex>
  )
}

export default SettingsPage
