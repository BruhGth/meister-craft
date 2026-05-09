import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Award, CheckCircle2, Paintbrush, Home, Building2, Wallpaper, Sparkles, Phone } from "lucide-react";
import heroImg from "@/assets/hero-painter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meister Vogel — Malermeister & Lackierer in Berlin" },
      { name: "description", content: "Meisterhafte Malerarbeiten, Fassadengestaltung und Lackierungen vom zertifizierten Meisterbetrieb. Sauberes Arbeiten, faire Preise, garantierte Qualität." },
      { property: "og:title", content: "Meister Vogel — Malermeister & Lackierer" },
      { property: "og:description", content: "Hochwertige Malerarbeiten vom Meisterbetrieb in Berlin." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Home, title: "Innenanstrich", desc: "Wohnräume, Decken und Wände in perfekter Ausführung." },
  { icon: Building2, title: "Fassadengestaltung", desc: "Wetterfeste Fassaden mit langlebigem Schutz." },
  { icon: Wallpaper, title: "Tapezierarbeiten", desc: "Klassische und moderne Tapeten, präzise verlegt." },
  { icon: Sparkles, title: "Lackierungen", desc: "Hochwertige Lackoberflächen für Holz und Metall." },
];

function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Malermeister bei der Arbeit" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-32 lg:pt-40 lg:pb-44">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
            <Award className="h-3.5 w-3.5 text-accent" /> Meisterbetrieb seit 1987
          </span>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Meisterhafte Malerarbeiten<br />
            <span className="text-accent">für Ihr Zuhause</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Qualität, die man sieht. Verlässlichkeit, auf die Sie zählen können. Vom ersten Pinselstrich bis zur sauberen Übergabe.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              Jetzt Angebot anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3">
          {[
            { k: "37+", v: "Jahre Erfahrung" },
            { k: "1.200+", v: "Zufriedene Kunden" },
            { k: "100%", v: "Meisterqualität" },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-semibold text-primary">{s.k}</span>
              <span className="text-sm text-muted-foreground">{s.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leistungen</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Handwerk in seiner schönsten Form</h2>
          </div>
          <Link to="/leistungen" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Alle Leistungen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground transition-all">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Warum Meister Vogel</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Tradition. Präzision. Vertrauen.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Seit drei Generationen stehen wir für saubere Ausführung, transparente Preise und termingerechte Fertigstellung. Jeder Auftrag wird vom Meister persönlich begleitet.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "Eingetragener Meisterbetrieb der Handwerkskammer",
                "Festpreisgarantie ohne versteckte Kosten",
                "Saubere Baustellen, pünktliche Übergabe",
                "5 Jahre Garantie auf alle Arbeiten",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="tel:+4930123456789" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:-translate-y-0.5 transition-transform">
                <Phone className="h-4 w-4" /> Direkt anrufen
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-accent)] opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/5] bg-[image:var(--gradient-accent)] relative">
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-primary-foreground">
                  <Paintbrush className="h-10 w-10 mb-4 opacity-80" />
                  <p className="font-display text-2xl font-semibold leading-snug">"Ein gutes Handwerk erkennt man an den Details."</p>
                  <p className="mt-3 text-sm opacity-90">— Markus Vogel, Malermeister</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-background sm:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold sm:text-5xl">Bereit für frische Farbe?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-background/70">Fordern Sie ein unverbindliches Angebot an — wir melden uns innerhalb von 24 Stunden.</p>
          <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-transform">
            Jetzt Angebot anfragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
