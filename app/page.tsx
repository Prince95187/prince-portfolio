import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Services />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
