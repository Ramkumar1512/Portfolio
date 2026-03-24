import React from "react";
import { fetchProjects } from "@/lib/api";
import ProjectGrid from "./ProjectGrid";

export default async function ProjectsSection() {
  const projects = await fetchProjects();

  return (
    <section id="projects" className="py-12 relative bg-surface/20">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-2">Declassified Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
