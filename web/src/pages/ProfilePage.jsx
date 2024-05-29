import { Box, Flex, Link, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import colors from '../utils/colors'
import { useSelector } from 'react-redux'
import { daysAgo } from '../utils/strings'
import dimensions from '../utils/dimensions'
import ActivityIndicatorView from '../components/ActivityIndicatorView'

export const ProfilePage = () => {
    const sectionSpacing = "0.5rem"
    const user = useSelector(state => state.user.data);

    useEffect(() => {
        if(!user) {
            window.location.href = '/';
        }
    }, [user])

  return (
    <Flex h="100vh" w="100vw">
      {/* Side Menu */}
      <Box display={"flex"}  textAlign={"left"} alignItems={"center"} fontWeight={"semibold"} flexDirection={"column"} w="250px" bg={colors.sidebarBackground} p="4" boxShadow="md" color={colors.unfocusedText}>
        <Text w={"100%"} fontSize={24} paddingY={"2rem"} textAlign={"center"} color={colors.focusedText}>Fitness App</Text>
        <Link   paddingBottom={sectionSpacing} w={"100%"} href="/home" passHref>
          <Text fontSize={18} as="a">Overview</Text>
        </Link>
        <Link   paddingBottom={sectionSpacing} w={"100%"} href="/activity" passHref>
              <Text fontSize={18} as="a">Activities</Text>
            </Link>
        <Link   paddingBottom={sectionSpacing} w={"100%"} href="/profile" passHref>
          <Text fontSize={18} as="a" color={colors.focusedText}>Profile</Text>
        </Link>
        <Link   paddingBottom={sectionSpacing} w={"100%"} href="/settings" passHref>
          <Text fontSize={18} as="a">Settings</Text>
        </Link>
      </Box>
      <Box display={"flex"} flex="1" justifyContent={"center"} alignItems={"center"}  backgroundColor={colors.pageBackground} >
        {user  ?
      <Box borderRadius={dimensions.cardRoundness} backgroundColor={colors.sidebarBackground} fontSize={26} display={"flex"} flexDirection={"column"} px="6rem" py="4rem" justifyContent={"center"} alignItems={"center"} color={colors.unfocusedText}>
        <Box display={"flex"} flexDirection={"row"} >
            <Text fontWeight={"bold"}>Name: </Text>
            <Text ml={"6px"}>{user.name}</Text>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
            <Text fontWeight={"bold"}>Age: </Text>
            <Text ml={"6px"}>{user.age} years</Text>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
            <Text fontWeight={"bold"}>Email: </Text>
            <Text ml={"6px"}>{user.email}</Text>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
            <Text fontWeight={"bold"}>Joined: </Text>
            <Text ml={"6px"}>{daysAgo(user.created_at)}</Text>
        </Box>

        </Box>
        : <ActivityIndicatorView/>}
    </Box>
    </Flex>
  )
}
