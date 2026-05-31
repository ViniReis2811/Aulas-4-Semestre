import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen_atv({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="IR PARA CADASTRO"
                onPress={() => navigation.navigate('Cadastro')}
                color={'purple'}
            />

            <Button
                title="IR PARA CONSULTA"
                onPress={() => navigation.navigate('Consulta')}
                color={'green'}
            />
        </View>
    );
}