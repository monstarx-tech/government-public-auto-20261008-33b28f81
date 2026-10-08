import React from 'react';
import { siteContent } from '../../lib/siteContent';
import { Award, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function PilotProjectsTimelineGallery() {
  const data = siteContent?.projects;
  const title = data?.title ?? "From Ideas to Impact";
  const subtitle = data?.subtitle ?? "Every permanent change starts as a temporary test.";
  const projects = data?.projects ?? [];

  return (
    <section id="pilots-section" className="bg-[#FAF9F6] py-16 md:py-24 border-b border-[#2E6F7D]/10 relative">
      
      {/* Decorative Editorial Background Tag */}
      <div className="absolute right-0 top-12 opacity-5 pointer-events-none select-none hidden lg:block">
        <span className="font-serif text-[180px] font-extrabold text-[#2E6F7D] leading-none">RIVERSIDE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-[#2E6F7D] uppercase block mb-3">
            Proven Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1E2328] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#1E2328]/80 font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Timeline Thread Component */}
        <div className="relative timeline-thread pl-8 md:pl-0 space-y-12 md:space-y-24">
          
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const statusColor = project?.status === 'Completed' 
              ? 'bg-[#1E2328]' 
              : project?.status === 'Scaling' 
              ? 'bg-[#D2643A]' 
              : 'bg-[#2E6F7D]';

            return (
              <div 
                key={project?.id}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } justify-between gap-8 md:gap-16`}
              >
                
                {/* Timeline Center Bullet Pin (Desktop) */}
                <div className="absolute left-[-20px] md:left-[50%] md:translate-x-[-50%] top-4 w-10 h-10 rounded-full bg-[#FAF9F6] border-2 border-[#2E6F7D] flex items-center justify-center z-20 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-[#D2643A]" />
                </div>

                {/* Left/Right Column: Image Panel */}
                <div className="w-full md:w-[45%]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] shadow-md group">
                    <img 
                      src={project?.imageSrc} 
                      alt={project?.imageAlt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Status badge floating inside the image */}
                    <div className={`absolute top-4 left-4 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${statusColor} rounded-full shadow`}>
                      {project?.status ?? 'Pilot'}
                    </div>
                  </div>
                </div>

                {/* Left/Right Column: Content Editorial Panel */}
                <div className="w-full md:w-[45%] space-y-4">
                  
                  {/* Performance metric badge */}
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D2643A] bg-[#D2643A]/10 px-3.5 py-1.5 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project?.metric ?? 'Pilot Evaluation'}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-semibold text-[#1E2328] leading-tight">
                    {project?.title ?? ''}
                  </h3>

                  <p className="text-base text-[#1E2328]/85 font-sans leading-relaxed">
                    {project?.summary ?? ''}
                  </p>

                  <p className="text-sm text-[#1E2328]/60 font-sans italic border-l-2 border-[#2E6F7D]/30 pl-4 py-1">
                    {project?.impactBlurb ?? ''}
                  </p>

                  {/* Document Download / Story Link */}
                  <div className="pt-2">
                    <a 
                      href={`mailto:hello@civicforgelab.gov?subject=Inquiry%20about%20${encodeURIComponent(project?.title ?? '')}`}
                      className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#2E6F7D] hover:text-[#D2643A] transition-colors"
                    >
                      <span className="border-b border-[#2E6F7D]/30 group-hover:border-[#D2643A] pb-0.5 transition-colors">
                        {project?.storyLinkText ?? 'View story'}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
