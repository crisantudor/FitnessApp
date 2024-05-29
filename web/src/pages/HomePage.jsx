import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import colors from '../utils/colors';
import dimensions from '../utils/dimensions';
import ActivityIndicatorView from '../components/ActivityIndicatorView';

function HomePage() {
  // Select user from the Redux state
  const user = useSelector(state => state.user.data);

  // Get the current date
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });


  const sectionSpacing = "0.5rem"

  return (
    <Flex h="100vh" w="100vw">
      {/* Side Menu */}
      <Box display={"flex"} textAlign={"left"} alignItems={"center"} fontWeight={"semibold"} flexDirection={"column"} w="250px" bg={colors.sidebarBackground} p="4" boxShadow="md" color={colors.unfocusedText}>
        <Text w={"100%"} fontSize={24} paddingY={"2rem"} textAlign={"center"} color={colors.focusedText} >Fitness App</Text>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/home" passHref>
          <Text fontSize={18} as="a" color={colors.focusedText}>Overview</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/activity" passHref>
          <Text fontSize={18} as="a" >Activities</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/profile" passHref>
          <Text fontSize={18} as="a">Profile</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/diets" passHref>
          <Text fontSize={18} as="a">Diets</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/settings" passHref>
          <Text fontSize={18} as="a">Settings</Text>
        </Link>

      </Box>

      {/* Main Content */}
      <Box flex="1" p="4" backgroundColor={colors.pageBackground}>
        {user ?
          <Box textAlign="center" mb="4" p="4" backgroundColor={colors.sidebarBackground} borderRadius={dimensions.cardRoundness}>
            <Heading as="h2" fontSize="4xl" color="cyan" mb="2">
              Welcome back, {user ? user.name : 'Guest'}
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Today is {currentDate}
            </Text>
          </Box>
          : <ActivityIndicatorView />}
      </Box>

    </Flex>
  );
}

export default HomePage;
