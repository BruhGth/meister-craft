import { Award, GraduationCap, FileBadge } from "lucide-react";

export interface CertificateEntry {
  icon: typeof Award;
  category: string;
  title: string;
  desc: string;
  image: string | null;
}

// Sobald die eingescannten Zertifikate vorliegen: Bild in src/assets ablegen,
// hier importieren und beim jeweiligen Eintrag als `image` eintragen.
export const certificates: CertificateEntry[] = [
  {
    icon: Award,
    category: "Meisterbrief",
    title: "Malermeisterbrief",
    desc: "Urkunde über die bestandene Meisterprüfung im Maler- und Lackiererhandwerk.",
    image: null,
  },
  {
    icon: GraduationCap,
    category: "Gestaltung",
    title: "Staatlich geprüfter Gestalter",
    desc: "Zeugnis der Fortbildung zum staatlich geprüften Gestalter.",
    image: null,
  },
  {
    icon: FileBadge,
    category: "Weiterbildung",
    title: "Hersteller- & Technikseminare",
    desc: "Teilnahmezertifikate besuchter Hersteller- und Technikseminare.",
    image: null,
  },
];
