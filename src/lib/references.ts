import facadeBefore from "@/assets/ref-facade-before.jpg";
import facadeAfter from "@/assets/ref-facade-after.jpg";
import livingBefore from "@/assets/ref-living-before.jpg";
import livingAfter from "@/assets/ref-living-after.jpg";
import stairsBefore from "@/assets/ref-stairs-before.jpg";
import stairsAfter from "@/assets/ref-stairs-after.jpg";
import officeBefore from "@/assets/ref-office-before.jpg";
import officeAfter from "@/assets/ref-office-after.jpg";

// Hinweis: Diese Bilder sind Beispiel-/Inspirationsbilder und zeigen keine
// abgeschlossenen Raumgeschneidert-Projekte. Sie werden durch echte
// Projektfotos ersetzt, sobald diese vorliegen.
export const referenceProjects = [
  {
    category: "Treppenmodernisierung",
    title: "Treppenmodernisierung (Beispielbild)",
    desc: "So kann aus einer bestehenden Treppe ein moderner Blickfang werden. Unser eigenes Vinyltreppen-Projekt mit echten Fotos folgt hier in Kürze.",
    before: stairsBefore,
    after: stairsAfter,
    beforeAlt: "Beispielbild: abgenutzte Holztreppe vor der Modernisierung",
    afterAlt: "Beispielbild: moderne, hochwertig wirkende Treppe nach der Modernisierung",
    isPlaceholder: true,
  },
  {
    category: "Exklusive Wandgestaltung",
    title: "Wandgestaltung (Beispielbild)",
    desc: "Beispiel für hochwertige, individuelle Wandgestaltung mit klarer Akzentfarbe statt klassischer Mustertapete.",
    before: livingBefore,
    after: livingAfter,
    beforeAlt: "Beispielbild: Wohnzimmer mit alter Blümchentapete",
    afterAlt: "Beispielbild: modernes Wohnzimmer mit blauer Akzentwand",
    isPlaceholder: true,
  },
  {
    category: "Klassische Malerarbeiten",
    title: "Fassadengestaltung (Beispielbild)",
    desc: "Komplette Sanierung einer Altbaufassade — neuer Putz, frische Beschichtung und akzentuierte Fensterumrandungen.",
    before: facadeBefore,
    after: facadeAfter,
    beforeAlt: "Beispielbild: verwitterte Hausfassade vor der Renovierung",
    afterAlt: "Beispielbild: frisch gestrichene Hausfassade nach der Renovierung",
    isPlaceholder: true,
  },
  {
    category: "Klassische Malerarbeiten",
    title: "Gewerbefläche (Beispielbild)",
    desc: "Aus tristen Büroräumen wird eine helle, freundliche Arbeitsumgebung mit klarer Farbakzentuierung.",
    before: officeBefore,
    after: officeAfter,
    beforeAlt: "Beispielbild: leere, abgenutzte Bürofläche vor der Renovierung",
    afterAlt: "Beispielbild: modern renoviertes Büro mit Akzentwand",
    isPlaceholder: true,
  },
] as const;
