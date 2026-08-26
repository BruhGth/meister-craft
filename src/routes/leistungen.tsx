import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Raumgeschneidert" },
      {
        name: "description",
        content:
          "Treppenmodernisierung, fugenlose Bäder, exklusive Wandgestaltung, Lackierungen und klassische Malerarbeiten — Innenraumgestaltung vom Meisterbetrieb in Fellbach.",
      },
      { property: "og:title", content: "Leistungen — Raumgeschneidert" },
      { property: "og:description", content: "Innenraumgestaltung mit handwerklicher Präzision und gestalterischem Anspruch." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [featured, ...rest] = services;

  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leistungen</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Gestaltung, die Räume verändert.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Handwerk und Gestaltung aus einer Hand — von der individuellen Treppenmodernisierung bis zu
            klassischen Malerarbeiten. Das Ergebnis steht im Mittelpunkt, nicht das Material.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Featured: Treppenmodernisierung */}
        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-[image:var(--gradient-accent)] p-6 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-12">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">{featured.number} · Besonders hervorgehoben</span>
          <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <featured.icon className="h-7 w-7" />
          </div>
          <h2 className="mt-6 break-words font-display text-2xl font-semibold hyphens-auto sm:text-4xl">{featured.title}</h2>
          <p className="mt-2 text-base font-medium text-primary-foreground/90">{featured.tagline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80">{featured.desc}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/70">
            Unsere bestehende Lösung basiert unter anderem darauf, dass das Vinyl über die gesamte Länge
            rückseitig V-förmig gefräst, erwärmt und um 90° gebogen wird. Die entstandene Form wird
            anschließend passgenau verklebt.
          </p>
          <Link
            to="/referenzen"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-white/25"
          >
            Projekt ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.number}</span>
              <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground transition-all">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 break-words font-display text-2xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm font-medium text-foreground/80">{s.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-foreground px-8 py-14 text-center text-background sm:px-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ihr Projekt nicht dabei?</h2>
          <p className="mx-auto mt-3 max-w-xl text-background/70">Sprechen Sie uns an — wir beraten Sie gerne zu individuellen Gestaltungswünschen.</p>
          <Link to="/kontakt" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-transform">
            Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
