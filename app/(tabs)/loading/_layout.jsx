import {  } from 'react-native'
import { Stack } from 'expo-router';

const LoadingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="appLoading" />
    </Stack>
  );
}

export default LoadingLayout