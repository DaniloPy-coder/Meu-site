const Sobre = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node",
    "PostgreSQL",
    "N8n",
  ];

  return (
    <section id="sobre" className="py-24 px-8">
      <h2 className="text-[3rem] text-center mb-5 backdrop-blur-md bg-white/5 py-4 font-bold">
        Sobre Mim
      </h2>
      <div className="max-w-3xl mx-auto p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
        <p className="text-center text-lg leading-relaxed">
          Tenho 19 anos e sou de Cruzeiro – SP. Atualmente curso Técnico em
          Informática e atuo como Desenvolvedor Full Stack Jr, com foco em
          desenvolvimento web. Tenho experiência com HTML, CSS, JavaScript,
          React, Node.js e consumo de APIs. Busco aprimorar constantemente
          minhas habilidades através de projetos práticos e estudos na área de
          tecnologia. Sou dedicado, responsável e estou em busca de
          oportunidades de estágio ou trabalho para ganhar experiência
          profissional, evoluir como desenvolvedor e contribuir com soluções
          criativas e eficientes.
        </p>
        <div className="flex justify-center flex-wrap gap-3 mt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-primary/20 text-[#4d7cfe] rounded-full text-sm font-medium uppercase border border-white/10 shadow-sm hover:bg-primary/30 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
