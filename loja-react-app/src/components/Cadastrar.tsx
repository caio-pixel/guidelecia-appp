import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { usePizzas } from "../context/PizzaContext";

export default function Cadastrar() {
  const { pizzas, addPizza, updatePizza, deletePizza } = usePizzas();

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState<"salgadas" | "doces" | "refrigerantes" | "">("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const handleAdd = () => {
    if (!nome || !categoria || !descricao || !preco) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    addPizza({
      id: Date.now(), // garante que cada pizza tenha um ID único
      nome,
      categoria,
      descricao,
      preco: parseFloat(preco),
      img: "",
    });

    resetForm();
  };

  const handleUpdate = () => {
    if (!editandoId) return;

    updatePizza({
      id: editandoId,
      nome,
      categoria,
      descricao,
      preco: parseFloat(preco),
      img: "",
    });

    resetForm();
  };

  const handleDelete = (id: number) => {
    Alert.alert("Confirmação", "Deseja excluir esta pizza?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", style: "destructive", onPress: () => deletePizza(id) },
    ]);
  };

  const resetForm = () => {
    setNome("");
    setCategoria("");
    setDescricao("");
    setPreco("");
    setEditandoId(null);
  };

  const startEditing = (pizza: any) => {
    setEditandoId(pizza.id);
    setNome(pizza.nome);
    setCategoria(pizza.categoria);
    setDescricao(pizza.descricao);
    setPreco(pizza.preco.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {editandoId ? "Editar Pizza" : "Cadastrar Pizza"}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Botões de categoria */}
      <View style={styles.categoryContainer}>
        {["salgadas", "doces", "refrigerantes"].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              categoria === cat && styles.categoryButtonSelected,
            ]}
            onPress={() => setCategoria(cat as any)}
          >
            <Text
              style={[
                styles.categoryText,
                categoria === cat && styles.categoryTextSelected,
              ]}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

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

      <TouchableOpacity
        style={styles.button}
        onPress={editandoId ? handleUpdate : handleAdd}
      >
        <Text style={styles.buttonText}>
          {editandoId ? "Salvar Alterações" : "Adicionar"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={pizzas}
        keyExtractor={(item, index) => `${item.id}-${index}`} // 🔑 garante chave única
        renderItem={({ item }) => (
          <View style={styles.pizzaItem}>
            <View>
              <Text>
                {item.id}
              </Text>
              <Text style={styles.pizzaText}>
                🍕 {item.nome} - R$ {item.preco.toFixed(2)}
              </Text>
              <Text style={styles.pizzaDetails}>{item.descricao}</Text>
              <Text style={styles.pizzaDetails}>
                Categoria: {item.categoria}
              </Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => startEditing(item)}
              >
                <Text style={styles.actionText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.actionText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#5a4ce0",
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#5a4ce0",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  },
  categoryButtonSelected: {
    backgroundColor: "#5a4ce0",
  },
  categoryText: { color: "#000", fontWeight: "bold" },
  categoryTextSelected: { color: "#fff" },
  pizzaItem: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    marginVertical: 5,
    borderRadius: 5,
  },
  pizzaText: { fontSize: 16, fontWeight: "bold" },
  pizzaDetails: { fontSize: 14, color: "#555" },
  actions: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "flex-end",
    gap: 10,
  },
  editButton: { backgroundColor: "#ffa500", padding: 8, borderRadius: 5 },
  deleteButton: { backgroundColor: "red", padding: 8, borderRadius: 5 },
  actionText: { color: "#fff", fontWeight: "bold" },
});
