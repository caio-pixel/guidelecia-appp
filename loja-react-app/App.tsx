import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GerenciarPizzas from './src/components/ADM/GerenciarPizzas';
import Create from './src/components/Homepage/Create';
import LoginClient from './src/components/Homepage/LoginClient';  
import LoginADM from './src/components/ADM/LoginAdm';              
import ResetPassword from './src/components/Homepage/ResetPassword';
import CodeVerification from './src/components/Homepage/CodeVerification';
import NewPassword from './src/components/Homepage/NewPassword';
import AdminPage from './src/components/ADM/AdminPage';
import Cardapio from './src/components/paginacliente/cardapio';
import SobrePizzaria from './src/components/paginacliente/SobrePizzaria';
import CadastrarPizza from './src/components/ADM/Cadastrar';
import AtualizarPerfil from './src/components/ADM/atualizarperfil';
import ValorVendido from './src/components/ADM/ValorVendido';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Fluxo Cliente */}
        <Stack.Screen name="CriarConta" component={Create} />
        <Stack.Screen name="LoginClient" component={LoginClient} />  
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="CodeVerification" component={CodeVerification} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="AboutScreen" component={SobrePizzaria} />

        {/* Fluxo ADM */}
        <Stack.Screen name="LoginADM" component={LoginADM} />          
        <Stack.Screen name="AdminPage" component={AdminPage} />
        <Stack.Screen name="ValorVendido" component={ValorVendido} /> 

        <Stack.Screen name="GerenciarPizzas" component={GerenciarPizzas} />
        <Stack.Screen name="CadastrarPizza" component={CadastrarPizza} />
        <Stack.Screen name="AtualizarPerfil" component={AtualizarPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
