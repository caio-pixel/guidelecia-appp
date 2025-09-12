import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { usePizzas } from "../context/PizzaContext";
// 🔹 Definição do tipo Pizza
interface Pizza {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
}

export default function GerenciarPizzas() {
  const { pizzas, addPizza, updatePizza, deletePizza } = usePizzas();
  const [idPizza, setIdPizza] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<string>("");

  const [pizzaSelecionada, setPizzaSelecionada] = useState<Pizza | null>(null);

  // 🔎 Buscar pizza
  const buscarPizza = () => {
    // Exemplo fictício só para simular busca
    const pizza: Pizza | null = {
      id: 1,
      nome: "Cala",
      categoria: "Salgada",
      descricao: "Pizza de calabresa com cebola",
      preco: 45.0,
    };

    if (pizza) {
      setPizzaSelecionada(pizza);
      setNome(pizza.nome);
      setCategoria(pizza.categoria);
      setDescricao(pizza.descricao);
      setPreco(pizza.preco.toString());
    } else {
      Alert.alert("Erro", "Pizza não encontrada.");
    }
  };

  // ✏️ Atualizar pizza
  const atualizarPizza = () => {
    if (!pizzaSelecionada) {
      Alert.alert("Erro", "Nenhuma pizza selecionada!");
      return;
    }

    if (!nome || !categoria || !descricao || !preco) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const novaPizza: Pizza = {
      ...pizzaSelecionada,
      nome,
      categoria,
      descricao,
      preco: parseFloat(preco),
    };

    setPizzaSelecionada(novaPizza);
    Alert.alert("Sucesso", "Pizza atualizada!");
    resetarCampos();
  };

  // 🔄 Resetar campos
  const resetarCampos = () => {
    setIdPizza("");
    setPizzaSelecionada(null);
    setNome("");
    setCategoria("");
    setDescricao("");
    setPreco("");
  };

  // ❌ Excluir pizza
  const excluirPizza = () => {
    if (!pizzaSelecionada) {
      Alert.alert("Erro", "Nenhuma pizza selecionada!");
      return;
    }

    Alert.alert("Sucesso", `Pizza ${pizzaSelecionada.nome} excluída!`);
    resetarCampos();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Pizzas</Text>

      <TextInput
        style={styles.input}
        placeholder="ID da Pizza"
        value={idPizza}
        onChangeText={setIdPizza}
      />

      <TouchableOpacity style={styles.button} onPress={buscarPizza}>
        <Text style={styles.buttonText}>Buscar Pizza</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />

      <TouchableOpacity style={styles.button} onPress={atualizarPizza}>
        <Text style={styles.buttonText}>Atualizar Pizza</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={excluirPizza}>
        <Text style={styles.buttonText}>Excluir Pizza</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, color: "#5a4ce0" },
  input: { backgroundColor: "#f0f0f0", padding: 12, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: "#5a4ce0", padding: 15, borderRadius: 5, alignItems: "center", marginBottom: 10 },
  deleteButton: { backgroundColor: "red", padding: 15, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
