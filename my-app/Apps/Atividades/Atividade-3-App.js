import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen_atv from './src/screens/HomeScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import ConsultaScreen from './src/screens/ConsultaScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {/* Defininfo a tela Home */}
                <Stack.Screen name='Home' component={HomeScreen_atv}/>

                {/* Definindo a tela Details */}
                <Stack.Screen name='Cadastro' component={CadastroScreen}/>

                <Stack.Screen name='Consulta' component={ConsultaScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}