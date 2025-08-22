import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

export default function CadastrarPizza({ navigation }) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const salvarPizza = async () => {
    if (!nome || !categoria || !descricao || !preco) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
   


    try {
      const response = await fetch("http://localhost:3000/pizzas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, categoria, descricao, preco }),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Pizza cadastrada com sucesso!");
        navigation.goBack(); // volta para a tela anterior
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar a pizza.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar pizza:", error);
      Alert.alert("Erro", "Ocorreu um problema ao cadastrar a pizza.");
    }
  };

  const selecionarImagem = () => {
    Alert.alert("Funcionalidade", "Selecionar imagem ainda não implementado.");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastrar Pizza</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da pizza"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={[styles.input, styles.categoriaInput]}
        placeholder="Categoria"
        placeholderTextColor="#aaa"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={4}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={salvarPizza}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={selecionarImagem}>
          <Text style={styles.buttonText}>Imagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  categoriaInput: {
    borderWidth: 2,
    borderColor: "purple",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
});
