import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

// Tipando o navigation
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function AdminPage() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Página do ADM</Text>
      </View>

      <Text style={styles.welcome}>Bem-vindo</Text>
      <Text style={styles.name}>Yan</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Cadastrar")}
      >
        <View>
          <Text style={styles.cardTitle}>Cadastrar pizza</Text>
          <Text style={styles.cardSubtitle}>
            Algo explicando breve, qualquer coisa
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("ValorVendido")}
      >
        <View>
          <Text style={styles.cardTitle}>Valor vendido</Text>
          <Text style={styles.cardSubtitle}>
            Algo explicando breve, qualquer coisa
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#333" />
      </TouchableOpacity>

     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  welcome: { fontSize: 20, textAlign: "center", marginBottom: 5 },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
  },
  cardTitle: { fontSize: 16, fontWeight: "bold" },
  cardSubtitle: { fontSize: 12, color: "#666" },
});
