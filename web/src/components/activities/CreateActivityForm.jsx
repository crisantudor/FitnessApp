import React from 'react';
import { FormControl, FormLabel, Input, Button, Stack, Box, Select } from '@chakra-ui/react';
import dimensions from '../../utils/dimensions';
import colors from '../../utils/colors';

export const CreateActivityForm = ({
    handleSubmit,
    activityType,
    setActivityDate,
    setActivityType,
    duration,
    setDuration,
    caloriesBurned,
    activityDate,
    setCaloriesBurned
}) => {
    const commonActivityTypes = [
        "Gym Workout",
        "Running",
        "Cycling",
        "Swimming",
        "Walking",
    ];

    return (
        <Box flex={1} borderRadius={dimensions.cardRoundness} backgroundColor={colors.cardBackground} fontSize={16} px={"6rem"} pt={"3rem"} pb={"5rem"} >
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <FormControl id="activityType" isRequired>
                        <FormLabel color={colors.unfocusedText}>Activity Type</FormLabel>
                        <Select value={activityType} onChange={(e) => setActivityType(e.target.value)} color={colors.unfocusedText} placeholder="Select Activity Type" >
                            {commonActivityTypes.map((activity, index) => (
                                <option key={index} value={activity}>{activity}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl id="duration" isRequired>
                        <FormLabel color={colors.unfocusedText}>Duration (minutes)</FormLabel>
                        <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
                    </FormControl>
                    <FormControl id="caloriesBurned">
                        <FormLabel color={colors.unfocusedText}>Calories Burned</FormLabel>
                        <Input type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} placeholder="Calories Burned" />
                    </FormControl>
                    <FormControl id="activityDate" isRequired>
                        <FormLabel color={colors.unfocusedText}>Activity Date</FormLabel>
                        <Input color={colors.unfocusedText} type="date" value={activityDate} onChange={(e) => setActivityDate(e.target.value)} />
                    </FormControl>
                    <Button type="submit" colorScheme="cyan" color={colors.focusedText}>Add a New Activity</Button>
                </Stack>
            </form>
        </Box>
    );
};
