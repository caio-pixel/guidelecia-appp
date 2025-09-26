import React, { createContext, useContext, useState } from "react";

type ItemCarrinho = {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
};

type CarrinhoContextType = {
  carrinho: ItemCarrinho[];
  adicionarAoCarrinho: (pizza: { id: number; nome: string; preco: number }) => void;
  removerDoCarrinho: (id: number) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(
  undefined
);

export const CarrinhoProvider = ({ children }: { children: React.ReactNode }) => {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  const adicionarAoCarrinho = (pizza: { id: number; nome: string; preco: number }) => {
    setCarrinho((prev) => {
      const existente = prev.find((item) => item.id === pizza.id);
      if (existente) {
        return prev.map((item) =>
          item.id === pizza.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...pizza, quantidade: 1 }];
    });
  };

  const removerDoCarrinho = (id: number) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  const limparCarrinho = () => setCarrinho([]);

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  }
  return context;
};
