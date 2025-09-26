import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Carrinho({ navigation }: any) {
  const { carrinho, removerDoCarrinho } = useCarrinho();

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>

      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemInfo}>
              <Text style={styles.nome}>
                {item.nome} x{item.quantidade}
              </Text>
              <Text style={styles.preco}>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.removerBtn}
              onPress={() => removerDoCarrinho(item.id)}
            >
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.carrinhoVazio}>Seu carrinho está vazio 😔</Text>
        }
      />

      {/* Rodapé com total e botão */}
      {carrinho.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.pagarButton}
            onPress={() => navigation.navigate("FinishBuy")}
          >
            <Text style={styles.pagarText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 15 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemInfo: { flexDirection: "column" },
  nome: { fontSize: 16, fontWeight: "600", color: "#333" },
  preco: { fontSize: 16, fontWeight: "bold", marginTop: 5, color: "#CD212A" },
  removerBtn: {
    backgroundColor: "#FFDDDD",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  remover: { color: "#FF0000", fontWeight: "bold" },
  carrinhoVazio: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "gray",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "right",
  },
  pagarButton: {
    backgroundColor: "#CD212A",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  pagarText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
