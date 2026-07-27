import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { caseStudies } from '../data/projects';
import { Magnetic, Reveal, RevealGroup, RevealItem } from '../utils/motion';

const SectionEyebrow = ({ children }) => (
    <div className="inline-flex items-center gap-3 text-[#0a0100]/60 uppercase tracking-widest text-xs mb-4">
        <div className="w-8 h-px bg-[#0a0100]/30" />
        <span className="font-erstoria">{children}</span>
    </div>
);

const ProjectDetailPage = () => {
    const [activeScreenshot, setActiveScreenshot] = useState(0);
    const { slug } = useParams();

    const project = caseStudies[slug];
    // The hero and the gallery can disagree: TRCKS pairs a landscape marketing
    // capture with portrait app screens.
    const isPortraitGallery = Boolean(project?.galleryPortrait);
    const heroContained = project?.screenshotFit === 'contain';

    if (!project) {
        return (
            <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-erstoria text-4xl text-[#0a0100] mb-4">Project Not Found</h1>
                    <Link to="/portfolio" className="focus-ring text-[#e61f00] underline">
                        Return to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f5f0] relative">
            {/* Background Grid */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
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

            {/* Navbar is rendered once globally in AppRouter — do not add a second one here. */}

            {/* Hero Section */}
            <section className="relative pt-24 md:pt-32 pb-16 md:pb-20">
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Link
                            to="/portfolio"
                            className="focus-ring inline-flex items-center gap-2 text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 group"
                        >
                            <ArrowLeft aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                            <span className="font-erstoria text-sm tracking-wide uppercase">Back to Portfolio</span>
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Left - Project Info */}
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-3 py-1 text-xs font-erstoria tracking-widest uppercase bg-[#e61f00] text-white">
                                    {project.category}
                                </span>
                                <span className="px-3 py-1 text-xs font-erstoria tracking-widest uppercase border border-[#0a0100]/20 text-[#0a0100]/60">
                                    {project.status}
                                </span>
                            </div>

                            <h1 className="font-erstoria text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-[#0a0100] tracking-tight mb-4">
                                {project.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light mb-6">
                                {project.subtitle}
                            </p>

                            <p className="text-base text-[#0a0100]/70 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 text-sm bg-white border border-[#0a0100]/10 text-[#0a0100]/70"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-sm text-[#0a0100]/60 mb-8">
                                <Calendar aria-hidden="true" className="w-4 h-4" />
                                <span>{project.timeline}</span>
                            </div>

                            {project.liveUrl && (
                                <Magnetic>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 cursor-pointer"
                                    >
                                        <span className="font-erstoria text-base tracking-wide">
                                            VISIT {project.liveUrlLabel.toUpperCase()}
                                        </span>
                                        <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </a>
                                </Magnetic>
                            )}
                        </div>

                        {/* Right - Hero Image */}
                        <div className="relative isolate">
                            <div className={`relative aspect-[4/3] ${heroContained ? 'bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4]' : 'bg-white'} border border-[#0a0100]/10 overflow-hidden`}>
                                {/* Fallback sits behind the screenshot */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e61f00]/10 to-[#e61f00]/5">
                                    <span className="font-erstoria text-4xl text-[#0a0100]/20">{project.title}</span>
                                </div>

                                {project.screenshot && (
                                    <img
                                        src={project.screenshot}
                                        alt={`${project.title} preview`}
                                        className={`relative w-full h-full ${heroContained ? 'object-contain p-4' : 'object-cover object-top'}`}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                )}
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#e61f00]/30 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="h-px bg-[#0a0100]/10" />
            </div>

            {/* Story Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                    <div className="mb-8">
                        <SectionEyebrow>The Story</SectionEyebrow>
                    </div>

                    <div className="space-y-6">
                        {project.longDescription.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-lg text-[#0a0100]/70 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots Gallery Section */}
            {project.screenshots && project.screenshots.length > 0 && (
                <section className="py-16 md:py-20 bg-white/50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                        <div className="mb-8">
                            <SectionEyebrow>Platform Preview</SectionEyebrow>
                            <h2 className="font-erstoria text-3xl md:text-4xl text-[#0a0100]">
                                See It In Action
                            </h2>
                        </div>

                        {/*
                          Portrait captures (phone screens) are shown all at
                          once in their own aspect ratio. Letterboxing a 1:2
                          screen inside a 16:9 carousel renders it postage-stamp
                          sized, which is worse than no gallery at all.
                        */}
                        {isPortraitGallery ? (
                            <RevealGroup className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {project.screenshots.map((screenshot, index) => (
                                    <RevealItem key={screenshot}>
                                        <div className="relative aspect-[9/19] bg-gradient-to-br from-[#f5f5f0] to-[#e9e9e4] border border-[#0a0100]/10 overflow-hidden">
                                            <img
                                                src={screenshot}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                loading="lazy"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </RevealItem>
                                ))}
                            </RevealGroup>
                        ) : (
                        <>
                        {/* Main Image Display */}
                        <div className="relative mb-6">
                            <div className="relative aspect-video bg-white border border-[#0a0100]/10 overflow-hidden">
                                <img
                                    src={project.screenshots[activeScreenshot]}
                                    alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Navigation Arrows */}
                            {project.screenshots.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        aria-label="Previous screenshot"
                                        onClick={() => setActiveScreenshot(prev => prev === 0 ? project.screenshots.length - 1 : prev - 1)}
                                        className="focus-ring absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-[#0a0100]/10 flex items-center justify-center hover:bg-[#0a0100] hover:text-white transition-colors duration-300 cursor-pointer active:scale-95"
                                    >
                                        <ChevronLeft aria-hidden="true" className="w-5 h-5" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Next screenshot"
                                        onClick={() => setActiveScreenshot(prev => prev === project.screenshots.length - 1 ? 0 : prev + 1)}
                                        className="focus-ring absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-[#0a0100]/10 flex items-center justify-center hover:bg-[#0a0100] hover:text-white transition-colors duration-300 cursor-pointer active:scale-95"
                                    >
                                        <ChevronRight aria-hidden="true" className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {project.screenshots.map((screenshot, index) => (
                                <button
                                    key={screenshot}
                                    type="button"
                                    onClick={() => setActiveScreenshot(index)}
                                    aria-label={`Show screenshot ${index + 1}`}
                                    aria-current={activeScreenshot === index}
                                    className={`focus-ring relative w-20 h-14 overflow-hidden border-2 transition-all duration-300 cursor-pointer active:scale-95 ${activeScreenshot === index
                                            ? 'border-[#e61f00]'
                                            : 'border-[#0a0100]/10 hover:border-[#0a0100]/30'
                                        }`}
                                >
                                    <img
                                        src={screenshot}
                                        alt=""
                                        aria-hidden="true"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                        </>
                        )}
                    </div>
                </section>
            )}
            <section className="py-16 md:py-20 bg-white/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                    <div className="mb-12">
                        <SectionEyebrow>Key Features</SectionEyebrow>
                        <h2 className="font-erstoria text-3xl md:text-4xl text-[#0a0100]">
                            What Makes It Special
                        </h2>
                    </div>

                    <RevealGroup className="grid md:grid-cols-2 gap-6">
                        {project.features.map((feature, index) => (
                            <RevealItem
                                key={feature.title}
                                className="p-6 bg-white border border-[#0a0100]/10 hover:border-[#e61f00]/30 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-[#e61f00]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-[#e61f00] font-erstoria text-sm">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-erstoria text-lg text-[#0a0100] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-[#0a0100]/70 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                    <div className="mb-12">
                        <SectionEyebrow>Technical Deep Dive</SectionEyebrow>
                        <h2 className="font-erstoria text-3xl md:text-4xl text-[#0a0100]">
                            Challenges & Solutions
                        </h2>
                    </div>

                    <RevealGroup className="space-y-8" stagger={0.1}>
                        {project.challenges.map((item) => (
                            <RevealItem key={item.challenge} className="relative">
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e61f00]/30" />
                                <div className="pl-8">
                                    <h3 className="font-erstoria text-xl text-[#0a0100] mb-3">
                                        {item.challenge}
                                    </h3>
                                    <p className="text-[#0a0100]/70 leading-relaxed">
                                        {item.solution}
                                    </p>
                                </div>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-16 md:py-20 border-t border-[#0a0100]/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center">
                    <p className="text-[#0a0100]/70 mb-6">
                        Interested in the technical details or want to discuss similar projects?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Magnetic>
                            <Link
                                to="/contact"
                                className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
                            >
                                <span className="font-erstoria text-base tracking-wide">GET IN TOUCH</span>
                                <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </Link>
                        </Magnetic>
                        <Link
                            to="/portfolio"
                            className="focus-ring group inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 active:scale-95 min-w-[200px] cursor-pointer"
                        >
                            <span className="font-erstoria text-base tracking-wide">VIEW MORE WORK</span>
                            <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectDetailPage;
