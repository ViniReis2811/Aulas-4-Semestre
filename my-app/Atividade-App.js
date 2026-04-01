import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, Switch} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            nome: '',
            valor: 0,
            status: false,
            sexo: 0,
            sexos: [
                {key: 1, nome: 'Masculino'},
                {key: 2, nome: 'Feminino'},
            ]
        };

        this.enviarDados = this.enviarDados.bind(this);
        this.pegaNome = this.pegaNome.bind(this);
    }

    enviarDados(){

        const {nome, valor, status, sexo, sexos} = this.state;

        alert(
            `Conta criada com sucesso!\n` +
            `Nome: ${nome}\n` +
            `Valor Limite: R$ ${valor.toFixed(2)}\n` +
            `Sexo: ${sexos[sexo].nome}\n` +
            `Estado Civil: ${status ? 'Casado' : 'Solteiro'}`,
            [{text: "OK"}]
        )
    }

    pegaNome(texto){
        this.setState({nome: texto})
    }

    render(){

        let sexosItem = this.state.sexos.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome}/>
        })

        return(
            <View style={styles.view}>
                <TextInput style={styles.input} onChangeText={this.pegaNome}/>

                <Text> Informe seu Sexo: </Text>

                <Picker
                selectedValue={this.state.sexo}
                onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
                >
                    {sexosItem}
                </Picker>


                <Text style={{textAlign: 'center', marginBottom: 5, marginTop: 20}}>
                    Escolha seu Limite: 
                </Text>

                <Slider
                    style={{marginBottom: 5, marginTop: 10}}
                    minimumValue={0}
                    maximumValue={1000}
                    onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
                    value={this.state.valor}
                    minimumTrackTintColor="#00FF00"
                    maximumTrackTintColor="#FF000"
                />

                <Text style={{textAlign: 'center'}} > R$ {this.state.valor.toFixed(2)} </Text>

                <Switch
                    value={this.state.status}
                    style={{marginBottom: 5, marginTop: 20}}
                    onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
                    thumbColor="#FF0000"
                />

                <Text style={{marginBottom: 20}}>
                    {(this.state.status) ? "Casado": "Solteiro"}
                </Text>

                <Button title="CRIAR CONTA" onPress={this.enviarDados}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
        input:{
            flex:1,
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
            borderWidth: 1,
        },

        view:{
            margin: 20
        }
    });


