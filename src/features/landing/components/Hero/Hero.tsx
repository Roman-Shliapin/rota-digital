import css from "./Hero.module.css"

const FLOATING_CARDS = [
  { emoji: "🎂", label: "Urodziny" },
  { emoji: "❤️", label: "Strona miłości" },
  { emoji: "💍", label: "Zaproszenie ślubne" },
] as const

const Hero = () => {
  return (
    <section className={css.section} aria-labelledby="hero-heading">
      <div className={css.inner}>
        <div className={css.content}>
          <h1 id="hero-heading" className={css.title}>
            Cyfrowe prezenty, które zapadają w pamięć
          </h1>
          <p className={css.lead}>
            Tworzymy personalizowane strony pełne zdjęć, muzyki i emocji —
            idealne na urodziny i wyjątkowe chwile.
          </p>
          <a href="#contact" className={css.cta}>
            Stwórz prezent
          </a>
        </div>

        <div className={css.cardsWrap}>
          <ul className={css.cardsList} aria-label="Przykłady stron">
            {FLOATING_CARDS.map((item, index) => (
              <li
                key={item.label}
                className={css.card}
                style={{ animationDelay: `${index * 0.45}s` }}
              >
                <span className={css.cardEmoji} aria-hidden="true">
                  {item.emoji}
                </span>
                <span className={css.cardLabel}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
