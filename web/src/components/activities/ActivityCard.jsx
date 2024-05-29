import React from 'react';
import { Box, Text, Badge, IconButton } from '@chakra-ui/react';
import { formatDate } from '../../utils/strings';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';
import { MdDelete } from "react-icons/md";

const ActivityCard = ({ activity, onClick }) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={colors.cardBackground}
            borderRadius={dimensions.cardRoundness}
            p={4}
            width={"20vw"}
            position="relative"
        >
            {/* Close button */}
            <IconButton
                aria-label="Close"
                icon={<MdDelete />}
                position="absolute"
                bottom="15px"
                right="15px"
                bg="red.500"
                color="white"
                size="xs"
                onClick={() => onClick(activity.id)} // Add your close button action here
            />
            {/* Rest of the card content */}
            <Text fontSize="xl" fontWeight="bold" color={colors.focusedText} mb={2}>{activity.activity_type}</Text>
            {activity.calories_burned && (
                <Badge colorScheme="green" w={"100%"} mb={2}>Calories: {activity.calories_burned}</Badge>
            )}
            <Box display={"flex"} flexDirection={"row"}>
                <Text fontSize="sm" fontWeight={"bold"} color={colors.unfocusedText}>Duration:</Text>
                <Text fontSize="sm" color={colors.unfocusedText} pl={"4px"}>{activity.duration} minutes</Text>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
                <Text fontSize="sm" fontWeight={"bold"} color={colors.unfocusedText}>Date:</Text>
                <Text fontSize="sm" color={colors.unfocusedText} pl={"4px"}>{formatDate(activity.activity_date)}</Text>
            </Box>
        </Box>
    );
};

export default ActivityCard;
