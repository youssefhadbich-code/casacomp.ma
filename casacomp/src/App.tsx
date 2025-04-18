import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductCategories from './components/ProductCategories';
import About from './components/About';
import References from './components/References';
import Airnet from './components/Airnet';
import EnergyAudit from './components/EnergyAudit';
import MaintenanceService from './components/MaintenanceService';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <WhatsAppButton />
      <main className="relative pt-[104px]">
        <Hero />
        <Services />
        <ProductCategories />
        <About />
        <References />
        <EnergyAudit />
        <MaintenanceService />
        <Airnet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
