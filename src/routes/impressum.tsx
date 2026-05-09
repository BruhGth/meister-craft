import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum — Meister Vogel" }, { name: "description", content: "Impressum nach § 5 TMG." }] }),
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
            <p className="mt-3">Malerbetrieb Vogel GmbH<br />Hauptstraße 42<br />10827 Berlin</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Vertreten durch</h2>
            <p className="mt-3">Markus Vogel, Malermeister</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-3">Telefon: 030 123 456 789<br />E-Mail: info@meister-vogel.de</p>
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
            <p className="mt-3">Handwerkskammer Berlin, Blücherstraße 68, 10961 Berlin</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
