import type { Metadata } from "next"
import Link from "next/link"
import css from "../legal-pages.module.css"

export const metadata: Metadata = {
  title: "Polityka cookies | ROTA",
  description:
    "Informacje o plikach cookies i technologiach podobnych używanych na stronie ROTA.",
}

export default function PolitykaCookiesPage() {
  return (
    <main className={css.main}>
      <Link href="/" className={css.back}>
        ← Strona główna
      </Link>
      <h1 className={css.title}>Polityka cookies</h1>
      <p className={css.updated}>Obowiązuje od: 20 kwietnia 2026 r.</p>

      <div className={css.article}>
        <p>
          Ta strona może korzystać z plików cookies i podobnych technologii
          (np. local storage, pikseli śledzących). Poniżej wyjaśniamy, po co to
          robimy i jak możesz zarządzać ustawieniami.
        </p>

        <h2>1. Czym są pliki cookies?</h2>
        <p>
          To małe pliki zapisywane na urządzeniu użytkownika przez przeglądarkę.
          Dzięki nim strona może m.in. zapamiętać preferencje, mierzyć ruch lub
          poprawiać działanie serwisu.
        </p>

        <h2>2. Jakie cookies możemy stosować</h2>
        <ul>
          <li>
            <strong>Niezbędne / funkcjonalne</strong> — zapewniają podstawowe
            działanie strony (np. zapamiętanie wyborów interfejsu, jeśli taki
            mechanizm zostanie wdrożony).
          </li>
          <li>
            <strong>Analityczne / statystyczne</strong> — pomagają zrozumieć, jak
            korzystasz ze strony (np. liczba wizyt, popularne podstrony). Jeśli
            korzystamy z Google Analytics lub podobnych narzędzi, ich dostawca może
            ustawiać własne cookies zgodnie ze swoją polityką.
          </li>
          <li>
            <strong>Marketingowe (opcjonalnie)</strong> — tylko jeśli zostaną
            wdrożone i jeśli wymagają zgody — np. piksele reklamowe. Obecnie
            informujemy zawczasu, abyś mógł podjąć świadomą decyzję.
          </li>
        </ul>

        <h2>3. Google Analytics i podobne narzędzia</h2>
        <p>
          Jeśli na stronie uruchomimy Google Analytics (lub inne narzędzie
          analityczne z cookies), przetwarzanie danych odbywa się zgodnie z
          dokumentacją dostawcy oraz — w zakresie danych osobowych — z{" "}
          <Link href="/polityka-prywatnosci" className={css.inlineLink}>
            Polityką prywatności
          </Link>
          . W takim przypadku zwykle potrzebna jest informacja o cookies w banerze
          lub ustawieniach zgód (CMP), zgodnie z obowiązującymi wytycznymi.
        </p>

        <h2>4. Okres przechowywania</h2>
        <p>
          Czas życia cookies zależy od ich typu: sesyjne wygasają po zamknięciu
          przeglądarki, trwałe mogą obowiązywać przez określony w konfiguracji czas
          (np. 12–24 miesiące w narzędziach analitycznych, o ile nie skrócisz tego
          w panelu dostawcy).
        </p>

        <h2>5. Jak zarządzać cookies</h2>
        <p>
          Możesz usunąć lub zablokować cookies w ustawieniach przeglądarki. Pamiętaj,
          że całkowite wyłączenie cookies może utrudnić korzystanie ze strony.
        </p>

        <h2>6. Zmiany</h2>
        <p>
          Polityka może być aktualizowana — publikujemy datę obowiązywania u góry
          dokumentu.
        </p>
      </div>
    </main>
  )
}
