import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Vehicles } from './components/Vehicles';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-16 sm:pb-0">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Vehicles />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyBottomBar />
    </div>
  );
}

export default App;