import facadeBefore from "@/assets/ref-facade-before.jpg";
import facadeAfter from "@/assets/ref-facade-after.jpg";
import livingBefore from "@/assets/ref-living-before.jpg";
import livingAfter from "@/assets/ref-living-after.jpg";
import stairsBefore from "@/assets/ref-stairs-before.jpg";
import stairsAfter from "@/assets/ref-stairs-after.jpg";
import officeBefore from "@/assets/ref-office-before.jpg";
import officeAfter from "@/assets/ref-office-after.jpg";

export const referenceProjects = [
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
] as const;
