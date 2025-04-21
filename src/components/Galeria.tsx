// components/Galeria.tsx
export function Galeria() {
  const imagens = [
    "src/assets/galeria1.jpg",
    "src/assets/galeria2.jpg",
    "src/assets/galeria3.jpg",
  ];

  return (
    <section className="py-16 bg-red-50" id="galeria">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#F92828]">
        Galeria de Fotos
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imagens.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-md group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
