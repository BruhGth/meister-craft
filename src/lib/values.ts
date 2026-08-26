import { Award, GraduationCap, Wand2, Sparkles, Palette } from "lucide-react";

export const values = [
  { icon: Award, title: "Meisterbetrieb", desc: "Fundiertes handwerkliches Wissen und fachgerechte Ausführung." },
  { icon: GraduationCap, title: "Staatlich geprüfter Gestalter", desc: "Gestalterischer Anspruch zusätzlich zum klassischen Handwerk." },
  { icon: Wand2, title: "Individuelle Beratung", desc: "Nicht einfach eine Standardfarbe auswählen, sondern gemeinsam eine passende Lösung entwickeln." },
  { icon: Sparkles, title: "Weiterbildung", desc: "Bereits umfangreiche Hersteller- und Technikseminare besucht." },
  { icon: Palette, title: "Liebe zum Detail", desc: "Besonderer Anspruch an Oberfläche, Übergänge und Ausführung." },
] as const;
