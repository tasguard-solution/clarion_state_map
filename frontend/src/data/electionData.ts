// Auto-generated from LGALevelResult.csv

export type Party = "APC" | "LP" | "PDP" | "NNPP";

export type LGAElectionResult = {
  lgaId: string;
  lgaName: string;
  apc: number;
  lp: number;
  pdp: number;
  nnpp: number;
  total: number;
  winner: Party;
};

export const PARTY_COLORS: Record<Party, string> = {
  APC: "#3B8BD4",
  LP: "#22c553",
  PDP: "#ef4444",
  NNPP: "#f97316",
};

export const ELECTION_DATA: Record<string, LGAElectionResult[]> = {
  "abia": [
    {
      "lgaId": "aba-north",
      "lgaName": "Aba North",
      "apc": 190,
      "lp": 35898,
      "pdp": 428,
      "nnpp": 94,
      "total": 36610,
      "winner": "LP"
    },
    {
      "lgaId": "aba-south",
      "lgaName": "Aba South",
      "apc": 215,
      "lp": 36717,
      "pdp": 580,
      "nnpp": 96,
      "total": 37608,
      "winner": "LP"
    },
    {
      "lgaId": "arochukwu",
      "lgaName": "Arochukwu",
      "apc": 601,
      "lp": 14287,
      "pdp": 526,
      "nnpp": 33,
      "total": 15447,
      "winner": "LP"
    },
    {
      "lgaId": "bende",
      "lgaName": "Bende",
      "apc": 1545,
      "lp": 18446,
      "pdp": 973,
      "nnpp": 79,
      "total": 21043,
      "winner": "LP"
    },
    {
      "lgaId": "ikwuano",
      "lgaName": "Ikwuano",
      "apc": 407,
      "lp": 14995,
      "pdp": 1065,
      "nnpp": 91,
      "total": 16558,
      "winner": "LP"
    },
    {
      "lgaId": "isiala-ngwa-north",
      "lgaName": "Isiala-Ngwa North",
      "apc": 742,
      "lp": 14336,
      "pdp": 5964,
      "nnpp": 85,
      "total": 21127,
      "winner": "LP"
    },
    {
      "lgaId": "isiala-ngwa-south",
      "lgaName": "Isiala-Ngwa South",
      "apc": 772,
      "lp": 14125,
      "pdp": 2691,
      "nnpp": 75,
      "total": 17663,
      "winner": "LP"
    },
    {
      "lgaId": "isuikwato",
      "lgaName": "Isuikwato",
      "apc": 472,
      "lp": 16038,
      "pdp": 607,
      "nnpp": 78,
      "total": 17195,
      "winner": "LP"
    },
    {
      "lgaId": "obi-ngwa",
      "lgaName": "Obi Ngwa",
      "apc": 564,
      "lp": 23687,
      "pdp": 2747,
      "nnpp": 144,
      "total": 27142,
      "winner": "LP"
    },
    {
      "lgaId": "ohafia",
      "lgaName": "Ohafia",
      "apc": 320,
      "lp": 8327,
      "pdp": 432,
      "nnpp": 98,
      "total": 9177,
      "winner": "LP"
    },
    {
      "lgaId": "osisioma-ngwa",
      "lgaName": "Osisioma Ngwa",
      "apc": 158,
      "lp": 19680,
      "pdp": 610,
      "nnpp": 57,
      "total": 20505,
      "winner": "LP"
    },
    {
      "lgaId": "ugwunagbo",
      "lgaName": "Ugwunagbo",
      "apc": 195,
      "lp": 7066,
      "pdp": 930,
      "nnpp": 34,
      "total": 8225,
      "winner": "LP"
    },
    {
      "lgaId": "ukwa-east",
      "lgaName": "Ukwa East",
      "apc": 264,
      "lp": 5819,
      "pdp": 1200,
      "nnpp": 15,
      "total": 7298,
      "winner": "LP"
    },
    {
      "lgaId": "ukwa-west",
      "lgaName": "Ukwa West",
      "apc": 591,
      "lp": 9557,
      "pdp": 918,
      "nnpp": 20,
      "total": 11086,
      "winner": "LP"
    },
    {
      "lgaId": "umuahia-north",
      "lgaName": "Umuahia North",
      "apc": 795,
      "lp": 51318,
      "pdp": 1529,
      "nnpp": 112,
      "total": 53754,
      "winner": "LP"
    },
    {
      "lgaId": "umuahia-south",
      "lgaName": "Umuahia South",
      "apc": 475,
      "lp": 25017,
      "pdp": 1156,
      "nnpp": 82,
      "total": 26730,
      "winner": "LP"
    },
    {
      "lgaId": "umu-nneochi",
      "lgaName": "Umu Nneochi",
      "apc": 608,
      "lp": 11782,
      "pdp": 320,
      "nnpp": 46,
      "total": 12756,
      "winner": "LP"
    }
  ],
  "akwa-ibom": [
    {
      "lgaId": "abak",
      "lgaName": "Abak",
      "apc": 15058,
      "lp": 5057,
      "pdp": 7017,
      "nnpp": 123,
      "total": 27255,
      "winner": "APC"
    },
    {
      "lgaId": "eastern-obolo",
      "lgaName": "Eastern Obolo",
      "apc": 1674,
      "lp": 1345,
      "pdp": 2345,
      "nnpp": 25,
      "total": 5389,
      "winner": "PDP"
    },
    {
      "lgaId": "eket",
      "lgaName": "Eket",
      "apc": 4675,
      "lp": 13238,
      "pdp": 9757,
      "nnpp": 315,
      "total": 27985,
      "winner": "LP"
    },
    {
      "lgaId": "esit-eket",
      "lgaName": "Esit Eket",
      "apc": 3819,
      "lp": 2545,
      "pdp": 4484,
      "nnpp": 73,
      "total": 10921,
      "winner": "PDP"
    },
    {
      "lgaId": "essien-udim",
      "lgaName": "Essien Udim",
      "apc": 19991,
      "lp": 2823,
      "pdp": 7362,
      "nnpp": 50,
      "total": 30226,
      "winner": "APC"
    },
    {
      "lgaId": "etim-ekpo",
      "lgaName": "Etim Ekpo",
      "apc": 5182,
      "lp": 1711,
      "pdp": 4733,
      "nnpp": 40,
      "total": 11666,
      "winner": "APC"
    },
    {
      "lgaId": "etinan",
      "lgaName": "Etinan",
      "apc": 4505,
      "lp": 4180,
      "pdp": 10455,
      "nnpp": 346,
      "total": 19486,
      "winner": "PDP"
    },
    {
      "lgaId": "ibeno",
      "lgaName": "Ibeno",
      "apc": 878,
      "lp": 2403,
      "pdp": 3227,
      "nnpp": 47,
      "total": 6555,
      "winner": "PDP"
    },
    {
      "lgaId": "ibesikpo-asutan",
      "lgaName": "Ibesikpo Asutan",
      "apc": 6480,
      "lp": 3698,
      "pdp": 9326,
      "nnpp": 345,
      "total": 19849,
      "winner": "PDP"
    },
    {
      "lgaId": "ibiono-ibom",
      "lgaName": "Ibiono Ibom",
      "apc": 3407,
      "lp": 7752,
      "pdp": 5274,
      "nnpp": 997,
      "total": 17430,
      "winner": "LP"
    },
    {
      "lgaId": "ika",
      "lgaName": "Ika",
      "apc": 5511,
      "lp": 1054,
      "pdp": 3750,
      "nnpp": 35,
      "total": 10350,
      "winner": "APC"
    },
    {
      "lgaId": "ikono",
      "lgaName": "Ikono",
      "apc": 6620,
      "lp": 5198,
      "pdp": 6731,
      "nnpp": 243,
      "total": 18792,
      "winner": "PDP"
    },
    {
      "lgaId": "ikot-abasi",
      "lgaName": "Ikot Abasi",
      "apc": 2875,
      "lp": 4616,
      "pdp": 6900,
      "nnpp": 153,
      "total": 14544,
      "winner": "PDP"
    },
    {
      "lgaId": "ikot-ekpene",
      "lgaName": "Ikot Ekpene",
      "apc": 11803,
      "lp": 5985,
      "pdp": 6624,
      "nnpp": 207,
      "total": 24619,
      "winner": "APC"
    },
    {
      "lgaId": "ini",
      "lgaName": "Ini",
      "apc": 3943,
      "lp": 2894,
      "pdp": 7740,
      "nnpp": 76,
      "total": 14653,
      "winner": "PDP"
    },
    {
      "lgaId": "itu",
      "lgaName": "Itu",
      "apc": 4094,
      "lp": 5882,
      "pdp": 7326,
      "nnpp": 989,
      "total": 18291,
      "winner": "PDP"
    },
    {
      "lgaId": "mbo",
      "lgaName": "Mbo",
      "apc": 3204,
      "lp": 1456,
      "pdp": 3922,
      "nnpp": 56,
      "total": 8638,
      "winner": "PDP"
    },
    {
      "lgaId": "mkpat-enin",
      "lgaName": "Mkpat Enin",
      "apc": 2152,
      "lp": 4105,
      "pdp": 9441,
      "nnpp": 187,
      "total": 15885,
      "winner": "PDP"
    },
    {
      "lgaId": "nsit-atai",
      "lgaName": "Nsit Atai",
      "apc": 2853,
      "lp": 1067,
      "pdp": 8371,
      "nnpp": 302,
      "total": 12593,
      "winner": "PDP"
    },
    {
      "lgaId": "nsit-ibom",
      "lgaName": "Nsit Ibom",
      "apc": 5875,
      "lp": 2015,
      "pdp": 8176,
      "nnpp": 128,
      "total": 16194,
      "winner": "PDP"
    },
    {
      "lgaId": "nsit-ubium",
      "lgaName": "Nsit Ubium",
      "apc": 2792,
      "lp": 2329,
      "pdp": 11308,
      "nnpp": 279,
      "total": 16708,
      "winner": "PDP"
    },
    {
      "lgaId": "obot-akara",
      "lgaName": "Obot Akara",
      "apc": 4477,
      "lp": 2542,
      "pdp": 8029,
      "nnpp": 95,
      "total": 15143,
      "winner": "PDP"
    },
    {
      "lgaId": "okobo",
      "lgaName": "Okobo",
      "apc": 3168,
      "lp": 2490,
      "pdp": 5273,
      "nnpp": 172,
      "total": 11103,
      "winner": "PDP"
    },
    {
      "lgaId": "onna",
      "lgaName": "Onna",
      "apc": 1396,
      "lp": 4745,
      "pdp": 8741,
      "nnpp": 157,
      "total": 15039,
      "winner": "PDP"
    },
    {
      "lgaId": "oron",
      "lgaName": "Oron",
      "apc": 2443,
      "lp": 3033,
      "pdp": 3295,
      "nnpp": 59,
      "total": 8830,
      "winner": "PDP"
    },
    {
      "lgaId": "oruk-anam",
      "lgaName": "Oruk Anam",
      "apc": 7039,
      "lp": 2617,
      "pdp": 8962,
      "nnpp": 74,
      "total": 18692,
      "winner": "PDP"
    },
    {
      "lgaId": "udung-uko",
      "lgaName": "Udung Uko",
      "apc": 1555,
      "lp": 1068,
      "pdp": 2701,
      "nnpp": 94,
      "total": 5418,
      "winner": "PDP"
    },
    {
      "lgaId": "ukanafun",
      "lgaName": "Ukanafun",
      "apc": 6152,
      "lp": 2067,
      "pdp": 7751,
      "nnpp": 160,
      "total": 16130,
      "winner": "PDP"
    },
    {
      "lgaId": "uruan",
      "lgaName": "Uruan",
      "apc": 4987,
      "lp": 3024,
      "pdp": 9327,
      "nnpp": 921,
      "total": 18259,
      "winner": "PDP"
    },
    {
      "lgaId": "urue-offong-oruko",
      "lgaName": "Urue-Offong/Oruko",
      "apc": 3697,
      "lp": 2010,
      "pdp": 3419,
      "nnpp": 36,
      "total": 9162,
      "winner": "APC"
    },
    {
      "lgaId": "uyo",
      "lgaName": "Uyo",
      "apc": 7765,
      "lp": 27534,
      "pdp": 12245,
      "nnpp": 1044,
      "total": 48588,
      "winner": "LP"
    }
  ],
  "benue": [
    {
      "lgaId": "ado",
      "lgaName": "Ado",
      "apc": 2271,
      "lp": 9987,
      "pdp": 1107,
      "nnpp": 67,
      "total": 13432,
      "winner": "LP"
    },
    {
      "lgaId": "agatu",
      "lgaName": "Agatu",
      "apc": 3988,
      "lp": 6302,
      "pdp": 4221,
      "nnpp": 80,
      "total": 14591,
      "winner": "LP"
    },
    {
      "lgaId": "apa",
      "lgaName": "Apa",
      "apc": 3430,
      "lp": 7421,
      "pdp": 3682,
      "nnpp": 191,
      "total": 14724,
      "winner": "LP"
    },
    {
      "lgaId": "buruku",
      "lgaName": "Buruku",
      "apc": 20248,
      "lp": 13466,
      "pdp": 6909,
      "nnpp": 240,
      "total": 40863,
      "winner": "APC"
    },
    {
      "lgaId": "gboko",
      "lgaName": "Gboko",
      "apc": 35149,
      "lp": 18615,
      "pdp": 13901,
      "nnpp": 335,
      "total": 68000,
      "winner": "APC"
    },
    {
      "lgaId": "guma",
      "lgaName": "Guma",
      "apc": 10481,
      "lp": 21796,
      "pdp": 999,
      "nnpp": 94,
      "total": 33370,
      "winner": "LP"
    },
    {
      "lgaId": "gwer-east",
      "lgaName": "Gwer East",
      "apc": 15900,
      "lp": 9800,
      "pdp": 7370,
      "nnpp": 107,
      "total": 33177,
      "winner": "APC"
    },
    {
      "lgaId": "gwer-west",
      "lgaName": "Gwer West",
      "apc": 7332,
      "lp": 17417,
      "pdp": 838,
      "nnpp": 91,
      "total": 25678,
      "winner": "LP"
    },
    {
      "lgaId": "katsina-ala",
      "lgaName": "Katsina-Ala",
      "apc": 18632,
      "lp": 7876,
      "pdp": 8060,
      "nnpp": 203,
      "total": 34771,
      "winner": "APC"
    },
    {
      "lgaId": "konshisha",
      "lgaName": "Konshisha",
      "apc": 10742,
      "lp": 26261,
      "pdp": 3524,
      "nnpp": 225,
      "total": 40752,
      "winner": "LP"
    },
    {
      "lgaId": "kwande",
      "lgaName": "Kwande",
      "apc": 23027,
      "lp": 11945,
      "pdp": 7813,
      "nnpp": 437,
      "total": 43222,
      "winner": "APC"
    },
    {
      "lgaId": "logo",
      "lgaName": "Logo",
      "apc": 8121,
      "lp": 13836,
      "pdp": 9377,
      "nnpp": 152,
      "total": 31486,
      "winner": "LP"
    },
    {
      "lgaId": "makurdi",
      "lgaName": "Makurdi",
      "apc": 28692,
      "lp": 48228,
      "pdp": 5134,
      "nnpp": 674,
      "total": 82728,
      "winner": "LP"
    },
    {
      "lgaId": "obi",
      "lgaName": "Obi",
      "apc": 4450,
      "lp": 7949,
      "pdp": 4340,
      "nnpp": 87,
      "total": 16826,
      "winner": "LP"
    },
    {
      "lgaId": "ogbadibo",
      "lgaName": "Ogbadibo",
      "apc": 3129,
      "lp": 10154,
      "pdp": 3460,
      "nnpp": 182,
      "total": 16925,
      "winner": "LP"
    },
    {
      "lgaId": "ohimini",
      "lgaName": "Ohimini",
      "apc": 3239,
      "lp": 6545,
      "pdp": 4972,
      "nnpp": 64,
      "total": 14820,
      "winner": "LP"
    },
    {
      "lgaId": "oju",
      "lgaName": "Oju",
      "apc": 8412,
      "lp": 13192,
      "pdp": 4920,
      "nnpp": 132,
      "total": 26656,
      "winner": "LP"
    },
    {
      "lgaId": "okpokwu",
      "lgaName": "Okpokwu",
      "apc": 3409,
      "lp": 10470,
      "pdp": 4641,
      "nnpp": 142,
      "total": 18662,
      "winner": "LP"
    },
    {
      "lgaId": "oturkpo",
      "lgaName": "Oturkpo",
      "apc": 8471,
      "lp": 23762,
      "pdp": 6760,
      "nnpp": 332,
      "total": 39325,
      "winner": "LP"
    },
    {
      "lgaId": "tarka",
      "lgaName": "Tarka",
      "apc": 13640,
      "lp": 2038,
      "pdp": 2642,
      "nnpp": 37,
      "total": 18357,
      "winner": "APC"
    },
    {
      "lgaId": "ukum",
      "lgaName": "Ukum",
      "apc": 20719,
      "lp": 8036,
      "pdp": 9892,
      "nnpp": 161,
      "total": 38808,
      "winner": "APC"
    },
    {
      "lgaId": "ushongo",
      "lgaName": "Ushongo",
      "apc": 20060,
      "lp": 7324,
      "pdp": 7264,
      "nnpp": 614,
      "total": 35262,
      "winner": "APC"
    },
    {
      "lgaId": "vandeikya",
      "lgaName": "Vandeikya",
      "apc": 36926,
      "lp": 5952,
      "pdp": 8255,
      "nnpp": 93,
      "total": 51226,
      "winner": "APC"
    }
  ],
  "ebonyi": [
    {
      "lgaId": "abakaliki",
      "lgaName": "Abakaliki",
      "apc": 3365,
      "lp": 36894,
      "pdp": 974,
      "nnpp": 214,
      "total": 41447,
      "winner": "LP"
    },
    {
      "lgaId": "afikpo-north",
      "lgaName": "Afikpo North",
      "apc": 1405,
      "lp": 25480,
      "pdp": 1155,
      "nnpp": 149,
      "total": 28189,
      "winner": "LP"
    },
    {
      "lgaId": "afikpo-south",
      "lgaName": "Afikpo South",
      "apc": 2386,
      "lp": 10895,
      "pdp": 1227,
      "nnpp": 56,
      "total": 14564,
      "winner": "LP"
    },
    {
      "lgaId": "ebonyi",
      "lgaName": "Ebonyi",
      "apc": 2677,
      "lp": 27551,
      "pdp": 717,
      "nnpp": 114,
      "total": 31059,
      "winner": "LP"
    },
    {
      "lgaId": "ezza-north",
      "lgaName": "Ezza North",
      "apc": 875,
      "lp": 17959,
      "pdp": 392,
      "nnpp": 146,
      "total": 19372,
      "winner": "LP"
    },
    {
      "lgaId": "ezza-south",
      "lgaName": "Ezza South",
      "apc": 2471,
      "lp": 16506,
      "pdp": 1823,
      "nnpp": 163,
      "total": 20963,
      "winner": "LP"
    },
    {
      "lgaId": "ikwo",
      "lgaName": "Ikwo",
      "apc": 9272,
      "lp": 21810,
      "pdp": 2018,
      "nnpp": 264,
      "total": 33364,
      "winner": "LP"
    },
    {
      "lgaId": "ishielu",
      "lgaName": "Ishielu",
      "apc": 1261,
      "lp": 16186,
      "pdp": 574,
      "nnpp": 111,
      "total": 18132,
      "winner": "LP"
    },
    {
      "lgaId": "ivo",
      "lgaName": "Ivo",
      "apc": 1870,
      "lp": 7488,
      "pdp": 780,
      "nnpp": 38,
      "total": 10176,
      "winner": "LP"
    },
    {
      "lgaId": "izzi",
      "lgaName": "Izzi",
      "apc": 11779,
      "lp": 28931,
      "pdp": 789,
      "nnpp": 86,
      "total": 41585,
      "winner": "LP"
    },
    {
      "lgaId": "ohaozara",
      "lgaName": "Ohaozara",
      "apc": 1615,
      "lp": 13731,
      "pdp": 342,
      "nnpp": 81,
      "total": 15769,
      "winner": "LP"
    },
    {
      "lgaId": "ohaukwu",
      "lgaName": "Ohaukwu",
      "apc": 2217,
      "lp": 19789,
      "pdp": 1581,
      "nnpp": 139,
      "total": 23726,
      "winner": "LP"
    },
    {
      "lgaId": "onicha",
      "lgaName": "Onicha",
      "apc": 1215,
      "lp": 16518,
      "pdp": 1131,
      "nnpp": 100,
      "total": 18964,
      "winner": "LP"
    }
  ],
  "kogi": [
    {
      "lgaId": "adavi",
      "lgaName": "Adavi",
      "apc": 10340,
      "lp": 897,
      "pdp": 10612,
      "nnpp": 26,
      "total": 21875,
      "winner": "PDP"
    },
    {
      "lgaId": "ajaokuta",
      "lgaName": "Ajaokuta",
      "apc": 12030,
      "lp": 3395,
      "pdp": 8266,
      "nnpp": 629,
      "total": 24320,
      "winner": "APC"
    },
    {
      "lgaId": "ankpa",
      "lgaName": "Ankpa",
      "apc": 18976,
      "lp": 5918,
      "pdp": 14170,
      "nnpp": 1559,
      "total": 40623,
      "winner": "APC"
    },
    {
      "lgaId": "bassa",
      "lgaName": "Bassa",
      "apc": 7262,
      "lp": 4068,
      "pdp": 7288,
      "nnpp": 62,
      "total": 18680,
      "winner": "PDP"
    },
    {
      "lgaId": "dekina",
      "lgaName": "Dekina",
      "apc": 22157,
      "lp": 1661,
      "pdp": 10704,
      "nnpp": 164,
      "total": 34686,
      "winner": "APC"
    },
    {
      "lgaId": "ibaji",
      "lgaName": "Ibaji",
      "apc": 5992,
      "lp": 5933,
      "pdp": 6219,
      "nnpp": 124,
      "total": 18268,
      "winner": "PDP"
    },
    {
      "lgaId": "idah",
      "lgaName": "Idah",
      "apc": 9869,
      "lp": 2618,
      "pdp": 5459,
      "nnpp": 69,
      "total": 18015,
      "winner": "APC"
    },
    {
      "lgaId": "igalamela-odolu",
      "lgaName": "Igalamela-Odolu",
      "apc": 9982,
      "lp": 2431,
      "pdp": 4006,
      "nnpp": 84,
      "total": 16503,
      "winner": "APC"
    },
    {
      "lgaId": "ijumu",
      "lgaName": "Ijumu",
      "apc": 11237,
      "lp": 920,
      "pdp": 4503,
      "nnpp": 13,
      "total": 16673,
      "winner": "APC"
    },
    {
      "lgaId": "kabba-bunu",
      "lgaName": "Kabba/Bunu",
      "apc": 12534,
      "lp": 2329,
      "pdp": 5958,
      "nnpp": 73,
      "total": 20894,
      "winner": "APC"
    },
    {
      "lgaId": "kogi",
      "lgaName": "Kogi",
      "apc": 13472,
      "lp": 1040,
      "pdp": 8825,
      "nnpp": 77,
      "total": 23414,
      "winner": "APC"
    },
    {
      "lgaId": "lokoja",
      "lgaName": "Lokoja",
      "apc": 15642,
      "lp": 7605,
      "pdp": 11156,
      "nnpp": 407,
      "total": 34810,
      "winner": "APC"
    },
    {
      "lgaId": "mopa-muro",
      "lgaName": "Mopa-Muro",
      "apc": 4935,
      "lp": 718,
      "pdp": 2319,
      "nnpp": 14,
      "total": 7986,
      "winner": "APC"
    },
    {
      "lgaId": "ofu",
      "lgaName": "Ofu",
      "apc": 16078,
      "lp": 1744,
      "pdp": 6593,
      "nnpp": 187,
      "total": 24602,
      "winner": "APC"
    },
    {
      "lgaId": "ogori-mangongo",
      "lgaName": "Ogori/Mangongo",
      "apc": 2008,
      "lp": 784,
      "pdp": 2075,
      "nnpp": 9,
      "total": 4876,
      "winner": "PDP"
    },
    {
      "lgaId": "okehi",
      "lgaName": "Okehi",
      "apc": 9443,
      "lp": 1099,
      "pdp": 11459,
      "nnpp": 36,
      "total": 22037,
      "winner": "PDP"
    },
    {
      "lgaId": "okene",
      "lgaName": "Okene",
      "apc": 22038,
      "lp": 964,
      "pdp": 6403,
      "nnpp": 34,
      "total": 29439,
      "winner": "APC"
    },
    {
      "lgaId": "olamaboro",
      "lgaName": "Olamaboro",
      "apc": 10672,
      "lp": 7206,
      "pdp": 5692,
      "nnpp": 304,
      "total": 23874,
      "winner": "APC"
    },
    {
      "lgaId": "omala",
      "lgaName": "Omala",
      "apc": 6374,
      "lp": 2706,
      "pdp": 6420,
      "nnpp": 315,
      "total": 15815,
      "winner": "PDP"
    },
    {
      "lgaId": "yagba-east",
      "lgaName": "Yagba East",
      "apc": 10888,
      "lp": 954,
      "pdp": 2711,
      "nnpp": 29,
      "total": 14582,
      "winner": "APC"
    },
    {
      "lgaId": "yagba-west",
      "lgaName": "Yagba West",
      "apc": 8822,
      "lp": 1227,
      "pdp": 4266,
      "nnpp": 23,
      "total": 14338,
      "winner": "APC"
    }
  ],
  "anambra": [
    {
      "lgaId": "aguata",
      "lgaName": "Aguata",
      "apc": 301,
      "lp": 37478,
      "pdp": 522,
      "nnpp": 207,
      "total": 38508,
      "winner": "LP"
    },
    {
      "lgaId": "ayamelum",
      "lgaName": "Ayamelum",
      "apc": 145,
      "lp": 17032,
      "pdp": 405,
      "nnpp": 21,
      "total": 17603,
      "winner": "LP"
    },
    {
      "lgaId": "anambra-east",
      "lgaName": "Anambra East",
      "apc": 433,
      "lp": 20755,
      "pdp": 350,
      "nnpp": 75,
      "total": 21613,
      "winner": "LP"
    },
    {
      "lgaId": "anambra-west",
      "lgaName": "Anambra West",
      "apc": 360,
      "lp": 12400,
      "pdp": 226,
      "nnpp": 37,
      "total": 13023,
      "winner": "LP"
    },
    {
      "lgaId": "anaocha",
      "lgaName": "Anaocha",
      "apc": 178,
      "lp": 33695,
      "pdp": 584,
      "nnpp": 151,
      "total": 34608,
      "winner": "LP"
    },
    {
      "lgaId": "awka-north",
      "lgaName": "Awka North",
      "apc": 118,
      "lp": 15561,
      "pdp": 454,
      "nnpp": 57,
      "total": 16190,
      "winner": "LP"
    },
    {
      "lgaId": "awka-south",
      "lgaName": "Awka South",
      "apc": 305,
      "lp": 56498,
      "pdp": 963,
      "nnpp": 133,
      "total": 57899,
      "winner": "LP"
    },
    {
      "lgaId": "dunukofia",
      "lgaName": "Dunukofia",
      "apc": 222,
      "lp": 18715,
      "pdp": 428,
      "nnpp": 52,
      "total": 19417,
      "winner": "LP"
    },
    {
      "lgaId": "ekwusigo",
      "lgaName": "Ekwusigo",
      "apc": 159,
      "lp": 21498,
      "pdp": 362,
      "nnpp": 47,
      "total": 22066,
      "winner": "LP"
    },
    {
      "lgaId": "idemili-north",
      "lgaName": "Idemili North",
      "apc": 633,
      "lp": 43835,
      "pdp": 623,
      "nnpp": 195,
      "total": 45286,
      "winner": "LP"
    },
    {
      "lgaId": "idemili-south",
      "lgaName": "Idemili South",
      "apc": 587,
      "lp": 25994,
      "pdp": 304,
      "nnpp": 128,
      "total": 27013,
      "winner": "LP"
    },
    {
      "lgaId": "ihiala",
      "lgaName": "Ihiala",
      "apc": 27,
      "lp": 11571,
      "pdp": 33,
      "nnpp": 16,
      "total": 11647,
      "winner": "LP"
    },
    {
      "lgaId": "njikoka",
      "lgaName": "Njikoka",
      "apc": 224,
      "lp": 31368,
      "pdp": 479,
      "nnpp": 64,
      "total": 32135,
      "winner": "LP"
    },
    {
      "lgaId": "nnewi-north",
      "lgaName": "Nnewi North",
      "apc": 96,
      "lp": 38184,
      "pdp": 243,
      "nnpp": 71,
      "total": 38594,
      "winner": "LP"
    },
    {
      "lgaId": "nnewi-south",
      "lgaName": "Nnewi South",
      "apc": 187,
      "lp": 16767,
      "pdp": 201,
      "nnpp": 53,
      "total": 17208,
      "winner": "LP"
    },
    {
      "lgaId": "ogbaru",
      "lgaName": "Ogbaru",
      "apc": 206,
      "lp": 28259,
      "pdp": 441,
      "nnpp": 122,
      "total": 29028,
      "winner": "LP"
    },
    {
      "lgaId": "onitsha-north",
      "lgaName": "Onitsha North",
      "apc": 211,
      "lp": 49334,
      "pdp": 510,
      "nnpp": 140,
      "total": 50195,
      "winner": "LP"
    },
    {
      "lgaId": "onitsha-south",
      "lgaName": "Onitsha South",
      "apc": 201,
      "lp": 38403,
      "pdp": 287,
      "nnpp": 131,
      "total": 39022,
      "winner": "LP"
    },
    {
      "lgaId": "orumba-north",
      "lgaName": "Orumba North",
      "apc": 114,
      "lp": 21842,
      "pdp": 226,
      "nnpp": 117,
      "total": 22299,
      "winner": "LP"
    },
    {
      "lgaId": "orumba-south",
      "lgaName": "Orumba South",
      "apc": 92,
      "lp": 19482,
      "pdp": 253,
      "nnpp": 67,
      "total": 19894,
      "winner": "LP"
    },
    {
      "lgaId": "oyi",
      "lgaName": "Oyi",
      "apc": 312,
      "lp": 25950,
      "pdp": 1142,
      "nnpp": 83,
      "total": 27487,
      "winner": "LP"
    }
  ],
  "kaduna": [
    {
      "lgaId": "birnin-gwari",
      "lgaName": "Birnin Gwari",
      "apc": 17080,
      "lp": 235,
      "pdp": 8774,
      "nnpp": 1143,
      "total": 27232,
      "winner": "APC"
    },
    {
      "lgaId": "chikun",
      "lgaName": "Chikun",
      "apc": 9367,
      "lp": 69117,
      "pdp": 32659,
      "nnpp": 2742,
      "total": 113885,
      "winner": "LP"
    },
    {
      "lgaId": "giwa",
      "lgaName": "Giwa",
      "apc": 19922,
      "lp": 565,
      "pdp": 22302,
      "nnpp": 3114,
      "total": 45903,
      "winner": "PDP"
    },
    {
      "lgaId": "igabi",
      "lgaName": "Igabi",
      "apc": 37259,
      "lp": 4839,
      "pdp": 45962,
      "nnpp": 8276,
      "total": 96336,
      "winner": "PDP"
    },
    {
      "lgaId": "ikara",
      "lgaName": "Ikara",
      "apc": 17297,
      "lp": 994,
      "pdp": 24540,
      "nnpp": 4274,
      "total": 47105,
      "winner": "PDP"
    },
    {
      "lgaId": "jaba",
      "lgaName": "Jaba",
      "apc": 3131,
      "lp": 9967,
      "pdp": 8798,
      "nnpp": 335,
      "total": 22231,
      "winner": "LP"
    },
    {
      "lgaId": "jema-a",
      "lgaName": "Jema'a",
      "apc": 10928,
      "lp": 26560,
      "pdp": 16452,
      "nnpp": 719,
      "total": 54659,
      "winner": "LP"
    },
    {
      "lgaId": "kachia",
      "lgaName": "Kachia",
      "apc": 12053,
      "lp": 17381,
      "pdp": 16049,
      "nnpp": 1521,
      "total": 47004,
      "winner": "LP"
    },
    {
      "lgaId": "kaduna-north",
      "lgaName": "Kaduna North",
      "apc": 39693,
      "lp": 10330,
      "pdp": 40670,
      "nnpp": 12613,
      "total": 103306,
      "winner": "PDP"
    },
    {
      "lgaId": "kaduna-south",
      "lgaName": "Kaduna South",
      "apc": 29596,
      "lp": 22577,
      "pdp": 42996,
      "nnpp": 9124,
      "total": 104293,
      "winner": "PDP"
    },
    {
      "lgaId": "kagarko",
      "lgaName": "Kagarko",
      "apc": 9698,
      "lp": 12502,
      "pdp": 14027,
      "nnpp": 1255,
      "total": 37482,
      "winner": "PDP"
    },
    {
      "lgaId": "kajuru",
      "lgaName": "Kajuru",
      "apc": 3940,
      "lp": 14875,
      "pdp": 9253,
      "nnpp": 1221,
      "total": 29289,
      "winner": "LP"
    },
    {
      "lgaId": "kaura",
      "lgaName": "Kaura",
      "apc": 1847,
      "lp": 25744,
      "pdp": 7847,
      "nnpp": 320,
      "total": 35758,
      "winner": "LP"
    },
    {
      "lgaId": "kauru",
      "lgaName": "Kauru",
      "apc": 15870,
      "lp": 11293,
      "pdp": 19018,
      "nnpp": 3128,
      "total": 49309,
      "winner": "PDP"
    },
    {
      "lgaId": "kubau",
      "lgaName": "Kubau",
      "apc": 20139,
      "lp": 1701,
      "pdp": 23686,
      "nnpp": 4819,
      "total": 50345,
      "winner": "PDP"
    },
    {
      "lgaId": "kudan",
      "lgaName": "Kudan",
      "apc": 11630,
      "lp": 888,
      "pdp": 19340,
      "nnpp": 6747,
      "total": 38605,
      "winner": "PDP"
    },
    {
      "lgaId": "lere",
      "lgaName": "Lere",
      "apc": 24695,
      "lp": 15568,
      "pdp": 34149,
      "nnpp": 7264,
      "total": 81676,
      "winner": "PDP"
    },
    {
      "lgaId": "makarfi",
      "lgaName": "Makarfi",
      "apc": 13767,
      "lp": 759,
      "pdp": 22098,
      "nnpp": 5219,
      "total": 41843,
      "winner": "PDP"
    },
    {
      "lgaId": "sabon-gari",
      "lgaName": "Sabon Gari",
      "apc": 25714,
      "lp": 12834,
      "pdp": 30713,
      "nnpp": 6082,
      "total": 75343,
      "winner": "PDP"
    },
    {
      "lgaId": "sanga",
      "lgaName": "Sanga",
      "apc": 9393,
      "lp": 9088,
      "pdp": 9233,
      "nnpp": 356,
      "total": 28070,
      "winner": "APC"
    },
    {
      "lgaId": "soba",
      "lgaName": "Soba",
      "apc": 18965,
      "lp": 354,
      "pdp": 23364,
      "nnpp": 3722,
      "total": 46405,
      "winner": "PDP"
    },
    {
      "lgaId": "zango-kataf",
      "lgaName": "Zango Kataf",
      "apc": 5877,
      "lp": 22689,
      "pdp": 20170,
      "nnpp": 246,
      "total": 48982,
      "winner": "LP"
    },
    {
      "lgaId": "zaria",
      "lgaName": "Zaria",
      "apc": 41432,
      "lp": 3634,
      "pdp": 62260,
      "nnpp": 8729,
      "total": 116055,
      "winner": "PDP"
    }
  ],
  "katsina": [
    {
      "lgaId": "bakori",
      "lgaName": "Bakori",
      "apc": 15036,
      "lp": 594,
      "pdp": 20070,
      "nnpp": 3753,
      "total": 39453,
      "winner": "PDP"
    },
    {
      "lgaId": "batagarawa",
      "lgaName": "Batagarawa",
      "apc": 13950,
      "lp": 131,
      "pdp": 16987,
      "nnpp": 1454,
      "total": 32522,
      "winner": "PDP"
    },
    {
      "lgaId": "batsari",
      "lgaName": "Batsari",
      "apc": 7017,
      "lp": 21,
      "pdp": 8889,
      "nnpp": 1096,
      "total": 17023,
      "winner": "PDP"
    },
    {
      "lgaId": "baure",
      "lgaName": "Baure",
      "apc": 21661,
      "lp": 17,
      "pdp": 16820,
      "nnpp": 592,
      "total": 39090,
      "winner": "APC"
    },
    {
      "lgaId": "bindawa",
      "lgaName": "Bindawa",
      "apc": 16578,
      "lp": 16,
      "pdp": 12582,
      "nnpp": 2918,
      "total": 32094,
      "winner": "APC"
    },
    {
      "lgaId": "charanchi",
      "lgaName": "Charanchi",
      "apc": 12779,
      "lp": 10,
      "pdp": 8020,
      "nnpp": 609,
      "total": 21418,
      "winner": "APC"
    },
    {
      "lgaId": "dandume",
      "lgaName": "Dandume",
      "apc": 15062,
      "lp": 44,
      "pdp": 10718,
      "nnpp": 3163,
      "total": 28987,
      "winner": "APC"
    },
    {
      "lgaId": "danja",
      "lgaName": "Danja",
      "apc": 16202,
      "lp": 44,
      "pdp": 14004,
      "nnpp": 1920,
      "total": 32170,
      "winner": "APC"
    },
    {
      "lgaId": "dan-musa",
      "lgaName": "Dan Musa",
      "apc": 11259,
      "lp": 1,
      "pdp": 7294,
      "nnpp": 699,
      "total": 19253,
      "winner": "APC"
    },
    {
      "lgaId": "daura",
      "lgaName": "Daura",
      "apc": 16889,
      "lp": 78,
      "pdp": 12913,
      "nnpp": 2368,
      "total": 32248,
      "winner": "APC"
    },
    {
      "lgaId": "dutsi",
      "lgaName": "Dutsi",
      "apc": 9258,
      "lp": 5,
      "pdp": 8074,
      "nnpp": 289,
      "total": 17626,
      "winner": "APC"
    },
    {
      "lgaId": "dutsin-ma",
      "lgaName": "Dutsin-Ma",
      "apc": 13233,
      "lp": 159,
      "pdp": 17917,
      "nnpp": 3797,
      "total": 35106,
      "winner": "PDP"
    },
    {
      "lgaId": "faskari",
      "lgaName": "Faskari",
      "apc": 17180,
      "lp": 57,
      "pdp": 15667,
      "nnpp": 1445,
      "total": 34349,
      "winner": "APC"
    },
    {
      "lgaId": "funtua",
      "lgaName": "Funtua",
      "apc": 19453,
      "lp": 198,
      "pdp": 18711,
      "nnpp": 3591,
      "total": 41953,
      "winner": "APC"
    },
    {
      "lgaId": "ingawa",
      "lgaName": "Ingawa",
      "apc": 12315,
      "lp": 47,
      "pdp": 12152,
      "nnpp": 3388,
      "total": 27902,
      "winner": "APC"
    },
    {
      "lgaId": "jibia",
      "lgaName": "Jibia",
      "apc": 10690,
      "lp": 59,
      "pdp": 13761,
      "nnpp": 732,
      "total": 25242,
      "winner": "PDP"
    },
    {
      "lgaId": "kafur",
      "lgaName": "Kafur",
      "apc": 23517,
      "lp": 2285,
      "pdp": 13167,
      "nnpp": 4448,
      "total": 43417,
      "winner": "APC"
    },
    {
      "lgaId": "kaita",
      "lgaName": "Kaita",
      "apc": 14595,
      "lp": 22,
      "pdp": 11793,
      "nnpp": 799,
      "total": 27209,
      "winner": "APC"
    },
    {
      "lgaId": "kankara",
      "lgaName": "Kankara",
      "apc": 14456,
      "lp": 55,
      "pdp": 22035,
      "nnpp": 1774,
      "total": 38320,
      "winner": "PDP"
    },
    {
      "lgaId": "kankia",
      "lgaName": "Kankia",
      "apc": 10658,
      "lp": 46,
      "pdp": 17426,
      "nnpp": 700,
      "total": 28830,
      "winner": "PDP"
    },
    {
      "lgaId": "katsina",
      "lgaName": "Katsina",
      "apc": 15953,
      "lp": 1937,
      "pdp": 45390,
      "nnpp": 9539,
      "total": 72819,
      "winner": "PDP"
    },
    {
      "lgaId": "kurfi",
      "lgaName": "Kurfi",
      "apc": 11203,
      "lp": 25,
      "pdp": 12528,
      "nnpp": 1784,
      "total": 25540,
      "winner": "PDP"
    },
    {
      "lgaId": "kusada",
      "lgaName": "Kusada",
      "apc": 7442,
      "lp": 6,
      "pdp": 10990,
      "nnpp": 474,
      "total": 18912,
      "winner": "PDP"
    },
    {
      "lgaId": "mai-adua",
      "lgaName": "Mai'adua",
      "apc": 19098,
      "lp": 21,
      "pdp": 14096,
      "nnpp": 747,
      "total": 33962,
      "winner": "APC"
    },
    {
      "lgaId": "malumfashi",
      "lgaName": "Malumfashi",
      "apc": 21008,
      "lp": 352,
      "pdp": 19892,
      "nnpp": 7254,
      "total": 48506,
      "winner": "APC"
    },
    {
      "lgaId": "mani",
      "lgaName": "Mani",
      "apc": 14334,
      "lp": 31,
      "pdp": 18998,
      "nnpp": 3361,
      "total": 36724,
      "winner": "PDP"
    },
    {
      "lgaId": "mashi",
      "lgaName": "Mashi",
      "apc": 12868,
      "lp": 38,
      "pdp": 16085,
      "nnpp": 1107,
      "total": 30098,
      "winner": "PDP"
    },
    {
      "lgaId": "matazu",
      "lgaName": "Matazu",
      "apc": 12008,
      "lp": 15,
      "pdp": 9644,
      "nnpp": 415,
      "total": 22082,
      "winner": "APC"
    },
    {
      "lgaId": "musawa",
      "lgaName": "Musawa",
      "apc": 14360,
      "lp": 11,
      "pdp": 10603,
      "nnpp": 2033,
      "total": 27007,
      "winner": "APC"
    },
    {
      "lgaId": "rimi",
      "lgaName": "Rimi",
      "apc": 16759,
      "lp": 19,
      "pdp": 15318,
      "nnpp": 1039,
      "total": 33135,
      "winner": "APC"
    },
    {
      "lgaId": "sabuwa",
      "lgaName": "Sabuwa",
      "apc": 10207,
      "lp": 2,
      "pdp": 7287,
      "nnpp": 409,
      "total": 17905,
      "winner": "APC"
    },
    {
      "lgaId": "safana",
      "lgaName": "Safana",
      "apc": 7683,
      "lp": 11,
      "pdp": 7989,
      "nnpp": 943,
      "total": 16626,
      "winner": "PDP"
    },
    {
      "lgaId": "sandamu",
      "lgaName": "Sandamu",
      "apc": 13681,
      "lp": 14,
      "pdp": 10434,
      "nnpp": 399,
      "total": 24528,
      "winner": "APC"
    },
    {
      "lgaId": "zango",
      "lgaName": "Zango",
      "apc": 13891,
      "lp": 5,
      "pdp": 10791,
      "nnpp": 345,
      "total": 25032,
      "winner": "APC"
    }
  ],
  "kebbi": [
    {
      "lgaId": "aleiro",
      "lgaName": "Aleiro",
      "apc": 6898,
      "lp": 71,
      "pdp": 13619,
      "nnpp": 99,
      "total": 20687,
      "winner": "PDP"
    },
    {
      "lgaId": "arewa-dandi",
      "lgaName": "Arewa Dandi",
      "apc": 16938,
      "lp": 24,
      "pdp": 17297,
      "nnpp": 267,
      "total": 34526,
      "winner": "PDP"
    },
    {
      "lgaId": "argungu",
      "lgaName": "Argungu",
      "apc": 12557,
      "lp": 124,
      "pdp": 26725,
      "nnpp": 410,
      "total": 39816,
      "winner": "PDP"
    },
    {
      "lgaId": "augie",
      "lgaName": "Augie",
      "apc": 11135,
      "lp": 17,
      "pdp": 12057,
      "nnpp": 123,
      "total": 23332,
      "winner": "PDP"
    },
    {
      "lgaId": "bagudo",
      "lgaName": "Bagudo",
      "apc": 18485,
      "lp": 33,
      "pdp": 13142,
      "nnpp": 166,
      "total": 31826,
      "winner": "APC"
    },
    {
      "lgaId": "birnin-kebbi",
      "lgaName": "Birnin Kebbi",
      "apc": 25201,
      "lp": 2008,
      "pdp": 33897,
      "nnpp": 804,
      "total": 61910,
      "winner": "PDP"
    },
    {
      "lgaId": "bunza",
      "lgaName": "Bunza",
      "apc": 8397,
      "lp": 19,
      "pdp": 14047,
      "nnpp": 115,
      "total": 22578,
      "winner": "PDP"
    },
    {
      "lgaId": "dandi",
      "lgaName": "Dandi",
      "apc": 13303,
      "lp": 74,
      "pdp": 13202,
      "nnpp": 130,
      "total": 26709,
      "winner": "APC"
    },
    {
      "lgaId": "fakai",
      "lgaName": "Fakai",
      "apc": 8140,
      "lp": 450,
      "pdp": 6072,
      "nnpp": 201,
      "total": 14863,
      "winner": "APC"
    },
    {
      "lgaId": "gwandu",
      "lgaName": "Gwandu",
      "apc": 11675,
      "lp": 9,
      "pdp": 15212,
      "nnpp": 163,
      "total": 27059,
      "winner": "PDP"
    },
    {
      "lgaId": "jega",
      "lgaName": "Jega",
      "apc": 13496,
      "lp": 154,
      "pdp": 20381,
      "nnpp": 552,
      "total": 34583,
      "winner": "PDP"
    },
    {
      "lgaId": "kalgo",
      "lgaName": "Kalgo",
      "apc": 6941,
      "lp": 44,
      "pdp": 10552,
      "nnpp": 83,
      "total": 17620,
      "winner": "PDP"
    },
    {
      "lgaId": "koko-besse",
      "lgaName": "Koko/Besse",
      "apc": 8339,
      "lp": 119,
      "pdp": 8574,
      "nnpp": 72,
      "total": 17104,
      "winner": "PDP"
    },
    {
      "lgaId": "maiyama",
      "lgaName": "Maiyama",
      "apc": 11348,
      "lp": 8,
      "pdp": 11637,
      "nnpp": 333,
      "total": 23326,
      "winner": "PDP"
    },
    {
      "lgaId": "ngaski",
      "lgaName": "Ngaski",
      "apc": 9815,
      "lp": 167,
      "pdp": 11352,
      "nnpp": 45,
      "total": 21379,
      "winner": "PDP"
    },
    {
      "lgaId": "sakaba",
      "lgaName": "Sakaba",
      "apc": 7909,
      "lp": 936,
      "pdp": 3731,
      "nnpp": 282,
      "total": 12858,
      "winner": "APC"
    },
    {
      "lgaId": "shanga",
      "lgaName": "Shanga",
      "apc": 9088,
      "lp": 52,
      "pdp": 9621,
      "nnpp": 23,
      "total": 18784,
      "winner": "PDP"
    },
    {
      "lgaId": "suru",
      "lgaName": "Suru",
      "apc": 11552,
      "lp": 18,
      "pdp": 12479,
      "nnpp": 161,
      "total": 24210,
      "winner": "PDP"
    },
    {
      "lgaId": "wasagu-danko",
      "lgaName": "Wasagu/Danko",
      "apc": 14505,
      "lp": 2092,
      "pdp": 7560,
      "nnpp": 405,
      "total": 24562,
      "winner": "APC"
    },
    {
      "lgaId": "yauri",
      "lgaName": "Yauri",
      "apc": 11609,
      "lp": 324,
      "pdp": 13626,
      "nnpp": 258,
      "total": 25817,
      "winner": "PDP"
    },
    {
      "lgaId": "zuru",
      "lgaName": "Zuru",
      "apc": 10757,
      "lp": 3939,
      "pdp": 10392,
      "nnpp": 346,
      "total": 25434,
      "winner": "APC"
    }
  ],
  "ondo": [
    {
      "lgaId": "akoko-north-east",
      "lgaName": "Akoko North-East",
      "apc": 25757,
      "lp": 1242,
      "pdp": 2400,
      "nnpp": 16,
      "total": 29415,
      "winner": "APC"
    },
    {
      "lgaId": "akoko-north-west",
      "lgaName": "Akoko North-West",
      "apc": 24613,
      "lp": 736,
      "pdp": 5200,
      "nnpp": 8,
      "total": 30557,
      "winner": "APC"
    },
    {
      "lgaId": "akoko-south-east",
      "lgaName": "Akoko South-East",
      "apc": 10765,
      "lp": 470,
      "pdp": 3016,
      "nnpp": 7,
      "total": 14258,
      "winner": "APC"
    },
    {
      "lgaId": "akoko-south-west",
      "lgaName": "Akoko South-West",
      "apc": 28367,
      "lp": 920,
      "pdp": 5376,
      "nnpp": 28,
      "total": 34691,
      "winner": "APC"
    },
    {
      "lgaId": "akure-north",
      "lgaName": "Akure North",
      "apc": 14261,
      "lp": 2945,
      "pdp": 4633,
      "nnpp": 66,
      "total": 21905,
      "winner": "APC"
    },
    {
      "lgaId": "akure-south",
      "lgaName": "Akure South",
      "apc": 45694,
      "lp": 13950,
      "pdp": 9047,
      "nnpp": 136,
      "total": 68827,
      "winner": "APC"
    },
    {
      "lgaId": "ese-odo",
      "lgaName": "Ese Odo",
      "apc": 11160,
      "lp": 1709,
      "pdp": 8200,
      "nnpp": 28,
      "total": 21097,
      "winner": "APC"
    },
    {
      "lgaId": "idanre",
      "lgaName": "Idanre",
      "apc": 13061,
      "lp": 2262,
      "pdp": 10532,
      "nnpp": 24,
      "total": 25879,
      "winner": "APC"
    },
    {
      "lgaId": "ifedore",
      "lgaName": "Ifedore",
      "apc": 15055,
      "lp": 954,
      "pdp": 5360,
      "nnpp": 14,
      "total": 21383,
      "winner": "APC"
    },
    {
      "lgaId": "ilaje",
      "lgaName": "Ilaje",
      "apc": 19173,
      "lp": 1143,
      "pdp": 6780,
      "nnpp": 17,
      "total": 27113,
      "winner": "APC"
    },
    {
      "lgaId": "ile-oluji-okeigbo",
      "lgaName": "Ile Oluji/Okeigbo",
      "apc": 14750,
      "lp": 1576,
      "pdp": 6199,
      "nnpp": 27,
      "total": 22552,
      "winner": "APC"
    },
    {
      "lgaId": "irele",
      "lgaName": "Irele",
      "apc": 17334,
      "lp": 704,
      "pdp": 6523,
      "nnpp": 6,
      "total": 24567,
      "winner": "APC"
    },
    {
      "lgaId": "odigbo",
      "lgaName": "Odigbo",
      "apc": 27521,
      "lp": 3504,
      "pdp": 7786,
      "nnpp": 243,
      "total": 39054,
      "winner": "APC"
    },
    {
      "lgaId": "okitipupa",
      "lgaName": "Okitipupa",
      "apc": 26114,
      "lp": 1826,
      "pdp": 12025,
      "nnpp": 19,
      "total": 39984,
      "winner": "APC"
    },
    {
      "lgaId": "ondo-east",
      "lgaName": "Ondo East",
      "apc": 8390,
      "lp": 2004,
      "pdp": 3912,
      "nnpp": 55,
      "total": 14361,
      "winner": "APC"
    },
    {
      "lgaId": "ondo-west",
      "lgaName": "Ondo West",
      "apc": 24053,
      "lp": 6171,
      "pdp": 8534,
      "nnpp": 161,
      "total": 38919,
      "winner": "APC"
    },
    {
      "lgaId": "ose",
      "lgaName": "Ose",
      "apc": 14376,
      "lp": 2031,
      "pdp": 4767,
      "nnpp": 23,
      "total": 21197,
      "winner": "APC"
    },
    {
      "lgaId": "owo",
      "lgaName": "Owo",
      "apc": 29480,
      "lp": 3200,
      "pdp": 5173,
      "nnpp": 52,
      "total": 37905,
      "winner": "APC"
    }
  ],
  "oyo": [
    {
      "lgaId": "afijio",
      "lgaName": "Afijio",
      "apc": 8876,
      "lp": 1925,
      "pdp": 4112,
      "nnpp": 95,
      "total": 15008,
      "winner": "APC"
    },
    {
      "lgaId": "akinyele",
      "lgaName": "Akinyele",
      "apc": 20985,
      "lp": 6480,
      "pdp": 6478,
      "nnpp": 127,
      "total": 34070,
      "winner": "APC"
    },
    {
      "lgaId": "atiba",
      "lgaName": "Atiba",
      "apc": 15046,
      "lp": 1234,
      "pdp": 6180,
      "nnpp": 101,
      "total": 22561,
      "winner": "APC"
    },
    {
      "lgaId": "atisbo",
      "lgaName": "Atisbo",
      "apc": 7928,
      "lp": 1178,
      "pdp": 4031,
      "nnpp": 39,
      "total": 13176,
      "winner": "APC"
    },
    {
      "lgaId": "egbeda",
      "lgaName": "Egbeda",
      "apc": 22363,
      "lp": 6511,
      "pdp": 5709,
      "nnpp": 110,
      "total": 34693,
      "winner": "APC"
    },
    {
      "lgaId": "ibadan-north",
      "lgaName": "Ibadan North",
      "apc": 28416,
      "lp": 13106,
      "pdp": 8385,
      "nnpp": 524,
      "total": 50431,
      "winner": "APC"
    },
    {
      "lgaId": "ibadan-central",
      "lgaName": "Ibadan Central",
      "apc": 19124,
      "lp": 2971,
      "pdp": 8534,
      "nnpp": 229,
      "total": 30858,
      "winner": "APC"
    },
    {
      "lgaId": "ibadan-north-west",
      "lgaName": "Ibadan North-West",
      "apc": 13078,
      "lp": 4830,
      "pdp": 6011,
      "nnpp": 70,
      "total": 23989,
      "winner": "APC"
    },
    {
      "lgaId": "ibadan-south-east",
      "lgaName": "Ibadan South-East",
      "apc": 20025,
      "lp": 2138,
      "pdp": 7687,
      "nnpp": 87,
      "total": 29937,
      "winner": "APC"
    },
    {
      "lgaId": "ibadan-south-west",
      "lgaName": "Ibadan South-West",
      "apc": 24329,
      "lp": 9079,
      "pdp": 6961,
      "nnpp": 94,
      "total": 40463,
      "winner": "APC"
    },
    {
      "lgaId": "ibarapa-central",
      "lgaName": "Ibarapa Central",
      "apc": 10291,
      "lp": 726,
      "pdp": 5169,
      "nnpp": 27,
      "total": 16213,
      "winner": "APC"
    },
    {
      "lgaId": "ibarapa-east",
      "lgaName": "Ibarapa East",
      "apc": 10575,
      "lp": 779,
      "pdp": 4800,
      "nnpp": 54,
      "total": 16208,
      "winner": "APC"
    },
    {
      "lgaId": "ibarapa-north",
      "lgaName": "Ibarapa North",
      "apc": 8088,
      "lp": 344,
      "pdp": 4024,
      "nnpp": 313,
      "total": 12769,
      "winner": "APC"
    },
    {
      "lgaId": "ido",
      "lgaName": "Ido",
      "apc": 16505,
      "lp": 5161,
      "pdp": 3570,
      "nnpp": 94,
      "total": 25330,
      "winner": "APC"
    },
    {
      "lgaId": "irepo",
      "lgaName": "Irepo",
      "apc": 12282,
      "lp": 414,
      "pdp": 3907,
      "nnpp": 24,
      "total": 16627,
      "winner": "APC"
    },
    {
      "lgaId": "iseyin",
      "lgaName": "Iseyin",
      "apc": 19731,
      "lp": 1371,
      "pdp": 6588,
      "nnpp": 33,
      "total": 27723,
      "winner": "APC"
    },
    {
      "lgaId": "itesiwaju",
      "lgaName": "Itesiwaju",
      "apc": 6180,
      "lp": 387,
      "pdp": 4948,
      "nnpp": 43,
      "total": 11558,
      "winner": "APC"
    },
    {
      "lgaId": "iwajowa",
      "lgaName": "Iwajowa",
      "apc": 6284,
      "lp": 279,
      "pdp": 5094,
      "nnpp": 177,
      "total": 11834,
      "winner": "APC"
    },
    {
      "lgaId": "kajola",
      "lgaName": "Kajola",
      "apc": 11917,
      "lp": 503,
      "pdp": 9358,
      "nnpp": 71,
      "total": 21849,
      "winner": "APC"
    },
    {
      "lgaId": "lagelu",
      "lgaName": "Lagelu",
      "apc": 16011,
      "lp": 4066,
      "pdp": 5112,
      "nnpp": 55,
      "total": 25244,
      "winner": "APC"
    },
    {
      "lgaId": "ogbomosho-north",
      "lgaName": "Ogbomosho North",
      "apc": 14336,
      "lp": 7061,
      "pdp": 5805,
      "nnpp": 124,
      "total": 27326,
      "winner": "APC"
    },
    {
      "lgaId": "ogbomosho-south",
      "lgaName": "Ogbomosho South",
      "apc": 9793,
      "lp": 5828,
      "pdp": 6123,
      "nnpp": 161,
      "total": 21905,
      "winner": "APC"
    },
    {
      "lgaId": "ogo-oluwa",
      "lgaName": "Ogo Oluwa",
      "apc": 7373,
      "lp": 2522,
      "pdp": 4759,
      "nnpp": 423,
      "total": 15077,
      "winner": "APC"
    },
    {
      "lgaId": "olorunsogo",
      "lgaName": "Olorunsogo",
      "apc": 5178,
      "lp": 568,
      "pdp": 3492,
      "nnpp": 36,
      "total": 9274,
      "winner": "APC"
    },
    {
      "lgaId": "oluyole",
      "lgaName": "Oluyole",
      "apc": 16437,
      "lp": 4816,
      "pdp": 5119,
      "nnpp": 105,
      "total": 26477,
      "winner": "APC"
    },
    {
      "lgaId": "ona-ara",
      "lgaName": "Ona-Ara",
      "apc": 11978,
      "lp": 1287,
      "pdp": 5085,
      "nnpp": 57,
      "total": 18407,
      "winner": "APC"
    },
    {
      "lgaId": "orelope",
      "lgaName": "Orelope",
      "apc": 8509,
      "lp": 804,
      "pdp": 3004,
      "nnpp": 143,
      "total": 12460,
      "winner": "APC"
    },
    {
      "lgaId": "ori-ire",
      "lgaName": "Ori Ire",
      "apc": 12133,
      "lp": 1712,
      "pdp": 6391,
      "nnpp": 39,
      "total": 20275,
      "winner": "APC"
    },
    {
      "lgaId": "oyo-east",
      "lgaName": "Oyo East",
      "apc": 13430,
      "lp": 1870,
      "pdp": 5091,
      "nnpp": 67,
      "total": 20458,
      "winner": "APC"
    },
    {
      "lgaId": "oyo-west",
      "lgaName": "Oyo West",
      "apc": 14076,
      "lp": 1724,
      "pdp": 4544,
      "nnpp": 91,
      "total": 20435,
      "winner": "APC"
    },
    {
      "lgaId": "saki-east",
      "lgaName": "Saki East",
      "apc": 6414,
      "lp": 1144,
      "pdp": 3634,
      "nnpp": 144,
      "total": 11336,
      "winner": "APC"
    },
    {
      "lgaId": "saki-west",
      "lgaName": "Saki West",
      "apc": 21040,
      "lp": 2950,
      "pdp": 5080,
      "nnpp": 102,
      "total": 29172,
      "winner": "APC"
    },
    {
      "lgaId": "surulere",
      "lgaName": "Surulere",
      "apc": 11153,
      "lp": 3343,
      "pdp": 8192,
      "nnpp": 236,
      "total": 22924,
      "winner": "APC"
    }
  ],
  "plateau": [
    {
      "lgaId": "barkin-ladi",
      "lgaName": "Barkin Ladi",
      "apc": 12514,
      "lp": 32489,
      "pdp": 9073,
      "nnpp": 233,
      "total": 54309,
      "winner": "LP"
    },
    {
      "lgaId": "bassa",
      "lgaName": "Bassa",
      "apc": 16007,
      "lp": 28226,
      "pdp": 11306,
      "nnpp": 294,
      "total": 55833,
      "winner": "LP"
    },
    {
      "lgaId": "bokkos",
      "lgaName": "Bokkos",
      "apc": 10858,
      "lp": 32581,
      "pdp": 8569,
      "nnpp": 376,
      "total": 52384,
      "winner": "LP"
    },
    {
      "lgaId": "jos-east",
      "lgaName": "Jos East",
      "apc": 6348,
      "lp": 6392,
      "pdp": 5844,
      "nnpp": 156,
      "total": 18740,
      "winner": "LP"
    },
    {
      "lgaId": "jos-north",
      "lgaName": "Jos North",
      "apc": 65656,
      "lp": 70357,
      "pdp": 22528,
      "nnpp": 4642,
      "total": 163183,
      "winner": "LP"
    },
    {
      "lgaId": "jos-south",
      "lgaName": "Jos South",
      "apc": 15985,
      "lp": 112874,
      "pdp": 13803,
      "nnpp": 1008,
      "total": 143670,
      "winner": "LP"
    },
    {
      "lgaId": "kanam",
      "lgaName": "Kanam",
      "apc": 41184,
      "lp": 4769,
      "pdp": 24843,
      "nnpp": 237,
      "total": 71033,
      "winner": "APC"
    },
    {
      "lgaId": "kanke",
      "lgaName": "Kanke",
      "apc": 13438,
      "lp": 13194,
      "pdp": 10538,
      "nnpp": 75,
      "total": 37245,
      "winner": "APC"
    },
    {
      "lgaId": "langtang-north",
      "lgaName": "Langtang North",
      "apc": 8706,
      "lp": 21590,
      "pdp": 17751,
      "nnpp": 73,
      "total": 48120,
      "winner": "LP"
    },
    {
      "lgaId": "langtang-south",
      "lgaName": "Langtang South",
      "apc": 7478,
      "lp": 6045,
      "pdp": 12467,
      "nnpp": 24,
      "total": 26014,
      "winner": "PDP"
    },
    {
      "lgaId": "mangu",
      "lgaName": "Mangu",
      "apc": 22692,
      "lp": 39387,
      "pdp": 27013,
      "nnpp": 364,
      "total": 89456,
      "winner": "LP"
    },
    {
      "lgaId": "mikang",
      "lgaName": "Mikang",
      "apc": 6044,
      "lp": 7201,
      "pdp": 7211,
      "nnpp": 62,
      "total": 20518,
      "winner": "PDP"
    },
    {
      "lgaId": "pankshin",
      "lgaName": "Pankshin",
      "apc": 11019,
      "lp": 25450,
      "pdp": 12225,
      "nnpp": 141,
      "total": 48835,
      "winner": "LP"
    },
    {
      "lgaId": "qua-an-pan",
      "lgaName": "Qua'an Pan",
      "apc": 16522,
      "lp": 18641,
      "pdp": 20963,
      "nnpp": 339,
      "total": 56465,
      "winner": "PDP"
    },
    {
      "lgaId": "riyom",
      "lgaName": "Riyom",
      "apc": 6936,
      "lp": 15171,
      "pdp": 8181,
      "nnpp": 87,
      "total": 30375,
      "winner": "LP"
    },
    {
      "lgaId": "shendam",
      "lgaName": "Shendam",
      "apc": 17132,
      "lp": 25825,
      "pdp": 8444,
      "nnpp": 632,
      "total": 52033,
      "winner": "LP"
    },
    {
      "lgaId": "wase",
      "lgaName": "Wase",
      "apc": 28675,
      "lp": 6080,
      "pdp": 23049,
      "nnpp": 109,
      "total": 57913,
      "winner": "APC"
    }
  ],
  "zamfara": [
    {
      "lgaId": "anka",
      "lgaName": "Anka",
      "apc": 13467,
      "lp": 60,
      "pdp": 5358,
      "nnpp": 72,
      "total": 18957,
      "winner": "APC"
    },
    {
      "lgaId": "bakura",
      "lgaName": "Bakura",
      "apc": 34110,
      "lp": 17,
      "pdp": 10824,
      "nnpp": 192,
      "total": 45143,
      "winner": "APC"
    },
    {
      "lgaId": "birnin-magaji-kiyaw",
      "lgaName": "Birnin Magaji/Kiyaw",
      "apc": 22638,
      "lp": 6,
      "pdp": 6467,
      "nnpp": 43,
      "total": 29154,
      "winner": "APC"
    },
    {
      "lgaId": "bukkuyum",
      "lgaName": "Bukkuyum",
      "apc": 15812,
      "lp": 7,
      "pdp": 9914,
      "nnpp": 290,
      "total": 26023,
      "winner": "APC"
    },
    {
      "lgaId": "bungudu",
      "lgaName": "Bungudu",
      "apc": 22013,
      "lp": 51,
      "pdp": 22430,
      "nnpp": 347,
      "total": 44841,
      "winner": "PDP"
    },
    {
      "lgaId": "gummi",
      "lgaName": "Gummi",
      "apc": 22745,
      "lp": 24,
      "pdp": 20702,
      "nnpp": 43,
      "total": 43514,
      "winner": "APC"
    },
    {
      "lgaId": "gusau",
      "lgaName": "Gusau",
      "apc": 25261,
      "lp": 1121,
      "pdp": 41073,
      "nnpp": 791,
      "total": 68246,
      "winner": "PDP"
    },
    {
      "lgaId": "kaura-namoda",
      "lgaName": "Kaura Namoda",
      "apc": 25301,
      "lp": 154,
      "pdp": 17664,
      "nnpp": 296,
      "total": 43415,
      "winner": "APC"
    },
    {
      "lgaId": "maradun",
      "lgaName": "Maradun",
      "apc": 21274,
      "lp": 0,
      "pdp": 5829,
      "nnpp": 179,
      "total": 27282,
      "winner": "APC"
    },
    {
      "lgaId": "maru",
      "lgaName": "Maru",
      "apc": 12064,
      "lp": 12,
      "pdp": 7776,
      "nnpp": 498,
      "total": 20350,
      "winner": "APC"
    },
    {
      "lgaId": "shinkafi",
      "lgaName": "Shinkafi",
      "apc": 8692,
      "lp": 15,
      "pdp": 7517,
      "nnpp": 53,
      "total": 16277,
      "winner": "APC"
    },
    {
      "lgaId": "talata-mafara",
      "lgaName": "Talata Mafara",
      "apc": 35384,
      "lp": 129,
      "pdp": 7472,
      "nnpp": 238,
      "total": 43223,
      "winner": "APC"
    },
    {
      "lgaId": "tsafe",
      "lgaName": "Tsafe",
      "apc": 24984,
      "lp": 58,
      "pdp": 17871,
      "nnpp": 884,
      "total": 43797,
      "winner": "APC"
    },
    {
      "lgaId": "zurmi",
      "lgaName": "Zurmi",
      "apc": 14651,
      "lp": 8,
      "pdp": 13081,
      "nnpp": 130,
      "total": 27870,
      "winner": "APC"
    }
  ],
  "niger": [
    {
      "lgaId": "agaie",
      "lgaName": "Agaie",
      "apc": 13865,
      "lp": 179,
      "pdp": 12908,
      "nnpp": 532,
      "total": 27484,
      "winner": "APC"
    },
    {
      "lgaId": "agwara",
      "lgaName": "Agwara",
      "apc": 7659,
      "lp": 1628,
      "pdp": 6046,
      "nnpp": 83,
      "total": 15416,
      "winner": "APC"
    },
    {
      "lgaId": "bida",
      "lgaName": "Bida",
      "apc": 22510,
      "lp": 2559,
      "pdp": 13107,
      "nnpp": 571,
      "total": 38747,
      "winner": "APC"
    },
    {
      "lgaId": "borgu",
      "lgaName": "Borgu",
      "apc": 22491,
      "lp": 1982,
      "pdp": 9649,
      "nnpp": 441,
      "total": 34563,
      "winner": "APC"
    },
    {
      "lgaId": "bosso",
      "lgaName": "Bosso",
      "apc": 19767,
      "lp": 6778,
      "pdp": 14062,
      "nnpp": 1419,
      "total": 42026,
      "winner": "APC"
    },
    {
      "lgaId": "chanchaga",
      "lgaName": "Chanchaga",
      "apc": 25858,
      "lp": 10855,
      "pdp": 21189,
      "nnpp": 2566,
      "total": 60468,
      "winner": "APC"
    },
    {
      "lgaId": "edati",
      "lgaName": "Edati",
      "apc": 10508,
      "lp": 93,
      "pdp": 14779,
      "nnpp": 263,
      "total": 25643,
      "winner": "PDP"
    },
    {
      "lgaId": "gbako",
      "lgaName": "Gbako",
      "apc": 12436,
      "lp": 424,
      "pdp": 11017,
      "nnpp": 170,
      "total": 24047,
      "winner": "APC"
    },
    {
      "lgaId": "gurara",
      "lgaName": "Gurara",
      "apc": 12283,
      "lp": 3151,
      "pdp": 10479,
      "nnpp": 287,
      "total": 26200,
      "winner": "APC"
    },
    {
      "lgaId": "katcha",
      "lgaName": "Katcha",
      "apc": 10795,
      "lp": 180,
      "pdp": 13268,
      "nnpp": 331,
      "total": 24574,
      "winner": "PDP"
    },
    {
      "lgaId": "kontagora",
      "lgaName": "Kontagora",
      "apc": 20032,
      "lp": 2832,
      "pdp": 14248,
      "nnpp": 3847,
      "total": 40959,
      "winner": "APC"
    },
    {
      "lgaId": "lapai",
      "lgaName": "Lapai",
      "apc": 17822,
      "lp": 927,
      "pdp": 13545,
      "nnpp": 381,
      "total": 32675,
      "winner": "APC"
    },
    {
      "lgaId": "lavun",
      "lgaName": "Lavun",
      "apc": 15107,
      "lp": 894,
      "pdp": 14395,
      "nnpp": 556,
      "total": 30952,
      "winner": "APC"
    },
    {
      "lgaId": "magama",
      "lgaName": "Magama",
      "apc": 13287,
      "lp": 2932,
      "pdp": 9190,
      "nnpp": 1351,
      "total": 26760,
      "winner": "APC"
    },
    {
      "lgaId": "mariga",
      "lgaName": "Mariga",
      "apc": 13369,
      "lp": 724,
      "pdp": 6688,
      "nnpp": 603,
      "total": 21384,
      "winner": "APC"
    },
    {
      "lgaId": "mashegu",
      "lgaName": "Mashegu",
      "apc": 12665,
      "lp": 891,
      "pdp": 7206,
      "nnpp": 694,
      "total": 21456,
      "winner": "APC"
    },
    {
      "lgaId": "mokwa",
      "lgaName": "Mokwa",
      "apc": 15491,
      "lp": 957,
      "pdp": 15658,
      "nnpp": 697,
      "total": 32803,
      "winner": "PDP"
    },
    {
      "lgaId": "munya",
      "lgaName": "Munya",
      "apc": 7235,
      "lp": 3504,
      "pdp": 7178,
      "nnpp": 339,
      "total": 18256,
      "winner": "APC"
    },
    {
      "lgaId": "paikoro",
      "lgaName": "Paikoro",
      "apc": 18550,
      "lp": 5465,
      "pdp": 13185,
      "nnpp": 1560,
      "total": 38760,
      "winner": "APC"
    },
    {
      "lgaId": "rafi",
      "lgaName": "Rafi",
      "apc": 16963,
      "lp": 1058,
      "pdp": 9581,
      "nnpp": 1523,
      "total": 29125,
      "winner": "APC"
    },
    {
      "lgaId": "rijau",
      "lgaName": "Rijau",
      "apc": 11186,
      "lp": 2104,
      "pdp": 7969,
      "nnpp": 395,
      "total": 21654,
      "winner": "APC"
    },
    {
      "lgaId": "shiroro",
      "lgaName": "Shiroro",
      "apc": 18954,
      "lp": 5993,
      "pdp": 9967,
      "nnpp": 725,
      "total": 35639,
      "winner": "APC"
    },
    {
      "lgaId": "suleja",
      "lgaName": "Suleja",
      "apc": 15917,
      "lp": 16978,
      "pdp": 11968,
      "nnpp": 1645,
      "total": 46508,
      "winner": "LP"
    },
    {
      "lgaId": "tafa",
      "lgaName": "Tafa",
      "apc": 8927,
      "lp": 6904,
      "pdp": 8748,
      "nnpp": 453,
      "total": 25032,
      "winner": "APC"
    },
    {
      "lgaId": "wushishi",
      "lgaName": "Wushishi",
      "apc": 11504,
      "lp": 460,
      "pdp": 8868,
      "nnpp": 404,
      "total": 21236,
      "winner": "APC"
    }
  ],
  "cross-river": [
    {
      "lgaId": "abi",
      "lgaName": "Abi",
      "apc": 8011,
      "lp": 3557,
      "pdp": 5943,
      "nnpp": 24,
      "total": 17535,
      "winner": "APC"
    },
    {
      "lgaId": "akamkpa",
      "lgaName": "Akamkpa",
      "apc": 4150,
      "lp": 7466,
      "pdp": 3040,
      "nnpp": 59,
      "total": 14715,
      "winner": "LP"
    },
    {
      "lgaId": "akpabuyo",
      "lgaName": "Akpabuyo",
      "apc": 5970,
      "lp": 4314,
      "pdp": 3950,
      "nnpp": 26,
      "total": 14260,
      "winner": "APC"
    },
    {
      "lgaId": "bakassi",
      "lgaName": "Bakassi",
      "apc": 306,
      "lp": 487,
      "pdp": 266,
      "nnpp": 0,
      "total": 1059,
      "winner": "LP"
    },
    {
      "lgaId": "bekwarra",
      "lgaName": "Bekwarra",
      "apc": 5354,
      "lp": 9655,
      "pdp": 5299,
      "nnpp": 99,
      "total": 20407,
      "winner": "LP"
    },
    {
      "lgaId": "biase",
      "lgaName": "Biase",
      "apc": 6668,
      "lp": 4705,
      "pdp": 4586,
      "nnpp": 76,
      "total": 16035,
      "winner": "APC"
    },
    {
      "lgaId": "boki",
      "lgaName": "Boki",
      "apc": 10274,
      "lp": 9753,
      "pdp": 7800,
      "nnpp": 142,
      "total": 27969,
      "winner": "APC"
    },
    {
      "lgaId": "calabar-municipality",
      "lgaName": "Calabar Municipality",
      "apc": 3973,
      "lp": 41198,
      "pdp": 3506,
      "nnpp": 211,
      "total": 48888,
      "winner": "LP"
    },
    {
      "lgaId": "calabar-south",
      "lgaName": "Calabar South",
      "apc": 9060,
      "lp": 24247,
      "pdp": 4255,
      "nnpp": 146,
      "total": 37708,
      "winner": "LP"
    },
    {
      "lgaId": "etung",
      "lgaName": "Etung",
      "apc": 2713,
      "lp": 2345,
      "pdp": 2149,
      "nnpp": 31,
      "total": 7238,
      "winner": "APC"
    },
    {
      "lgaId": "ikom",
      "lgaName": "Ikom",
      "apc": 6111,
      "lp": 11626,
      "pdp": 6003,
      "nnpp": 183,
      "total": 23923,
      "winner": "LP"
    },
    {
      "lgaId": "obanliku",
      "lgaName": "Obanliku",
      "apc": 6565,
      "lp": 4286,
      "pdp": 7253,
      "nnpp": 21,
      "total": 18125,
      "winner": "PDP"
    },
    {
      "lgaId": "obubra",
      "lgaName": "Obubra",
      "apc": 9041,
      "lp": 4488,
      "pdp": 7097,
      "nnpp": 43,
      "total": 20669,
      "winner": "APC"
    },
    {
      "lgaId": "obudu",
      "lgaName": "Obudu",
      "apc": 8987,
      "lp": 11218,
      "pdp": 5112,
      "nnpp": 131,
      "total": 25448,
      "winner": "LP"
    },
    {
      "lgaId": "odukpani",
      "lgaName": "Odukpani",
      "apc": 8597,
      "lp": 2704,
      "pdp": 3911,
      "nnpp": 35,
      "total": 15247,
      "winner": "APC"
    },
    {
      "lgaId": "ogoja",
      "lgaName": "Ogoja",
      "apc": 9226,
      "lp": 10903,
      "pdp": 10026,
      "nnpp": 149,
      "total": 30304,
      "winner": "LP"
    },
    {
      "lgaId": "yakuur",
      "lgaName": "Yakuur",
      "apc": 9646,
      "lp": 10198,
      "pdp": 6600,
      "nnpp": 73,
      "total": 26517,
      "winner": "LP"
    },
    {
      "lgaId": "yala",
      "lgaName": "Yala",
      "apc": 15868,
      "lp": 16767,
      "pdp": 8629,
      "nnpp": 195,
      "total": 41459,
      "winner": "LP"
    }
  ],
  "enugu": [
    {
      "lgaId": "aninri",
      "lgaName": "Aninri",
      "apc": 64,
      "lp": 11339,
      "pdp": 395,
      "nnpp": 30,
      "total": 11828,
      "winner": "LP"
    },
    {
      "lgaId": "awgu",
      "lgaName": "Awgu",
      "apc": 221,
      "lp": 19803,
      "pdp": 445,
      "nnpp": 70,
      "total": 20539,
      "winner": "LP"
    },
    {
      "lgaId": "enugu-east",
      "lgaName": "Enugu East",
      "apc": 212,
      "lp": 48085,
      "pdp": 845,
      "nnpp": 203,
      "total": 49345,
      "winner": "LP"
    },
    {
      "lgaId": "enugu-north",
      "lgaName": "Enugu North",
      "apc": 229,
      "lp": 44666,
      "pdp": 338,
      "nnpp": 113,
      "total": 45346,
      "winner": "LP"
    },
    {
      "lgaId": "enugu-south",
      "lgaName": "Enugu South",
      "apc": 194,
      "lp": 38511,
      "pdp": 336,
      "nnpp": 70,
      "total": 39111,
      "winner": "LP"
    },
    {
      "lgaId": "ezeagu",
      "lgaName": "Ezeagu",
      "apc": 186,
      "lp": 16245,
      "pdp": 537,
      "nnpp": 106,
      "total": 17074,
      "winner": "LP"
    },
    {
      "lgaId": "igbo-etiti",
      "lgaName": "Igbo Etiti",
      "apc": 476,
      "lp": 25001,
      "pdp": 764,
      "nnpp": 108,
      "total": 26349,
      "winner": "LP"
    },
    {
      "lgaId": "igbo-eze-north",
      "lgaName": "Igbo Eze North",
      "apc": 181,
      "lp": 15135,
      "pdp": 1174,
      "nnpp": 68,
      "total": 16558,
      "winner": "LP"
    },
    {
      "lgaId": "igbo-eze-south",
      "lgaName": "Igbo Eze South",
      "apc": 352,
      "lp": 17855,
      "pdp": 1009,
      "nnpp": 82,
      "total": 19298,
      "winner": "LP"
    },
    {
      "lgaId": "isi-uzo",
      "lgaName": "Isi Uzo",
      "apc": 129,
      "lp": 16822,
      "pdp": 1768,
      "nnpp": 74,
      "total": 18793,
      "winner": "LP"
    },
    {
      "lgaId": "nkanu-east",
      "lgaName": "Nkanu East",
      "apc": 94,
      "lp": 11746,
      "pdp": 1430,
      "nnpp": 53,
      "total": 13323,
      "winner": "LP"
    },
    {
      "lgaId": "nkanu-west",
      "lgaName": "Nkanu West",
      "apc": 343,
      "lp": 15026,
      "pdp": 550,
      "nnpp": 77,
      "total": 15996,
      "winner": "LP"
    },
    {
      "lgaId": "nsukka",
      "lgaName": "Nsukka",
      "apc": 433,
      "lp": 56598,
      "pdp": 2037,
      "nnpp": 196,
      "total": 59264,
      "winner": "LP"
    },
    {
      "lgaId": "oji-river",
      "lgaName": "Oji River",
      "apc": 280,
      "lp": 17793,
      "pdp": 864,
      "nnpp": 94,
      "total": 19031,
      "winner": "LP"
    },
    {
      "lgaId": "udenu",
      "lgaName": "Udenu",
      "apc": 327,
      "lp": 26633,
      "pdp": 1157,
      "nnpp": 213,
      "total": 28330,
      "winner": "LP"
    },
    {
      "lgaId": "udi",
      "lgaName": "Udi",
      "apc": 611,
      "lp": 35408,
      "pdp": 936,
      "nnpp": 204,
      "total": 37159,
      "winner": "LP"
    },
    {
      "lgaId": "uzo-uwani",
      "lgaName": "Uzo Uwani",
      "apc": 440,
      "lp": 11974,
      "pdp": 1164,
      "nnpp": 47,
      "total": 13625,
      "winner": "LP"
    }
  ],
  "ekiti": [
    {
      "lgaId": "ado-ekiti",
      "lgaName": "Ado Ekiti",
      "apc": 28751,
      "lp": 4485,
      "pdp": 8168,
      "nnpp": 87,
      "total": 41491,
      "winner": "APC"
    },
    {
      "lgaId": "efon",
      "lgaName": "Efon",
      "apc": 5873,
      "lp": 125,
      "pdp": 2521,
      "nnpp": 3,
      "total": 8522,
      "winner": "APC"
    },
    {
      "lgaId": "ekiti-east",
      "lgaName": "Ekiti East",
      "apc": 12435,
      "lp": 375,
      "pdp": 7782,
      "nnpp": 7,
      "total": 20599,
      "winner": "APC"
    },
    {
      "lgaId": "ekiti-west",
      "lgaName": "Ekiti West",
      "apc": 14516,
      "lp": 391,
      "pdp": 4318,
      "nnpp": 10,
      "total": 19235,
      "winner": "APC"
    },
    {
      "lgaId": "ekiti-south-west",
      "lgaName": "Ekiti South-West",
      "apc": 11334,
      "lp": 440,
      "pdp": 5047,
      "nnpp": 9,
      "total": 16830,
      "winner": "APC"
    },
    {
      "lgaId": "emure",
      "lgaName": "Emure",
      "apc": 8159,
      "lp": 465,
      "pdp": 3035,
      "nnpp": 14,
      "total": 11673,
      "winner": "APC"
    },
    {
      "lgaId": "gbonyin",
      "lgaName": "Gbonyin",
      "apc": 11969,
      "lp": 245,
      "pdp": 4178,
      "nnpp": 11,
      "total": 16403,
      "winner": "APC"
    },
    {
      "lgaId": "ido-osi",
      "lgaName": "Ido/Osi",
      "apc": 11917,
      "lp": 782,
      "pdp": 7476,
      "nnpp": 14,
      "total": 20189,
      "winner": "APC"
    },
    {
      "lgaId": "ijero",
      "lgaName": "Ijero",
      "apc": 12628,
      "lp": 373,
      "pdp": 5731,
      "nnpp": 6,
      "total": 18738,
      "winner": "APC"
    },
    {
      "lgaId": "ikere",
      "lgaName": "Ikere",
      "apc": 11659,
      "lp": 910,
      "pdp": 7198,
      "nnpp": 24,
      "total": 19791,
      "winner": "APC"
    },
    {
      "lgaId": "ikole",
      "lgaName": "Ikole",
      "apc": 15465,
      "lp": 779,
      "pdp": 10198,
      "nnpp": 11,
      "total": 26453,
      "winner": "APC"
    },
    {
      "lgaId": "ilejemeje",
      "lgaName": "Ilejemeje",
      "apc": 4599,
      "lp": 97,
      "pdp": 2662,
      "nnpp": 3,
      "total": 7361,
      "winner": "APC"
    },
    {
      "lgaId": "irepodun-ifelodun",
      "lgaName": "Irepodun/Ifelodun",
      "apc": 14265,
      "lp": 544,
      "pdp": 5516,
      "nnpp": 24,
      "total": 20349,
      "winner": "APC"
    },
    {
      "lgaId": "ise-orun",
      "lgaName": "Ise/Orun",
      "apc": 11415,
      "lp": 497,
      "pdp": 2734,
      "nnpp": 10,
      "total": 14656,
      "winner": "APC"
    },
    {
      "lgaId": "moba",
      "lgaName": "Moba",
      "apc": 12046,
      "lp": 246,
      "pdp": 5847,
      "nnpp": 11,
      "total": 18150,
      "winner": "APC"
    },
    {
      "lgaId": "oye",
      "lgaName": "Oye",
      "apc": 14472,
      "lp": 643,
      "pdp": 7143,
      "nnpp": 20,
      "total": 22278,
      "winner": "APC"
    }
  ],
  "federal-capital-territory": [
    {
      "lgaId": "abaji",
      "lgaName": "Abaji",
      "apc": 10370,
      "lp": 2874,
      "pdp": 6888,
      "nnpp": 104,
      "total": 20236,
      "winner": "APC"
    },
    {
      "lgaId": "bwari",
      "lgaName": "Bwari",
      "apc": 13156,
      "lp": 67198,
      "pdp": 10835,
      "nnpp": 877,
      "total": 92066,
      "winner": "LP"
    },
    {
      "lgaId": "gwagwalada",
      "lgaName": "Gwagwalada",
      "apc": 15890,
      "lp": 19694,
      "pdp": 10982,
      "nnpp": 483,
      "total": 47049,
      "winner": "LP"
    },
    {
      "lgaId": "kuje",
      "lgaName": "Kuje",
      "apc": 10648,
      "lp": 14257,
      "pdp": 10028,
      "nnpp": 266,
      "total": 35199,
      "winner": "LP"
    },
    {
      "lgaId": "kwali",
      "lgaName": "Kwali",
      "apc": 11242,
      "lp": 7302,
      "pdp": 9054,
      "nnpp": 324,
      "total": 27922,
      "winner": "APC"
    },
    {
      "lgaId": "abuja-municipal",
      "lgaName": "Abuja Municipal",
      "apc": 29596,
      "lp": 170392,
      "pdp": 26407,
      "nnpp": 2463,
      "total": 228858,
      "winner": "LP"
    }
  ],
  "kwara": [
    {
      "lgaId": "asa",
      "lgaName": "Asa",
      "apc": 15123,
      "lp": 678,
      "pdp": 10482,
      "nnpp": 116,
      "total": 26399,
      "winner": "APC"
    },
    {
      "lgaId": "baruten",
      "lgaName": "Baruten",
      "apc": 23495,
      "lp": 830,
      "pdp": 10201,
      "nnpp": 139,
      "total": 34665,
      "winner": "APC"
    },
    {
      "lgaId": "edu",
      "lgaName": "Edu",
      "apc": 18564,
      "lp": 696,
      "pdp": 13249,
      "nnpp": 816,
      "total": 33325,
      "winner": "APC"
    },
    {
      "lgaId": "ekiti",
      "lgaName": "Ekiti",
      "apc": 5739,
      "lp": 721,
      "pdp": 3760,
      "nnpp": 13,
      "total": 10233,
      "winner": "APC"
    },
    {
      "lgaId": "ifelodun",
      "lgaName": "Ifelodun",
      "apc": 16369,
      "lp": 2517,
      "pdp": 6457,
      "nnpp": 98,
      "total": 25441,
      "winner": "APC"
    },
    {
      "lgaId": "ilorin-east",
      "lgaName": "Ilorin East",
      "apc": 24264,
      "lp": 2409,
      "pdp": 13325,
      "nnpp": 132,
      "total": 40130,
      "winner": "APC"
    },
    {
      "lgaId": "ilorin-south",
      "lgaName": "Ilorin South",
      "apc": 21620,
      "lp": 7274,
      "pdp": 10806,
      "nnpp": 166,
      "total": 39866,
      "winner": "APC"
    },
    {
      "lgaId": "ilorin-west",
      "lgaName": "Ilorin West",
      "apc": 47784,
      "lp": 5598,
      "pdp": 29978,
      "nnpp": 436,
      "total": 83796,
      "winner": "APC"
    },
    {
      "lgaId": "irepodun",
      "lgaName": "Irepodun",
      "apc": 11545,
      "lp": 3000,
      "pdp": 6368,
      "nnpp": 113,
      "total": 21026,
      "winner": "APC"
    },
    {
      "lgaId": "isin",
      "lgaName": "Isin",
      "apc": 4484,
      "lp": 1419,
      "pdp": 2506,
      "nnpp": 31,
      "total": 8440,
      "winner": "APC"
    },
    {
      "lgaId": "kaiama",
      "lgaName": "Kaiama",
      "apc": 14580,
      "lp": 435,
      "pdp": 6073,
      "nnpp": 418,
      "total": 21506,
      "winner": "APC"
    },
    {
      "lgaId": "moro",
      "lgaName": "Moro",
      "apc": 15287,
      "lp": 959,
      "pdp": 6429,
      "nnpp": 99,
      "total": 22774,
      "winner": "APC"
    },
    {
      "lgaId": "offa",
      "lgaName": "Offa",
      "apc": 19475,
      "lp": 1444,
      "pdp": 3508,
      "nnpp": 71,
      "total": 24498,
      "winner": "APC"
    },
    {
      "lgaId": "oke-ero",
      "lgaName": "Oke Ero",
      "apc": 6016,
      "lp": 592,
      "pdp": 3074,
      "nnpp": 16,
      "total": 9698,
      "winner": "APC"
    },
    {
      "lgaId": "oyun",
      "lgaName": "Oyun",
      "apc": 8838,
      "lp": 1867,
      "pdp": 4298,
      "nnpp": 133,
      "total": 15136,
      "winner": "APC"
    },
    {
      "lgaId": "pategi",
      "lgaName": "Pategi",
      "apc": 10389,
      "lp": 727,
      "pdp": 6395,
      "nnpp": 344,
      "total": 17855,
      "winner": "APC"
    }
  ],
  "nassarawa": [
    {
      "lgaId": "akwanga",
      "lgaName": "Akwanga",
      "apc": 9221,
      "lp": 18227,
      "pdp": 5955,
      "nnpp": 709,
      "total": 34112,
      "winner": "LP"
    },
    {
      "lgaId": "awe",
      "lgaName": "Awe",
      "apc": 14269,
      "lp": 4309,
      "pdp": 10416,
      "nnpp": 576,
      "total": 29570,
      "winner": "APC"
    },
    {
      "lgaId": "doma",
      "lgaName": "Doma",
      "apc": 7532,
      "lp": 8864,
      "pdp": 11674,
      "nnpp": 607,
      "total": 28677,
      "winner": "PDP"
    },
    {
      "lgaId": "karu",
      "lgaName": "Karu",
      "apc": 15843,
      "lp": 57638,
      "pdp": 18901,
      "nnpp": 1959,
      "total": 94341,
      "winner": "LP"
    },
    {
      "lgaId": "keana",
      "lgaName": "Keana",
      "apc": 7208,
      "lp": 4002,
      "pdp": 4335,
      "nnpp": 236,
      "total": 15781,
      "winner": "APC"
    },
    {
      "lgaId": "keffi",
      "lgaName": "Keffi",
      "apc": 13564,
      "lp": 9607,
      "pdp": 13007,
      "nnpp": 1798,
      "total": 37976,
      "winner": "APC"
    },
    {
      "lgaId": "kokona",
      "lgaName": "Kokona",
      "apc": 12198,
      "lp": 9647,
      "pdp": 8098,
      "nnpp": 358,
      "total": 30301,
      "winner": "APC"
    },
    {
      "lgaId": "lafia",
      "lgaName": "Lafia",
      "apc": 30796,
      "lp": 24935,
      "pdp": 29917,
      "nnpp": 3321,
      "total": 88969,
      "winner": "APC"
    },
    {
      "lgaId": "nasarawa",
      "lgaName": "Nasarawa",
      "apc": 17241,
      "lp": 8680,
      "pdp": 10576,
      "nnpp": 1380,
      "total": 37877,
      "winner": "APC"
    },
    {
      "lgaId": "nasarawa-eggon",
      "lgaName": "Nasarawa Eggon",
      "apc": 13669,
      "lp": 15624,
      "pdp": 9971,
      "nnpp": 509,
      "total": 39773,
      "winner": "LP"
    },
    {
      "lgaId": "obi",
      "lgaName": "Obi",
      "apc": 10838,
      "lp": 19423,
      "pdp": 12947,
      "nnpp": 150,
      "total": 43358,
      "winner": "LP"
    },
    {
      "lgaId": "toto",
      "lgaName": "Toto",
      "apc": 11553,
      "lp": 5228,
      "pdp": 7077,
      "nnpp": 805,
      "total": 24663,
      "winner": "APC"
    },
    {
      "lgaId": "wamba",
      "lgaName": "Wamba",
      "apc": 8990,
      "lp": 5177,
      "pdp": 4219,
      "nnpp": 313,
      "total": 18699,
      "winner": "APC"
    }
  ],
  "delta": [
    {
      "lgaId": "aniocha-north",
      "lgaName": "Aniocha North",
      "apc": 1146,
      "lp": 11678,
      "pdp": 3783,
      "nnpp": 138,
      "total": 16745,
      "winner": "LP"
    },
    {
      "lgaId": "aniocha-south",
      "lgaName": "Aniocha South",
      "apc": 1686,
      "lp": 14208,
      "pdp": 4672,
      "nnpp": 113,
      "total": 20679,
      "winner": "LP"
    },
    {
      "lgaId": "bomadi",
      "lgaName": "Bomadi",
      "apc": 2421,
      "lp": 3134,
      "pdp": 4429,
      "nnpp": 38,
      "total": 10022,
      "winner": "PDP"
    },
    {
      "lgaId": "burutu",
      "lgaName": "Burutu",
      "apc": 4605,
      "lp": 5745,
      "pdp": 7147,
      "nnpp": 54,
      "total": 17551,
      "winner": "PDP"
    },
    {
      "lgaId": "ethiope-east",
      "lgaName": "Ethiope East",
      "apc": 6314,
      "lp": 10806,
      "pdp": 7854,
      "nnpp": 402,
      "total": 25376,
      "winner": "LP"
    },
    {
      "lgaId": "ethiope-west",
      "lgaName": "Ethiope West",
      "apc": 3850,
      "lp": 10199,
      "pdp": 5403,
      "nnpp": 263,
      "total": 19715,
      "winner": "LP"
    },
    {
      "lgaId": "ika-north-east",
      "lgaName": "Ika North-East",
      "apc": 1902,
      "lp": 8980,
      "pdp": 16696,
      "nnpp": 120,
      "total": 27698,
      "winner": "PDP"
    },
    {
      "lgaId": "ika-south",
      "lgaName": "Ika South",
      "apc": 3290,
      "lp": 17868,
      "pdp": 7485,
      "nnpp": 166,
      "total": 28809,
      "winner": "LP"
    },
    {
      "lgaId": "isoko-north",
      "lgaName": "Isoko North",
      "apc": 2734,
      "lp": 17765,
      "pdp": 8254,
      "nnpp": 105,
      "total": 28858,
      "winner": "LP"
    },
    {
      "lgaId": "isoko-south",
      "lgaName": "Isoko South",
      "apc": 4451,
      "lp": 18166,
      "pdp": 7039,
      "nnpp": 99,
      "total": 29755,
      "winner": "LP"
    },
    {
      "lgaId": "ndokwa-east",
      "lgaName": "Ndokwa East",
      "apc": 3758,
      "lp": 7756,
      "pdp": 5996,
      "nnpp": 38,
      "total": 17548,
      "winner": "LP"
    },
    {
      "lgaId": "ndokwa-west",
      "lgaName": "Ndokwa West",
      "apc": 3846,
      "lp": 12889,
      "pdp": 8760,
      "nnpp": 56,
      "total": 25551,
      "winner": "LP"
    },
    {
      "lgaId": "okpe",
      "lgaName": "Okpe",
      "apc": 4773,
      "lp": 10754,
      "pdp": 8326,
      "nnpp": 41,
      "total": 23894,
      "winner": "LP"
    },
    {
      "lgaId": "oshimili-north",
      "lgaName": "Oshimili North",
      "apc": 1688,
      "lp": 14929,
      "pdp": 4796,
      "nnpp": 135,
      "total": 21548,
      "winner": "LP"
    },
    {
      "lgaId": "oshimili-south",
      "lgaName": "Oshimili South",
      "apc": 894,
      "lp": 40085,
      "pdp": 2790,
      "nnpp": 181,
      "total": 43950,
      "winner": "LP"
    },
    {
      "lgaId": "patani",
      "lgaName": "Patani",
      "apc": 2270,
      "lp": 2700,
      "pdp": 3346,
      "nnpp": 43,
      "total": 8359,
      "winner": "PDP"
    },
    {
      "lgaId": "sapele",
      "lgaName": "Sapele",
      "apc": 4099,
      "lp": 17408,
      "pdp": 6168,
      "nnpp": 121,
      "total": 27796,
      "winner": "LP"
    },
    {
      "lgaId": "udu",
      "lgaName": "Udu",
      "apc": 4937,
      "lp": 18579,
      "pdp": 4836,
      "nnpp": 120,
      "total": 28472,
      "winner": "LP"
    },
    {
      "lgaId": "ughelli-north",
      "lgaName": "Ughelli North",
      "apc": 11196,
      "lp": 22589,
      "pdp": 9241,
      "nnpp": 198,
      "total": 43224,
      "winner": "LP"
    },
    {
      "lgaId": "ughelli-south",
      "lgaName": "Ughelli South",
      "apc": 8877,
      "lp": 9790,
      "pdp": 10244,
      "nnpp": 93,
      "total": 29004,
      "winner": "PDP"
    },
    {
      "lgaId": "ukwuani",
      "lgaName": "Ukwuani",
      "apc": 2946,
      "lp": 11239,
      "pdp": 6713,
      "nnpp": 100,
      "total": 20998,
      "winner": "LP"
    },
    {
      "lgaId": "uvwie",
      "lgaName": "Uvwie",
      "apc": 3033,
      "lp": 36302,
      "pdp": 3375,
      "nnpp": 229,
      "total": 42939,
      "winner": "LP"
    },
    {
      "lgaId": "warri-north",
      "lgaName": "Warri North",
      "apc": 1379,
      "lp": 2417,
      "pdp": 3411,
      "nnpp": 52,
      "total": 7259,
      "winner": "PDP"
    },
    {
      "lgaId": "warri-south",
      "lgaName": "Warri South",
      "apc": 1234,
      "lp": 13289,
      "pdp": 7653,
      "nnpp": 177,
      "total": 22353,
      "winner": "LP"
    },
    {
      "lgaId": "warri-south-west",
      "lgaName": "Warri South-West",
      "apc": 2857,
      "lp": 2591,
      "pdp": 3183,
      "nnpp": 40,
      "total": 8671,
      "winner": "PDP"
    }
  ],
  "lagos": [
    {
      "lgaId": "agege",
      "lgaName": "Agege",
      "apc": 29568,
      "lp": 13270,
      "pdp": 4498,
      "nnpp": 1513,
      "total": 48849,
      "winner": "APC"
    },
    {
      "lgaId": "ajeromi-ifelodun",
      "lgaName": "Ajeromi-Ifelodun",
      "apc": 25938,
      "lp": 35663,
      "pdp": 4680,
      "nnpp": 436,
      "total": 66717,
      "winner": "LP"
    },
    {
      "lgaId": "alimosho",
      "lgaName": "Alimosho",
      "apc": 62909,
      "lp": 71327,
      "pdp": 8201,
      "nnpp": 701,
      "total": 143138,
      "winner": "LP"
    },
    {
      "lgaId": "amuwo-odofin",
      "lgaName": "Amuwo-Odofin",
      "apc": 13318,
      "lp": 55547,
      "pdp": 2383,
      "nnpp": 330,
      "total": 71578,
      "winner": "LP"
    },
    {
      "lgaId": "apapa",
      "lgaName": "Apapa",
      "apc": 15471,
      "lp": 7566,
      "pdp": 2997,
      "nnpp": 338,
      "total": 26372,
      "winner": "APC"
    },
    {
      "lgaId": "badagry",
      "lgaName": "Badagry",
      "apc": 31903,
      "lp": 10956,
      "pdp": 6024,
      "nnpp": 153,
      "total": 49036,
      "winner": "APC"
    },
    {
      "lgaId": "epe",
      "lgaName": "Epe",
      "apc": 19867,
      "lp": 3497,
      "pdp": 5221,
      "nnpp": 76,
      "total": 28661,
      "winner": "APC"
    },
    {
      "lgaId": "eti-osa",
      "lgaName": "Eti-Osa",
      "apc": 15317,
      "lp": 42388,
      "pdp": 3369,
      "nnpp": 381,
      "total": 61455,
      "winner": "LP"
    },
    {
      "lgaId": "ibeju-lekki",
      "lgaName": "Ibeju-Lekki",
      "apc": 14685,
      "lp": 10410,
      "pdp": 2329,
      "nnpp": 104,
      "total": 27528,
      "winner": "APC"
    },
    {
      "lgaId": "ifako-ijaye",
      "lgaName": "Ifako-Ijaye",
      "apc": 30756,
      "lp": 25437,
      "pdp": 3258,
      "nnpp": 232,
      "total": 59683,
      "winner": "APC"
    },
    {
      "lgaId": "ikeja",
      "lgaName": "Ikeja",
      "apc": 21276,
      "lp": 30004,
      "pdp": 2280,
      "nnpp": 337,
      "total": 53897,
      "winner": "LP"
    },
    {
      "lgaId": "ikorodu",
      "lgaName": "Ikorodu",
      "apc": 50353,
      "lp": 28951,
      "pdp": 4508,
      "nnpp": 400,
      "total": 84212,
      "winner": "APC"
    },
    {
      "lgaId": "kosofe",
      "lgaName": "Kosofe",
      "apc": 36883,
      "lp": 46554,
      "pdp": 4058,
      "nnpp": 902,
      "total": 88397,
      "winner": "LP"
    },
    {
      "lgaId": "lagos-island",
      "lgaName": "Lagos Island",
      "apc": 27760,
      "lp": 3058,
      "pdp": 2521,
      "nnpp": 79,
      "total": 33418,
      "winner": "APC"
    },
    {
      "lgaId": "lagos-mainland",
      "lgaName": "Lagos Mainland",
      "apc": 20030,
      "lp": 18698,
      "pdp": 3005,
      "nnpp": 257,
      "total": 41990,
      "winner": "APC"
    },
    {
      "lgaId": "mushin",
      "lgaName": "Mushin",
      "apc": 41907,
      "lp": 23390,
      "pdp": 3478,
      "nnpp": 410,
      "total": 69185,
      "winner": "APC"
    },
    {
      "lgaId": "ojo",
      "lgaName": "Ojo",
      "apc": 20603,
      "lp": 38859,
      "pdp": 3701,
      "nnpp": 462,
      "total": 63625,
      "winner": "LP"
    },
    {
      "lgaId": "oshodi-isolo",
      "lgaName": "Oshodi-Isolo",
      "apc": 27181,
      "lp": 51020,
      "pdp": 3139,
      "nnpp": 413,
      "total": 81753,
      "winner": "LP"
    },
    {
      "lgaId": "shomolu",
      "lgaName": "Shomolu",
      "apc": 27879,
      "lp": 28936,
      "pdp": 3449,
      "nnpp": 476,
      "total": 60740,
      "winner": "LP"
    },
    {
      "lgaId": "surulere",
      "lgaName": "Surulere",
      "apc": 39002,
      "lp": 36923,
      "pdp": 2651,
      "nnpp": 442,
      "total": 79018,
      "winner": "APC"
    }
  ],
  "imo": [
    {
      "lgaId": "aboh-mbaise",
      "lgaName": "Aboh Mbaise",
      "apc": 1197,
      "lp": 17604,
      "pdp": 4181,
      "nnpp": 104,
      "total": 23086,
      "winner": "LP"
    },
    {
      "lgaId": "ahiazu-mbaise",
      "lgaName": "Ahiazu Mbaise",
      "apc": 970,
      "lp": 17332,
      "pdp": 1833,
      "nnpp": 170,
      "total": 20305,
      "winner": "LP"
    },
    {
      "lgaId": "ehime-mbano",
      "lgaName": "Ehime Mbano",
      "apc": 1018,
      "lp": 11959,
      "pdp": 711,
      "nnpp": 58,
      "total": 13746,
      "winner": "LP"
    },
    {
      "lgaId": "ezinihitte",
      "lgaName": "Ezinihitte",
      "apc": 1612,
      "lp": 15560,
      "pdp": 3208,
      "nnpp": 89,
      "total": 20469,
      "winner": "LP"
    },
    {
      "lgaId": "ideato-north",
      "lgaName": "Ideato North",
      "apc": 297,
      "lp": 10958,
      "pdp": 586,
      "nnpp": 58,
      "total": 11899,
      "winner": "LP"
    },
    {
      "lgaId": "ideato-south",
      "lgaName": "Ideato South",
      "apc": 440,
      "lp": 10216,
      "pdp": 779,
      "nnpp": 65,
      "total": 11500,
      "winner": "LP"
    },
    {
      "lgaId": "ihitte-uboma",
      "lgaName": "Ihitte/Uboma",
      "apc": 417,
      "lp": 11681,
      "pdp": 499,
      "nnpp": 25,
      "total": 12622,
      "winner": "LP"
    },
    {
      "lgaId": "ikeduru",
      "lgaName": "Ikeduru",
      "apc": 1339,
      "lp": 23718,
      "pdp": 991,
      "nnpp": 111,
      "total": 26159,
      "winner": "LP"
    },
    {
      "lgaId": "isiala-mbano",
      "lgaName": "Isiala Mbano",
      "apc": 796,
      "lp": 15873,
      "pdp": 1026,
      "nnpp": 112,
      "total": 17807,
      "winner": "LP"
    },
    {
      "lgaId": "isu",
      "lgaName": "Isu",
      "apc": 681,
      "lp": 10383,
      "pdp": 690,
      "nnpp": 29,
      "total": 11783,
      "winner": "LP"
    },
    {
      "lgaId": "mbaitoli",
      "lgaName": "Mbaitoli",
      "apc": 714,
      "lp": 21904,
      "pdp": 674,
      "nnpp": 124,
      "total": 23416,
      "winner": "LP"
    },
    {
      "lgaId": "ngor-okpala",
      "lgaName": "Ngor Okpala",
      "apc": 2080,
      "lp": 18859,
      "pdp": 2725,
      "nnpp": 128,
      "total": 23792,
      "winner": "LP"
    },
    {
      "lgaId": "njaba",
      "lgaName": "Njaba",
      "apc": 235,
      "lp": 7591,
      "pdp": 190,
      "nnpp": 16,
      "total": 8032,
      "winner": "LP"
    },
    {
      "lgaId": "nkwerre",
      "lgaName": "Nkwerre",
      "apc": 662,
      "lp": 7052,
      "pdp": 319,
      "nnpp": 26,
      "total": 8059,
      "winner": "LP"
    },
    {
      "lgaId": "nwangele",
      "lgaName": "Nwangele",
      "apc": 479,
      "lp": 9078,
      "pdp": 452,
      "nnpp": 13,
      "total": 10022,
      "winner": "LP"
    },
    {
      "lgaId": "obowo",
      "lgaName": "Obowo",
      "apc": 438,
      "lp": 17894,
      "pdp": 830,
      "nnpp": 7,
      "total": 19169,
      "winner": "LP"
    },
    {
      "lgaId": "oguta",
      "lgaName": "Oguta",
      "apc": 128,
      "lp": 3031,
      "pdp": 226,
      "nnpp": 4,
      "total": 3389,
      "winner": "LP"
    },
    {
      "lgaId": "ohaji-egbema",
      "lgaName": "Ohaji/Egbema",
      "apc": 1954,
      "lp": 7500,
      "pdp": 889,
      "nnpp": 26,
      "total": 10369,
      "winner": "LP"
    },
    {
      "lgaId": "okigwe",
      "lgaName": "Okigwe",
      "apc": 12414,
      "lp": 20460,
      "pdp": 3843,
      "nnpp": 68,
      "total": 36785,
      "winner": "LP"
    },
    {
      "lgaId": "unuimo",
      "lgaName": "Unuimo",
      "apc": 349,
      "lp": 2905,
      "pdp": 385,
      "nnpp": 3,
      "total": 3642,
      "winner": "LP"
    },
    {
      "lgaId": "orlu",
      "lgaName": "Orlu",
      "apc": 274,
      "lp": 319,
      "pdp": 19,
      "nnpp": 0,
      "total": 612,
      "winner": "LP"
    },
    {
      "lgaId": "orsu",
      "lgaName": "Orsu",
      "apc": 35,
      "lp": 13,
      "pdp": 1,
      "nnpp": 0,
      "total": 49,
      "winner": "APC"
    },
    {
      "lgaId": "oru-east",
      "lgaName": "Oru East",
      "apc": 17639,
      "lp": 2530,
      "pdp": 618,
      "nnpp": 7,
      "total": 20794,
      "winner": "APC"
    },
    {
      "lgaId": "oru-west",
      "lgaName": "Oru West",
      "apc": 18644,
      "lp": 8383,
      "pdp": 1530,
      "nnpp": 1,
      "total": 28558,
      "winner": "APC"
    },
    {
      "lgaId": "owerri-municipal",
      "lgaName": "Owerri Municipal",
      "apc": 434,
      "lp": 26290,
      "pdp": 821,
      "nnpp": 57,
      "total": 27602,
      "winner": "LP"
    },
    {
      "lgaId": "owerri-north",
      "lgaName": "Owerri North",
      "apc": 547,
      "lp": 32475,
      "pdp": 894,
      "nnpp": 122,
      "total": 34038,
      "winner": "LP"
    },
    {
      "lgaId": "owerri-west",
      "lgaName": "Owerri West",
      "apc": 613,
      "lp": 28927,
      "pdp": 1318,
      "nnpp": 129,
      "total": 30987,
      "winner": "LP"
    }
  ],
  "gombe": [
    {
      "lgaId": "akko",
      "lgaName": "Akko",
      "apc": 22749,
      "lp": 2241,
      "pdp": 55202,
      "nnpp": 1284,
      "total": 81476,
      "winner": "PDP"
    },
    {
      "lgaId": "balanga",
      "lgaName": "Balanga",
      "apc": 11715,
      "lp": 3760,
      "pdp": 23326,
      "nnpp": 405,
      "total": 39206,
      "winner": "PDP"
    },
    {
      "lgaId": "billiri",
      "lgaName": "Billiri",
      "apc": 7232,
      "lp": 8898,
      "pdp": 21911,
      "nnpp": 653,
      "total": 38694,
      "winner": "PDP"
    },
    {
      "lgaId": "dukku",
      "lgaName": "Dukku",
      "apc": 12925,
      "lp": 49,
      "pdp": 21579,
      "nnpp": 899,
      "total": 35452,
      "winner": "PDP"
    },
    {
      "lgaId": "funakaye",
      "lgaName": "Funakaye",
      "apc": 12672,
      "lp": 320,
      "pdp": 25384,
      "nnpp": 767,
      "total": 39143,
      "winner": "PDP"
    },
    {
      "lgaId": "gombe",
      "lgaName": "Gombe",
      "apc": 19312,
      "lp": 2339,
      "pdp": 62347,
      "nnpp": 3015,
      "total": 87013,
      "winner": "PDP"
    },
    {
      "lgaId": "kaltungo",
      "lgaName": "Kaltungo",
      "apc": 9464,
      "lp": 5149,
      "pdp": 20968,
      "nnpp": 486,
      "total": 36067,
      "winner": "PDP"
    },
    {
      "lgaId": "kwami",
      "lgaName": "Kwami",
      "apc": 16245,
      "lp": 78,
      "pdp": 24068,
      "nnpp": 820,
      "total": 41211,
      "winner": "PDP"
    },
    {
      "lgaId": "nafada",
      "lgaName": "Nafada",
      "apc": 8242,
      "lp": 7,
      "pdp": 12339,
      "nnpp": 344,
      "total": 20932,
      "winner": "PDP"
    },
    {
      "lgaId": "shomgom",
      "lgaName": "Shomgom",
      "apc": 7525,
      "lp": 2579,
      "pdp": 13520,
      "nnpp": 256,
      "total": 23880,
      "winner": "PDP"
    },
    {
      "lgaId": "yamaltu-deba",
      "lgaName": "Yamaltu/Deba",
      "apc": 18896,
      "lp": 740,
      "pdp": 38479,
      "nnpp": 1591,
      "total": 59706,
      "winner": "PDP"
    }
  ],
  "osun": [
    {
      "lgaId": "atakumosa-east",
      "lgaName": "Atakumosa East",
      "apc": 2768,
      "lp": 100,
      "pdp": 9405,
      "nnpp": 7,
      "total": 12280,
      "winner": "PDP"
    },
    {
      "lgaId": "atakumosa-west",
      "lgaName": "Atakumosa West",
      "apc": 5003,
      "lp": 355,
      "pdp": 7078,
      "nnpp": 4,
      "total": 12440,
      "winner": "PDP"
    },
    {
      "lgaId": "aiyedade",
      "lgaName": "Aiyedade",
      "apc": 13352,
      "lp": 397,
      "pdp": 13251,
      "nnpp": 14,
      "total": 27014,
      "winner": "APC"
    },
    {
      "lgaId": "aiyedire",
      "lgaName": "Aiyedire",
      "apc": 7714,
      "lp": 168,
      "pdp": 8015,
      "nnpp": 2,
      "total": 15899,
      "winner": "PDP"
    },
    {
      "lgaId": "boluwaduro",
      "lgaName": "Boluwaduro",
      "apc": 4566,
      "lp": 175,
      "pdp": 6076,
      "nnpp": 3,
      "total": 10820,
      "winner": "PDP"
    },
    {
      "lgaId": "boripe",
      "lgaName": "Boripe",
      "apc": 15325,
      "lp": 294,
      "pdp": 8921,
      "nnpp": 9,
      "total": 24549,
      "winner": "APC"
    },
    {
      "lgaId": "ede-north",
      "lgaName": "Ede North",
      "apc": 9194,
      "lp": 782,
      "pdp": 18908,
      "nnpp": 50,
      "total": 28934,
      "winner": "PDP"
    },
    {
      "lgaId": "ede-south",
      "lgaName": "Ede South",
      "apc": 5477,
      "lp": 537,
      "pdp": 16142,
      "nnpp": 19,
      "total": 22175,
      "winner": "PDP"
    },
    {
      "lgaId": "egbedore",
      "lgaName": "Egbedore",
      "apc": 8536,
      "lp": 1469,
      "pdp": 10432,
      "nnpp": 37,
      "total": 20474,
      "winner": "PDP"
    },
    {
      "lgaId": "ejigbo",
      "lgaName": "Ejigbo",
      "apc": 15209,
      "lp": 499,
      "pdp": 12801,
      "nnpp": 24,
      "total": 28533,
      "winner": "APC"
    },
    {
      "lgaId": "ife-central",
      "lgaName": "Ife Central",
      "apc": 19362,
      "lp": 3374,
      "pdp": 10777,
      "nnpp": 111,
      "total": 33624,
      "winner": "APC"
    },
    {
      "lgaId": "ifedayo",
      "lgaName": "Ifedayo",
      "apc": 3610,
      "lp": 93,
      "pdp": 5744,
      "nnpp": 3,
      "total": 9450,
      "winner": "PDP"
    },
    {
      "lgaId": "ife-east",
      "lgaName": "Ife East",
      "apc": 20903,
      "lp": 2422,
      "pdp": 12818,
      "nnpp": 88,
      "total": 36231,
      "winner": "APC"
    },
    {
      "lgaId": "ifelodun",
      "lgaName": "Ifelodun",
      "apc": 13459,
      "lp": 403,
      "pdp": 15157,
      "nnpp": 16,
      "total": 29035,
      "winner": "PDP"
    },
    {
      "lgaId": "ife-north",
      "lgaName": "Ife North",
      "apc": 7915,
      "lp": 667,
      "pdp": 9754,
      "nnpp": 12,
      "total": 18348,
      "winner": "PDP"
    },
    {
      "lgaId": "ife-south",
      "lgaName": "Ife South",
      "apc": 9555,
      "lp": 554,
      "pdp": 9765,
      "nnpp": 30,
      "total": 19904,
      "winner": "PDP"
    },
    {
      "lgaId": "ila",
      "lgaName": "Ila",
      "apc": 9841,
      "lp": 230,
      "pdp": 12334,
      "nnpp": 11,
      "total": 22416,
      "winner": "PDP"
    },
    {
      "lgaId": "ilesa-east",
      "lgaName": "Ilesa East",
      "apc": 9580,
      "lp": 1358,
      "pdp": 10089,
      "nnpp": 24,
      "total": 21051,
      "winner": "PDP"
    },
    {
      "lgaId": "ilesa-west",
      "lgaName": "Ilesa West",
      "apc": 9803,
      "lp": 1651,
      "pdp": 10841,
      "nnpp": 26,
      "total": 22321,
      "winner": "PDP"
    },
    {
      "lgaId": "irepodun",
      "lgaName": "Irepodun",
      "apc": 10437,
      "lp": 210,
      "pdp": 14541,
      "nnpp": 13,
      "total": 25201,
      "winner": "PDP"
    },
    {
      "lgaId": "irewole",
      "lgaName": "Irewole",
      "apc": 17991,
      "lp": 333,
      "pdp": 13081,
      "nnpp": 7,
      "total": 31412,
      "winner": "APC"
    },
    {
      "lgaId": "isokan",
      "lgaName": "Isokan",
      "apc": 9661,
      "lp": 172,
      "pdp": 8774,
      "nnpp": 10,
      "total": 18617,
      "winner": "APC"
    },
    {
      "lgaId": "iwo",
      "lgaName": "Iwo",
      "apc": 18887,
      "lp": 616,
      "pdp": 15661,
      "nnpp": 12,
      "total": 35176,
      "winner": "APC"
    },
    {
      "lgaId": "obokun",
      "lgaName": "Obokun",
      "apc": 8196,
      "lp": 316,
      "pdp": 14084,
      "nnpp": 14,
      "total": 22610,
      "winner": "PDP"
    },
    {
      "lgaId": "odo-otin",
      "lgaName": "Odo Otin",
      "apc": 10825,
      "lp": 506,
      "pdp": 14098,
      "nnpp": 13,
      "total": 25442,
      "winner": "PDP"
    },
    {
      "lgaId": "ola-oluwa",
      "lgaName": "Ola Oluwa",
      "apc": 7355,
      "lp": 142,
      "pdp": 8134,
      "nnpp": 39,
      "total": 15670,
      "winner": "PDP"
    },
    {
      "lgaId": "olorunda",
      "lgaName": "Olorunda",
      "apc": 21482,
      "lp": 1649,
      "pdp": 14674,
      "nnpp": 42,
      "total": 37847,
      "winner": "APC"
    },
    {
      "lgaId": "oriade",
      "lgaName": "Oriade",
      "apc": 11745,
      "lp": 677,
      "pdp": 14982,
      "nnpp": 10,
      "total": 27414,
      "winner": "PDP"
    },
    {
      "lgaId": "orolu",
      "lgaName": "Orolu",
      "apc": 7720,
      "lp": 197,
      "pdp": 8944,
      "nnpp": 13,
      "total": 16874,
      "winner": "PDP"
    },
    {
      "lgaId": "osogbo",
      "lgaName": "Osogbo",
      "apc": 28474,
      "lp": 2937,
      "pdp": 19085,
      "nnpp": 50,
      "total": 50546,
      "winner": "APC"
    }
  ],
  "sokoto": [
    {
      "lgaId": "binji",
      "lgaName": "Binji",
      "apc": 9953,
      "lp": 15,
      "pdp": 8646,
      "nnpp": 23,
      "total": 18637,
      "winner": "APC"
    },
    {
      "lgaId": "bodinga",
      "lgaName": "Bodinga",
      "apc": 13384,
      "lp": 10,
      "pdp": 13559,
      "nnpp": 39,
      "total": 26992,
      "winner": "PDP"
    },
    {
      "lgaId": "dange-shuni",
      "lgaName": "Dange Shuni",
      "apc": 11954,
      "lp": 479,
      "pdp": 10306,
      "nnpp": 26,
      "total": 22765,
      "winner": "APC"
    },
    {
      "lgaId": "gada",
      "lgaName": "Gada",
      "apc": 13631,
      "lp": 18,
      "pdp": 15343,
      "nnpp": 236,
      "total": 29228,
      "winner": "PDP"
    },
    {
      "lgaId": "goronyo",
      "lgaName": "Goronyo",
      "apc": 8892,
      "lp": 16,
      "pdp": 11614,
      "nnpp": 21,
      "total": 20543,
      "winner": "PDP"
    },
    {
      "lgaId": "gudu",
      "lgaName": "Gudu",
      "apc": 11194,
      "lp": 23,
      "pdp": 9295,
      "nnpp": 70,
      "total": 20582,
      "winner": "APC"
    },
    {
      "lgaId": "gwadabawa",
      "lgaName": "Gwadabawa",
      "apc": 14694,
      "lp": 33,
      "pdp": 14194,
      "nnpp": 79,
      "total": 29000,
      "winner": "APC"
    },
    {
      "lgaId": "illela",
      "lgaName": "Illela",
      "apc": 15570,
      "lp": 138,
      "pdp": 14920,
      "nnpp": 83,
      "total": 30711,
      "winner": "APC"
    },
    {
      "lgaId": "isa",
      "lgaName": "Isa",
      "apc": 9391,
      "lp": 5,
      "pdp": 12481,
      "nnpp": 20,
      "total": 21897,
      "winner": "PDP"
    },
    {
      "lgaId": "kware",
      "lgaName": "Kware",
      "apc": 10485,
      "lp": 63,
      "pdp": 12242,
      "nnpp": 11,
      "total": 22801,
      "winner": "PDP"
    },
    {
      "lgaId": "kebbe",
      "lgaName": "Kebbe",
      "apc": 9008,
      "lp": 1,
      "pdp": 10430,
      "nnpp": 6,
      "total": 19445,
      "winner": "PDP"
    },
    {
      "lgaId": "rabah",
      "lgaName": "Rabah",
      "apc": 5584,
      "lp": 3,
      "pdp": 5490,
      "nnpp": 48,
      "total": 11125,
      "winner": "APC"
    },
    {
      "lgaId": "sabon-birni",
      "lgaName": "Sabon Birni",
      "apc": 17994,
      "lp": 23,
      "pdp": 15182,
      "nnpp": 28,
      "total": 33227,
      "winner": "APC"
    },
    {
      "lgaId": "shagari",
      "lgaName": "Shagari",
      "apc": 11355,
      "lp": 3,
      "pdp": 13009,
      "nnpp": 47,
      "total": 24414,
      "winner": "PDP"
    },
    {
      "lgaId": "silame",
      "lgaName": "Silame",
      "apc": 7086,
      "lp": 5,
      "pdp": 8240,
      "nnpp": 14,
      "total": 15345,
      "winner": "PDP"
    },
    {
      "lgaId": "sokoto-north",
      "lgaName": "Sokoto North",
      "apc": 17228,
      "lp": 566,
      "pdp": 17024,
      "nnpp": 46,
      "total": 34864,
      "winner": "APC"
    },
    {
      "lgaId": "sokoto-south",
      "lgaName": "Sokoto South",
      "apc": 21385,
      "lp": 4504,
      "pdp": 20036,
      "nnpp": 150,
      "total": 46075,
      "winner": "APC"
    },
    {
      "lgaId": "tambuwal",
      "lgaName": "Tambuwal",
      "apc": 13814,
      "lp": 32,
      "pdp": 21708,
      "nnpp": 137,
      "total": 35691,
      "winner": "PDP"
    },
    {
      "lgaId": "tangaza",
      "lgaName": "Tangaza",
      "apc": 10331,
      "lp": 25,
      "pdp": 6594,
      "nnpp": 28,
      "total": 16978,
      "winner": "APC"
    },
    {
      "lgaId": "tureta",
      "lgaName": "Tureta",
      "apc": 7684,
      "lp": 1,
      "pdp": 8144,
      "nnpp": 9,
      "total": 15838,
      "winner": "PDP"
    },
    {
      "lgaId": "wamako",
      "lgaName": "Wamako",
      "apc": 23189,
      "lp": 577,
      "pdp": 19121,
      "nnpp": 140,
      "total": 43027,
      "winner": "APC"
    },
    {
      "lgaId": "wurno",
      "lgaName": "Wurno",
      "apc": 10988,
      "lp": 19,
      "pdp": 9832,
      "nnpp": 7,
      "total": 20846,
      "winner": "APC"
    },
    {
      "lgaId": "yabo",
      "lgaName": "Yabo",
      "apc": 10650,
      "lp": 9,
      "pdp": 11269,
      "nnpp": 32,
      "total": 21960,
      "winner": "PDP"
    }
  ],
  "borno": [
    {
      "lgaId": "abadam",
      "lgaName": "Abadam",
      "apc": 2146,
      "lp": 0,
      "pdp": 686,
      "nnpp": 14,
      "total": 2846,
      "winner": "APC"
    },
    {
      "lgaId": "askira-uba",
      "lgaName": "Askira/Uba",
      "apc": 8109,
      "lp": 688,
      "pdp": 15544,
      "nnpp": 94,
      "total": 24435,
      "winner": "PDP"
    },
    {
      "lgaId": "bama",
      "lgaName": "Bama",
      "apc": 12579,
      "lp": 19,
      "pdp": 6617,
      "nnpp": 118,
      "total": 19333,
      "winner": "APC"
    },
    {
      "lgaId": "bayo",
      "lgaName": "Bayo",
      "apc": 8837,
      "lp": 26,
      "pdp": 6078,
      "nnpp": 220,
      "total": 15161,
      "winner": "APC"
    },
    {
      "lgaId": "biu",
      "lgaName": "Biu",
      "apc": 13906,
      "lp": 606,
      "pdp": 17872,
      "nnpp": 149,
      "total": 32533,
      "winner": "PDP"
    },
    {
      "lgaId": "chibok",
      "lgaName": "Chibok",
      "apc": 4191,
      "lp": 337,
      "pdp": 8714,
      "nnpp": 27,
      "total": 13269,
      "winner": "PDP"
    },
    {
      "lgaId": "damboa",
      "lgaName": "Damboa",
      "apc": 10119,
      "lp": 16,
      "pdp": 7489,
      "nnpp": 39,
      "total": 17663,
      "winner": "APC"
    },
    {
      "lgaId": "dikwa",
      "lgaName": "Dikwa",
      "apc": 11030,
      "lp": 8,
      "pdp": 2773,
      "nnpp": 254,
      "total": 14065,
      "winner": "APC"
    },
    {
      "lgaId": "gubio",
      "lgaName": "Gubio",
      "apc": 3519,
      "lp": 7,
      "pdp": 2127,
      "nnpp": 30,
      "total": 5683,
      "winner": "APC"
    },
    {
      "lgaId": "guzamala",
      "lgaName": "Guzamala",
      "apc": 2668,
      "lp": 0,
      "pdp": 969,
      "nnpp": 4,
      "total": 3641,
      "winner": "APC"
    },
    {
      "lgaId": "gwoza",
      "lgaName": "Gwoza",
      "apc": 9732,
      "lp": 396,
      "pdp": 9674,
      "nnpp": 95,
      "total": 19897,
      "winner": "APC"
    },
    {
      "lgaId": "hawul",
      "lgaName": "Hawul",
      "apc": 9677,
      "lp": 781,
      "pdp": 16526,
      "nnpp": 46,
      "total": 27030,
      "winner": "PDP"
    },
    {
      "lgaId": "jere",
      "lgaName": "Jere",
      "apc": 21984,
      "lp": 991,
      "pdp": 19060,
      "nnpp": 801,
      "total": 42836,
      "winner": "APC"
    },
    {
      "lgaId": "kaga",
      "lgaName": "Kaga",
      "apc": 5361,
      "lp": 1,
      "pdp": 2608,
      "nnpp": 16,
      "total": 7986,
      "winner": "APC"
    },
    {
      "lgaId": "kala-balge",
      "lgaName": "Kala/Balge",
      "apc": 3320,
      "lp": 4,
      "pdp": 912,
      "nnpp": 18,
      "total": 4254,
      "winner": "APC"
    },
    {
      "lgaId": "konduga",
      "lgaName": "Konduga",
      "apc": 10012,
      "lp": 76,
      "pdp": 4119,
      "nnpp": 111,
      "total": 14318,
      "winner": "APC"
    },
    {
      "lgaId": "kukawa",
      "lgaName": "Kukawa",
      "apc": 3983,
      "lp": 1,
      "pdp": 1856,
      "nnpp": 17,
      "total": 5857,
      "winner": "APC"
    },
    {
      "lgaId": "kwaya-kusar",
      "lgaName": "Kwaya Kusar",
      "apc": 8420,
      "lp": 123,
      "pdp": 7254,
      "nnpp": 328,
      "total": 16125,
      "winner": "APC"
    },
    {
      "lgaId": "mafa",
      "lgaName": "Mafa",
      "apc": 14821,
      "lp": 6,
      "pdp": 1077,
      "nnpp": 38,
      "total": 15942,
      "winner": "APC"
    },
    {
      "lgaId": "magumeri",
      "lgaName": "Magumeri",
      "apc": 5424,
      "lp": 1,
      "pdp": 3399,
      "nnpp": 32,
      "total": 8856,
      "winner": "APC"
    },
    {
      "lgaId": "maiduguri",
      "lgaName": "Maiduguri",
      "apc": 42306,
      "lp": 2840,
      "pdp": 36948,
      "nnpp": 1827,
      "total": 83921,
      "winner": "APC"
    },
    {
      "lgaId": "marte",
      "lgaName": "Marte",
      "apc": 5455,
      "lp": 1,
      "pdp": 1653,
      "nnpp": 12,
      "total": 7121,
      "winner": "APC"
    },
    {
      "lgaId": "mobbar",
      "lgaName": "Mobbar",
      "apc": 3429,
      "lp": 0,
      "pdp": 1649,
      "nnpp": 66,
      "total": 5144,
      "winner": "APC"
    },
    {
      "lgaId": "monguno",
      "lgaName": "Monguno",
      "apc": 7212,
      "lp": 8,
      "pdp": 2801,
      "nnpp": 39,
      "total": 10060,
      "winner": "APC"
    },
    {
      "lgaId": "ngala",
      "lgaName": "Ngala",
      "apc": 8165,
      "lp": 4,
      "pdp": 1950,
      "nnpp": 49,
      "total": 10168,
      "winner": "APC"
    },
    {
      "lgaId": "nganzai",
      "lgaName": "Nganzai",
      "apc": 3468,
      "lp": 1,
      "pdp": 1513,
      "nnpp": 12,
      "total": 4994,
      "winner": "APC"
    },
    {
      "lgaId": "shani",
      "lgaName": "Shani",
      "apc": 12409,
      "lp": 264,
      "pdp": 9053,
      "nnpp": 170,
      "total": 21896,
      "winner": "APC"
    }
  ],
  "taraba": [
    {
      "lgaId": "ardo-kola",
      "lgaName": "Ardo-Kola",
      "apc": 6227,
      "lp": 6045,
      "pdp": 13172,
      "nnpp": 421,
      "total": 25865,
      "winner": "PDP"
    },
    {
      "lgaId": "bali",
      "lgaName": "Bali",
      "apc": 6872,
      "lp": 5667,
      "pdp": 15081,
      "nnpp": 1553,
      "total": 29173,
      "winner": "PDP"
    },
    {
      "lgaId": "donga",
      "lgaName": "Donga",
      "apc": 10953,
      "lp": 13611,
      "pdp": 5582,
      "nnpp": 286,
      "total": 30432,
      "winner": "LP"
    },
    {
      "lgaId": "gashaka",
      "lgaName": "Gashaka",
      "apc": 4239,
      "lp": 2453,
      "pdp": 5272,
      "nnpp": 318,
      "total": 12282,
      "winner": "PDP"
    },
    {
      "lgaId": "gassol",
      "lgaName": "Gassol",
      "apc": 13892,
      "lp": 5288,
      "pdp": 25993,
      "nnpp": 2966,
      "total": 48139,
      "winner": "PDP"
    },
    {
      "lgaId": "ibi",
      "lgaName": "Ibi",
      "apc": 11876,
      "lp": 6507,
      "pdp": 5089,
      "nnpp": 537,
      "total": 24009,
      "winner": "APC"
    },
    {
      "lgaId": "jalingo",
      "lgaName": "Jalingo",
      "apc": 20169,
      "lp": 19902,
      "pdp": 22301,
      "nnpp": 2842,
      "total": 65214,
      "winner": "PDP"
    },
    {
      "lgaId": "karim-lamido",
      "lgaName": "Karim Lamido",
      "apc": 9158,
      "lp": 5705,
      "pdp": 21669,
      "nnpp": 316,
      "total": 36848,
      "winner": "PDP"
    },
    {
      "lgaId": "kumi",
      "lgaName": "Kumi",
      "apc": 3226,
      "lp": 5334,
      "pdp": 6591,
      "nnpp": 73,
      "total": 15224,
      "winner": "PDP"
    },
    {
      "lgaId": "lau",
      "lgaName": "Lau",
      "apc": 4928,
      "lp": 6120,
      "pdp": 13080,
      "nnpp": 267,
      "total": 24395,
      "winner": "PDP"
    },
    {
      "lgaId": "sardauna",
      "lgaName": "Sardauna",
      "apc": 17292,
      "lp": 5308,
      "pdp": 15192,
      "nnpp": 1585,
      "total": 39377,
      "winner": "APC"
    },
    {
      "lgaId": "takum",
      "lgaName": "Takum",
      "apc": 5944,
      "lp": 13406,
      "pdp": 4890,
      "nnpp": 329,
      "total": 24569,
      "winner": "LP"
    },
    {
      "lgaId": "ussa",
      "lgaName": "Ussa",
      "apc": 6724,
      "lp": 18172,
      "pdp": 4303,
      "nnpp": 304,
      "total": 29503,
      "winner": "LP"
    },
    {
      "lgaId": "wukari",
      "lgaName": "Wukari",
      "apc": 6739,
      "lp": 23076,
      "pdp": 6091,
      "nnpp": 534,
      "total": 36440,
      "winner": "LP"
    },
    {
      "lgaId": "yorro",
      "lgaName": "Yorro",
      "apc": 3401,
      "lp": 5027,
      "pdp": 9775,
      "nnpp": 327,
      "total": 18530,
      "winner": "PDP"
    },
    {
      "lgaId": "zing",
      "lgaName": "Zing",
      "apc": 3525,
      "lp": 4694,
      "pdp": 14936,
      "nnpp": 160,
      "total": 23315,
      "winner": "PDP"
    }
  ],
  "adamawa": [
    {
      "lgaId": "demsa",
      "lgaName": "Demsa",
      "apc": 5746,
      "lp": 7962,
      "pdp": 17166,
      "nnpp": 199,
      "total": 31073,
      "winner": "PDP"
    },
    {
      "lgaId": "fufore",
      "lgaName": "Fufore",
      "apc": 12633,
      "lp": 897,
      "pdp": 26059,
      "nnpp": 508,
      "total": 40097,
      "winner": "PDP"
    },
    {
      "lgaId": "ganye",
      "lgaName": "Ganye",
      "apc": 10112,
      "lp": 1069,
      "pdp": 21672,
      "nnpp": 191,
      "total": 33044,
      "winner": "PDP"
    },
    {
      "lgaId": "girei",
      "lgaName": "Girei",
      "apc": 8531,
      "lp": 3749,
      "pdp": 17557,
      "nnpp": 254,
      "total": 30091,
      "winner": "PDP"
    },
    {
      "lgaId": "gombi",
      "lgaName": "Gombi",
      "apc": 8341,
      "lp": 2628,
      "pdp": 21744,
      "nnpp": 541,
      "total": 33254,
      "winner": "PDP"
    },
    {
      "lgaId": "guyuk",
      "lgaName": "Guyuk",
      "apc": 5904,
      "lp": 8165,
      "pdp": 13942,
      "nnpp": 91,
      "total": 28102,
      "winner": "PDP"
    },
    {
      "lgaId": "hong",
      "lgaName": "Hong",
      "apc": 11489,
      "lp": 9532,
      "pdp": 24569,
      "nnpp": 790,
      "total": 46380,
      "winner": "PDP"
    },
    {
      "lgaId": "jada",
      "lgaName": "Jada",
      "apc": 8479,
      "lp": 984,
      "pdp": 28561,
      "nnpp": 186,
      "total": 38210,
      "winner": "PDP"
    },
    {
      "lgaId": "lamurde",
      "lgaName": "Lamurde",
      "apc": 3645,
      "lp": 9744,
      "pdp": 9912,
      "nnpp": 188,
      "total": 23489,
      "winner": "PDP"
    },
    {
      "lgaId": "madagali",
      "lgaName": "Madagali",
      "apc": 4935,
      "lp": 4034,
      "pdp": 18077,
      "nnpp": 201,
      "total": 27247,
      "winner": "PDP"
    },
    {
      "lgaId": "maiha",
      "lgaName": "Maiha",
      "apc": 7335,
      "lp": 440,
      "pdp": 14088,
      "nnpp": 146,
      "total": 22009,
      "winner": "PDP"
    },
    {
      "lgaId": "mayo-belwa",
      "lgaName": "Mayo-Belwa",
      "apc": 13271,
      "lp": 1392,
      "pdp": 23479,
      "nnpp": 280,
      "total": 38422,
      "winner": "PDP"
    },
    {
      "lgaId": "michika",
      "lgaName": "Michika",
      "apc": 7062,
      "lp": 6047,
      "pdp": 28328,
      "nnpp": 177,
      "total": 41614,
      "winner": "PDP"
    },
    {
      "lgaId": "mubi-north",
      "lgaName": "Mubi North",
      "apc": 10078,
      "lp": 12261,
      "pdp": 21528,
      "nnpp": 1253,
      "total": 45120,
      "winner": "PDP"
    },
    {
      "lgaId": "mubi-south",
      "lgaName": "Mubi South",
      "apc": 9399,
      "lp": 2936,
      "pdp": 15463,
      "nnpp": 519,
      "total": 28317,
      "winner": "PDP"
    },
    {
      "lgaId": "numan",
      "lgaName": "Numan",
      "apc": 5115,
      "lp": 10229,
      "pdp": 8984,
      "nnpp": 168,
      "total": 24496,
      "winner": "LP"
    },
    {
      "lgaId": "shelleng",
      "lgaName": "Shelleng",
      "apc": 6213,
      "lp": 1028,
      "pdp": 14765,
      "nnpp": 69,
      "total": 22075,
      "winner": "PDP"
    },
    {
      "lgaId": "song",
      "lgaName": "Song",
      "apc": 10993,
      "lp": 8506,
      "pdp": 20406,
      "nnpp": 1223,
      "total": 41128,
      "winner": "PDP"
    },
    {
      "lgaId": "toungo",
      "lgaName": "Toungo",
      "apc": 4163,
      "lp": 651,
      "pdp": 7401,
      "nnpp": 59,
      "total": 12274,
      "winner": "PDP"
    },
    {
      "lgaId": "yola-north",
      "lgaName": "Yola North",
      "apc": 15885,
      "lp": 9925,
      "pdp": 32136,
      "nnpp": 584,
      "total": 58530,
      "winner": "PDP"
    },
    {
      "lgaId": "yola-south",
      "lgaName": "Yola South",
      "apc": 13552,
      "lp": 3469,
      "pdp": 31774,
      "nnpp": 379,
      "total": 49174,
      "winner": "PDP"
    }
  ],
  "edo": [
    {
      "lgaId": "akoko-edo",
      "lgaName": "Akoko-Edo",
      "apc": 15183,
      "lp": 14002,
      "pdp": 8660,
      "nnpp": 82,
      "total": 37927,
      "winner": "APC"
    },
    {
      "lgaId": "egor",
      "lgaName": "Egor",
      "apc": 3978,
      "lp": 40160,
      "pdp": 1766,
      "nnpp": 298,
      "total": 46202,
      "winner": "LP"
    },
    {
      "lgaId": "esan-central",
      "lgaName": "Esan Central",
      "apc": 4458,
      "lp": 10192,
      "pdp": 3692,
      "nnpp": 91,
      "total": 18433,
      "winner": "LP"
    },
    {
      "lgaId": "esan-north-east",
      "lgaName": "Esan North-East",
      "apc": 2589,
      "lp": 18973,
      "pdp": 2091,
      "nnpp": 146,
      "total": 23799,
      "winner": "LP"
    },
    {
      "lgaId": "esan-south-east",
      "lgaName": "Esan South-East",
      "apc": 4675,
      "lp": 10511,
      "pdp": 3961,
      "nnpp": 61,
      "total": 19208,
      "winner": "LP"
    },
    {
      "lgaId": "esan-west",
      "lgaName": "Esan West",
      "apc": 3417,
      "lp": 18793,
      "pdp": 2630,
      "nnpp": 170,
      "total": 25010,
      "winner": "LP"
    },
    {
      "lgaId": "etsako-central",
      "lgaName": "Etsako Central",
      "apc": 10008,
      "lp": 3707,
      "pdp": 4691,
      "nnpp": 20,
      "total": 18426,
      "winner": "APC"
    },
    {
      "lgaId": "etsako-east",
      "lgaName": "Etsako East",
      "apc": 14799,
      "lp": 5506,
      "pdp": 6978,
      "nnpp": 27,
      "total": 27310,
      "winner": "APC"
    },
    {
      "lgaId": "etsako-west",
      "lgaName": "Etsako West",
      "apc": 25581,
      "lp": 11148,
      "pdp": 9143,
      "nnpp": 111,
      "total": 45983,
      "winner": "APC"
    },
    {
      "lgaId": "igueben",
      "lgaName": "Igueben",
      "apc": 2419,
      "lp": 6449,
      "pdp": 3530,
      "nnpp": 64,
      "total": 12462,
      "winner": "LP"
    },
    {
      "lgaId": "ikpoba-okha",
      "lgaName": "Ikpoba-Okha",
      "apc": 4367,
      "lp": 63639,
      "pdp": 5931,
      "nnpp": 536,
      "total": 74473,
      "winner": "LP"
    },
    {
      "lgaId": "oredo",
      "lgaName": "Oredo",
      "apc": 6701,
      "lp": 60295,
      "pdp": 4202,
      "nnpp": 404,
      "total": 71602,
      "winner": "LP"
    },
    {
      "lgaId": "orhionmwon",
      "lgaName": "Orhionmwon",
      "apc": 6527,
      "lp": 9049,
      "pdp": 4668,
      "nnpp": 121,
      "total": 20365,
      "winner": "LP"
    },
    {
      "lgaId": "ovia-north-east",
      "lgaName": "Ovia North-East",
      "apc": 5877,
      "lp": 24484,
      "pdp": 3919,
      "nnpp": 257,
      "total": 34537,
      "winner": "LP"
    },
    {
      "lgaId": "ovia-south-west",
      "lgaName": "Ovia South-West",
      "apc": 7692,
      "lp": 8402,
      "pdp": 4722,
      "nnpp": 100,
      "total": 20916,
      "winner": "LP"
    },
    {
      "lgaId": "owan-east",
      "lgaName": "Owan East",
      "apc": 13634,
      "lp": 6786,
      "pdp": 9999,
      "nnpp": 31,
      "total": 30450,
      "winner": "APC"
    },
    {
      "lgaId": "owan-west",
      "lgaName": "Owan West",
      "apc": 9322,
      "lp": 6112,
      "pdp": 6026,
      "nnpp": 27,
      "total": 21487,
      "winner": "APC"
    },
    {
      "lgaId": "uhunmwonde",
      "lgaName": "Uhunmwonde",
      "apc": 3244,
      "lp": 12955,
      "pdp": 2976,
      "nnpp": 197,
      "total": 19372,
      "winner": "LP"
    }
  ],
  "jigawa": [
    {
      "lgaId": "auyo",
      "lgaName": "Auyo",
      "apc": 18201,
      "lp": 26,
      "pdp": 13210,
      "nnpp": 2889,
      "total": 34326,
      "winner": "APC"
    },
    {
      "lgaId": "babura",
      "lgaName": "Babura",
      "apc": 17817,
      "lp": 71,
      "pdp": 14069,
      "nnpp": 4600,
      "total": 36557,
      "winner": "APC"
    },
    {
      "lgaId": "birnin-kudu",
      "lgaName": "Birnin Kudu",
      "apc": 22592,
      "lp": 98,
      "pdp": 34792,
      "nnpp": 1912,
      "total": 59394,
      "winner": "PDP"
    },
    {
      "lgaId": "biriniwa",
      "lgaName": "Biriniwa",
      "apc": 15150,
      "lp": 29,
      "pdp": 12977,
      "nnpp": 2196,
      "total": 30352,
      "winner": "APC"
    },
    {
      "lgaId": "buji",
      "lgaName": "Buji",
      "apc": 11867,
      "lp": 9,
      "pdp": 10868,
      "nnpp": 343,
      "total": 23087,
      "winner": "APC"
    },
    {
      "lgaId": "dutse",
      "lgaName": "Dutse",
      "apc": 16739,
      "lp": 553,
      "pdp": 29951,
      "nnpp": 2717,
      "total": 49960,
      "winner": "PDP"
    },
    {
      "lgaId": "garki",
      "lgaName": "Garki",
      "apc": 18332,
      "lp": 39,
      "pdp": 9614,
      "nnpp": 6870,
      "total": 34855,
      "winner": "APC"
    },
    {
      "lgaId": "gagarawa",
      "lgaName": "Gagarawa",
      "apc": 8091,
      "lp": 29,
      "pdp": 8870,
      "nnpp": 3770,
      "total": 20760,
      "winner": "PDP"
    },
    {
      "lgaId": "gumel",
      "lgaName": "Gumel",
      "apc": 6696,
      "lp": 78,
      "pdp": 9816,
      "nnpp": 3935,
      "total": 20525,
      "winner": "PDP"
    },
    {
      "lgaId": "guri",
      "lgaName": "Guri",
      "apc": 13594,
      "lp": 25,
      "pdp": 6402,
      "nnpp": 5913,
      "total": 25934,
      "winner": "APC"
    },
    {
      "lgaId": "gwaram",
      "lgaName": "Gwaram",
      "apc": 19026,
      "lp": 127,
      "pdp": 32907,
      "nnpp": 12010,
      "total": 64070,
      "winner": "PDP"
    },
    {
      "lgaId": "gwiwa",
      "lgaName": "Gwiwa",
      "apc": 16309,
      "lp": 2,
      "pdp": 7643,
      "nnpp": 165,
      "total": 24119,
      "winner": "APC"
    },
    {
      "lgaId": "hadejia",
      "lgaName": "Hadejia",
      "apc": 12328,
      "lp": 126,
      "pdp": 10035,
      "nnpp": 6480,
      "total": 28969,
      "winner": "APC"
    },
    {
      "lgaId": "jahun",
      "lgaName": "Jahun",
      "apc": 24338,
      "lp": 32,
      "pdp": 21683,
      "nnpp": 2133,
      "total": 48186,
      "winner": "APC"
    },
    {
      "lgaId": "kafin-hausa",
      "lgaName": "Kafin Hausa",
      "apc": 22108,
      "lp": 32,
      "pdp": 20088,
      "nnpp": 2108,
      "total": 44336,
      "winner": "APC"
    },
    {
      "lgaId": "kaugama",
      "lgaName": "Kaugama",
      "apc": 17506,
      "lp": 81,
      "pdp": 14514,
      "nnpp": 4174,
      "total": 36275,
      "winner": "APC"
    },
    {
      "lgaId": "kazaure",
      "lgaName": "Kazaure",
      "apc": 9430,
      "lp": 119,
      "pdp": 9827,
      "nnpp": 4040,
      "total": 23416,
      "winner": "PDP"
    },
    {
      "lgaId": "kiri-kasama",
      "lgaName": "Kiri Kasama",
      "apc": 15455,
      "lp": 17,
      "pdp": 12691,
      "nnpp": 2494,
      "total": 30657,
      "winner": "APC"
    },
    {
      "lgaId": "kiyawa",
      "lgaName": "Kiyawa",
      "apc": 18701,
      "lp": 35,
      "pdp": 17435,
      "nnpp": 756,
      "total": 36927,
      "winner": "APC"
    },
    {
      "lgaId": "maigatari",
      "lgaName": "Maigatari",
      "apc": 14640,
      "lp": 34,
      "pdp": 13973,
      "nnpp": 986,
      "total": 29633,
      "winner": "APC"
    },
    {
      "lgaId": "malam-madori",
      "lgaName": "Malam Madori",
      "apc": 14586,
      "lp": 49,
      "pdp": 13684,
      "nnpp": 2479,
      "total": 30798,
      "winner": "APC"
    },
    {
      "lgaId": "miga",
      "lgaName": "Miga",
      "apc": 15293,
      "lp": 19,
      "pdp": 12038,
      "nnpp": 950,
      "total": 28300,
      "winner": "APC"
    },
    {
      "lgaId": "ringim",
      "lgaName": "Ringim",
      "apc": 18624,
      "lp": 57,
      "pdp": 11213,
      "nnpp": 15630,
      "total": 45524,
      "winner": "APC"
    },
    {
      "lgaId": "roni",
      "lgaName": "Roni",
      "apc": 13073,
      "lp": 36,
      "pdp": 8001,
      "nnpp": 622,
      "total": 21732,
      "winner": "APC"
    },
    {
      "lgaId": "sule-tankarkar",
      "lgaName": "Sule-Tankarkar",
      "apc": 14971,
      "lp": 24,
      "pdp": 12919,
      "nnpp": 1500,
      "total": 29414,
      "winner": "APC"
    },
    {
      "lgaId": "taura",
      "lgaName": "Taura",
      "apc": 18003,
      "lp": 134,
      "pdp": 11339,
      "nnpp": 6082,
      "total": 35558,
      "winner": "APC"
    },
    {
      "lgaId": "yankwashi",
      "lgaName": "Yankwashi",
      "apc": 7920,
      "lp": 8,
      "pdp": 6028,
      "nnpp": 480,
      "total": 14436,
      "winner": "APC"
    }
  ],
  "yobe": [
    {
      "lgaId": "bade",
      "lgaName": "Bade",
      "apc": 8081,
      "lp": 215,
      "pdp": 15789,
      "nnpp": 2983,
      "total": 27068,
      "winner": "PDP"
    },
    {
      "lgaId": "bursari",
      "lgaName": "Bursari",
      "apc": 6737,
      "lp": 19,
      "pdp": 7217,
      "nnpp": 245,
      "total": 14218,
      "winner": "PDP"
    },
    {
      "lgaId": "damaturu",
      "lgaName": "Damaturu",
      "apc": 7306,
      "lp": 769,
      "pdp": 16649,
      "nnpp": 553,
      "total": 25277,
      "winner": "PDP"
    },
    {
      "lgaId": "fika",
      "lgaName": "Fika",
      "apc": 12419,
      "lp": 227,
      "pdp": 19975,
      "nnpp": 433,
      "total": 33054,
      "winner": "PDP"
    },
    {
      "lgaId": "fune",
      "lgaName": "Fune",
      "apc": 12696,
      "lp": 49,
      "pdp": 18308,
      "nnpp": 570,
      "total": 31623,
      "winner": "PDP"
    },
    {
      "lgaId": "geidam",
      "lgaName": "Geidam",
      "apc": 5918,
      "lp": 7,
      "pdp": 7223,
      "nnpp": 805,
      "total": 13953,
      "winner": "PDP"
    },
    {
      "lgaId": "gujba",
      "lgaName": "Gujba",
      "apc": 6643,
      "lp": 25,
      "pdp": 8204,
      "nnpp": 217,
      "total": 15089,
      "winner": "PDP"
    },
    {
      "lgaId": "gulani",
      "lgaName": "Gulani",
      "apc": 7995,
      "lp": 6,
      "pdp": 8646,
      "nnpp": 767,
      "total": 17414,
      "winner": "PDP"
    },
    {
      "lgaId": "jakusko",
      "lgaName": "Jakusko",
      "apc": 10554,
      "lp": 48,
      "pdp": 11836,
      "nnpp": 2254,
      "total": 24692,
      "winner": "PDP"
    },
    {
      "lgaId": "karasuwa",
      "lgaName": "Karasuwa",
      "apc": 9042,
      "lp": 33,
      "pdp": 6048,
      "nnpp": 1775,
      "total": 16898,
      "winner": "APC"
    },
    {
      "lgaId": "machina",
      "lgaName": "Machina",
      "apc": 8067,
      "lp": 31,
      "pdp": 3501,
      "nnpp": 797,
      "total": 12396,
      "winner": "APC"
    },
    {
      "lgaId": "nangere",
      "lgaName": "Nangere",
      "apc": 8060,
      "lp": 147,
      "pdp": 15813,
      "nnpp": 464,
      "total": 24484,
      "winner": "PDP"
    },
    {
      "lgaId": "nguru",
      "lgaName": "Nguru",
      "apc": 9588,
      "lp": 313,
      "pdp": 12001,
      "nnpp": 3384,
      "total": 25286,
      "winner": "PDP"
    },
    {
      "lgaId": "potiskum",
      "lgaName": "Potiskum",
      "apc": 13521,
      "lp": 473,
      "pdp": 34787,
      "nnpp": 1637,
      "total": 50418,
      "winner": "PDP"
    },
    {
      "lgaId": "tarmua",
      "lgaName": "Tarmua",
      "apc": 4416,
      "lp": 20,
      "pdp": 4178,
      "nnpp": 118,
      "total": 8732,
      "winner": "APC"
    },
    {
      "lgaId": "yunusari",
      "lgaName": "Yunusari",
      "apc": 9638,
      "lp": 11,
      "pdp": 3692,
      "nnpp": 836,
      "total": 14177,
      "winner": "APC"
    },
    {
      "lgaId": "yusufari",
      "lgaName": "Yusufari",
      "apc": 10778,
      "lp": 13,
      "pdp": 4700,
      "nnpp": 432,
      "total": 15923,
      "winner": "APC"
    }
  ],
  "bauchi": [
    {
      "lgaId": "alkaleri",
      "lgaName": "Alkaleri",
      "apc": 12238,
      "lp": 147,
      "pdp": 25098,
      "nnpp": 1232,
      "total": 38715,
      "winner": "PDP"
    },
    {
      "lgaId": "bauchi",
      "lgaName": "Bauchi",
      "apc": 44924,
      "lp": 7041,
      "pdp": 70874,
      "nnpp": 3927,
      "total": 126766,
      "winner": "PDP"
    },
    {
      "lgaId": "bogoro",
      "lgaName": "Bogoro",
      "apc": 4850,
      "lp": 6866,
      "pdp": 15156,
      "nnpp": 798,
      "total": 27670,
      "winner": "PDP"
    },
    {
      "lgaId": "damban",
      "lgaName": "Damban",
      "apc": 7588,
      "lp": 42,
      "pdp": 12203,
      "nnpp": 2586,
      "total": 22419,
      "winner": "PDP"
    },
    {
      "lgaId": "darazo",
      "lgaName": "Darazo",
      "apc": 16070,
      "lp": 41,
      "pdp": 17459,
      "nnpp": 1895,
      "total": 35465,
      "winner": "PDP"
    },
    {
      "lgaId": "dass",
      "lgaName": "Dass",
      "apc": 10939,
      "lp": 705,
      "pdp": 13242,
      "nnpp": 397,
      "total": 25283,
      "winner": "PDP"
    },
    {
      "lgaId": "gamawa",
      "lgaName": "Gamawa",
      "apc": 13955,
      "lp": 53,
      "pdp": 15469,
      "nnpp": 5127,
      "total": 34604,
      "winner": "PDP"
    },
    {
      "lgaId": "ganjuwa",
      "lgaName": "Ganjuwa",
      "apc": 13021,
      "lp": 222,
      "pdp": 17380,
      "nnpp": 4287,
      "total": 34910,
      "winner": "PDP"
    },
    {
      "lgaId": "giade",
      "lgaName": "Giade",
      "apc": 10382,
      "lp": 17,
      "pdp": 11977,
      "nnpp": 4002,
      "total": 26378,
      "winner": "PDP"
    },
    {
      "lgaId": "itas-gadau",
      "lgaName": "Itas/Gadau",
      "apc": 11978,
      "lp": 36,
      "pdp": 11757,
      "nnpp": 6315,
      "total": 30086,
      "winner": "APC"
    },
    {
      "lgaId": "jama-are",
      "lgaName": "Jama'are",
      "apc": 8140,
      "lp": 22,
      "pdp": 12535,
      "nnpp": 3638,
      "total": 24335,
      "winner": "PDP"
    },
    {
      "lgaId": "katagum",
      "lgaName": "Katagum",
      "apc": 20030,
      "lp": 493,
      "pdp": 22987,
      "nnpp": 9672,
      "total": 53182,
      "winner": "PDP"
    },
    {
      "lgaId": "kirfi",
      "lgaName": "Kirfi",
      "apc": 9599,
      "lp": 33,
      "pdp": 13431,
      "nnpp": 1544,
      "total": 24607,
      "winner": "PDP"
    },
    {
      "lgaId": "misau",
      "lgaName": "Misau",
      "apc": 14199,
      "lp": 48,
      "pdp": 18354,
      "nnpp": 4115,
      "total": 36716,
      "winner": "PDP"
    },
    {
      "lgaId": "ningi",
      "lgaName": "Ningi",
      "apc": 20587,
      "lp": 56,
      "pdp": 21619,
      "nnpp": 4023,
      "total": 46285,
      "winner": "PDP"
    },
    {
      "lgaId": "shira",
      "lgaName": "Shira",
      "apc": 14369,
      "lp": 54,
      "pdp": 20683,
      "nnpp": 8555,
      "total": 43661,
      "winner": "PDP"
    },
    {
      "lgaId": "tafawa-balewa",
      "lgaName": "Tafawa Balewa",
      "apc": 17897,
      "lp": 8776,
      "pdp": 30585,
      "nnpp": 1281,
      "total": 58539,
      "winner": "PDP"
    },
    {
      "lgaId": "toro",
      "lgaName": "Toro",
      "apc": 40150,
      "lp": 2517,
      "pdp": 37169,
      "nnpp": 5375,
      "total": 85211,
      "winner": "APC"
    },
    {
      "lgaId": "warji",
      "lgaName": "Warji",
      "apc": 11862,
      "lp": 185,
      "pdp": 17732,
      "nnpp": 424,
      "total": 30203,
      "winner": "PDP"
    },
    {
      "lgaId": "zaki",
      "lgaName": "Zaki",
      "apc": 13916,
      "lp": 19,
      "pdp": 20897,
      "nnpp": 2910,
      "total": 37742,
      "winner": "PDP"
    }
  ],
  "ogun": [
    {
      "lgaId": "abeokuta-north",
      "lgaName": "Abeokuta North",
      "apc": 20094,
      "lp": 4092,
      "pdp": 5057,
      "nnpp": 104,
      "total": 29347,
      "winner": "APC"
    },
    {
      "lgaId": "abeokuta-south",
      "lgaName": "Abeokuta South",
      "apc": 28111,
      "lp": 8930,
      "pdp": 7787,
      "nnpp": 137,
      "total": 44965,
      "winner": "APC"
    },
    {
      "lgaId": "ado-odo-ota",
      "lgaName": "Ado-Odo/Ota",
      "apc": 46558,
      "lp": 17888,
      "pdp": 10838,
      "nnpp": 276,
      "total": 75560,
      "winner": "APC"
    },
    {
      "lgaId": "yewa-north",
      "lgaName": "Yewa North",
      "apc": 19053,
      "lp": 1535,
      "pdp": 9830,
      "nnpp": 478,
      "total": 30896,
      "winner": "APC"
    },
    {
      "lgaId": "yewa-south",
      "lgaName": "Yewa South",
      "apc": 18471,
      "lp": 3126,
      "pdp": 5012,
      "nnpp": 117,
      "total": 26726,
      "winner": "APC"
    },
    {
      "lgaId": "ewekoro",
      "lgaName": "Ewekoro",
      "apc": 9778,
      "lp": 2287,
      "pdp": 3646,
      "nnpp": 79,
      "total": 15790,
      "winner": "APC"
    },
    {
      "lgaId": "ifo",
      "lgaName": "Ifo",
      "apc": 26507,
      "lp": 9751,
      "pdp": 5760,
      "nnpp": 161,
      "total": 42179,
      "winner": "APC"
    },
    {
      "lgaId": "ijebu-east",
      "lgaName": "Ijebu East",
      "apc": 10970,
      "lp": 2163,
      "pdp": 4495,
      "nnpp": 40,
      "total": 17668,
      "winner": "APC"
    },
    {
      "lgaId": "ijebu-north",
      "lgaName": "Ijebu North",
      "apc": 21844,
      "lp": 2372,
      "pdp": 7233,
      "nnpp": 50,
      "total": 31499,
      "winner": "APC"
    },
    {
      "lgaId": "ijebu-north-east",
      "lgaName": "Ijebu North East",
      "apc": 7430,
      "lp": 1779,
      "pdp": 2859,
      "nnpp": 19,
      "total": 12087,
      "winner": "APC"
    },
    {
      "lgaId": "ijebu-ode",
      "lgaName": "Ijebu Ode",
      "apc": 16072,
      "lp": 3162,
      "pdp": 4057,
      "nnpp": 56,
      "total": 23347,
      "winner": "APC"
    },
    {
      "lgaId": "ikenne",
      "lgaName": "Ikenne",
      "apc": 9431,
      "lp": 2698,
      "pdp": 6616,
      "nnpp": 39,
      "total": 18784,
      "winner": "APC"
    },
    {
      "lgaId": "imeko-afon",
      "lgaName": "Imeko Afon",
      "apc": 12146,
      "lp": 568,
      "pdp": 4560,
      "nnpp": 32,
      "total": 17306,
      "winner": "APC"
    },
    {
      "lgaId": "ipokia",
      "lgaName": "Ipokia",
      "apc": 16929,
      "lp": 1860,
      "pdp": 16082,
      "nnpp": 186,
      "total": 35057,
      "winner": "APC"
    },
    {
      "lgaId": "obafemi-owode",
      "lgaName": "Obafemi Owode",
      "apc": 17387,
      "lp": 9964,
      "pdp": 3115,
      "nnpp": 114,
      "total": 30580,
      "winner": "APC"
    },
    {
      "lgaId": "odeda",
      "lgaName": "Odeda",
      "apc": 12945,
      "lp": 3064,
      "pdp": 3855,
      "nnpp": 73,
      "total": 19937,
      "winner": "APC"
    },
    {
      "lgaId": "odogbolu",
      "lgaName": "Odogbolu",
      "apc": 12374,
      "lp": 2688,
      "pdp": 6176,
      "nnpp": 36,
      "total": 21274,
      "winner": "APC"
    },
    {
      "lgaId": "ogun-waterside",
      "lgaName": "Ogun Waterside",
      "apc": 8522,
      "lp": 481,
      "pdp": 5090,
      "nnpp": 29,
      "total": 14122,
      "winner": "APC"
    },
    {
      "lgaId": "remo-north",
      "lgaName": "Remo North",
      "apc": 5814,
      "lp": 984,
      "pdp": 3627,
      "nnpp": 22,
      "total": 10447,
      "winner": "APC"
    },
    {
      "lgaId": "shagamu",
      "lgaName": "Shagamu",
      "apc": 21118,
      "lp": 6437,
      "pdp": 8136,
      "nnpp": 152,
      "total": 35843,
      "winner": "APC"
    }
  ],
  "rivers": [
    {
      "lgaId": "abua-odual",
      "lgaName": "Abua/Odual",
      "apc": 5653,
      "lp": 1663,
      "pdp": 4685,
      "nnpp": 9,
      "total": 12010,
      "winner": "APC"
    },
    {
      "lgaId": "ahoada-east",
      "lgaName": "Ahoada East",
      "apc": 8066,
      "lp": 5379,
      "pdp": 2358,
      "nnpp": 58,
      "total": 15861,
      "winner": "APC"
    },
    {
      "lgaId": "ahoada-west",
      "lgaName": "Ahoada West",
      "apc": 3443,
      "lp": 4634,
      "pdp": 2582,
      "nnpp": 11,
      "total": 10670,
      "winner": "LP"
    },
    {
      "lgaId": "akuku-toru",
      "lgaName": "Akuku-Toru",
      "apc": 3182,
      "lp": 1700,
      "pdp": 3131,
      "nnpp": 14,
      "total": 8027,
      "winner": "APC"
    },
    {
      "lgaId": "andoni",
      "lgaName": "Andoni",
      "apc": 3306,
      "lp": 2324,
      "pdp": 4614,
      "nnpp": 18,
      "total": 10262,
      "winner": "PDP"
    },
    {
      "lgaId": "asari-toru",
      "lgaName": "Asari-Toru",
      "apc": 14483,
      "lp": 2094,
      "pdp": 4476,
      "nnpp": 9,
      "total": 21062,
      "winner": "APC"
    },
    {
      "lgaId": "bonny",
      "lgaName": "Bonny",
      "apc": 2708,
      "lp": 10488,
      "pdp": 2406,
      "nnpp": 87,
      "total": 15689,
      "winner": "LP"
    },
    {
      "lgaId": "degema",
      "lgaName": "Degema",
      "apc": 2375,
      "lp": 2212,
      "pdp": 3108,
      "nnpp": 44,
      "total": 7739,
      "winner": "PDP"
    },
    {
      "lgaId": "eleme",
      "lgaName": "Eleme",
      "apc": 8368,
      "lp": 7529,
      "pdp": 2391,
      "nnpp": 82,
      "total": 18370,
      "winner": "APC"
    },
    {
      "lgaId": "emohua",
      "lgaName": "Emohua",
      "apc": 9145,
      "lp": 4239,
      "pdp": 5242,
      "nnpp": 18,
      "total": 18644,
      "winner": "APC"
    },
    {
      "lgaId": "etche",
      "lgaName": "Etche",
      "apc": 8366,
      "lp": 11232,
      "pdp": 5919,
      "nnpp": 78,
      "total": 25595,
      "winner": "LP"
    },
    {
      "lgaId": "gokana",
      "lgaName": "Gokana",
      "apc": 10122,
      "lp": 2215,
      "pdp": 8484,
      "nnpp": 31,
      "total": 20852,
      "winner": "APC"
    },
    {
      "lgaId": "ikwerre",
      "lgaName": "Ikwerre",
      "apc": 9609,
      "lp": 8752,
      "pdp": 4869,
      "nnpp": 58,
      "total": 23288,
      "winner": "APC"
    },
    {
      "lgaId": "khana",
      "lgaName": "Khana",
      "apc": 7649,
      "lp": 1704,
      "pdp": 5483,
      "nnpp": 47,
      "total": 14883,
      "winner": "APC"
    },
    {
      "lgaId": "obio-akpor",
      "lgaName": "Obio/Akpor",
      "apc": 80239,
      "lp": 3829,
      "pdp": 368,
      "nnpp": 161,
      "total": 84597,
      "winner": "APC"
    },
    {
      "lgaId": "ogba-egbema-ndoni",
      "lgaName": "Ogba/Egbema/Ndoni",
      "apc": 6057,
      "lp": 21883,
      "pdp": 4099,
      "nnpp": 109,
      "total": 32148,
      "winner": "LP"
    },
    {
      "lgaId": "ogu-bolo",
      "lgaName": "Ogu/Bolo",
      "apc": 2428,
      "lp": 1209,
      "pdp": 3187,
      "nnpp": 7,
      "total": 6831,
      "winner": "PDP"
    },
    {
      "lgaId": "okrika",
      "lgaName": "Okrika",
      "apc": 2729,
      "lp": 4018,
      "pdp": 8476,
      "nnpp": 34,
      "total": 15257,
      "winner": "PDP"
    },
    {
      "lgaId": "omuma",
      "lgaName": "Omuma",
      "apc": 6328,
      "lp": 2154,
      "pdp": 1293,
      "nnpp": 15,
      "total": 9790,
      "winner": "APC"
    },
    {
      "lgaId": "opobo-nkoro",
      "lgaName": "Opobo/Nkoro",
      "apc": 5701,
      "lp": 2093,
      "pdp": 1542,
      "nnpp": 6,
      "total": 9342,
      "winner": "APC"
    },
    {
      "lgaId": "oyigbo",
      "lgaName": "Oyigbo",
      "apc": 16630,
      "lp": 10784,
      "pdp": 1046,
      "nnpp": 107,
      "total": 28567,
      "winner": "APC"
    },
    {
      "lgaId": "port-harcourt",
      "lgaName": "Port Harcourt",
      "apc": 5562,
      "lp": 62451,
      "pdp": 7203,
      "nnpp": 301,
      "total": 75517,
      "winner": "LP"
    },
    {
      "lgaId": "tai",
      "lgaName": "Tai",
      "apc": 9442,
      "lp": 485,
      "pdp": 1506,
      "nnpp": 18,
      "total": 11451,
      "winner": "APC"
    }
  ],
  "kano": [
    {
      "lgaId": "ajingi",
      "lgaName": "Ajingi",
      "apc": 7066,
      "lp": 182,
      "pdp": 1540,
      "nnpp": 16798,
      "total": 25586,
      "winner": "NNPP"
    },
    {
      "lgaId": "albasu",
      "lgaName": "Albasu",
      "apc": 9618,
      "lp": 34,
      "pdp": 2350,
      "nnpp": 19161,
      "total": 31163,
      "winner": "NNPP"
    },
    {
      "lgaId": "bagwai",
      "lgaName": "Bagwai",
      "apc": 14949,
      "lp": 102,
      "pdp": 1935,
      "nnpp": 14243,
      "total": 31229,
      "winner": "APC"
    },
    {
      "lgaId": "bebeji",
      "lgaName": "Bebeji",
      "apc": 12616,
      "lp": 239,
      "pdp": 1475,
      "nnpp": 22242,
      "total": 36572,
      "winner": "NNPP"
    },
    {
      "lgaId": "bichi",
      "lgaName": "Bichi",
      "apc": 31673,
      "lp": 178,
      "pdp": 1371,
      "nnpp": 20862,
      "total": 54084,
      "winner": "APC"
    },
    {
      "lgaId": "bunkure",
      "lgaName": "Bunkure",
      "apc": 11161,
      "lp": 76,
      "pdp": 1528,
      "nnpp": 16759,
      "total": 29524,
      "winner": "NNPP"
    },
    {
      "lgaId": "dala",
      "lgaName": "Dala",
      "apc": 8262,
      "lp": 234,
      "pdp": 8543,
      "nnpp": 55967,
      "total": 73006,
      "winner": "NNPP"
    },
    {
      "lgaId": "dambatta",
      "lgaName": "Dambatta",
      "apc": 13179,
      "lp": 66,
      "pdp": 2099,
      "nnpp": 15179,
      "total": 30523,
      "winner": "NNPP"
    },
    {
      "lgaId": "dawakin-kudu",
      "lgaName": "Dawakin Kudu",
      "apc": 12258,
      "lp": 167,
      "pdp": 3768,
      "nnpp": 32925,
      "total": 49118,
      "winner": "NNPP"
    },
    {
      "lgaId": "dawakin-tofa",
      "lgaName": "Dawakin Tofa",
      "apc": 16773,
      "lp": 202,
      "pdp": 2477,
      "nnpp": 25072,
      "total": 44524,
      "winner": "NNPP"
    },
    {
      "lgaId": "doguwa",
      "lgaName": "Doguwa",
      "apc": 15424,
      "lp": 642,
      "pdp": 1408,
      "nnpp": 14543,
      "total": 32017,
      "winner": "APC"
    },
    {
      "lgaId": "fagge",
      "lgaName": "Fagge",
      "apc": 4060,
      "lp": 14896,
      "pdp": 5416,
      "nnpp": 23162,
      "total": 47534,
      "winner": "NNPP"
    },
    {
      "lgaId": "gabasawa",
      "lgaName": "Gabasawa",
      "apc": 11992,
      "lp": 48,
      "pdp": 2191,
      "nnpp": 13736,
      "total": 27967,
      "winner": "NNPP"
    },
    {
      "lgaId": "garko",
      "lgaName": "Garko",
      "apc": 8485,
      "lp": 313,
      "pdp": 2067,
      "nnpp": 15889,
      "total": 26754,
      "winner": "NNPP"
    },
    {
      "lgaId": "garun-mallam",
      "lgaName": "Garun Mallam",
      "apc": 8642,
      "lp": 160,
      "pdp": 4409,
      "nnpp": 12249,
      "total": 25460,
      "winner": "NNPP"
    },
    {
      "lgaId": "gaya",
      "lgaName": "Gaya",
      "apc": 8708,
      "lp": 158,
      "pdp": 1386,
      "nnpp": 18999,
      "total": 29251,
      "winner": "NNPP"
    },
    {
      "lgaId": "gezawa",
      "lgaName": "Gezawa",
      "apc": 9915,
      "lp": 188,
      "pdp": 2980,
      "nnpp": 21909,
      "total": 34992,
      "winner": "NNPP"
    },
    {
      "lgaId": "gwale",
      "lgaName": "Gwale",
      "apc": 6950,
      "lp": 270,
      "pdp": 7457,
      "nnpp": 42932,
      "total": 57609,
      "winner": "NNPP"
    },
    {
      "lgaId": "gwarzo",
      "lgaName": "Gwarzo",
      "apc": 20627,
      "lp": 70,
      "pdp": 2125,
      "nnpp": 19950,
      "total": 42772,
      "winner": "APC"
    },
    {
      "lgaId": "kabo",
      "lgaName": "Kabo",
      "apc": 18767,
      "lp": 79,
      "pdp": 2463,
      "nnpp": 15923,
      "total": 37232,
      "winner": "APC"
    },
    {
      "lgaId": "kano-municipal",
      "lgaName": "Kano Municipal",
      "apc": 9948,
      "lp": 267,
      "pdp": 10298,
      "nnpp": 51954,
      "total": 72467,
      "winner": "NNPP"
    },
    {
      "lgaId": "karaye",
      "lgaName": "Karaye",
      "apc": 10874,
      "lp": 134,
      "pdp": 2132,
      "nnpp": 16295,
      "total": 29435,
      "winner": "NNPP"
    },
    {
      "lgaId": "kibiya",
      "lgaName": "Kibiya",
      "apc": 10283,
      "lp": 70,
      "pdp": 753,
      "nnpp": 16331,
      "total": 27437,
      "winner": "NNPP"
    },
    {
      "lgaId": "kiru",
      "lgaName": "Kiru",
      "apc": 19155,
      "lp": 112,
      "pdp": 2467,
      "nnpp": 27199,
      "total": 48933,
      "winner": "NNPP"
    },
    {
      "lgaId": "kumbotso",
      "lgaName": "Kumbotso",
      "apc": 6721,
      "lp": 815,
      "pdp": 5996,
      "nnpp": 44474,
      "total": 58006,
      "winner": "NNPP"
    },
    {
      "lgaId": "kunchi",
      "lgaName": "Kunchi",
      "apc": 10359,
      "lp": 50,
      "pdp": 703,
      "nnpp": 8090,
      "total": 19202,
      "winner": "APC"
    },
    {
      "lgaId": "kura",
      "lgaName": "Kura",
      "apc": 10929,
      "lp": 126,
      "pdp": 3987,
      "nnpp": 20406,
      "total": 35448,
      "winner": "NNPP"
    },
    {
      "lgaId": "madobi",
      "lgaName": "Madobi",
      "apc": 12038,
      "lp": 39,
      "pdp": 2393,
      "nnpp": 23130,
      "total": 37600,
      "winner": "NNPP"
    },
    {
      "lgaId": "makoda",
      "lgaName": "Makoda",
      "apc": 12590,
      "lp": 40,
      "pdp": 1099,
      "nnpp": 12247,
      "total": 25976,
      "winner": "APC"
    },
    {
      "lgaId": "minjibir",
      "lgaName": "Minjibir",
      "apc": 6777,
      "lp": 123,
      "pdp": 1833,
      "nnpp": 15505,
      "total": 24238,
      "winner": "NNPP"
    },
    {
      "lgaId": "nasarawa",
      "lgaName": "Nasarawa",
      "apc": 10218,
      "lp": 3863,
      "pdp": 10599,
      "nnpp": 61053,
      "total": 85733,
      "winner": "NNPP"
    },
    {
      "lgaId": "rano",
      "lgaName": "Rano",
      "apc": 11268,
      "lp": 115,
      "pdp": 1898,
      "nnpp": 16286,
      "total": 29567,
      "winner": "NNPP"
    },
    {
      "lgaId": "rimin-gado",
      "lgaName": "Rimin Gado",
      "apc": 10861,
      "lp": 76,
      "pdp": 907,
      "nnpp": 14634,
      "total": 26478,
      "winner": "NNPP"
    },
    {
      "lgaId": "rogo",
      "lgaName": "Rogo",
      "apc": 10403,
      "lp": 343,
      "pdp": 1616,
      "nnpp": 19584,
      "total": 31946,
      "winner": "NNPP"
    },
    {
      "lgaId": "shanono",
      "lgaName": "Shanono",
      "apc": 11557,
      "lp": 44,
      "pdp": 1703,
      "nnpp": 9672,
      "total": 22976,
      "winner": "APC"
    },
    {
      "lgaId": "sumaila",
      "lgaName": "Sumaila",
      "apc": 11341,
      "lp": 1106,
      "pdp": 1553,
      "nnpp": 24307,
      "total": 38307,
      "winner": "NNPP"
    },
    {
      "lgaId": "takai",
      "lgaName": "Takai",
      "apc": 13770,
      "lp": 69,
      "pdp": 3124,
      "nnpp": 19849,
      "total": 36812,
      "winner": "NNPP"
    },
    {
      "lgaId": "tarauni",
      "lgaName": "Tarauni",
      "apc": 6133,
      "lp": 659,
      "pdp": 6067,
      "nnpp": 32891,
      "total": 45750,
      "winner": "NNPP"
    },
    {
      "lgaId": "tofa",
      "lgaName": "Tofa",
      "apc": 10280,
      "lp": 177,
      "pdp": 1192,
      "nnpp": 17219,
      "total": 28868,
      "winner": "NNPP"
    },
    {
      "lgaId": "tsanyawa",
      "lgaName": "Tsanyawa",
      "apc": 14052,
      "lp": 89,
      "pdp": 1721,
      "nnpp": 14468,
      "total": 30330,
      "winner": "NNPP"
    },
    {
      "lgaId": "tudun-wada",
      "lgaName": "Tudun Wada",
      "apc": 18017,
      "lp": 1053,
      "pdp": 1965,
      "nnpp": 23041,
      "total": 44076,
      "winner": "NNPP"
    },
    {
      "lgaId": "ungogo",
      "lgaName": "Ungogo",
      "apc": 8011,
      "lp": 334,
      "pdp": 4659,
      "nnpp": 34916,
      "total": 47920,
      "winner": "NNPP"
    },
    {
      "lgaId": "warawa",
      "lgaName": "Warawa",
      "apc": 10352,
      "lp": 125,
      "pdp": 1277,
      "nnpp": 12708,
      "total": 24462,
      "winner": "NNPP"
    },
    {
      "lgaId": "wudil",
      "lgaName": "Wudil",
      "apc": 10279,
      "lp": 380,
      "pdp": 2785,
      "nnpp": 22517,
      "total": 35961,
      "winner": "NNPP"
    }
  ],
  "bayelsa": [
    {
      "lgaId": "brass",
      "lgaName": "Brass",
      "apc": 3684,
      "lp": 2273,
      "pdp": 6209,
      "nnpp": 25,
      "total": 12191,
      "winner": "PDP"
    },
    {
      "lgaId": "ekeremor",
      "lgaName": "Ekeremor",
      "apc": 4398,
      "lp": 4489,
      "pdp": 9113,
      "nnpp": 16,
      "total": 18016,
      "winner": "PDP"
    },
    {
      "lgaId": "kolokuma-opokuma",
      "lgaName": "Kolokuma/Opokuma",
      "apc": 4137,
      "lp": 3395,
      "pdp": 8972,
      "nnpp": 34,
      "total": 16538,
      "winner": "PDP"
    },
    {
      "lgaId": "nembe",
      "lgaName": "Nembe",
      "apc": 3005,
      "lp": 1807,
      "pdp": 2334,
      "nnpp": 15,
      "total": 7161,
      "winner": "APC"
    },
    {
      "lgaId": "ogbia",
      "lgaName": "Ogbia",
      "apc": 8444,
      "lp": 6721,
      "pdp": 6362,
      "nnpp": 47,
      "total": 21574,
      "winner": "APC"
    },
    {
      "lgaId": "sagbama",
      "lgaName": "Sagbama",
      "apc": 4603,
      "lp": 4629,
      "pdp": 10240,
      "nnpp": 24,
      "total": 19496,
      "winner": "PDP"
    },
    {
      "lgaId": "southern-ijaw",
      "lgaName": "Southern Ijaw",
      "apc": 7650,
      "lp": 4400,
      "pdp": 11280,
      "nnpp": 190,
      "total": 23520,
      "winner": "PDP"
    },
    {
      "lgaId": "yenagoa",
      "lgaName": "Yenagoa",
      "apc": 6651,
      "lp": 22261,
      "pdp": 14308,
      "nnpp": 189,
      "total": 43409,
      "winner": "LP"
    }
  ]
};

export function getElectionByLGA(stateId: string): Record<string, LGAElectionResult> {
  const stateData = ELECTION_DATA[stateId];
  if (!stateData) return {};
  return Object.fromEntries(stateData.map(r => [r.lgaId, r]));
}
