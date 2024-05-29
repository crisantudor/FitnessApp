import React from 'react'
import { CreateActivityForm } from '../components/activities/CreateActivityForm'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import colors from '../utils/colors'

export const ActivityPage = () => {
    const sectionSpacing = "0.5rem"

  return (
   
        <Flex h="100vh" w="100vw">
          {/* Side Menu */}
          <Box display={"flex"}  textAlign={"left"} alignItems={"center"} fontWeight={"semibold"} flexDirection={"column"} w="250px" bg={colors.sidebarBackground} p="4" boxShadow="md" color={colors.unfocusedText}>
            <Text w={"100%"} fontSize={24} paddingY={"2rem"} textAlign={"center"} color={colors.focusedText} >Fitness App</Text>
            <Link   paddingBottom={sectionSpacing} w={"100%"} href="/home" passHref>
              <Text fontSize={18} as="a">Overview</Text>
            </Link>
            <Link   paddingBottom={sectionSpacing} w={"100%"} href="/activity" passHref>
              <Text fontSize={18} as="a"  color={colors.focusedText}>Activities</Text>
            </Link>
            <Link   paddingBottom={sectionSpacing} w={"100%"} href="/profile" passHref>
              <Text fontSize={18} as="a">Profile</Text>
            </Link>
            <Link   paddingBottom={sectionSpacing} w={"100%"} href="/settings" passHref>
              <Text fontSize={18} as="a">Settings</Text>
            </Link>
    
          </Box>
    <CreateActivityForm/>
    </Flex>
  )
}
