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
  Lightbulb,
  Cpu,
  Home,
  Scale,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Zap,
  Network,
  BookOpen,
  Handshake,
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

// STEMNet Divisions for "STEMNet in Action" section
const stemnetDivisions = [
  {
    icon: FlaskConical,
    name: "STEM Engagement Division",
    description: "Hands-on activities, robotics demos, expos, showcases, STEM breaks, arts + STEM, physical wellness integration.",
    color: "text-stem-green",
    bgColor: "from-stem-green/20 to-stem-green/10",
  },
  {
    icon: Briefcase,
    name: "Workforce Readiness Division",
    description: "Career exploration, credentials, certifications, job pathways, employer engagement, workforce training.",
    color: "text-blue",
    bgColor: "from-blue/20 to-blue/10",
  },
  {
    icon: Lightbulb,
    name: "Innovation & Entrepreneurship Division",
    description: "Startup showcases, innovation challenges, youth entrepreneurship, venture pathways.",
    color: "text-gold",
    bgColor: "from-gold/20 to-gold/10",
  },
  {
    icon: Cpu,
    name: "Digital + AI + Emerging Technology Division",
    description: "AI literacy, data science exposure, ethical AI conversations, community tech labs, future skills.",
    color: "text-stem-cyan",
    bgColor: "from-stem-cyan/20 to-stem-cyan/10",
  },
  {
    icon: Shield,
    name: "Veterans & ROTC Division",
    description: "Leadership development, service-to-STEM pathways, mentoring, team-based operations.",
    color: "text-red",
    bgColor: "from-red/20 to-red/10",
  },
  {
    icon: Home,
    name: "Housing & Community Division",
    description: "Place-based STEM activation, community stability, partnerships with housing authorities and anchors.",
    color: "text-stem-orange",
    bgColor: "from-stem-orange/20 to-stem-orange/10",
  },
  {
    icon: Scale,
    name: "Community & Equity Division",
    description: "Trust-centered design, transparency, accessibility, data & evaluation, community voice.",
    color: "text-navy",
    bgColor: "from-navy/20 to-navy/10",
  },
];

// Partner categories for "Ways Partners Show Up"
const partnerCategories = [
  {
    icon: BookOpen,
    name: "Education Partners",
    description: "Curriculum, student engagement, pathways",
    interest: "partner" as const,
    subject: "Education Partner Inquiry",
  },
  {
    icon: Briefcase,
    name: "Workforce & Employer Partners",
    description: "Hiring pipelines, credentials, training",
    interest: "partner" as const,
    subject: "Workforce Partner Inquiry",
  },
  {
    icon: Shield,
    name: "Veteran-Serving Organizations",
    description: "Leadership, mentoring, service pathways",
    interest: "partner" as const,
    subject: "Veteran Organization Inquiry",
  },
  {
    icon: Cpu,
    name: "Technology & Innovation Partners",
    description: "Demos, AI labs, tools, platforms",
    interest: "partner" as const,
    subject: "Technology Partner Inquiry",
  },
  {
    icon: Home,
    name: "Community & Housing Partners",
    description: "Resident engagement, place-based activation",
    interest: "partner" as const,
    subject: "Community Partner Inquiry",
  },
];

// Pathway steps
const pathwaySteps = [
  "Inspiration",
  "Participation", 
  "Credentials",
  "Careers",
  "Community Impact",
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
              <h2 className="text-xl md:text-2xl text-navy-dark font-medium mb-4">
                Where Community Meets Innovation
              </h2>
              {/* V2: Systems-level line */}
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed">
                A place-based STEM ecosystem connecting education, workforce, veterans, housing, and emerging technology—built with the community.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-xl">
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <CalendarModal
                  trigger={
                    <Button
                      size="lg"
                      className="bg-red hover:bg-red-dark text-white font-bold px-8 py-6 text-lg btn-lift"
                    >
                      Save the Date
                    </Button>
                  }
                />
                <Link href="#involve">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-6 text-lg btn-lift"
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

      {/* Trust / Proof Strip */}
      <section className="py-10 bg-navy text-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg md:text-xl lg:text-2xl font-medium">
            In collaboration with education, workforce, veteran, and community
            partners.
          </p>
          <p className="text-center text-sm mt-3 opacity-70">
            Powered by <strong>STEM Connect</strong> — our integration layer
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

      {/* V2: How This Expo Fits into the STEMNet Ecosystem */}
      <section
        id="ecosystem"
        ref={addToRefs}
        className="py-16 lg:py-24 bg-gradient-to-b from-white to-navy/5 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How This Expo Fits into the STEMNet Ecosystem
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Block */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The DC STEMNet Expo is a live, place-based activation of the STEMNet ecosystem—bringing together education, workforce, emerging technology, entrepreneurship, and community trust into one integrated experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each activity, panel, and demonstration aligns with one or more STEMNet divisions, ensuring pathways don&apos;t end at inspiration—but continue into credentials, careers, and community impact.
              </p>
            </div>

            {/* Right: Ecosystem Flow Visual */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy/10">
              <h3 className="text-lg font-bold text-navy mb-6 text-center">
                The STEMNet Pathway
              </h3>
              <div className="flex flex-col gap-3">
                {pathwaySteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm
                      ${index === 0 ? 'bg-stem-green' : ''}
                      ${index === 1 ? 'bg-blue' : ''}
                      ${index === 2 ? 'bg-gold' : ''}
                      ${index === 3 ? 'bg-red' : ''}
                      ${index === 4 ? 'bg-navy' : ''}
                    `}>
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-navy/5 rounded-lg px-4 py-3">
                      <span className="font-semibold text-navy">{step}</span>
                    </div>
                    {index < pathwaySteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-navy/30 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision Section */}
      <section
        id="mission"
        ref={addToRefs}
        className="py-16 lg:py-24 section-reveal"
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
                  STEMNet is a trust-centered community initiative designed to
                  empower students, families, and underserved populations
                  through STEM, workforce development, and emerging technology.
                  By bridging the gap between education and real-world
                  application, STEMNet creates opportunities for growth,
                  innovation, and community building.
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
                  A world where every community—regardless of zip code—has
                  equitable access to STEM education, mentorship, and career
                  pathways. STEMNet envisions thriving neighborhoods where
                  technology serves the people and innovation is driven by the
                  community.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center mt-8 text-lg font-medium text-navy">
            Trust-centered. Opportunity-driven. Built with the community.
          </p>
        </div>
      </section>

      {/* V2: STEMNet in Action at the Expo */}
      <section
        id="action"
        ref={addToRefs}
        className="py-16 lg:py-24 bg-navy/5 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              STEMNet in Action at the Expo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every division of the STEMNet framework comes alive at the Expo
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {stemnetDivisions.map((division, index) => (
                <AccordionItem
                  key={index}
                  value={`division-${index}`}
                  className="bg-white border rounded-xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${division.bgColor} flex items-center justify-center`}>
                        <division.icon className={`w-6 h-6 ${division.color}`} />
                      </div>
                      <span className="font-bold text-navy text-lg">
                        {division.name}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-16 text-muted-foreground">
                    {division.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* V2: What Makes STEMNet Different - STEM Connect Callout */}
      <section
        id="stem-connect"
        ref={addToRefs}
        className="py-12 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-navy to-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-8 h-8 text-gold" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  What Makes STEMNet Different
                </h3>
              </div>
              
              <p className="text-lg text-white/90 mb-6 max-w-3xl">
                STEMNet is not a collection of disconnected programs. Our Integration Layer—<strong className="text-gold">STEM Connect</strong>—ensures:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span>Cross-sector coordination</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span>Shared metrics and outcomes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span>Aligned storytelling and community trust</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span>Scalable models that cities and housing authorities can adopt</span>
                </div>
              </div>
            </div>
          </div>
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

      {/* V2: From Expo to Opportunity (Pathways) */}
      <section
        id="pathways"
        ref={addToRefs}
        className="py-16 lg:py-24 bg-gradient-to-b from-white to-navy/5 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              From Expo to Opportunity
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              STEMNet is designed so that inspiration leads to participation, participation leads to credentials, and credentials lead to careers and community impact.
            </p>
          </div>

          {/* Pathway Ladder */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
            {pathwaySteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <span className={`px-4 py-2 rounded-full font-bold text-sm md:text-base
                  ${index === 0 ? 'bg-stem-green text-white' : ''}
                  ${index === 1 ? 'bg-blue text-white' : ''}
                  ${index === 2 ? 'bg-gold text-white' : ''}
                  ${index === 3 ? 'bg-red text-white' : ''}
                  ${index === 4 ? 'bg-navy text-white' : ''}
                `}>
                  {step}
                </span>
                {index < pathwaySteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-navy/40 mx-1 md:mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Pathway Items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Rocket, text: "Post-expo STEM programs and clubs" },
              { icon: GraduationCap, text: "Workforce and credential pathways" },
              { icon: Shield, text: "Veteran and ROTC mentorship tracks" },
              { icon: Handshake, text: "Internships, apprenticeships, and employer connections" },
              { icon: Lightbulb, text: "Follow-on community innovation projects" },
            ].map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-navy-dark font-medium">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* V2: Ways Partners Show Up at the Expo */}
      <section
        id="partners"
        ref={addToRefs}
        className="py-16 lg:py-24 section-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Ways Partners Show Up at the Expo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the STEMNet ecosystem as a partner
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerCategories.map((partner, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy/10 to-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <partner.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{partner.description}</p>
                  <a
                    href={`mailto:stemnet.hsin.edu@gmail.com?subject=${encodeURIComponent(partner.subject)}`}
                  >
                    <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                      Partner Inquiry
                    </Button>
                  </a>
                </CardContent>
              </Card>
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
            <p className="text-xl text-red font-bold">Together We Build.</p>
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
                <CalendarModal
                  trigger={
                    <Button className="w-full bg-stem-green hover:bg-stem-green/90 text-white font-bold py-6 btn-lift">
                      Save the Date
                    </Button>
                  }
                />
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

            <div className="flex items-center gap-2 text-sm text-white/70">
              <Zap className="w-4 h-4 text-gold" />
              <span>Powered by <strong className="text-gold">STEM Connect</strong></span>
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
