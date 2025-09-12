import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation<NavigationProp>();

  const handleSave = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Atenção", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    // Aqui você pode chamar a API para salvar a nova senha
    Alert.alert("Sucesso", "Senha redefinida com sucesso!", [
      {
        text: "OK",
        onPress: () => navigation.navigate("LoginCliente"), // volta para tela de login
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Definir Nova Senha</Text>
      <Text style={styles.p}>Digite sua nova senha e confirme abaixo.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#5a4ce0", marginBottom: 20 },
  p: { color: "#333", fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  input: { width: "100%", backgroundColor: "#f0f0f0", padding: 12, borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: "#5a4ce0", padding: 15, borderRadius: 5, width: "100%", alignItems: "center", marginVertical: 10 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
