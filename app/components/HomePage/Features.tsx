export default function FeaturesSection() {
  const features = [
    { label: "СМАЧНО", icon: "/cookie1.png", description: "Незабутній смак" },
    { label: "КОРИСНО", icon: "/health.png", description: "Натуральні інгредієнти" },
    { label: "ЯКІСНО", icon: "/quality.png", description: "Перевірена якість" },
    { label: "ВИГІДНО", icon: "/good.png", description: "Чесні ціни" },
  ];

  return (
    <section className="bg-[url('/feautures-patern.jpg')] bg-repeat py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Чому обирають нас?
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] rounded-full mx-auto"></div>
        </div>

        {/* MODERN FEATURE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group relative bg-white rounded-2xl p-8
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                hover:shadow-[0_12px_40px_rgba(255,152,0,0.15)]
                transition-all duration-500
                hover:-translate-y-2
                border border-orange-100/50
                overflow-hidden
              "
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-orange-100/30 to-yellow-100/30 rounded-full blur-2xl -translate-y-8 translate-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6 flex justify-center">
                <div className="
                  relative w-20 h-20 
                  bg-linear-to-br from-orange-50 to-yellow-50
                  rounded-2xl
                  flex items-center justify-center
                  group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-500
                  shadow-sm
                ">
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className="w-12 h-12 object-contain relative z-10" 
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#ff9800] transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Decorative bottom elements */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-300"></div>
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <div className="w-2 h-2 rounded-full bg-orange-300"></div>
        </div>
      </div>
    </section>
  );
}
