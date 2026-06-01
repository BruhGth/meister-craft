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
            <h3 className="font-display font-semibold text-foreground">Allgemeine Hinweise</h3>
            <p className="mt-3">

Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie der folgenden Datenschutzerklärung.<br />

Wer ist verantwortlich für die Datenerfassung auf dieser Website?<br />

Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ entnehmen.<br />

Wie erfassen wir Ihre Daten?<br />

Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.

Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.<br />

Wofür nutzen wir Ihre Daten?<br />

Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.<br />

Welche Rechte haben Sie bezüglich Ihrer Daten?<br />

Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.

Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.

Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="font-display font-semibold text-foreground">Datenschutz</h3>

            <p className="mt-3">

Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.

Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

<h3 className="font-display font-semibold text-foreground">Hinweis zur verantwortlichen Stelle</h3>

<p className="mt-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>

            <p className="mt-3">Raumgeschneidert<br />Lars Schneider<br />Hofmauerweg 19<br />70734 Fellbach<br />Deutschland<br /><br />Telefon: 017620986856<br />Email: info@raumgeschneidert.de<br />Website: www.raumgeschneidert.de</p>
          </div>
          <p className="mt-3">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.<br />

<h3 className="font-display font-semibold text-foreground">Speicherdauer</h3><br />

Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.

Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.<br />

<h3 className="font-display font-semibold text-foreground">Rechtsgrundlagen der Datenverarbeitung</h3><br />

Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.

Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir diese auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.

Weitere Verarbeitungen erfolgen auf Grundlage gesetzlicher Verpflichtungen nach Art. 6 Abs. 1 lit. c DSGVO oder auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f DSGVO.</p>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-display font-semibold text-foreground">Cookies</h3>
            <p className="mt-3">Unsere Internetseiten verwenden sogenannte „Cookies“. Cookies richten auf Ihrem Endgerät keinen Schaden an.

Cookies können technisch notwendig sein oder zur Analyse des Nutzerverhaltens verwendet werden.

Die Speicherung notwendiger Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.

Sofern eine Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.<br />

<h3 className="font-display font-semibold text-foreground">Kontaktformular</h3><br />

Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.

Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">4. Soziale Medien</h2>
            <p className="mt-3">
              <h3 className="font-display font-semibold text-foreground">Instagram</h3><br />

Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden.

Anbieter ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.

Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und den Instagram-Servern hergestellt.

Weitere Informationen finden Sie in der Datenschutzerklärung von Instagram:
https://privacycenter.instagram.com/policy/</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">5. Analyse-Tools und Werbung</h2>
            <h3 className="font-display font-semibold text-foreground">Google Analytics</h3>
            <p className="mt-3">Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.

Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.

Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen.

Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
<h3 className="font-display font-semibold text-foreground">IP-Anonymisierung</h3><br />

Wir haben die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse innerhalb der EU gekürzt, bevor sie an Server von Google übertragen wird.</p>
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">6. Plugins und Tools</h2>
            <h3 className="font-display font-semibold text-foreground">Google Fonts</h3>
            <p className="mt-3">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts.

Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten direkt von Google-Servern.
<h3 className="font-display font-semibold text-foreground">Google Maps</h3><br />
Diese Website nutzt den Kartendienst Google Maps.

Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.

Die Nutzung erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.
<h3 className="font-display font-semibold text-foreground">Google reCAPTCHA</h3><br />Wir nutzen „Google reCAPTCHA“ auf dieser Website.

Mit reCAPTCHA soll überprüft werden, ob Eingaben durch einen Menschen oder automatisiert erfolgen.

Hierzu analysiert reCAPTCHA verschiedene Informationen wie IP-Adresse oder Mausbewegungen.
</p>

          </div><div>
            <h2 className="font-display text-lg font-semibold text-foreground">7. Ihre Rechte</h2>
            <h3 className="font-display font-semibold text-foreground">Sie haben jederzeit das Recht auf:</h3>
            <p className="mt-3">Auskunft über Ihre gespeicherten Daten<br />
Berichtigung unrichtiger Daten<br />
Löschung Ihrer Daten<br />
Einschränkung der Verarbeitung<br />
Datenübertragbarkeit<br />
Widerruf erteilter Einwilligungen<br />
Beschwerde bei einer Datenschutzaufsichtsbehörde

</p>

          </div><div>
            <h2 className="font-display text-lg font-semibold text-foreground">8. SSL- bzw. TLS-Verschlüsselung</h2>
          
            <p className="mt-3">Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.<br />
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und ein Schloss-Symbol angezeigt wird.

</p>

          </div>
          
        </div>
      </section>
    </Layout>
  );
}
