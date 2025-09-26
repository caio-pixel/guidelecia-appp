import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useVendas } from "../context/VendaContext";

export default function ValorVendido() {
  const { vendas } = useVendas();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const soma = vendas.reduce((acc, v) => acc + (v.preco || 0), 0);
    setTotal(soma);
    console.log("IDs atuais das vendas:", vendas.map(v => v.id)); // log de todos os IDs
  }, [vendas]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valor Total Vendido</Text>
      <Text style={styles.valor}>R$ {total.toFixed(2)}</Text>

      <Text style={styles.subtitle}>Histórico de vendas:</Text>
     <FlatList
  data={vendas}
  keyExtractor={(item, index) => `${item.id}-${index}`}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      <Text style={styles.data}>{item.data}</Text>
    </View>
  )}
  ListEmptyComponent={
    <Text style={{ textAlign: "center", color: "gray" }}>
      Nenhuma venda realizada ainda.
    </Text>
  }
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  valor: { fontSize: 28, fontWeight: "bold", color: "green", textAlign: "center", marginBottom: 20 },
  subtitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  nome: { fontSize: 16, fontWeight: "bold" },
  preco: { fontSize: 16, color: "green" },
  data: { fontSize: 12, color: "gray" },
});
