import facadeBefore from "@/assets/ref-facade-before.jpg";
import facadeAfter from "@/assets/ref-facade-after.jpg";
import livingBefore from "@/assets/ref-living-before.jpg";
import livingAfter from "@/assets/ref-living-after.jpg";
import stairsRealBefore from "@/assets/ref-stairs-real-before.jpg";
import stairsRealAfter from "@/assets/ref-stairs-real-after.jpg";
import stairs2RealBefore from "@/assets/ref-stairs2-real-before.jpg";
import stairs2RealAfter from "@/assets/ref-stairs2-real-after.jpg";
import officeBefore from "@/assets/ref-office-before.jpg";
import officeAfter from "@/assets/ref-office-after.jpg";

// Hinweis: Bis auf die Treppenmodernisierung (echtes eigenes Projekt) sind
// die übrigen Bilder Beispiel-/Inspirationsbilder und zeigen keine
// abgeschlossenen Raumgeschneidert-Projekte. Sie werden nach und nach durch
// echte Projektfotos ersetzt.
export const referenceProjects = [
  {
    category: "Treppenmodernisierung",
    title: "Vinyltreppen-Modernisierung",
    desc: "Die bestehende Treppe wurde nicht ersetzt, sondern neu verkleidet: Das Vinyl wurde rückseitig V-förmig gefräst, erwärmt, um 90° gebogen und passgenau verklebt — für eine helle, moderne Holzoptik aus einem Guss.",
    before: stairsRealBefore,
    after: stairsRealAfter,
    beforeAlt: "Rohe Holztreppe während der Vorbereitung, vor der Vinylverkleidung",
    afterAlt: "Fertig verkleidete Treppe mit heller Vinyl-Holzoptik",
    isPlaceholder: false,
    aspect: "aspect-[3/4]",
  },
  {
    category: "Treppenmodernisierung",
    title: "Treppenmodernisierung mit Geländer",
    desc: "Neben der neuen Vinyloberfläche in dunkler Holzoptik wurde hier auch das historische Geländer aufgearbeitet und frisch weiß gestrichen — für einen stimmigen Gesamtlook.",
    before: stairs2RealBefore,
    after: stairs2RealAfter,
    beforeAlt: "Treppe mit abgenutztem Anstrich und altem Belag vor der Modernisierung",
    afterAlt: "Modernisierte Treppe mit dunkler Vinyloptik und frisch gestrichenem Geländer",
    isPlaceholder: false,
    aspect: "aspect-[4/3]",
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
    aspect: "aspect-[4/3]",
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
    aspect: "aspect-[4/3]",
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
    aspect: "aspect-[4/3]",
  },
] as const;
