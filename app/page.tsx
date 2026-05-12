import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}