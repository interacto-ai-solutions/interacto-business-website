import { Instagram, Linkedin, Youtube, Sparkles, ExternalLink, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Interacto <span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI-powered career tools helping students build resumes, ace interviews,
              and grow into job-ready professionals.
            </p>
            <div className="flex items-start gap-2 text-xs text-muted-foreground pt-1">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>Registered as <strong className="text-foreground/80">Interacto-AI Solutions LLP</strong></span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://app.interacto.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors story-link"
                >
                  app.interacto.co.in
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Get tips, updates, and student success stories on our social channels.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Interacto-AI Solutions LLP. All rights reserved.</p>
          <p>Made for students, by students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
