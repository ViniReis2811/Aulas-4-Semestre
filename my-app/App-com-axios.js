import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import axios from 'axios';

export default function App () {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsuarios(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, [])

    if (loading) {
        return <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={styles.error}> Erro: {error.message}</Text>
    }

    return (
        <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.name}> {item.name} </Text>
                    <Text> {item.email} </Text>
                </View>
            )}
        />
    );
};


const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red'
    },

    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    email: {
        fontSize: 16,
        color: 'gray'
    }
})