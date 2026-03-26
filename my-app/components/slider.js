import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Slider from '@react-native-community/slider';

export default class Component_Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            valor: 0
        };
    }

    render(){
        return (
            <View style={styles.container}>
                <Text> Escolha seu Limite: </Text>
                <Slider
                    minimumValue={0}
                    maximumValue={1000}
                    onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
                    value={this.state.valor}
                    minimumTrackTintColor="#00FF00"
                    maximumTrackTintColor="#FF000"
                />

                <Text styles={{textAlign: 'center', fontSize: 30}}>
                    R$ {this.state.valor.toFixed(1)}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            marginTop: 50,
        },
    });

