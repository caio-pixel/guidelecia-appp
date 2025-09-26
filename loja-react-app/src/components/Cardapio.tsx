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
import { useCarrinho } from "../context/CarrinhoContext";

export default function PizzaScreen({ navigation }: any) {
  const { pizzas } = usePizzas();
  const { adicionarAoCarrinho, carrinho } = useCarrinho();
  const [categoria, setCategoria] = useState("salgadas");

  const comprarPizza = (pizza: any) => {
    adicionarAoCarrinho(pizza);
    Alert.alert("Adicionado ao carrinho!", `${pizza.nome} foi adicionado.`);
  };

  const pizzasFiltradas = pizzas.filter(
    (pizza) => pizza.categoria.toLowerCase() === categoria
  );

  const getImagemPadrao = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case "salgadas":
        return "https://cdn-icons-png.flaticon.com/512/1404/1404945.png"; // pizza salgada
      case "doces":
        return "https://cdn-icons-png.flaticon.com/128/3465/3465218.png"; // chocolate
      case "refrigerantes":
        return "https://cdn-icons-png.flaticon.com/128/590/590685.png"; // refrigerante (Coca-Cola)
      default:
        return "https://cdn-icons-png.flaticon.com/512/1404/1404945.png"; // fallback
    }
  };

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
        {/* Salgadas */}
        <TouchableOpacity
          onPress={() => setCategoria("salgadas")}
          style={styles.categoryBtn}
        >
          <Ionicons
            name="pizza-outline"
            size={18}
            color={categoria === "salgadas" ? "purple" : "black"}
          />
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

        {/* Doces */}
        <TouchableOpacity
          onPress={() => setCategoria("doces")}
          style={styles.categoryBtn}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/3465/3465218.png", // chocolate
            }}
            style={{ width: 18, height: 18 }}
          />
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

        {/* Refrigerantes */}
        <TouchableOpacity
          onPress={() => setCategoria("refrigerantes")}
          style={styles.categoryBtn}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/7491/7491338.png", // Coca-Cola
            }}
            style={{ width: 18, height: 18 }}
          />
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

      {/* Lista de produtos */}
      <FlatList
        data={pizzasFiltradas}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{
                uri: item.img || getImagemPadrao(item.categoria),
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
            Nenhum produto cadastrado nesta categoria.
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

        <TouchableOpacity
          onPress={() => navigation.navigate("Carrinho")}
          style={{ position: "relative" }}
        >
          <Ionicons name="cart" size={24} color="black" />
          {carrinho.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{carrinho.length}</Text>
            </View>
          )}
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
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
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
  badge: {
    position: "absolute",
    right: -8,
    top: -5,
    backgroundColor: "#008b45",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
