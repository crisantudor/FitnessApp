import { Box, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import colors from '../utils/colors'

const ActivityIndicatorView = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" color={colors.unfocusedText}>
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </Box>
  )
}

export default ActivityIndicatorView