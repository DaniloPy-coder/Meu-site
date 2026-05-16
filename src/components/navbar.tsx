"use client";

const Navbar = () => {
  const menuItems = ["Início", "Sobre", "Projetos", "Contatos"];

  return (
    <nav className="fixed top-0 w-full z-100 p-6 bg-dark/80 backdrop-blur-sm border-b border-white/5">
      <ul className="flex justify-center list-none gap-8 md:gap-12">
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative font-medium py-2 group transition-all text-ofcourse hover:text-primary"
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
