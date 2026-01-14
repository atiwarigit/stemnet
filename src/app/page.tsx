"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CalendarModal from "@/components/CalendarModal";
import InvolvementForm from "@/components/InvolvementForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FlaskConical,
  Bot,
  Mic2,
  Music,
  Briefcase,
  Sparkles,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Ticket,
  Users,
  GraduationCap,
  Building2,
  Shield,
  Heart,
} from "lucide-react";

const whatToExpectItems = [
  {
    icon: FlaskConical,
    title: "Hands-on STEM Activities",
    description: "Interactive experiments and projects for all ages",
  },
  {
    icon: Bot,
    title: "Robotics & Technology Demos",
    description: "See cutting-edge tech and robotics in action",
  },
  {
    icon: Mic2,
    title: "Panels & Community Conversations",
    description: "Engage with experts and community leaders",
  },
  {
    icon: Music,
    title: "Live Music & Creative Expression",
    description: "Celebrate the intersection of STEM and arts",
  },
  {
    icon: Briefcase,
    title: "Workforce Development Training",
    description: "Career pathways and professional growth opportunities",
  },
  {
    icon: Sparkles,
    title: "Family-Friendly Energy",
    description: "Community-led activities for the whole family",
  },
];

const audienceItems = [
  { icon: GraduationCap, label: "Students & Youth" },
  { icon: Heart, label: "Families & Community Members" },
  { icon: Users, label: "Educators & Mentors" },
  { icon: Shield, label: "Veterans & ROTC-connected participants" },
  { icon: Building2, label: "Businesses & Workforce Partners" },
];

const faqItems = [
  {
    question: "Is this event really free?",
    answer:
      "Yes! The DC STEMNet Expo is completely free and open to the community. We believe in removing barriers to STEM education and opportunity.",
  },
  {
    question: "Who is it for?",
    answer:
      "The expo is for everyone—students, families, educators, veterans, workforce professionals, and anyone interested in STEM and community development.",
  },
  {
    question: "Where is UDC / how do I get there?",
    answer:
      "The University of the District of Columbia is located at 4200 Connecticut Ave NW, Washington, DC 20008. It's accessible by Metro (Van Ness-UDC station on the Red Line) and has parking available.",
  },
  {
    question: "Can organizations host a booth?",
    answer:
      "Absolutely! We welcome partners and vendors who want to showcase their work, offer demos, or connect with the community. Use the 'Get Involved' form to inquire about booth opportunities.",
  },
  {
    question: "Is this kid-friendly?",
    answer:
      "Yes! Many of our activities are designed specifically for children and families. It's a great opportunity to spark curiosity in young minds.",
  },
  {
    question: "How do volunteers/partners get approved?",
    answer:
      "Fill out our Get Involved form and our team will review your application. We'll reach out to discuss how you can best contribute to the event.",
  },
  {
    question: "Are there accessibility accommodations?",
    answer:
      "Yes, UDC is an accessible campus. If you have specific accommodation needs, please contact us at stemnet.hsin.edu@gmail.com and we'll ensure you have a great experience.",
  },
  {
    question: "How can I contact the organizers?",
    answer:
      "Email us at stemnet.hsin.edu@gmail.com for any questions about partnerships, volunteering, or event details.",
  },
];

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="event"
        className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 hero-pattern relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Message + Action */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4">
                DC STEMNet{" "}
                <span className="gradient-text">Expo</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-navy-dark font-medium mb-6">
                Where Community Meets Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Empowering students, families, and communities through STEM,
                workforce development, and emerging technology.
              </p>

              {/* Event Info Chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-red" />
                  <span className="text-sm font-medium text-navy-dark">
                    Hosted at <strong>UDC</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-red" />
                  <span className="text-sm font-medium text-navy-dark">
                    <strong>February 28</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-red" />
                  <span className="text-sm font-medium text-navy-dark">
                    <strong>12:00 PM – 6:00 PM</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-stem-green/10 px-4 py-2 rounded-full">
                  <Ticket className="w-4 h-4 text-stem-green" />
                  <span className="text-sm font-medium text-stem-green">
                    <strong>FREE</strong> Community Event
                  </span>
                </div>
              </div>

              {/* CTA Buttons - Mobile: Only Register, Desktop: All buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                {/* Register Now - Always visible */}
                <a
                  href="https://www.eventbrite.com/e/dc-stemnet-expo-test-tickets-123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-red hover:bg-red-dark text-white font-bold px-8 py-6 text-lg btn-lift"
                  >
                    Register Now
                  </Button>
                </a>
                {/* Save the Date - Desktop only */}
                <div className="hidden md:block">
                  <CalendarModal
                    trigger={
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-6 text-lg btn-lift"
                      >
                        Save the Date
                      </Button>
                    }
                  />
                </div>
                {/* Get Involved - Desktop only */}
                <Link href="#involve" className="hidden md:block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-stem-green text-stem-green hover:bg-stem-green hover:text-white font-bold px-8 py-6 text-lg btn-lift"
                  >
                    Get Involved
                  </Button>
                </Link>
              </div>

              {/* Contact Email */}
              <a
                href="mailto:stemnet.hsin.edu@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">stemnet.hsin.edu@gmail.com</span>
              </a>
            </div>

            {/* Right Column - Hero Visual */}
            <div className="relative animate-fade-in-up-delay-2">
              {/* Featured Event Badge */}
              <div className="text-center mb-4">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red to-gold text-white px-6 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-wider shadow-lg">
                  <span className="animate-pulse">⭐</span>
                  Upcoming Event
                  <span className="animate-pulse">⭐</span>
                </span>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/poster.png"
                  alt="DC STEMNet Expo - February 28th at UDC"
                  width={500}
                  height={700}
                  className="w-full max-w-lg mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium mb-6">
            In collaboration with education, workforce, veteran, and community
            partners.
          </p>
          
          {/* Partner Logos Placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            {/* Placeholder partner slots - will be updated periodically */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"
              >
                <span className="text-white/50 text-xs">Partner {i}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm mt-6 opacity-70">
            Partner logos updated periodically
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section
        id="expect"
        ref={addToRefs}
        className="py-16 lg:py-24 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the Power of STEM in Community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatToExpectItems.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-navy/10 bg-white"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy/10 to-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision Section */}
      <section
        id="mission"
        ref={addToRefs}
        className="py-16 lg:py-24 bg-gradient-to-b from-white to-navy/5 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="bg-white border-l-4 border-l-red">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-red rounded-full"></span>
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  STEMNet&apos;s mission is to co-create safe, trust-centered, and opportunity-driven pathways
                  that unite education, workforce development, innovative excellence, and community
                  leadership—empowering communities to envision and achieve prosperity through
                  collaborative revitalization and comprehensive community development.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="bg-white border-l-4 border-l-blue">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue rounded-full"></span>
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision communities where technology, education, and innovation are accessible to
                  all, ensuring residents advance alongside development rather than being displaced by
                  it—building long-term opportunity through collaboration and leadership.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center mt-8 text-lg font-medium text-navy">
            Trust-centered. Opportunity-driven. Built with the community.
          </p>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section
        id="audience"
        ref={addToRefs}
        className="py-16 lg:py-24 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Who Should Attend
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you care about the future of STEM and opportunity, this event
              is for you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {audienceItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border-2 border-navy/10 hover:border-navy/30 px-6 py-4 rounded-full transition-all hover:shadow-md"
              >
                <item.icon className="w-5 h-5 text-red" />
                <span className="font-medium text-navy-dark">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="involve"
        ref={addToRefs}
        className="py-16 lg:py-24 bg-gradient-to-b from-navy/5 to-white section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Get Involved
            </h2>
            <p className="text-xl text-red font-bold mb-4">Together We Build.</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a growing ecosystem connecting education, innovation, and workforce opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Attend Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-stem-green/20 to-stem-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Ticket className="w-10 h-10 text-stem-green" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Attend the Expo
                </h3>
                <p className="text-muted-foreground mb-6">
                  Free. Family-friendly. Hands-on.
                </p>
                <a
                  href="https://www.eventbrite.com/e/dc-stemnet-expo-test-tickets-123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-stem-green hover:bg-stem-green/90 text-white font-bold py-6 btn-lift">
                    Register Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Volunteer Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue/20 to-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-10 h-10 text-blue" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Volunteer or Mentor
                </h3>
                <p className="text-muted-foreground mb-6">
                  Help run activities, guide students, support demos.
                </p>
                <InvolvementForm
                  defaultInterest="volunteer"
                  trigger={
                    <Button className="w-full bg-blue hover:bg-blue-light text-white font-bold py-6 btn-lift">
                      Volunteer Interest
                    </Button>
                  }
                />
              </CardContent>
            </Card>

            {/* Partner Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Partner With STEMNet
                </h3>
                <p className="text-muted-foreground mb-6">
                  Bring a demo, sponsor a booth, offer workforce pathways.
                </p>
                <InvolvementForm
                  defaultInterest="partner"
                  trigger={
                    <Button className="w-full bg-gold hover:bg-gold-light text-white font-bold py-6 btn-lift">
                      Partner Inquiry
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section
        id="updates"
        ref={addToRefs}
        className="py-16 lg:py-24 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Updates
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Video - HBCUNY Classic */}
              <AccordionItem
                value="video-1"
                className="bg-white border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div>
                    <span className="text-xs font-medium text-red uppercase tracking-wide">
                      Video
                    </span>
                    <h3 className="text-lg font-bold text-navy mt-1">
                      STEM Expo - MetLife HBCUNY Classic
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/R7z8vcX9fmc"
                      title="STEM Expo - MetLife HBCUNY Classic"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    STEMNet participated in the MetLife HBCUNY Classic, bringing STEM
                    education and workforce development opportunities to
                    students and families.
                  </p>
                  <a
                    href="https://youtu.be/R7z8vcX9fmc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="text-blue hover:text-blue-light p-0 mt-4"
                    >
                      Watch on YouTube →
                    </Button>
                  </a>
                </AccordionContent>
              </AccordionItem>

              {/* VSU STEM Expo */}
              <AccordionItem
                value="press-1"
                className="bg-white border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div>
                    <span className="text-xs font-medium text-blue uppercase tracking-wide">
                      Press Coverage
                    </span>
                    <h3 className="text-lg font-bold text-navy mt-1">
                      VSU National STEM Day Expo (Nov 8, 2025)
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    In celebration of National STEM Day, STEMNet partnered with
                    Virginia State University to host an immersive expo
                    experience. Students explored robotics, AI demonstrations,
                    and connected with industry professionals about career
                    pathways in STEM fields.
                  </p>
                  <a
                    href="https://thevirginiastatesman.com/2043/news/national-stem-day-2025-delivers-successful-event/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="text-blue hover:text-blue-light p-0 mt-4"
                    >
                      Read Full Article →
                    </Button>
                  </a>
                </AccordionContent>
              </AccordionItem>

              {/* eDynamics STEM Expo */}
              <AccordionItem
                value="press-2"
                className="bg-white border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div>
                    <span className="text-xs font-medium text-stem-green uppercase tracking-wide">
                      Partner Feature
                    </span>
                    <h3 className="text-lg font-bold text-navy mt-1">
                      eDynamics: Bringing STEM Career Exploration to Hopewell Students
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    eDynamic Learning partnered with STEMNet to bring hands-on STEM 
                    career exploration opportunities to Hopewell area students, 
                    showcasing pathways in technology, engineering, and innovation.
                  </p>
                  <a
                    href="https://www.edynamiclearning.com/bringing-stem-career-exploration-hopewell-area-students/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="link"
                      className="text-blue hover:text-blue-light p-0 mt-4"
                    >
                      Read Full Article →
                    </Button>
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 bg-navy/5 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white border rounded-xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-navy">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={addToRefs}
        className="py-16 lg:py-24 section-reveal"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Email us for partnerships, volunteering, or event questions.
          </p>

          <a href="mailto:stemnet.hsin.edu@gmail.com">
            <Button
              size="lg"
              className="bg-navy hover:bg-navy-dark text-white font-bold px-10 py-6 text-lg btn-lift"
            >
              <Mail className="w-5 h-5 mr-2" />
              stemnet.hsin.edu@gmail.com
            </Button>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-t.png"
                alt="DC STEMNet Expo"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-bold">DC STEMNet Expo</p>
                <p className="text-sm text-white/70">
                  Where Community Meets Innovation
                </p>
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <Link
                href="#contact"
                className="text-white/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#updates"
                className="text-white/70 hover:text-white transition-colors"
              >
                Press
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} DC STEMNet Expo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Spacer for mobile bottom CTA bar */}
      <div className="h-20 lg:hidden"></div>
    </main>
  );
}
