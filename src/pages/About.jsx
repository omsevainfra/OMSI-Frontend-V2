import React from 'react';
import { Target, Shield, Heart, ShieldAlert, Award, FileSpreadsheet, Hourglass, Landmark, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

export function About() {
  const pillars = [
    {
      title: "Transportation Engineering",
      description: "Delivering advanced highway geometric layouts, computer-assisted micro traffic simulations, and comprehensive junction plans that support national corridors.",
      icon: Landmark
    },
    {
      title: "Water Infrastructure",
      description: "Hydraulic modeling and planning of village drinking water pipes and overhead reservoirs, helping realize India's Jal Jeevan Mission.",
      icon: Award
    },
    {
      title: "Structural Engineering",
      description: "Design-audits, seismic reviews, and retrofitting formulations for concrete bridges, railway grade separators, and complex buildings.",
      icon: Award
    },
    {
      title: "Consultancy & DPR",
      description: "Feasibility studies, bills of quantities (BOQ) estimations, and Detailed Project Report compilations to streamline government tender clearances.",
      icon: FileSpreadsheet
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "Maintaining strict professional honesty and compliance with public works standards in all calculations and survey reports.",
      icon: Shield
    },
    {
      title: "Quality",
      description: "Delivering robust designs using top-tier simulation platforms and verified math models to ensure structure longevity.",
      icon: Award
    },
    {
      title: "Safety First",
      description: "Prioritizing human lives by integrating certified Road Safety Audits and structural health checks in all project scopes.",
      icon: ShieldAlert
    },
    {
      title: "Sustainability",
      description: "Planning water distribution schemes and transportation networks that conserve local ecology and resource footprints.",
      icon: Heart
    },
    {
      title: "Timely Delivery",
      description: "Respecting administrative deadlines and tender schedules to ensure seamless rollout of essential public utilities.",
      icon: Hourglass
    }
  ];

  const registrations = [
    "Registered PWD Contractor (Maharashtra)",
    "Maharashtra Jeevan Pradhikaran (MJP) Registered Vendor",
    "Zilla Parishad (ZP) Registered Structural Consultant",
    "IIT Roorkee Certified Road Safety Auditors",
    "Jal Jeevan Mission Lead Execution Contractor"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero Banner */}
      <section className="relative py-20 bg-brand-black text-white text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600&h=400')` }}
        />
        <div className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-4">About Our Company</h1>
          <p className="font-body text-base text-gray-300 max-w-xl mx-auto">
            Bridging academic credentials with three decades of rigorous field execution in Indian civil infrastructure.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-brand-green uppercase block font-body">
                Our Foundation
              </span>
              <h2 className="text-3xl font-bold font-display text-brand-black">
                Om Seva Design & Build Pvt. Ltd.
              </h2>
              <p className="font-body text-sm md:text-base text-brand-gray leading-relaxed">
                Established with the vision of offering high-integrity engineering consultancy and Class-1 contracting services, Om Seva Design & Build has become a trusted partner for government bodies, municipal corporations, and private infrastructure companies in Maharashtra.
              </p>
              <p className="font-body text-sm md:text-base text-brand-gray leading-relaxed">
                By combining the deep academic expertise of our directors—possessing IIT certifications and advanced postgraduate degrees in Structural and Transportation Engineering—with 30+ years of active field project supervision, we deliver engineering works that are technically superior, cost-effective, and fully compliant with Indian Standards (IS) and IRC codes.
              </p>
            </div>
            
            {/* Image Placeholder */}
            <div className="lg:col-span-5 h-[350px] rounded-xl overflow-hidden shadow-md border border-brand-border">
              <img 
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Construction supervision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Two Column Grid) */}
      <section className="py-16 bg-brand-bg/50 border-y border-brand-border/40">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <Card hoverEffect={false} className="border-2 border-brand-green/30 p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <Target size={24} className="text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold font-display text-brand-black">Our Vision</h3>
              <p className="font-body text-sm text-brand-gray leading-relaxed">
                To be the foremost trusted civil infrastructure consultancy in India, recognized for transforming transport corridors and rural water utility grids through innovative, safe, and sustainable designs.
              </p>
            </Card>

            {/* Mission Card */}
            <Card hoverEffect={false} className="border-2 border-brand-green/30 p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <Shield size={24} className="text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold font-display text-brand-black">Our Mission</h3>
              <p className="font-body text-sm text-brand-gray leading-relaxed">
                To design and construct highly functional public utilities by adhering to state-of-the-art compliance standards, applying microscopic simulation modeling, and ensuring complete alignment with public administrative objectives.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* 4. What We Do (4 Pillars) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <SectionHeader
            tag="Core Scope"
            title="The Four Pillars of Om Seva"
            subtitle="Our engineering activities span across primary disciplines critical to national connectivity and community development."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card key={idx} hoverEffect={true} className="flex flex-col h-full bg-brand-bg/30">
                  <div className="w-10 h-10 bg-brand-green/10 flex items-center justify-center rounded mb-4">
                    <Icon size={20} className="text-brand-green" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-brand-black mb-2">{p.title}</h4>
                  <p className="font-body text-xs text-brand-gray leading-relaxed">{p.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-16 bg-brand-bg/50 border-t border-brand-border/40">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <SectionHeader
            tag="Ethics & Quality"
            title="Our Core Values"
            subtitle="The guidelines that dictate how we conduct studies, manage survey crews, and oversee brick-and-mortar execution."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-white border border-brand-border/70 rounded-lg p-6 text-center hover:border-brand-green/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-green/10 flex items-center justify-center rounded-full mx-auto mb-4">
                    <Icon size={18} className="text-brand-green" />
                  </div>
                  <h4 className="font-display font-bold text-base text-brand-black mb-2">{v.title}</h4>
                  <p className="font-body text-xs text-brand-gray leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Registrations & Certifications */}
      <section className="py-16 md:py-24 bg-white border-t border-brand-border/40">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-green uppercase block mb-3 font-body">
                Liaison & Qualifications
              </span>
              <h2 className="text-3xl font-bold font-display text-brand-black mb-4">
                Government Registrations & Certifications
              </h2>
              <p className="font-body text-sm text-brand-gray leading-relaxed mb-6">
                To work on public infrastructure, strict statutory clearances and licenses are required. Om Seva is registered and recognized by several premier public departments in India, validating our engineering standards.
              </p>
              <div className="h-44 w-full rounded-lg overflow-hidden border border-brand-border select-none">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800&h=300"
                  alt="IIT Roorkee certified engineers auditing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-brand-bg border border-brand-border p-8 rounded-xl">
              <h3 className="text-lg font-bold font-display text-brand-black mb-6 border-b border-brand-border/60 pb-3">
                Official Accreditations
              </h3>
              <ul className="flex flex-col gap-4">
                {registrations.map((reg, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                      <CheckCircle size={12} className="text-brand-green" />
                    </div>
                    <span className="font-body text-sm font-semibold text-brand-black">
                      {reg}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
export default About;
