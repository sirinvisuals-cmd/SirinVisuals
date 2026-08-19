import React, { useState } from 'react';
import { SirinProvider } from './context/SirinContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Packages } from './components/Packages';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ShowreelModal } from './components/ShowreelModal';
import { AdminPanel } from './components/AdminPanel';

function MainApp() {
  const [selectedServiceOrPackage, setSelectedServiceOrPackage] = useState<string>('');
  const [showreelOpen, setShowreelOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBookTrigger = (serviceOrPkgName?: string) => {
    if (serviceOrPkgName) {
      setSelectedServiceOrPackage(serviceOrPkgName);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#110A1F] flex flex-col font-sans selection:bg-purple-800 selection:text-white">
      {/* Sleek Minimalist Navbar */}
      <Navbar onBookClick={(pkg) => handleBookTrigger(pkg)} />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* 1. Spacious Clean Hero */}
        <Hero
          onBookClick={() => handleBookTrigger()}
          onExploreWorkClick={() => scrollToSection('portfolio')}
          onWatchReelClick={() => setShowreelOpen(true)}
        />

        {/* 2. Sleek Metrics Strip */}
        <TrustBar />

        {/* 3. Streamlined Services Grid */}
        <Services onBookService={(serviceName) => handleBookTrigger(serviceName)} />

        {/* 4. Filterable Portfolio Gallery & Before/After Comparison */}
        <Portfolio onBookProject={(title) => handleBookTrigger(title)} />

        {/* 5. Clean Packages & Drone Shows Switcher */}
        <Packages
          onSelectPackage={(pkgName) => handleBookTrigger(pkgName)}
          onRequestCustomQuote={() => handleBookTrigger('Custom Production Quote')}
        />

        {/* 6. Why SIRIN Visuals */}
        <WhyUs />

        {/* 7. About Studio */}
        <About onContactClick={() => scrollToSection('contact')} />

        {/* 8. 4-Step Process */}
        <Process onStartProcess={() => handleBookTrigger('Step 01: Project Discovery')} />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Minimalist FAQ Accordion */}
        <FAQ onContactClick={() => scrollToSection('contact')} />

        {/* 11. Clean Booking & Contact */}
        <Contact initialServiceOrPackage={selectedServiceOrPackage} />
      </main>

      {/* Lightweight Footer with Double-Tap on SIRIN to open Admin Panel */}
      <Footer onNavClick={(secId) => scrollToSection(secId)} />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />

      {/* Showreel Preview Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onBookClick={() => {
          setShowreelOpen(false);
          handleBookTrigger('Full Cinema Production');
        }}
      />

      {/* Live Admin Panel (Password-free, opens on double-tapping SIRIN at bottom) */}
      <AdminPanel />
    </div>
  );
}

export default function App() {
  return (
    <SirinProvider>
      <MainApp />
    </SirinProvider>
  );
}
