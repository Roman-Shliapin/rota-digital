import Link from "next/link"
import css from "./Footer.module.css"

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.inner}>
        <div className={css.brand}>
          <Link href="/" className={css.logo}>
            ROTA
          </Link>
          <p className={css.tagline}>Cyfrowe prezenty, które zapadają w pamięć</p>
          <p className={css.micro}>
            Nowoczesny sposób okazywania emocji.
          </p>
        </div>

        <nav className={css.nav} aria-label="Szybkie linki">
          <p className={css.colTitle}>Nawigacja</p>
          <ul className={css.list}>
            <li>
              <a href="/#how-it-works" className={css.link}>
                Jak to działa
              </a>
            </li>
            <li>
              <a href="/#pricing" className={css.link}>
                Wycena
              </a>
            </li>
            <li>
              <a href="/#contact" className={css.link}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>

        <nav className={css.legal} aria-label="Informacje prawne">
          <p className={css.colTitle}>Prawne</p>
          <ul className={css.list}>
            <li>
              <Link href="/polityka-prywatnosci" className={css.link}>
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link href="/regulamin" className={css.link}>
                Regulamin
              </Link>
            </li>
            <li>
              <Link href="/polityka-cookies" className={css.link}>
                Cookies
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={css.bottom}>
        <p className={css.copy}>
          © {year} ROTA. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}

export default Footer
