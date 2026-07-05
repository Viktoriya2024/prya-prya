# Products Catalog System Documentation

## Overview

A modern, responsive products catalog page structure for the confectionery website built with Next.js. Features category-based navigation with nested product pages, complete product details, and a premium UI.

## Directory Structure

```
frontend/
├── app/
│   └── products/
│       ├── page.tsx                 # Main products page
│       └── [category]/
│           ├── page.tsx             # Category page
│           └── [product]/
│               └── page.tsx         # Product detail page
├── components/
│   ├── Products/
│   │   ├── ProductCategories.tsx    # Category cards (clickable links)
│   │   ├── ProductCard.tsx          # Reusable product card
│   │   ├── ProductGrid.tsx          # Product grid display
│   │   └── CategoryBanner.tsx       # Category page banner
│   └── shared/
│       ├── Breadcrumb.tsx           # Breadcrumb navigation
│       ├── EmptyState.tsx           # Empty state component
│       └── LoadingSpinner.tsx       # Loading indicator
└── data/
    └── products.ts                  # Product data & utilities
```

## File Descriptions

### Data Layer (`data/products.ts`)

Centralized product data management with TypeScript interfaces and helper functions.

**Exports:**

- `Product` interface - Complete product structure
- `products` array - All products
- `categories` array - All categories
- `getProductsByCategory(category)` - Filter products by category
- `getProductBySlug(slug, category)` - Get single product
- `getCategoryName(category)` - Get translated category name

**Product Structure:**

```typescript
interface Product {
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
```

### Components

#### ProductCategories.tsx

Displays 5 main product categories as clickable circular cards with images.

**Features:**

- Responsive grid layout
- Hover animations
- Links to category pages
- Premium design

#### ProductCard.tsx

Individual product card component for category pages.

**Props:**

```typescript
interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  weight: string;
  category: string;
  slug: string;
}
```

**Features:**

- Image with hover zoom effect
- Weight badge
- Title and description
- "Детальніше" button
- Responsive design

#### ProductGrid.tsx

Container for displaying products in a responsive grid.

**Props:**

```typescript
interface ProductGridProps {
  products: Product[];
  category: string;
  isLoading?: boolean;
}
```

**Features:**

- Responsive 1-4 column layout
- Loading state
- Empty state with fallback
- Automatic product card rendering

#### CategoryBanner.tsx

Reusable banner component for category pages.

**Props:**

```typescript
interface CategoryBannerProps {
  title: string;
  subtitle: string;
  colorClass: string;
}
```

**Features:**

- Gradient background
- Breadcrumb navigation
- Category title and subtitle

### Shared Components

#### Breadcrumb.tsx

Breadcrumb navigation component.

**Props:**

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
```

#### EmptyState.tsx

Empty state fallback display.

**Props:**

```typescript
interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}
```

#### LoadingSpinner.tsx

Animated loading indicator.

## Routes

### Products Page

- **URL:** `/products`
- **Component:** `app/products/page.tsx`
- **Display:** ProductCategories component
- **Features:**
  - 5 category cards
  - Hover animations
  - Links to category pages

### Category Page

- **URL:** `/products/[category]`
- **Example:** `/products/cookies`, `/products/eastern-sweets`
- **Component:** `app/products/[category]/page.tsx`
- **Features:**
  - Category banner with gradient
  - Breadcrumb navigation
  - Product grid
  - "Назад до продукції" button
  - Empty state handling

### Product Detail Page

- **URL:** `/products/[category]/[product]`
- **Example:** `/products/cookies/butter-cookies`
- **Component:** `app/products/[category]/[product]/page.tsx`
- **Features:**
  - Large product image
  - Full description
  - Ingredients list
  - Nutritional information
  - Weight and category info
  - Breadcrumb navigation
  - Back button
  - "До кошика" CTA
  - Related products section

## Category Mappings

```
ID: "cookies"
Name: "Печиво"
Slug: "cookies"
Products: Butter, Chocolate, Oatmeal cookies

ID: "gingerbread"
Name: "Пряники"
Slug: "gingerbread"
Products: Classic, Chocolate glazed, Nutella pryniki

ID: "eastern-sweets"
Name: "Східні солодощі"
Slug: "eastern-sweets"
Products: Kozinak varieties

ID: "candies"
Name: "Цукерки"
Slug: "candies"
Products: Truffles, Caramels, Jelly candies

ID: "new"
Name: "Новинки"
Slug: "new"
Products: New experimental flavors
```

## Design System

### Colors

- **Primary Orange:** #FF9800, #FFB74D
- **Beige/Warm:** #FFF8F1
- **Backgrounds:** White, gradient overlays
- **Text:** Gray-900 (heading), Gray-700 (body), Gray-600 (secondary)

### Typography

- **Headings:** Font-bold, font-extrabold
- **Buttons:** Font-semibold, font-bold
- **Body:** Font-base, font-sm

### Spacing

- **Sections:** py-12 md:py-16 md:py-20
- **Containers:** max-w-7xl, px-4 sm:px-6 md:px-8
- **Gaps:** gap-6 sm:gap-8 md:gap-10

### Components

- **Rounded:** Rounded-lg, rounded-xl, rounded-2xl
- **Shadows:** Shadow-md, shadow-lg, shadow-xl
- **Hover Effects:** Scale, color change, shadow increase
- **Transitions:** Duration-300, duration-500

## UI Features

### Animations

- Hover scale on category cards
- Scale and shadow on product cards
- Smooth color transitions
- Zoom effect on product images
- Spinning loader

### Responsive Design

- Mobile: 1 column (products)
- Tablet: 2-3 columns
- Desktop: 3-4 columns
- Adaptive font sizes
- Touch-friendly buttons

### Accessibility

- Semantic HTML
- Alt attributes on images
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels where needed

## Usage Examples

### Adding a New Product

1. Open `data/products.ts`
2. Add to the `products` array:

```typescript
{
  id: "16",
  slug: "new-product-slug",
  category: "cookies",
  name_ua: "Назва продукту",
  description_ua: "Коротка опис",
  fullDescription_ua: "Повна опис...",
  image: "/products/image.png",
  weight: "200g",
  ingredients: ["Інгредієнт 1", "Інгредієнт 2"],
  nutritionPer100g: {
    calories: 450,
    protein: 6,
    fat: 22,
    carbs: 58,
  },
}
```

### Adding a New Category

1. Open `data/products.ts`
2. Add to `categories` array:

```typescript
{ id: "new-id", name_ua: "Категорія", slug: "category-slug" }
```

3. Update `ProductCategories.tsx` if displaying in main grid
4. Add banner styles to `[category]/page.tsx`

### Customizing Colors

Edit the `categoryBanners` object in `app/products/[category]/page.tsx`:

```typescript
const categoryBanners = {
  cookies: {
    title: "Печиво",
    subtitle: "...",
    color: "from-amber-100 to-orange-50", // Edit here
  },
  // ...
};
```

## Performance Considerations

- Products loaded synchronously from data file
- Images use Next.js Image optimization
- Responsive images with `sizes` prop
- Grid layout optimized for various screen sizes
- No external API calls (static data)

## SEO Features

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Meta tags ready (add in layout)
- Descriptive alt attributes
- Breadcrumb schema ready
- SEO-friendly URLs with slugs

## Future Enhancements

1. **Search & Filter**
   - Product search
   - Price filtering
   - Ingredient filtering

2. **Shopping Cart**
   - Add to cart functionality
   - Cart persistence
   - Checkout flow

3. **Reviews & Ratings**
   - Customer reviews
   - Star ratings
   - Review forms

4. **Product Analytics**
   - Popular products
   - View tracking
   - Conversion tracking

5. **Content Management**
   - Dynamic product loading from CMS
   - Content editor integration
   - Image management

6. **Internationalization**
   - Multi-language support
   - Language switcher
   - Translated content

## Maintenance

### Adding/Updating Products

- Edit `data/products.ts`
- Changes apply instantly
- No build required for content updates

### Updating Product Images

- Add images to `/public/products/`
- Update image paths in data file
- Next.js handles optimization

### Category Colors

- Edit `categoryBanners` in category page
- Tailwind gradient classes
- Changes apply to banners and headers

### Component Updates

- Components in `components/Products/` and `components/shared/`
- Update and components auto-reload
- No router configuration needed

## Support & Troubleshooting

### Product Not Appearing

- Check slug matches exactly
- Verify category matches one of the 5 main categories
- Ensure image path is correct

### Links Not Working

- Verify routes match: `/products/[category]/[product]`
- Check slugs are URL-friendly (lowercase, dashes)
- Ensure getProductBySlug returns product

### Images Not Loading

- Check image exists in `/public/` directory
- Verify path in product data
- Check file extension is correct

## Best Practices

1. **Keep slugs lowercase and hyphenated**
2. **Always add full descriptions**
3. **Include all ingredient information**
4. **Add accurate nutritional values**
5. **Use quality product images**
6. **Test on mobile devices**
7. **Verify all links work**
8. **Keep Ukrainian text consistent**
