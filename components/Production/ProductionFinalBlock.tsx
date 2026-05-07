export default function ProductionFinalBlock() {
  const features = [
    {
      icon: "⚙️",
      title: "Сучасне обладнання",
      text: "Автоматизовані виробничі лінії забезпечують точність і стабільність на кожному етапі виробництва.",
    },
    {
      icon: "✔️",
      title: "Контроль якості",
      text: "Кожна партія продукції проходить перевірку якості на ключових етапах виробництва.",
    },
    {
      icon: "📦",
      title: "Надійне пакування",
      text: "Сучасне пакування зберігає свіжість, якість та зручність транспортування продукції.",
    },
  ];

  return (
    <section className="bg-[#f7f3ed] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-orange-500 font-semibold">
            Переваги виробництва
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b1d12] mt-3 sm:mt-4">
            Технології, яким довіряють
          </h2>

          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-orange-500 mx-auto mt-4 sm:mt-6 rounded-full"></div>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#5a4738] leading-relaxed">
            Поєднання сучасного обладнання, автоматизованих виробничих ліній
            та контролю якості дозволяє створювати продукцію стабільної якості,
            що відповідає сучасним стандартам виробництва.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl border border-[#eee5d9] p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#2b1d12] mb-2 sm:mb-3">
                {item.title}
              </h3>

              <p className="text-[#5f4d3f] leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}