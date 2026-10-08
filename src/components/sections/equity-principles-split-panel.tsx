import React, { useState } from 'react';
import { siteContent } from '../../lib/siteContent';
import { ShieldCheck, ChevronDown, ChevronUp, CheckCircle, Mail } from 'lucide-react';

export default function EquityPrinciplesSplitPanel() {
  const data = siteContent?.equity;
  const title = data?.title ?? "Our Commitments to Equity & Access";
  const subtitle = data?.subtitle ?? "Lowering barriers to ensure that city improvements benefit everyone.";
  const commitmentsHeading = data?.commitmentsHeading ?? "Our Core Principles";
  const commitments = data?.commitments ?? [];
  const accordionItems = data?.accordionItems ?? [];
  const accommodationLinkText = data?.accommodationLinkText ?? "Need a specific accommodation? Email us directly";
  const accommodationEmail = data?.accommodationEmail ?? "hello@civicforgelab.gov";

  // Accordion active state tracking
  const [openAccordionId, setOpenAccordionId] = useState<string | null>("eq-1");

  const toggleAccordion = (id: string) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };

  return (
    <section id="equity-section" className="bg-[#FAF9F6] py-16 md:py-24 border-y border-[#2E6F7D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-[#2E6F7D] uppercase block mb-3">
            Civic Trust & Inclusion
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1E2328] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#1E2328]/80 font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Two-Panel Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Principles Bullet Block */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[6px] border border-[#2E6F7D]/10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2E6F7D]/10 text-[#2E6F7D] rounded-full text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Public Service Code</span>
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[#1E2328]">
              {commitmentsHeading}
            </h3>

            <div className="space-y-4">
              {commitments.map((principle, index) => {
                const parts = principle.split(':');
                const boldPart = parts[0];
                const restPart = parts.slice(1).join(':');

                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#D2643A]" />
                    </div>
                    <p className="text-sm sm:text-base text-[#1E2328]/85 font-sans leading-relaxed">
                      <strong className="text-[#1E2328] font-semibold">{boldPart}</strong>
                      {parts.length > 1 ? `:${restPart}` : ''}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#1E2328]/10 text-center sm:text-left">
              <p className="text-xs text-[#1E2328]/60 font-sans">
                These commitments guide every workshop, digital platform, and evaluation process run by CivicForge Lab.
              </p>
            </div>
          </div>

          {/* Right Panel: Interactive Mini-Accordion */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="space-y-3">
              {accordionItems.map((item) => {
                const isOpen = openAccordionId === item?.id;
                
                return (
                  <div 
                    key={item?.id}
                    className="bg-[#F5F3EE] rounded-[6px] border border-[#2E6F7D]/10 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(item?.id)}
                      className="w-full flex items-center justify-between p-5 text-left text-[#1E2328] hover:text-[#D2643A] transition-colors focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-serif font-semibold tracking-tight">
                        {item?.title}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#D2643A]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#2E6F7D]" />
                      )}
                    </button>

                    {/* Accordion Content Panel */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[250px] opacity-100 border-t border-[#1E2328]/5' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-5 text-sm sm:text-base text-[#1E2328]/80 font-sans leading-relaxed bg-white">
                        {item?.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inbound Mailto Link Accommodations */}
            <div className="pt-6 text-center lg:text-left">
              <a
                href={`mailto:${accommodationEmail}?subject=Accommodation%20Request%20-%20CivicForge%20Lab`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#D2643A] hover:text-[#B64F2C] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="border-b border-[#D2643A]/30 group-hover:border-[#D2643A] pb-0.5 transition-colors">
                  {accommodationLinkText}
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
