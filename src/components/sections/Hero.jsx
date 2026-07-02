import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const handleScrollToConsultation = () => {
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[500px] flex items-center justify-center bg-brand-black overflow-hidden">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600&h=900')`
        }}
      />
      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/75 to-transparent lg:to-brand-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full text-left text-white">
        <div className="max-w-3xl">
          {/* Subtitle tag */}
          <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-white uppercase mb-4 bg-brand-green/20 px-3.5 py-1.5 rounded-full border border-brand-green/30 backdrop-blur-sm">
            Infrastructure & Construction Consultancy
          </span>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight mb-6">
            Building India's Infrastructure, <br className="hidden md:inline" />
            <span className="text-brand-green">One Project at a Time</span>
          </h1>

          {/* Body description */}
          <p className="font-body text-base md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Om Seva Design & Build Pvt. Ltd. is a premier engineering consultancy and registered Class-1 contracting firm. We design safe highways, water supply grids, and durable structures across Maharashtra and beyond.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              to="/projects"
              className="flex items-center gap-2 group justify-center"
            >
              View Our Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline-green"
              onClick={handleScrollToConsultation}
              className="flex items-center gap-2 justify-center text-white border-white hover:bg-white hover:text-brand-black"
            >
              <Calendar size={16} />
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
