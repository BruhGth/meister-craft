import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { referenceProjects } from "@/lib/references";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Projekte — Raumgeschneidert" },
      {
        name: "description",
        content:
          "Raumverwandlungen im Vorher-Nachher-Vergleich: Treppenmodernisierung, Wandgestaltung, Fassaden und mehr.",
      },
      { property: "og:title", content: "Projekte — Vorher / Nachher" },
      {
        property: "og:description",
        content: "Raumverwandlungen mit handwerklicher Präzision im direkten Vergleich.",
      },
      { property: "og:image", content: referenceProjects[0].after },
    ],
  }),
  component: ReferenzenPage,
});

function ReferenzenPage() {
  const [index, setIndex] = useState(0);
  const total = referenceProjects.length;
  const active = referenceProjects[index];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Projekte
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Vorher. Nachher.
            <br />
            <span className="text-muted-foreground">Raumgeschneidert.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ziehen Sie den Regler und vergleichen Sie Raumverwandlungen. Ausführliche
            Projektseiten mit Idee, Umsetzung und Ergebnis folgen hier nach und nach.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Hinweis: Die gezeigten Bilder sind aktuell Beispiel-/Inspirationsbilder und
            zeigen keine abgeschlossenen Raumgeschneidert-Projekte. Echte Projektfotos
            folgen, sobald sie verfügbar sind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <div className="relative">
          <figure key={active.title} className="flex flex-col gap-5">
            <BeforeAfterSlider
              beforeSrc={active.before}
              afterSrc={active.after}
              beforeAlt={active.beforeAlt}
              afterAlt={active.afterAlt}
            />
            <figcaption className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {active.category}
              </span>
              <h2 className="mt-1.5 font-display text-xl font-semibold text-foreground">
                {active.title}
              </h2>
              <p className="mx-auto mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {active.desc}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Vorheriges Projekt"
            className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-[var(--shadow-soft)] ring-1 ring-border transition hover:bg-secondary md:-translate-x-5"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Nächstes Projekt"
            className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-[var(--shadow-soft)] ring-1 ring-border transition hover:bg-secondary md:translate-x-5"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {referenceProjects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Projekt ${i + 1} anzeigen`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-5 bg-[var(--accent)]" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Regler ziehen oder mit den Pfeiltasten bewegen, um den Vergleich zu
          steuern.
        </p>
      </section>
    </Layout>
  );
}
