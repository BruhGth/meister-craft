import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendContactRequest } from "@/lib/contact-server-fn";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Raumgeschneidert" },
      { name: "description", content: "Kontaktieren Sie Raumgeschneidert für eine unverbindliche Beratung. Telefon, E-Mail oder über das Formular." },
      { property: "og:title", content: "Kontakt — Raumgeschneidert" },
      { property: "og:description", content: "Jetzt Beratung anfragen." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = new FormData(e.currentTarget);

    // Honeypot: real visitors never fill this hidden field, bots often do.
    if (String(form.get("website") ?? "")) {
      setSending(false);
      setSent(true);
      return;
    }

    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? "") || undefined,
      message: String(form.get("message") ?? ""),
    };

    try {
      await sendContactRequest({ data });
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Kontakt</span>
          <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">Lassen Sie uns sprechen.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Egal ob kleine Renovierung oder größeres Gestaltungsprojekt — wir freuen uns auf Ihre Anfrage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold">Direkter Draht</h2>
            <p className="mt-2 text-sm text-muted-foreground">Persönliche Beratung — kostenlos und unverbindlich.</p>

            <div className="mt-8 space-y-5">
              {[
                { icon: Phone, label: "Telefon", val: "0176 2098856", href: "tel:+491762098856" },
                { icon: Mail, label: "E-Mail", val: "info@raumgeschneidert.de", href: "mailto:info@raumgeschneidert.de" },
                { icon: MapPin, label: "Adresse", val: "Hofmauerweg 19, 70734 Fellbach" },
                { icon: Clock, label: "Erreichbarkeit", val: "Nach Vereinbarung" },
              ].map((c) => {
                const Inner = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="mt-0.5 text-base font-medium text-foreground">{c.val}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="rounded-2xl border border-border bg-card p-5">{Inner}</div>
                );
              })}
            </div>

            <a href="tel:+491762098856" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-transform">
              <Phone className="h-4 w-4" /> Jetzt anrufen
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Vielen Dank!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Ihre Anfrage ist bei uns eingegangen. Wir melden uns bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl font-semibold">Angebot anfragen</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="E-Mail" name="email" type="email" required />
                  </div>
                  <Field label="Telefon (optional)" name="phone" type="tel" />
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">Ihre Nachricht</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Beschreiben Sie Ihr Projekt — Räume, Fläche, gewünschter Termin..."
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  {error && (
                    <div className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                  >
                    {sending ? (
                      <>
                        Wird gesendet <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Anfrage senden <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground">Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
