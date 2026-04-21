import { Instagram, Linkedin, Youtube, Sparkles, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Interacto AI
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered career tools helping students build resumes, ace interviews,
              and grow into job-ready professionals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Platform</h3>
            <a
              href="https://app.interacto.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              app.interacto.co.in
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Interacto AI Solutions. All rights reserved.</p>
          <p>Made for students, by students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
