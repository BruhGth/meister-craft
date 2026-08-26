import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum — Raumgeschneidert" }, { name: "description", content: "Impressum nach § 5 DDG." }] }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Impressum</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">Raumgeschneidert <br />Hofmauerweg 19<br />70734 Fellbach</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Vertreten durch</h2>
            <p className="mt-3">Lars Schneider, Malermeister</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-3">Telefon: 0176 2098856<br />E-Mail: info@raumgeschneidert.de</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="mt-3">
              Berufsbezeichnung: Malermeister
              <br />
              Verliehen in: Deutschland
              <br />
              Zuständige Kammer: Handwerkskammer Stuttgart, Heilbronner Str. 43, 70191 Stuttgart
              <br />
              Es gilt die Handwerksordnung (HwO), einsehbar unter{" "}
              <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                www.gesetze-im-internet.de/hwo
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Aufsichtsbehörde</h2>
            <p className="mt-3">Handwerkskammer Stuttgart, Heilbronner Str. 43, 70191 Stuttgart</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
