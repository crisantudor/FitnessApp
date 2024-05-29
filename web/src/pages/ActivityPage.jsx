import React, { useEffect, useState } from 'react'
import { CreateActivityForm } from '../components/activities/CreateActivityForm'
import { Box, Flex, Link, Text, useToast } from '@chakra-ui/react'
import colors from '../utils/colors'
import ActivityList from '../components/activities/ActivitiesList'
import { useSelector } from 'react-redux'
import axios from 'axios';

export const ActivityPage = () => {
  const sectionSpacing = "0.5rem"
  const user = useSelector(state => state.user.data);
  const userId = user.id;
  const toast = useToast();

  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [activityDate, setActivityDate] = useState('');

  const [activities, setActivities] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activityData = { userId, activityType, duration, caloriesBurned, activityDate };
    try {
      await axios.post('http://localhost:8080/activities', activityData);
      const response = await axios.get(`http://localhost:8080/activities/user/${userId}`); // Replace with your actual endpoint
      setActivities(response.data);
      toast({
        title: "Activity created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setActivityType('');
      setDuration('');
      setCaloriesBurned('');
      setActivityDate('');
    } catch (error) {
      console.error('Error creating activity:', error);
      toast({
        title: "Error creating activity.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const deleteActivity = async (activityId) => {
    try {
    await axios.delete(`http://localhost:8080/activities/${activityId}`);
    const response = await axios.get(`http://localhost:8080/activities/user/${userId}`); // Replace with your actual endpoint
    setActivities(response.data);
    toast({
      title: "Activity deleted.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    } catch(error) {
      console.error(`Error deleting activity with id:${activityId} :`, error);
      toast({
        title: `Error deleting activity with id:${activityId}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/activities/user/${userId}`); // Replace with your actual endpoint
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
        toast({
          title: "Error fetching activities.",
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
          <Text fontSize={18} as="a">Overview</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/activity" passHref>
          <Text fontSize={18} as="a" color={colors.focusedText}>Activities</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/profile" passHref>
          <Text fontSize={18} as="a">Profile</Text>
        </Link>
        <Link paddingBottom={sectionSpacing} w={"100%"} href="/settings" passHref>
          <Text fontSize={18} as="a">Settings</Text>
        </Link>

      </Box>
      <Box display="flex" flexDirection={"column"} flex={1} backgroundColor={colors.pageBackground} p={"4"}>
        <CreateActivityForm
          handleSubmit={handleSubmit}
          activityType={activityType}
          setActivityType={setActivityType}
          duration={duration}
          setDuration={setDuration}
          caloriesBurned={caloriesBurned}
          setCaloriesBurned={setCaloriesBurned}
          activityDate={activityDate}
          setActivityDate={setActivityDate}
        />
        <Box display={"flex"} flex={1}/>
        <ActivityList activities={activities} onClick={deleteActivity}/>
      </Box>
    </Flex>
  )
}
