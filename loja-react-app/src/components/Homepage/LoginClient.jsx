import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginClient({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        keyboardType="email-address" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#aaa" 
        secureTextEntry 
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CriarConta')}>
        <Text style={styles.link}>NÃO TEM CONTA? CADASTRE-SE</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
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
  link: { fontSize: 12, color: '#888', textAlign: 'center', marginTop: 10 }
});
