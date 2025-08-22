import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Create() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modoCriar, setModoCriar] = useState(true); // true = criar conta, false = entrar
  const navigation = useNavigation();

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
    // Aqui você pode limpar os campos e mudar o modo para login, se quiser
    setEmail('');
    setSenha('');
    setModoCriar(false);
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

            <TouchableOpacity onPress={() => setModoCriar(false)}>
              <Text style={styles.link}>Já tem conta? Entrar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>Entrar</Text>

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

            <TouchableOpacity style={styles.button} onPress={handleEntrar}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={styles.link}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModoCriar(true)}>
              <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>

            {/* Botão teste para garantir navegação */}
            <TouchableOpacity
              style={[styles.button, { marginTop: 20, backgroundColor: '#888' }]}
              onPress={() => navigation.navigate('Cardapio')}
            >
              <Text style={styles.buttonText}>Ir para Cardapio (teste)</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Seção informativa (opcional) */}
        <View style={styles.pizzariaSection}>
          <Text style={styles.pizzariaTitle}>Conheça sobre a nossa pizzaria</Text>
          <Text style={styles.pizzariaTexto}>
            Muitas coisas legais sobre a nossa pizzaria... venha conhecer mais!
          </Text>
        </View>
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
    color: '#5a4ce0',
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
