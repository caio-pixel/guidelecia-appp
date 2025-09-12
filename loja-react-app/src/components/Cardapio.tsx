import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePizzas } from "../context/PizzaContext";

export default function PizzaScreen({ navigation }: any) {
  const { pizzas } = usePizzas(); // pega pizzas do contexto
  const [categoria, setCategoria] = useState("salgadas");

  // Função de compra
  const comprarPizza = (pizza: any) => {
    Alert.alert("Compra realizada!", `Você comprou: ${pizza.nome}`);
  };

  // Filtra pizzas pela categoria selecionada
  const pizzasFiltradas = pizzas.filter(
    (pizza) => pizza.categoria.toLowerCase() === categoria
  );

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
        <TouchableOpacity onPress={() => setCategoria("salgadas")}>
          <Text
            style={
              categoria === "salgadas"
                ? styles.categoryItemBold
                : styles.categoryItem
            }
          >
            Salgadas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategoria("doces")}>
          <Text
            style={
              categoria === "doces"
                ? styles.categoryItemBold
                : styles.categoryItem
            }
          >
            Doces
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategoria("refrigerantes")}>
          <Text
            style={
              categoria === "refrigerantes"
                ? styles.categoryItemBold
                : styles.categoryItem
            }
          >
            Refrigerantes
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de pizzas */}
      <FlatList
        data={pizzasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{
                uri:
                  item.img ||
                  "https://cdn-icons-png.flaticon.com/512/1404/1404945.png",

              }}
              style={styles.pizzaImage}
            />
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardText}>{item.descricao}</Text>
            <Text style={styles.cardText}>R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => comprarPizza(item)}
            >
              <Text style={styles.buyText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>
            Nenhuma pizza cadastrada nesta categoria.
          </Text>
        }
      />

      {/* Navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Conta")}>
          <Ionicons name="person" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
          <Ionicons name="cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#008b45",
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  categoryItem: { fontSize: 16, fontWeight: "normal", color: "black" },
  categoryItemBold: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "purple",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    margin: 15,
  },
  pizzaImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  cardText: {
    color: "black",
    textAlign: "center",
    marginVertical: 5,
  },
  buyButton: {
    backgroundColor: "#CD212A",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignSelf: "center",
  },
  buyText: { color: "white", fontWeight: "bold" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#CD212A",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
