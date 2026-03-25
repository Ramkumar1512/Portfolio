"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const SKILLS = [
  { category: "Languages", items: ["Python", "SQL", "Golang", "C++"] },
  { category: "Frameworks", items: ["Django", "DRF", "Flask", "FastAPI"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"] },
  { category: "Backend & Systems", items: ["API Architecture", "Async Processing", "Caching", "DB Optimization"] },
  { category: "AI / ML", items: ["LLaMA Fine-Tuning", "HuggingFace", "NLP", "Prompt Engineering", "RAG", "CNN"] },
  { category: "Tools", items: ["Git", "Linux", "Postman", "CUDA"] },
  { category: "Domains", items: ["AI Systems", "Data Pipelines", "Backend Engineering", "Geospatial Data"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">Systems Inventory</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

              <h3 className="text-xl font-bold text-text-heading mb-6 relative z-10">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3 relative z-10 text-text-main">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                    <span className="group-hover:text-text-heading transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
