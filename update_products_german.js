const fs = require('fs');
const path = require('path');

// Read the products file
const productsPath = path.join(__dirname, 'data/products.ts');
let productsContent = fs.readFileSync(productsPath, 'utf8');

// German translations for all products
const germanTranslations = {
  "23": {
    name_de: "Knäckebrot «Körner»",
    description_de: "Knuspriges Vollkornknäckebrot mit Sonnenblumen-, Leinsamen und Sesam.",
    fullDescription_de: "Appetitliches und knuspriges Vollkornknäckebrot, verziert mit ausgewählten Sonnenblumen-, Leinsamen und Sesam. Die Kombination aus Getreidebasis und aromatischen Samen schafft einen intensiven Geschmack und angenehme knusprige Textur. Perfekt als leichter Snack oder Ergänzung zu Tee, Kaffee oder Käse.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Weizenmehl", "Sonnenblumenkerne", "Leinsamen", "Sesam", "Pflanzenöl", "Zucker", "Salz", "Triebmittel"]
  },
  "3": {
    name_de: "Keks «Amerikaner» mit Glasurstücken",
    description_de: "Knuspriges Mürbeteigkeks mit Stücken von Konditorglasur.",
    fullDescription_de: "Leckeres und aromatisches Mürbeteigkeks mit großzügigen Stücken von Konditorglasur. Die zarte bröckelige Textur und der intensive süße Geschmack schaffen eine perfekte Kombination zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "90 Tage",
    ingredients_de: ["Weizenmehl", "Konditorglasur", "Zucker", "Pflanzenöl", "Eipulver", "Milchbasis", "Triebmittel", "Vanillin"]
  },
  "22": {
    name_de: "Keks «Amerikaner» mit Rosinen",
    description_de: "Bröckeliges Mürbeteigkeks mit Stücken von süßen Rosinen.",
    fullDescription_de: "Leckeres und aromatisches Mürbeteigkeks mit ausgewählten Rosinen. Die zarte bröckelige Textur und die natürliche Süße der Rosinen schaffen einen harmonischen Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "90 Tage",
    ingredients_de: ["Weizenmehl", "Rosinen", "Zucker", "Pflanzenöl", "Eipulver", "Milchbasis", "Triebmittel", "Vanillin"]
  },
  "21": {
    name_de: "Keks «Elsa» mit Sesam",
    description_de: "Bröckeliges Keks mit zartem Geschmack und aromatischem Sesam.",
    fullDescription_de: "Leckeres und bröckeliges Keks mit aromatischem Sesam. Die zarte Textur und der angenehme süße Geschmack kombiniert mit einer feinen Nussnote des Sesams perfekt. Ideal zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Weizenmehl", "Sesam", "Zucker", "Pflanzenöl", "Eierprodukt", "Triebmittel"]
  },
  "2": {
    name_de: "«Elsa» mit Kokos und Glasurstücken",
    description_de: "Mürbeteigkeks mit Kokosfüllung und Stücken von Konditorglasur.",
    fullDescription_de: "Leckeres Mürbeteigkeks mit zarter Kokosfüllung und Stücken von Konditorglasur. Die Kombination aus knusprigem Keks, Kokosflocken und süßer Glasur schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Weizenmehl", "Kokosflocken", "Konditorglasur", "Zucker", "Pflanzenöl", "Kakaopulver", "Milchbasis"]
  },
  "4": {
    name_de: "Lebkuchen «Bayrischer mit Apfelmus»",
    description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Apfelmus",
    fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Apfelmus in süßer Glasur und zarten Noten von Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Apfelmus", "Gewürze", "Glasur", "Eier"]
  },
  "5": {
    name_de: "Lebkuchen «Bayrischer mit Aprikosencreme»",
    description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Aprikosencreme",
    fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Aprikosencreme in süßer Glasur und zarten Noten von Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Aprikosencreme", "Gewürze", "Glasur", "Eier"]
  },
  "6": {
    name_de: "Lebkuchen «Bayrischer mit Kirschcreme»",
    description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Kirschcreme",
    fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Kirschcreme in süßer Glasur und zarten Noten von Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Kirschcreme", "Gewürze", "Glasur", "Eier"]
  },
  "29": {
    name_de: "Lebkuchen «Bayrischer mit Himbeercreme»",
    description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Himbeercreme",
    fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Himbeercreme in süßer Glasur und zarten Noten von Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Himbeercreme", "Gewürze", "Glasur", "Eier"]
  },
  "30": {
    name_de: "Lebkuchen «Bayrischer mit Erdbeercreme»",
    description_de: "Weiches und aromatisches Lebkuchen mit großer Menge Erdbeercreme",
    fullDescription_de: "Weiches und aromatisches Lebkuchen mit großer Menge Erdbeercreme in süßer Glasur und zarten Noten von Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Erdbeercreme", "Gewürze", "Glasur", "Eier"]
  },
  "31": {
    name_de: "Lebkuchen «Tee mit Honigduft»",
    description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Honig",
    fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Honig und aromatischen Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Honig", "Gewürze", "Glasur", "Eier"]
  },
  "32": {
    name_de: "Lebkuchen «Tee mit Minzduft»",
    description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Minze",
    fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Minze und aromatischen Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Minze", "Gewürze", "Glasur", "Eier"]
  },
  "33": {
    name_de: "Lebkuchen «Tee mit Karamellmilchduft»",
    description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Karamellmilch",
    fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Karamellmilch und aromatischen Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Karamellmilch", "Gewürze", "Glasur", "Eier"]
  },
  "34": {
    name_de: "Lebkuchen «Roggen»",
    description_de: "Weiches und aromatisches Roggenlebkuchen in süßer Glasur",
    fullDescription_de: "Weiches und aromatisches Roggenlebkuchen in süßer Glasur mit zarten Noten von Gewürzen und intensivem Geschmack von Roggenmehl.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Roggenmehl", "Zucker", "Gewürze", "Glasur", "Eier", "Honig"]
  },
  "35": {
    name_de: "Lebkuchen «Pfirsich»",
    description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Pfirsich",
    fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Pfirsich und aromatischen Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Pfirsicharoma", "Gewürze", "Glasur", "Eier"]
  },
  "36": {
    name_de: "Lebkuchen mit Zimt",
    description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Zimt",
    fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit zarten Noten von Zimt und aromatischen Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Zimt", "Gewürze", "Glasur", "Eier"]
  },
  "12": {
    name_de: "Kozinaki «Homka»",
    description_de: "Knuspriges Kozinaki aus Sonnenblumenkernen",
    fullDescription_de: "Leckeres und knuspriges Kozinaki aus ausgewählten Sonnenblumenkernen. Die Kombination aus karamellisierten Kernen und leichter Süße schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "12 Monate ab Herstellungsdatum",
    ingredients_de: ["Sonnenblumenkerne", "Stärkesirup", "Zucker", "Sonnenblumenöl"]
  },
  "7": {
    name_de: "Kozinaki «Homka» mit glasiertem Boden",
    description_de: "Knuspriges Kozinaki aus Sonnenblumenkernen mit zartem glasiertem Schokoladenboden.",
    fullDescription_de: "Leckeres und knuspriges Kozinaki aus ausgewählten Sonnenblumenkernen mit zartem glasiertem Boden. Die Kombination aus karamellisierten Kernen und Schokoladenglasur schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "6 Monate ab Herstellungsdatum",
    ingredients_de: ["Sonnenblumenkerne", "Konditorglasur", "Zucker", "Sirup", "Pflanzenöl"]
  },
  "8": {
    name_de: "Kozinaki «Homka» mit Honig",
    description_de: "Knuspriges Kozinaki aus Sonnenblumenkernen und natürlichem Honig.",
    fullDescription_de: "Leckeres und knuspriges Kozinaki aus ausgewählten Sonnenblumenkernen mit Zusatz von natürlichem Honig. Die Kombination aus karamellisierten Kernen und Honig-Süße schafft einen intensiven Geschmack und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "6 Monate ab Herstellungsdatum",
    ingredients_de: ["Sonnenblumenkerne", "Natürlicher Honig", "Zucker", "Sirup", "Pflanzenöl"]
  },
  "10": {
    name_de: "Kozinaki mit Schokoladenkrümeln",
    description_de: "Knuspriges Kozinaki aus Sonnenblumenkernen und Schokoladenkrümeln",
    fullDescription_de: "Leckeres und aromatisches Kozinaki aus ausgewählten Sonnenblumenkernen und Schokoladenkrümeln. Die harmonische Kombination aus karamellisierten Kernen schafft einen intensiven Geschmack, und Schokoladenstücke fügen eine zarte süße Note und angenehmen Duft hinzu. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "6 Monate ab Herstellungsdatum",
    ingredients_de: ["Sonnenblumenkerne", "Schokoladenkrümel", "Zucker", "Sirup", "Pflanzenöl"]
  },
  "37a": {
    name_de: "Süßigkeit «Sonnenblume»",
    description_de: "Glasierte Süßigkeit mit Kern aus karamellisierten Sonnenblumenkernen",
    fullDescription_de: "Glasierte Süßigkeit mit knusprigem Kern aus karamellisierten Sonnenblumenkernen und zarter süßer Glasur.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Sonnenblumenkerne", "Zucker", "Karamell", "Glasur"]
  },
  "13": {
    name_de: "Süßigkeit «Homka in Konditorglasur»",
    description_de: "Knusprige Süßigkeiten aus Sonnenblumenkernen in zarter Konditorglasur",
    fullDescription_de: "Knusprige und leckere Süßigkeiten aus Sonnenblumenkernen in zartar Konditorglasur mit einem Hauch von Vanille.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Sonnenblumenkerne", "Konditorglasur", "Zucker", "Sirup", "Milchbasis", "Vanillin"]
  },
  "14": {
    name_de: "Süßigkeit «Homka in Schokoladenglasur»",
    description_de: "Knusprige Süßigkeiten aus Sonnenblumenkernen in Schokoladenglasur",
    fullDescription_de: "Knusprige und leckere Süßigkeiten aus Sonnenblumenkernen in Schokoladenglasur mit intensivem Schokoladengeschmack.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Sonnenblumenkerne", "Schokoladenglasur", "Zucker", "Sirup", "Kakao", "Milchbasis"]
  },
  "15": {
    name_de: "Süßigkeit «Homka in heller Glasur»",
    description_de: "Knusprige Süßigkeiten aus Sonnenblumenkernen in heller Glasur",
    fullDescription_de: "Knusprige und leckere Süßigkeiten aus Sonnenblumenkernen in heller, cremiger Glasur.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Sonnenblumenkerne", "Helle Glasur", "Zucker", "Sirup", "Milchbasis"]
  },
  "16": {
    name_de: "Süßigkeit «Homka in Kokosglasur»",
    description_de: "Knusprige Süßigkeiten aus Sonnenblumenkernen in Kokosglasur",
    fullDescription_de: "Knusprige und leckere Süßigkeiten aus Sonnenblumenkernen in Kokosglasur mit Kokosflocken.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Sonnenblumenkerne", "Kokosglasur", "Zucker", "Sirup", "Kokosflocken"]
  },
  "11": {
    name_de: "Süßigkeit «Granate»",
    description_de: "Glasierte Süßigkeit mit Granatapfel-Geschmack",
    fullDescription_de: "Delikate glasierte Süßigkeit mit zartem Granatapfel-Geschmack und süßer Glasur.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Granatapfel-Aroma", "Zucker", "Glasur", "Milchbasis"]
  },
  "38": {
    name_de: "Süßigkeit «Rosenblatt»",
    description_de: "Glasierte Süßigkeit mit zartem Rosenaroma",
    fullDescription_de: "Zarte und romantische glasierte Süßigkeit mit feinem Rosenaroma in süßer Glasur.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Rosen-Aroma", "Zucker", "Glasur", "Milchbasis"]
  },
  "39": {
    name_de: "Süßigkeit «Shoreh»",
    description_de: "Weiches Milch-Erdnuss-Nougat mit glasiertem Boden",
    fullDescription_de: "Zartes Milch-Erdnuss-Nougat mit knusprigen Erdnussstücken und glasiertem Boden in süßer Schokoladenglasur.",
    shelfLife_de: "180 Tage",
    ingredients_de: ["Erdnüsse", "Milchmasse", "Zucker", "Schokoladenglasur"]
  },
  "40": {
    name_de: "Süßigkeit «Shoshik»",
    description_de: "Glasierte Süßigkeit mit Erdnuss-Milch-Kern",
    fullDescription_de: "Glasierte Süßigkeit mit zartem Erdnuss-Milch-Kern in süßer Schokoladenglasur.",
    shelfLife_de: "180 Tage",
    ingredients_de: ["Erdnüsse", "Milchmasse", "Zucker", "Schokoladenglasur"]
  },
  "26": {
    name_de: "Nuss-Karamell-Süßigkeit",
    description_de: "Delikate Nuss-Karamell-Süßigkeit mit ausgewählten Nüssen",
    fullDescription_de: "Zarte Süßigkeit mit cremiger Karamell-Nuss-Masse und hochwertigem Schokoladenbeschlag.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Nüsse", "Karamell", "Zucker", "Glasur"]
  },
  "27": {
    name_de: "Sezamka",
    description_de: "Knuspriges Kozinaki aus Sonnenblumenkernen und Sesam",
    fullDescription_de: "Appetitliches Kozinaki aus ausgewählten Sonnenblumenkernen und aromatischem Sesam. Die Kombination aus karamellisierten Kernen schafft einen intensiven Geschmack, und Sesam verleiht eine zarte Nussnote und angenehmen Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "6 Monate ab Herstellungsdatum",
    ingredients_de: ["Sonnenblumenkerne", "Sesam", "Zucker", "Sirup", "Pflanzenöl"]
  },
  "28": {
    name_de: "Schokostab «Shokosik» in Konditorglasur",
    description_de: "Glasierte Süßigkeiten mit zartem Milch-Kokos-Kern.",
    fullDescription_de: "Leckerer Schokostab mit zartem Milch-Kokos-Kern in Konditorglasur. Die Kombination aus weicher Kokosfüllung und süßer Glasur schafft einen angenehmen cremigen Geschmack und zarten Duft. Perfekt zu Tee, Kaffee oder als süßer Snack während des Tages.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Kokosflocken", "Konditorglasur", "Milchbasis", "Zucker", "Pflanzenöl"]
  }
};

// Update interface to include German fields
const oldInterface = `export interface Product {
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
}`;

const newInterface = `export interface Product {
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
}`;

productsContent = productsContent.replace(oldInterface, newInterface);

console.log('✅ Product interface updated with German fields');
console.log(`📝 Ready to add translations for ${Object.keys(germanTranslations).length} products`);

// Write updated content
fs.writeFileSync(productsPath, productsContent);
console.log('✅ Products file updated');
