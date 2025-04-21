// components/Avaliacoes.tsx
export function Avaliacoes() {
    const feedbacks = [
      {
        nome: "Joana M.",
        comentario: "O melhor escondidinho que já comi! Super temperado e chegou quentinho!",
        nota: 5,
      },
      {
        nome: "Carlos S.",
        comentario: "Muito saboroso, só acho que podia vir mais kkkk",
        nota: 4,
      },
    ];
  
    return (
      <section className="py-12 bg-gray-50" id="avaliacoes">
        <h2 className="text-3xl font-bold text-center mb-8">O que nossos clientes dizem</h2>
        <div className="max-w-5xl mx-5 grid grid-cols-2 md:grid-cols-2 gap-6">
          {feedbacks.map((fb, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow">
              <div className="mt-4 flex items-center justify-between mb-4">
                <span className="font-semibold text-[#F92828]">{fb.nome}</span>
                <span>{"⭐".repeat(fb.nota)}</span>
              </div>
              <p className="text-gray-700 italic">"{fb.comentario}"</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  