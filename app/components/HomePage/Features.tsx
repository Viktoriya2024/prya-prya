export default function FeaturesSection() {
  const features = [
    { label: "СМАЧНО", icon: "/cookie1.png" },
    { label: "КОРИСНО", icon: "/health.png" },
    { label: "ЯКІСНО", icon: "/quality.png" },
    { label: "ВИГІДНО", icon: "/good.png" },
  ];

  return (
    <section
      className="bg-[url('/feautures-patern.jpg')] bg-repeat py-16"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 px-4">
        {features.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src={item.icon} alt={item.label} className="w-14" />
            </div>
            <p className="mt-4 text-lg font-bold">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
