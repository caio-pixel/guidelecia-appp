import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Conheça sobre a nossa pizzaria</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        muuuitas coisas{"\n"}sobre a{"\n"}pizzaaria........
      </Text>

      {/* Imagem da pizzaria */}
      <Image
        //  source={require('../assets/images/restaurante.png')} // Corrigido aqui
         style={styles.pizzaImage}
         resizeMode="cover"
      />
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    color: '#4B3FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  pizzaImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
