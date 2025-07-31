
'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Projects from '@/components/Project';
import Skills from '@/components/Skill';

export default function HomePage() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
