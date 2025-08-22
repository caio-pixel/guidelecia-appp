import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginADM({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login ADM</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email ADM" 
        placeholderTextColor="#aaa" 
        keyboardType="email-address" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha ADM" 
        placeholderTextColor="#aaa" 
        secureTextEntry 
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('AdminPage')}
      >
        <Text style={styles.buttonText}>Entrar no ADM</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#5a4ce0', marginBottom: 20 },
  input: { width: '100%', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: '#5a4ce0', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
