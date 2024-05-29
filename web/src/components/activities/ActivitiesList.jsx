import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ActivityCard from './ActivityCard';
import './ActivityList.css'; // Import the CSS file for styling the scrollbar
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';

const ActivityList = ({ activities, onClick }) => {
    return (
        <Box>
            {activities.length ?
                <Box className="custom-scrollbar" >
                    <Flex wrap="no-wrap">
                        {activities.map(activity => (
                            <Box key={activity.id} mr={4} mb={4}>
                                <ActivityCard activity={activity} onClick={onClick} />
                            </Box>
                        ))}
                    </Flex>

                </Box>
                :
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={"calc(100vw - 250px)"} height={"30vh"} backgroundColor={colors.cardBackground} borderRadius={dimensions.cardRoundness}>
                    <Text color={colors.unfocusedText}>No activities logged, try adding new activities using the form above.</Text>
                </Box>}
        </Box>

    );
};

export default ActivityList;
