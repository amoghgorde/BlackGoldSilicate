import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, Award, ArrowUpRight } from 'lucide-react';

const BRAND = {
  name: "BLACKGOLD",
  accent: "SILICATES",
  sub: "PRIVATE LIMITED & GROUP",
  phone: "+91 99880 75555",
  email: "blackgoldsilicates@gmail.com"
};

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="bg-black text-white font-sans selection:bg-brandGold selection:text-black scroll-smooth">
      
      {/* SECTION 2: NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-black/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center overflow-x-hidden">
              <img 
                src="/BS_logo.png" 
                alt="Blackgold Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase">
                {BRAND.name} <span className="text-brandGold">{BRAND.accent}</span>
              </span>
              <span className="text-[8px] tracking-[0.25em] text-gray-500 font-bold uppercase">
                {BRAND.sub}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <Link to="/about" className="hover:text-white transition">About Us</Link>
            <Link to="/why-us" className="hover:text-white transition">Why Us</Link> 
            <a href="#tech" className="hover:text-white transition">Technology</a>
            <a href="#products" className="hover:text-white transition text-brandGold">Catalogue</a>
            <a href="#plants" className="hover:text-white transition">Plants</a>
          </div>

          <a href={`tel:${BRAND.phone}`} className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-brandGold transition uppercase tracking-tighter">
            Contact MD
          </a>
        </div>
      </nav>

      {/* SECTION 3: HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div style={{ opacity: heroOpacity }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brandGold/30 rounded-full text-[10px] font-bold text-brandGold uppercase tracking-widest mb-6">
            <Award size={12} /> Powered by Metso Outotec Finland
          </div>
          {/* Use 'text-4xl' for mobile and 'md:text-[100px]' for desktop */}
          <h1 className="text-4xl md:text-[100px] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
          Trust in <br /> 
          <span className="text-gray-500 font-light italic text-3xl md:text-8xl">Aggregates.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 font-light">
             18+ Lakh Tonnes Annual Capacity.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-widest text-white hover:text-brandGold transition">
              View Management Profile <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* SECTION 4: VIDEO BACKDROP ENGINE */}
      <section ref={containerRef} id="tech" className="h-[400vh] relative scroll-mt-20">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div style={{ scale: videoScale }} className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto" 
            poster="/stone_crusher_bg.png"
            className="w-full h-full object-cover opacity-60 contrast-125 saturate-150 will-change-transform">
            <source src="/SiteBG.mp4" type="video/mp4" />
          </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </motion.div>
          <div className="absolute inset-0 pointer-events-none">
            <FeatureOverlay progress={scrollYProgress} range={[0.1, 0.25]} title="Deccan Basalt" desc="2.7 t/m³ density for ultimate durability." />
            <FeatureOverlay progress={scrollYProgress} range={[0.4, 0.6]} title="Metso Tech" desc="Superior cubical shape with Nordberg Series." />
            <FeatureOverlay progress={scrollYProgress} range={[0.75, 0.95]} title="CA Managed" desc="100% Transparency & GST Compliance." />
          </div>
        </div>
      </section>

      {/* SECTION 5: PLANTS */}
      <section id="plants" className="py-24 px-6 bg-[#0a0a0a] scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">Our Network.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <LocationCard name="Pune" address="Khed City" />
            <LocationCard name="Solapur" address="Tale Hipperge" />
            <LocationCard name="Kolhapur" address="Yaratanhatti" />
            <LocationCard name="Lonikand" address="Pune District" />
          </div>
        </div>
      </section>

      {/* SECTION 6: CATALOGUE */}
      <section id="products" className="scroll-mt-16 py-32 px-6 bg-white text-black rounded-t-[50px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">Catalogue.</h2>
              <p className="text-brandGold font-black uppercase tracking-[0.3em] text-[10px] mt-4 ml-1">IS 383:2016 & IRC Compliant</p>
            </div>
            <p className="text-gray-400 max-w-xs text-right hidden md:block uppercase tracking-widest text-[9px] font-bold">
              Institutional-grade supply for Maharashtra's leading infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
            <ProductCard title="20mm / 10mm" usage="High-Strength Concrete & RMC" />
            <ProductCard title="Washed M-Sand" usage="Structural Concrete & Plastering" />
            <ProductCard title="GSB" usage="Road Sub-base & Compaction" />
            <ProductCard title="Crusher Dust" usage="Paver Blocks & Filling" />
            <ProductCard title="Grit (5-8mm)" usage="Tiles & Precast Products" />
            <ProductCard title="Plaster Sand" usage="Premium Internal Finishes" />
          </div>

          <div className="mt-40">
            <h3 className="text-3xl font-black tracking-tighter mb-10 uppercase">Customer Segments.</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="py-6 text-[10px] font-black uppercase tracking-widest">Customer Segment</th>
                    <th className="py-6 text-[10px] font-black uppercase tracking-widest">Typical Applications</th>
                    <th className="py-6 text-[10px] font-black uppercase tracking-widest text-right">Products Used</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <SegmentRow segment="Ready-Mix Concrete (RMC)" apps="Bridges, Industrial Structures, High-rises" products="M-Sand, 10mm, 20mm" />
                  <SegmentRow segment="Road & Highway Contractors" apps="NHAI, PWD, NH/SH construction works" products="20mm, GSB, Crusher Dust" />
                  <SegmentRow segment="Building & Housing" apps="Residential Towers, PMAY, Commercial complexes" products="M-Sand, 10mm, 20mm, Grit" />
                  <SegmentRow segment="Government Infrastructure" apps="Smart City Mission, MIDC, Irrigation canals" products="All Grades (IRC/PWD Specs)" />
                  <SegmentRow segment="Precast & Paver Blocks" apps="Kerbs, Concrete Tiles, RCC Pipes" products="M-Sand, 5-8mm Grit" />
                  <SegmentRow segment="Railway & Metro Projects" apps="Ballast, Concrete Sleepers, Stations" products="20mm, 10mm Aggregate" />
                  <SegmentRow segment="Industrial & Warehouse" apps="MIDC Factory Floors, Logistics Parks" products="M-Sand, 10mm, 20mm" />
                  <SegmentRow segment="Individual House Builders" apps="Bungalows, Farm Houses, Compound Walls" products="M-Sand, 10mm, 20mm, Dust" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Partner with the Group.</h3>
          <p className="text-gray-500 mb-8 font-medium tracking-wide">{BRAND.email}</p>
          <a href={`https://wa.me/${BRAND.phone.replace(/\D/g,'')}`} className="bg-[#25D366] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
            <MessageSquare size={20} /> WhatsApp Inquiry
          </a>
        </div>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS (Place outside main component) ---

const FeatureOverlay = ({ progress, range, title, desc }) => {
  const opacity = useTransform(progress, [range[0], (range[0] + range[1]) / 2, range[1]], [0, 1, 0]);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <h3 className="text-6xl md:text-8xl font-black mb-4 uppercase tracking-tighter italic">{title}</h3>
      <p className="text-brandGold text-lg md:text-2xl font-bold uppercase tracking-widest">{desc}</p>
    </motion.div>
  );
};

const LocationCard = ({ name, address }) => (
  <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02] hover:border-brandGold/30 transition-colors group">
    <MapPin size={20} className="text-brandGold mb-4 group-hover:scale-110 transition-transform" />
    <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">{name}</h4>
    <p className="text-sm text-gray-500">{address}</p>
  </div>
);

const ProductCard = ({ title, usage }) => (
  <div className="p-10 bg-gray-50 border border-gray-100 rounded-[40px] hover:bg-black hover:text-white transition-all duration-500 group">
    <h4 className="text-2xl font-black mb-2 tracking-tighter uppercase leading-none">{title}</h4>
    <p className="text-gray-400 group-hover:text-brandGold text-xs font-bold uppercase tracking-widest transition-colors">{usage}</p>
  </div>
);

const SegmentRow = ({ segment, apps, products }) => (
  <tr className="group hover:bg-gray-50 transition-colors">
    <td className="py-8 font-black text-xl tracking-tighter uppercase">{segment}</td>
    <td className="py-8 text-sm text-gray-500 max-w-xs pr-10">{apps}</td>
    <td className="py-8 text-sm font-bold text-right text-brandGold uppercase tracking-tighter whitespace-nowrap">{products}</td>
  </tr>
);

export default Home;
