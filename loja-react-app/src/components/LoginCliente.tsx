import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginClient() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // credenciais fixas do ADM
  const adminEmail = "admin@pizzaria.com"
  const adminSenha = "123";

  const handleLogin = () => {
    if (email === adminEmail && senha === adminSenha) {
      // Login do ADM
      navigation.navigate("adminPage" as never);
    } else if (email && senha) {
      // Login do cliente (simples por enquanto, sem validação de banco)
      navigation.navigate("Cardapio" as never);
    } else {
      Alert.alert("Erro", "Preencha email e senha!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        keyboardType="email-address" 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#aaa" 
        secureTextEntry 
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Create' as never)}>
        <Text style={styles.link}>NÃO TEM CONTA? CADASTRE-SE</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword' as never)}>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#5a4ce0', marginBottom: 20 },
  input: { width: '100%', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: '#5a4ce0', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 10 }
});
