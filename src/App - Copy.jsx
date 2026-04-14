import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, Factory, MapPin, Phone, Send, Menu, CheckCircle, MessageSquare } from 'lucide-react';

/** * SECTION 0: GLOBAL BRANDING & CONFIG 
 * Change these values to update company-wide details instantly.
 */
const BRAND = {
  name: "BLACKGOLD SILICATES",
  sub: "GROUP",
  md: "Mr. Balasaheb Mulik",
  phone: "+91 99880 75555",
  email: "blackgoldsilicates@gmail.com",
  formspree_url: "https://formspree.io/f/your-id-here" // Get this from formspree.io
};

const App = () => {
  const containerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  // SECTION 1: SCROLL ENGINE
  // Tracks the user's scroll position to trigger Apple-style reactions
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="bg-black text-white font-sans selection:bg-brandGold selection:text-black">
      
      {/* SECTION 2: NAVIGATION (Glassmorphism Effect) */}
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-black/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="font-black text-xl tracking-tighter">{BRAND.name}</span>
            <span className="text-[10px] tracking-[0.3em] text-brandGold font-bold">{BRAND.sub}</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-bold text-gray-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#tech" className="hover:text-white transition">Technology</a>
            <a href="#products" className="hover:text-white transition text-brandGold">Catalogue</a>
          </div>
          <a href={`tel:${BRAND.phone}`} className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-brandGold transition uppercase">
            Call MD
          </a>
        </div>
      </nav>

      {/* SECTION 3: HERO HEADER (High Impact First Impression) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div style={{ opacity: heroOpacity }}>
          <span className="text-brandGold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Maharashtra Operations 2026</span>
          <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.9] mb-8">
            FOUNDED ON <br /> <span className="text-gray-500">INTEGRITY.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 font-light">
            Managed by <b>Chartered Accountants</b>. Optimized for <b>Infrastructure</b>. <br/>
            Powered by Metso Outotec Finland.
          </p>
        </motion.div>
      </section>

      {/* SECTION 4: REACTIVE PRODUCT STORY (The Apple Scroll) */}
      <section ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-50"
              alt="Metso Crusher"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </motion.div>

          {/* Floating Content Over Scroll */}
          <div className="absolute inset-0 pointer-events-none">
            <FeatureOverlay progress={scrollYProgress} range={[0.1, 0.3]} title="Metso Tech" desc="Finland's top crushing technology for superior cubical shape." />
            <FeatureOverlay progress={scrollYProgress} range={[0.4, 0.6]} title="CA Managed" desc="Zero manual guesswork. 100% GST & Financial transparency." />
            <FeatureOverlay progress={scrollYProgress} range={[0.7, 0.9]} title="1.8M Tonnes" desc="Annual capacity across Pune, Solapur, and Kolhapur." />
          </div>
        </div>
      </section>

      {/* SECTION 5: CATALOGUE GRID (Clean & Professional) */}
      <section id="products" className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-16">CATALOGUE.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductItem title="20mm / 10mm" usage="Structural Concrete & Roads" />
            <ProductItem title="Washed M-Sand" usage="High-Spec Concrete & RMC" />
            <ProductItem title="Plaster Sand" usage="Internal & External Plaster" />
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT & INQUIRY (Lead Generation) */}
      <footer id="about" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-brandGold leading-tight tracking-tighter">Ready for your next <br/> major project.</h3>
            <div className="space-y-6">
              <ContactInfo label="Managing Director" val={BRAND.md} />
              <ContactInfo label="Contact Number" val={BRAND.phone} />
              <ContactInfo label="Operations Email" val={BRAND.email} />
            </div>
          </div>

          {/* Simple Formspree Form */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            {!submitted ? (
              <form action={BRAND.formspree_url} method="POST" className="space-y-4">
                <input type="text" name="name" placeholder="Your Name" required className="w-full bg-black/50 p-4 rounded-xl outline-none focus:ring-1 ring-brandGold" />
                <input type="tel" name="phone" placeholder="Phone Number" required className="w-full bg-black/50 p-4 rounded-xl outline-none focus:ring-1 ring-brandGold" />
                <textarea name="message" placeholder="Requirement (MT)" rows="4" className="w-full bg-black/50 p-4 rounded-xl outline-none focus:ring-1 ring-brandGold"></textarea>
                <button type="submit" className="w-full bg-brandGold text-black font-black py-4 rounded-xl hover:scale-[1.02] transition uppercase tracking-widest text-xs">Send Inquiry</button>
              </form>
            ) : (
              <div className="text-center py-10"><CheckCircle className="mx-auto mb-4 text-brandGold" size={48}/><p>Inquiry Sent Successfully.</p></div>
            )}
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a href={`https://wa.me/${BRAND.phone.replace(/\D/g,'')}?text=Inquiry%20from%20Website`} className="fixed bottom-8 right-8 bg-[#25D366] p-4 rounded-full shadow-2xl z-[200] hover:scale-110 transition">
        <MessageSquare size={24} color="white" />
      </a>
    </div>
  );
};

// --- HELPER COMPONENTS (Maintenance Ease) ---

const FeatureOverlay = ({ progress, range, title, desc }) => {
  const opacity = useTransform(progress, [range[0], (range[0] + range[1]) / 2, range[1]], [0, 1, 0]);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
      <h3 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter italic uppercase">{title}</h3>
      <p className="text-brandGold text-lg md:text-2xl font-bold uppercase tracking-widest">{desc}</p>
    </motion.div>
  );
};

const ProductItem = ({ title, usage }) => (
  <div className="p-10 border border-black/5 rounded-[40px] hover:bg-black hover:text-white transition-all duration-500 group">
    <h4 className="text-3xl font-black mb-2">{title}</h4>
    <p className="text-gray-500 group-hover:text-gray-400">{usage}</p>
  </div>
);

const ContactInfo = ({ label, val }) => (
  <div>
    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-1">{label}</p>
    <p className="text-xl font-medium tracking-tight">{val}</p>
  </div>
);

export default App;