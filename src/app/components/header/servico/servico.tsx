
// import Image from "next/image";

// export default function Services() {
//   const cards = [
//     {
//       title: "Cras Vila Maria",
//       icon: "/img1.png",
//       bg: "bg-white",
//     },
//     {
//       title: "Estamos em manutenção 2",
//       icon: "/img1.png",
//       bg: "bg-black text-white",
//     },
//     {
//       title: "Estamos em manutenção 3",
//       icon: "/img1.png",
//       bg: "bg-black text-white",
//     },
//     {
//       title: "Estamos em manutenção 4",
//       icon: "/img1.png",
//       bg: "bg-white",
//     },
//   ];

//   return (
//     <section id="servicos" className="py-16 px-6 bg-gray-50">
//       <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Serviços</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className={`p-6 rounded-xl shadow-md ${card.bg} transition hover:scale-105`}
//           >
//             <div className="flex items-center gap-4">
//               <Image src={card.icon} alt={card.title} width={40} height={40} />
//               <h3 className="text-xl font-semibold">{card.title}</h3>
//             </div>
//             <p className="mt-4 text-sm text-gray-500">estamos em manutenção</p>
            
//             {/* Botão adicionado */}
//             <button
//               className={`mt-6 px-4 py-2 rounded ${
//                 card.bg.includes('black')
//                   ? 'bg-white text-black hover:bg-gray-200'
//                   : 'bg-black text-white hover:bg-gray-800'
//               } transition`}
//             >
//               Saiba mais
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


//função para chamar api

'use client';

import Image from "next/image";
import { useState } from "react";
import api from '../../../lib/api';

type UnidadeDetalhes = {
  nome: string;
  tipo: string;
  endereco: string;
  telefone: string;
  horario: string;
  acessibilidade?: boolean;
  servico?:string;
  imagem?: string;
};

export default function Services() {
  const [dados, setDados] = useState<UnidadeDetalhes | null>(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const cards = [
    {
      title: "Cras Vila Maria",
      icon: "/img1.png",
      bg: "bg-white",
      id: 1,
    },
    {
      title: "CRAS Vila Medeiros",
      icon: "/img1.png",
      bg: "bg-black text-white",
      id: 2,
    },
    {
      title: "CREAS Vila Maria",
      icon: "/img1.png",
      bg: "bg-black text-white",
      id: 3,
    },
    {
      title: "Centro POP Vila Maria",
      icon: "/img1.png",
      bg: "bg-white",
      id: 4,
    },
  ];

  const handleSaibaMais = async (id: number) => {
    setErro('');
    setLoading(true);
    setDados(null);

    try {
      const { data } = await api.get(`/unidade/${id}`);
      console.log(`Unidades recebidas com sucesso ${data}`)
      setDados(data);
    } catch (error) {
      console.error('Erro ao buscar unidade:', error);
      setErro('Erro ao buscar os dados da unidade.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <section id="servicos" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-6 rounded-xl shadow-md ${card.bg} transition hover:scale-105`}
          >
            <div className="flex items-center gap-4">
              <Image src={card.icon} alt={card.title} width={40} height={40} />
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </div>
            <p className="mt-4 text-sm text-gray-500">Clique abaixo para ver mais informações.</p>

            <button
              onClick={() => handleSaibaMais(card.id)}
              className={`mt-6 px-4 py-2 rounded ${
                card.bg.includes('black')
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
              } transition`}
            >
              Saiba mais
            </button>
          </div>
        ))}
      </div>

      {/* Exibir dados */}
      {loading && <p className="mt-6 text-center text-gray-700">Carregando...</p>}
      {erro && <p className="mt-6 text-center text-red-600">{erro}</p>}

      {dados && (
        <div className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-2xl font-bold mb-4">{dados.nome}</h4>
          <p><strong>Tipo:</strong> {dados.tipo}</p>
          <p><strong>Endereço:</strong> {dados.endereco}</p>
          <p><strong>Telefone:</strong> {dados.telefone}</p>
          <p><strong>Horário:</strong> {dados.horario}</p>
          
        </div>
      )}
    </section>
  );
}

