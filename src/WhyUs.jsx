import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Activity, Truck, Settings, Droplets, ArrowRight, CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-brandGold selection:text-black font-sans scroll-smooth">
      {/* NAVIGATION */}
      <nav className="p-6 border-b border-white/5 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-black text-xl tracking-tighter uppercase">Blackgold</Link>
          <div className="flex gap-6 items-center">
             <Link to="/about" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition">Management</Link>
             <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-brandGold transition">← Home</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-brandGold font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block underline decoration-brandGold/40 underline-offset-8">Institutional Excellence</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
            Why Us?
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-4xl italic">
            "We invest in the best equipment available globally because we understand that aggregate quality begins at the crusher. Blackgold bridges the gap between raw mining and financial integrity."
          </p>
        </motion.div>
      </section>

      {/* THE 8 CORE ADVANTAGES */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          <AdvantageItem 
            title="World-Class Equipment" 
            desc="Exclusively Metso Outotec (Finland) technology—the same used in global mega-mines. Superior cubical shape with minimal flakiness." 
          />
          <AdvantageItem 
            title="Washed M-Sand Capability" 
            desc="Our Weir Minerals (UK) line removes clay and organic impurities for silt content <2%, conforming to IS 383:2016 Zone II-III." 
          />
          <AdvantageItem 
            title="Chartered Accountant Managed" 
            desc="Managed by CAs. Transparent weighbridge records, 100% GST compliance (HSN 2517), and audited professional documentation." 
          />
          <AdvantageItem 
            title="Automation & Consistency" 
            desc="Advanced IC70C / IC3 intelligent crushing control ensures real-time setting adjustments. No batch-to-batch variation." 
          />
          <AdvantageItem 
            title="Reliable Year-Round Supply" 
            desc="Four operational plants and massive quarry reserves ensure uninterrupted supply even during peak construction seasons." 
          />
          <AdvantageItem 
            title="Competitive Pricing" 
            desc="Large-scale multi-plant operations allow us to offer the most competitive ex-plant and delivered rates across Maharashtra." 
          />
          <AdvantageItem 
            title="Flexible Own-Fleet Delivery" 
            desc="Our dedicated fleet of Hyva tippers enables scheduled and on-demand deliveries with digital trip records." 
          />
          <AdvantageItem 
            title="Technical Mix Design Support" 
            desc="Our team partners with your engineers for mix design optimization and IS/IRC specification guidance." 
          />
        </div>
      </section>

      {/* TECHNICAL DATA SHEETS (WHITE SECTION) */}
      <section className="py-24 px-6 bg-white text-black rounded-t-[50px] mt-20">
        <div className="max-w-7xl mx-auto">
          
          <TechnicalTable 
            title="01. Product Catalogue"
            headers={['Product Type', 'Size', 'Key Application']}
            rows={[
              ['10mm / 20mm Coarse', '10/20 mm', 'Structural Concrete, Bridges, RMC'],
              ['Crush Sand', '150μm – 4.75mm', 'Concrete, Block Making'],
              ['Washed M-Sand', '150μm – 3.60mm', 'RMC Plants, High-Spec Concrete'],
              ['Plaster Sand', '150μm – 2.32mm', 'Internal/External Plastering'],
              ['GSB', 'IRC SP-89', 'Road Sub-Base, Filling'],
              ['Crusher Dust', 'Fine Natural', 'Brick Making, Filling']
            ]}
          />

          <TechnicalTable 
            title="02. Metso Outotec — Top-Tier Crushing"
            headers={['Stage', 'Equipment', 'Capacity', 'Key Advantage']}
            rows={[
              ['Primary', 'Nordberg C-Series', '250+ TPH', 'Heavy-duty bolted design'],
              ['Secondary', 'HP-Series Cone', '250+ TPH', 'IC Automation; Hydraulic CSS'],
              ['Tertiary (VSI)', 'Barmac B-Series', '250+ TPH', 'Rock-on-rock; Superior Shape'],
              ['Screening', 'CVB Vibrating', '—', 'Precise classification']
            ]}
          />

          <TechnicalTable 
            title="03. Weir Minerals — Sand Washing"
            headers={['Component', 'Function', 'Benefit to Customer']}
            rows={[
              ['Log/Screw Washer', 'Silt Removal', 'Better concrete strength'],
              ['Hydrocyclone', 'Gradation Control', 'Consistent fineness modulus'],
              ['Dewatering Screen', 'Water Removal', 'Dry, ready-to-use output'],
              ['Recycling System', 'Water Recovery', 'Environmentally responsible']
            ]}
          />

          <div className="mt-20 p-10 bg-gray-50 border border-gray-100 rounded-[40px]">
            <h4 className="text-3xl font-black tracking-tighter mb-6 uppercase">Quality Assurance</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <QualityPoint title="Zero Manual Guesswork" desc="CSS accuracy to within ±1mm." />
              <QualityPoint title="Deccan Trap Basalt" desc="Solid density 2.7 t/m³; UCS > 150 MPa." />
              <QualityPoint title="Cubical Particle Shape" desc="Flakiness & Elongation Index < 25%." />
            </div>
          </div>
        </div>
      </section>
                  
      {/* NEW VIDEO SHOWCASE SECTION */}
       <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black group">
        <iframe
                className="w-full h-full scale-[1.05]" // Subtle scale to hide YouTube edges
                /* Parameters:
                  - autoplay=1 & mute=1: Required for browsers to allow autoplay
                  - playlist=AsR-c_BvDRg&loop=1: Required to make the video repeat
                  - controls=0: Hides YouTube player UI for a cleaner 'Apple' look
                  - rel=0: Prevents showing related videos from other channels
                */
                src="https://www.youtube.com/embed/-xHs6kUX9gU?autoplay=1&mute=1&loop=1&playlist=AsR-c_BvDRg&controls=0&rel=0&modestbranding=1"
                title="Blackgold Operations Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
          ></iframe>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 pointer-events-none">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-brandGold"></div>
                  <p className="text-brandGold font-black uppercase tracking-[0.3em] text-[10px]">Operational Precision</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                  Institutional <br/> <span className="text-gray-400 italic font-light">Supply Chain.</span>
                </h3>
              </div>
            </div>
          </section>

      {/* CALL TO ACTION */}
      <footer className="py-24 px-6 text-center">
        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-4">Finalizing a project?</p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10">WORK WITH THE BEST.</h2>
        <a href="https://wa.me/919988075555" className="bg-brandGold text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] inline-flex items-center gap-2 hover:bg-white transition-all">
          Contact Commercial Desk <ArrowRight size={16}/>
        </a>
      </footer>
    </div>
  );
};

// --- HELPERS ---
const AdvantageItem = ({ title, desc }) => (
  <div className="group border-l border-brandGold/30 pl-8 hover:border-brandGold transition-colors">
    <h3 className="text-2xl font-bold tracking-tight mb-3 uppercase leading-none">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors italic">
      {desc}
    </p>
  </div>
);

const TechnicalTable = ({ title, headers, rows }) => (
  <div className="mb-32">
    <h3 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
      <span className="w-8 h-[2px] bg-black"></span> {title}
    </h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-black">
            {headers.map((h, i) => (
              <th key={i} className={`py-4 font-black uppercase text-[10px] tracking-widest ${i === headers.length - 1 ? 'text-right' : ''}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={i} className="group hover:bg-gray-50">
              {row.map((cell, j) => (
                <td key={j} className={`py-6 text-sm font-bold ${j === 0 ? 'text-lg font-black tracking-tighter uppercase' : 'text-gray-400'} ${j === row.length - 1 ? 'text-right text-brandGold' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const QualityPoint = ({ title, desc }) => (
  <div className="flex gap-4">
    <CheckCircle2 className="text-brandGold shrink-0" size={24} />
    <div>
      <h5 className="font-bold text-lg leading-none mb-2 uppercase">{title}</h5>
      <p className="text-xs text-gray-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export default WhyUs;
