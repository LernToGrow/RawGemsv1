import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const contactDetails = [
  { Icon: Phone, label: "+91 7709 985 032" },
  { Icon: Phone, label: "+91 7709 832167" },
  { Icon: Mail, label: "rawgems.in@gamil.com" },
  {
    Icon: MapPin,
    label: "104, Maple Heights, Arera Colony, Bhopal, Madhya Pradesh 462016, India",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-primary/5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Build Something{" "}
            <span className="text-primary">Amazing?</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Let&apos;s discuss your project and turn your ideas into powerful
            digital solutions.
          </p>
          <div className="mt-8 space-y-4">
            {contactDetails.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* TODO: wire this form up to a real backend / email service */}
        <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <form>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
              Full Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
              Email Address
              <input
                type="email"
                placeholder="you@company.com"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </label>
          </div>
          <label className="mt-5 flex flex-col gap-1.5 text-sm font-medium text-foreground">
            Phone Number
            <input
              type="tel"
              placeholder="Your phone number"
              className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </label>
          <label className="mt-5 flex flex-col gap-1.5 text-sm font-medium text-foreground">
            Your Message
            <textarea
              rows={4}
              placeholder="Tell us about your project"
              className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Send Inquiry →
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  );
}
