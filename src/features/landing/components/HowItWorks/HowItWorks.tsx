import css from "./HowItWorks.module.css"

const STEPS = [
  {
    step: "01",
    title: "Napisz do nas",
    description:
      "Opisz okazję i wyślij zdjęcia oraz wiadomość, którą chcesz przekazać.",
  },
  {
    step: "02",
    title: "Tworzymy projekt",
    description:
      "Projektujemy stronę w stylu premium, dopasowaną do emocji i okazji.",
  },
  {
    step: "03",
    title: "Akceptacja",
    description:
      "Otrzymujesz podgląd i wprowadzasz ewentualne poprawki.",
  },
  {
    step: "04",
    title: "Gotowy link",
    description:
      "Dostajesz link gotowy do wysłania bliskiej osobie.",
  },
] as const

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className={css.section}
      aria-labelledby="how-it-works-heading"
    >
      <div className={css.inner}>
        <header className={css.intro}>
          <h2 id="how-it-works-heading" className={css.title}>
            Jak to działa
          </h2>
          <p className={css.subtitle}>
            Od pomysłu do gotowego prezentu — szybko, prosto i w pełni personalizowanie.
          </p>
        </header>

        <ol className={css.steps}>
          {STEPS.map((item) => (
            <li key={item.step} className={css.step}>
              <span className={css.stepIndex} aria-hidden="true">
                {item.step}
              </span>
              <h3 className={css.stepTitle}>{item.title}</h3>
              <p className={css.stepText}>{item.description}</p>
            </li>
          ))}
        </ol>

        <div className={css.ctaWrap}>
          <a href="#contact" className={css.cta}>
            Zamów swój prezent
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
