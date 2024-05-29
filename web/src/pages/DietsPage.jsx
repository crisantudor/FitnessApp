import { Box, Flex, Link, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import colors from '../utils/colors'
import axios from 'axios';
import DietsList from '../components/diets/DietsList';

function DietsPage() {
  const sectionSpacing = "0.5rem"
  const toast = useToast();

  const [diets, setDiets] = useState([]);

  console.log(diets)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/diets`);
        setDiets(response.data);
      } catch (error) {
        console.error('Error fetching diets:', error);
        toast({
          title: "Error fetching diets.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    fetchActivities();
  }, []);

  return (
    <Flex h="100vh" w="100vw">
      {/* Side Menu */}
      <Box display={"flex"} textAlign={"left"} alignItems={"center"} fontWeight={"semibold"} flexDirection={"column"} w="250px" bg={colors.sidebarBackground} p="4" boxShadow="md" color={colors.unfocusedText}>
        <Text w={"100%"} fontSize={24} paddingY={"2rem"} textAlign={"center"} color={colors.focusedText} >Fitness App</Text>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/home" passHref>
          <Text fontSize={18} as="a" >Overview</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/activity" passHref>
          <Text fontSize={18} as="a" >Activities</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/profile" passHref>
          <Text fontSize={18} as="a">Profile</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/diets" passHref>
          <Text fontSize={18} as="a" color={colors.focusedText}>Diets</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/settings" passHref>
          <Text fontSize={18} as="a">Settings</Text>
        </Link>
      </Box>

      {/* Content Menu */}
      <Box p="4">
        {diets && <DietsList diets={diets} />}
      </Box>

    </Flex>
  )
}

export default DietsPage