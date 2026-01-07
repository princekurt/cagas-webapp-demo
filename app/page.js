"use client";

import { useState } from "react";

export default function Home() {
  const [userClasses, setUserClasses] = useState("bg-gradient-to-br from-sky-500 to-blue-700 p-12 rounded-3xl shadow-2xl shadow-sky-500/20 text-white font-bold text-center");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-sky-500/30 font-sans scroll-smooth">
      
      {/* --- PRO TOPBAR --- */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.5)] flex-shrink-0" />
            <span className="text-white font-black tracking-tighter text-lg sm:text-xl">TAILWIND<span className="text-sky-500">LABS</span></span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
            <a href="#sandbox" className="hover:text-white transition">Sandbox</a>
            <a href="#buttons" className="hover:text-white transition">Components</a>
            <a href="#colors" className="hover:text-white transition">Palette</a>
            <a href="#typo" className="hover:text-white transition">Typography</a>
            <a href="#images" className="hover:text-white transition">Effects</a>
          </div>
          <button className="bg-white text-black px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold hover:bg-sky-400 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-20 space-y-24 sm:space-y-40">
        
        {/* --- HERO --- */}
        <section className="text-center space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter leading-[1.1] sm:leading-none">
            TAILWIND CSS <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 italic text-5xl sm:text-8xl md:text-[10rem]">
              COMPONENTS.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            The ultimate design toolkit for high-performance developers. Rapidly create beautiful, responsive components with ease.
          </p>
        </section>

        {/* --- 1. DYNAMIC SANDBOX --- */}
        <section id="sandbox" className="scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <span className="text-sky-500 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">01 / Live Lab</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">The Real-time Editor</h2>
              <textarea 
                value={userClasses}
                onChange={(e) => setUserClasses(e.target.value)}
                className="w-full h-40 bg-slate-900 border border-white/10 rounded-2xl p-4 sm:p-6 font-mono text-sm text-sky-400 focus:ring-2 ring-sky-500 outline-none transition-all shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 aspect-square bg-slate-950 rounded-[2rem] sm:rounded-[3rem] border border-white/5 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:40px_40px]" />
               <div className={`${userClasses} relative z-10 break-words max-w-full text-sm sm:text-base`}>Visual Preview</div>
            </div>
          </div>
        </section>

        {/* --- 2. BUTTON WORKSHOP --- */}
        <section id="buttons" className="scroll-mt-32 space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Interactive Components</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <button className="h-14 sm:h-16 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-sky-500/20">Primary</button>
            <button className="h-14 sm:h-16 border-2 border-white/10 hover:border-white/40 text-white font-bold rounded-xl transition-all">Outline</button>
            <button className="h-14 sm:h-16 bg-white text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">Neolight</button>
            <button className="h-14 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all">Gradient</button>
          </div>
        </section>

        {/* --- 3. COLOR PALETTE --- */}
        <section id="colors" className="scroll-mt-32 space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Colored Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { c: 'bg-rose-500', n: 'Crimson' },
              { c: 'bg-amber-500', n: 'Amber' },
              { c: 'bg-emerald-500', n: 'Emerald' },
              { c: 'bg-sky-500', n: 'Sky' },
              { c: 'bg-indigo-500', n: 'Indigo' },
            ].map((color) => (
              <div key={color.n} className="space-y-3 group">
                <div className={`${color.c} aspect-video rounded-xl sm:rounded-2xl group-hover:scale-[1.02] transition-transform cursor-pointer shadow-xl`} />
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-tighter text-slate-500">{color.n}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. TYPOGRAPHY --- */}
        <section id="typo" className="scroll-mt-32 p-6 sm:p-12 bg-white/5 border border-white/5 rounded-[2rem] sm:rounded-[3rem] space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Type Scale</h2>
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">Heading One.</h1>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-200">Heading Two.</h2>
            <p className="text-base sm:text-xl text-slate-400 max-w-3xl">Leading paragraph with tracking tight and optimized line height for readability.</p>
            <p className="text-[10px] sm:text-sm font-mono text-sky-500 uppercase tracking-widest">Monospaced Code Label</p>
          </div>
        </section>

        {/* --- 5. IMAGE EFFECTS --- */}
        <section id="images" className="scroll-mt-32 space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Advanced Imagery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl aspect-square">
               <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Effect" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
               <div className="absolute inset-0 bg-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
               <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-sm sm:text-base font-black text-white">GRAYSCALE HOVER</p>
            </div>
            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl aspect-square border-4 border-sky-500">
               <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" alt="Effect" className="w-full h-full object-cover blur-sm hover:blur-none transition-all duration-500" />
               <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-sm sm:text-base font-black text-white uppercase">Focus Blur</p>
            </div>
            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl aspect-square">
               <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80" alt="Effect" className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-500" />
               <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-sm sm:text-base font-black text-white uppercase">Exposure</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 sm:py-20 border-t border-white/5 text-center px-4">
        <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.5em] sm:tracking-[1em] text-slate-700 underline">Build With // TailwindLabs</p>
      </footer>
    </div>
  );
}