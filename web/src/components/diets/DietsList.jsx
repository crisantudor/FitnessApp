import React from 'react';
import {  VStack } from '@chakra-ui/react';
import DietCard from './DietsCard';


// Component to render list of diet cards
function DietsList({ diets }) {
  return (
    <VStack spacing="4">
      {diets.map(diet => (
        <DietCard
          key={diet.id}
          title={diet.title}
          description={diet.description}
          diet_id={diet.id}
          user_id={diet.user_id}
        />
      ))}
    </VStack>
  );
}

export default DietsList