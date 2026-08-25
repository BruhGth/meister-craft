import { TrendingUp, Droplets, Palette, Sparkles, Brush } from "lucide-react";

export const services = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Treppen­modernisierung",
    tagline: "Aus einer bestehenden Treppe wird ein moderner Blickfang.",
    desc: "Statt kompletter Neuanschaffung erhält Ihre bestehende Treppe eine individuell angefertigte, hochwertige Oberfläche — für ein modernes Ergebnis, das aus einem Guss wirkt.",
    featured: true,
  },
  {
    number: "02",
    icon: Droplets,
    title: "Fugenlose Bäder",
    tagline: "Nahtlose Oberflächen für moderne und zeitlose Badezimmer.",
    desc: "Wir bieten fugenlose Badgestaltung als Leistung an. Eigene abgeschlossene Referenzprojekte hierzu haben wir aktuell noch nicht — echte Beispiele folgen, sobald sie umgesetzt sind.",
    featured: false,
  },
  {
    number: "03",
    icon: Palette,
    title: "Exklusive Wandgestaltung",
    tagline: "Individuelle Oberflächen statt Standardanstrich.",
    desc: "Von dekorativer Spachteltechnik über Beton- und Steinoptik bis zu Metallic- und Mineraloberflächen — wir finden die passende Gestaltung für Ihren Raum, statt Ihnen eine Materialliste vorzulegen.",
    featured: false,
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Hochwertige Lackierungen",
    tagline: "Türen, Zargen, Möbel und Holzoberflächen in Perfektion.",
    desc: "Professionelle Lackierarbeiten für Türen, Zargen, Möbelstücke und weitere Holzoberflächen — sauber ausgeführt und dauerhaft belastbar.",
    featured: false,
  },
  {
    number: "05",
    icon: Brush,
    title: "Klassische Malerarbeiten",
    tagline: "Das solide Handwerk bleibt Teil unseres Angebots.",
    desc: "Innenanstriche, Tapezierarbeiten, Spachtelarbeiten und Renovierungen — weiterhin fester Bestandteil unserer Arbeit, auch wenn sie nicht mehr im Mittelpunkt steht.",
    featured: false,
  },
] as const;
