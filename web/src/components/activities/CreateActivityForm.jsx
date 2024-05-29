import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const CreateActivityForm = () => {

    const user = useSelector(state => state.user.data);

    const userId = user.id;
 
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [activityDate, setActivityDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activityData = { userId, activityType, duration, caloriesBurned, activityDate };
    try {
      console.log('Activity created:', activityData);
      // Handle successful creation (e.g., show a message, clear form)
    } catch (error) {
      console.error('Error creating activity:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl id="activityType" isRequired>
          <FormLabel>Activity Type</FormLabel>
          <Input type="text" value={activityType} onChange={(e) => setActivityType(e.target.value)} placeholder="Activity Type" />
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
        </FormControl>
        <FormControl id="caloriesBurned">
          <FormLabel>Calories Burned</FormLabel>
          <Input type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} placeholder="Calories Burned" />
        </FormControl>
        <FormControl id="activityDate" isRequired>
          <FormLabel>Activity Date</FormLabel>
          <Input type="date" value={activityDate} onChange={(e) => setActivityDate(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Create Activity</Button>
      </Stack>
    </form>
  );
};
