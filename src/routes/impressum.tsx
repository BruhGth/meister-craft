import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum — Raumgeschneidert" }, { name: "description", content: "Impressum nach § 5 TMG." }] }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Impressum</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">Raumgeschneidert <br />Hofmauerweg 12<br />70734 Fellbach</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Vertreten durch</h2>
            <p className="mt-3">Lars Schneider, Malermeister</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-3">Telefon: +49 000 000<br />E-Mail: info@raumgeschneidert.de</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Registereintrag</h2>
            <p className="mt-3">Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Berlin-Charlottenburg<br />Registernummer: HRB 123456</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Umsatzsteuer-ID</h2>
            <p className="mt-3">DE123456789</p>
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
