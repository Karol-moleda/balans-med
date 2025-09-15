import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../shared/pipes/safe.pipe';

interface Doctor {
  id: number;
  name: string;
  description: string;
  image: string;
  formattedDescription?: string;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [
    {
      id: 1,
      name: 'lek. TATSIANA HUZAVA',
      description: 'Jestem lekarzem specjalistą psychiatrii. Absolwentką Białoruskiego Państwowego Uniwersytetu Medycznego, po nostryfikacji dyplomu w Polsce w 2016 roku. Rezydenturę odbywałam w Szpitalu Klinicznym im dr Józefa Babińskiego w Krakowie, gdzie aktualnie kontynuuję pracę na Oddziale Psychogeriatrii. Stale poszerzam swoją wiedzę uczestnicząc w kursach oraz szkoleniach z zakresu psychiatrii dorosłych oraz wieku dziecięcego. W pracy z pacjentem staram się stworzyć atmosferę spokoju i zrozumienia, żeby jak najlepiej móc poznać jego problematykę, a następnie trafnie dobrać leczenie farmakologiczne i ewentualnie zasugerować najbardziej odpowiedni nurt psychoterapii. Zakres świadczeń: poradnictwo psychiatryczne dorosłych oraz dzieci i młodzieży od 14 roku życia. Zainteresowania prywatne: książki, sport, podróżowania Zakres usług: konsultacja psychiatryczna dorośli/ dzieci od 14 roku życia.',
      image: 'img/Tatsiana.jpg'
    },
    {
      id: 2,
      name: 'mgr. ALEKSANDRA CZARNOTA-MAZUR',
      description: 'Jestem absolwentką kierunku psychologia stosowana na Uniwersytecie Jagiellońskim.Psychoterapeutką w trakcie szkolenia prowadzonego przez Krakowskim Centrum Edukacyjnym Cogito, akredytowanego przez Polskie Towarzystwo Psychiatryczne, a także interwentem kryzysowym.Wiedzę oraz doświadczenie zawodowe zdobywałam, m.in.w Szpitalu Klinicznym im.Dr.J.Babińskiego w Krakowie oraz Szpitalu im.L.Rydygiera w Krakowie, a także w czasie licznych szkoleń doszkalających. Swoją pracę poddaje regularnej superwizji indywidualnej oraz grupowej.Jestem również członkiem Polskiego Towarzystwa Psychiatrycznego, a także Sekcji Naukowej Psychoterapii Polskiego Towarzystwa Psychiatrycznego. Pracę w prywatnym gabinecie łączę z pracą na dziennym oddziale psychiatrycznym w Szpitalu im.dr J.Babińskiego, gdzie prowadzę zarówno procesy indywidualne, jak i grupy terapeutyczne, a także zajęcia z psychodramy. Specjalizuje się w pracy psychoterapeutycznej z osobami dorosłymi z zaburzeniami osobowości, a także osobami doświadczającymi objawów depresji, choroby afektywnej dwubiegunowej(CHAD), zaburzeń lękowych, psychosomatycznych oraz osobami z doświadczeniami psychotycznymi. Nie pracuje z uzależnieniami. W czym mogę pomóc? ● rozwój osobisty ● poznanie i zrozumienie siebie ● budowanie zdrowych i satysfakcjonujących związków z drugim człowiekiem ● zdrowa komunikacja z innymi ● budowanie motywacji ● radzenie sobie z trudnymi emocjami ● obniżony nastrój ● niskie poczucie własnej wartości ● lęki i nerwowość ● zachowania autodestrukcyjne i samookaleczenia ● sytuacje kryzysowe',
      image: 'img/Aleksandra.jpg'
    },
    {
      id: 3,
      name: 'mgr. KATARZYNA FRYDRYK',
      description: 'Jestem absolwentką psychologii na Akademii Pedagogiki Specjalnej w Warszawie, ze specjalnością psychologia kliniczna. Ukończyłam także szkolenie z Terapii Skoncentrowanej na Rozwiązaniach (TSR) w CTSR. Doświadczenie zawodowe zdobywałam m.in. w Krajowym Ośrodku Adopcyjno-Opiekuńczym oraz w Świetlicy Opiekuńczej, wspierając dzieci i rodziny w trudnych sytuacjach życiowych. Posiadam również doświadczenie w obszarze HR i doradztwa personalnego. W pracy terapeutycznej ważna jest dla mnie autentyczna relacja - oparta na zaufaniu, akceptacji i wzajemnym szacunku. Tworzę bezpieczną przestrzeń, w której można się zatrzymać, poczuć komfortowo i - bez oceniania - podzielić emocjami, doświadczeniami i tym, co trudne. W swojej praktyce korzystam z technik podejścia poznawczo-behawioralnego (CBT) oraz TSR, wspierając pacjentów w odnajdywaniu skutecznych sposobów na poprawę jakości życia. Na co dzień pracuję z dorosłymi osobami, które zmagają się z lękiem, obniżonym nastrojem, niską samooceną, przewlekłym stresem, wypaleniem zawodowym czy trudnościami w relacjach. Towarzyszę także w przechodzeniu przez kryzysy życiowe, poczucie samotności i zagubienia. Pomagam lepiej rozumieć siebie, wzmacniać poczucie sprawczości i budować życie w zgodzie z własnymi wartościami. Dbam o swój rozwój zawodowy - regularnie uczestniczę w szkoleniach, webinarach i superwizjach, by móc wspierać moich pacjentów z uważnością, otwartością i w oparciu o rzetelną wiedzę.',
      image: 'img/Katarzyna.jpg'
    },
    {
      id: 4,
      name: 'lek. ELŻBIETA KRAWIEC',
      description: 'Jestem lekarzem medycyny, specjalistą psychiatrii z wieloletnim doświadczeniem klinicznym. Na co dzień pracuję w Szpitalu Klinicznym im. Dr. Józefa Babińskiego w Krakowie, gdzie kieruję Oddziałem Psychogeriatrycznym. Nieustannie poszerzam swoją wiedzę, uczestnicząc w licznych konferencjach naukowych oraz sympozjach. W pracy z pacjentem szczególną wagę przywiązuję do budowania przyjaznej atmosfery, która sprzyja osiągnięciu jak najlepszych efektów terapeutycznych. Moje zainteresowania zawodowe koncentrują się wokół psychiatrii dorosłych oraz psychogeriatrii. W czym mogę pomóc? ● zaburzenia nastroju ● depresja ● zaburzenia lękowe ● zaburzenia psychotyczne ● zaburzenia otępienne ● psychiatria dorosłych ● psychogeriatria',
      image: 'img/Krawiec.jpg'  
    },
        {
      id: 5,
      name: 'mgr. AGNIESZKA SKRZYPOŃ',
      description: 'Jestem absolwentką psychologii Uniwersytetu Jagiellońskiego, specjalistą psychologii klinicznej (ukończone 4-letnie szkolenie specjalizacyjne z zakresu psychologii klinicznej, ośrodek Szkolący - Szpital Kliniczny im. dra Józefa Babińskiego w Krakowie). W ramach szkolenia specjalizacyjnego odbyłam liczne staże kliniczne ukierunkowane na zdobywanie praktycznych umiejętności z zakresu szeroko pojętej diagnozy klinicznej i pomocy psychologicznej. Ukończyłam studia podyplomowe &quot;Podstawy Psychoterapii&quot; przygotowujące do uzyskania Certyfikatu Psychoterapeuty prowadzonego przez Katedrę Psychoterapii Uniwersytetu Jagiellońskiego Collegium Medicum i atestowanego przez Sekcję Naukową Psychoterapii Polskiego Towarzystwa Psychiatrycznego. Poza tym poszerzałam swoje kompetencje na studiach podyplomowych “Psychogeriatria z elementami neuropsychologii” w Medycznym Centrum Kształcenia Podyplomowego Uniwersytetu Jagiellońskiego, a także “Psychologia Transportu” na Wydziale Zarządzania i Komunikacji Społecznej Uniwersytetu Jagiellońskiego. Na bieżąco zdobywam, poszerzam i aktualizuję swoją wiedzę z zakresu diagnozy psychologicznej, pomocy psychologicznej i psychoterapii na konferencjach i szkoleniach. Jestem członkiem Polskiego Towarzystwa Psychologicznego, a także Polskiego Towarzystwa Psychiatrycznego - Sekcja Naukowa Psychoterapii. Na co dzień pracuję w Oddziale Ogólnopsychiatrycznym Szpitala Klinicznego im. dra Józefa Babińskiego w Krakowie, Poradni Zdrowia Psychicznego tegoż szpitala. Poza tym przeprowadzam psychologiczne wizyty środowiskowe u Pacjentów leczących się psychiatrycznie.',
      image: 'img/Agnieszka.png'
    },
            {
      id: 6,
      name: 'mgr. Dominika OLEŚ-KAŁUŻA',
      description: 'Jestem psychologiem-absolwentką Uniwersytetu Pedagogicznego w Krakowie. W trakcie całościowego szkolenia psychoterapeutycznego w Krakowskim Centrum Psychodynamicznym. Szkolenie jest rekomendowane przez Polskie Towarzystwo Psychologiczne oraz Polskie Towarzystwo Psychoterapii Psychodynamicznej.  Doświadczenie zdobywałam w Szpitalu im. dr. Józefa Babińskiego, w prywatnym gabinecie psychologicznym oraz w Ośrodku Pomocy Psychologicznej i Psychoterapeutycznej dla dzieci i młodzieży. Pracuję z młodzieżą (od 13 roku życia) i z osobami dorosłymi (również rodzicami dzieci w wieku szkolnym i przedszkolnym). Pomagam tym, którzy potrzebują wsparcia w odnalezieniu rozwiązań dla narastających trudności, jak i osobom, które mierzą się z różnymi trudnościami życiowymi: żałobą, stresem, kryzysami czy problemami w relacjach interpersonalnych. Najczęściej pracuję z osobami doświadczającymi zaburzeń nastroju, osobowości, stanów lękowych oraz depresji. Swoją pracę poddaję regularnej superwizji - indywidualnej i grupowej u certyfikowanego superwizora, rekomendowanego przez PTPPD. W pracy kieruję się kodeksem etyki psychoterapeuty Polskiego Towarzystwa Psychoterapii Psychodynamicznej. W pomaganiu szczególnie ważna jest dla mnie empatia oraz otwarcie na zrozumienie problemów drugiej osoby',
      image: 'img/Dominika.jpg'
    },
                {
      id: 7,
      name: 'lek. ZUZANNA STERNA',
      description: 'Jestem lekarzem, absolwentką Uniwersytetu Medycznego w Łodzi. Obecnie odbywam specjalizację z psychiatrii w Szpitalu Klinicznym im. dr. Józefa Babińskiego w Krakowie. Stale poszerzam swoją wiedzę i umiejętności, uczestnicząc w kursach, konferencjach oraz śledząc najnowsze piśmiennictwo z zakresu psychiatrii. Oferuję konsultacje psychiatryczne dla osób dorosłych. W pracy z pacjentem szczególnie zależy mi na stworzeniu bezpiecznej i pełnej zaufania przestrzeni, opartej na szacunku i zrozumieniu. Dzięki temu możliwe jest trafne dobranie indywidualnego planu leczenia farmakologicznego, a w razie potrzeby – również wskazanie odpowiedniego nurtu psychoterapii.',
      image: 'img/zuzia.jpeg'
    }
  ];

  ngOnInit() {
    this.doctors.forEach(doctor => {
      doctor.isExpanded = false;
      doctor.formattedDescription = this.formatDescription(doctor.description, false);
    });
  }

  formatDescription(description: string, isExpanded: boolean): string {
    const maxLength = 250;
    
    if (isExpanded) {
      return this.formatFullDescription(description);
    }
    
    if (description.length <= maxLength) {
      return this.formatFullDescription(description);
    }
    
    let truncated = description.substring(0, maxLength);
    
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex > maxLength * 0.8) {
      truncated = truncated.substring(0, lastSpaceIndex);
    }
    
    return this.formatFullDescription(truncated) + '...';
  }

  private formatFullDescription(description: string): string {
    let formatted = description
      .replace(/\s+/g, ' ')
      .trim()
      
      .replace(/●\s*([^●]+?)(?=●|$)/g, '<li>$1</li>')
      
      .replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>')
      
      .replace(/\.\s+([A-ZĄĆĘŁŃÓŚŹŻ])/g, '.</p><p>$1')
      
      .replace(/(W czym mogę pomóc\?|Zakres świadczeń:|Zainteresowania prywatne:|Zakres usług:|Specjalizuję się w|Nie pracuję z)/gi, '<strong>$1</strong>')
      
      .replace(/(jestem\s+lekarzem|jestem\s+psychologiem|absolwentką|specjalistą|psychoterapeutką|interwentem\s+kryzysowym)/gi, '<strong>$1</strong>')
      
      .replace(/(Uniwersytetu?\s+[A-ZĄĆĘŁŃÓŚŹŻ][^.]+|Szpitalu?\s+[A-ZĄĆĘŁŃÓŚŹŻ][^.]+|Akademii?\s+[A-ZĄĆĘŁŃÓŚŹŻ][^.]+|Centrum\s+[A-ZĄĆĘŁŃÓŚŹŻ][^.]+|Towarzystwa?\s+[A-ZĄĆĘŁŃÓŚŹŻ][^.]+)/gi, '<strong>$1</strong>')
      
      .replace(/^(?!<[pu])/gm, '<p>')
      .replace(/(?<!>)$/gm, '</p>');
    
    formatted = formatted
      .replace(/<\/p><p>/g, '</p>\n<p>')
      .replace(/<p><\/p>/g, '')
      .replace(/(<p>.*?<\/p>)/gs, '$1\n')
      .replace(/^\n+|\n+$/g, ''); 
    
    return formatted;
  }

  onImageError(event: any) {
    const imgSrc = event.target.src;
    
    if (imgSrc.includes('placehold.co')) {
      return;
    }
    const doctorName = event.target.alt;
    const placeholderUrl = `https://placehold.co/300x400/2a7d8c/white?text=${encodeURIComponent(doctorName)}`;
    event.target.src = placeholderUrl;
  }

  toggleDescription(doctor: Doctor) {
    doctor.isExpanded = !doctor.isExpanded;
    doctor.formattedDescription = this.formatDescription(doctor.description, doctor.isExpanded);
  }
}
