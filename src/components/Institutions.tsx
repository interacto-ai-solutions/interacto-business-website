import { Building2, GraduationCap, LineChart, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const institutionBenefits = [
  {
    icon: GraduationCap,
    title: "Placement readiness at scale",
    description: "Help students improve resumes, practice interviews, and prepare before campus recruitment drives.",
  },
  {
    icon: LineChart,
    title: "Clearer skill-gap signals",
    description: "Support faculty and career teams with structured insights students can act on quickly.",
  },
  {
    icon: UsersRound,
    title: "Useful for workshops",
    description: "Bring AI-assisted career preparation into employability sessions, bootcamps, and training programs.",
  },
];

const Institutions = () => {
  return (
    <section id="institutions" className="py-20 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div className="reveal space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Building2 className="h-4 w-4" />
              For Institutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Built for Colleges, Placement Cells & Career Development Teams
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              Interacto AI helps institutions prepare students for real hiring conversations with practical, AI-powered career tools.
            </p>
          </div>

          <div className="grid gap-5">
            {institutionBenefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="reveal border-border/60 hover:border-primary/40 hover-lift"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center shadow-sm">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutions;
