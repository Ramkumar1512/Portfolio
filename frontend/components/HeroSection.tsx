"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glow effects with subtle pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-primary font-mono mb-6"
          >
            <span>[ System Status: Online & Ready ]</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight whitespace-pre-wrap tracking-tighter"
          >
            Building Scalable Backend Systems & <br />
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              AI-Powered Platforms.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-main mb-10 max-w-2xl leading-relaxed"
          >
            I&apos;m <span className="text-text-heading font-semibold">Ram Kumar</span>, a Backend & AI Engineer with 1+ year of experience building scalable data systems and AI-powered applications using Python and Django. Experienced in Retrieval-Augmented Generation (RAG), LLM fine-tuning, and large-scale data processing. Passionate about applying AI to real-world problems and exploring data-driven insights in emerging domains like earth observation and geospatial intelligence.

          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black font-semibold h-12 px-8 rounded-md hover:bg-primary/90 transition-colors"
            >
              View Operations <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-border-color bg-surface/50 text-text-heading font-medium h-12 px-8 rounded-md hover:bg-muted transition-colors"
            >
              Initialize Contact
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-text-main font-mono hover:text-text-heading transition-colors h-12 px-4"
            >
              <Download className="w-4 h-4" />
              &gt; FETCH RESUME.PDF
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
