export function ValoresEndereco() {
  return (
    <section className="py-12 px-4 my-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[bg-white] mb-6">Valores</h2>
        <p className="text-gray-700 text-lg">Acreditamos que podemos tornar sua rotina mais fácil, oferecendo o produto ideal para a limpeza da sua casa ou local de trabalho, sempre com o melhor atendimento.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-28 text-lg text-gray-700">
          <div className="bg-white p-8 rounded-lg shadow-md m-4">
            <h3 className="text-2xl text-[#d70005] mb-3">Comprometimento</h3>
            <p>Nosso compromisso vai além de produtos de qualidade. Estamos aqui para garantir a melhor experiência para você!</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md m-4">
            <h3 className="text-2xl text-[#d70005] mb-3">Ética Profissional</h3>
            <p>Agimos com transparência e respeito, porque acreditamos que confiança é a base de um bom relacionamento.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md m-4">
            <h3 className="text-2xl text-[#d70005] mb-3">Cooperativismo</h3>
            <p>Juntos, construímos um ambiente de colaboração e crescimento, sempre buscando o melhor para todos.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[bg-white ] mb-6">Onde estamos</h2>
        <p className="text-gray-700 text-xl mb-6">Av. 1, 001 - Siqueira, Fortaleza - CE, 00000-000</p>

        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#ffb1b1]">
          <iframe
            title="Mapa da loja TaLimpo Thalita"
            src="https://www.google.com/maps/embed?pb=!4v1744600405300!6m8!1m7!1sRYmEG6sFuy8j9s-JHJE1kA!2m2!1d-3.815160932121832!2d-38.58630515531728!3f153.0218362254209!4f-2.920714511647347!5f1.9587109090973311"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}