import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useCarrinho } from "../context/CarrinhoContext";
import { useVendas } from "../context/VendaContext";

export default function FinishBuy({ navigation }: any) {
  const { carrinho, limparCarrinho } = useCarrinho();
  const { registrarVenda } = useVendas();

  // Estado do endereço
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [referencia, setReferencia] = useState("");

  // Calcular total
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      Alert.alert("Carrinho vazio", "Adicione itens antes de finalizar.");
      return;
    }
    if (!endereco || !numero || !bairro) {
      Alert.alert("Endereço incompleto", "Preencha todos os campos.");
      return;
    }

    // Registrar cada item da venda
    carrinho.forEach((item) => {
      for (let i = 0; i < item.quantidade; i++) {
        registrarVenda({ nome: item.nome, preco: item.preco });
      }
    });

    limparCarrinho();

    Alert.alert(
      "Pedido confirmado! 🎉",
      `Entrega para: ${endereco}, ${numero}, ${bairro}. 
Ref: ${referencia || "não informado"}`
    );

    navigation.navigate("Cardapio"); // depois volta pro cardápio
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Finalizar Pedido</Text>

      {/* Resumo do carrinho */}
      {carrinho.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.nome} x{item.quantidade} — R$ {(item.preco * item.quantidade).toFixed(2)}
        </Text>
      ))}

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

      {/* Formulário endereço */}
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        style={styles.input}
        placeholder="Referência (opcional)"
        value={referencia}
        onChangeText={setReferencia}
      />

      <TouchableOpacity style={styles.button} onPress={finalizarPedido}>
        <Text style={styles.buttonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
    color: "#444",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#CD212A",
    textAlign: "right",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#CD212A",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
