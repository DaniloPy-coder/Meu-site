document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Evita o comportamento padrão de clique

    const targetId = this.getAttribute("href"); // Obtém o ID do destino
    const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

    targetElement.scrollIntoView({
      behavior: "smooth", // Efeito de rolagem suave
    });
  });
});
