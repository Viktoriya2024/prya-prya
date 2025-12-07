const products = [
  {
    name: "Вівсяне печиво",
    image: "/Cookies2.png",
  },
  {
    name: "Пряники",
    image: "/cookiesProduct.png",
  },
  {
    name: "Фітнес-лінія",
    image: "/Fitness12.png",
  },
];

export default function ProductsSlider() {
  return (
    <section className="bg-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-orange-400 pb-2 inline-block">
          ПРОДУКЦІЯ
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 text-center">
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-contain mx-auto transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              <div className="bg-orange-500 text-white py-3 mt-4 text-lg font-semibold">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <button  className="
            mt-6 inline-block px-8 py-3 
            bg-[#ff9800] hover:bg-yellow-700 
            transition text-white hover:text-white
            text-lg font-semibold 
            ">
          ПЕРЕЙТИ ДО РОЗДІЛУ ПРОДУКЦІЇ
        </button>
      </div>
    </section>
  );
}
