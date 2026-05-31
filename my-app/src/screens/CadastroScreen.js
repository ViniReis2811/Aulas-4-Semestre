import React from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";

export default function CadastroScreen() {
    return (
        <View>
            <Text style={{fontWeight: 600, fontSize: "large", marginTop: 15}} > Cadastro de Usuário </Text>
            <TextInput style={styles.inputs} placeholder="Nome"/>
            <TextInput style={styles.inputs} placeholder="Email"/>
            <TextInput style={styles.inputs} placeholder="Senha"/>

            <br/>

            <Button
                title="CADASTRAR"
                color={"purple"}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
  inputs: {
      backgroundColor: "white",
      flex:1,
      marginTop: 20,
      marginBottom: 5,
      padding: 10,
      borderRadius: 5,
      borderColor: ""
  }
})