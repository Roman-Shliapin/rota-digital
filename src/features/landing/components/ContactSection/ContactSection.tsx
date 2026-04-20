import { FaInstagram } from "react-icons/fa"
import css from "./ContactSection.module.css"

const INSTAGRAM_DM_URL = "https://ig.me/m/rota.advancement"

function whatsappHref(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  if (!raw) return null
  const digits = raw.replace(/\D/g, "")
  if (!digits) return null
  return `https://wa.me/${digits}`
}

const ContactSection = () => {
  const wa = whatsappHref()

  return (
    <section
      id="contact"
      className={css.section}
      aria-labelledby="contact-heading"
    >
      <div className={css.ambient} aria-hidden="true" />
      <div className={css.inner}>
        <div className={css.panel}>
          <p className={css.eyebrow}>Kontakt</p>
          <h2 id="contact-heading" className={css.title}>
            Napisz do nas, a przygotujemy projekt dopasowany do Twojej okazji.
          </h2>
          <div className={css.rule} aria-hidden="true" />

          <div className={css.actions}>
            <a
              href={INSTAGRAM_DM_URL}
              className={css.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={css.ctaInner}>
                <FaInstagram className={css.ctaIcon} size={22} aria-hidden />
                <span className={css.ctaLabel}>Skontaktuj się z nami</span>
                <span className={css.ctaArrow} aria-hidden="true">
                  →
                </span>
              </span>
            </a>

            <p className={css.trust}>
              <span className={css.trustDot} aria-hidden="true" />
              Odpowiadamy zazwyczaj w ciągu 15–30 minut
            </p>

            {wa ? (
              <p className={css.alt}>
                <span className={css.altLabel}>Wolisz WhatsApp? </span>
                <a
                  href={wa}
                  className={css.altLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Napisz na WhatsApp
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
