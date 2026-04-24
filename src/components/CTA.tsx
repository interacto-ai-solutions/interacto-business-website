import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-primary p-8 md:p-16 text-center overflow-hidden shadow-lg">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
              Try It Yourself — It's Free
            </h2>
            <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of students already using Interacto AI to land interviews
              and build their dream careers.
            </p>
            <div className="flex justify-center pt-2">
              <Button
                size="lg"
                variant="secondary"
                className="text-base shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href="https://app.interacto.co.in/" target="_blank" rel="noopener noreferrer">
                  Go to Platform
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
