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
  slug: "elza-with-sesame",
  category: "cookies",

  name_ua: "Печиво «Ельза» з кунжутом",

  description_ua:
    "Розсипчасте печиво з ніжним смаком та ароматним кунжутом.",

  fullDescription_ua:
    "Смачне та розсипчасте печиво з додаванням ароматного кунжуту. Ніжна текстура та приємний солодкий смак чудово поєднуються з легкою горіховою ноткою кунжуту. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/elza-sesame-open.png",

  gallery: [
    "/products/elza-sesame.png",
    "/products/elza-sesame-open.png"
  ],

  weight: "120г",

  ingredients: [
    "Пшеничне борошно",
    "Кунжут",
    "Цукор",
    "Рослинний жир",
    "Яєчний продукт",
    "Розпушувач"
  ],

  nutritionPer100g: {
    calories: 486,
    protein: 7.1,
    fat: 22.8,
    carbs: 63.5,
  },

  shelfLife_ua: "120 діб",
},
  {
  id: "2",
  slug: "elza-with-coconut-and-glaze-pieces",
  category: "cookies",

  name_ua: "«Ельза» з кокосом і шматочками глазурі",

  description_ua:
    "Пісочне печиво з кокосовою начинкою та шматочками кондитерської глазурі.",

  fullDescription_ua:
    "Смачне пісочне печиво з ніжною кокосовою начинкою та шматочками кондитерської глазурі. Поєднання хрусткого печива, кокосової стружки та солодкої глазурі створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/elza-coconut-glaze.png",

  gallery: [
    "/products/elza-coconut-glaze.png",
    "/products/elza-coconut-glaze-open.png",
    "/products/elza-coconut-glaze-detai.png"
  ],

  weight: "120г",

  ingredients: [
    "Пшеничне борошно",
    "Кокосова стружка",
    "Кондитерська глазур",
    "Цукор",
    "Рослинний жир",
    "Какао-порошок",
    "Молочна основа"
  ],

  nutritionPer100g: {
    calories: 518,
    protein: 5.2,
    fat: 29.8,
    carbs: 57.4,
  },

  shelfLife_ua: "120 діб",
},
 {
  id: "3",
  slug: "american-cookie-with-glaze-pieces",
  category: "cookies",

  name_ua: "Печиво «Американер» зі шматочками глазурі",

  description_ua:
    "Хрустке пісочне печиво зі шматочками кондитерської глазурі.",

  fullDescription_ua:
    "Смачне та ароматне пісочне печиво зі щедрими шматочками кондитерської глазурі. Ніжна розсипчаста текстура та насичений солодкий смак створюють ідеальне поєднання для чаю, кави або солодкого перекусу протягом дня.",

  image: "/products/american-cookie.png",

  gallery: [
    "/products/american-cookie.png",
  ],

  weight: "150г",

  ingredients: [
    "Пшеничне борошно",
    "Кондитерська глазур",
    "Цукор",
    "Рослинний жир",
    "Яєчний порошок",
    "Молочна основа",
    "Розпушувач",
    "Ванілін"
  ],

  nutritionPer100g: {
    calories: 496,
    protein: 5.8,
    fat: 24.6,
    carbs: 61.3,
  },

  shelfLife_ua: "90 діб",
},
{
  id: "22",
  slug: "american-cookie-with-raisins",
  category: "cookies",

  name_ua: "Печиво «Американер» з ізюмом",

  description_ua:
    "Розсипчасте пісочне печиво зі шматочками солодкого ізюму.",

  fullDescription_ua:
    "Смачне та ароматне пісочне печиво з добірним ізюмом. Ніжна розсипчаста текстура та натуральна солодкість родзинок створюють гармонійний смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/american-cookie-raisin.png",

  gallery: [
    "/products/american-cookie-raisin.png"
  ],

  weight: "150г",

  ingredients: [
    "Пшеничне борошно",
    "Ізюм",
    "Цукор",
    "Рослинний жир",
    "Яєчний порошок",
    "Молочна основа",
    "Розпушувач",
    "Ванілін"
  ],

  nutritionPer100g: {
    calories: 472,
    protein: 5.1,
    fat: 21.4,
    carbs: 63.8,
  },

  shelfLife_ua: "90 діб",
},
{
  id: "23",
  slug: "grain-cracker-with-seeds",
  category: "cookies",

  name_ua: "Крекер «Зернове»",

  description_ua:
    "Хрусткий зерновий крекер із насінням соняшника, льону та кунжуту.",

  fullDescription_ua:
    "Апетитний та хрусткий зерновий крекер, декорований добірним насінням соняшника, льону та кунжуту. Поєднання злакової основи та ароматного насіння створює насичений смак і приємну хрустку текстуру. Ідеально смакує як легкий перекус або доповнення до чаю, кави чи сиру.",

  image: "/products/grain-cracker.png",

  gallery: [
    "/products/grain-cracker.png",
    "/products/grain-cracker1.png"
  ],

  weight: "300г",

  ingredients: [
    "Пшеничне борошно",
    "Насіння соняшника",
    "Насіння льону",
    "Кунжут",
    "Рослинний жир",
    "Цукор",
    "Сіль",
    "Розпушувач"
  ],

  nutritionPer100g: {
    calories: 458,
    protein: 10.4,
    fat: 19.6,
    carbs: 58.2,
  },

  shelfLife_ua: "120 діб",
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
  gallery: ["/products/homka.png", "/products/koziak2.png", "/products/kozinak.png","/products/kozinak3.png", "/products/homka_v_glazuri.png"],

  weight: "335 г/450г",

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
  slug: "kozinak-homka-z-medom",
  category: "eastern-sweets",

  name_ua: "Козинак «Хомка» з медом",

  description_ua:
    "Хрусткий козинак із добірного насіння соняшника та натурального меду.",

  fullDescription_ua:
    "Смачний та хрусткий козинак із добірного насіння соняшника з додаванням натурального меду. Поєднання карамелізованого насіння та медової солодкості створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/homka_med.png",

  gallery: [
    "/products/homka_med.png",
    "/products/homka_med2.png",
    "/products/homka_med3.png"
  ],

  weight: "335 г",

  ingredients: [
    "Ядра насіння соняшника",
    "Натуральний мед",
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
  id: "9",
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
    "/products/sezamka3.png",
    "/products/sezamka4.png"
  ],
  weight: "340г/450г",
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
  id: "10",
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
  id: "11",
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
  weight: "230г/300г/2200г",
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
  id: "12",
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
    "/products/homkaPro300.png",
    "/products/kozinaci.png"
  ],
  weight: "290г/380г/450г",
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
  id: "13",
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
    "/products/homka_vglazuri3.png",
    "/products/homka_vglazuri4.png"
  ],

  weight: "380г/450г",

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
{
  id: "14",
  slug: "homka-mix-box",
  category: "eastern-sweets",
  name_ua: "Мікс-бокс «Хомка»",
  description_ua: "Асорті з хрустких козинаків та цукерок у кондитерській глазурі",
  fullDescription_ua:
    "Мікс-бокс «Хомка» поєднує два улюблені смаки в одній упаковці: хрусткі козинаки з добірного насіння соняшника та ніжні цукерки в кондитерській глазурі. Карамелізоване насіння дарує насичений солодкий смак, а шоколадна глазур додає приємну ніжність і аромат. Ідеальний варіант для чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/mix.png",

  gallery: [
    "/products/mix.png",
    "/products/mix2.png",
    "/products/mix3.png",
    "/products/mix4.png"
  ],

  weight: "300г/420г",

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
  id: "16",
  slug: "tropic-bar-in-glaze",
  category: "candies",

  name_ua: "Батончик «Тропік» у кондитерській глазурі",

  description_ua:
    "Глазуровані солодощі з ніжним молочно-кокосовим корпусом.",

  fullDescription_ua:
    "Смачний батончик з ніжним молочно-кокосовим корпусом у кондитерській глазурі. Поєднання м’якої кокосової начинки та солодкої глазурі створює приємний вершковий смак і ніжний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/tropic-bar.png",

  gallery: [
    "/products/tropic-bar.png",
    "/products/tropic-bar-open.png",
    "/products/tropic-bar-detail.png",
    "/products/kokosik.png",
    "/products/kokosik2.png"
  ],

  weight: "425г/3000г",

  ingredients: [
    "Кокосова стружка",
    "Кондитерська глазур",
    "Молочна основа",
    "Цукор",
    "Рослинний жир"
  ],

  nutritionPer100g: {
    calories: 520,
    protein: 5,
    fat: 32,
    carbs: 54,
  },

  shelfLife_ua: "120 діб",
},
{
  id: "17",
  slug: "corn-bar-shofit",
  category: "candies",

  name_ua: "Батончик кукурудзяний «Shofit»",

  description_ua:
    "Хрусткий батончик із кукурудзяних кульок у ніжній глазурі.",

  fullDescription_ua:
    "Смачний та хрусткий батончик із суміші кукурудзяних кульок з вівсяними пластівцями, насінням льону та кунжуту в карамельному сиропі. Поєднання повітряної текстури та солодкої глазурі створює приємний смак і аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/shofit_br.png",

  gallery: [
    "/products/shofit_br.png",
    "/products/shofit2.png"
  ],

  weight: "120г",

  ingredients: [
    "Кукурудзяні кульки",
    "Вівсяні пластівці",
    "Насіння льону",
    "Кунжут",
    "Карамельний сироп",
    "Кондитерська глазур"
  ],

  nutritionPer100g: {
    calories: 470,
    protein: 6.2,
    fat: 18.5,
    carbs: 68.4,
  },

  shelfLife_ua: "270 діб",
},
{
  id: "18",
  slug: "corn-bar-shofit-cranberry",
  category: "candies",

  name_ua: "Батончик кукурудзяний «Shofit» з журавлиною",

  description_ua:
    "Хрусткий батончик із кукурудзяних кульок та журавлини в карамельному сиропі.",

  fullDescription_ua:
    "Смачний та хрусткий батончик із суміші кукурудзяних кульок з вівсяними пластівцями, насінням льону та кунжуту з додаванням журавлини в карамельному сиропі. Поєднання повітряної текстури, легкої кислинки журавлини та солодкого сиропу створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/shofit-cranberry.png",

  gallery: [
    "/products/shofit-cranberry.png",
    "/products/shofit-cranberry-open.png",
    "/products/shofit-cranberry-detail.png"
  ],

  weight: "120г",

  ingredients: [
    "Кукурудзяні кульки",
    "Вівсяні пластівці",
    "Журавлина",
    "Насіння льону",
    "Кунжут",
    "Карамельний сироп",
    "Кондитерська глазур"
  ],

  nutritionPer100g: {
    calories: 475,
    protein: 6.4,
    fat: 18.9,
    carbs: 69.1,
  },

  shelfLife_ua: "270 діб",
},
{
  id: "19",
  slug: "corn-bar-with-coconut",
  category: "candies",

  name_ua: "Батончик кукурудзяний з кокосом",

  description_ua:
    "Хрусткий кукурудзяний батончик з ніжним кокосовим смаком.",

  fullDescription_ua:
    "Смачний батончик із повітряних кукурудзяних кульок з додаванням кокосової стружки, насіння льону та кунжуту в ароматному карамельному сиропі. Поєднання хрусткої текстури та ніжного кокосового смаку створює приємний солодкий аромат і легкий тропічний післясмак. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/corn-coconut-bar.png",

  gallery: [
    "/products/corn-coconut-bar.png",
    "/products/corn-coconut-bar-open.png",
    "/products/corn-coconut-bar-detail.png"
  ],

  weight: "120г",

  ingredients: [
    "Кукурудзяні кульки",
    "Кокосова стружка",
    "Карамельний сироп",
    "Насіння льону",
    "Кунжут",
    "Цукор"
  ],

  nutritionPer100g: {
    calories: 468,
    protein: 6.2,
    fat: 18.4,
    carbs: 69.1,
  },

  shelfLife_ua: "270 діб",
},
{
  id: "20",
  slug: "corn-bar-with-dried-apricot",
  category: "candies",

  name_ua: "Батончик кукурудзяний з курагою",

  description_ua:
    "Хрусткий кукурудзяний батончик з натуральною курагою та карамельним смаком.",

  fullDescription_ua:
    "Смачний батончик із повітряних кукурудзяних кульок з додаванням вівсяних пластівців, насіння кунжуту та шматочків кураги в ароматному карамельному сиропі. Поєднання хрусткої текстури та ніжної фруктової кислинки кураги створює насичений солодкий смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/corn-bar-apricot.png",

  gallery: [
    "/products/corn-bar-apricot.png",
    "/products/corn-bar-apricot-open.png",
    "/products/corn-bar-apricot-detail.png"
  ],

  weight: "120г",

  ingredients: [
    "Кукурудзяні кульки",
    "Вівсяні пластівці",
    "Курага",
    "Кунжут",
    "Карамельний сироп",
    "Цукор"
  ],

  nutritionPer100g: {
    calories: 472,
    protein: 6.5,
    fat: 17.2,
    carbs: 71.4,
  },

  shelfLife_ua: "270 діб",
},
{
  id: "21",
  slug: "elza-with-sesame",
  category: "cookies",

  name_ua: "Печиво «Ельза» з кунжутом",

  description_ua:
    "Розсипчасте печиво з ніжним смаком та ароматним кунжутом.",

  fullDescription_ua:
    "Смачне та розсипчасте печиво з додаванням ароматного кунжуту. Ніжна текстура та приємний солодкий смак чудово поєднуються з легкою горіховою ноткою кунжуту. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/elza-sesame-open.png",

  gallery: [
    "/products/elza-sesame.png",
    "/products/elza-sesame-open.png"
  ],

  weight: "120г",

  ingredients: [
    "Пшеничне борошно",
    "Кунжут",
    "Цукор",
    "Рослинний жир",
    "Яєчний продукт",
    "Розпушувач"
  ],

  nutritionPer100g: {
    calories: 486,
    protein: 7.1,
    fat: 22.8,
    carbs: 63.5,
  },

  shelfLife_ua: "120 діб",
},
{
  id: "24",
  slug: "shopex-peanut-grillage",

  category: "candies",

  name_ua: "Щорех молочно-арахісовий грильяж",

  description_ua:
    "М’який молочно-арахісовий грильяж з глазурованим дном.",

  fullDescription_ua:
    "Ніжний молочно-арахісовий грильяж із насиченим смаком обсмаженого арахісу та тонким шаром глазурі знизу. Має м’яку текстуру, приємну солодкість і чудово підходить як перекус до чаю, кави або в дорогу. Виготовлений з якісних інгредієнтів для справжнього задоволення у кожному шматочку.",

  image: "/products/shopex-peanut-grillage.png",

  gallery: [
    "/products/shopex-peanut-grillage.png",
    "/products/shopex-peanut-grillage-open.png"
  ],

  weight: "90г",

  ingredients: [
    "Арахіс",
    "Молочна маса",
    "Цукор",
    "Глюкозний сироп",
    "Кондитерська глазур",
    "Рослинний жир"
  ],

  nutritionPer100g: {
    calories: 512,
    protein: 10.4,
    fat: 28.7,
    carbs: 54.2,
  },

  shelfLife_ua: "180 діб",
},

  // Новинки (New)
 {
  id: "25",
  slug: "kozinak-with-sesamka",
  category: "new",
  name_ua: "Sezamka",
  description_ua: "Хрусткий козинак із насіння соняшника та кунжуту",
  fullDescription_ua:
    "Апетитний козинак із добірного насіння соняшника та ароматного кунжуту. Поєднання карамелізованого насіння створює насичений солодкий смак, а кунжут додає ніжну горіхову нотку та приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/sezamka_box1.png",
  gallery: [
    "/products/sezamka_box1.png",
    "/products/sezamka_box2.png",
  ],
  weight: "100г",
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
  id: "26",
  slug: "kozinak-homka",
  category: "new",
  name_ua: "Козинак «Хомка» ",
  description_ua: "Хрусткий козинак із соняшникового насіння",
  fullDescription_ua:
    "Смачний та хрусткий козинак із добірного соняшникового насіння. Поєднання карамелізованого насіння та легкої солодкості створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/khomka_box1.png",
  gallery: [
    "/products/khomka_box1.png",
    "/products/khomka_box2.png",
    
  ],
  weight: "100г",
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
  id: "27",
  slug: "kozinak-with-sesam",
  category: "new",
  name_ua: "Sezamka",
  description_ua: "Хрусткий козинак із насіння соняшника та кунжуту",
  fullDescription_ua:
    "Апетитний козинак із добірного насіння соняшника та ароматного кунжуту. Поєднання карамелізованого насіння створює насичений солодкий смак, а кунжут додає ніжну горіхову нотку та приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/sezamka_red_box.png",
  gallery: [
    "/products/sezamka_red_box.png",
    "/products/sezamka_red_box2.png",
  ],
  weight: "100г",
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
  id: "28",
  slug: "tropic-bar-in-glaze",
  category: "new",

  name_ua: "Батончик «Shokosik» у кондитерській глазурі",

  description_ua:
    "Глазуровані солодощі з ніжним молочно-кокосовим корпусом.",

  fullDescription_ua:
    "Смачний батончик з ніжним молочно-кокосовим корпусом у кондитерській глазурі. Поєднання м’якої кокосової начинки та солодкої глазурі створює приємний вершковий смак і ніжний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/shokosik1.png",

  gallery: [
    "/products/shokosik1.png",
    "/products/shokosik2.png",
    "/products/tropic-bar-detail.png",
    "/products/kokosik.png",
    "/products/kokosik2.png"
  ],

  weight: "100г",

  ingredients: [
    "Кокосова стружка",
    "Кондитерська глазур",
    "Молочна основа",
    "Цукор",
    "Рослинний жир"
  ],

  nutritionPer100g: {
    calories: 520,
    protein: 5,
    fat: 32,
    carbs: 54,
  },

  shelfLife_ua: "120 діб",
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
