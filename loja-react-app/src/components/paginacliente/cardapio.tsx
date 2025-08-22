import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUri: string;
}

const pizzasSalgadas: Product[] = [
  {
    id: 'portuguesa',
    name: 'Portuguesa',
    price: 45,
    description: 'Clássica com presunto, ovo, cebola e azeitonas.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Portuguesa'
  },
  {
    id: '6queijos',
    name: '6 Queijos',
    price: 52,
    description: 'Blend cremoso de seis queijos premium.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=6+Queijos'
  },
  {
    id: 'bauru',
    name: 'Bauru',
    price: 43,
    description: 'Com presunto, queijo, tomate e pepino.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Bauru'
  },
  {
    id: 'brocolis',
    name: 'Brócolis',
    price: 40,
    description: 'Leve e saudável com brócolis e muçarela.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Brocolis'
  },
  {
    id: 'frangoCatupiry',
    name: 'Frango com Catupiry',
    price: 47,
    description: 'Frango desfiado com catupiry cremoso.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Frango+Catupiry'
  },
  {
    id: 'marguerita',
    name: 'Marguerita',
    price: 42,
    description: 'Molho de tomate, muçarela e manjericão.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Marguerita'
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    price: 47,
    description: 'Generosas fatias de pepperoni picante.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Pepperoni'
  },
  {
    id: 'frangoBacon',
    name: 'Frango com Bacon',
    price: 49,
    description: 'Combinação saborosa de frango e bacon.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Frango+Bacon'
  },
  {
    id: 'calabresa',
    name: 'Calabresa',
    price: 43,
    description: 'Linguiça calabresa, cebola e azeitonas.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Calabresa'
  }
];

const pizzasDoces: Product[] = [
  {
    id: 'prestigio',
    name: 'Prestígio',
    price: 48,
    description: 'Chocolate e coco em harmonia deliciosa.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Prestigio'
  },
  {
    id: 'brigadeiro',
    name: 'Brigadeiro',
    price: 45,
    description: 'Chocolate tradicional com granulado.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Brigadeiro'
  },
  {
    id: 'romeuJulieta',
    name: 'Romeu e Julieta',
    price: 47,
    description: 'Queijo cremoso com goiabada doce.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Romeu+Julieta'
  },
  {
    id: 'doceLeite',
    name: 'Doce de Leite',
    price: 46,
    description: 'Recheio de doce de leite caramelizado.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Doce+de+Leite'
  },
  {
    id: 'chocMorango',
    name: 'Chocolate com Morango',
    price: 50,
    description: 'Chocolate derretido com morangos frescos.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Choc+Morango'
  },
  {
    id: 'bis',
    name: 'Bis®',
    price: 52,
    description: 'Pedacinhos de Bis® envoltos em chocolate.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Bis'
  }
];

const bebidas: Product[] = [
  {
    id: 'coca350',
    name: 'Coca-Cola 350 ml',
    price: 6,
    description: 'Refrigerante clássico gelado.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Coca+350ml'
  },
  {
    id: 'pepsi2l',
    name: 'Pepsi Cola 2 l',
    price: 12,
    description: 'Garrafão ideal para compartilhar.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Pepsi+2L'
  },
  {
    id: 'agua500',
    name: 'Água Mineral 500 ml',
    price: 4,
    description: 'Água mineral pura e refrescante.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Água+500ml'
  },
  {
    id: 'guarana2l',
    name: 'Guaraná Antarctica 2 l',
    price: 12,
    description: 'Refrescante e levemente doce.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Guaraná+2L'
  },
  {
    id: 'fanta2l',
    name: 'Fanta Laranja 2 l',
    price: 11,
    description: 'Sabor vibrante e cítrico de laranja.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Fanta+2L'
  },
  {
    id: 'sucoUva',
    name: 'Suco Del Valle Uva',
    price: 14,
    description: 'Uvas selecionadas em suco natural.',
    imageUri: 'https://via.placeholder.com/100x100.png?text=Suco+Uva'
  }
];

const CategorySection = ({ title, data }: { title: string; data: Product[] }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardPrice}>{`R$ ${item.price.toFixed(2)}`}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default function PizzaAppMenu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Escolha suas pizzas e bebidas favoritas
      </Text>
      <CategorySection title="Pizzas Salgadas" data={pizzasSalgadas} />
      <CategorySection title="Pizzas Doces" data={pizzasDoces} />
      <CategorySection title="Bebidas" data={bebidas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  headerText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginLeft: 10, marginBottom: 10 },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    width: 180,
    alignItems: 'center'
  },
  image: { width: 100, height: 100, marginBottom: 8, borderRadius: 8 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  cardPrice: { fontSize: 14, color: '#c47605', marginBottom: 4 },
  cardDescription: { fontSize: 12, textAlign: 'center', marginBottom: 8 },
  buyButton: {
    backgroundColor: '#c47605',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16
  },
  buyButtonText: { color: '#fff', fontWeight: '600' }
});
