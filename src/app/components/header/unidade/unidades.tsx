
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
// import Image from 'next/image';

interface Unidade {
  tipo: string;
  imagem: string;
}

const tipos = ['CRAS', 'CREAS', 'CENTRO POP']; // Adicione os tipos que quiser

export default function Unidades() {
  const [dados, setDados] = useState<Record<string, Unidade[]>>({});
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const resultados = await Promise.all(
          tipos.map(async (tipo) => {
            const { data } = await axios.get<Unidade[]>(
              `https://m4-mini-projeto-api.onrender.com/api/tipo/${tipo}`
            );
            return { tipo, data };
          })
        );

        const agrupado: Record<string, Unidade[]> = {};
        resultados.forEach(({ tipo, data }) => {
          agrupado[tipo] = data;
        });

        setDados(agrupado);
      } catch (err) {
        console.error('Erro ao buscar unidades:', err);
        setErro('Erro ao carregar unidades.');
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Unidades de Atendimento</h2>
      <p className="max-w-xl mx-auto mb-12 text-center text-gray-600">
        Conheça os tipos de serviços oferecidos pelas unidades.
      </p>

      {loading && <p className="text-center text-gray-600">Carregando...</p>}
      {erro && <p className="text-center text-red-600">{erro}</p>}

      

      {tipos.map((tipo) => (
  <div key={tipo} className="mb-16">
    <h3 className="text-2xl font-semibold text-center text-[#EC021A] mb-8">{tipo}</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {dados[tipo]?.map((unidade, idx) => {
     console.log(`Tipo: ${unidade.imagem}`); // Debug aqui, dentro do map
        return (
          <div key={idx} className="flex flex-col items-center text-center">
            <img src={unidade.imagem} alt={unidade.tipo} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{unidade.tipo}</h3>
          </div>
        );
      })}
    </div>
  </div>
))}
    </section>
  );
}





