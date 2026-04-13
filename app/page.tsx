'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Club from './components/Club';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Reveal } from './components/Reveal';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main className="overflow-hidden">
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Rooms />
        </Reveal>

        <Reveal>
          <Amenities />
        </Reveal>

        <Reveal>
          <Gallery />
        </Reveal>

        <Reveal>
          <Events />
        </Reveal>

        <Reveal>
          <Club />
        </Reveal>

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

        <Reveal>
          <CTA />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}