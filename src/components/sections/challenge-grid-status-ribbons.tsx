import React, { useState } from 'react';
import { siteContent } from '../../lib/siteContent';
import { Calendar, Tag, CheckSquare, Sparkles, MessageCircle } from 'lucide-react';

interface ChallengesProps {
  onChallengeSelected: (challengeTitle: string) => void;
}

export default function ChallengeGridStatusRibbons({ onChallengeSelected }: ChallengesProps) {
  const data = siteContent?.challenges;
  const title = data?.title ?? "Current City Challenges";
  const subtitle = data?.subtitle ?? "Active public inquiries and collaborative briefs.";
  const challenges = data?.challenges ?? [];
  const viewAllText = data?.viewAllLinkText ?? "View all challenges";

  // Filter state (interactive visual chips)
  const [activeFilter, setActiveFilter] = useState<'All' | 'Mobility' | 'Parks' | 'Youth'>('All');

  // Filter items
  const filteredChallenges = challenges.filter(c => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Mobility') return c.topic.toLowerCase().includes('mobility');
    if (activeFilter === 'Parks') return c.topic.toLowerCase().includes('parks') || c.topic.toLowerCase().includes('climate');
    if (activeFilter === 'Youth') return c.topic.toLowerCase().includes('youth');
    return true;
  });

  return (
    <section id="challenges-section" className="bg-[#F5F3EE] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Segment Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#D2643A] uppercase block mb-3">
              Shape Riverside
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1E2328] tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-lg text-[#1E2328]/80 font-sans leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Editorial Category Filter Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(['All', 'Mobility', 'Parks', 'Youth'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#1E2328] text-[#F5F3EE] shadow-sm'
                    : 'bg-white/70 hover:bg-white text-[#1E2328] border border-[#1E2328]/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChallenges.map((challenge) => {
            const isClosed = challenge?.status === 'Closed';
            const isUpcoming = challenge?.status === 'Upcoming';
            const isOpen = challenge?.status === 'Open';

            return (
              <div 
                key={challenge?.id}
                className="group relative bg-white rounded-[6px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden border border-[#2E6F7D]/5"
              >
                
                {/* Ribbon Tag based on status */}
                <div className={`absolute top-0 right-0 px-4 py-1 text-[11px] font-bold uppercase tracking-widest rounded-bl-[6px] text-white ${
                  isOpen ? 'bg-[#D2643A]' : isUpcoming ? 'bg-[#2E6F7D]' : 'bg-[#1E2328]/50'
                }`}>
                  {challenge?.status ?? 'Open'}
                </div>

                <div className="p-6 sm:p-8">
                  {/* Topic Tag */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2E6F7D] uppercase tracking-wider mb-4">
                    <Tag className="w-3 h-3" />
                    <span>{challenge?.topic ?? 'General'}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1E2328] leading-snug mb-3 group-hover:text-[#D2643A] transition-colors duration-200">
                    {challenge?.title ?? ''}
                  </h3>

                  {/* Description */}
                  <p className="text-[#1E2328]/75 font-sans text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {challenge?.description ?? ''}
                  </p>
                </div>

                {/* Card Footer / Details Meta */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-[#1E2328]/5 bg-[#FAF9F6] space-y-4">
                  
                  {/* Deadline & Participation Type info */}
                  <div className="space-y-2 text-xs text-[#1E2328]/80 font-sans">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#2E6F7D]" />
                      <span>Deadline: <strong className="font-semibold">{challenge?.deadline ?? 'Ongoing'}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-3.5 h-3.5 text-[#2E6F7D]" />
                      <span>Method: <strong className="font-semibold">{challenge?.contributionType ?? 'Survey'}</strong></span>
                    </div>
                  </div>

                  {/* CTA Action Button */}
                  <button
                    onClick={() => onChallengeSelected(challenge?.title ?? 'Civic Innovation')}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-white border-2 border-[#D2643A] text-[#D2643A] hover:bg-[#D2643A] hover:text-white transition-all duration-300 rounded-full text-xs font-semibold uppercase tracking-wider"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-2" />
                    Join Challenge Discussion
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer of the block: link to all / CTA helper */}
        <div className="mt-12 text-center">
          <p className="text-sm font-sans text-[#1E2328]/60 italic mb-4">
            Have an idea that doesn’t fit these categories? Submit a community proposal directly.
          </p>
          <button 
            onClick={() => onChallengeSelected('General Community Idea')}
            className="group inline-flex items-center text-sm font-semibold text-[#1E2328] hover:text-[#D2643A] uppercase tracking-wider transition-colors"
          >
            <span className="border-b-2 border-transparent group-hover:border-[#D2643A] pb-1 transition-colors">
              {viewAllText}
            </span>
            <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
