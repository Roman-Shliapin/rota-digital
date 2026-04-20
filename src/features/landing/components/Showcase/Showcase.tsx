import css from "./Showcase.module.css"

const EXAMPLES = [
  {
    id: "birthday",
    emoji: "🎂",
    label: "Urodziny",
    screenClass: css.screenBirthday,
  },
  {
    id: "love",
    emoji: "❤️",
    label: "Strona miłości",
    screenClass: css.screenLove,
  },
  {
    id: "wedding",
    emoji: "💍",
    label: "Zaproszenie ślubne",
    screenClass: css.screenWedding,
  },
] as const

const Showcase = () => {
  return (
    <section
      id="showcase"
      className={css.section}
      aria-labelledby="showcase-heading"
    >
      <div className={css.inner}>
        <header className={css.intro}>
          <h2 id="showcase-heading" className={css.title}>
            Przykładowe realizacje
          </h2>
          <p className={css.subtitle}>
            Zobacz, jak mogą wyglądać wyjątkowe prezenty stworzone przez ROTA.
          </p>
        </header>

        <div className={css.grid}>
          {EXAMPLES.map((item) => (
            <article key={item.id} className={css.card}>
              <div className={css.mockup} aria-hidden="true">
                <div className={css.chrome}>
                  <div className={css.chromeDots}>
                    <span className={css.dot} />
                    <span className={css.dot} />
                    <span className={css.dot} />
                  </div>
                  <div className={css.urlBar}>
                    <span className={css.chromeUrl}>
                      {item.id === "birthday" && "rota.pl/marta-18"}
                      {item.id === "love" && "rota.pl/karol-ola"}
                      {item.id === "wedding" && "rota.pl/slub-2026"}
                    </span>
                  </div>
                </div>
                <div className={`${css.screen} ${item.screenClass}`}>
                  {item.id === "birthday" && (
                    <>
                      <div className={css.confetti} />
                      <div className={css.bDayBadge}>18</div>
                      <p className={css.bDayEyebrow}>Urodzinowa strona prezentowa</p>
                      <p className={css.bDayTitle}>Sto lat, Marto!</p>
                      <p className={css.bDayLead}>
                        Ze zdjęciami, playlistą i życzeniami od najbliższych — w
                        jednym linku, który zaskoczy nawet po północy.
                      </p>
                      <div className={css.bDayPhoto}>
                        <p className={css.bDayQuote}>
                          „Niech każdy kolejny rok pachnie kawą, śmiechem i
                          planami, które naprawdę chcesz zrealizować.”
                        </p>
                      </div>
                      <div className={css.bDayRibbon} />
                      <p className={css.bDayMeta}>
                        Playlista: 18 ulubionych utworów · Galeria: 42 zdjęcia ·
                        Życzenia: od całej rodziny
                      </p>
                    </>
                  )}
                  {item.id === "love" && (
                    <>
                      <div className={css.loveGlow} />
                      <p className={css.loveEyebrow}>Nasza historia</p>
                      <div className={css.loveNames}>
                        <span className={css.loveName}>Karol</span>
                        <span className={css.loveAmp}>&</span>
                        <span className={css.loveName}>Ola</span>
                      </div>
                      <p className={css.loveSubtitle}>
                        Od pierwszego kina po wspólne poranki — ta strona zbiera
                        to, co zwykle ginie w zrzutach ekranu.
                      </p>
                      <div className={css.loveHeart} />
                      <div className={css.loveFooter}>
                        <p className={css.loveFooterLine}>
                          „Kocham nasze małe rytuały: piątkowe sushi, niedzielne
                          spacery i Twoje memy o 01:12.”
                        </p>
                        <p className={css.loveFooterHint}>
                          PS. Na końcu czeka niespodzianka — odtwórz w głośnikach.
                        </p>
                      </div>
                    </>
                  )}
                  {item.id === "wedding" && (
                    <>
                      <div className={css.wedArch} />
                      <p className={css.wedKicker}>Ceremonia i przyjęcie</p>
                      <p className={css.wedNames}>Aleksandra & Piotr</p>
                      <div className={css.wedMonogram} />
                      <p className={css.wedWhen}>
                        14 czerwca 2026 · godz. 15:00
                        <br />
                        <span className={css.wedVenue}>
                          Pałac w Wilanowie, Warszawa
                        </span>
                      </p>
                      <div className={css.wedLine} />
                      <div className={css.wedRings}>
                        <span className={css.wedRing} />
                        <span className={css.wedRing} />
                      </div>
                      <p className={css.wedDress}>Dress code: elegancki</p>
                      <div className={css.wedBottom}>
                        <p className={css.wedRsvp}>
                          Prosimy o potwierdzenie do 1 maja — RSVP w zakładce
                          poniżej.
                        </p>
                        <p className={css.wedFooter}>Zapraszamy serdecznie</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <h3 className={css.cardTitle}>
                <span className={css.cardEmoji} aria-hidden="true">
                  {item.emoji}
                </span>
                {item.label}
              </h3>
            </article>
          ))}
        </div>

        <div className={css.ctaWrap}>
          <a href="#contact" className={css.cta}>
            Zamów podobny projekt
          </a>
        </div>
      </div>
    </section>
  )
}

export default Showcase
