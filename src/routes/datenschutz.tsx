import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz — Meister Vogel" }, { name: "description", content: "Datenschutzerklärung nach DSGVO." }] }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Datenschutzerklärung</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
            <p className="mt-3">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">2. Verantwortliche Stelle</h2>
            <p className="mt-3">Malerbetrieb Vogel GmbH<br />Hauptstraße 42, 10827 Berlin<br />info@meister-vogel.de</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">3. Erhebung und Verarbeitung</h2>
            <p className="mt-3">Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). Über das Kontaktformular übermittelte Daten verwenden wir nur zur Beantwortung Ihrer Anfrage.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">4. Ihre Rechte</h2>
            <p className="mt-3">Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
