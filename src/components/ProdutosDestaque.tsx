import { useState, useEffect } from 'react';
import { getProdutos } from '../services/productService';

export function ProdutosDestaque({ onAdd }: { onAdd: (produto: any) => void }) {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    getProdutos()
      .then((res) => {
        const products = res.slice(0, 6);
        setProdutos(products);
      })
      .catch((err) => {
        console.error('Erro ao buscar produtos:', err);
      });
  }, []);

  return (
    <div className='h-full'>
      <section className="max-w-7xl mx-auto px-4 my-20">
        <div className="py-8 flex justify-between items-center text-center">
          <h2 className="text-2xl font-bold">Os melhores</h2>
          <a href="/produtos" className="text-[#F92828] text-xl">Ver todos</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {produtos.map((p) => (
            <div
              key={p.id}
              className="bg-[#F92828] shadow-md rounded-3xl p-4 relative text-white h-[292px] cursor-pointer hover:scale-105"
              onClick={() => setSelected(p)}
            >
              <h2 className="text-xl font-bold mb-1">{p.name}</h2>
              <p className="text-sm mb-3">{p.description}</p>

              <div className="relative w-full h-32 mt-2 -bottom-0">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute -left-3 -bottom-4 w-40 h-40 object-contain z-10 -rotate-45"
                />
                <img
                  src="src/assets/coca-lata.png"
                  alt="Refrigerante"
                  className="absolute -right-3 bottom-1 w-28 h-36 object-contain z-20"
                />
              </div>

              <div className="bg-[#FFD966] text-[#333] font-bold text-lg rounded-full px-4 py-1 mt-auto absolute bottom-1">
                R${p.price}
              </div>
            </div>
          ))}
        </div>

        {/* Modal de detalhes */}
        {selected && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative flex flex-col text-center">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-40 object-contain rounded-xl mb-2"
              />
              <h2 className="text-2xl font-bold mt-4 text-[#F92828]">{selected.name}</h2>
              <p className="text-gray-700 my-4 block">{selected.description}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 bg-[#F92828] text-white px-4 py-2 rounded-md hover:bg-[#841d1d] transition w-full"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
