import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabScreen from './MainTab';
import DetailsDestinasiScreen from '../screens/DetailsDetinasiScreen';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="MainTab" 
            component={MainTabScreen} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="DetailsDestinasi"
            component={DetailsDestinasiScreen}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;