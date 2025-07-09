import Image from "next/image";

export default function Unidades() {
  const services = [
    { title: "Estamos em manutenção1", 
      description: "Manutenção1", 
      icon: "/img1.png" 
    },

    { title: "Estamos em manutenção2", 
        description: "Manutenção2.", 
        icon: "/img1.png" 
    },

    { title: "Estamos em manutenção3", 
        description: "Manutenção3.", 
        icon: "/img1.png" 
    },

    { title: "Estamos em manutenção4", 
        description: "Manutenção4.", 
        icon: "/img1.png" 
    },
    
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Estamos em manutenção</h2>
      <p className="max-w-xl mx-auto mb-12 text-center text-gray-600">
        Manutenção
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <Image src={service.icon} alt={service.title} width={64} height={64} />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
