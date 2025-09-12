import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PizzaProvider } from "./src/context/PizzaContext";

// Telas
import Cadastrar from "./src/components/Cadastrar"
import PizzaAppMenu from "./src/components/Cardapio";
import Create from "./src/components/Create";
import GerenciarPizzas from "./src/components/Gerenciar";
import LoginCliente from "./src/components/LoginCliente";
import ResetPassword from "./src/components/ResetPassword";
import CodeVerification from "./src/components/CodeVerification";
import NewPassword from "./src/components/NewPassword";
import SobrePizzaria from "./src/components/SobrePizzaria";
import AdminPage from "./src/components/adminPage";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PizzaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="LoginCliente">
          <Stack.Screen
            name="LoginCliente"
            component={LoginCliente}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Cardapio" component={PizzaAppMenu} />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Gerenciar" component={GerenciarPizzas} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="SobrePizzaria" component={SobrePizzaria} />
          <Stack.Screen name="adminPage" component={AdminPage} />
          <Stack.Screen name="Cadastrar" component={Cadastrar} />
          <Stack.Screen name='CodeVerification' component={CodeVerification} />
          <Stack.Screen name="NewPassword" component={NewPassword} />

        </Stack.Navigator>
      </NavigationContainer>
    </PizzaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
