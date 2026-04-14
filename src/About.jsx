import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-brandGold selection:text-black font-sans">
      <nav className="p-6 border-b border-white/5 sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-black text-xl tracking-tighter uppercase">Blackgold</Link>
          <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">← Return Home</Link>
        </div>
      </nav>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase">Management <br/><span className="text-gray-500 italic font-light">Profile.</span></h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            Led by a multi-disciplinary team of <span className="text-white font-medium underline decoration-brandGold decoration-2 underline-offset-4">Chartered Accountants</span> and industry veterans, bringing financial discipline to Maharashtra's infrastructure supply chain.
          </p>
        </motion.div>
      </section>

      {/* PORTRAITS GRID - Expanded for full team */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <LeaderCard 
            image="/bala_mulik.png" 
            name="Mr. Balasaheb Y. Mulik" 
            desig="Director" 
            focus="Strategic Operations & Industry Veteran" 
          />
          <LeaderCard 
            image="/sangeetha.png" 
            name="Mrs. Sangeetha" 
            desig="Director" 
            focus="Admin, HR & Internal Controls" 
          />
          <LeaderCard 
            image="/abhay_k.png" 
            name="CA Abhay R. Kucheriya" 
            desig="CEO" 
            focus="Strategic Planning & Financial Discipline" 
          />
          <LeaderCard 
            image="/varad.png" 
            name="CA Varad S. Kulkarni" 
            desig="CFO" 
            focus="Taxation & Financial Governance" 
          />
          <LeaderCard 
            image="/aniket_shinde.png" 
            name="Adv. Aniket A. Shinde" 
            desig="Legal Head" 
            focus="Regulatory & Mining Law Compliance" 
          />
          <LeaderCard 
            image="/sanjay_tarde.png" 
            name="Mr. Sanjay Tarade" 
            desig="Head of Operations" 
            focus="Plant Efficiency & Production Management" 
          />
          <LeaderCard 
            image="/Bhsuhan.png" 
            name="Mr. Bhushan Bhalgatiya" 
            desig="Sales Head" 
            focus="Market Expansion & Key Account Management" 
          />
        </div>
      </section>

      {/* MANAGEMENT STATEMENT */}
      <section className="py-20 px-6 bg-[#050505] border-y border-white/5 my-20">
        <div className="max-w-4xl mx-auto text-center italic">
          <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed">
            "At Blackgold Silicates, we believe the foundation of any great project isn't just stone—it is <span className="text-white font-bold underline decoration-brandGold">Trust</span>."
          </p>
          <h4 className="mt-8 text-xl font-bold uppercase tracking-widest leading-none">Mr. Balasaheb Y. Mulik</h4>
          <p className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase mt-2">Managing Director</p>
        </div>
      </section>

      {/* CONTACT & COMPLIANCE */}
      <section className="py-24 px-6 bg-white text-black rounded-t-[50px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase">Contact Us.</h2>
            <div className="space-y-6 font-bold">
              <ContactRow label="Direct Inquiries" val="+91 99880 75555" />
              <ContactRow label="Office Email" val="blackgoldsilicates@gmail.com" />
              <ContactRow label="Working Hours" val="07:00 AM — 07:00 PM" />
            </div>
          </div>
          <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 h-fit">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><ShieldCheck className="text-brandGold"/> Compliance Dashboard</h3>
            <ul className="space-y-4 text-sm font-medium opacity-70 uppercase tracking-widest">
              <li className="flex justify-between border-b pb-2"><span>GST Status</span><span className="text-green-600 font-black tracking-tighter">Active</span></li>
              <li className="flex justify-between border-b pb-2"><span>HSN Classification</span><span>2517</span></li>
              <li className="flex justify-between"><span>Quality Standards</span><span>IS 383:2016 / IRC</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const LeaderCard = ({ image, name, desig, focus }) => (
  <div className="group">
    <div className="aspect-[4/5] bg-gray-900 rounded-[30px] overflow-hidden mb-6 border border-white/10 shadow-2xl relative">
      <img src={image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700" alt={name} />
      {/* Subtle overlay for name legibility if images are bright */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="flex items-center gap-2 mb-1">
        <h3 className="text-xl font-bold tracking-tight">{name}</h3>
        {name.includes('CA') && (
            <span className="text-[8px] bg-brandGold/20 text-brandGold px-1.5 py-0.5 rounded border border-brandGold/30 font-black uppercase">CA</span>
        )}
    </div>
    <p className="text-brandGold text-[10px] font-black uppercase tracking-widest mb-3 leading-none">{desig}</p>
    <div className="w-8 h-[1px] bg-white/10 mb-3" />
    <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{focus}</p>
  </div>
);

const ContactRow = ({ label, val }) => (
  <div>
    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-2xl tracking-tighter leading-none">{val}</p>
  </div>
);

export default About;
