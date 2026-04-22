import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Interacto AI useful for colleges and placement cells?",
    answer: "Yes. It helps colleges support resume improvement, interview preparation, and employability readiness for students at scale.",
  },
  {
    question: "Can students use the platform for free?",
    answer: "Students can start with the free tools on the Interacto AI platform and explore career-readiness features directly.",
  },
  {
    question: "What does the ATS Resume Improviser do?",
    answer: "It reviews resume structure, keywords, and formatting to help students improve compatibility with Applicant Tracking Systems.",
  },
  {
    question: "Can it generate interview questions from resumes?",
    answer: "Yes. The question bank generator creates role-focused questions based on a student's resume and target job profile.",
  },
  {
    question: "Is Mock Interview available?",
    answer: "Mock Interview is planned as a platform feature to help students practice realistic interviews with guided AI feedback.",
  },
  {
    question: "How can an institution partner with Interacto AI?",
    answer: "Faculty members, placement officers, and institutions can use the contact form to share their requirements and request a conversation.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Quick answers for students, faculty members, professionals, and placement teams.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto reveal">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-border/70">
              <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
