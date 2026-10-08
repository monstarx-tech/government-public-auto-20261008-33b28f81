import React, { useState } from 'react';
import { siteContent } from '../../lib/siteContent';
import { FileText, BarChart, FileCode, Search, ExternalLink } from 'lucide-react';

export default function ResourceListDataStories() {
  const data = siteContent?.knowledgeHub;
  const title = data?.title ?? "Open Knowledge Hub";
  const subtitle = data?.subtitle ?? "We document everything we learn.";
  const description = data?.description ?? "Transparency keeps us honest.";
  const resources = data?.resources ?? [];
  const browseArchiveText = data?.browseArchiveText ?? "Browse the full archive";

  // Active filter chip state
  const [activeTab, setActiveTab] = useState<'All' | 'Report' | 'Data' | 'Story'>('All');

  const filteredResources = resources.filter(res => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Report') return res.type === 'Report';
    if (activeTab === 'Data') return res.type === 'Data Snapshot';
    if (activeTab === 'Story') return res.type === 'Story Summary';
    return true;
  });

  // Get matching icon based on resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'Report':
        return <FileText className="w-5 h-5 text-[#D2643A]" />;
      case 'Data Snapshot':
        return <BarChart className="w-5 h-5 text-[#2E6F7D]" />;
      case 'Story Summary':
        return <FileCode className="w-5 h-5 text-amber-700" />;
      default:
        return <FileText className="w-5 h-5 text-[#1E2328]" />;
    }
  };

  return (
    <section id="knowledge-section" className="bg-[#F5F3EE] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#2E6F7D] uppercase block mb-3">
            Open-Access Research
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1E2328] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#1E2328]/80 font-sans leading-relaxed">
            {subtitle} {description}
          </p>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(['All', 'Report', 'Data', 'Story'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-[4px] transition-all duration-300 border ${
                activeTab === tab
                  ? 'bg-[#2E6F7D] text-[#F5F3EE] border-[#2E6F7D]'
                  : 'bg-white hover:bg-[#F5F3EE] text-[#1E2328] border-[#2E6F7D]/20'
              }`}
            >
              {tab === 'Data' ? 'Data Snapshots' : tab === 'Story' ? 'Story Summaries' : `${tab}s`}
            </button>
          ))}
        </div>

        {/* Vertical Resource List */}
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <div 
              key={resource?.id}
              className="bg-white p-6 sm:p-8 rounded-[6px] border border-[#2E6F7D]/10 hover:border-[#D2643A]/30 shadow-sm transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                {/* Meta Row */}
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#F5F3EE] flex items-center justify-center">
                    {getResourceIcon(resource?.type)}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2E6F7D]">
                    {resource?.type}
                  </span>
                  <span className="text-xs text-[#1E2328]/40">•</span>
                  <span className="text-xs text-[#1E2328]/60 font-sans font-medium">
                    {resource?.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#1E2328] leading-snug">
                  {resource?.title}
                </h3>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#1E2328]/75 font-sans leading-relaxed">
                  {resource?.summary}
                </p>
              </div>

              {/* Download / Resource Link */}
              <div className="flex-shrink-0 sm:pl-6 text-left sm:text-right">
                <a
                  href={`mailto:hello@civicforgelab.gov?subject=Requesting%20Resource:%20${encodeURIComponent(resource?.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D2643A] hover:text-[#B64F2C] tracking-wide uppercase group"
                >
                  <span className="border-b border-[#D2643A]/30 group-hover:border-[#D2643A] pb-0.5 transition-colors">
                    {resource?.linkText}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Central Archive Footer Link */}
        <div className="mt-12 text-center">
          <a
            href="mailto:hello@civicforgelab.gov?subject=Requesting%20Full%20Knowledge%20Hub%20Archive"
            className="group inline-flex items-center text-sm font-semibold text-[#1E2328] hover:text-[#D2643A] tracking-wider uppercase transition-colors"
          >
            <span className="border-b-2 border-[#1E2328]/20 group-hover:border-[#D2643A] pb-1 transition-colors">
              {browseArchiveText}
            </span>
            <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
