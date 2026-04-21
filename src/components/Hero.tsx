import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Career Tools</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Become Job-Ready with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Career Tools
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Build a winning resume, prepare smarter for interviews, and develop the skills
              you need to land your first job — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="text-base shadow-md hover:shadow-lg transition-all" asChild>
                <a href="https://app.interacto.co.in/" target="_blank" rel="noopener noreferrer">
                  Try Free Tools
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="https://app.interacto.co.in/" target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="w-4 h-4" />
                  Watch Demo
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4">
              <div>
                <div className="text-2xl md:text-3xl font-bold">10k+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Students</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold">95%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold">4.8★</div>
                <div className="text-xs md:text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroIllustration}
                alt="Student using Interacto AI career tools"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 md:w-72 h-48 md:h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 md:w-72 h-48 md:h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
