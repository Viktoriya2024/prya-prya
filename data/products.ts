export interface Product {
  id: string;
  slug: string;
  category: "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new";
  name_ua: string;
  name_de?: string;
  description_ua: string;
  description_de?: string;
  fullDescription_ua: string;
  fullDescription_de?: string;
  image: string;
  gallery: string[];
  weight: string;
  ingredients: string[];
  ingredients_de?: string[];
  nutritionPer100g: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  shelfLife_ua: string;
  shelfLife_de?: string;
}

export const products: Product[] = [
  // Печиво (Cookies)
  {
  id: "23",
  slug: "grain-cracker-with-seeds",
  category: "cookies",

  name_ua: "Крекер «Зернове»",

  description_ua:
    "Хрусткий зерновий крекер із насінням соняшника, льону та кунжуту.",

  fullDescription_ua:
    "Апетитний та хрусткий зерновий крекер, декорований добірним насінням соняшника, льону та кунжуту. Поєднання злакової основи та ароматного насіння створює насичений смак і приємну хрустку текстуру. Ідеально смакує як легкий перекус або доповнення до чаю, кави чи сиру.",

  image: "/products/grain-cracker2.png",

  gallery: [
    "/products/grain-cracker1.png",
    "/products/grain-cracker.png",
    "/products/grain-cracker2.png"
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
  name_de: "Knäckebrot «Körner»",
  description_de: "Knuspriges Vollkornknäckebrot mit Sonnenblumen-, Leinsamen und Sesam.",
  fullDescription_de: "Appetitliches und knuspriges Vollkornknäckebrot, verziert mit ausgewählten Sonnenblumen-, Leinsamen und Sesam. Die Kombination aus Getreidebasis und aromatischen Samen schafft einen intensiven Geschmack und angenehme knusprige Textur. Perfekt als leichter Snack oder Ergänzung zu Tee, Kaffee oder Käse.",
  shelfLife_de: "120 Tage",
  ingredients_de: ["Weizenmehl", "Sonnenblumenkerne", "Leinsamen", "Sesam", "Pflanzenöl", "Zucker", "Salz", "Triebmittel"],
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
  name_de: "Keks «Amerikaner» mit Glasurstücken",
  description_de: "Knuspriges Mürbeteigkeks mit Stücken von Konditorglasur.",
  fullDescription_de: "Leckeres und aromatisches Mürbeteigkeks mit großzügigen Stücken von Konditorglasur. Die zarte bröckelige Textur und der intensive süße Geschmack schaffen eine perfekte Kombination zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "90 Tage",
  ingredients_de: ["Weizenmehl", "Konditorglasur", "Zucker", "Pflanzenöl", "Eipulver", "Milchbasis", "Triebmittel", "Vanillin"],
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
  name_de: "Keks «Amerikaner» mit Rosinen",
  description_de: "Mürbes Buttergebäck mit süßen Rosinen.",
  fullDescription_de: "Leckeres und aromatisches Buttergebäck mit ausgewählten Rosinen. Die zarte bröckelige Textur und die natürliche Süße der Rosinen schaffen einen harmonischen Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "90 Tage",
  ingredients_de: ["Weizenmehl", "Rosinen", "Zucker", "Pflanzenöl", "Eipulver", "Milchbasis", "Triebmittel", "Vanillin"],

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
  name_de: "Keks «Elza» mit Sesam",
  description_de: "Mürbes Keks mit zartem Geschmack und aromatischem Sesam.",
  fullDescription_de: "Leckeres und mürbes Keks mit Zugabe von aromatischem Sesam. Die zarte Textur und der angenehme süße Geschmack harmonieren wunderbar mit der leichten Nussnote des Sesams. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "120 Tage",
  ingredients_de: ["Weizenmehl", "Sesam", "Zucker", "Pflanzenöl", "Eiprodukt", "Triebmittel"],

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
  name_de: "«Elza» mit Kokos und Glasurstücken",
  description_de: "Buttergebäck mit Kokosfüllung und Stücken von Konditorglasur.",
  fullDescription_de: "Leckeres Buttergebäck mit zarter Kokosfüllung und Stücken von Konditorglasur. Die Kombination aus knusprigem Keks, Kokosflocken und süßer Glasur schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "120 Tage",
  ingredients_de: ["Weizenmehl", "Kokosflocken", "Konditorglasur", "Zucker", "Pflanzenöl", "Kakaopulver", "Milchbasis"],

},
{
  id: "37",
  slug: "sunflower-candy",
  category: "candies",

  name_ua: "Цукерки «Шоняшник»",

  description_ua:
    "Глазуровані цукерки з корпусом із закарамелізованого насіння соняшнику",

  fullDescription_ua:
    "Глазуровані цукерки з хрустким корпусом із закарамелізованого насіння соняшнику та ніжною солодкою глазур’ю.",

  shelfLife_ua: "120 діб",

  image: "/products/sunflower-candy.png",

  gallery: [
    "/products/sunflower-candy.png"
  ],

  weight: "250г",

  ingredients: [
    "Насіння соняшнику",
    "Цукор",
    "Карамель",
    "Глазур",
  ],

  nutritionPer100g: {
    calories: 520,
    protein: 10,
    fat: 28,
    carbs: 58,
  },
  name_de: "Süßigkeit «Sonnenblume»",
  description_de: "Glasierte Süßigkeit mit Kern aus karamellisierten Sonnenblumenkernen",
  fullDescription_de: "Glasierte Süßigkeit mit knusprigem Kern aus karamellisierten Sonnenblumenkernen und zarter süßer Glasur.",
  shelfLife_de: "120 Tage",
  ingredients_de: ["Sonnenblumenkerne", "Zucker", "Karamell", "Glasur"],
},
{
  id: "39",
  slug: "shoreh-candy",
  category: "candies",

  name_ua: "Цукерки «Шорех»",

  description_ua:
    "М'який молочно-арахісовий грильяж з глазурованим дном",

  fullDescription_ua:
    "Ніжний молочно-арахісовий грильяж з хрусткими шматочками арахісу та глазурованим дном у солодкій шоколадній глазурі.",

  shelfLife_ua: "180 діб",

  image: "/products/shoreh-candy.png",

  gallery: [
    "/products/shoreh-candy.png"
  ],

  weight: "250г",

  ingredients: [
    "Арахіс",
    "Молочна маса",
    "Цукор",
    "Шоколадна глазур",
  ],

  nutritionPer100g: {
    calories: 530,
    protein: 9,
    fat: 30,
    carbs: 55,
  },
  name_de: "Süßigkeit «Shoreh»",
  description_de: "Weicher Milch-Erdnuss-Grillage mit glasiertem Boden",
  fullDescription_de: "Zarter Milch-Erdnuss-Grillage mit knusprigen Erdnussstücken und glasiertem Boden in süßer Schokoladenglasur.",
  shelfLife_de: "180 Tage",
  ingredients_de: ["Erdnüsse", "Milchmasse", "Zucker", "Schokoladenglasur"],

},
{
  id: "40",
  slug: "shoshik-candy",
  category: "candies",

  name_ua: "Цукерки «Шошик»",

  description_ua:
    "Глазуровані цукерки з арахісово-молочним корпусом",

  fullDescription_ua:
    "Глазуровані цукерки з ніжним арахісово-молочним корпусом у солодкій шоколадній глазурі.",

  shelfLife_ua: "180 діб",

  image: "/products/shoshik-candy.png",

  gallery: [
    "/products/shoshik-candy.png"
  ],

  weight: "250г",

  ingredients: [
    "Арахіс",
    "Молочна маса",
    "Цукор",
    "Шоколадна глазур",
  ],

  nutritionPer100g: {
    calories: 535,
    protein: 9,
    fat: 31,
    carbs: 56,
  },
  name_de: "Süßigkeit «Shoshik»",
  description_de: "Glasierte Süßigkeit mit zartem Erdnuss-Milch-Körper",
  fullDescription_de: "Glasierte Süßigkeit mit zartem Erdnuss-Milch-Körper in süßer Schokoladenglasur.",
  shelfLife_de: "180 Tage",
  ingredients_de: ["Erdnüsse", "Milchmasse", "Zucker", "Schokoladenglasur"],

},

  // Пряники (Gingerbread)
{
  id: "4",
  slug: "classic-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Баварський з яблучним повидлом»",

  description_ua:
    "М'який та духмяний пряник з великою кількістю яблучного повидла",

  fullDescription_ua:
    "М'який та духмяний пряник з великою кількістю яблучного повидла в солодкій глазурі та ніжними нотками спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-classic.png",

  gallery: [
    "/products/gingerbread-classic.png",
    "/products/gingerbread-classic-open.png",
    "/products/gingerbread-classic-detail.png",
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Яблучне повидло",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 380,
    protein: 5,
    fat: 12,
    carbs: 65,
  },
  name_de: "Lebkuchen «Bayrischer mit Apfelmus»",
  description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Apfelmus",
  fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Apfelmus in süßer Glasur und zarten Noten von Gewürzen.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Apfelmus", "Gewürze", "Glasur", "Eier"],
},
  {
  id: "5",
  slug: "apricot-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Баварський з абрикосовим повидлом»",

  description_ua:
    "М'який та духмяний пряник з великою кількістю абрикосового повидла",

  fullDescription_ua:
    "М'який та духмяний пряник з великою кількістю абрикосового повидла в солодкій глазурі та ніжними нотками спецій.",

  
  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-apricot.png",

  gallery: [
    "/products/gingerbread-apricot.png",
    "/products/gingerbread-apricot-open.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Абрикосове повидло",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 385,
    protein: 5,
    fat: 12,
    carbs: 66,
  },
  name_de: "Lebkuchen «Bayrischer mit Aprikosenmus»",
  description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Aprikosenmus",
  fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Aprikosenmus in süßer Glasur und zarten Noten von Gewürzen.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Aprikosenmus", "Gewürze", "Glasur", "Eier"],

},
  {
  id: "6",
  slug: "cherry-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Баварський з вишневим повидлом»",

  description_ua:
    "М'який та духмяний пряник з великою кількістю вишневого повидла",

  fullDescription_ua:
    "М'який та духмяний пряник з великою кількістю вишневого повидла в солодкій глазурі та ніжними нотками спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-cherry.png",

  gallery: [
    "/products/gingerbread-cherry.png",
    "/products/gingerbread-cherry-open.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Вишневе повидло",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 390,
    protein: 5,
    fat: 12,
    carbs: 67,
  },
  name_de: "Lebkuchen «Bayrischer mit Kirschmus»",
  description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Kirschmus",
  fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Kirschmus in süßer Glasur und zarten Noten von Gewürzen.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Kirschmus", "Gewürze", "Glasur", "Eier"],

},
{
  id: "29",
  slug: "raspberry-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Баварський з малиновим повидлом»",

  description_ua:
    "М'який та духмяний пряник з великою кількістю малинового повидла",

  fullDescription_ua:
    "М'який та духмяний пряник з великою кількістю малинового повидла в солодкій глазурі та ніжними нотками спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-raspberry.png",

  gallery: [
    "/products/gingerbread-raspberry.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Малинове повидло",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 388,
    protein: 5,
    fat: 12,
    carbs: 66,
  },
  name_de: "Lebkuchen «Bayrischer mit Himbeermus»",
  description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Himbeermus",
  fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Himbeermus in süßer Glasur und zarten Noten von Gewürzen.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Himbeermus", "Gewürze", "Glasur", "Eier"],

},
{
  id: "30",
  slug: "strawberry-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Баварський з полуничним повидлом»",

  description_ua:
    "М'який та духмяний пряник з великою кількістю полуничного повидла",

  fullDescription_ua:
    "М'який та духмяний пряник з великою кількістю полуничного повидла в солодкій глазурі та ніжними нотками спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-strawberry.png",

  gallery: [
    "/products/gingerbread-strawberry.png",
    "/products/gingerbread-strawberry-open.png",
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Полуничне повидло",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 387,
    protein: 5,
    fat: 12,
    carbs: 66,
  },
  name_de: "Lebkuchen «Bayrischer mit Erdbeermus»",
  description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Erdbeermus",
  fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Erdbeermus in süßer Glasur und zarten Noten von Gewürzen.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Erdbeermus", "Gewürze", "Glasur", "Eier"],

},
{
  id: "31",
  slug: "tea-honey-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Чайний з ароматом меду»",

  description_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжними нотками меду",

  fullDescription_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжними нотками меду та ароматних спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-tea-honey.png",

  gallery: [
    "/products/gingerbread-tea-honey.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Мед",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 382,
    protein: 5,
    fat: 11,
    carbs: 65,
  },
  name_de: "Lebkuchen «Tee mit Honigaroma»",
  description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Honigaromen",
  fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Honig- und aromatischen Gewürznoten.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Honig", "Gewürze", "Glasur", "Eier"],

},
{
  id: "32",
  slug: "tea-mint-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Чайний з ароматом м’яти»",

  description_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжними нотками м’яти",

  fullDescription_ua:
    "М'який та духмяний пряник у солодкій глазурі та ніжними нотками м’яти й ароматних спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-tea-mint.png",

  gallery: [
    "/products/gingerbread-tea-mint.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "М’ята",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 380,
    protein: 5,
    fat: 11,
    carbs: 64,
  },
  name_de: "Lebkuchen «Tee mit Minzaroma»",
  description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Minznoten",
  fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Minz- und aromatischen Gewürznoten.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Minze", "Gewürze", "Glasur", "Eier"],

},
{
  id: "33",
  slug: "tea-baked-milk-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Чайний з ароматом пряженого молока»",

  description_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжним смаком пряженого молока",

  fullDescription_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжним смаком пряженого молока та ароматних спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-tea-baked-milk.png",

  gallery: [
    "/products/gingerbread-tea-baked-milk.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Пряжене молоко",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 384,
    protein: 5,
    fat: 11,
    carbs: 65,
  },
  name_de: "Lebkuchen «Tee mit Gebackene-Milch-Aroma»",
  description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zartem Gebackene-Milch-Geschmack",
  fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zartem Gebackene-Milch-Geschmack und aromatischen Gewürznoten.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Gebackene Milch", "Gewürze", "Glasur", "Eier"],

},
{
  id: "34",
  slug: "rye-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Житній»",

  description_ua:
    "М'який та духмяний житній пряник у солодкій глазурі",

  fullDescription_ua:
    "М'який та духмяний житній пряник у солодкій глазурі з ніжними нотками спецій та насиченим смаком житнього борошна.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-rye.png",

  gallery: [
    "/products/gingerbread-rye.png"
  ],

  weight: "300г",

  ingredients: [
    "Житнє борошно",
    "Цукор",
    "Спеції",
    "Глазур",
    "Яйця",
    "Мед",
  ],

  nutritionPer100g: {
    calories: 376,
    protein: 6,
    fat: 10,
    carbs: 63,
  },
  name_de: "Lebkuchen «Roggen»",
  description_de: "Weiches und aromatisches Roggenleben in süßer Glasur",
  fullDescription_de: "Weiches und aromatisches Roggenlebkuchen in süßer Glasur mit zarten Gewürznoten und intensivem Roggenmehlgeschmack.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Roggenmehl", "Zucker", "Gewürze", "Glasur", "Eier", "Honig"],

},
{
  id: "34",
  slug: "mini-glazed-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Міні в глазурі»",

  description_ua:
    "М'який та духмяний пряник у солодкій глазурі, який подобається і дорослим, і малечі",

  fullDescription_ua:
    "М'який та духмяний пряник у солодкій глазурі, має невелику форму, тому подобається і дорослим, і малечі.",

  shelfLife_ua: "30 діб",

  image: "/products/mini-glazed-gingerbread.png",

  gallery: [
    "/products/mini-glazed-gingerbread.png"
  ],

  weight: "250г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Мед",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 379,
    protein: 5,
    fat: 10,
    carbs: 64,
  },
  name_de: "Lebkuchen «Mini glasiert»",
  description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur, das Erwachsenen und Kindern gleichermaßen schmeckt",
  fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur, in kleiner Form, die Erwachsenen und Kindern gleichermaßen gefällt.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Honig", "Gewürze", "Glasur", "Eier"],

},
{
  id: "35",
  slug: "peach-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Персик»",

  description_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжними нотками персику",

  fullDescription_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжними нотками персику та ароматних спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-peach.png",

  gallery: [
    "/products/gingerbread-peach.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Персиковий ароматизатор",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 381,
    protein: 5,
    fat: 11,
    carbs: 64,
  },
  name_de: "Lebkuchen «Pfirsich»",
  description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Pfirsichnoten",
  fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Pfirsichnoten und aromatischen Gewürzen.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Pfirsich-Aroma", "Gewürze", "Glasur", "Eier"],

},
{
  id: "36",
  slug: "cinnamon-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник з корицею",

  description_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжними нотками кориці",

  fullDescription_ua:
    "М'який та духмяний пряник у солодкій глазурі з ніжними нотками кориці та ароматних спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-cinnamon.png",

  gallery: [
    "/products/gingerbread-cinnamon.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Кориця",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 382,
    protein: 5,
    fat: 11,
    carbs: 64,
  },
  name_de: "Lebkuchen mit Zimt",
  description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Zimtnoten",
  fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Zimtnoten und aromatischen Gewürzen.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Zimt", "Gewürze", "Glasur", "Eier"],

},
{
  id: "37",
  slug: "chocolate-gingerbread",
  category: "gingerbread",

  name_ua: "Пряник «Шоколадний»",

  description_ua:
    "М'який та духмяний пряник у солодкій глазурі з вираженим шоколадним смаком",

  fullDescription_ua:
    "М'який та духмяний пряник у солодкій глазурі з вираженим шоколадним смаком та ніжними нотками ароматних спецій.",

  shelfLife_ua: "30 діб",

  image: "/products/gingerbread-chocolate.png",

  gallery: [
    "/products/gingerbread-chocolate.png"
  ],

  weight: "300г",

  ingredients: [
    "Борошно",
    "Цукор",
    "Какао",
    "Шоколад",
    "Спеції",
    "Глазур",
    "Яйця",
  ],

  nutritionPer100g: {
    calories: 395,
    protein: 5,
    fat: 13,
    carbs: 66,
  },
  name_de: "Lebkuchen «Schokolade»",
  description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit ausgeprägtem Schokoladengeschmack",
  fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit ausgeprägtem Schokoladengeschmack und zarten aromatischen Gewürznoten.",
  shelfLife_de: "30 Tage",
  ingredients_de: ["Mehl", "Zucker", "Kakao", "Schokolade", "Gewürze", "Glasur", "Eier"],

},
  // Східні солодощі (Eastern Sweets)
  {
  id: "12",
  slug: "kozinak-homka",
  category: "eastern-sweets",
  name_ua: "Козинак «Хомка»",
  description_ua: "Хрусткий козинак із соняшникового насіння",
  fullDescription_ua:
    "Смачний та хрусткий козинак із добірного соняшникового насіння. Поєднання карамелізованого насіння та легкої солодкості створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/homkaPro2.png",
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
  name_de: "Kozinaki «Khomka»",
  description_de: "Knuspriger Kozinaki aus Sonnenblumenkernen",
  fullDescription_de: "Leckerer und knuspriger Kozinaki aus ausgewählten Sonnenblumenkernen. Die Kombination aus karamellisierten Kernen und leichter Süße schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "12 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Stärkesirup", "Zucker", "Sonnenblumenöl"],

},
  {
  id: "7",
  slug: "kozinak-homka-z-glazurovanym-dnom",
  category: "eastern-sweets",
  name_ua: "Козинак «Хомка» з глазурованим дном",
  description_ua:
    "Хрусткий козинак із добірного насіння соняшника з ніжним шоколадним глазурованим дном.",
    
  fullDescription_ua:
    "Смачний та хрусткий козинак із добірного насіння соняшника з ніжним глазурованим дном. Поєднання карамелізованого насіння та шоколадної глазурі створює насичений смак і приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/kozinak3.png",
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
  name_de: "Kozinaki «Khomka» mit glasiertem Boden",
  description_de: "Knuspriger Kozinaki aus ausgewählten Sonnenblumenkernen mit zartem Schokoladenboden.",
  fullDescription_de: "Leckerer und knuspriger Kozinaki aus ausgewählten Sonnenblumenkernen mit zartem glasiertem Boden. Die Kombination aus karamellisierten Kernen und Schokoladenglasur schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Konditorglasur", "Zucker", "Sirup", "Pflanzenöl"],

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

  image: "/products/homka_med3.png",

  gallery: [
    "/products/homka_med3.png",
    "/products/homka_med.png",
    "/products/homka_med2.png"
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
  name_de: "Kozinaki «Khomka» mit Honig",
  description_de: "Knuspriger Kozinaki aus ausgewählten Sonnenblumenkernen mit natürlichem Honig.",
  fullDescription_de: "Leckerer und knuspriger Kozinaki aus ausgewählten Sonnenblumenkernen mit natürlichem Honig. Die Kombination aus karamellisierten Kernen und Honigsüße schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Natürlicher Honig", "Zucker", "Sirup", "Pflanzenöl"],

},
{
  id: "10",
  slug: "kozinak-with-chocolate-crumb",
  category: "eastern-sweets",
  name_ua: "Козинак із шоколадною крихтою",
  description_ua: "Хрусткий козинак із насіння соняшника та шоколадною крихтою",
  fullDescription_ua:
    "Смачний та ароматний козинак із добірного насіння соняшника та шоколадної крихти. Гармонійне поєднання карамелізованого насіння створює насичений смак, а шматочки шоколаду додають ніжну солодку нотку та приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/kozinak_kroshka1.png",
  gallery: [
    "/products/kozinak_kroshka1.png",
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
  name_de: "Kozinaki mit Schokoladenbruch",
  description_de: "Knuspriger Kozinaki aus Sonnenblumenkernen und Schokoladenbruch",
  fullDescription_de: "Leckerer und aromatischer Kozinaki aus ausgewählten Sonnenblumenkernen und Schokoladenbruch. Die harmonische Kombination karamellisierter Kerne schafft einen intensiven Geschmack, und Schokoladenstücke fügen eine zarte süße Note und angenehmen Duft hinzu. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Schokoladenbruch", "Zucker", "Sirup", "Pflanzenöl"],

},

 {
  id: "13",
  slug: "homka-in-chocolate-glaze",
  category: "eastern-sweets",
  name_ua: "Цукерка «Хомка в кондитерській глазурі»",
  description_ua: "Хрусткі солодощі з насіння соняшника в ніжній кондитерській глазурі",
  fullDescription_ua:
    "Смачні та хрусткі східні солодощі з добірного насіння соняшника в ніжній кондитерській глазурі. Поєднання карамелізованого насіння та шоколадної глазурі створює насичений смак і приємний аромат. Ідеально смакують до чаю, кави або як солодкий перекус протягом дня.",
  
  image: "/products/homka_vglazuri3.png",

  gallery: [
    "/products/homka_vglazuri3.png",
    "/products/homka_vglzuri2.png",
    "/products/homka_vglazuri.png",
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
  name_de: "Süßigkeit «Khomka in Konditorglasur»",
  description_de: "Knusprige Süßigkeit aus Sonnenblumenkernen in zarter Konditorglasur",
  fullDescription_de: "Leckere und knusprige orientalische Süßigkeit aus ausgewählten Sonnenblumenkernen in zarter Konditorglasur. Die Kombination aus karamellisierten Kernen und Schokoladenglasur schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Konditorglasur", "Zucker", "Pflanzenöl", "Kakaopulver", "Magermilchpulver", "Stärkesirup", "Sonnenblumenöl", "Vanillin"],

},

{
  id: "11",
  slug: "kozinak-with-sesame",
  category: "eastern-sweets",
  name_ua: "Козинак із насіння соняшника та кунжуту",
  description_ua: "Хрусткий козинак із насіння соняшника та кунжуту",
  fullDescription_ua:
    "Апетитний козинак із добірного насіння соняшника та ароматного кунжуту. Поєднання карамелізованого насіння створює насичений солодкий смак, а кунжут додає ніжну горіхову нотку та приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/homka5.png",
  gallery: [
    "/products/homka5.png",
    "/products/homka1.png",
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
  name_de: "Kozinaki aus Sonnenblumenkernen und Sesam",
  description_de: "Knuspriger Kozinaki aus Sonnenblumenkernen und Sesam",
  fullDescription_de: "Appetitlicher Kozinaki aus ausgewählten Sonnenblumenkernen und aromatischem Sesam. Die Kombination karamellisierter Kerne schafft einen intensiven süßen Geschmack, während Sesam eine zarte Nussnote und angenehmen Duft hinzufügt. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Sesam", "Zucker", "Sirup", "Pflanzenöl"],

},
{
  id: "41",
  slug: "kozinak-with-sesame",
  category: "eastern-sweets",

  name_ua: "Козинак із кунжутом",

  description_ua:
    "Хрусткий козинак із добірного кунжуту",

  fullDescription_ua:
    "Апетитний козинак із ароматного кунжуту. Поєднання карамелізованого кунжуту створює насичений солодкий смак, ніжну горіхову нотку та приємний аромат. Ідеально смакує до чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/homka2.png",

  gallery: [
     "/products/homka2.png",
    "/products/homka1.png",
    "/products/homka3.png",
    "/products/sezamka300.png"
  ],

  weight: "230г/300г/2200г",

  ingredients: [
    "Кунжут",
    "Цукор",
    "Патока",
    "Рослинна олія"
  ],

  nutritionPer100g: {
    calories: 495,
    protein: 11.2,
    fat: 48.1,
    carbs: 36.5,
  },

  shelfLife_ua: "6 місяців від дати виробництва",
  name_de: "Kozinaki aus Sesam",
  description_de: "Knuspriger Kozinaki aus ausgewähltem Sesam",
  fullDescription_de: "Appetitlicher Kozinaki aus aromatischem Sesam. Die Kombination karamellisierten Sesams schafft einen intensiven süßen Geschmack, eine zarte Nussnote und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sesam", "Zucker", "Sirup", "Pflanzenöl"],

},
 {
  id: "9",
  slug: "amka-chocolate-sweets",
  category: "eastern-sweets",
  name_ua: "Солодощі «Амка» у шоколадній глазурі",
  description_ua: "Хрусткі солодощі з соняшникового насіння у ніжній шоколадній глазурі",
  fullDescription_ua:
    "Смачні та хрусткі солодощі «Амка» з добірного соняшникового насіння, вкриті ніжною шоколадною глазур’ю. Поєднання карамелізованого насіння та шоколадного покриття створює насичений солодкий смак і приємний аромат. Ідеально смакують до чаю, кави або як солодкий перекус протягом дня.",
  image: "/products/sezamka3.png",
  gallery: [
    "/products/sezamka3.png",
    "/products/sezamka2.png",
    "/products/sezamka.png",
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
  name_de: "Süßigkeit «Amka» in Schokoladenglasur",
  description_de: "Knusprige Süßigkeit aus Sonnenblumenkernen in zarter Schokoladenglasur",
  fullDescription_de: "Leckere und knusprige Süßigkeit «Amka» aus ausgewählten Sonnenblumenkernen, überzogen mit zarter Schokoladenglasur. Die Kombination karamellisierter Kerne und Schokoladenhülle schafft einen intensiven süßen Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Konditorglasur", "Kakaopulver", "Zucker", "Sirup", "Pflanzenöl", "Emulgatoren", "Vanillin-Aroma"],

},


 
{
  id: "14",
  slug: "homka-mix-box",
  category: "eastern-sweets",
  name_ua: "Мікс-бокс «Хомка»",
  description_ua: "Асорті з хрустких козинаків та цукерок у кондитерській глазурі",
  fullDescription_ua:
    "Мікс-бокс «Хомка» поєднує два улюблені смаки в одній упаковці: хрусткі козинаки з добірного насіння соняшника та ніжні цукерки в кондитерській глазурі. Карамелізоване насіння дарує насичений солодкий смак, а шоколадна глазур додає приємну ніжність і аромат. Ідеальний варіант для чаю, кави або як солодкий перекус протягом дня.",

  image: "/products/mix3.png",

  gallery: [
    "/products/mix3.png",
    "/products/mix2.png",
    "/products/mix.png",
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
  name_de: "Mix-Box «Khomka»",
  description_de: "Sortiment aus knusprigen Kozinaki und Süßigkeiten in Konditorglasur",
  fullDescription_de: "Mix-Box «Khomka» vereint zwei Lieblingsgeschmäcker in einer Verpackung: knusprige Kozinaki aus ausgewählten Sonnenblumenkernen und zarte Süßigkeiten in Konditorglasur. Karamellisierte Kerne schenken einen intensiven süßen Geschmack, und die Schokoladenglasur fügt angenehme Zartheit und Duft hinzu. Ideal zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Konditorglasur", "Zucker", "Pflanzenöl", "Kakaopulver", "Magermilchpulver", "Stärkesirup", "Sonnenblumenöl", "Vanillin"],

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

  image: "/products/kokosik.png",

  gallery: [
    "/products/kokosik.png",
    "/products/tropic-bar-open.png",
    "/products/tropic-bar-detail.png",
    "/products/tropic-bar.png",
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
  name_de: "Riegel «Tropik» in Konditorglasur",
  description_de: "Glasierte Süßigkeit mit zartem Milch-Kokos-Körper.",
  fullDescription_de: "Leckerer Riegel mit zartem Milch-Kokos-Körper in Konditorglasur. Die Kombination aus weicher Kokosfüllung und süßer Glasur schafft einen angenehmen cremigen Geschmack und zarten Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "120 Tage",
  ingredients_de: ["Kokosflocken", "Konditorglasur", "Milchbasis", "Zucker", "Pflanzenöl"],

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

  image: "/products/shofit2.png",

  gallery: [
    "/products/shofit2.png",
    "/products/shofit_br.png",
    
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
  name_de: "Maisriegel «Shofit»",
  description_de: "Knuspriger Riegel aus Maiskugeln in zarter Glasur.",
  fullDescription_de: "Leckerer und knuspriger Riegel aus einer Mischung von Maiskugeln mit Haferflocken, Leinsamen und Sesam in Karamellsirup. Die Kombination aus luftiger Textur und süßer Glasur schafft angenehmen Geschmack und Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "270 Tage",
  ingredients_de: ["Maiskugeln", "Haferflocken", "Leinsamen", "Sesam", "Karamellsirup", "Konditorglasur"],

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
  name_de: "Maisriegel «Shofit» mit Cranberry",
  description_de: "Knuspriger Riegel aus Maiskugeln und Cranberry in Karamellsirup.",
  fullDescription_de: "Leckerer und knuspriger Riegel aus einer Mischung von Maiskugeln mit Haferflocken, Leinsamen und Sesam mit Cranberry in Karamellsirup. Die Kombination aus luftiger Textur, leichter Cranberry-Säure und süßem Sirup schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "270 Tage",
  ingredients_de: ["Maiskugeln", "Haferflocken", "Cranberry", "Leinsamen", "Sesam", "Karamellsirup", "Konditorglasur"],

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
  name_de: "Maisriegel mit Kokos",
  description_de: "Knuspriger Maisriegel mit zartem Kokosgeschmack.",
  fullDescription_de: "Leckerer Riegel aus luftigen Maiskugeln mit Zugabe von Kokosflocken, Leinsamen und Sesam in aromatischem Karamellsirup. Die Kombination aus knuspriger Textur und zartem Kokosgeschmack schafft einen angenehmen süßen Duft und leichten tropischen Nachgeschmack. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "270 Tage",
  ingredients_de: ["Maiskugeln", "Kokosflocken", "Karamellsirup", "Leinsamen", "Sesam", "Zucker"],

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
  name_de: "Maisriegel mit Aprikosen",
  description_de: "Knuspriger Maisriegel mit natürlichen Aprikosen und Karamellgeschmack.",
  fullDescription_de: "Leckerer Riegel aus luftigen Maiskugeln mit Haferflocken, Sesam und Aprikosenstücken in aromatischem Karamellsirup. Die Kombination aus knuspriger Textur und zarter Fruchtsäure der Aprikosen schafft einen intensiven süßen Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "270 Tage",
  ingredients_de: ["Maiskugeln", "Haferflocken", "Aprikosen", "Sesam", "Karamellsirup", "Zucker"],

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
  name_de: "Sezamka",
  description_de: "Knuspriger Kozinaki aus Sonnenblumenkernen und Sesam",
  fullDescription_de: "Appetitlicher Kozinaki aus ausgewählten Sonnenblumenkernen und aromatischem Sesam. Die Kombination karamellisierter Kerne schafft einen intensiven süßen Geschmack, während Sesam eine zarte Nussnote und angenehmen Duft hinzufügt. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "6 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Sesam", "Zucker", "Sirup", "Pflanzenöl"],

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
  name_de: "Kozinaki «Khomka»",
  description_de: "Knuspriger Kozinaki aus Sonnenblumenkernen",
  fullDescription_de: "Leckerer und knuspriger Kozinaki aus ausgewählten Sonnenblumenkernen. Die Kombination karamellisierter Kerne und leichter Süße schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "12 Monate ab Herstellungsdatum",
  ingredients_de: ["Sonnenblumenkerne", "Stärkesirup", "Zucker", "Sonnenblumenöl"],

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
  name_de: "Riegel «Shokosik» in Konditorglasur",
  description_de: "Glasierte Süßigkeit mit zartem Milch-Kokos-Körper.",
  fullDescription_de: "Leckerer Riegel mit zartem Milch-Kokos-Körper in Konditorglasur. Die Kombination aus weicher Kokosfüllung und süßer Glasur schafft einen angenehmen cremigen Geschmack und zarten Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
  shelfLife_de: "120 Tage",
  ingredients_de: ["Kokosflocken", "Konditorglasur", "Milchbasis", "Zucker", "Pflanzenöl"],

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
