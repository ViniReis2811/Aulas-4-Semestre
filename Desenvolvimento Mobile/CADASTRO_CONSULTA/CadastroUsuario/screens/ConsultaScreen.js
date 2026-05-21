import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ConsultaScreen = () => {
    const [dados, setDados] = async () => {
        try {
            const response = await axios.get('http://192.168.0.92:3000/api/consulta');
            setDados(response.data);
        } catch (error) {
            console.error('Erro ao consultar dados:', error);
        }
    };

    const renderUserData = ({ item }) => {
        return (
            <View style={StyleSheet.userContainer}>
                <Text style={StyleSheet.userText}> Nome: {item.nome} </Text>
                <Text style={StyleSheet.userText}> Email: {item.email} </Text>
            </View>
        );
    };
}