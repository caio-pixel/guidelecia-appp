import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function GerenciarPizzas() {
  const pizzasExemplo = [
    {
      id: 1,
      nome: "Margherita",
      categoria: "Tradicional",
      descricao: "Molho de tomate e mussarela",
      preco: 25,
    },
    {
      id: 2,
      nome: "Calabresa",
      categoria: "Tradicional",
      descricao: "Calabresa fatiada e cebola",
      preco: 30,
    },
  ];

  const [idPizza, setIdPizza] = useState("");
  const [pizzaSelecionada, setPizzaSelecionada] = useState(null);
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  // Busca pizza pelo ID
  const buscarPizza = () => {
    const pizza = pizzasExemplo.find((p) => p.id.toString() === idPizza);
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

  const atualizarPizza = () => {
    if (!nome || !categoria || !descricao || !preco) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    pizzaSelecionada.nome = nome;
    pizzaSelecionada.categoria = categoria;
    pizzaSelecionada.descricao = descricao;
    pizzaSelecionada.preco = parseFloat(preco);

    Alert.alert("Sucesso", "Pizza atualizada!");
    resetarCampos();
  };

  const resetarCampos = () => {
    setIdPizza("");
    setPizzaSelecionada(null);
    setNome("");
    setCategoria("");
    setDescricao("");
    setPreco("");
  };

  const excluirPizza = () => {
    Alert.alert("Sucesso", `Pizza ${pizzaSelecionada.nome} excluída!`);
    resetarCampos();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar/Excluir</Text>

      {!pizzaSelecionada ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="N°-pizza"
            keyboardType="numeric"
            value={idPizza}
            onChangeText={setIdPizza}
          />
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.button, styles.updateBtn]}
              onPress={buscarPizza}
            >
              <Text style={styles.buttonText}>Atualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.deleteBtn]}
              onPress={() =>
                Alert.alert("Excluir", "Selecione uma pizza primeiro!")
              }
            >
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="nome da pizza"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="categoria"
            value={categoria}
            onChangeText={setCategoria}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="descrição"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Preço"
            keyboardType="numeric"
            value={preco}
            onChangeText={setPreco}
          />
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.button, styles.updateBtn]}
              onPress={atualizarPizza}
            >
              <Text style={styles.buttonText}>Atualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelBtn]}
              onPress={resetarCampos}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: { height: 80, textAlignVertical: "top" },
  row: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  updateBtn: { backgroundColor: "green" },
  deleteBtn: { backgroundColor: "red" },
  cancelBtn: { backgroundColor: "#c0392b" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
