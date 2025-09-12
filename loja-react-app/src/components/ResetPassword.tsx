import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ResetPassword() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState("");

  const handleSend = () => {

    // Verifica se o e-mail é válido
    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Atenção", "Informe um e-mail válido.");
      return;
    }

    // Gera código de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Mostra o alerta e navega só após o usuário tocar em OK
    Alert.alert(
      "Código enviado",
      `O código foi enviado para: ${email}\n\n(Código: ${code})`,
      [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("CodeVerification", { generatedCode: code });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      <Text style={styles.p}>
        Digite seu e-mail para enviarmos um código de redefinição.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LoginCliente")}>
        <Text style={styles.link}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5a4ce0",
    marginBottom: 20,
  },
  p: {
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 12,
  },
  button: {
    backgroundColor: "#5a4ce0",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
});
