"use client";

const Contato = () => {
  const enviarWhats = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const texto = `Olá! Me chamo ${formData.get("nome")}, ${formData.get("mensagem")}`;
    window.open(
      `https://wa.me/5512992102803?text=${encodeURIComponent(texto)}`,
      "_blank",
    );
  };

  return (
    <section id="contatos" className="py-24 px-8">
      <h2 className="text-center text-4xl mb-12">Entre em Contato</h2>
      <form
        className="max-w-lg mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
        onSubmit={enviarWhats}
      >
        <input
          name="nome"
          placeholder="Nome"
          className="w-full p-4 bg-white/5 rounded-lg border border-white/10 text-ofcourse mb-6 outline-none focus:border-secondary"
          required
        />
        <textarea
          name="mensagem"
          rows={6}
          className="w-full p-4 bg-white/5 rounded-lg border border-white/10 text-ofcourse mb-6 outline-none focus:border-secondary resize-none"
          placeholder="Digite sua mensagem"
          required
        />
        <button
          type="submit"
          className="cursor-pointer w-full py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-bold hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(147,51,234,0.4)] transition-all"
        >
          Enviar WhatsApp
        </button>
      </form>
    </section>
  );
};

export default Contato;
