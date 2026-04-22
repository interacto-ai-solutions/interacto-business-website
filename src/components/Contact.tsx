import { FormEvent, useState } from "react";
import { MessageSquare, PhoneCall, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().regex(/^[+]?[(]?[0-9][0-9\s().-]{7,18}$/, "Enter a valid phone number"),
  organization: z.string().trim().min(2, "Enter your institution or organization").max(140, "Organization name is too long"),
  role: z.string().trim().min(1, "Select your role"),
  message: z.string().trim().min(10, "Please share a few more details").max(1000, "Message is too long"),
});

type EnquiryForm = z.infer<typeof enquirySchema>;
type EnquiryErrors = Partial<Record<keyof EnquiryForm, string>>;

const initialForm: EnquiryForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  role: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof EnquiryForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = enquirySchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: EnquiryErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof EnquiryForm;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setForm(initialForm);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div className="reveal space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <MessageSquare className="h-4 w-4" />
              Contact / Partner With Us
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Want to bring Interacto AI to your college?
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Share your requirements and our team will connect with you for workshops, placement preparation, or institutional collaboration.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="https://app.interacto.co.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <PhoneCall className="h-4 w-4 text-primary" />
                Request a callback through the platform
              </a>
            </div>
          </div>

          <Card className="reveal border-border/60 shadow-md">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="space-y-2 text-sm font-medium">
                    Full name
                    <Input value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" aria-invalid={Boolean(errors.name)} />
                    {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Email
                    <Input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="name@example.com" aria-invalid={Boolean(errors.email)} />
                    {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Phone number
                    <Input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+91 98765 43210" aria-invalid={Boolean(errors.phone)} />
                    {errors.phone && <span className="text-xs text-destructive">{errors.phone}</span>}
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Institution / Organization
                    <Input value={form.organization} onChange={(event) => updateField("organization", event.target.value)} placeholder="College or company" aria-invalid={Boolean(errors.organization)} />
                    {errors.organization && <span className="text-xs text-destructive">{errors.organization}</span>}
                  </label>
                </div>

                <label className="space-y-2 text-sm font-medium block">
                  Role
                  <select
                    value={form.role}
                    onChange={(event) => updateField("role", event.target.value)}
                    aria-invalid={Boolean(errors.role)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select role</option>
                    <option value="Student">Student</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Placement Officer">Placement Officer</option>
                    <option value="Professional">Professional</option>
                  </select>
                  {errors.role && <span className="text-xs text-destructive">{errors.role}</span>}
                </label>

                <label className="space-y-2 text-sm font-medium block">
                  Message
                  <textarea
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Tell us how we can help your students or team."
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
                </label>

                {submitted && (
                  <p className="rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-primary">
                    Thanks for sharing your details. The enquiry form is ready for backend/email integration.
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Enquiry
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
