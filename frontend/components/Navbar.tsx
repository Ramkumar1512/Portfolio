"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border-color" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1 text-text-heading font-bold text-xl tracking-tighter group">
          <span className="text-primary font-mono">[</span>
          <span className="text-primary">M.RAM</span>
          <span className="text-primary font-mono">]</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "#home" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-text-main hover:text-text-heading transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            >
              Initialize Contact
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}