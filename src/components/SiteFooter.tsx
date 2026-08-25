import { Link } from "@tanstack/react-router";
import { PaintRoller, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-accent)] text-primary-foreground">
                <PaintRoller className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold">Raumgeschneidert</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Malermeister & Lackierer</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Malermeisterbetrieb für Innenraumgestaltung in Fellbach und Umgebung — von der Treppenmodernisierung bis zur klassischen Malerarbeit.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/leistungen" className="hover:text-foreground">Leistungen</Link></li>
              <li><Link to="/referenzen" className="hover:text-foreground">Projekte</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-foreground">Über uns</Link></li>
              <li><Link to="/zertifikate" className="hover:text-foreground">Zertifikate</Link></li>
              <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide">Kontakt</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> 0176 2098856</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> info@raumgeschneidert.de</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Hofmauerweg 19, 70734 Fellbach</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Raumgeschneidert. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
