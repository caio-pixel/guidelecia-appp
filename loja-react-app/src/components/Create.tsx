import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Create() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modoCriar, setModoCriar] = useState(true); // true = criar conta, false = entrar
  const navigation = useNavigation<NavigationProp>();

  const handleEntrar = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);

    if (email === 'dal@gmail.com' && senha === '123') {
      navigation.navigate('Cardapio');
    } else if (email.trim() === '' && senha.trim() === '') {
      navigation.navigate('AdminPage');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  };

  const handleCadastrar = () => {
    Alert.alert('Sucesso', 'Conta criada!');
    setEmail('');
    setSenha('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {modoCriar ? (
          <>
            <Text style={styles.title}>Criar Conta</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#aaa"
              autoCapitalize="words"
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LoginCliente')}>
              <Text style={styles.link}>Já tem conta? Entrar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5a4ce0',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5a4ce0',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
  pizzariaSection: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pizzariaTitle: {
    color: '#5a4ce0',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pizzariaTexto: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});
