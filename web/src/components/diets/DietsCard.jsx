import { Box, Text } from "@chakra-ui/react";
import React from 'react';
import colors from "../../utils/colors";

// Diet card component
function DietCard({ title, description, diet_id, user_id }) {
    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="4"
        mb="4"
        backgroundColor={colors.cardBackground}
        color={colors.focusedText}
      >
        <Text fontSize="xl" fontWeight="bold">{title}</Text>
        <Text fontSize="md" mt="2">{description}</Text>
        <Text fontSize="sm" mt="2">Diet ID: {diet_id}</Text>
        <Text fontSize="sm" mt="2">User ID: {user_id}</Text>
      </Box>
    );
  }

  export default DietCard