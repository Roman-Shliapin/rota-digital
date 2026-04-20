import css from "./Pricing.module.css"

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Do prostych życzeń i szybkiego efektu „wow”.",
    price: "49",
    features: [
      "1 personalizowana strona",
      "zdjęcia",
      "tekst / życzenia",
      "muzyka w tle",
      "gotowy link",
    ],
    cta: "Wybierz Starter",
    variant: "default" as const,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Najczęstszy wybór — więcej emocji i ruchu na stronie.",
    price: "79",
    features: [
      "wszystko ze Starter",
      "animacje",
      "efekty premium",
      "sekcja wspomnień",
      "szybsza realizacja",
    ],
    cta: "Najczęściej wybierany",
    variant: "premium" as const,
  },
  {
    id: "luxury",
    name: "Luxury",
    tagline: "Dla ślubów i dużych niespodzianek — pełna swoboda.",
    price: "129",
    features: [
      "pełny custom design",
      "video / voice note",
      "dodatkowe sekcje",
      "priorytet",
      "poprawki premium",
    ],
    cta: "Wybierz Luxury",
    variant: "default" as const,
  },
] as const

const Pricing = () => {
  return (
    <section
      id="pricing"
      className={css.section}
      aria-labelledby="pricing-heading"
    >
      <div className={css.inner}>
        <header className={css.intro}>
          <h2 id="pricing-heading" className={css.title}>
            Wybierz pakiet dla siebie
          </h2>
          <p className={css.subtitle}>
            Każdy projekt tworzymy indywidualnie — wybierz poziom dopasowany do
            okazji.
          </p>
        </header>

        <div className={css.grid}>
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={
                plan.variant === "premium"
                  ? `${css.card} ${css.cardPremium}`
                  : css.card
              }
            >
              {plan.variant === "premium" && (
                <span className={css.badge}>Polecany</span>
              )}

              <h3 className={css.planName}>{plan.name}</h3>
              <p className={css.tagline}>{plan.tagline}</p>
              <p className={css.price}>
                <span className={css.priceValue}>{plan.price}</span>
                <span className={css.priceCurrency}> zł</span>
              </p>

              <ul className={css.featureList}>
                {plan.features.map((f) => (
                  <li key={f} className={css.featureItem}>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  plan.variant === "premium" ? css.ctaPremium : css.cta
                }
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
