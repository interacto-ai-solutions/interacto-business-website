import { CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";

const reasons = [
  "AI-powered resume feedback for ATS-friendly improvements",
  "Role-based interview preparation built around career goals",
  "Simple, student-friendly experience with professional outcomes",
  "Scalable for colleges, placement cells, and training programs",
  "Practical tools focused on confidence, interviews, and employability",
  "Built by Interacto-AI Solutions LLP for career readiness in India",
];

const WhyChooseUs = () => {
  return (
    <section id="why-interacto" className="py-20 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div className="reveal space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              Why Interacto AI
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Professional career preparation without making it complicated
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              A focused platform for improving placement readiness, interview confidence, and employability outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="reveal rounded-xl border border-border/60 bg-card p-5 shadow-sm hover-lift"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-foreground/90">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14">
          {[
            { icon: Sparkles, label: "Designed for Indian students and placement preparation" },
            { icon: Zap, label: "Suitable for campus training programs" },
            { icon: ShieldCheck, label: "Built by Interacto-AI Solutions LLP" },
          ].map((proof, index) => (
            <div
              key={proof.label}
              className="reveal rounded-xl bg-background border border-border/60 p-5 flex items-center gap-3"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <proof.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">{proof.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
