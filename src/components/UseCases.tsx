import { BriefcaseBusiness, ClipboardCheck, GraduationCap, UserRoundCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    icon: GraduationCap,
    title: "For Students",
    description: "Improve resumes, practice role-based interviews, and build confidence before placements.",
  },
  {
    icon: ClipboardCheck,
    title: "For Faculty",
    description: "Guide students with structured career readiness tools that are easy to introduce in sessions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "For Placement Cells",
    description: "Prepare batches for recruitment drives with resume quality checks and interview preparation support.",
  },
  {
    icon: UserRoundCheck,
    title: "For Early-Career Professionals",
    description: "Upgrade resumes, prepare for role changes, and sharpen communication for interviews.",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Career Tools for Every <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Designed for students, faculty teams, placement departments, and professionals moving into better roles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {useCases.map((item, index) => (
            <Card
              key={item.title}
              className="reveal group border-border/60 hover:border-primary/40 hover-lift"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
