import type { Metadata } from "next"
import Link from "next/link"
import css from "../legal-pages.module.css"

export const metadata: Metadata = {
  title: "Regulamin | ROTA",
  description:
    "Regulamin świadczenia usług przygotowania spersonalizowanych stron prezentowych przez ROTA.",
}

export default function RegulaminPage() {
  return (
    <main className={css.main}>
      <Link href="/" className={css.back}>
        ← Strona główna
      </Link>
      <h1 className={css.title}>Regulamin</h1>
      <p className={css.updated}>Obowiązuje od: 20 kwietnia 2026 r.</p>

      <div className={css.article}>
        <p>
          Regulamin określa zasady korzystania z usług ROTA polegających na
          przygotowaniu spersonalizowanych stron prezentowych oraz warunki
          współpracy. Złożenie zamówienia lub przesłanie materiałów po akceptacji
          oferty oznacza zapoznanie się z treścią regulaminu.
        </p>

        <h2>1. Definicje</h2>
        <p>
          <strong>Usługodawca</strong> — ROTA. <strong>Klient</strong> — osoba
          fizyczna lub prawna zawierająca umowę o wykonanie projektu.{" "}
          <strong>Projekt</strong> — spersonalizowana strona internetowa (prezent
          cyfrowy) przygotowana na podstawie briefu i materiałów Klienta.
        </p>

        <h2>2. Przedmiot usługi</h2>
        <p>
          Usługodawca przygotowuje Projekt zgodnie z ustalonym pakietem (np.
          Starter, Premium, Luxury), zakresem funkcjonalnym oraz briefem. Zakres
          nie obejmuje usług spoza umowy, chyba że strony ustalą inaczej na piśmie
          (w tym wiadomości e-mail).
        </p>

        <h2>3. Zawarcie umowy i realizacja</h2>
        <ul>
          <li>
            Umowa zostaje zawarta po potwierdzeniu przez Klienta zakresu i ceny
            (np. wiadomością e-mail lub wiadomością w social media) oraz — w
            wymaganych przypadkach — po wpłacie zaliczki lub pełnej płatności.
          </li>
          <li>
            Klient przekazuje materiały (zdjęcia, teksty, muzykę w formie
            uzgodnionej) w terminie umożliwiającym realizację. Opóźnienie po stronie
            Klienta może przesuwać terminy realizacji.
          </li>
        </ul>

        <h2>4. Terminy realizacji</h2>
        <p>
          Orientacyjny czas realizacji podawany jest indywidualnie (np. w
          korespondencji). Termin liczony jest od momentu otrzymania kompletu
          materiałów i ewentualnej wpłaty. Usługodawca informuje o opóźnieniach
          wynikających z siły wyższej lub złożoności projektu.
        </p>

        <h2>5. Poprawki</h2>
        <p>
          Liczba rund poprawek oraz ich zakres wynika z wybranego pakietu lub
          odrębnego porozumienia. Poprawki obejmują typowe korekty treści i układu
          w ramach pierwotnego briefu; nowe funkcje lub całkowita zmiana koncepcji
          mogą być wyceniane osobno.
        </p>

        <h2>6. Płatności</h2>
        <p>
          Ceny podane na stronie mają charakter informacyjny do momentu
          potwierdzenia indywidualnej wyceny. Płatności realizowane są w formie
          uzgodnionej (przelew, link płatności itp.). Brak płatności w terminie może
          wstrzymać realizację lub udostępnienie gotowego linku.
        </p>

        <h2>7. Zwroty i rezygnacja</h2>
        <p>
          Po rozpoczęciu prac rozliczenie następuje proporcjonalnie do wykonanej
          pracy i poniesionych kosztów, o ile przepisy bezwzględnie obowiązujące
          prawa konsumenta nie stanowią inaczej. W przypadku usług w pełni
          wykonanych i przekazanych Klientowi zwrot może nie przysługiwać — z
          wyjątkiem uprawnień konsumenta określonych w prawie.
        </p>

        <h2>8. Odpowiedzialność</h2>
        <p>
          Usługodawca nie odpowiada za treści przekazane przez Klienta (np.
          treści naruszające prawa osób trzecich). Klient oświadcza, że posiada
          prawa do przekazanych zdjęć i materiałów. Usługodawca dokłada starań, by
          Projekt działał poprawnie w typowych warunkach technicznych; odpowiedzialność
          ograniczona jest do wysokości wynagrodzenia za dany Projekt, chyba że
          bezwzględnie obowiązujące przepisy stanowią inaczej.
        </p>

        <h2>9. Reklamacje</h2>
        <p>
          Reklamacje można zgłaszać na adres e-mail lub kanał kontaktu wskazany w
          korespondencji, z opisem problemu. Usługodawca rozpatruje reklamację w
          terminie 14 dni kalendarzowych, chyba że przepisy o konsumentach wymagają
          krótszego terminu.
        </p>

        <h2>10. Postanowienia końcowe</h2>
        <p>
          Regulamin może być zmieniony; aktualna wersja publikowana jest na stronie
          internetowej. W sprawach nieuregulowanych zastosowanie mają przepisy
          prawa polskiego. Przetwarzanie danych osobowych opisuje{" "}
          <Link href="/polityka-prywatnosci" className={css.inlineLink}>
            Polityka prywatności
          </Link>
          .
        </p>

        <p>
          <strong>Uwaga:</strong> treść regulaminu ma charakter wzorcowy — dostosuj
          ją do faktycznego modelu płatności, pakietów i procesu obsługi oraz
          skonsultuj z radcą prawnym.
        </p>
      </div>
    </main>
  )
}
