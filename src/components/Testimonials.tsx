import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Tech CSE Student",
    college: "VIT, Vellore",
    initials: "PS",
    feedback:
      "Got more interview calls after fixing my resume here. The ATS score really helped me understand what recruiters actually look for.",
  },
  {
    name: "Rahul Verma",
    role: "MCA Final Year",
    college: "Pune University",
    initials: "RV",
    feedback:
      "The question bank was super accurate to my role. I felt prepared walking into my TCS interview — and I cleared it!",
  },
  {
    name: "Ananya Iyer",
    role: "Software Engineer",
    college: "NIT Trichy alumna",
    initials: "AI",
    feedback:
      "As a fresher, the soft-skill tools boosted my confidence. Highly recommend Interacto to every student starting their job hunt.",
  },
  {
    name: "Aditya Patel",
    role: "B.E. IT Student",
    college: "DJ Sanghvi College, Mumbai",
    initials: "AP",
    feedback:
      "My resume went from generic to standout in one evening. Got shortlisted for 3 internships the same week.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Loved by{" "}
            <span className="text-gradient">Students Across India</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Real stories from students who landed real opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="group hover-lift border-border/60 hover:border-primary/40 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed flex-1">
                  “{t.feedback}”
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {t.role} · {t.college}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
