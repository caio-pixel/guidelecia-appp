import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function CodeVerification({ route, navigation }) {
  const [code, setCode] = useState("");
  const { generatedCode } = route.params; // código vindo do ResetPassword

  const handleVerify = () => {
    if (code === generatedCode) {
      navigation.navigate("NewPassword");
    } else {
      alert("Código inválido. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verifique seu Código</Text>
      <Text style={styles.p}>Digite o código enviado para o seu email.</Text>

      <TextInput
        style={styles.input}
        placeholder="Código"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#5a4ce0", marginBottom: 20 },
  input: { width: "100%", backgroundColor: "#f0f0f0", padding: 12, borderRadius: 5, marginBottom: 15, marginTop: 20 },
  button: { backgroundColor: "#5a4ce0", padding: 15, borderRadius: 5, width: "100%", alignItems: "center", marginVertical: 10 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  p: { color: "#333", fontWeight: "bold", textAlign: "center" },
});
