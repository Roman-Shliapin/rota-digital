"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5"
import css from "./Header.module.css"

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={css.header}>
      {open ? (
        <button
          type="button"
          className={css.scrim}
          aria-label="Zamknij menu"
          onClick={close}
        />
      ) : null}

      <div className={css.shell}>
        <div className={css.bar}>
          <Link href="/" className={css.logo}>
            ROTA
          </Link>

          <button
            type="button"
            className={css.burger}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <IoCloseOutline className={css.burgerIcon} aria-hidden />
            ) : (
              <IoMenuOutline className={css.burgerIcon} aria-hidden />
            )}
          </button>
        </div>

        <div
          className={`${css.navPanel} ${open ? css.navPanelOpen : ""}`}
        >
          <div className={css.navPanelInner}>
            <nav
              id="site-nav"
              className={css.nav}
              aria-label="Główna nawigacja"
            >
              <ul className={css.navList}>
                <li>
                  <Link
                    href="/#how-it-works"
                    className={css.navLink}
                    onClick={close}
                  >
                    Jak to działa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className={css.navLink}
                    onClick={close}
                  >
                    Wycena
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className={css.navLinkCta}
                    onClick={close}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
