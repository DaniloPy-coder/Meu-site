import Image from "next/image";

const Projetos = () => {
  const listaProjetos = [
    {
      titulo: "Conversor de moedas",
      descricao:
        "Esse código implementa um conversor de moedas usando React, com troca de temas (modo claro e escuro) e formatação de grandes números.",
      imagem: "/projeto 1.png",
      link: "https://conversor-moedas-psi.vercel.app",
    },
    {
      titulo: "Previsão do tempo",
      descricao:
        "Sistema para buscar a previsão do tempo por cidade, exibindo a temperatura atual e condições climáticas. Interface totalmente responsiva.",
      imagem: "/projeto 2.png",
      link: "https://react-clima-dun.vercel.app",
    },
    {
      titulo: "Big Burger",
      descricao:
        "Site interativo para uma lanchonete fictícia utilizando HTML, CSS e JavaScript. Foco em experiência do usuário e navegação fluida.",
      imagem: "/projeto 3.png",
      link: "https://big-burger-sigma.vercel.app",
    },
    {
      titulo: "Buscador de cep",
      descricao:
        "Aplicação React que consome a API ViaCEP para validar e retornar endereços completos a partir do CEP inserido pelo usuário.",
      imagem: "/projeto 4.png",
      link: "https://buscador-de-cep-swart.vercel.app",
    },
    {
      titulo: "Sistema de Pizzaria",
      descricao:
        "Primeira etapa de um sistema completo com foco em pedidos online, gestão de produtos e fluxo de pedidos em tempo real.",
      imagem: "/projeto 5.png",
      link: "https://pizzaria-front-end-kappa.vercel.app",
    },
    {
      titulo: "CarRental",
      descricao:
        "CarRental é uma plataforma moderna de aluguel de carros desenvolvida para facilitar a busca e visualização de veículos de forma rápida e intuitiva. O projeto possui design responsivo, integração com APIs e foco em experiência do usuário utilizando tecnologias modernas de desenvolvimento web.",
      imagem: "/projeto 6.png",
      link: "https://car-rental-one-navy.vercel.app",
    },
    {
      titulo: "Devbnb",
      descricao:
        "Aplicação Full Stack inspirada no Airbnb, desenvolvida para conectar desenvolvedores e compartilhar ambientes e informações do universo tech. O projeto utiliza React.js no front-end, Node.js no back-end, PostgreSQL (Neon) com Prisma ORM para gerenciamento de dados e Cloudinary para armazenamento de imagens. Focado em performance, escalabilidade e experiência do usuário, conta com interface responsiva, integração via APIs REST e arquitetura moderna para aplicações web.",
      imagem: "/projeto 7.png",
      link: "https://devbnb-front.vercel.app",
    },
  ];

  return (
    <section id="projetos" className="py-24 px-8 max-w-6xl mx-auto">
      <h2 className="text-center text-[2.5rem] font-bold mb-12">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listaProjetos.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={p.imagem}
                alt={p.titulo}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                {p.titulo}
              </h3>
              <p className="text-ofcourse/80 text-sm line-clamp-4">
                {p.descricao}
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium">
                Ver projeto <i className="bi bi-arrow-up-right ml-2"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
