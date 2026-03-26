import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default class Picker extends Component {

    constructor(props){
        super(props);
        this.state = {
            sexo: 0,
            sexos: [
                {key: 1, nome: 'Masculino'},
                {key: 2, nome: 'Feminino'},
            ]
        };
    };
    

    render(){

        let sexosItem = this.state.sexos.map ( (v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome}/>
        } )

        return (
            <View style={styles.container}>

                <Picker
                selectedValue={this.state.pizza}
                onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue}) }
                >
                    {sexosItem}
                </Picker>

            </View>
        );
    }
}
