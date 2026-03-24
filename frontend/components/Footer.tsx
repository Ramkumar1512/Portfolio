"use client";

import React from "react";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border-color bg-background/50 backdrop-blur-md pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-text-heading mb-4">Establish Comms</h2>
            <p className="text-text-main max-w-md mb-6">
              Currently actively building scalable web applications and open to exploring new engineering opportunities. Let's build something exceptional together.
            </p>
            <a
              href="mailto:mosuriram12@yahoo.com"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black font-semibold h-12 px-8 rounded-md hover:bg-primary/90 transition-colors"
            >
              Open Secure Channel
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-3 bg-surface border border-border-color rounded-full text-text-main hover:text-primary hover:border-primary/50 transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-surface border border-border-color rounded-full text-text-main hover:text-secondary hover:border-secondary/50 transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mosuriram12@yahoo.com" className="p-3 bg-surface border border-border-color rounded-full text-text-main hover:text-emerald-500 hover:border-emerald-500/50 transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-border-color pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-main/80">
          <div className="flex items-center gap-2">
            <span className="text-primary font-mono text-sm">[</span>
            <span className="text-primary font-mono text-sm">]</span>
            <span>© {new Date().getFullYear()} Ram Kumar. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span>Code.</span>
            <span>Cloud.</span>
            <span className="text-primary">Intelligence.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
