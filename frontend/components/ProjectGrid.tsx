"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { FormattedProject } from "@/lib/api";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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
      damping: 12,
    },
  },
};

interface ProjectGridProps {
  projects: FormattedProject[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="col-span-full py-12 text-center border border-dashed border-border-color rounded-xl bg-surface/30">
        <p className="text-text-main mb-4">No projects classified yet.</p>
        <p className="text-sm text-text-main/70">Connect the Django server to load mission data.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={itemVariants} className="h-full">
          <div className="h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 hover:border-primary/50 group rounded-xl border border-border-color bg-surface/30 p-6">
            <div className="mb-4">
              <div className="flex justify-between items-start mb-4">
                <FolderGit2 className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  {project.links.github && (
                    <a href={project.links.github} className="text-text-main hover:text-text-heading transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.external && (
                    <a href={project.links.external} className="text-text-main hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors mb-2 text-text-heading">{project.title}</h3>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-text-main mb-6">{project.description}</p>
            </div>
            <div className="flex items-center pt-0">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center rounded-full border border-border-color px-2.5 py-0.5 text-xs font-semibold font-mono text-text-main">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
