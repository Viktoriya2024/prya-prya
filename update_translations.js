const fs = require('fs');

// Read existing translations
const ukData = JSON.parse(fs.readFileSync('public/locales/uk/common.json', 'utf8'));
const deData = JSON.parse(fs.readFileSync('public/locales/de/common.json', 'utf8'));

// Add new sections to Ukrainian
ukData.about = {
  "hero": {
    "title": "Про нас",
    "description": "Кондитерська фабрика ТМ «Пря-Пря» — це якість, смак та традиції. Ми створюємо натуральні кондитерські вироби, які радують наших клієнтів вже понад 8 років. Кожен продукт виготовляється з любов'ю та турботою про ваше здоров'я."
  },
  "factory": {
    "title": "Кондитерська фабрика ТМ «Пря-Пря»",
    "description": "Заснована в 2015 році, є одним з найбільш динамічно розвиваються кондитерським підприємством України. Ми використовуємо передові технології у виробництві кондитерських виробів, а також традиційні рецепти приготування домашньої випічки. У рецептурі нашої продукції об'єднані найкращі традиції приготування кондитерських виробів України та провідних пекарських рецептур світу."
  },
  "production": {
    "title": "Виробництво",
    "features": ["⚙️ Сучасне обладнання", "✔ Контроль якості", "🌿 Натуральні інгредієнти"],
    "description": "Наше виробництво оснащене найсучаснішим обладнанням провідних світових виробників. Ми дотримуємось найвищих стандартів якості на всіх етапах виробничого процесу.",
    "cta": "Дізнатися більше"
  },
  "products": {
    "title": "Наша продукція",
    "description": "Ми пропонуємо широкий асортимент кондитерських виробів: печиво, пряники, вафлі, зефір та багато іншого. Продукція виготовляється на найсучаснішому обладнанні провідних світових виробників. Використовуються лише екологічно чисті інгредієнти.",
    "cta": "Переглянути продукцію"
  },
  "quality": {
    "title": "Якість",
    "description": "Компанія серйозно підходить до управління якістю продукції. Вся продукція проходить багаторівневий контроль якості. Ми маємо всі необхідні сертифікати та дозволи. Наша мета — забезпечити найвищу якість кондитерських виробів, які будуть радувати наших покупців своїм смаком та свіжістю."
  },
  "staff": {
    "title": "Співробітники",
    "description": "Підприємство дбає про постійне підвищення кваліфікації співробітників. Наша команда складається з висококваліфікованих фахівців, які люблять свою справу. Ми створюємо комфортні умови праці та підтримуємо дружню атмосферу в колективі. Професіоналізм наших співробітників — запорука якості нашої продукції."
  },
  "values": {
    "titles": ["Якість", "Натуральність", "Смак", "Безпека"],
    "label": "Наш підхід",
    "heading": "Наші цінності",
    "description": "Ми з повною відповідальністю підходимо до кожного етапу роботи та прагнемо до того, щоб наша продукція дарувала споживачам бездоганний смак, стабільну якість і впевненість у безпеці кожного виробу."
  },
  "partners": {
    "partners": ["METRO", "КЛАСС", "Foodex", "Lais", "AGROSMIX GRUP"],
    "title": "Нам довіряють",
    "description": "Ми співпрацюємо з провідними торговими мережами та дистриб'юторами в Україні та Європі"
  }
};

ukData.productionPage = {
  "hero": {
    "company": "Пря-Пря",
    "title": "Виробництво",
    "description": "Сучасне кондитерське виробництво в Україні з автоматизованими лініями, контролем якості та натуральними інгредієнтами.",
    "cta": "Дізнатися більше"
  },
  "dough": {
    "stage": "Етап 1",
    "title": "Цех формування тіста",
    "text1": "На цьому етапі відбувається підготовка та формування тіста для майбутніх кондитерських виробів. Сучасне обладнання забезпечує точне дозування інгредієнтів та стабільну консистенцію тіста.",
    "text2": "Контроль якості на цьому етапі дозволяє створити ідеальну основу для печива та пряників, що гарантує стабільний смак та високу якість продукції."
  },
  "baking": {
    "stage": "Етап 2",
    "title": "Цех випікання",
    "text1": "На цьому етапі сформовані вироби надходять до печей, де відбувається процес випікання пряників, печива та інших кондитерських виробів.",
    "text2": "Контроль температури, часу випікання та технологічних параметрів дозволяє досягти рівномірної структури, золотистого кольору, приємного аромату та стабільної якості кожної партії продукції."
  },
  "forming": {
    "stage": "Етап 3",
    "title": "Цех глазурування продукції",
    "text1": "На цьому етапі готові вироби після випікання надходять до глазурувальної лінії, де покриваються рівномірним шаром шоколадної або цукрової глазурі. Сучасне обладнання забезпечує точне нанесення покриття та стабільну якість кожної партії продукції.",
    "text2": "Контроль температури, густини глазурі та швидкості конвеєра дозволяє досягти ідеального зовнішнього вигляду, привабливого блиску та насиченого смаку виробів. Після глазурування продукція направляється на охолодження для фіксації покриття та підготовки до подальшого пакування."
  },
  "packing": {
    "stage": "Етап 5",
    "title": "Цех пакування продукції",
    "text1": "У цьому цеху готові вироби автоматично пакуються у флоу-пак упаковку, що забезпечує збереження свіжості, якості та зручність транспортування продукції.",
    "text2": "Автоматизоване пакування гарантує герметичність, естетичний вигляд та тривалий термін зберігання кожного виробу, зберігаючи їх свіжість та смакові якості."
  },
  "finalBlock": {
    "features": [
      {"title": "Сучасне обладнання", "description": "Автоматизовані лінії провідних виробників"},
      {"title": "Контроль якості", "description": "Багаторівневий контроль на кожному етапі"},
      {"title": "Надійне пакування", "description": "Герметичне пакування для тривалого зберігання"}
    ],
    "label": "Переваги виробництва",
    "title": "Технології, яким довіряють",
    "description": "Поєднання сучасного обладнання, автоматизованих виробничих ліній та контролю якості дозволяє створювати продукцію стабільної якості, що відповідає сучасним стандартам виробництва."
  }
};

// Add new sections to German
deData.about = {
  "hero": {
    "title": "Über uns",
    "description": "Die Confiserie-Fabrik TM «Pria-Pria» ist Qualität, Geschmack und Tradition. Wir schaffen natürliche Confiserie-Produkte, die unsere Kunden seit mehr als 8 Jahren erfreuen. Jedes Produkt wird mit Liebe und Sorgfalt um Ihre Gesundheit hergestellt."
  },
  "factory": {
    "title": "Confiserie-Fabrik TM «Pria-Pria»",
    "description": "Gegründet 2015, gehören wir zu den dynamischsten Confiserie-Unternehmen der Ukraine. Wir nutzen modernste Technologien in der Herstellung unserer Confiserie-Produkte und kombinieren diese mit traditionellen Rezepten des Hausbackens. In unseren Produktrezepturen vereinen sich die besten Traditionen der ukrainischen Confiserie-Kunst mit führenden internationalen Backrezepten."
  },
  "production": {
    "title": "Produktion",
    "features": ["⚙️ Moderne Ausrüstung", "✔ Qualitätskontrolle", "🌿 Natürliche Zutaten"],
    "description": "Unser Betrieb ist mit der modernsten Ausrüstung führender Hersteller ausgestattet. Wir halten die höchsten Qualitätsstandards in allen Phasen des Produktionsprozesses ein.",
    "cta": "Mehr erfahren"
  },
  "products": {
    "title": "Unsere Produkte",
    "description": "Wir bieten ein breites Sortiment an Confiserie-Produkten an: Kekse, Lebkuchen, Waffeln, Marshmallows und vieles mehr. Die Produkte werden auf der modernsten Ausrüstung führender Hersteller hergestellt. Nur ökologisch saubere Zutaten werden verwendet.",
    "cta": "Produkte durchsuchen"
  },
  "quality": {
    "title": "Qualität",
    "description": "Das Unternehmen geht ernsthaft an die Qualitätskontrolle heran. Alle Produkte durchlaufen eine mehrstufige Qualitätskontrolle. Wir haben alle erforderlichen Zertifikate und Genehmigungen. Unser Ziel ist es, die höchste Qualität von Confiserie-Produkten zu gewährleisten, die unsere Kunden durch ihren Geschmack und ihre Frische erfreuen."
  },
  "staff": {
    "title": "Mitarbeiter",
    "description": "Das Unternehmen kümmert sich um die ständige Weiterbildung der Mitarbeiter. Unser Team besteht aus hochqualifizierten Fachleuten, die ihre Arbeit lieben. Wir schaffen komfortable Arbeitsbedingungen und unterstützen eine freundliche Atmosphäre im Team. Der Professionalismus unserer Mitarbeiter ist die Garantie für die Qualität unserer Produkte."
  },
  "values": {
    "titles": ["Qualität", "Natürlichkeit", "Geschmack", "Sicherheit"],
    "label": "Unser Ansatz",
    "heading": "Unsere Werte",
    "description": "Wir gehen mit voller Verantwortung an jeden Arbeitsschritt heran und streben danach, dass unsere Produkte den Verbrauchern tadellosen Geschmack, gleichbleibende Qualität und Sicherheit bei jedem Produkt bieten."
  },
  "partners": {
    "partners": ["METRO", "KLASS", "Foodex", "Lais", "AGROSMIX GROUP"],
    "title": "Unsere Partner vertrauen uns",
    "description": "Wir arbeiten mit führenden Einzelhandelsketten und Distributoren in der Ukraine und Europa zusammen"
  }
};

deData.productionPage = {
  "hero": {
    "company": "Pria-Pria",
    "title": "Produktion",
    "description": "Moderne Confiserie-Produktion in der Ukraine mit automatisierten Linien, Qualitätskontrolle und natürlichen Zutaten.",
    "cta": "Mehr erfahren"
  },
  "dough": {
    "stage": "Stufe 1",
    "title": "Teigvorbereitungsanlage",
    "text1": "In dieser Phase werden der Teig für zukünftige Confiserie-Produkte vorbereitet und geformt. Moderne Ausrüstung sorgt für genaue Dosierung der Zutaten und eine stabile Teigkonsistenz.",
    "text2": "Die Qualitätskontrolle in dieser Phase ermöglicht es uns, eine ideale Grundlage für Kekse und Lebkuchen zu schaffen, was stabilen Geschmack und hohe Produktqualität garantiert."
  },
  "baking": {
    "stage": "Stufe 2",
    "title": "Backanlage",
    "text1": "In dieser Phase gelangen die geformten Produkte in die Öfen, wo der Backprozess für Lebkuchen, Kekse und andere Confiserie-Produkte stattfindet.",
    "text2": "Die Kontrolle von Temperatur, Backzeit und technologischen Parametern ermöglicht es, eine gleichmäßige Struktur, goldene Farbe, angenehmen Aroma und stabile Qualität jedes Produktcharges zu erreichen."
  },
  "forming": {
    "stage": "Stufe 3",
    "title": "Glasuranlage",
    "text1": "In dieser Phase gelangen die fertigen Produkte nach dem Backen zur Glasurlinie, wo sie mit einer gleichmäßigen Schicht aus Schokoladen- oder Zuckerglasur überzogen werden. Moderne Ausrüstung sorgt für genaues Auftragen der Beschichtung und stabile Qualität jedes Produktcharges.",
    "text2": "Die Kontrolle von Temperatur, Glasurdichte und Fördergeschwindigkeit ermöglicht es, ein ideales Aussehen, attraktiven Glanz und intensiven Geschmack der Produkte zu erreichen. Nach der Glasur wird die Produktion zur Kühlung geleitet, um die Beschichtung zu fixieren und auf das weitere Verpacken vorzubereiten."
  },
  "packing": {
    "stage": "Stufe 5",
    "title": "Verpackungsanlage",
    "text1": "In dieser Abteilung werden die fertigen Produkte automatisch in Flow-Pack-Verpackungen verpackt, um Frische, Qualität und Transportkomfort zu gewährleisten.",
    "text2": "Die automatisierte Verpackung garantiert Hermetik, ästhetisches Aussehen und lange Haltbarkeit jedes Produkts und bewahrt dessen Frische und Geschmacksqualitäten."
  },
  "finalBlock": {
    "features": [
      {"title": "Moderne Ausrüstung", "description": "Automatisierte Linien führender Hersteller"},
      {"title": "Qualitätskontrolle", "description": "Mehrstufige Kontrolle in jeder Phase"},
      {"title": "Zuverlässige Verpackung", "description": "Hermetische Verpackung für lange Lagerung"}
    ],
    "label": "Produktionsvorteile",
    "title": "Technologien, denen vertraut wird",
    "description": "Die Kombination moderner Ausrüstung, automatisierter Produktionslinien und Qualitätskontrolle ermöglicht es uns, Produkte stabiler Qualität zu schaffen, die modernen Produktionsstandards entsprechen."
  }
};

// Write updated files
fs.writeFileSync('public/locales/uk/common.json', JSON.stringify(ukData, null, 2));
fs.writeFileSync('public/locales/de/common.json', JSON.stringify(deData, null, 2));
console.log('✅ Ukrainian translations updated');
console.log('✅ German translations updated');

// Add Products page translations
ukData.products = {
  "hero": {
    "title": "Наша продукція",
    "description": "Широкий асортимент натуральних кондитерських виробів високої якості. Печиво, пряники, вафлі та багато іншого — все для вашої насолоди.",
    "cta": "Дивитись каталог"
  },
  "categories": {
    "title": "Категорії продукції",
    "description": "Оберіть категорію, щоб переглянути асортимент",
    "items": ["Печиво", "Пряники", "Східні солодощі", "Цукерки", "Новинки"]
  },
  "quality": {
    "title": "Чому обирають нас",
    "subtitle": "Якість та натуральність — наші головні пріоритети",
    "features": [
      {
        "title": "Натуральні інгредієнти",
        "description": "Використовуємо лише екологічно чисті інгредієнти без ГМО та штучних добавок"
      },
      {
        "title": "Контроль якості",
        "description": "Кожен продукт проходить багаторівневий контроль якості на всіх етапах виробництва"
      },
      {
        "title": "Свіжість продукції",
        "description": "Виробляємо щодня невеликими партіями для гарантії свіжості"
      },
      {
        "title": "Сучасне обладнання",
        "description": "Використовуємо найсучасніше обладнання провідних світових виробників"
      }
    ]
  },
  "cta": {
    "title": "Хочете замовити нашу продукцію?",
    "description": "Зв'яжіться з нами, щоб дізнатися більше про асортимент, умови співпраці та можливості замовлення великих партій для вашого бізнесу.",
    "contactBtn": "Зв'язатися з нами",
    "learnBtn": "Дізнатися більше"
  }
};

deData.products = {
  "hero": {
    "title": "Unsere Produkte",
    "description": "Breites Sortiment an hochwertigen natürlichen Confiserie-Produkten. Kekse, Lebkuchen, Waffeln und vieles mehr — alles für Ihren Genuss.",
    "cta": "Katalog anzeigen"
  },
  "categories": {
    "title": "Produktkategorien",
    "description": "Wählen Sie eine Kategorie, um das Sortiment zu durchsuchen",
    "items": ["Kekse", "Lebkuchen", "Orientalische Süßigkeiten", "Bonbons", "Neuheiten"]
  },
  "quality": {
    "title": "Warum uns wählen",
    "subtitle": "Qualität und Natürlichkeit sind unsere Hauptprioritäten",
    "features": [
      {
        "title": "Natürliche Zutaten",
        "description": "Wir verwenden nur ökologisch saubere Zutaten ohne GMO und künstliche Zusatzstoffe"
      },
      {
        "title": "Qualitätskontrolle",
        "description": "Jedes Produkt durchläuft eine mehrstufige Qualitätskontrolle in allen Produktionsphasen"
      },
      {
        "title": "Frische der Produkte",
        "description": "Wir produzieren täglich in kleinen Chargen, um Frische zu garantieren"
      },
      {
        "title": "Moderne Ausrüstung",
        "description": "Wir verwenden die modernste Ausrüstung führender Hersteller"
      }
    ]
  },
  "cta": {
    "title": "Möchten Sie unsere Produkte bestellen?",
    "description": "Kontaktieren Sie uns, um mehr über das Sortiment, Geschäftsbedingungen und Möglichkeiten für die Bestellung großer Chargen für Ihr Geschäft zu erfahren.",
    "contactBtn": "Kontaktieren Sie uns",
    "learnBtn": "Mehr erfahren"
  }
};

// Write updated files
fs.writeFileSync('public/locales/uk/common.json', JSON.stringify(ukData, null, 2));
fs.writeFileSync('public/locales/de/common.json', JSON.stringify(deData, null, 2));
console.log('✅ Products page translations added');

// Add product categories and detail pages translations
ukData.productCategories = {
  "cookies": {
    "title": "Печиво",
    "subtitle": "Класичні печива з найкращих інгредієнтів"
  },
  "gingerbread": {
    "title": "Пряники",
    "subtitle": "Традиційні медові пряники за секретним рецептом"
  },
  "eastern-sweets": {
    "title": "Східні солодощі",
    "subtitle": "Преміум козинаки та дегустаційні смеси"
  },
  "candies": {
    "title": "Цукерки",
    "subtitle": "Розкішні цукерки для найвибагливіших гурманів"
  },
  "new": {
    "title": "Новинки",
    "subtitle": "Новітні смаки та комбінації"
  }
};

ukData.productDetail = {
  "loading": "Завантаження продукту...",
  "notFound": "Продукт не знайден",
  "notAvailable": "Вибачте, цей продукт більше не доступний",
  "backToProducts": "Назад до продукції",
  "products": "Продукція",
  "sizeLabel": "Розмір упаковки",
  "nutritionLabel": "Харчова цінність на 100г",
  "calories": "Калорійність",
  "caloriesUnit": "ккал",
  "protein": "Білки",
  "proteinUnit": "г",
  "fat": "Жири",
  "fatUnit": "г",
  "carbs": "Вуглеводи",
  "carbsUnit": "г",
  "ingredients": "Компоненти",
  "detailsButton": "Детальніше"
};

ukData.productGrid = {
  "loading": "Завантаження продуктів..."
};

deData.productCategories = {
  "cookies": {
    "title": "Kekse",
    "subtitle": "Klassische Kekse aus den besten Zutaten"
  },
  "gingerbread": {
    "title": "Lebkuchen",
    "subtitle": "Traditionelle Honiglebkuchen nach Geheimrezept"
  },
  "eastern-sweets": {
    "title": "Orientalische Süßigkeiten",
    "subtitle": "Premium Kozinaks und Verkostungsmischungen"
  },
  "candies": {
    "title": "Bonbons",
    "subtitle": "Luxus Bonbons für die anspruchsvollsten Genießer"
  },
  "new": {
    "title": "Neuheiten",
    "subtitle": "Neue Geschmäcker und Kombinationen"
  }
};

deData.productDetail = {
  "loading": "Produkt wird geladen...",
  "notFound": "Produkt nicht gefunden",
  "notAvailable": "Entschuldigung, dieses Produkt ist nicht mehr verfügbar",
  "backToProducts": "Zurück zu Produkten",
  "products": "Produkte",
  "sizeLabel": "Verpackungsgröße",
  "nutritionLabel": "Nährwerte pro 100g",
  "calories": "Kalorien",
  "caloriesUnit": "kcal",
  "protein": "Protein",
  "proteinUnit": "g",
  "fat": "Fett",
  "fatUnit": "g",
  "carbs": "Kohlenhydrate",
  "carbsUnit": "g",
  "ingredients": "Zutaten",
  "detailsButton": "Details"
};

deData.productGrid = {
  "loading": "Produkte werden geladen..."
};

// Write updated files
fs.writeFileSync('public/locales/uk/common.json', JSON.stringify(ukData, null, 2));
fs.writeFileSync('public/locales/de/common.json', JSON.stringify(deData, null, 2));
console.log('✅ Product categories and detail translations added');
