const fs = require('fs');

// German translations mapping for products
const productTranslations = {
  // Cookies
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

  // Gingerbread
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
  "34a": {
    name_de: "Lebkuchen «Roggen»",
    description_de: "Weiches und aromatisches Roggenlebkuchen in süßer Glasur",
    fullDescription_de: "Weiches und aromatisches Roggenlebkuchen in süßer Glasur mit zarten Noten von Gewürzen und intensivem Geschmack von Roggenmehl.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Roggenmehl", "Zucker", "Gewürze", "Glasur", "Eier", "Honig"]
  },
  "34b": {
    name_de: "Lebkuchen «Mini in Glasur»",
    description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur, gefällt Erwachsenen und Kindern",
    fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur, hat eine kleine Form, daher gefällt es Erwachsenen und Kindern.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Honig", "Gewürze", "Glasur", "Eier"]
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
  "37": {
    name_de: "Lebkuchen «Schokolade»",
    description_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit ausgeprägtem Schokoladengeschmack",
    fullDescription_de: "Weiches und aromatisches Lebkuchen in süßer Glasur mit ausgeprägtem Schokoladengeschmack und zarten Noten von aromatischen Gewürzen.",
    shelfLife_de: "30 Tage",
    ingredients_de: ["Mehl", "Zucker", "Kakaos", "Schokolade", "Gewürze", "Glasur", "Eier"]
  },

  // Candies
  "37": {
    name_de: "Süßigkeit «Sonnenblume»",
    description_de: "Glasierte Süßigkeit mit Kern aus karamellisiertem Sonnenblumenkerne",
    fullDescription_de: "Glasierte Süßigkeit mit knusprigem Kern aus karamellisierten Sonnenblumenkernen und zarter süßer Glasur.",
    shelfLife_de: "120 Tage",
    ingredients_de: ["Sonnenblumenkerne", "Zucker", "Karamell", "Glasur"]
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
  }
};

console.log('✅ German product translations ready');
console.log(`📝 Translations prepared for ${Object.keys(productTranslations).length} products`);
