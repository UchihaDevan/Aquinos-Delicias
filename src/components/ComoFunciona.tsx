// components/ComoFunciona.tsx
export function ComoFunciona() {
  return (
    <section className="py-16 bg-white" id="como-funciona">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#F92828]">
        Como Fazer Seu Pedido
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
        {[
          {
            passo: "1",
            titulo: "Monte seu pedido",
            desc: "Escolha seus escondidinhos favoritos e adicione ao carrinho.",
          },
          {
            passo: "2",
            titulo: "Envie pelo WhatsApp",
            desc: "Clique em finalizar e envie seu pedido direto pra gente com 1 toque.",
          },
          {
            passo: "3",
            titulo: "Receba em casa",
            desc: "Nosso entregador leva quentinho até você, rápido e com carinho.",
          },
        ].map((item) => (
          <div
            key={item.passo}
            className="bg-red-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-5xl font-bold text-[#F92828]">{item.passo}</span>
            <h3 className="mt-4 font-semibold text-xl text-gray-800">
              {item.titulo}
            </h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
