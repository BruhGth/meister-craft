import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
  message: z.string().min(1, "Nachricht ist erforderlich"),
});

export const sendContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (process.env.NODE_ENV !== "production") {
      await import("dotenv/config").catch(() => {});
    }

    const host = process.env.IONOS_SMTP_HOST || "smtp.ionos.de";
    const port = Number(process.env.IONOS_SMTP_PORT || 587);
    const user = process.env.IONOS_SMTP_USER;
    const pass = process.env.IONOS_SMTP_PASSWORD;
    const to = process.env.CONTACT_TO_EMAIL || "info@raumgeschneidert.de";

    if (!user || !pass) {
      console.error(
        "Kontaktformular: IONOS_SMTP_USER / IONOS_SMTP_PASSWORD sind nicht gesetzt.",
      );
      throw new Error(
        "Der E-Mail-Versand ist derzeit nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch.",
      );
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const { name, email, phone, message } = data;

    await transporter.sendMail({
      from: `"Raumgeschneidert Website" <${user}>`,
      to,
      replyTo: email,
      subject: `Neue Anfrage über die Website — ${name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        "",
        "Nachricht:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { ok: true as const };
  });
