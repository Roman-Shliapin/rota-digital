import type { Metadata } from "next"
import Link from "next/link"
import css from "../legal-pages.module.css"

export const metadata: Metadata = {
  title: "Polityka prywatności | ROTA",
  description:
    "Informacje o przetwarzaniu danych osobowych przez ROTA w związku z usługami cyfrowych prezentów.",
}

export default function PolitykaPrywatnosciPage() {
  return (
    <main className={css.main}>
      <Link href="/" className={css.back}>
        ← Strona główna
      </Link>
      <h1 className={css.title}>Polityka prywatności</h1>
      <p className={css.updated}>Obowiązuje od: 20 kwietnia 2026 r.</p>

      <div className={css.article}>
        <p>
          Niniejsza polityka opisuje, jak ROTA („my”, „Administrator”) przetwarza
          dane osobowe w związku z przygotowaniem spersonalizowanych stron
          prezentowych oraz kontaktem z nami (m.in. Instagram, e-mail,
          telefon).
        </p>

        <h2>1. Administrator danych</h2>
        <p>
          Administratorem Twoich danych osobowych jest podmiot prowadzący markę
          ROTA (ROTA advancement). Aktualny adres e-mail kontaktowy oraz dane
          rejestrowe publikujemy na stronie lub przekazujemy na żądanie.
        </p>

        <h2>2. Jakie dane zbieramy</h2>
        <p>W zależności od sposobu kontaktu i zakresu projektu możemy przetwarzać m.in.:</p>
        <ul>
          <li>
            <strong>Dane identyfikacyjne i kontaktowe:</strong> imię lub imię i
            nazwisko, adres e-mail, numer telefonu, nazwa profilu na Instagramie
            lub inny identyfikator wiadomości prywatnej.
          </li>
          <li>
            <strong>Treści przekazane przez Ciebie w celu realizacji projektu:</strong>{" "}
            zdjęcia, nagrania wideo lub notatki głosowe (jeśli je przekażesz),
            teksty życzeń, opisy okazji, materiały muzyczne (np. linki do utworów)
            oraz inne treści niezbędne do przygotowania strony.
          </li>
          <li>
            <strong>Dane techniczne i statystyczne:</strong> np. adres IP, typ
            przeglądarki, czas wizyty na stronie — o ile stosujemy narzędzia
            analityczne zgodnie z{" "}
            <Link href="/polityka-cookies" className={css.inlineLink}>
              Polityką cookies
            </Link>
            .
          </li>
        </ul>

        <h2>3. W jakim celu i na jakiej podstawie przetwarzamy dane</h2>
        <ul>
          <li>
            <strong>Kontakt i obsługa zapytań</strong> (Instagram DM, WhatsApp,
            e-mail, telefon) — podstawa: art. 6 ust. 1 lit. b RODO (działania
            przed zawarciem umowy) oraz lit. f (prawnie uzasadniony interes:
            komunikacja z potencjalnym klientem).
          </li>
          <li>
            <strong>Przygotowanie i wdrożenie zamówionej strony prezentowej</strong>{" "}
            — podstawa: art. 6 ust. 1 lit. b RODO (wykonanie umowy).
          </li>
          <li>
            <strong>Rozliczenia, archiwizacja korespondencji, dochodzenie roszczeń</strong>{" "}
            — podstawa: art. 6 ust. 1 lit. c oraz lit. f RODO.
          </li>
          <li>
            <strong>Marketing bez zgody tylko w ramach prawa</strong> (np. pod
            warunkiem spełnienia przesłanek tzw. marketingu usług własnego) —
            zgodnie z obowiązującymi przepisami.
          </li>
        </ul>

        <h2>4. Odbiorcy danych</h2>
        <p>
          Dane mogą być powierzane podmiotom przetwarzającym je w naszym imieniu
          (np. hosting, poczta e-mail, narzędzia do przechowywania plików,
          analityka) wyłącznie na podstawie umów powierzenia i w zakresie
          niezbędnym do świadczenia usługi.
        </p>

        <h2>5. Przekazywanie poza EOG</h2>
        <p>
          Jeśli korzystamy z usług dostawców z siedzibą poza Europejskim Obszarem
          Gospodarczym, stosujemy mechanizmy zgodne z RODO (np. standardowe klauzule
          umowne), o ile jest to wymagane.
        </p>

        <h2>6. Jak długo przechowujemy dane</h2>
        <p>
          Dane związane z realizacją projektu przechowujemy przez czas realizacji
          umowy, a następnie przez okres przedawnienia roszczeń lub wymagany
          przepisami podatkowymi i archiwizacyjnymi. Treści przekazane do projektu
          (np. zdjęcia) usuwamy lub anonimizujemy po zakończeniu współpracy i
          upływie uzasadnionego okresu na ewentualne poprawki, chyba że umowa
          stanowi inaczej.
        </p>

        <h2>7. Twoje prawa</h2>
        <p>
          Przysługuje Ci m.in. prawo dostępu do danych, ich sprostowania,
          usunięcia, ograniczenia przetwarzania, przenoszenia (w zakresie
          przewidzianym prawem) oraz wniesienia sprzeciwu wobec przetwarzania na
          podstawie prawnie uzasadnionego interesu. Możesz także wnieść skargę do
          Prezesa Urzędu Ochrony Danych Osobowych (UODO).
        </p>

        <h2>8. Dobrowolność podania danych</h2>
        <p>
          Podanie danych kontaktowych oraz materiałów do projektu jest dobrowolne,
          ale bez nich zwykle nie jesteśmy w stanie przygotować spersonalizowanej
          strony ani odpowiedzieć na zapytanie.
        </p>

        <h2>9. Kontakt w sprawach ochrony danych</h2>
        <p>
          Pytania dotyczące przetwarzania danych osobowych możesz kierować na adres
          e-mail podany na stronie lub przez wybrany kanał kontaktu (np. Instagram
          DM), zaznaczając temat „RODO / dane osobowe”.
        </p>

        <p>
          <strong>Uwaga:</strong> niniejszy dokument ma charakter informacyjny.
          W razie wątpliwości skonsultuj treść z prawnikiem specjalizującym się w
          ochronie danych osobowych.
        </p>
      </div>
    </main>
  )
}
