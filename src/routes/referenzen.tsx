import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import facadeBefore from "@/assets/ref-facade-before.jpg";
import facadeAfter from "@/assets/ref-facade-after.jpg";
import livingBefore from "@/assets/ref-living-before.jpg";
import livingAfter from "@/assets/ref-living-after.jpg";
import stairsBefore from "@/assets/ref-stairs-before.jpg";
import stairsAfter from "@/assets/ref-stairs-after.jpg";
import officeBefore from "@/assets/ref-office-before.jpg";
import officeAfter from "@/assets/ref-office-after.jpg";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: "Referenzen — Malermeister Vogel" },
      {
        name: "description",
        content:
          "Vorher-Nachher-Vergleiche unserer Maler- und Lackierprojekte: Fassaden, Innenräume, Treppen und Gewerbeflächen.",
      },
      { property: "og:title", content: "Referenzen — Vorher / Nachher" },
      {
        property: "og:description",
        content: "Sehen Sie die Handwerksqualität von Meister Vogel im direkten Vergleich.",
      },
      { property: "og:image", content: facadeAfter },
    ],
  }),
  component: ReferenzenPage,
});

const projects = [
  {
    title: "Fassadenrenovierung in Berlin-Charlottenburg",
    desc: "Komplette Sanierung einer Altbaufassade — neuer Putz, frische Beschichtung und akzentuierte Fensterumrandungen.",
    before: facadeBefore,
    after: facadeAfter,
    beforeAlt: "Verwitterte Hausfassade vor der Renovierung",
    afterAlt: "Frisch gestrichene weiße Hausfassade nach der Renovierung",
  },
  {
    title: "Moderner Innenanstrich — Wohnzimmer",
    desc: "Alte Mustertapete entfernt, Wände gespachtelt und mit hochwertiger Designerfarbe in tiefem Blau gestrichen.",
    before: livingBefore,
    after: livingAfter,
    beforeAlt: "Wohnzimmer mit alter Blümchentapete",
    afterAlt: "Modernes Wohnzimmer mit blauer Akzentwand",
  },
  {
    title: "Holztreppe restauriert & lackiert",
    desc: "Abgeschliffen, grundiert und mit strapazierfähigem Klarlack versiegelt — wie neu, mit erhaltener Holzmaserung.",
    before: stairsBefore,
    after: stairsAfter,
    beforeAlt: "Abgenutzte Holztreppe vor der Restaurierung",
    afterAlt: "Frisch lackierte Holztreppe nach der Restaurierung",
  },
  {
    title: "Bürorenovierung — Gewerbefläche Mitte",
    desc: "Aus tristen Büroräumen wurde eine helle, motivierende Arbeitsumgebung mit Akzentstreifen in Unternehmensfarbe.",
    before: officeBefore,
    after: officeAfter,
    beforeAlt: "Leere, abgenutzte Bürofläche vor der Renovierung",
    afterAlt: "Modern renoviertes Büro mit orangefarbenem Akzentband",
  },
];

function ReferenzenPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Referenzen
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Vorher. Nachher.
            <br />
            <span className="text-muted-foreground">Handwerk, das man sieht.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ziehen Sie den Regler und vergleichen Sie ausgewählte Projekte aus den
            letzten Jahren. Vom Altbau bis zur Gewerbefläche — jedes Detail von Hand
            ausgeführt.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {projects.map((p) => (
            <figure key={p.title} className="flex flex-col gap-5">
              <BeforeAfterSlider
                beforeSrc={p.before}
                afterSrc={p.after}
                beforeAlt={p.beforeAlt}
                afterAlt={p.afterAlt}
              />
              <figcaption>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {p.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-muted-foreground">
          Tipp: Regler ziehen oder mit den Pfeiltasten bewegen, um den Vergleich zu
          steuern.
        </p>
      </section>
    </Layout>
  );
}
