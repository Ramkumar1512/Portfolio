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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const EXPERIENCES = [
  {
    role: "Backend Developer",
    company: "Trade Brains, Bengaluru",
    date: "July 2025 - Present",
    points: [
      "Designed and developed scalable backend services for data-driven platforms using Django and PostgreSQL, supporting real-time workflows.",
      "Built asynchronous data pipelines using Celery and Pandas to ingest and synchronize large-scale datasets from external providers into MySQL.",
      "Optimized backend performance using query optimization, multithreading, and Redis caching, reducing API response times by ~40%.",
      "Developed secure authentication systems and backend modules for HRMS and reporting workflows.",
      "Integrated AI-powered features into production systems to enable intelligent data processing.",
    ],
  },
  {
    role: "AI Developer ",
    company: "Trade Brains, Bengaluru",
    date: "March 2025 - July 2025",
    points: [
      "Processed and structured data from 1800+ research PDFs to build domain-specific datasets for LLM training.",

      "Fine-tuned LLaMA-based models using HuggingFace Transformers with GPU acceleration for automated report generation.",
      "Implemented tokenization, document chunking, and context window optimization for long-form documents.",
      "Designed prompt engineering strategies to improve response accuracy and consistency.",
      "Deployed fine-tuned models as backend services for real-time inference.",
    ],
  },

  // {
  //   role: "Data Analyst",
  //   company: "DXC Technology, Bengaluru",
  //   date: "March 2022 - February 2025",
  //   points: [
  //     "Processed and structured data from 1800+ research PDFs using data extraction and cleaning techniques to create analysis-ready datasets.",
  //     "Performed exploratory data analysis (EDA) to identify trends, patterns, and insights from large, unstructured datasets.",
  //     "Developed and maintained data pipelines to transform raw data into structured formats for reporting and analysis.",
  //     "Utilized SQL and Python (Pandas, NumPy) to query, manipulate, and analyze datasets efficiently.",
  //     "Created dashboards and visualizations using Power BI/Tableau to communicate insights to stakeholders.",
  //     "Collaborated with cross-functional teams to gather requirements and deliver data-driven solutions.",
  //     "Implemented data validation and quality checks to ensure accuracy and consistency of datasets.",
  //     "Automated reporting workflows to reduce manual effort and improve turnaround time."
  //   ]
  // },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">Mission Log</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-px bg-border-color" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface border-border-color group-hover:bg-primary group-hover:border-primary/30 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgb(var(--primary)/0.5)] transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-text-main rounded-full group-hover:bg-background transition-colors duration-300"></div>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text-heading">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-text-main font-mono bg-surface px-3 py-1 rounded-full border border-border-color w-fit">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-2 text-text-main text-sm">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
