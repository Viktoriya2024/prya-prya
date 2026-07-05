# COMPREHENSIVE COMPONENT TRANSLATION UPDATE GUIDE

## Status: Translation Keys Added ✅

All translation keys have been added to `/public/locales/uk/common.json` for:

- About page components
- Production page components
- Products page components
- Contact forms
- Policy pages

## Next Steps: Update Components to Use i18n

### Pattern for Updating Any Component:

```typescript
// BEFORE (with hardcoded strings):
export default function MyComponent() {
  return <h2>Мій заголовок</h2>;
}

// AFTER (with i18n):
"use client";
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation();
  return <h2>{t("section.subsection.key")}</h2>;
}
```

---

## Components to Update (Priority Order)

### ABOUT PAGE (8 files)

1. **AboutHero.tsx** - Main title and description
2. **AboutFactory.tsx** - Factory info section
3. **AboutProduction.tsx** - Production section with features
4. **AboutProducts.tsx** - Products overview
5. **AboutQuality.tsx** - Quality section
6. **AboutStaff.tsx** - Staff section
7. **AboutValues.tsx** - Values section with 4 value cards
8. **AboutPartners.tsx** - Partners section

### PRODUCTION PAGE (6 files)

1. **Hero.tsx** - Hero with title and description
2. **DoughSection.tsx** - Stage 1 with text
3. **BakingSection.tsx** - Stage 2 with text
4. **FormingSection.tsx** - Stage 3 with text
5. **Packing.tsx** - Stage 5 with text
6. **ProductionFinalBlock.tsx** - Features block

### PRODUCTS PAGE (8 files)

1. **ProductsHero.tsx** - Title and description
2. **ProductCategories.tsx** - Category names
3. **ProductCard.tsx** - "Детальніше" button
4. **ProductGrid.tsx** - Loading and empty states
5. **ProductsCTA.tsx** - CTA section
6. **ProductsQuality.tsx** - Quality features
7. **CategoryBanner.tsx** - Breadcrumb
8. **ProductImageGallery.tsx** - Image gallery aria-labels

### CONTACT PAGE (1 file)

1. **app/contact/page.tsx** - Contact form page (route already updated)

### POLICY PAGES (3 files)

1. **app/privacy-policy/page.tsx** - Privacy policy content
2. **app/cookie-policy/page.tsx** - Cookie policy content
3. **app/terms-of-use/page.tsx** - Terms of use content

---

## Translation Keys Available

All keys follow this structure:

```javascript
t("section.subsection.key");

// About:
t("about.hero.title");
t("about.factory.title");
t("about.production.features"); // Array of features
t("about.values.titles"); // Array: ["Якість", "Натуральність", ...]

// Production:
t("productionPage.dough.title");
t("productionPage.baking.text1");

// Products:
t("products.categories.items"); // Array of category names
t("products.cta.title");

// Shared:
t("shared.emptyState.title");
t("shared.loadingSpinner.text");
```

---

## AUTO-UPDATE SCRIPT

Save this as `auto-update-components.js`:

```javascript
const fs = require("fs");
const path = require("path");

// Define component updates
const updates = [
  {
    file: "components/About/AboutHero.tsx",
    find: '"use client";\nimport Image from "next/image"',
    replace:
      '"use client";\nimport Image from "next/image";\nimport { useTranslation } from "react-i18next"',
  },
  {
    file: "components/About/AboutFactory.tsx",
    find: "export default function AboutFactory",
    replace:
      '"use client";\n\nimport { useTranslation } from "react-i18next";\n\nexport default function AboutFactory',
  },
  // Add more as needed
];

updates.forEach(({ file, find, replace }) => {
  const filepath = path.join(__dirname, file);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, "utf8");
    if (content.includes(find)) {
      content = content.replace(find, replace);
      fs.writeFileSync(filepath, content);
      console.log(`✅ Updated ${file}`);
    }
  }
});
```

---

## Quick Update Commands

Use these sed commands to add import statements:

```bash
# Add import to AboutFactory
sed -i "/^import/a import { useTranslation } from \"react-i18next\";" components/About/AboutFactory.tsx

# Add import to Production components
for file in components/Production/*.tsx; do
  sed -i "/^import/a import { useTranslation } from \"react-i18next\";" "$file"
done

# Add imports to Products components
for file in components/Products/*.tsx; do
  sed -i "/^import/a import { useTranslation } from \"react-i18next\";" "$file"
done
```

---

## Example: Updating AboutHero.tsx

**BEFORE:**

```typescript
"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <h2>Про нас</h2>
    <p>Кондитерська фабрика...</p>
```

**AFTER:**

```typescript
"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutHero() {
  const { t } = useTranslation();

  return (
    <h2>{t("about.hero.title")}</h2>
    <p>{t("about.hero.description")}</p>
```

---

## Translation Keys Ready To Use

### About Section

- `about.hero.title` = "Про нас"
- `about.hero.description` = "Кондитерська фабрика ТМ..."
- `about.factory.title` = "Кондитерська фабрика ТМ «Пря-Пря»"
- `about.factory.description` = "Заснована в 2015 році..."
- `about.production.title` = "Виробництво"
- `about.production.features` = ["⚙️ Сучасне...", "✔ Контроль...", "🌿 Натуральні..."]
- `about.production.description` = "Наше виробництво..."
- `about.quality.title` = "Якість"
- `about.staff.title` = "Співробітники"
- `about.values.titles` = ["Якість", "Натуральність", "Смак", "Безпека"]
- `about.partners.title` = "Нам довіряють"
- `about.partners.partners` = ["METRO", "КЛАСС", "Foodex", "Lais", "AGROSMIX GRUP"]

### Production Section

- `productionPage.hero.title` = "Виробництво"
- `productionPage.dough.title` = "Цех формування тіста"
- `productionPage.baking.title` = "Цех випікання"
- `productionPage.forming.title` = "Цех глазурування продукції"
- `productionPage.packing.title` = "Цех пакування продукції"

### Products Section

- `products.hero.title` = "Наша продукція"
- `products.categories.items` = ["Печиво", "Пряники", "Східні солодощі", "Цукерки", "Новинки"]
- `products.cta.title` = "Хочете замовити нашу продукцію?"
- `products.quality.features` = array of quality feature objects

---

## Status Checklist

- ✅ Translation keys added to JSON
- ✅ "use client" added to all components
- ⏳ Component imports updated (IN PROGRESS)
- ⏳ Hardcoded strings replaced with t() calls
- ⏳ Policy pages updated with i18n
- ⏳ Contact form messages updated
- ⏳ Testing and validation

---

## Next Steps

1. Run translation key verification:

   ```bash
   npm run build
   ```

2. Check for any missing translation keys in console

3. Manually update remaining components following the pattern above

4. Test language switching on all pages

5. Deploy when ready

---

## Support

If components show missing translations:

1. Check translation key spelling in JSON file
2. Ensure component has `const { t } = useTranslation()`
3. Verify `"use client"` directive is present
4. Clear browser cache and rebuild project
