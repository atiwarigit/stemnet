"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Event", href: "#event" },
  { label: "What to Expect", href: "#expect" },
  { label: "Mission", href: "#mission" },
  { label: "Who Should Attend", href: "#audience" },
  { label: "Get Involved", href: "#involve" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo-t.png"
              alt="DC STEMNet Expo"
              width={50}
              height={50}
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <span className="hidden sm:block font-bold text-navy text-lg">
              DC STEMNet
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-navy-dark hover:text-blue transition-colors rounded-md hover:bg-navy/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="#event">
              <Button className="bg-red hover:bg-red-dark text-white btn-lift font-semibold">
                Save the Date
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-navy" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/logo-t.png"
                    alt="DC STEMNet Expo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="px-4 py-3 text-lg font-medium text-navy-dark hover:text-blue hover:bg-navy/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <SheetClose asChild>
                    <Link href="#event">
                      <Button className="w-full bg-red hover:bg-red-dark text-white font-semibold py-6">
                        Save the Date
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#involve">
                      <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white font-semibold py-6">
                        Get Involved
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 flex gap-2">
        <Link href="#event" className="flex-1">
          <Button className="w-full bg-red hover:bg-red-dark text-white font-semibold">
            Save the Date
          </Button>
        </Link>
        <Link href="#involve" className="flex-1">
          <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white font-semibold">
            Get Involved
          </Button>
        </Link>
      </div>
    </>
  );
}

