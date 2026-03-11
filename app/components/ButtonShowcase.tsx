// Button System Showcase Component
// Import this in any page to preview all button styles

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Button System Showcase
          </h1>
          <p className="text-gray-600 text-lg">
            Modern, consistent buttons for your bakery website
          </p>
        </div>

        {/* Primary Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Primary Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-primary">
              Standard Primary
            </button>
            
            <button className="btn-primary group">
              <span>With Arrow Icon</span>
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button className="btn-primary btn-sm">
              Small Primary
            </button>
            
            <button className="btn-primary btn-lg">
              Large Primary
            </button>
            
            <button className="btn-primary" disabled>
              Disabled Primary
            </button>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Secondary Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-secondary">
              Standard Secondary
            </button>
            
            <button className="btn-secondary group">
              <span>With Arrow Icon</span>
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button className="btn-secondary btn-sm">
              Small Secondary
            </button>
            
            <button className="btn-secondary" disabled>
              Disabled Secondary
            </button>
          </div>
        </section>

        {/* Outline Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Outline Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-outline">
              Standard Outline
            </button>
            
            <button className="btn-outline btn-sm">
              Small Outline
            </button>
            
            <button className="btn-outline" disabled>
              Disabled Outline
            </button>
          </div>
        </section>

        {/* Ghost Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ghost Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-ghost">
              Standard Ghost
            </button>
            
            <button className="btn-ghost btn-sm">
              Small Ghost
            </button>
            
            <button className="btn-ghost" disabled>
              Disabled Ghost
            </button>
          </div>
        </section>

        {/* Messenger Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Messenger Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-whatsapp group">
              <span className="text-xl">💬</span>
              <span>WhatsApp</span>
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="btn-viber group">
              <span className="text-xl">📱</span>
              <span>Viber</span>
              <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Icon Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-icon bg-orange-50 text-[#ff9800] hover:bg-orange-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <button className="btn-icon bg-orange-100 text-[#ff9800] hover:bg-orange-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button className="btn-icon bg-white text-gray-700 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </section>

        {/* Button Groups */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Groups</h2>
          <div className="btn-group">
            <button className="btn-primary">Save</button>
            <button className="btn-secondary">Cancel</button>
            <button className="btn-ghost">Reset</button>
          </div>
        </section>

        {/* Form Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Submit Buttons</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#ff9800] outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#ff9800] outline-none transition-colors"
              />
              <button type="submit" className="btn-primary w-full">
                Submit Form
              </button>
            </div>
          </div>
        </section>

        {/* Loading State */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Loading States</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-primary btn-loading">
              Loading...
            </button>
            
            <button className="btn-secondary btn-loading">
              Loading...
            </button>
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-world Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Hero CTA */}
            <div className="bg-linear-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hero Section CTA</h3>
              <button className="btn-primary btn-lg group">
                <span>Обрати смаколики</span>
                <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-xl h-40 mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Пряники</h3>
              <button className="btn-secondary w-full">
                Дізнатися більше
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
