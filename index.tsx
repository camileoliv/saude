import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CalculoIMC = () => {
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (!pesoNum || !alturaNum) {
            Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imc = pesoNum / (alturaNum * alturaNum);
        let classificacao;

        if (imc < 18.5) {
            classificacao = "Magreza";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Acima do peso";
        } else {
            classificacao = "Obesidade";
        }

        setMensagem(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Find your IMC</Text>

            <TextInput 
                style={styles.input} 
                placeholder="Kg" 
                keyboardType="numeric" 
                value={peso} 
                onChangeText={setPeso} 
            />
            <TextInput 
                style={styles.input} 
                placeholder="Altura" 
                keyboardType="numeric" 
                value={altura} 
                onChangeText={setAltura} 
            />
            <TouchableOpacity>
              <Button title="Resultado" onPress={calcularIMC} color="#EFB5C2" /></TouchableOpacity>
            {mensagem ? <Text style={styles.result}>{mensagem}</Text> : null}
        </View>
    );
};

export default CalculoIMC;
