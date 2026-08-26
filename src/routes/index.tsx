import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ReferenceCarousel } from "@/components/ReferenceCarousel";
import { services } from "@/lib/services";
import { ArrowRight, Award, GraduationCap, Sparkles, Wand2, Phone, Palette } from "lucide-react";
import heroImg from "@/assets/ref-living-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raumgeschneidert — Innenraumgestaltung & Malermeisterbetrieb Fellbach" },
      {
        name: "description",
        content:
          "Hochwertige Innenraumgestaltung mit handwerklicher Präzision: Treppenmodernisierung, exklusive Wandgestaltung, Lackierungen und klassische Malerarbeiten aus Fellbach.",
      },
      { property: "og:title", content: "Raumgeschneidert — Räume mit Charakter" },
      { property: "og:description", content: "Innenraumgestaltung mit handwerklicher Präzision und gestalterischem Anspruch." },
    ],
  }),
  component: HomePage,
});

const trustPoints = [
  { icon: Award, label: "Meisterbetrieb" },
  { icon: GraduationCap, label: "Staatlich geprüfter Gestalter" },
  { icon: Sparkles, label: "Herstellerseminare & Weiterbildungen" },
  { icon: Wand2, label: "Individuelle Raumgestaltung" },
];

const whyUs = [
  { icon: Award, title: "Meisterbetrieb", desc: "Fundiertes handwerkliches Wissen und fachgerechte Ausführung." },
  { icon: GraduationCap, title: "Staatlich geprüfter Gestalter", desc: "Gestalterischer Anspruch zusätzlich zum klassischen Handwerk." },
  { icon: Wand2, title: "Individuelle Beratung", desc: "Nicht einfach eine Standardfarbe auswählen, sondern gemeinsam eine passende Lösung entwickeln." },
  { icon: Sparkles, title: "Weiterbildung", desc: "Bereits umfangreiche Hersteller- und Technikseminare besucht." },
  { icon: Palette, title: "Liebe zum Detail", desc: "Besonderer Anspruch an Oberfläche, Übergänge und Ausführung." },
];

function HomePage() {
  const FeaturedIcon = services[0].icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Beispielbild: hochwertig gestalteter Wohnraum" className="h-full w-full object-cover" width={1280} height={896} />
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-32 lg:pt-40 lg:pb-44">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
            <Award className="h-3.5 w-3.5 text-accent" /> Meisterbetrieb für Innenraumgestaltung
          </span>
          <h1 className="mt-8 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Räume mit <span className="text-accent">Charakter.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Hochwertige Innenraumgestaltung mit handwerklicher Präzision und gestalterischem Anspruch — von der Treppenmodernisierung bis zur exklusiven Wandgestaltung.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/referenzen"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              Projekte entdecken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10"
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-foreground">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leistungen</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Gestaltung, die Räume verändert</h2>
          </div>
          <Link to="/leistungen" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Alle Leistungen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Link
            to="/leistungen"
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-[image:var(--gradient-accent)] p-6 text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-1 sm:p-8 lg:col-span-2 lg:row-span-1"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">{services[0].number}</span>
            <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <FeaturedIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 break-words font-display text-xl font-semibold hyphens-auto sm:text-2xl">{services[0].title}</h3>
            <p className="mt-2 text-sm font-medium text-primary-foreground/90">{services[0].tagline}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/75">{services[0].desc}</p>
          </Link>

          {services.slice(1, 3).map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.number}</span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground transition-all">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 break-words font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
            </div>
          ))}

          {services.slice(3).map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.number}</span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground transition-all">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 break-words font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treppenmodernisierung spotlight + Raumverwandlungen */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Projekte</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Raumverwandlungen</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            „Eine neue Treppe, ohne die alte komplett auszutauschen.“ Bestehende Treppen können durch eine
            individuell angefertigte Oberflächenlösung komplett neu gestaltet werden — so entsteht aus einer
            gewöhnlichen oder veralteten Treppe ein moderner Blickfang.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Die beiden Treppenmodernisierungen zeigen unsere eigenen, abgeschlossenen Projekte.
            Die übrigen Bilder sind aktuell Beispiel-/Inspirationsbilder und zeigen keine
            abgeschlossenen Raumgeschneidert-Projekte — echte Projektfotos folgen dort nach und nach.
          </p>
        </div>

        <div className="mt-14">
          <ReferenceCarousel />
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Warum Raumgeschneidert</span>
            <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Handwerk mit gestalterischem Anspruch</h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-soft)]">
            <p className="max-w-2xl font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              „Ein Raum verändert sich nicht durch Farbe allein — sondern durch das Gespür für Details.“
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Lars Schneider · Malermeister &amp; staatl. geprüfter Gestalter
            </p>
            <a href="tel:+491762098856" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:-translate-y-0.5 transition-transform">
              <Phone className="h-4 w-4" /> Direkt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-background sm:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold sm:text-5xl">Bereit, Ihren Raum zu verwandeln?</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-background/70">
            Fordern Sie eine unverbindliche Beratung an — wir sprechen gemeinsam über Ihre Räume und Möglichkeiten.
          </p>
          <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-transform">
            Beratung anfragen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
