export default function Contact() {
  return (
    <section id="contact" className="py-12 relative overflow-hidden text-center z-10 bg-transparent">
      <div className="container mx-auto px-6 max-w-3xl relative">
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4 text-text-heading">
          Establish Comms
        </h2>
        <p className="text-text-main text-lg mb-10 leading-relaxed">
          Currently actively building scalable web applications and open to exploring new engineering opportunities. Let's build something exceptional together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center justify-center bg-primary text-black font-semibold h-12 px-8 rounded-md hover:bg-primary/90 transition-colors"
          >
            Open Secure Channel
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-text-main font-mono border border-border-color bg-surface/80 backdrop-blur-sm h-12 px-6 rounded-md hover:bg-muted transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            &gt; FETCH RESUME.PDF
          </a>
        </div>
      </div>
    </section>
  );
}