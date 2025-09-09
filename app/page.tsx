import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Help from "@/components/Help";
export default function Home() {
  return (
    <section className="wrapper w-full">
      <div className="container">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Help />
        <Footer />
      </div>
    </section>
  );
}
