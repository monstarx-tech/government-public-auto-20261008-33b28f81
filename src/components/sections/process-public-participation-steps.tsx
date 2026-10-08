import React from 'react';
import { siteContent } from '../../lib/siteContent';
import { Megaphone, Lightbulb, TestTube, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onExploreChallenges: () => void;
  onExplorePilots: () => void;
  onExploreReports: () => void;
}

export default function ProcessPublicParticipationSteps({ 
  onExploreChallenges, 
  onExplorePilots, 
  onExploreReports 
}: HowItWorksProps) {
  const data = siteContent?.howItWorks;
  const title = data?.title ?? "How CivicForge Lab Works";
  const subtitle = data?.subtitle ?? "We believe the best city policies and spaces start with local expertise.";
  const steps = data?.steps ?? [];

  // Map icon names to Lucide react icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-[#D2643A]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#D2643A]" />;
      case 'TestTube':
        return <TestTube className="w-6 h-6 text-[#D2643A]" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-[#D2643A]" />;
      default:
        return <Lightbulb className="w-6 h-6 text-[#D2643A]" />;
    }
  };

  const handleMicroCtaClick = (index: number) => {
    if (index === 0) onExploreChallenges();
    else if (index === 1) onExploreChallenges(); // Also goes to pathways / active challenges
    else if (index === 2) onExplorePilots();
    else if (index === 3) onExploreReports();
  };

  return (
    <section id="how-it-works-section" className="relative bg-[#FAF9F6] py-16 md:py-24 border-y border-[#2E6F7D]/10">
      
      {/* Visual Hook Thread Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        <div className="absolute top-[50%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2E6F7D]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#2E6F7D] uppercase block mb-3">
            Our Participatory Model
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1E2328] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#1E2328]/80 font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
          {steps.map((step, idx) => {
            const stepNum = step?.number ?? `0${idx + 1}`;
            const stepTitle = step?.title ?? '';
            const stepDesc = step?.description ?? '';
            const stepIcon = step?.iconName ?? 'Lightbulb';
            const microCta = step?.microCta ?? 'Learn more';

            return (
              <div 
                key={idx} 
                className="group relative bg-[#F5F3EE] p-6 sm:p-8 rounded-[6px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-inner border border-[#2E6F7D]/10">
                      {getIcon(stepIcon)}
                    </div>
                    <span className="text-3xl font-serif font-light text-[#2E6F7D]/30 group-hover:text-[#2E6F7D] transition-colors duration-300">
                      {stepNum}
                    </span>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-serif font-semibold text-[#1E2328] mb-3 leading-snug">
                    {stepTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1E2328]/70 font-sans leading-relaxed mb-6">
                    {stepDesc}
                  </p>
                </div>

                {/* Inline Underline Micro CTA */}
                <button
                  onClick={() => handleMicroCtaClick(idx)}
                  className="inline-flex items-center text-xs font-semibold text-[#D2643A] hover:text-[#B64F2C] tracking-wide uppercase mt-auto pt-2"
                >
                  <span className="border-b border-[#D2643A]/30 group-hover:border-[#D2643A] pb-0.5 transition-colors duration-200">
                    {microCta}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                {/* Visual Connector Dot */}
                <div className="absolute top-[50%] right-0 translate-x-[50%] w-3.5 h-3.5 rounded-full bg-[#2E6F7D] border-4 border-white shadow-sm hidden md:group-hover:block transition-all duration-300 z-20 pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
