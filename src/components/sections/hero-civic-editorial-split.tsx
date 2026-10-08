import React from 'react';
import { siteContent } from '../../lib/siteContent';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onChallengeClick: () => void;
  onHowItWorksClick: () => void;
}

export default function HeroCivicEditorialSplit({ onChallengeClick, onHowItWorksClick }: HeroProps) {
  const hero = siteContent?.hero;
  const headline = hero?.headline ?? "A public innovation lab for Riverside City, built with you.";
  const subheadline = hero?.subheadline ?? "CivicForge Lab invites residents, community groups, and city teams to co-design practical solutions to everyday challenges.";
  const primaryCtaText = hero?.primaryCtaText ?? "See Current Challenges";
  const secondaryCtaText = hero?.secondaryCtaText ?? "How this works";
  const imageSrc = hero?.imageSrc ?? "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80";
  const imageAlt = hero?.imageAlt ?? "Residents sitting around workshop table mapping shade gaps";
  const imageCaption = hero?.imageCaption ?? "Residents co-designing safer crossings at the Eastside Library workshop.";

  return (
    <section className="relative overflow-hidden bg-[#F5F3EE] pt-24 pb-12 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2E6F7D]/10 text-[#2E6F7D] rounded-full text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Innovation Lab</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1E2328] leading-tight font-semibold tracking-tight">
              {headline}
            </h1>
            
            <p className="text-lg md:text-xl text-[#1E2328]/80 font-sans leading-relaxed max-w-xl">
              {subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onChallengeClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D2643A] hover:bg-[#B64F2C] text-white font-sans font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-base text-center"
              >
                {primaryCtaText}
              </button>
              
              <button
                onClick={onHowItWorksClick}
                className="group inline-flex items-center justify-center sm:justify-start px-6 py-3 text-[#1E2328] hover:text-[#D2643A] font-sans font-medium transition-colors duration-200 text-base"
              >
                <span className="border-b-2 border-transparent group-hover:border-[#D2643A] pb-0.5 transition-colors duration-200">
                  {secondaryCtaText}
                </span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            
            {/* Visual Hook: Mini Timeline Indicator */}
            <div className="hidden md:flex items-center gap-4 text-xs tracking-wider text-[#2E6F7D] uppercase font-semibold pt-6">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D2643A]"></span>
                <span>Open Challenges</span>
              </div>
              <div className="w-12 h-[1px] bg-[#2E6F7D]/30"></div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E6F7D]"></span>
                <span>Active Pilots</span>
              </div>
              <div className="w-12 h-[1px] bg-[#2E6F7D]/30"></div>
              <div className="flex items-center gap-1.5 font-normal text-[#1E2328]/60">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span>Implemented Solutions</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Editorial Photo Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[6px] overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-[#2E6F7D]/5 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Floating Caption Over Image Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 text-white">
                <p className="text-sm sm:text-base font-sans italic opacity-95">
                  “{imageCaption}”
                </p>
              </div>
            </div>
            
            {/* Decorative Offset Backing Frame */}
            <div className="absolute -inset-2 rounded-[10px] border border-[#2E6F7D]/20 -z-10 transform translate-x-4 translate-y-4 pointer-events-none" />
          </div>
          
        </div>
      </div>
      
      {/* Editorial Section Divider Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none" />
    </section>
  );
}
