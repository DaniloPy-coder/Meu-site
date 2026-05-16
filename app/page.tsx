import Navbar from "../src/components/navbar";
import Hero from "../src/components/hero";
import Sobre from "../src/components/about";
import Projetos from "../src/components/projetos";
import Contato from "../src/components/contato";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-primary/30">
      <div className="fixed inset-0 -z-10 bg-gradient-fundo" />
      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
