import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PizzaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Encontre as melhores pizzas, e as melhores qualidades
        </Text>
      </View>

      {/* Categorias */}
      <View style={styles.categories}>
        <Text style={styles.categoryItemBold}>Salgadas</Text>
        <Text style={styles.categoryItem}>Doces</Text>
        <Text style={styles.categoryItem}>Refris</Text>
      </View>

      {/* Card de pizza */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjHS5V4_7TBs09Un_Yage5UFgy8olhPc3fw&s' }} // Exemplo de pizza
          style={styles.pizzaImage}
        />
        <Text style={styles.cardTitle}>Pizza de Portuguesa</Text>
        <Text style={styles.cardText}>Molho de tomate, muçarela, presunto, ovos cozidos, cebola e azeitonas. Uma combinação clássica e saborosa que agrada a todos.</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Comprar</Text>
        </TouchableOpacity>
      </View>

      {/* Navegação inferior */}
      <View style={styles.bottomNav}>
        <Ionicons name="person" size={24} color="black" />
        <Ionicons name="home" size={24} color="purple" />
        <Ionicons name="cart" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#008b45',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  categoryItem: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  categoryItemBold: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: "black", 
    padding: 15,
    margin: 15,
  },
  pizzaImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  cardText: {
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  buyButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  buyText: {
    color: 'black',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#CD212A',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
