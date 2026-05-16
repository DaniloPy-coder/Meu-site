import Navbar from "../src/components/navbar";
import Hero from "../src/components/hero";
import Sobre from "../src/components/about";
import Projetos from "../src/components/projetos";
import Contato from "../src/components/contato";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <div className="bg-dark text-ofcourse min-h-screen selection:bg-primary/30">
      <div className="fixed inset-0 -z-10 bg-darker bg-[radial-gradient(circle_at_10%_20%,#4f46e5_0%,transparent_20%),radial-gradient(circle_at_90%_80%,#7c3aed_0%,transparent_20%)]" />

      <Navbar />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
