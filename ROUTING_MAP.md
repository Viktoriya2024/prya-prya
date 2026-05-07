# Products Catalog - Routing & Navigation Map

## 📊 Navigation Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                     HOMEPAGE / NAVBAR                            │
│                   (Existing Navigation)                          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    [Click "Products"]
                             │
                             ▼
                    ┌────────────────────┐
                    │  /products         │  ◄─── Main Products Page
                    │ (Already exists)   │       ProductCategories shown
                    │                    │
                    │  5 Category Cards: │
                    │  ┌──────────────┐  │
                    │  │ Печиво       │  │
                    │  │ Пряники      │  │
                    │  │ Східні ...   │  │
                    │  │ Цукерки      │  │
                    │  │ Новинки      │  │
                    │  └──────────────┘  │
                    └────────┬───────────┘
                             │
             ┌───────────────┼───────────────────────────────┐
             │               │                               │
        [Click Card]    [Click Card]                    [Click Card]
             │               │                               │
             ▼               ▼                               ▼
     ┌───────────────────────────────────────────────────────────┐
     │         /products/[category]                              │
     │    (Category Page - Dynamic Route)                        │
     │                                                           │
     │  Example URLs:                                           │
     │  • /products/cookies                                     │
     │  • /products/gingerbread                                 │
     │  • /products/eastern-sweets                              │
     │  • /products/candies                                     │
     │  • /products/new                                         │
     │                                                           │
     │  Displays:                                               │
     │  • Category Banner (with unique color)                  │
     │  • Breadcrumb (Products / Category)                      │
     │  • Product Grid (1-4 columns responsive)                │
     │  • Back Button                                           │
     │                                                           │
     │  Example: /products/cookies shows:                       │
     │  ┌─────────────────────────────────────┐               │
     │  │        Печиво Category Banner       │               │
     │  └─────────────────────────────────────┘               │
     │  ┌─────────────────────────────────────┐               │
     │  │ Breadcrumb: Products / Печиво       │               │
     │  └─────────────────────────────────────┘               │
     │  ┌──────────┬──────────┬──────────────┐               │
     │  │ Product1 │ Product2 │ Product3     │               │
     │  │ Card     │ Card     │ Card         │               │
     │  └──────────┴──────────┴──────────────┘               │
     └────────────┬────────────────────────────────────────────┘
                  │
            [Click Product Card]
                  │
                  ▼
     ┌───────────────────────────────────────────────────────────┐
     │      /products/[category]/[product]                       │
     │   (Product Detail Page - Dynamic Route)                   │
     │                                                           │
     │  Example URLs:                                           │
     │  • /products/cookies/butter-cookies                      │
     │  • /products/gingerbread/classic-gingerbread             │
     │  • /products/eastern-sweets/kozinak-homka                │
     │  • /products/candies/chocolate-truffle                   │
     │  • /products/new/matcha-white-chocolate                  │
     │                                                           │
     │  Displays:                                               │
     │  • Breadcrumb (Products / Category / Product)           │
     │  • Large Product Image                                   │
     │  • Product Name & Description                            │
     │  • Category Tag                                          │
     │  • Weight Information                                    │
     │  • Ingredients List                                      │
     │  • Nutritional Information                               │
     │  • "Add to Cart" Button                                  │
     │  • "Back to Category" Button                             │
     │  • Related Products Section                              │
     │                                                           │
     │  Example: /products/cookies/butter-cookies              │
     │  ┌─────────────────────────────────────┐               │
     │  │Breadcrumb: Products / Печиво / ... │               │
     │  └─────────────────────────────────────┘               │
     │  ┌──────────────┐  ┌──────────────────┐               │
     │  │              │  │ Вершкове печиво  │               │
     │  │   Image      │  │ 200г             │               │
     │  │   (Large)    │  │ Full Description │               │
     │  │              │  │ Ingredients      │               │
     │  │              │  │ Nutrition Facts  │               │
     │  │              │  │ [Add to Cart]    │               │
     │  │              │  │ [Back Button]    │               │
     │  └──────────────┘  └──────────────────┘               │
     │                                                           │
     │  Navigation Actions:                                     │
     │  • Breadcrumb links back to category and products        │
     │  • "Back to Category" button                             │
     │  • View related products in category                     │
     └───────────────────────────────────────────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │ "Back to    │   Click     │ "Related
    │ Category"   │   Related   │ Products"
    │             │             │
    ▼             ▼             ▼
 Category     Another       Related
  Page       Product         Link
             Detail          (different
             Page            product)

```

## 🗺️ URL Structure Map

```
ROOT
├── /products
│   ├── /products/cookies
│   │   ├── /products/cookies/butter-cookies
│   │   ├── /products/cookies/chocolate-cookies
│   │   └── /products/cookies/oatmeal-cookies
│   │
│   ├── /products/gingerbread
│   │   ├── /products/gingerbread/classic-gingerbread
│   │   ├── /products/gingerbread/chocolate-glazed-gingerbread
│   │   └── /products/gingerbread/nutella-gingerbread
│   │
│   ├── /products/eastern-sweets
│   │   ├── /products/eastern-sweets/kozinak-homka
│   │   ├── /products/eastern-sweets/sunflower-kozinac
│   │   └── /products/eastern-sweets/mixed-nuts-kozinac
│   │
│   ├── /products/candies
│   │   ├── /products/candies/chocolate-truffle
│   │   ├── /products/candies/caramel-candy
│   │   └── /products/candies/fruit-jelly-candy
│   │
│   └── /products/new
│       ├── /products/new/matcha-white-chocolate
│       ├── /products/new/lavender-honey-cookies
│       └── /products/new/spicy-ginger-truffle
│
└── (Other pages like /about, /contact, etc.)
```

## 🎯 Component Relationships

```
ProductCategories Component
         │
         ├─► Displays 5 category cards
         ├─► Each card is a Link
         └─► Links to /products/[category]
                    │
                    ▼
         CategoryBanner Component
         (Dynamic based on category)
                    │
         ┌──────────┼──────────┐
         │          │          │
         ▼          ▼          ▼
     Breadcrumb  Title    Subtitle
                    │
                    ▼
         ProductGrid Component
         (Handles loading/empty states)
                    │
         ┌──────────┼──────────┐
         │          │          │
    Loading    Empty State  Products
    State                   Array
         │                      │
         ▼                      ▼
    Spinner            ProductCard Components
                       (Each links to detail page)
                              │
                              ▼
                   /products/[category]/[product]
                       Detail Page Component
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
         ▼                    ▼                    ▼
    Breadcrumb         Product Info         Navigation
    Component          (Image, Desc,        (Back Buttons,
                       Ingredients,         Related Links)
                       Nutrition)
```

## 📱 Responsive Behavior

```
MOBILE (< 640px)
/products → Category cards in 2-column grid
/products/cookies → Products in 1-column grid
                    Stacked layout
                    Touch-friendly

TABLET (640px - 1024px)
/products → Category cards in 3-column grid
/products/cookies → Products in 2-column grid
                    Balanced layout
                    Medium spacing

DESKTOP (> 1024px)
/products → Category cards in 5-column grid
/products/cookies → Products in 3-4 column grid
                    Full layout
                    Optimal spacing
```

## 🔄 User Journey Flow

```
User starts here
      │
      ▼
Homepage/Navbar
      │
      ├─ [Click Products Link]
      │
      ▼
/products - Main Page
(ProductCategories shown)
      │
      ├─ [Choose Category]
      │  Example: Click "Печиво"
      │
      ▼
/products/cookies - Category Page
(Product grid displayed)
      │
      ├─ Options:
      │  ├─ [Click Product] → Details
      │  ├─ [Breadcrumb] → Back to /products
      │  └─ [Back Button] → Back to /products
      │
      ▼
/products/cookies/butter-cookies - Detail Page
(Full product info)
      │
      ├─ Options:
      │  ├─ [Add to Cart] → Cart (future feature)
      │  ├─ [Breadcrumb] → Navigate back
      │  ├─ [Back to Category] → /products/cookies
      │  └─ [Related Products] → Other products
      │
      ▼
Can navigate to:
- Other products in same category
- Category page
- Different category
- Main products page
- Homepage
```

## 🗂️ File Organization by Route

```
Route                          Files Involved
────────────────────────────────────────────────────────────

/products
  └─ app/products/page.tsx                    ✅ EXISTING
      ├─ components/Products/ProductsHero.tsx
      ├─ components/Products/ProductCategories.tsx (UPDATED)
      └─ ... other sections

/products/[category]
  └─ app/products/[category]/page.tsx         ✅ NEW
      ├─ components/Products/CategoryBanner.tsx
      ├─ components/Products/ProductGrid.tsx
      ├─ components/Products/ProductCard.tsx
      ├─ components/shared/Breadcrumb.tsx
      ├─ components/shared/EmptyState.tsx
      ├─ components/shared/LoadingSpinner.tsx
      └─ data/products.ts

/products/[category]/[product]
  └─ app/products/[category]/[product]/page.tsx ✅ NEW
      ├─ components/shared/Breadcrumb.tsx
      ├─ components/shared/LoadingSpinner.tsx
      └─ data/products.ts
```

## 🔗 Link Connections

```
/products Page
    │
    ├─────────────────────────────────────────────────────────┐
    │ Category Card Links                                      │
    │                                                           │
    │ "Печиво"         → /products/cookies                    │
    │ "Пряники"        → /products/gingerbread               │
    │ "Східні солодощі" → /products/eastern-sweets           │
    │ "Цукерки"        → /products/candies                   │
    │ "Новинки"        → /products/new                        │
    │                                                           │
    └─────────────────────────────────────────────────────────┘
         │
         ▼
/products/[category] Page
    │
    ├─────────────────────────────────────────────────────────┐
    │ Navigation Elements:                                     │
    │                                                           │
    │ Breadcrumb: Products / Category                          │
    │   └─ Products link → /products                          │
    │                                                           │
    │ Product Card Links (Product Grid)                        │
    │   └─ Each card → /products/[category]/[product]        │
    │                                                           │
    │ Back Button                                              │
    │   └─ "Назад до продукції" → /products                  │
    │                                                           │
    └─────────────────────────────────────────────────────────┘
         │
         ▼
/products/[category]/[product] Page
    │
    ├─────────────────────────────────────────────────────────┐
    │ Navigation Elements:                                     │
    │                                                           │
    │ Breadcrumb:                                              │
    │   Products / Category / Product                          │
    │   ├─ Products link → /products                          │
    │   └─ Category link → /products/[category]              │
    │                                                           │
    │ Back to Category Button                                  │
    │   └─ → /products/[category]                            │
    │                                                           │
    │ Related Products Section                                 │
    │   └─ Links to other products in category               │
    │                                                           │
    │ (Future: Shopping Cart Link)                             │
    │   └─ "Add to Cart" → /cart                             │
    │                                                           │
    └─────────────────────────────────────────────────────────┘
```

## ✅ Route Validation Checklist

```
Route                                Status
────────────────────────────────────────────────────
/products                            ✅ Works (existing)
/products/cookies                    ✅ Works (dynamic)
/products/gingerbread                ✅ Works (dynamic)
/products/eastern-sweets             ✅ Works (dynamic)
/products/candies                    ✅ Works (dynamic)
/products/new                        ✅ Works (dynamic)

/products/cookies/butter-cookies     ✅ Works (nested)
/products/gingerbread/classic-gingerbread ✅ Works
/products/eastern-sweets/kozinak-homka ✅ Works
/products/candies/chocolate-truffle  ✅ Works
/products/new/matcha-white-chocolate ✅ Works

Links in ProductCategories           ✅ All clickable
Breadcrumbs working                  ✅ Navigate correctly
Back buttons functioning             ✅ All working
Product cards linking                ✅ All functional
```

---

This routing structure ensures smooth navigation throughout your products catalog with clear hierarchy and multiple navigation options for users.
