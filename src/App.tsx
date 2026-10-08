import React, { useState } from 'react';
import { siteContent } from './lib/siteContent';
import HeroCivicEditorialSplit from './components/sections/hero-civic-editorial-split';
import ProcessPublicParticipationSteps from './components/sections/process-public-participation-steps';
import ChallengeGridStatusRibbons from './components/sections/challenge-grid-status-ribbons';
import PilotProjectsTimelineGallery from './components/sections/pilot-projects-timeline-gallery';
import EngagementPhotoMosaic from './components/sections/engagement-photo-mosaic';
import EquityPrinciplesSplitPanel from './components/sections/equity-principles-split-panel';
import ResourceListDataStories from './components/sections/resource-list-data-stories';
import MultiPathEngagementFooterBand from './components/sections/multi-path-engagement-footer-band';
import { Menu, X, ArrowUpRight, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function App() {
  const brandName = siteContent?.brandName ?? "CivicForge Lab";
  
  // Responsive navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick engagement request dialog state
  const [selectedChallengeForDiscussion, setSelectedChallengeForDiscussion] = useState<string | null>(null);
  const [discussionEmail, setDiscussionEmail] = useState("");
  const [discussionIdea, setDiscussionIdea] = useState("");
  const [showSubmissionSuccess, setShowSubmissionSuccess] = useState(false);

  // Smooth scroll handler helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Submit challenge idea discussion handler
  const handleDiscussionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (discussionEmail.trim() && discussionIdea.trim()) {
      setShowSubmissionSuccess(true);
      setTimeout(() => {
        setSelectedChallengeForDiscussion(null);
        setDiscussionEmail("");
        setDiscussionIdea("");
        setShowSubmissionSuccess(false);
      }, 3500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] flex flex-col font-sans text-[#1E2328]">
      
      {/* Editorial Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#2E6F7D]/10 z-40 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Left: Brand Lockup */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="flex items-center gap-2.5 cursor-pointer select-none group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D2643A] flex items-center justify-center text-white font-serif text-lg font-bold shadow-sm group-hover:bg-[#B64F2C] transition-colors">
                CF
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-[#1E2328]">
                  {brandName}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#2E6F7D]">
                  Riverside Innovates
                </span>
              </div>
            </div>

            {/* Right: Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-sans font-medium">
              <button 
                onClick={() => scrollToSection('how-it-works-section')} 
                className="text-[#1E2328]/80 hover:text-[#D2643A] transition-colors py-1 border-b-2 border-transparent hover:border-[#D2643A]"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('challenges-section')} 
                className="text-[#1E2328]/80 hover:text-[#D2643A] transition-colors py-1 border-b-2 border-transparent hover:border-[#D2643A]"
              >
                Active Challenges
              </button>
              <button 
                onClick={() => scrollToSection('pilots-section')} 
                className="text-[#1E2328]/80 hover:text-[#D2643A] transition-colors py-1 border-b-2 border-transparent hover:border-[#D2643A]"
              >
                Our Pilots
              </button>
              <button 
                onClick={() => scrollToSection('equity-section')} 
                className="text-[#1E2328]/80 hover:text-[#D2643A] transition-colors py-1 border-b-2 border-transparent hover:border-[#D2643A]"
              >
                Commitments
              </button>
              <button 
                onClick={() => scrollToSection('knowledge-section')} 
                className="text-[#1E2328]/80 hover:text-[#D2643A] transition-colors py-1 border-b-2 border-transparent hover:border-[#D2643A]"
              >
                Reports
              </button>
              
              <button
                onClick={() => scrollToSection('get-involved-section')}
                className="px-5 py-2.5 bg-[#D2643A] hover:bg-[#B64F2C] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-md"
              >
                Join Now
              </button>
            </div>

            {/* Hamburger Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1E2328] hover:text-[#D2643A] transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation overlay drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#F5F3EE] border-b border-[#2E6F7D]/20 shadow-xl py-6 px-4 space-y-4 animate-fadeIn">
            <button
              onClick={() => scrollToSection('how-it-works-section')}
              className="block w-full text-left py-2 px-3 text-base font-semibold text-[#1E2328] hover:bg-white rounded"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('challenges-section')}
              className="block w-full text-left py-2 px-3 text-base font-semibold text-[#1E2328] hover:bg-white rounded"
            >
              Active Challenges
            </button>
            <button
              onClick={() => scrollToSection('pilots-section')}
              className="block w-full text-left py-2 px-3 text-base font-semibold text-[#1E2328] hover:bg-white rounded"
            >
              Our Pilots
            </button>
            <button
              onClick={() => scrollToSection('equity-section')}
              className="block w-full text-left py-2 px-3 text-base font-semibold text-[#1E2328] hover:bg-white rounded"
            >
              Commitments & Access
            </button>
            <button
              onClick={() => scrollToSection('knowledge-section')}
              className="block w-full text-left py-2 px-3 text-base font-semibold text-[#1E2328] hover:bg-white rounded"
            >
              Open Reports
            </button>
            
            <div className="pt-4 border-t border-[#1E2328]/10">
              <button
                onClick={() => scrollToSection('get-involved-section')}
                className="w-full text-center py-3 bg-[#D2643A] text-white rounded-full font-bold text-xs uppercase tracking-widest"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Section Content Area */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Civic Editorial Split */}
        <HeroCivicEditorialSplit 
          onChallengeClick={() => scrollToSection('challenges-section')}
          onHowItWorksClick={() => scrollToSection('how-it-works-section')}
        />

        {/* Section 2: How It Works: Process Steps */}
        <ProcessPublicParticipationSteps 
          onExploreChallenges={() => scrollToSection('challenges-section')}
          onExplorePilots={() => scrollToSection('pilots-section')}
          onExploreReports={() => scrollToSection('knowledge-section')}
        />

        {/* Section 3: Featured Challenges */}
        <ChallengeGridStatusRibbons 
          onChallengeSelected={(challengeTitle) => {
            setSelectedChallengeForDiscussion(challengeTitle);
          }}
        />

        {/* Section 4: Project Timeline: Pilot Projects Gallery */}
        <PilotProjectsTimelineGallery />

        {/* Section 5: Participation Gallery: Engagement Mosaic */}
        <EngagementPhotoMosaic />

        {/* Section 6: Accessibility & Equity: Split Panel */}
        <EquityPrinciplesSplitPanel />

        {/* Section 7: Knowledge Hub: Resource List */}
        <ResourceListDataStories />

        {/* Section 8: Get Involved Footer & Contact */}
        <MultiPathEngagementFooterBand />

      </main>

      {/* Dynamic Slide-in Panel for submitting ideas / participating */}
      {selectedChallengeForDiscussion && (
        <div className="fixed inset-0 bg-[#1E2328]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5F3EE] max-w-lg w-full rounded-[6px] shadow-2xl overflow-hidden border border-[#D2643A]/20">
            <div className="bg-[#1E2328] text-white p-6 flex justify-between items-center">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D2643A] font-bold">
                  Participate Now
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-semibold mt-1">
                  {selectedChallengeForDiscussion}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedChallengeForDiscussion(null)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {showSubmissionSuccess ? (
              <div className="p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#1E2328]">
                  Submission Received!
                </h4>
                <p className="text-sm text-[#1E2328]/80 font-sans leading-relaxed max-w-sm mx-auto">
                  Thank you for contributing. We share every submission during our upcoming community evaluation sessions. Check your email for status alerts.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDiscussionSubmit} className="p-6 sm:p-8 space-y-5">
                <p className="text-sm text-[#1E2328]/80 font-sans leading-relaxed">
                  Your voice helps our urban planners decide which concepts are selected for real pilot tests. Post your primary suggestion or query below:
                </p>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2E6F7D]">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={discussionEmail}
                    onChange={(e) => setDiscussionEmail(e.target.value)}
                    className="w-full bg-white border border-[#2E6F7D]/20 focus:outline-none focus:border-[#D2643A] rounded-[4px] px-3.5 py-2 text-sm font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2E6F7D]">
                    Your Idea / Suggestion / Question
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we make this better? Share local bottlenecks, solutions, or insights..."
                    value={discussionIdea}
                    onChange={(e) => setDiscussionIdea(e.target.value)}
                    className="w-full bg-white border border-[#2E6F7D]/20 focus:outline-none focus:border-[#D2643A] rounded-[4px] px-3.5 py-2 text-sm font-sans resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 bg-[#2E6F7D]/10 p-3 rounded text-xs text-[#2E6F7D] font-medium leading-relaxed">
                  <HelpCircle className="w-4.5 h-4.5 shrink-0" />
                  <span>Submissions are published anonymously on our public dataset in the Knowledge Hub after verification.</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedChallengeForDiscussion(null)}
                    className="w-1/2 py-3 border border-[#1E2328]/20 hover:bg-[#1E2328]/5 rounded-[4px] text-xs font-bold uppercase tracking-widest text-[#1E2328] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-3 bg-[#D2643A] hover:bg-[#B64F2C] text-white rounded-[4px] text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Send Idea
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
