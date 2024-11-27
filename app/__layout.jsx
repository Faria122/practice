import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts} from 'expo-font'


const RootLayout = () => {
 



  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false}}/>
        <Slot/>

    </Stack>
  
)
}

export default RootLayout