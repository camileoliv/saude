import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
    return (
            <View style={styles.container2}>

                <Text>Healthy Check</Text>
                <TouchableOpacity>
                    <Button title="Iniciar" color="#EFB5C2" /></TouchableOpacity>

            </View>
    );


}