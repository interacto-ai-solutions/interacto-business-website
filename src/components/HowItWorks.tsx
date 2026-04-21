import { Upload, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Resume",
    description: "Add your existing resume in seconds. Our AI reads your skills, experience, and goals.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Get AI Insights & Questions",
    description: "Receive instant resume feedback and a personalized interview question bank for your target role.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Improve & Get Job-Ready",
    description: "Apply changes, practice answers, and walk into interviews with confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Three simple steps to start your career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/60 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-4 left-6 text-5xl font-bold text-primary/10 select-none">
                {step.number}
              </div>
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
