# Modern Button System 🎨

A consistent, modern button system for your bakery website using the orange/yellow brand colors.

## Button Variants

### Primary Button (Main CTA)

Orange gradient with rounded-full shape. Use for primary actions.

```tsx
<button className="btn-primary">
  Замовити зараз
</button>

// With icon
<button className="btn-primary group">
  <span>Детальніше</span>
  <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</button>
```

### Secondary Button

White background with orange text and border. Use for secondary actions.

```tsx
<button className="btn-secondary">Дізнатися більше</button>
```

### Outline Button

Transparent with orange border. Inverts on hover.

```tsx
<button className="btn-outline">Переглянути каталог</button>
```

### Ghost Button

Minimal style for subtle actions.

```tsx
<button className="btn-ghost">Скасувати</button>
```

### Messenger Buttons

Pre-styled for WhatsApp and Viber.

```tsx
<a href="https://wa.me/380001234567" className="btn-whatsapp group">
  <span>💬</span>
  <span>WhatsApp</span>
  <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
</a>

<a href="viber://chat?number=+380001234567" className="btn-viber group">
  <span>📱</span>
  <span>Viber</span>
  <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
</a>
```

## Size Modifiers

### Small Button

```tsx
<button className="btn-primary btn-sm">Маленька кнопка</button>
```

### Large Button

```tsx
<button className="btn-primary btn-lg">Велика кнопка</button>
```

### Icon Button (Square)

```tsx
<button className="btn-icon bg-orange-50 text-[#ff9800]">
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>
```

## States

### Disabled State

```tsx
<button className="btn-primary" disabled>
  Disabled Button
</button>
```

### Loading State

```tsx
<button className="btn-primary btn-loading">Loading...</button>
```

## Button Groups

```tsx
<div className="btn-group">
  <button className="btn-primary">Зберегти</button>
  <button className="btn-secondary">Скасувати</button>
</div>
```

## Form Submit Buttons

```tsx
<button
  type="submit"
  disabled={isLoading}
  className={`btn-primary ${isLoading ? "btn-loading" : ""}`}
>
  {isLoading ? "Надсилання..." : "Надіслати"}
</button>
```

## Accessibility

All buttons include:

- ✅ Focus-visible ring states
- ✅ Disabled state styling
- ✅ Proper keyboard navigation
- ✅ Screen reader support
- ✅ Touch-friendly sizing

## Design Principles

1. **Rounded corners** - `rounded-full` for primary, `rounded-xl` for secondary
2. **Soft shadows** - Layered shadows that intensify on hover
3. **Smooth transitions** - 300ms duration for all states
4. **Scale effects** - Subtle scale on hover for primary buttons
5. **Brand colors** - Orange (#ff9800) to yellow (#ffb74d) gradients
6. **High contrast** - Ensures readability and accessibility

## Color Palette

- Primary Orange: `#ff9800`
- Light Orange: `#ffb74d`
- Orange Tint: `orange-50`
- Green (WhatsApp): `green-600`
- Purple (Viber): `purple-600`
