import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from '../screens/MenuScreen';
import Carrera1Screen from '../screens/Carrera1Screen';
import Carrera2Screen from '../screens/Carrera2Screen';
const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Materias">
            <Stack.Screen name="Materias" component={MenuScreen} />
            <Stack.Screen name="Carrera 1" component={Carrera1Screen} />
            <Stack.Screen name="Carrera 2" component={Carrera2Screen} />
        </Stack.Navigator>
    );
};
export default AppNavigator;