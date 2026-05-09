import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Malermeister Vogel" },
      { name: "description", content: "Seit 1987 steht Malermeister Vogel für saubere Arbeit, Tradition und Meisterqualität in Berlin." },
      { property: "og:title", content: "Über uns — Meisterbetrieb seit 1987" },
      { property: "og:description", content: "Drei Generationen Handwerkskunst aus Berlin." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Meisterbetrieb", desc: "Eingetragen in der Handwerkskammer Berlin seit 1987." },
  { icon: Users, title: "Eigenes Team", desc: "Festangestellte Gesellen und Auszubildende — keine Subunternehmer." },
  { icon: Clock, title: "Pünktlichkeit", desc: "Termine sind verbindlich. Punkt." },
  { icon: Shield, title: "Garantie", desc: "5 Jahre Gewährleistung auf alle Arbeiten." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Über uns</span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Drei Generationen<br /><span className="text-primary">Handwerkskunst</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Was 1987 in einer kleinen Werkstatt in Kreuzberg begann, ist heute einer der angesehensten Malerbetriebe Berlins. Geblieben ist unser Anspruch: jedes Projekt mit der gleichen Sorgfalt zu behandeln, als wäre es das eigene Zuhause.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-accent)] opacity-15 blur-2xl" />
            <img src={aboutImg} alt="Unser Team" loading="lazy" width={1024} height={1024} className="relative aspect-square w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elegant)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Unsere Werte</span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Worauf Sie sich verlassen können</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="font-display text-3xl font-semibold leading-snug sm:text-4xl">
            "Ein Anstrich ist kein Produkt — er ist ein Versprechen, das jeden Tag eingelöst wird, wenn Sie nach Hause kommen."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">Markus Vogel · Malermeister</p>
          <Link to="/kontakt" className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background hover:-translate-y-0.5 transition-transform">
            Lernen Sie uns kennen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
