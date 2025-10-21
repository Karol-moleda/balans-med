# 🎉 Promotion Banner Component

## Opis
Komponent do wyświetlania bannera promocyjnego na stronie głównej. Banner pojawia się jako pierwszy element strony, przed sliderem.

## Jak dodać nową promocję?

### Krok 1: Otwórz plik `promotion-banner.component.ts`

### Krok 2: Znajdź tablicę `promotions` i dodaj nowy obiekt

```typescript
promotions: Promotion[] = [
  {
    id: 'autumn-2024',
    title: 'Zadbaj o siebie tej jesieni',
    // ... reszta promocji jesiennej
    active: false  // ❌ Wyłącz poprzednią promocję
  },
  // ✅ Dodaj nową promocję tutaj
  {
    id: 'winter-2024',
    title: 'Zimowa promocja na zdrowie',
    subtitle: 'Zimą również warto dbać o siebie! ❄️',
    badge: '❄️ ZIMOWA PROMOCJA ❄️',
    discount: '20%',
    discountText: 'ZNIŻKI',
    mainOffer: '5 pierwszych wizyt ze zniżką!',
    offerSubtext: 'Psychiatria • Psychologia',
    description: 'Zapraszamy wszystkich, którzy potrzebują wsparcia w trudnym okresie zimowym 💙',
    endDate: '31 grudnia',
    theme: 'winter',  // autumn, winter, spring, summer
    specialists: ['Jan', 'Maria', 'Piotr'],  // opcjonalne
    specialistsDesc: 'Nasi najlepsi specjaliści',  // opcjonalne
    phoneNumber: '+48889412421',
    onlineBookingUrl: 'https://www.znanylekarz.pl/placowki/balans-med',
    ctaMessage: 'Zimą również dbaj o swoje zdrowie psychiczne! ❄️',
    active: true  // ✅ Aktywuj nową promocję
  }
];
```

### Krok 3: Zapisz plik - gotowe! 🎉

## Dostępne motywy (theme)

- **`autumn`** 🍁 - Jesień (pomarańczowy, czerwony, żółty)
- **`winter`** ❄️ - Zima (niebieski, fioletowy, jasnoniebieski)
- **`spring`** 🌸 - Wiosna (zielony, żółty)
- **`summer`** ☀️ - Lato (różowy, czerwony, żółty)
- **`custom`** - Niestandardowy (możesz dodać własny w SCSS)

## Wymagane pola

| Pole | Typ | Opis |
|------|-----|------|
| `id` | string | Unikalny identyfikator promocji |
| `title` | string | Główny tytuł promocji |
| `subtitle` | string | Podtytuł/opis |
| `badge` | string | Tekst na pulsującym badge'u |
| `discount` | string | Wartość zniżki (np. "15%") |
| `discountText` | string | Tekst pod zniżką (np. "ZNIŻKI") |
| `mainOffer` | string | Główna oferta |
| `offerSubtext` | string | Podtytuł oferty |
| `description` | string | Szczegółowy opis (obsługuje HTML) |
| `endDate` | string | Data końca promocji |
| `theme` | string | Motyw kolorystyczny |
| `phoneNumber` | string | Numer telefonu (z +48) |
| `onlineBookingUrl` | string | Link do umówienia online |
| `ctaMessage` | string | Zachęta do działania |
| `active` | boolean | Czy promocja jest aktywna |

## Opcjonalne pola

| Pole | Typ | Opis |
|------|-----|------|
| `specialists` | string[] | Lista imion specjalistów |
| `specialistsDesc` | string | Opis specjalistów |

## Ukrywanie promocji

Aby ukryć wszystkie promocje, ustaw `active: false` dla wszystkich promocji w tablicy.

## Wskazówki

1. **Tylko jedna aktywna promocja** - Ustaw `active: true` tylko dla jednej promocji
2. **Emojis** - Używaj emoji dla lepszego wyglądu! 🎉
3. **HTML w opisie** - Możesz używać `<strong>`, `<em>` itp. w polu `description`
4. **Daty** - Podawaj daty w formacie czytelnym (np. "7 listopada")

## Przykład szybkiej zmiany

```typescript
// Wyłącz starą promocję
active: false

// Włącz nową promocję
active: true
```

## Dodawanie nowego motywu

Jeśli chcesz dodać własny motyw kolorystyczny, edytuj plik `promotion-banner.component.scss`:

```scss
&.theme-custom {
  background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```
