import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, Award, ArrowUpRight } from 'lucide-react';

const BRAND = {
  name: "BLACKGOLD",
  accent: "SILICATES",
  sub: "PRIVATE LIMITED & GROUP",
  phone: "+91 95793 47630",
  email: "blackgoldsilicates@gmail.com"
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div className="bg-black text-white font-sans selection:bg-brandGold selection:text-black scroll-smooth overflow-x-hidden">
      
      {/* SECTION 2: SMART NAVIGATION (Centered for Desktop) */}
      <nav className={`fixed top-0 left-1/2 -translate-x-1/2 w-[1280px] z-[100] backdrop-blur-md bg-black/40 border-b border-white/5 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-5 group">
            <div className="w-16 h-16 flex items-center justify-center bg-transparent">
              <img 
                src="/BS_logo.png" 
                alt="Blackgold Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            <div className="flex flex-col gap-0.5">
              <span className="font-black text-3xl tracking-tighter uppercase text-white leading-none">
                {BRAND.name}<span className="text-brandGold ml-1">{BRAND.accent}</span>
              </span>
              <div className="flex items-center gap-2">
                 <div className="h-[1px] w-4 bg-brandGold/50"></div>
                 <span className="text-[10px] tracking-[0.4em] text-gray-500 font-bold uppercase">
                   {BRAND.sub}
                 </span>
              </div>
            </div>
          </Link>

          <div className="flex gap-12 text-[11px] uppercase tracking-[0.25em] font-bold text-gray-400">
            <Link to="/about" className="hover:text-brandGold transition-colors">About Us</Link>
            <Link to="/why-us" className="hover:text-brandGold transition-colors">Why Us</Link> 
            <a href="#tech" className="hover:text-white transition-colors">Technology</a>
            <a href="#products" className="hover:text-brandGold transition-colors">Catalogue</a>
            <a href="#plants" className="hover:text-white transition-colors">Plants</a>
          </div>

          <a href={`tel:${BRAND.phone}`} className="bg-white text-black px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-brandGold hover:scale-105 transition-all shadow-lg">
            Contact Us
          </a>
        </div>
      </nav>

      {/* SECTION 3: HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div style={{ opacity: heroOpacity }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brandGold/30 rounded-full text-[10px] font-bold text-brandGold uppercase tracking-widest mb-6">
            <Award size={12} /> Powered by Metso Outotec Finland
          </div>
          <h1 className="text-4xl md:text-[100px] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
            Trust in <br /> 
            <span className="text-gray-500 font-light italic text-3xl md:text-8xl">Aggregates.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 font-light">
             <b>18+ Lakh Tonnes</b> Annual Capacity. Managed by <b>Chartered Accountants</b>.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-widest text-white hover:text-brandGold transition">
              View Management Profile <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* SECTION 4: TECHNOLOGY (SCROLL ENGINE) */}
      <section 
        ref={containerRef} 
        id="tech" 
        className="relative h-[400vh] bg-black z-10"
      >
        {/* THE TRACK: 
            'sticky top-0' locks this div to the top of the screen.
            'h-screen' makes it fill the viewport while the parent (400vh) scrolls.
        */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* VIDEO BACKDROP - Stays in place, only scales */}
          <motion.div 
            style={{ scale: videoScale }} 
            className="absolute inset-0 w-full h-full transform-gpu"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/stone_crusher_bg.png"
              className="w-full h-full object-cover opacity-50 contrast-125 saturate-150"
            >
              <source src="/SiteBG.mp4" type="video/mp4" />
            </video>
            
            {/* Visual Gradients to smooth transitions between sections */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </motion.div>
      
          {/* CONTENT OVERLAYS - These fade in/out while video stays fixed */}
          <div className="relative z-20 w-full h-full pointer-events-none">
            <FeatureOverlay 
              progress={scrollYProgress} 
              range={[0.1, 0.25]} 
              title="Deccan Basalt" 
              desc="2.7 t/m³ density for ultimate durability." 
            />
            <FeatureOverlay 
              progress={scrollYProgress} 
              range={[0.4, 0.6]} 
              title="Metso Tech" 
              desc="Superior cubical shape with Nordberg Series." 
            />
            <FeatureOverlay 
              progress={scrollYProgress} 
              range={[0.75, 0.95]} 
              title="CA Managed" 
              desc="100% Transparency & GST Compliance." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6 WRAPPER */}
      <div className="relative z-30 bg-black">
        {/* SECTION 5: PLANTS */}
        <section id="plants" className="py-24 px-6 bg-[#0a0a0a] scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">Our Network.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <LocationCard name="Pune" address="Khed City" mapUrl="#" />
              <LocationCard name="Solapur" address="Tale Hipperge" mapUrl="#" />
              <LocationCard name="Kolhapur" address="Yaratanhatti" mapUrl="#" />
              <LocationCard name="Lonikand" address="Pune District" mapUrl="#" />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
              <ProductCard title="20mm / 10mm" usage="High-Strength Concrete & RMC" />
              <ProductCard title="Washed M-Sand" usage="Structural Concrete & Plastering" />
              <ProductCard title="GSB" usage="Road Sub-base & Compaction" />
            </div>

            <div className="mt-40">
              <h3 className="text-3xl font-black tracking-tighter mb-10 uppercase">Customer Segments.</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-black font-black uppercase text-[10px] tracking-widest">
                      <th className="py-6">Customer Segment</th>
                      <th className="py-6">Typical Applications</th>
                      <th className="py-6 text-right">Products Used</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <SegmentRow segment="Ready-Mix Concrete (RMC)" apps="Bridges, Industrial Structures" products="M-Sand, 10/20mm" />
                    <SegmentRow segment="Road Contractors" apps="NHAI, PWD, NH/SH construction" products="20mm, GSB, Dust" />
                    <SegmentRow segment="Real Estate" apps="Residential Towers, Complexes" products="M-Sand, 10/20mm" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer id="contact" className="py-24 px-6 border-t border-white/10 bg-black">
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

// --- HELPER COMPONENTS ---

const FeatureOverlay = ({ progress, range, title, desc }) => {
  const opacity = useTransform(
    progress, 
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], 
    [0, 1, 1, 0]
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <h3 className="text-6xl md:text-9xl font-black mb-4 uppercase tracking-tighter italic text-white drop-shadow-2xl">
        {title}
      </h3>
      <p className="text-brandGold text-lg md:text-2xl font-bold uppercase tracking-[0.3em]">
        {desc}
      </p>
    </motion.div>
  );
};

const LocationCard = ({ name, address, mapUrl }) => (
  <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02] hover:border-brandGold/30 transition-all group flex flex-col justify-between h-full">
    <div>
      <MapPin size={20} className="text-brandGold mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">{name}</h4>
      <p className="text-sm text-gray-500 mb-6">{address}</p>
    </div>
    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brandGold hover:text-white transition-colors group/btn">
      Get Directions <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
    </a>
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
