import React, { useState } from 'react';
import { siteContent } from '../../lib/siteContent';
import { Mail, ArrowRight, MapPin, Inbox, Phone, Sparkles, Send } from 'lucide-react';

export default function MultiPathEngagementFooterBand() {
  const data = siteContent?.getInvolved;
  const title = data?.title ?? "Choose How You’d Like to Get Involved";
  const subtitle = data?.subtitle ?? "You don't need a degree in urban planning to help shape Riverside.";
  const stayInformedTitle = data?.stayInformedTitle ?? "Stay Informed";
  const stayInformedDesc = data?.stayInformedDesc ?? "Receive our bi-weekly dispatch detailing active feedback periods.";
  const partnerTitle = data?.partnerTitle ?? "Partner with Us";
  const partnerDesc = data?.partnerDesc ?? "Are you a local non-profit, school, or artist?";
  const partnerCtaText = data?.partnerCtaText ?? "Propose a partnership";
  const partnerCtaUrl = data?.partnerCtaUrl ?? "#";
  const hostTitle = data?.hostTitle ?? "Host an Idea Session";
  const hostDesc = data?.hostDesc ?? "Gather your neighbors in your living room or local park.";
  const hostCtaText = data?.hostCtaText ?? "Download the DIY Idea Session Kit";
  const hostCtaUrl = data?.hostCtaUrl ?? "#";

  const footerBrand = data?.footerBrandName ?? "CivicForge Lab";
  const footerTagline = data?.footerTagline ?? "Riverside City's collaborative space for public service innovation.";
  const footerAddress = data?.footerAddress ?? "Riverside City Hall, Rm 302";
  const footerEmail = data?.footerEmail ?? "hello@civicforgelab.gov";

  // News subscription states
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <footer id="get-involved-section" className="bg-[#1E2328] text-[#F5F3EE] pt-16 md:pt-24 pb-12 relative overflow-hidden">
      
      {/* Decorative Editorial Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D2643A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Engagement Title Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#D2643A] uppercase block mb-3">
            Open Participation Paths
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#F5F3EE] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#F5F3EE]/70 font-sans leading-relaxed mt-4">
            {subtitle}
          </p>
        </div>

        {/* Multi-Path Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Path 1: Stay Informed Newsletter */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2E6F7D] bg-[#2E6F7D]/20 px-3 py-1 rounded">
                01 / Get Updates
              </span>
              <h3 className="text-2xl font-serif font-semibold text-white">
                {stayInformedTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#F5F3EE]/75 font-sans leading-relaxed">
                {stayInformedDesc}
              </p>
            </div>

            {/* Newsletter input form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubscribeSubmit} className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <input
                  type="email"
                  required
                  placeholder="your.email@riverside.org"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-[#F5F3EE] placeholder-white/40 focus:outline-none focus:border-[#D2643A] px-4 py-3 rounded-[4px] text-sm font-sans flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#D2643A] hover:bg-[#B64F2C] text-white rounded-[4px] text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 bg-white/5 border border-[#2E6F7D]/50 rounded-[4px] text-xs font-sans text-white space-y-1">
                <p className="font-bold text-[#2E6F7D]">✓ Registration Complete!</p>
                <p className="opacity-80">You're subscribed to the CivicForge bi-weekly dispatch.</p>
              </div>
            )}
          </div>

          {/* Path 2: Partner with Us */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2E6F7D] bg-[#2E6F7D]/20 px-3 py-1 rounded">
                02 / Collaborative Funding
              </span>
              <h3 className="text-2xl font-serif font-semibold text-white">
                {partnerTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#F5F3EE]/75 font-sans leading-relaxed">
                {partnerDesc}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={partnerCtaUrl}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2E6F7D] hover:bg-[#204F59] text-white font-sans text-xs font-bold uppercase tracking-widest rounded-[4px] transition-all duration-300 w-full sm:w-auto"
              >
                <span>{partnerCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Path 3: Host DIY Idea Session */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2E6F7D] bg-[#2E6F7D]/20 px-3 py-1 rounded">
                03 / Community Kit
              </span>
              <h3 className="text-2xl font-serif font-semibold text-white">
                {hostTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#F5F3EE]/75 font-sans leading-relaxed">
                {hostDesc}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={hostCtaUrl}
                className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#D2643A] hover:text-[#B64F2C] transition-colors"
              >
                <span className="border-b border-[#D2643A]/30 group-hover:border-[#D2643A] pb-0.5 transition-colors">
                  {hostCtaText}
                </span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Footer Row */}
        <div className="pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-[#F5F3EE]/60 text-xs sm:text-sm font-sans">
          
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-white">{footerBrand}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 text-white/80 px-2 py-0.5 rounded">
                LAB 302
              </span>
            </div>
            <p className="leading-relaxed text-[#F5F3EE]/50">
              {footerTagline}
            </p>
          </div>

          {/* Location & Contact Meta info */}
          <div className="space-y-2 text-[#F5F3EE]/70">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#D2643A] shrink-0" />
              <span>{footerAddress}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Inbox className="w-4 h-4 text-[#2E6F7D] shrink-0" />
              <a href={`mailto:${footerEmail}`} className="hover:underline hover:text-white transition-colors">
                {footerEmail}
              </a>
            </div>
          </div>

          {/* Privacy & Municipal disclaimer links */}
          <div className="flex flex-col gap-1 md:text-right text-[#F5F3EE]/40 text-xs">
            <p>© {new Date().getFullYear()} City of Riverside. All rights reserved.</p>
            <p>CivicForge Lab operates under the Mayor's Office of Civic Design.</p>
            <div className="flex gap-4 mt-2 md:justify-end">
              <a href="#equity-section" className="hover:text-white transition-colors">Accessibility Policy</a>
              <a href="#knowledge-section" className="hover:text-white transition-colors">Open Data Pledge</a>
              <a href="#how-it-works-section" className="hover:text-white transition-colors">Public Participation Standard</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
