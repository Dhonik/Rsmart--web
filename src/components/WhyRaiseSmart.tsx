import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Code, Globe, Cpu, Award, Briefcase, MapPin, Users, Monitor, ChevronRight } from 'lucide-react';
import './WhyRaiseSmart.css';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Building2 size={20} />,
    title: 'IT Park Ecosystem',
    subtitle: 'Direct connection to real tech companies and startups.',
    bullets: [
      'Where learning meets industry',
      'Raise Smart features an Integrated IT Park that connects students directly with the tech ecosystem.',
      'Students work alongside startups, developers, and innovators, gaining practical exposure to real technology development environments.'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <Code size={20} />,
    title: 'Build From Day One',
    subtitle: 'Hands-on projects and real-world tech development.',
    bullets: [
      'Project-driven learning from your first semester onwards.',
      'Develop real working applications, websites, and software systems from day one.',
      'Build a tangible professional portfolio to showcase your practical capabilities.'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <Globe size={20} />,
    title: 'Global & Industry Exposure',
    subtitle: 'Learn from global experts and industry mentors.',
    bullets: [
      'Gain direct mentorship from industry experts, tech leaders, and entrepreneurs.',
      'Participate in guest lectures, masterclasses, and collaborative tech workshops.',
      'Acquire first-hand insights into global standards of tech development.'
    ],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <Cpu size={20} />,
    title: 'Future-Ready AI and Tech Integrated Curriculum',
    subtitle: "Tomorrow's technologies, integrated today.",
    bullets: [
      'Dynamic curriculum built around Artificial Intelligence, Machine Learning, and emerging tech.',
      'Learn modern software engineering paradigms and cloud native architectures.',
      'Stay ahead of the curve with skill modules aligned to current market demands.'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <Award size={20} />,
    title: 'Semester Skill Certification Programme',
    subtitle: 'Earn industry-validated credentials every single semester.',
    bullets: [
      'Acquire recognized certifications that validate your specialized technical skills.',
      'Certify your expertise in high-demand domains like Cloud, AI, and Cybersecurity.',
      'Exit every semester with proof-of-competence that enhances your career profile.'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <Briefcase size={20} />,
    title: 'Semester Industry Immersion Programme',
    subtitle: 'Experience active engineering environments while studying.',
    bullets: [
      'Bridge academic frameworks with real corporate operational environments.',
      'Work on live corporate challenges and structural industry case studies.',
      'Gradually transition into professional workflows through regular immersion cycles.'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <MapPin size={20} />,
    title: 'Field Exposure Programme',
    subtitle: 'Step outside the classroom into real tech operations.',
    bullets: [
      'Participate in organized visits to major technology hubs, data centers, and IT parks.',
      'Observe real engineering workflows and large-scale infrastructure deployments.',
      'Connect abstract engineering theories to real-world physical and digital systems.'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <Users size={20} />,
    title: 'Outbound Leadership Training',
    subtitle: 'Develop core emotional intelligence and team leadership.',
    bullets: [
      'Acquire robust problem-solving, strategic planning, and team leadership skills.',
      'Participate in outbound dynamic camps and group-based operational exercises.',
      'Build life-long professional trust, soft skills, and personal character.'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: <Monitor size={20} />,
    title: 'MacBook Neo',
    subtitle: 'Powering your learning with professional workstation gear.',
    bullets: [
      'Every student is equipped with high-performance MacBook workstation equipment.',
      'Pre-configured with essential developer tools, compilers, and sandbox runtimes.',
      'Native speed for mobile builds, complex calculations, design renders, and AI modeling.'
    ],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
  }
];

const WhyRaiseSmart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.wrs-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
    gsap.fromTo('.wrs-accordion-container',
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: '.wrs-accordion-container', start: 'top 85%' } }
    );
  }, { scope: sectionRef });

  return (
    <section className="wrs-section section-padding" id="why-raise-smart" ref={sectionRef}>
      <div className="container wrs-layout-container">
        <div className="wrs-header">
          <h2 className="section-title">Why Raise Smart <span className="text-gradient">School of Technology?</span></h2>
          <div className="wrs-title-indicator-line">
            <span className="dot pink"></span>
            <span className="dot red"></span>
            <span className="dot orange"></span>
            <span className="line"></span>
          </div>
        </div>

        {/* Desktop Accordion */}
        <div className="wrs-accordion-container desktop-only">
          {benefits.map((b, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                className={`wrs-accordion-panel ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                style={{ backgroundImage: `url(${b.image})` }}
              >
                {/* Visual overlay gradient */}
                <div className="wrs-panel-overlay"></div>

                {/* Collapsed Panel Strip */}
                {!isActive && (
                  <div className="wrs-panel-collapsed-strip">
                    <div className="wrs-collapsed-icon">{b.icon}</div>
                    <div className="wrs-collapsed-vertical-title">{b.title}</div>
                  </div>
                )}

                {/* Expanded Panel Content */}
                {isActive && (
                  <div className="wrs-panel-expanded-content">
                    <div className="wrs-expanded-glass-box">
                      <div className="wrs-expanded-icon-badge">{b.icon}</div>
                      <h3 className="wrs-expanded-title">{b.title}</h3>
                      <p className="wrs-expanded-subtitle">{b.subtitle}</p>

                      <ul className="wrs-expanded-bullets">
                        {b.bullets.map((bullet, bidx) => (
                          <li key={bidx} className="wrs-expanded-bullet-item">
                            <span className="wrs-bullet-dot"></span>
                            <span className="wrs-bullet-text">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion */}
        <div className="wrs-accordion-mobile mobile-only">
          {benefits.map((b, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={idx} className={`wrs-mobile-panel ${isActive ? 'active' : ''}`}>
                <button
                  className="wrs-mobile-panel-header"
                  onClick={() => setActiveIndex(isActive ? -1 : idx)}
                >
                  <div className="wrs-mobile-icon-title-group">
                    <span className="wrs-mobile-icon">{b.icon}</span>
                    <span className="wrs-mobile-title">{b.title}</span>
                  </div>
                  <ChevronRight size={18} className="wrs-mobile-arrow" />
                </button>

                {isActive && (
                  <div
                    className="wrs-mobile-panel-body"
                    style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url(${b.image})` }}
                  >
                    <div className="wrs-mobile-body-content">
                      <p className="wrs-mobile-subtitle">{b.subtitle}</p>
                      <ul className="wrs-mobile-bullets">
                        {b.bullets.map((bullet, bidx) => (
                          <li key={bidx} className="wrs-mobile-bullet-item">
                            <span className="wrs-bullet-dot"></span>
                            <span className="wrs-mobile-bullet-text">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRaiseSmart;