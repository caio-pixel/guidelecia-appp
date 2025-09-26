import React, { createContext, useContext, useState } from "react";

type Venda = {
  id: number;
  nome: string;
  preco: number;
  data: string;
};

type VendaContextType = {
  vendas: Venda[];
  registrarVenda: (pizza: { nome: string; preco: number }) => void;
};

const VendaContext = createContext<VendaContextType | undefined>(undefined);

export const VendaProvider = ({ children }: { children: React.ReactNode }) => {
  const [vendas, setVendas] = useState<Venda[]>([]);

  const registrarVenda = (pizza: { nome: string; preco: number }) => {
    const novaVenda: Venda = {
      id: vendas.length + 1,
      nome: pizza.nome,
      preco: pizza.preco,
      data: new Date().toLocaleString("pt-BR"),
    };
    setVendas((prev) => [...prev, novaVenda]);
  };

  return (
    <VendaContext.Provider value={{ vendas, registrarVenda }}>
      {children}
    </VendaContext.Provider>
  );
};

export const useVendas = () => {
  const context = useContext(VendaContext);
  if (!context) {
    throw new Error("useVendas deve ser usado dentro de VendaProvider");
  }
  return context;
};
