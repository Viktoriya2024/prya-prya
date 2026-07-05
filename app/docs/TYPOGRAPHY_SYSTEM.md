# Modern Typography System 📝

A professional, warm, and readable typography system designed specifically for the Пря-Пря bakery brand.

## Font Family

**Plus Jakarta Sans** - A modern, geometric sans-serif with a friendly and warm character, perfect for food brands.

### Why Plus Jakarta Sans?

- ✨ Modern and clean aesthetic
- 🍰 Warm and friendly (perfect for bakery/sweets)
- 📖 Excellent readability at all sizes
- 💪 Versatile weight range (300-800)
- 🌍 Great international character support

## Typography Scale

### Display Text (Hero Sections)

```tsx
<h1 className="text-display font-extrabold text-gray-900">
  Фабрика кондитерських виробів
</h1>
```

- **Size:** 48-96px (responsive with clamp)
- **Weight:** 800 (Extrabold)
- **Line Height:** 1.1
- **Letter Spacing:** -0.02em (tighter for impact)
- **Use:** Hero headlines, major feature titles

### Heading 1

```tsx
<h1 className="text-h1 font-extrabold text-gray-900">Про Нас</h1>
```

- **Size:** 36-64px (responsive)
- **Weight:** 800
- **Line Height:** 1.15
- **Use:** Page titles, major section headers

### Heading 2

```tsx
<h2 className="text-h2 font-bold text-gray-900">ПРОДУКЦІЯ</h2>
```

- **Size:** 30-48px (responsive)
- **Weight:** 700 (Bold)
- **Line Height:** 1.2
- **Use:** Section titles, card headers

### Heading 3

```tsx
<h3 className="text-h3 font-bold text-gray-900">Зв'яжіться з нами</h3>
```

- **Size:** 24-36px (responsive)
- **Weight:** 700
- **Line Height:** 1.3
- **Use:** Subsection titles, component headers

### Heading 4

```tsx
<h4 className="text-h4 font-semibold text-gray-800">Вівсяне печиво</h4>
```

- **Size:** 20-30px (responsive)
- **Weight:** 600 (Semibold)
- **Line Height:** 1.4
- **Use:** Card titles, feature names

### Heading 5

```tsx
<h5 className="text-h5 font-semibold text-gray-800">Адреса</h5>
```

- **Size:** 18-24px (responsive)
- **Weight:** 600
- **Line Height:** 1.4
- **Use:** List headers, small section titles

### Heading 6

```tsx
<h6 className="text-h6 font-semibold text-gray-700">Деталі замовлення</h6>
```

- **Size:** 16-20px (responsive)
- **Weight:** 600
- **Line Height:** 1.5
- **Use:** Form section labels, minor headers

## Body Text

### Large Body Text

```tsx
<p className="text-body-lg text-gray-700">
  Ми з повною відповідальністю підходимо до вирішення поставлених завдань...
</p>
```

- **Size:** 18px
- **Weight:** 400 (Regular)
- **Line Height:** 1.75
- **Use:** Introductory paragraphs, feature descriptions, lead text

### Regular Body Text

```tsx
<p className="text-body text-gray-600">
  Ми використовуємо передові технології у виробництві...
</p>
```

- **Size:** 16px
- **Weight:** 400
- **Line Height:** 1.7
- **Use:** Standard paragraph text, descriptions

### Small Body Text

```tsx
<p className="text-body-sm text-gray-600">
  Пн–Пт: 09:00–18:00 • Сб–Нд: вихідний
</p>
```

- **Size:** 14px
- **Weight:** 400
- **Line Height:** 1.6
- **Use:** Supporting text, helper text, footnotes

### Caption Text

```tsx
<span className="text-caption text-gray-500">З любов'ю створено</span>
```

- **Size:** 12px
- **Weight:** 500 (Medium)
- **Line Height:** 1.5
- **Letter Spacing:** 0.02em
- **Transform:** Uppercase
- **Use:** Labels, tags, metadata, decorative text

## Font Weights

```tsx
<p className="font-light">Light (300)</p>      // Subtle emphasis
<p className="font-normal">Normal (400)</p>     // Body text
<p className="font-medium">Medium (500)</p>     // Emphasis
<p className="font-semibold">Semibold (600)</p> // Strong emphasis
<p className="font-bold">Bold (700)</p>         // Headings
<p className="font-extrabold">Extrabold (800)</p> // Hero text
```

## Text Colors

```tsx
<p className="text-primary">Primary Text</p>    // #1f2937 (gray-900)
<p className="text-secondary">Secondary Text</p> // #4b5563 (gray-700)
<p className="text-muted">Muted Text</p>        // #6b7280 (gray-600)
<p className="text-accent">Accent Text</p>      // #ff9800 (orange)
```

## Reading Optimization

### Prose Container

```tsx
<div className="prose">
  <p>Paragraph text automatically optimized for reading...</p>
  <p>Spacing between paragraphs is handled automatically.</p>
</div>
```

- **Max Width:** 65 characters
- **Paragraph Spacing:** Automatic
- **Heading Spacing:** Optimized

### Content Spacing

```tsx
<div className="content-spacing">
  <h2>Title</h2>
  <p>Automatic spacing between elements...</p>
  <button>Call to Action</button>
</div>
```

## Section Spacing

```tsx
// Standard section spacing
<section className="section-spacing">
  Content with generous vertical padding...
</section>

// Compact section spacing
<section className="section-spacing-sm">
  Content with moderate vertical padding...
</section>
```

## Practical Examples

### Hero Section

```tsx
<section className="section-spacing text-center">
  <span className="text-caption text-accent mb-4">З любов'ю створено</span>
  <h1 className="text-display font-extrabold text-gray-900 mb-6">
    Фабрика
    <br />
    кондитерських виробів
  </h1>
  <p className="text-body-lg text-gray-700 max-w-2xl mx-auto mb-8">
    НАТУРАЛЬНЕ, ТОМУ І СМАЧНЕ!
  </p>
</section>
```

### Section Header

```tsx
<div className="text-center mb-16">
  <h2 className="text-h2 font-bold text-gray-900 mb-4">ПРОДУКЦІЯ</h2>
  <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
    Відкрийте для себе наші смачні та натуральні кондитерські вироби
  </p>
</div>
```

### Product Card

```tsx
<div className="bg-white rounded-3xl p-6">
  <h3 className="text-h4 font-bold text-gray-900 mb-3">Вівсяне печиво</h3>
  <p className="text-body text-gray-600 mb-4">
    Натуральне печиво з цільнозернового вівса...
  </p>
</div>
```

### Contact Info

```tsx
<div className="space-y-6">
  <div>
    <h5 className="text-h5 font-semibold text-gray-900 mb-1">Адреса</h5>
    <p className="text-body text-gray-600">
      Україна, м. Київ, вул. Солодка, 12
    </p>
  </div>
</div>
```

### Form Labels

```tsx
<label className="block text-body-sm font-semibold text-gray-700 mb-2">
  Ваше ім'я *
</label>
<input type="text" className="text-body" />
```

## Design Principles

1. **Fluid Typography** - Uses `clamp()` for responsive scaling
2. **Optimal Line Height** - 1.5-1.75 for body text, tighter for headings
3. **Clear Hierarchy** - Distinct size differences between levels
4. **Readable Body Text** - 16-18px for comfortable reading
5. **Negative Letter Spacing** - For large headings (improves visual density)
6. **Consistent Weights** - Strategic use of font weights for hierarchy
7. **Warm Gray Scale** - Softer than pure black for friendlier feel
8. **Generous Whitespace** - Breathing room improves readability

## Accessibility

- ✅ Minimum 16px body text (WCAG AAA)
- ✅ High contrast ratios for all text colors
- ✅ Clear visual hierarchy
- ✅ Optimized line heights for readability
- ✅ Semantic HTML structure supported
- ✅ Responsive scaling for all devices

## Performance

- Fast loading with Google Fonts API
- Optimized with `display: swap` (no layout shift)
- Only necessary weights loaded (300-800)
- Font subsetting for Latin characters

## Color Combinations

### For Headings

- Dark headings on light background: `text-gray-900`
- Dark headings on colored background: `text-white`
- Accent headings: `text-[#ff9800]`

### For Body Text

- Primary body: `text-gray-700`
- Secondary body: `text-gray-600`
- Muted body: `text-gray-500`

### For Emphasis

- Highlighted text: `text-[#ff9800] font-semibold`
- Strong emphasis: `text-gray-900 font-bold`
- Subtle emphasis: `text-gray-700 font-medium`
