import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz — Raumgeschneidert" }, { name: "description", content: "Datenschutzerklärung nach DSGVO." }] }),
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
            <h3 className="mt-4 font-display font-semibold text-foreground">Allgemeine Hinweise</h3>
            <p className="mt-2">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
              Sie der folgenden Datenschutzerklärung.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten
              können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" entnehmen.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — zum Beispiel Daten, die
              Sie in unser Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch
              unsere IT-Systeme erfasst, insbesondere technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs).
            </p>
            <p className="mt-3">
              <strong className="text-foreground">Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Die über das Kontaktformular übermittelten Daten nutzen wir ausschließlich zur Bearbeitung Ihrer
              Anfrage. Technische Daten dienen der fehlerfreien Bereitstellung der Website.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung
              oder Löschung dieser Daten. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
              Sie diese jederzeit für die Zukunft widerrufen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde zu.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="mt-4 font-display font-semibold text-foreground">Datenschutz</h3>
            <p className="mt-2">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
              sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-3">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per
              E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>

            <h3 className="mt-6 font-display font-semibold text-foreground">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mt-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-3">
              Raumgeschneidert
              <br />
              Lars Schneider
              <br />
              Hofmauerweg 19
              <br />
              70734 Fellbach
              <br />
              Deutschland
              <br />
              <br />
              Telefon: 0176 2098856
              <br />
              E-Mail: info@raumgeschneidert.de
              <br />
              Website: www.raumgeschneidert.de
            </p>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>

            <h3 className="mt-6 font-display font-semibold text-foreground">Speicherdauer</h3>
            <p className="mt-2">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden
              Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h3 className="mt-6 font-display font-semibold text-foreground">Rechtsgrundlagen der Datenverarbeitung</h3>
            <p className="mt-2">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen
              Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sind Ihre Daten zur Vertragserfüllung oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich (z. B. zur Bearbeitung einer Anfrage über das
              Kontaktformular), verarbeiten wir diese auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Weitere
              Verarbeitungen erfolgen auf Grundlage gesetzlicher Verpflichtungen nach Art. 6 Abs. 1 lit. c DSGVO
              oder auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
            <h3 className="mt-4 font-display font-semibold text-foreground">Kontaktformular</h3>
            <p className="mt-2">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von
              Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
              zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Der Versand erfolgt technisch über unser
              E-Mail-Postfach bei IONOS.
            </p>
            <h3 className="mt-6 font-display font-semibold text-foreground">Cookies</h3>
            <p className="mt-2">
              Diese Website setzt aktuell keine Analyse-, Marketing- oder Tracking-Cookies ein. Es werden keine
              Drittanbieter-Dienste wie Web-Analyse-Tools eingebunden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">4. Plugins und Tools</h2>
            <h3 className="mt-4 font-display font-semibold text-foreground">Google Fonts</h3>
            <p className="mt-2">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts. Beim
              Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten direkt von Servern von Google
              (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Dabei kann eine Verbindung
              zu Servern von Google hergestellt werden, wodurch Google Kenntnis darüber erhalten kann, dass über
              Ihre IP-Adresse diese Website aufgerufen wurde.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">5. Ihre Rechte</h2>
            <h3 className="mt-4 font-display font-semibold text-foreground">Sie haben jederzeit das Recht auf:</h3>
            <p className="mt-2">
              Auskunft über Ihre gespeicherten Daten
              <br />
              Berichtigung unrichtiger Daten
              <br />
              Löschung Ihrer Daten
              <br />
              Einschränkung der Verarbeitung
              <br />
              Datenübertragbarkeit
              <br />
              Widerruf erteilter Einwilligungen
              <br />
              Beschwerde bei einer Datenschutzaufsichtsbehörde
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">6. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mt-2">
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://"
              wechselt und ein Schloss-Symbol angezeigt wird.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
