export interface Product {
  id: string;
  slug: string;
  category: "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new";
  name_ua: string;
  description_ua: string;
  fullDescription_ua: string;
  image: string;
  gallery: string[];
  weight: string;
  ingredients: string[];
  nutritionPer100g: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  shelfLife_ua: string;
}

export const products: Product[] = [
  // Печиво (Cookies)
  {
    id: "1",
    slug: "butter-cookies",
    category: "cookies",
    name_ua: "Вершкове печиво",
    description_ua: "Класичне вершкове печиво з нежною текстурою",
    fullDescription_ua:
      "Класичне вершкове печиво, приготоване за традиційним рецептом з використанням найкращого вершкового масла. Має нежну, крихку текстуру та чудовий ванільний аромат. Ідеально підходить для чаю та кави.",
    image: "/products/butter-cookies.png",
    gallery: ["/products/butter-cookies.png", "/products/butter-cookies-open.png", "/products/butter-cookies-detail.png"],
    weight: "200г",
    ingredients: ["Пшеничное борошно", "Вершкове масло", "Цукор", "Яйця", "Ваніль"],
    nutritionPer100g: {
      calories: 450,
      protein: 6,
      fat: 22,
      carbs: 58,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },
  {
    id: "2",
    slug: "chocolate-cookies",
    category: "cookies",
    name_ua: "Шоколадне печиво",
    description_ua: "Печиво з темним шоколадом та горіхами",
    fullDescription_ua:
      "Ароматне печиво з кремезними шматочками темного шоколаду та хрусткими горіхами. Кожне печиво – це справжня насолода для шоколадних любителів.",
    image: "/products/chocolate-cookies.png",
    gallery: ["/products/chocolate-cookies.png", "/products/chocolate-cookies-open.png", "/products/chocolate-cookies-detail.png"],
    weight: "250г",
    ingredients: ["Пшеничное борошно", "Темний шоколад", "Горіхи", "Вершкове масло", "Цукор"],
    nutritionPer100g: {
      calories: 480,
      protein: 7,
      fat: 24,
      carbs: 60,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },
  {
    id: "3",
    slug: "oatmeal-cookies",
    category: "cookies",
    name_ua: "Вівсяне печиво",
    description_ua: "Корисне печиво з вівсяною крупою",
    fullDescription_ua:
      "Корисне та смачне вівсяне печиво з додаванням родзинок та меду. Забезпечує енергію та насичене на довгий час.",
    image: "/products/oatmeal-cookies.png",
    gallery: ["/products/oatmeal-cookies.png", "/products/oatmeal-cookies-open.png", "/products/oatmeal-cookies-detail.png"],
    weight: "180г",
    ingredients: ["Вівсяна крупа", "Пшеничное борошно", "Мед", "Родзинки", "Вершкове масло"],
    nutritionPer100g: {
      calories: 420,
      protein: 8,
      fat: 18,
      carbs: 56,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },

  // Пряники (Gingerbread)
  {
    id: "4",
    slug: "classic-gingerbread",
    category: "gingerbread",
    name_ua: "Класичні пряники",
    description_ua: "Традиційні пряники зі спеціями",
    fullDescription_ua:
      "Традиційні українські пряники зі спеціями, м'яким медовим смаком. Приготовлені за давним рецептом з додаванням кориці, гвоздики та мускатного горіха.",
    image: "/products/gingerbread-classic.png",
    gallery: ["/products/gingerbread-classic.png", "/products/gingerbread-classic-open.png", "/products/gingerbread-classic-detail.png"],
    weight: "300г",
    ingredients: ["Мед", "Борошно", "Спеції", "Цукор", "Яйця", "Вершкове масло"],
    nutritionPer100g: {
      calories: 380,
      protein: 5,
      fat: 12,
      carbs: 65,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },
  {
    id: "5",
    slug: "chocolate-glazed-gingerbread",
    category: "gingerbread",
    name_ua: "Пряники в шоколадній глазурі",
    description_ua: "Пряники з шоколадним покриттям",
    fullDescription_ua:
      "М'які пряники з шоколадною глазур'ю та цукровою посипкою. Комбінація медових пряників та гладкої шоколадної глазурі створює ідеальний смак.",
    image: "/products/gingerbread-chocolate.png",
    gallery: ["/products/gingerbread-chocolate.png", "/products/gingerbread-chocolate-open.png", "/products/gingerbread-chocolate-detail.png"],
    weight: "350г",
    ingredients: ["Мед", "Борошно", "Темний шоколад", "Цукор", "Спеції", "Яйця"],
    nutritionPer100g: {
      calories: 420,
      protein: 6,
      fat: 16,
      carbs: 62,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },
  {
    id: "6",
    slug: "nutella-gingerbread",
    category: "gingerbread",
    name_ua: "Пряники з горіховою пастою",
    description_ua: "Пряники з корицею та горіховою начинкою",
    fullDescription_ua:
      "Гидалий рецепт пряників з нутелою всередині. Мм'яке тісто з медом і спеціями в поєднанні з кремезною гірково-ореховою пастою.",
    image: "/products/homka.png",
    gallery: ["/products/homka.png", "/products/homka-open.png", "/products/homka-detail-open.png", "/products/homka-detail.png"],
    weight: "280г",
    ingredients: ["Мед", "Борошно", "Горішкова паста", "Кориця", "Цукор", "Яйця"],
    nutritionPer100g: {
      calories: 460,
      protein: 8,
      fat: 22,
      carbs: 58,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },

  // Східні солодощі (Eastern Sweets)
  {
  id: "7",
  slug: "kozinak-homka-z-glazurovanym-dnom",
  category: "eastern-sweets",
  name_ua: "Козинак «Хомка» з глазурованим дном",
  description_ua:
    "Хрусткий козинак із добірного насіння соняшника з ніжним шоколадним глазурованим дном.",
    
  fullDescription_ua:
    "Смачний та хрусткий козинак із добірного насіння соняшника з ніжним глазурованим дном. Поєднання карамелізованого насіння та шоколадної глазурі створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/homka.png",
  gallery: ["/products/homka.png", "/products/koziak2.png", "/products/kozinak.png","/products/kozinak3.png"],

  weight: "335 г",

  ingredients: [
    "Ядра насіння соняшника",
    "Кондитерська глазур",
    "Цукор",
    "Патока",
    "Рослинна олія"
  ],

  nutritionPer100g: {
    calories: 483,
    protein: 15.6,
    fat: 33.4,
    carbs: 24.9,
  },
  shelfLife_ua: "6 місяців від дати виробництва",
},
 {
  id: "8",
  slug: "amka-chocolate-sweets",
  category: "eastern-sweets",
  name_ua: "Солодощі «Амка» у шоколадній глазурі",
  description_ua: "Хрусткі солодощі з соняшникового насіння у ніжній шоколадній глазурі",
  fullDescription_ua:
    "Смачні та хрусткі солодощі «Амка» з добірного соняшникового насіння, вкриті ніжною шоколадною глазур’ю. Поєднання карамелізованого насіння та шоколадного покриття створює насичений солодкий смак і приємний аромат. Ідеально смакують до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/sezamka.png",
  gallery: [
    "/products/sezamka.png",
    "/products/sezamka2.png",
    "/products/sezamka3.png"
  ],
  weight: "340г",
  ingredients: [
    "Ядра соняшникового насіння",
    "Кондитерська глазур",
    "Какао-порошок",
    "Цукор",
    "Патока",
    "Рослинна олія",
    "Емульгатори",
    "Ароматизатор ванілін"
  ],
  nutritionPer100g: {
    calories: 503.9,
    protein: 10.2,
    fat: 44.1,
    carbs: 47.8,
  },
  shelfLife_ua: "6 місяців від дати виробництва",
},
{
  id: "9",
  slug: "kozinak-with-chocolate-crumb",
  category: "eastern-sweets",
  name_ua: "Козинак із шоколадною крихтою",
  description_ua: "Хрусткий козинак із насіння соняшника та шоколадною крихтою",
  fullDescription_ua:
    "Смачний та ароматний козинак із добірного насіння соняшника та шоколадної крихти. Гармонійне поєднання карамелізованого насіння створює насичений смак, а шматочки шоколаду додають ніжну солодку нотку та приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/kozinak_kroshka.png",
  gallery: [
    "/products/kozinak_kroshka.png",
    "/products/kozinak_kroshka2.png",
    "/products/kozinak_kroshka3.png"
  ],
  weight: "200г",
  ingredients: [
    "Ядра насіння соняшника",
    "Шоколадна крихта",
    "Цукор",
    "Патока",
    "Рослинна олія"
  ],
  nutritionPer100g: {
    calories: 540,
    protein: 12,
    fat: 28,
    carbs: 58,
  },
  shelfLife_ua: "6 місяців від дати виробництва",
},
{
  id: "10",
  slug: "kozinak-with-sesame",
  category: "eastern-sweets",
  name_ua: "Козинак із кунжутом",
  description_ua: "Хрусткий козинак із насіння соняшника та кунжуту",
  fullDescription_ua:
    "Апетитний козинак із добірного насіння соняшника та ароматного кунжуту. Поєднання карамелізованого насіння створює насичений солодкий смак, а кунжут додає ніжну горіхову нотку та приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/homka1.png",
  gallery: [
    "/products/homka1.png",
    "/products/homka2.png",
    "/products/homka3.png",
    "/products/sezamka300.png"
  ],
  weight: "230г/300г",
  ingredients: [
    "Ядра насіння соняшника",
    "Кунжут",
    "Цукор",
    "Патока",
    "Рослинна олія"
  ],
  nutritionPer100g: {
    calories: 482,
    protein: 10.7,
    fat: 46.4,
    carbs: 38.8,
  },
  shelfLife_ua: "6 місяців від дати виробництва",
},
{
  id: "11",
  slug: "kozinak-homka",
  category: "eastern-sweets",
  name_ua: "Козинак «Хомка»",
  description_ua: "Хрусткий козинак із соняшникового насіння",
  fullDescription_ua:
    "Смачний та хрусткий козинак із добірного соняшникового насіння. Поєднання карамелізованого насіння та легкої солодкості створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/homkaPro.png",
  gallery: [
    "/products/homkaPro.png",
    "/products/homkaPro2.png",
    "/products/homkaPro1.png",
    "/products/homkaPro300.png"
  ],
  weight: "290г/480г",
  ingredients: [
    "Ядра соняшникового насіння",
    "Крохмальна патока",
    "Цукор",
    "Соняшникова олія"
  ],
  nutritionPer100g: {
    calories: 535,
    protein: 15.3,
    fat: 31.1,
    carbs: 26.5,
  },
  shelfLife_ua: "12 місяців від дати виробництва",
},

  {
  id: "12",
  slug: "homka-in-chocolate-glaze",
  category: "eastern-sweets",
  name_ua: "Цукерка «Хомка в кондитерській глазурі»",
  description_ua: "Хрусткі солодощі з насіння соняшника в ніжній кондитерській глазурі",
  fullDescription_ua:
    "Смачні та хрусткі східні солодощі з добірного насіння соняшника в ніжній кондитерській глазурі. Поєднання карамелізованого насіння та шоколадної глазурі створює насичений смак і приємний аромат. Ідеально смакують до чаю, кави або як солодкий перекус протягом дня.",
  
  image: "/products/homka_vglazuri.png",

  gallery: [
    "/products/homka_vglazuri.png",
    "/products/homka_vglzuri2.png",
    "/products/homka_vglazuri3.png"
  ],

  weight: "380г",

  ingredients: [
    "Ядра соняшникового насіння",
    "Кондитерська глазур",
    "Цукор",
    "Рослинний жир",
    "Какао-порошок",
    "Сухе знежирене молоко",
    "Патока крохмальна",
    "Соняшникова олія",
    "Ванілін"
  ],

  nutritionPer100g: {
    calories: 544,
    protein: 11.1,
    fat: 38.2,
    carbs: 38.9,
  },

  shelfLife_ua: "6 місяців від дати виробництва",
},
// Цукерки (Candies)
  {
    id: "13",
    slug: "fruit-jelly-candy",
    category: "candies",
    name_ua: "Фруктова желейна цукерка",
    description_ua: "Яскраві желейні цукерки з фруктовим смаком",
    fullDescription_ua:
      "Яскраві та смачні желейні цукерки з натуральним фруктовим смаком. Кожна цукерка як маленький скарб смаку та радості.",
    image: "/products/candy-jelly-fruit.png",
    gallery: ["/products/candy-jelly-fruit.png", "/products/candy-jelly-fruit-open.png", "/products/candy-jelly-fruit-detail.png"],
    weight: "150г",
    ingredients: ["Желатин", "Фруктовий сік", "Цукор", "Кислота"],
    nutritionPer100g: {
      calories: 350,
      protein: 4,
      fat: 2,
      carbs: 82,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },

  // Новинки (New)
  {
    id: "14",
    slug: "matcha-white-chocolate",
    category: "new",
    name_ua: "Матча + Біле шоколадо",
    description_ua: "Новинка: екзотичне поєднання матчі та білого шоколаду",
    fullDescription_ua:
      "Абсолютна новинка в нашому асортименті! Тісто з японською матчою в поєднанні з вершкове білим шоколадом. Елегантна та витончена насолода для справжніх гурманів.",
    image: "/products/new-matcha-white-chocolate.png",
    gallery: ["/products/new-matcha-white-chocolate.png", "/products/new-matcha-white-chocolate-open.png", "/products/new-matcha-white-chocolate-detail.png"],
    weight: "220г",
    ingredients: ["Матча", "Біле шоколадо", "Борошно", "Вершкове масло", "Цукор"],
    nutritionPer100g: {
      calories: 470,
      protein: 7,
      fat: 25,
      carbs: 56,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },
  {
    id: "15",
    slug: "lavender-honey-cookies",
    category: "new",
    name_ua: "Печиво Лаванда + Мед",
    description_ua: "Новинка: чарівне печиво з лавандою та медом",
    fullDescription_ua:
      "Чарівне печиво з нотками лаванди та натурального меду. Витончений аромат та м'яка консистенція роблять цей продукт справжнім комплементом до чайної церемонії.",
    image: "/products/new-lavender-honey-cookies.png",
    gallery: ["/products/new-lavender-honey-cookies.png", "/products/new-lavender-honey-cookies-open.png", "/products/new-lavender-honey-cookies-detail.png"],
    weight: "200г",
    ingredients: ["Борошно", "Лаванда", "Мед", "Вершкове масло", "Яйця"],
    nutritionPer100g: {
      calories: 440,
      protein: 6,
      fat: 20,
      carbs: 60,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },
  {
    id: "16",
    slug: "spicy-ginger-truffle",
    category: "new",
    name_ua: "Гарячий імбир + Темний шоколад",
    description_ua: "Новинка: гарячий імбирний смак в шоколаді",
    fullDescription_ua:
      "Сміливе поєднання гарячого імбиру та темного шоколаду. Теплий, пікантний смак для тих, хто любить експериментувати зі смаками.",
    image: "/products/new-spicy-ginger-truffle.png",
    gallery: ["/products/new-spicy-ginger-truffle.png", "/products/new-spicy-ginger-truffle-open.png", "/products/new-spicy-ginger-truffle-detail.png"],
    weight: "180г",
    ingredients: ["Темний шоколад", "Імбир", "Цукор", "Какао-порошок"],
    nutritionPer100g: {
      calories: 460,
      protein: 6,
      fat: 26,
      carbs: 55,
    },
    shelfLife_ua: "6 місяців від дати виробництва",
  },
];

export const categories = [
  { id: "cookies", name_ua: "Печиво", slug: "cookies" },
  { id: "gingerbread", name_ua: "Пряники", slug: "gingerbread" },
  { id: "eastern-sweets", name_ua: "Східні солодощі", slug: "eastern-sweets" },
  { id: "candies", name_ua: "Цукерки", slug: "candies" },
  { id: "new", name_ua: "Новинки", slug: "new" },
];

export function getProductsByCategory(
  category: "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new"
) {
  return products.filter((product) => product.category === category);
}

export function getProductBySlug(
  slug: string,
  category: "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new"
) {
  return products.find((product) => product.slug === slug && product.category === category);
}

export function getCategoryName(
  category: "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new"
) {
  const cat = categories.find((c) => c.id === category);
  return cat?.name_ua || category;
}
