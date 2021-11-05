const planLekcji = {
  poniedzialek: [
    {
      lekcja: "Fizyka I",
      kiedy: {
        dataPL: "Tydzień 6-10",
        type: {
          tydzien: [[9, 31], [11, 4]],
        }
      },
      typ: "labolatoria",
      wykladowca: "dr inż. A. Dudziak",
      sala: "Z102",
      start: "08:00",
      stop: "10.15"
    },
    {
      lekcja: "Komputerowa grafika inżynierska",
      typ: "labolatoria",
      wykladowca: "dr hab. inż. T. Kołtunowicz",
      sala: "E6",
      start: "10:30",
      stop: "12:00"
    },
    {
      lekcja: "Kosztorysowanie",
      kiedy: {
        dataPL: "Tygodnie parzyste",
        type: {
          parzysty: true,
        }
      },
      typ: "labolatoria",
      wykladowca: "dr inż. V. Bondariev",
      sala: "T403",
      start: "12:15",
      stop: "14:00"
    },
    {
      lekcja: "Podstawy informatyki",
      typ: "labolatoria",
      wykladowca: "dr inż. J. Majcher",
      sala: "E406",
      start: "16:15",
      stop: "18:00"
    }
  ],
  wtorek: [
    {
      lekcja: "Matematyka I",
      typ: "wykłady",
      wykladowca: "dr hab. Z. Łagodowski",
      sala: "E201",
      start: "08:15",
      stop: "10:00"
    },
    {
      lekcja: "Komputerowa grafika inżynierska",
      typ: "wykłady",
      wykladowca: "dr hab. inż. T. Kołtunowicz",
      sala: "E301",
      start: "10:15",
      stop: "12:00"
    },
    {
      lekcja: "Kosztorysowanie",
      kiedy: {
        dataPL: "Tydzień 1-8",
        type: {
          tydzien: [[9, 1], [10, 20]],
        }
      },
      typ: "wykłady",
      wykladowca: "dr inż. V. Bondariev",
      sala: "E301",
      start: "12:15",
      stop: "14:00"
    },
    {
      lekcja: "Narzędzia informatyczne",
      kiedy: {
        dataPL: "Tygodnie nieparzyste",
        type: {
          parzysty: false,
        }
      },
      typ: "wykłady",
      wykladowca: "?",
      sala: "E301",
      start: "14:15",
      stop: "16:00"
    },
    {
      lekcja: "Ochrona własności intelektualnej",
      kiedy: {
        dataPL: "Tygodnie parzyste",
        type: {
          parzysty: true,
        }
      },
      typ: "wykłady",
      wykladowca: "?",
      sala: "E301",
      start: "14:15",
      stop: "16:00"
    }
  ],
  sroda: [
    {
      lekcja: "Wstęp do matematyki",
      typ: "wykłady",
      wykladowca: "dr hab. Z. Łagodowski",
      sala: "E201",
      start: "08:15",
      stop: "10:00"
    },
    {
      lekcja: "Fizyka I",
      typ: "wykłady",
      wykladowca: "dr inż. A. Dudziak",
      sala: "E201",
      start: "10:15",
      stop: "11:45"
    },
    {
      lekcja: "Podstawy informatyki",
      typ: "wykłady",
      wykladowca: "dr hab. inż. J. Kozak",
      sala: "E201",
      start: "12:15",
      stop: "14:00"
    },
    {
      lekcja: "Wychowanie fizyczne I",
      typ: "ćwiczenia",
      wykladowca: "?",
      sala: "?",
      start: "14:00",
      stop: "15:30"
    },
    {
      lekcja: "Matematyka, fekultet",
      kiedy: {
        dataPL: "3 listopada",
        type: {
          dzien: [10, 3]
        }
      },
      typ: "fekultet",
      wykladowca: "dr M.Kubalińska",
      sala: "E402",
      start: "16:00",
      stop: "18:15"
    },
    {
      lekcja: "Wprowadzenie na rynek pracy i do działalności gospodarczej",
      kiedy: {
        dataPL: "Tygodnie 1-10",
        type: {
          tydzien: [[9, 1], [11, 4]],
        }
      },
      typ: "wykłady",
      wykladowca: "?",
      sala: "E201",
      start: "16:30",
      stop: "18:00"
    }
  ],
  czwartek: [
    {
      lekcja: "Narzędzia informatyczne",
      typ: "labolatoria",
      wykladowca: "mgr inż. A. Chudy",
      sala: "H24",
      start: "12:15",
      stop: "14:00"
    },
    {
      lekcja: "Matematyka, fekultet",
      typ: "fekultet",
      wykladowca: "dr M. Kubalińska",
      sala: "E401",
      start: "16:00",
      stop: "18:15"
    },
    {
      lekcja: "Prawa i obowiązki studenta",
      kiedy: {
        dataPL: "14 października",
        type: {
          dzien: [9, 14]
        }
      },
      typ: "Szkolenie",
      wykladowca: "?",
      sala: "E301",
      start: "16:30",
      stop: "?"
    }
  ],
  piatek: [
    {
      lekcja: "Wstęp do matematyki",
      typ: "ćwiczenia",
      wykladowca: "dr M. Kubalińska",
      sala: "E402",
      start: "08:30",
      stop: "10:00"
    },
    {
      lekcja: "Matematyka I",
      typ: "ćwiczenia",
      wykladowca: "dr hab. Z. Łagodowski",
      sala: "S15a",
      start: "10:15",
      stop: "12:00"
    },
    {
      lekcja: "Przysposobenie biblioteczne",
      kiedy: {
        dataPL: "29 października",
        type: {
          dzien: [9, 29]
        }
      },
      typ: "ćwiczenia",
      wykladowca: "?",
      sala: "C302 BPL",
      start: "12:15",
      stop: "13:45"
    },
    {
      lekcja: "Fizyka I",
      kiedy: {
        dataPL: "Tygodnie nieparzyste",
        type: {
          parzysty: false,
        }
      },
      typ: "ćwiczenia",
      wykladowca: "dr inż. K. Siedliska",
      sala: "E402",
      start: "14:15",
      stop: "16:00"
    },
  ]
}

export default planLekcji;
