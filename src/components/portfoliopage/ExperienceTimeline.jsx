import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { experience, education } from '../../data/projects';

const ExperienceTimeline = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const reveal = (delay) => ({
    animation: isLoaded
      ? `slideUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards`
      : 'none',
    transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
    opacity: isLoaded ? 1 : 0,
  });

  return (
    <section
      data-section="experience-timeline"
      className="relative py-20 md:py-28 bg-[#f5f5f0] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0a0100 1px, transparent 1px),
              linear-gradient(to bottom, #0a0100 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="overflow-hidden mb-8" style={reveal(0.2)}>
            <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-sm mb-2">
              <div className="w-12 h-px bg-[#0a0100]/30" />
              <span className="font-erstoria">Experience</span>
              <div className="w-12 h-px bg-[#0a0100]/30" />
            </div>
          </div>

          <div className="overflow-hidden mb-12">
            <h2
              className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-6"
              style={reveal(0.4)}
            >
              PROFESSIONAL
              <span className="block text-[#e61f00]">JOURNEY</span>
            </h2>
          </div>

          <div className="overflow-hidden" style={reveal(0.6)}>
            <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
              Full-Stack Engineer & Frontend Architect — building design systems,
              product frontends and the services behind them.
            </p>
          </div>
        </div>

        {/* Work Timeline */}
        <div className="relative mb-20 md:mb-28">
          {/* Vertical rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#0a0100]/15" />

          <div className="space-y-8 md:space-y-10">
            {experience.map((role, index) => (
              <div
                key={`${role.company}-${role.period}`}
                className="relative pl-10 md:pl-14"
                style={reveal(0.8 + index * 0.15)}
              >
                {/* Node */}
                <div
                  className={`absolute left-0 top-8 w-[15px] h-[15px] border-2 ${role.current
                    ? 'bg-[#e61f00] border-[#e61f00]'
                    : 'bg-[#f5f5f0] border-[#0a0100]/30'
                    }`}
                />

                <div className="bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 p-6 md:p-8">
                  {/* Period + location */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-erstoria tracking-widest uppercase border ${role.current
                        ? 'bg-[#e61f00]/10 text-[#e61f00] border-[#e61f00]/20'
                        : 'bg-[#0a0100]/5 text-[#0a0100]/60 border-[#0a0100]/10'
                        }`}
                    >
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0a0100]/50">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="break-words">{role.location}</span>
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="font-erstoria text-xl md:text-2xl text-[#0a0100] tracking-wide mb-2">
                    {role.role}
                  </h3>

                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-[#e61f00] flex-shrink-0" />
                    <p className="font-erstoria text-base text-[#e61f00] tracking-wide">
                      {role.company}
                    </p>
                  </div>

                  {role.companyNote && (
                    <p className="text-xs text-[#0a0100]/45 mb-5 leading-relaxed">
                      {role.companyNote}
                    </p>
                  )}

                  {/* Impact bullets */}
                  <ul className="space-y-3 mt-5">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-[#e61f00]/60 flex-shrink-0" />
                        <span className="text-sm md:text-base text-[#0a0100]/70 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={reveal(1.4)}>
          <div className="flex items-center gap-4 mb-10">
            <GraduationCap className="w-8 h-8 text-[#e61f00] flex-shrink-0" />
            <h3 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] tracking-wide">
              EDUCATION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((entry) => (
              <div
                key={entry.degree}
                className="bg-white border border-[#0a0100]/10 hover:border-[#0a0100]/20 transition-all duration-500 p-6 md:p-8 flex flex-col"
              >
                <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-erstoria tracking-widest uppercase bg-[#0a0100]/5 text-[#0a0100]/60 border border-[#0a0100]/10">
                  {entry.period}
                </span>
                <h4 className="font-erstoria text-lg md:text-xl text-[#0a0100] tracking-wide mb-2">
                  {entry.degree}
                </h4>
                <p className="font-erstoria text-sm text-[#e61f00] tracking-wide mb-3">
                  {entry.school}
                </p>
                {entry.detail && (
                  <p className="text-sm text-[#0a0100]/70 leading-relaxed mt-auto">
                    {entry.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceTimeline;
