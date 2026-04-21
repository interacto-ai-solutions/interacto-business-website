import { FileCheck2, ListChecks, Video, MessagesSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: FileCheck2,
    title: "ATS Resume Improviser",
    description:
      "Optimize your resume for Applicant Tracking Systems. Get instant scoring, keyword suggestions, and formatting fixes that help you get shortlisted.",
  },
  {
    icon: ListChecks,
    title: "Question Bank Generator",
    description:
      "Generate role-based interview questions tailored to your resume and target job — from technical rounds to HR scenarios.",
  },
  {
    icon: Video,
    title: "Mock Interviews",
    description:
      "Practice realistic interview sessions with AI-driven feedback on your answers, tone, and confidence.",
    badge: "Coming Soon",
  },
  {
    icon: MessagesSquare,
    title: "Interpersonal Skill Tools",
    description:
      "Build communication, confidence, and soft skills through guided exercises designed for early-career success.",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Everything You Need to{" "}
            <span className="text-gradient">Get Hired</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Smart tools made for students — practical, fast, and built to deliver real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative hover-lift border-border/60 hover:border-primary/40 reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  {feature.badge && (
                    <Badge variant="secondary" className="text-xs">{feature.badge}</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
