import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import Footer from '../components/common/Footer';
import { CONTACT, CV_FILE, CV_DOWNLOAD_NAME, CV_LAST_UPDATED } from '../data/projects';
import PdfModal from '../components/common/PdfModal';
import {
  Magnetic,
  MaskedLines,
  Reveal,
  RevealGroup,
  RevealItem,
  SectionLabel,
} from '../utils/motion';

const ContactPage = () => {
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const handleNavbarMenuOpen = () => setShowCV(false);
    window.addEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
    return () => window.removeEventListener('hamburgerMenuOpen', handleNavbarMenuOpen);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.emailPrimary,
      href: `mailto:${CONTACT.emailPrimary}`,
      color: "text-[#e61f00]",
      description: "Send me an email anytime"
    },
    {
      icon: Mail,
      label: "Email (Alternate)",
      value: CONTACT.emailSecondary,
      href: `mailto:${CONTACT.emailSecondary}`,
      color: "text-[#0a0100]",
      description: "A second inbox, equally watched"
    },
    {
      icon: Github,
      label: "GitHub",
      value: CONTACT.githubLabel,
      href: CONTACT.github,
      color: "text-[#e61f00]",
      description: "Check out my repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: CONTACT.linkedinLabel,
      href: CONTACT.linkedin,
      color: "text-[#0a0100]",
      description: "Connect with me professionally"
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Morocco",
      description: "Based in North Africa"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "GMT+1 Timezone",
      description: "Available for any inquiries"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f0] relative overflow-hidden">
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-32 pb-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <SectionLabel className="mb-8">Get In Touch</SectionLabel>

          <MaskedLines
            as="h1"
            lines={["LET'S CREATE", 'TOGETHER']}
            className="font-erstoria text-4xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#0a0100] mb-12"
          />

          <Reveal className="mb-16" delay={0.1}>
            <p className="text-xl md:text-2xl text-[#0a0100]/70 font-light max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Whether it's a complete
              digital transformation or a simple website refresh, let's discuss how we can
              bring your vision to life.
            </p>
          </Reveal>
        </div>

        {/* Contact Information Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;

            return (
              <RevealItem key={contact.label}>
                <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="focus-ring group relative border border-[#0a0100]/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-[#0a0100]/20 transition-all duration-500 cursor-pointer overflow-hidden p-6 sm:p-8 block active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#e61f00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#0a0100]/5 group-hover:bg-[#e61f00]/10 transition-colors duration-500">
                    <Icon aria-hidden="true" className={`w-8 h-8 ${contact.color} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="font-erstoria text-xl text-[#0a0100] tracking-wide mb-2 group-hover:text-[#e61f00] transition-colors duration-300">
                      {contact.label}
                    </h2>
                    <p className="text-[#0a0100]/70 text-sm leading-relaxed break-words mb-2">
                      {contact.value}
                    </p>
                    <p className="text-[#0a0100]/60 text-xs">
                      {contact.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="w-6 h-6 flex-shrink-0 text-[#0a0100]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#e61f00]"
                  />
                </div>
              </a>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Additional Information Section */}
        <Reveal className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
              Additional Information
            </h2>
            <p className="text-[#0a0100]/70 leading-relaxed">
              Everything you need to know about getting in touch and working together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {additionalInfo.map((info) => {
              const Icon = info.icon;

              return (
                <div key={info.label} className="flex items-center gap-4 sm:gap-6 p-6 bg-white/30 backdrop-blur-sm border border-[#0a0100]/10">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#0a0100]/5">
                    <Icon aria-hidden="true" className="w-6 h-6 text-[#0a0100]/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-erstoria text-lg text-[#0a0100] tracking-wide mb-2">
                      {info.label}
                    </h3>
                    <p className="text-[#0a0100]/70 text-sm mb-1">
                      {info.value}
                    </p>
                    <p className="text-[#0a0100]/60 text-xs">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Response Guarantee */}
          <div className="bg-[#e61f00]/5 border border-[#e61f00]/20 p-8 text-center">
            <h3 className="font-erstoria text-xl text-[#0a0100] mb-4">
              Quick Response Guarantee
            </h3>
            <p className="text-[#0a0100]/70 leading-relaxed max-w-2xl mx-auto">
              I typically respond to all messages within 24 hours during business days.
              Either inbox reaches me — use whichever you prefer. Let's start building
              something amazing together!
            </p>
          </div>
        </Reveal>

        {/* Call-to-Action Section */}
        <Reveal className="text-center">
          <div className="mb-8">
            <h2 className="font-erstoria text-2xl md:text-3xl text-[#0a0100] mb-4">
              Ready to start your project?
            </h2>
            <p className="text-[#0a0100]/70 max-w-2xl mx-auto leading-relaxed">
              From initial concept to final launch, I'm here to guide you through every step
              of your digital journey. Let's create something extraordinary together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Magnetic>
              <a
                href={`mailto:${CONTACT.emailPrimary}`}
                className="focus-ring group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#0a0100] text-white overflow-hidden transition-all duration-500 hover:bg-[#e61f00] active:scale-95 min-w-[200px] cursor-pointer"
              >
                <Mail aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-erstoria text-base tracking-wide">SEND EMAIL</span>
                <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </Magnetic>

            <button
              type="button"
              onClick={() => setShowCV(true)}
              className="focus-ring group inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100] hover:text-white transition-all duration-300 active:scale-95 min-w-[200px] cursor-pointer"
            >
              <span className="font-erstoria text-base tracking-wide">VIEW MY CV</span>
            </button>
          </div>
        </Reveal>
      </div>

      {/* Footer Component */}
      <Footer />

      {/* CV Modal */}
      <PdfModal
        open={showCV}
        onClose={() => setShowCV(false)}
        title="CV"
        fileUrl={CV_FILE}
        downloadName={CV_DOWNLOAD_NAME}
        eyebrow={`Updated ${CV_LAST_UPDATED}`}
        newTabLabel="OPEN CV IN NEW TAB"
        downloadLabel="DOWNLOAD CV"
      />
    </div>
  );
};

export default ContactPage;