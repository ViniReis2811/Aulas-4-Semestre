import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {/* Defininfo a tela Home */}
                <Stack.Screen name='Home' component={HomeScreen}/>

                {/* Definindo a tela Details */}
                <Stack.Screen name='Details' component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}