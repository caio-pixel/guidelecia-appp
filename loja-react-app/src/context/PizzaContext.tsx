import React, { createContext, useContext, useState, ReactNode } from "react";

type PizzaType = {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
  imageUri?: string;
};

type PizzaContextType = {
  pizzas: PizzaType[];
  addPizza: (pizza: PizzaType) => void;
  updatePizza: (pizza: PizzaType) => void;
  deletePizza: (id: number) => void;
};

const PizzaContext = createContext<PizzaContextType>({} as PizzaContextType);

export const usePizzas = () => useContext(PizzaContext);

type Props = { children: ReactNode };

export const PizzaProvider = ({ children }: Props) => {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);

  const getNextId = () => {
    if (pizzas.length === 0) return 1;
    return Math.max(...pizzas.map(p => p.id)) + 1;
  };

  const addPizza = (pizza: PizzaType) => {
    pizza.id = getNextId();
    setPizzas(prev => [...prev, pizza]);
  };

  const updatePizza = (pizza: PizzaType) => {
    setPizzas(prev => prev.map(p => (p.id === pizza.id ? pizza : p)));
  };

  const deletePizza = (id: number) => {
    setPizzas(prev => prev.filter(p => p.id !== id));
  };

  return (
    <PizzaContext.Provider value={{ pizzas, addPizza, updatePizza, deletePizza }}>
      {children}
    </PizzaContext.Provider>
  );
};
