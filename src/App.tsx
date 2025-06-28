import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Problems from './components/Problems';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-black bg-white">
        <Header />
        <main className="space-y-0">
          <section id="home">
            <Hero />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="problems">
            <Problems />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <CTA />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;