export interface Product {
  id: string;
  slug: string;
  category: "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new";
  name_ua: string;
  description_ua: string;
  fullDescription_ua: string;
  image: string;
  weight: string;
  ingredients: string[];
  nutritionPer100g: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
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
    weight: "200г",
    ingredients: ["Пшеничное борошно", "Вершкове масло", "Цукор", "Яйця", "Ваніль"],
    nutritionPer100g: {
      calories: 450,
      protein: 6,
      fat: 22,
      carbs: 58,
    },
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
    weight: "250г",
    ingredients: ["Пшеничное борошно", "Темний шоколад", "Горіхи", "Вершкове масло", "Цукор"],
    nutritionPer100g: {
      calories: 480,
      protein: 7,
      fat: 24,
      carbs: 60,
    },
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
    weight: "180г",
    ingredients: ["Вівсяна крупа", "Пшеничное борошно", "Мед", "Родзинки", "Вершкове масло"],
    nutritionPer100g: {
      calories: 420,
      protein: 8,
      fat: 18,
      carbs: 56,
    },
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
    weight: "300г",
    ingredients: ["Мед", "Борошно", "Спеції", "Цукор", "Яйця", "Вершкове масло"],
    nutritionPer100g: {
      calories: 380,
      protein: 5,
      fat: 12,
      carbs: 65,
    },
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
    weight: "350г",
    ingredients: ["Мед", "Борошно", "Темний шоколад", "Цукор", "Спеції", "Яйця"],
    nutritionPer100g: {
      calories: 420,
      protein: 6,
      fat: 16,
      carbs: 62,
    },
  },
  {
    id: "6",
    slug: "nutella-gingerbread",
    category: "gingerbread",
    name_ua: "Пряники з горіховою пастою",
    description_ua: "Пряники з корицею та горіховою начинкою",
    fullDescription_ua:
      "Гидалий рецепт пряників з нутелою всередині. Мм'яке тісто з медом і спеціями в поєднанні з кремезною гірково-ореховою пастою.",
    image: "/products/gingerbread-nutella.png",
    weight: "280г",
    ingredients: ["Мед", "Борошно", "Горішкова паста", "Кориця", "Цукор", "Яйця"],
    nutritionPer100g: {
      calories: 460,
      protein: 8,
      fat: 22,
      carbs: 58,
    },
  },

  // Східні солодощі (Eastern Sweets)
  {
    id: "7",
    slug: "kozinak-homka",
    category: "eastern-sweets",
    name_ua: "Козинак 'Гомка'",
    description_ua: "Традиційний козинак з насінням",
    fullDescription_ua:
      "Традиційний річний козинак з гарбузовим насінням, смаженим на меді. Мінеральні речовини, білки та смакова насолода в одній порції.",
    image: "/products/kozinac-gomka.png",
    weight: "150г",
    ingredients: ["Мед", "Гарбузове насіння", "Цукор", "Масло"],
    nutritionPer100g: {
      calories: 520,
      protein: 12,
      fat: 28,
      carbs: 58,
    },
  },
  {
    id: "8",
    slug: "sunflower-kozinac",
    category: "eastern-sweets",
    name_ua: "Козинак сонячниковий",
    description_ua: "Козинак з соняшниковим насінням",
    fullDescription_ua:
      "Смачний козинак з соняшниковим насінням, приготовлений на медовій основі. Багатий на вітаміни та мінерали, ідеальна альтернатива цукеркам.",
    image: "/products/kozinac-sunflower.png",
    weight: "160г",
    ingredients: ["Мед", "Сонячникове насіння", "Цукор", "Масло"],
    nutritionPer100g: {
      calories: 530,
      protein: 11,
      fat: 30,
      carbs: 56,
    },
  },
  {
    id: "9",
    slug: "mixed-nuts-kozinac",
    category: "eastern-sweets",
    name_ua: "Козинак змішаний з горіхами",
    description_ua: "Козинак з мікс горіхів і насіння",
    fullDescription_ua:
      "Преміум козинак зі змішаними горіхами та насінням на медовій основі. Розкішний смак та бездоганна якість в кожному шматку.",
    image: "/products/kozinac-mixed-nuts.png",
    weight: "200г",
    ingredients: ["Мед", "Мікс горіхів", "Насіння", "Цукор", "Масло"],
    nutritionPer100g: {
      calories: 560,
      protein: 14,
      fat: 32,
      carbs: 54,
    },
  },

  // Цукерки (Candies)
  {
    id: "10",
    slug: "chocolate-truffle",
    category: "candies",
    name_ua: "Шоколадний трюфель",
    description_ua: "Розкішний шоколадний трюфель",
    fullDescription_ua:
      "Преміум шоколадні трюфелі з темного шоколаду та кремезною шоколадною начинкою. Кожен трюфель обвалений у какао-порошку та посипаний золотими крупинками.",
    image: "/products/truffle-chocolate.png",
    weight: "200г",
    ingredients: ["Темний шоколад", "Какао-порошок", "Молоко", "Цукор"],
    nutritionPer100g: {
      calories: 480,
      protein: 7,
      fat: 28,
      carbs: 54,
    },
  },
  {
    id: "11",
    slug: "caramel-candy",
    category: "candies",
    name_ua: "Карамельна цукерка",
    description_ua: "М'яка карамель з горіховим смаком",
    fullDescription_ua:
      "Класична м'яка карамель з додаванням молочних вершків та горіхів. Кожна цукерка розтане в роті, даруючи чудовий смак.",
    image: "/products/candy-caramel.png",
    weight: "180г",
    ingredients: ["Карамель", "Молочні вершки", "Горіхи", "Цукор"],
    nutritionPer100g: {
      calories: 420,
      protein: 6,
      fat: 18,
      carbs: 60,
    },
  },
  {
    id: "12",
    slug: "fruit-jelly-candy",
    category: "candies",
    name_ua: "Фруктова желейна цукерка",
    description_ua: "Яскраві желейні цукерки з фруктовим смаком",
    fullDescription_ua:
      "Яскраві та смачні желейні цукерки з натуральним фруктовим смаком. Кожна цукерка як маленький скарб смаку та радості.",
    image: "/products/candy-jelly-fruit.png",
    weight: "150г",
    ingredients: ["Желатин", "Фруктовий сік", "Цукор", "Кислота"],
    nutritionPer100g: {
      calories: 350,
      protein: 4,
      fat: 2,
      carbs: 82,
    },
  },

  // Новинки (New)
  {
    id: "13",
    slug: "matcha-white-chocolate",
    category: "new",
    name_ua: "Матча + Біле шоколадо",
    description_ua: "Новинка: екзотичне поєднання матчі та білого шоколаду",
    fullDescription_ua:
      "Абсолютна новинка в нашому асортименті! Тісто з японською матчою в поєднанні з вершкове білим шоколадом. Елегантна та витончена насолода для справжніх гурманів.",
    image: "/products/new-matcha-white-chocolate.png",
    weight: "220г",
    ingredients: ["Матча", "Біле шоколадо", "Борошно", "Вершкове масло", "Цукор"],
    nutritionPer100g: {
      calories: 470,
      protein: 7,
      fat: 25,
      carbs: 56,
    },
  },
  {
    id: "14",
    slug: "lavender-honey-cookies",
    category: "new",
    name_ua: "Печиво Лаванда + Мед",
    description_ua: "Новинка: чарівне печиво з лавандою та медом",
    fullDescription_ua:
      "Чарівне печиво з нотками лаванди та натурального меду. Витончений аромат та м'яка консистенція роблять цей продукт справжнім комплементом до чайної церемонії.",
    image: "/products/new-lavender-honey-cookies.png",
    weight: "200г",
    ingredients: ["Борошно", "Лаванда", "Мед", "Вершкове масло", "Яйця"],
    nutritionPer100g: {
      calories: 440,
      protein: 6,
      fat: 20,
      carbs: 60,
    },
  },
  {
    id: "15",
    slug: "spicy-ginger-truffle",
    category: "new",
    name_ua: "Гарячий імбир + Темний шоколад",
    description_ua: "Новинка: гарячий імбирний смак в шоколаді",
    fullDescription_ua:
      "Сміливе поєднання гарячого імбиру та темного шоколаду. Теплий, пікантний смак для тих, хто любить експериментувати зі смаками.",
    image: "/products/new-spicy-ginger-truffle.png",
    weight: "180г",
    ingredients: ["Темний шоколад", "Імбир", "Цукор", "Какао-порошок"],
    nutritionPer100g: {
      calories: 460,
      protein: 6,
      fat: 26,
      carbs: 55,
    },
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
