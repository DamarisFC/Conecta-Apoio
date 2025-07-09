// src/components/Services.tsx
import Image from "next/image";

export default function Services() {
  const cards = [
    {
      title: "Estamos em manutenção 1",
      icon: "/img1.png",
      bg: "bg-white",
    },
    {
      title: "Estamos em manutenção 2",
      icon: "/img1.png",
      bg: "bg-black text-white",
    },
    {
      title: "Estamos em manutenção 3",
      icon: "/img1.png",
      bg: "bg-black text-white",
    },
    {
      title: "Estamos em manutenção 4",
      icon: "/img1.png",
      bg: "bg-white",
    },
  ];

  return (
    <section id="servicos" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-md ${card.bg} transition hover:scale-105`}
          >
            <div className="flex items-center gap-4">
              <Image src={card.icon} alt={card.title} width={40} height={40} />
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <p className="mt-4 text-sm text-gray-500">estamos em manutenção</p>
          </div>
        ))}
      </div>
    </section>
  );
}
