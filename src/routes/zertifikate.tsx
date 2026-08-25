import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { certificates } from "@/lib/certificates";
import { ImageOff } from "lucide-react";

export const Route = createFileRoute("/zertifikate")({
  head: () => ({
    meta: [
      { title: "Zertifikate — Raumgeschneidert" },
      {
        name: "description",
        content:
          "Nachweise und Qualifikationen von Raumgeschneidert: Meisterbrief, Abschluss als staatlich geprüfter Gestalter und Weiterbildungszertifikate.",
      },
      { property: "og:title", content: "Zertifikate — Raumgeschneidert" },
      { property: "og:description", content: "Handwerkliche und gestalterische Qualifikationen im Überblick." },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Zertifikate</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Nachweise & Qualifikationen.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Meisterbrief, Abschluss als staatlich geprüfter Gestalter und besuchte Hersteller- und
            Technikseminare — die Grundlage für Handwerk mit gestalterischem Anspruch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {certificates.map((c) => (
            <figure key={c.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="aspect-[3/4] w-full bg-secondary">
                {c.image ? (
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-b border-dashed border-border/80 p-6 text-center">
                    <ImageOff className="h-8 w-8 text-muted-foreground/60" />
                    <p className="text-xs text-muted-foreground">Foto folgt in Kürze</p>
                  </div>
                )}
              </div>
              <figcaption className="flex flex-1 flex-col gap-2 p-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{c.category}</span>
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground">{c.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Die eingescannten Original-Urkunden werden hier nach und nach ergänzt.
        </p>
      </section>
    </Layout>
  );
}
