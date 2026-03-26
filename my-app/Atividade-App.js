import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import Picker from './components/picker';
import Component_Slider from './components/slider';
import Component_Switch from './components/switch';

export default class App extends Component{
    constructor(props){ // TextInput
        super(props);
        this.state={
            nome: ''
        };

        this.pegaNome = this.pegaNome.bind(this);
    }

    alert(){
        const nome = this.state.nome;
        const valor = Component_Slider.valor;
        const sexo = Picker.this.state.status;

        Alert.alert(
            `Conta criada com sucesso`,
            `Nome: ${nome}`,
            [{text: "OK"}]
        )
    }

    pegaNome(texto){
        this.setState({nome: texto})
    }

    render(){

        return(
            <View>
                <TextInput style={styles.input} onChangeText={this.pegaNome}/>

                <Text> Informe seu Sexo: </Text>

                <Picker/>
                <Component_Slider/>
                <Component_Switch/>

                <Button title="CRIAR CONTA" onPress={this.alert}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
        input:{
            flex:1,
            marginTop: 20,
            marginBottom: 20,
        },
    });


