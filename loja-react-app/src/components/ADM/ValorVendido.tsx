import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const dados = [
  { id: "1", nome: "Calabresa", valor: 23.8 },
  { id: "2", nome: "Queijo", valor: 35.5 },
];

export default function ValorVendido() {
  const calcularTotal = () => {
    return dados.reduce((acc, item) => acc + item.valor, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valor Vendido</Text>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.nome}</Text>
            <Text>ID: {item.id}</Text>
            <Text>R$ {item.valor.toFixed(2)}</Text>
          </View>
        )}
      />

      <Text style={styles.total}>Valor Bruto: R$ {calcularTotal()}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  total: { fontSize: 18, marginTop: 20, fontWeight: "bold" },
  button: { marginTop: 20, backgroundColor: "purple", padding: 12, borderRadius: 8 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
});

