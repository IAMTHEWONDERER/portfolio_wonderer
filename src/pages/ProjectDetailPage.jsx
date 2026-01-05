import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowLeft, Calendar, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnhancedNavbar } from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Lenis from 'lenis';

const ProjectDetailPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { slug } = useParams();
    const heroRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);

        const lenis = new Lenis({
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const projectsData = {
        trcks: {
            id: 'trcks',
            title: "TRCKS",
            subtitle: "Gym Progress Tracking Platform",
            tagline: "Train Smarter. Track Better.",
            status: "In Development",
            timeline: "November 2025 – Present",
            category: "Personal Business",
            description: "A comprehensive gym progress tracking platform designed for workout, performance, and body metrics logging. Built as a long-term personal business initiative with AI-powered coaching features that let you log workouts through natural conversation.",
            longDescription: `TRCKS was born from a personal need - I wanted a gym tracking app that truly understood how I work out. Most apps force you into rigid structures, but real gym sessions are fluid. You superset, you adjust on the fly, you want to quickly log and get back to lifting.

That's why I built TRCKS with an AI-powered coach that understands natural language. Just tell it "Did 4 sets of bench press, started at 80kg and worked up to 100kg" and it logs everything perfectly. No clicking through menus, no counting reps on your phone.`,
            screenshot: "/imgs/screenshots/trcks.png",
            color: "#e61f00",
            technologies: [
                { name: "React.js", category: "Frontend" },
                { name: "TypeScript", category: "Language" },
                { name: "Tailwind CSS", category: "Styling" },
                { name: "Supabase", category: "Backend" },
                { name: "AI MCPs", category: "AI Integration" },
                { name: "Vercel", category: "Deployment" }
            ],
            features: [
                {
                    title: "AI-Powered Workout Logging",
                    description: "Describe your workout naturally and let AI parse and log everything automatically"
                },
                {
                    title: "Comprehensive Progress Tracking",
                    description: "Track weight, reps, sets, and body metrics with beautiful visualizations"
                },
                {
                    title: "Real-time Sync",
                    description: "Your data syncs instantly across all devices using Supabase's real-time features"
                },
                {
                    title: "Smart Analytics",
                    description: "Get insights into your progress with AI-generated analysis and recommendations"
                }
            ],
            challenges: [
                {
                    challenge: "Natural Language Understanding",
                    solution: "Implemented Model Context Protocols (MCPs) to enable the AI to understand varied workout descriptions. The system can parse complex sentences like 'I did 5x5 squats at 120, then dropped to 100 for burnout sets' and correctly log all the data."
                },
                {
                    challenge: "Real-time Data Sync",
                    solution: "Leveraged Supabase's real-time subscriptions to create a seamless experience where data updates instantly across devices. Implemented optimistic updates for immediate UI feedback."
                },
                {
                    challenge: "Scalable Architecture",
                    solution: "Designed a component-driven React architecture with clear separation of concerns. The AI layer, data layer, and UI layer are decoupled, making the codebase maintainable and testable."
                }
            ]
        }
    };

    const project = projectsData[slug];

    if (!project) {
        return (
            <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-erstoria text-4xl text-[#0a0100] mb-4">Project Not Found</h1>
                    <Link to="/portfolio" className="text-[#e61f00] hover:underline">
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

            <EnhancedNavbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 md:pt-32 pb-16 md:pb-20">
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center gap-2 text-[#0a0100]/60 hover:text-[#e61f00] transition-colors duration-300 group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
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

                            <h1 className="font-erstoria text-5xl sm:text-6xl md:text-7xl text-[#0a0100] tracking-tight mb-4">
                                {project.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-[#0a0100]/60 font-light mb-6">
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

                            <div className="flex items-center gap-2 text-sm text-[#0a0100]/50">
                                <Calendar className="w-4 h-4" />
                                <span>{project.timeline}</span>
                            </div>
                        </div>

                        {/* Right - Hero Image */}
                        <div className="relative">
                            <div className="relative aspect-[4/3] bg-white border border-[#0a0100]/10 overflow-hidden">
                                <img
                                    src={project.screenshot}
                                    alt={`${project.title} preview`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />

                                {/* Fallback */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#e61f00]/10 to-[#e61f00]/5">
                                    <span className="font-erstoria text-4xl text-[#0a0100]/20">{project.title}</span>
                                </div>
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
                        <div className="inline-flex items-center gap-3 text-[#0a0100]/50 uppercase tracking-widest text-xs mb-4">
                            <div className="w-8 h-px bg-[#0a0100]/30" />
                            <span className="font-erstoria">The Story</span>
                        </div>
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

            {/* Features Section */}
            <section className="py-16 md:py-20 bg-white/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-3 text-[#0a0100]/50 uppercase tracking-widest text-xs mb-4">
                            <div className="w-8 h-px bg-[#0a0100]/30" />
                            <span className="font-erstoria">Key Features</span>
                        </div>
                        <h2 className="font-erstoria text-3xl md:text-4xl text-[#0a0100]">
                            What Makes It Special
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {project.features.map((feature, index) => (
                            <div
                                key={index}
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
                                        <p className="text-sm text-[#0a0100]/60 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-3 text-[#0a0100]/50 uppercase tracking-widest text-xs mb-4">
                            <div className="w-8 h-px bg-[#0a0100]/30" />
                            <span className="font-erstoria">Technical Deep Dive</span>
                        </div>
                        <h2 className="font-erstoria text-3xl md:text-4xl text-[#0a0100]">
                            Challenges & Solutions
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {project.challenges.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e61f00]/30" />
                                <div className="pl-8">
                                    <h3 className="font-erstoria text-xl text-[#0a0100] mb-3">
                                        {item.challenge}
                                    </h3>
                                    <p className="text-[#0a0100]/70 leading-relaxed">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-16 md:py-20 border-t border-[#0a0100]/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center">
                    <p className="text-[#0a0100]/60 mb-6">
                        Interested in the technical details or want to discuss similar projects?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <button className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0a0100] text-white hover:bg-[#e61f00] transition-colors duration-300 cursor-pointer">
                                <span className="font-erstoria text-sm tracking-wide">Get in Touch</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Link>
                        <Link to="/portfolio">
                            <button className="group inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#0a0100]/20 text-[#0a0100] hover:border-[#0a0100] transition-colors duration-300 cursor-pointer">
                                <span className="font-erstoria text-sm tracking-wide">View More Work</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectDetailPage;
