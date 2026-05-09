import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Home, Building2, Wallpaper, Sparkles, Brush, Hammer, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Malermeister Vogel" },
      { name: "description", content: "Innenanstrich, Fassadengestaltung, Tapezierarbeiten und Lackierungen vom Meisterbetrieb in Berlin." },
      { property: "og:title", content: "Unsere Leistungen — Meister Vogel" },
      { property: "og:description", content: "Das volle Spektrum professioneller Malerarbeiten." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Home, title: "Innenanstrich", desc: "Hochwertige Wand- und Deckenanstriche für Wohn- und Geschäftsräume. Wir beraten Sie bei Farbauswahl und Materialien — vom mineralischen Naturanstrich bis zur exklusiven Effektfarbe." },
  { icon: Building2, title: "Fassadengestaltung", desc: "Wetterfester Schutz und ästhetische Gestaltung Ihrer Außenfassade. Inklusive Untergrundsanierung, Wärmedämmung und langlebigen Beschichtungen." },
  { icon: Wallpaper, title: "Tapezierarbeiten", desc: "Vom klassischen Raufaser bis zur edlen Designtapete. Präzise Verarbeitung, perfekte Stoßkanten und saubere Anschlüsse — auch bei anspruchsvollen Mustern." },
  { icon: Sparkles, title: "Lackierungen", desc: "Hochwertige Lackoberflächen für Türen, Fenster, Heizkörper und Möbel. Wir arbeiten mit umweltverträglichen Lacken in Spritz- und Streichtechnik." },
  { icon: Brush, title: "Kreativtechniken", desc: "Spachteltechnik, Lasuren, Stuccolustro und individuelle Gestaltungen für einzigartige Räume mit Charakter." },
  { icon: Hammer, title: "Renovierung", desc: "Komplette Renovierungen aus einer Hand — von kleinen Schönheitsreparaturen bis zur Vollsanierung Ihrer Wohnung." },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leistungen</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Alles, was Ihre Räume strahlen lässt.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Vom kleinen Anstrich bis zur kompletten Fassadensanierung — wir bringen Erfahrung, Sorgfalt und Leidenschaft in jedes Projekt.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground transition-all">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-foreground px-8 py-14 text-center text-background sm:px-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ihr Projekt nicht dabei?</h2>
          <p className="mx-auto mt-3 max-w-xl text-background/70">Sprechen Sie uns an — wir realisieren auch Sonderwünsche und individuelle Gestaltungen.</p>
          <Link to="/kontakt" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-transform">
            Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
