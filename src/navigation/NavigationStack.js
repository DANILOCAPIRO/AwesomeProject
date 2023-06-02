import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SettingsStrings from '../screens/SettingsScreen'


const Stack = createNativeStackNavigator()

export default function NavigationStak() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name = 'Home' component={HomeScreen}/>
            <Stack.Screen name = 'Settings' component={SettingsStrings}/>
        </Stack.Navigator>
    )
}