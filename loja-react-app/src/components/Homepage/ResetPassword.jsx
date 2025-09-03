import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ResetPassword({ navigation }) {
  const handleSend = () => {
    // Gerar código aleatório de 6 dígitos
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Código gerado: ${randomCode}`); // 🔹 só pra teste (na prática seria enviado por email)
    
    // Navegar passando o código como parâmetro
    navigation.navigate("CodeVerification", { generatedCode: randomCode });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      <Text style={styles.p}>Digite o seu email no campo abaixo para que possamos enviar um código de redefinição de senha!</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        keyboardType="email-address" 
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginClient')}>
        <Text style={styles.link}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#5a4ce0', marginBottom: 20 },
  input: { width: '100%', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 5, marginBottom: 15, marginTop: 20 },
  button: { backgroundColor: '#5a4ce0', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { fontSize: 12, color: '#888', textAlign: 'center', marginTop: 10 },
  p: { color: "#333", fontWeight: "bold", textAlign: "center" }
});
