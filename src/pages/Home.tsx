// src/pages/Home.tsx
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { ProdutosDestaque } from '../components/ProdutosDestaque';
import { ValoresEndereco } from '../components/ValoresEndereco';
import { useCarrinho } from '../context/CarrinhoContext';
import Footer from '../components/Footer';
import { Promocoes } from '../components/Promocoes';
import { ComoFunciona } from '../components/ComoFunciona';
import { Galeria } from '../components/Galeria';
import { Avaliacoes } from '../components/Avaliacoes';

export function Home() {
  const { adicionar } = useCarrinho();

  return (
    <main>
      <Banner />
      <ProdutosDestaque onAdd={adicionar} />
      <Promocoes />
      <ComoFunciona />
      <Galeria />
      <Avaliacoes />
      <ValoresEndereco />
    </main>
  );
}
