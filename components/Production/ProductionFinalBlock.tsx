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
    <section className="bg-[#f7f3ed] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-orange-500 font-semibold">
            Переваги виробництва
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2b1d12] mt-4">
            Технології, яким довіряють
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 text-lg text-[#5a4738] leading-relaxed">
            Поєднання сучасного обладнання, автоматизованих виробничих ліній
            та контролю якості дозволяє створювати продукцію стабільної якості,
            що відповідає сучасним стандартам виробництва.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#eee5d9] p-8 text-center shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-[#2b1d12] mb-3">
                {item.title}
              </h3>

              <p className="text-[#5f4d3f] leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}