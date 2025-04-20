// src/pages/Home.tsx
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { ProdutosDestaque } from '../components/ProdutosDestaque';
import { ValoresEndereco } from '../components/ValoresEndereco';
import { useCarrinho } from '../context/CarrinhoContext';
import Footer from '../components/Footer';

export function Home() {
  const { adicionar } = useCarrinho();

  return (
    <main>
      <Banner />
      <ProdutosDestaque onAdd={adicionar} />
      <ValoresEndereco />
    </main>
  );
}
