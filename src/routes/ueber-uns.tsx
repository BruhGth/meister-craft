import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, GraduationCap, Wand2, Sparkles, Palette, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Raumgeschneidert" },
      { name: "description", content: "Raumgeschneidert ist der Malermeisterbetrieb von Lars Schneider in Fellbach — Innenraumgestaltung mit handwerklicher Präzision." },
      { property: "og:title", content: "Über uns — Raumgeschneidert" },
      { property: "og:description", content: "Handwerk und Gestaltung aus einer Hand." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Meisterbetrieb", desc: "Fundiertes handwerkliches Wissen und fachgerechte Ausführung." },
  { icon: GraduationCap, title: "Staatlich geprüfter Gestalter", desc: "Gestalterischer Anspruch zusätzlich zum klassischen Handwerk." },
  { icon: Wand2, title: "Individuelle Beratung", desc: "Nicht einfach eine Standardfarbe auswählen, sondern gemeinsam eine passende Lösung entwickeln." },
  { icon: Sparkles, title: "Weiterbildung", desc: "Bereits umfangreiche Hersteller- und Technikseminare besucht." },
  { icon: Palette, title: "Liebe zum Detail", desc: "Besonderer Anspruch an Oberfläche, Übergänge und Ausführung." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Über uns</span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Handwerk trifft<br /><span className="text-primary">Gestaltung</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Raumgeschneidert ist der Malermeisterbetrieb von Lars Schneider in Fellbach. Der Anspruch:
              Räume nicht nur streichen, sondern gestalten — mit handwerklicher Präzision und einem Blick
              für Details, der über den klassischen Anstrich hinausgeht.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-accent)] opacity-15 blur-2xl" />
            <div className="relative flex aspect-square w-full flex-col items-center justify-center rounded-3xl border border-border bg-[image:var(--gradient-accent)] p-10 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
              <Palette className="h-12 w-12 opacity-90" />
              <p className="mt-6 font-display text-2xl font-semibold leading-snug">Räume mit Charakter</p>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Handwerk + Gestaltung + individuelle Raumverwandlung
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Warum Raumgeschneidert</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Worauf Sie sich verlassen können</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="font-display text-3xl font-semibold leading-snug sm:text-4xl">
            „Ein Raum verändert sich nicht durch Farbe allein — sondern durch das Gespür für Details.“
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Lars Schneider · Malermeister &amp; staatl. geprüfter Gestalter
          </p>
          <Link to="/kontakt" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background hover:-translate-y-0.5 transition-transform">
            Lernen Sie uns kennen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
