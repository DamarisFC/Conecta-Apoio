'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Unidade {
  tipo: string;
  imagem: string;
}

const tipos = ['CRAS', 'CREAS', 'CENTRO POP'];

export default function Unidades() {
  const [dados, setDados] = useState<Unidade[]>([]);
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
            return data;
          })
        );

        // Junta todos os resultados em um único array
        const todosUnidos = resultados.flat();

        setDados(todosUnidos);
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
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
        Unidades de Atendimento
      </h2>
      <p className="max-w-xl mx-auto mb-12 text-center text-gray-600">
        Conheça os tipos de serviços oferecidos pelas unidades.
      </p>

      {loading && <p className="text-center text-gray-600">Carregando...</p>}
      {erro && <p className="text-center text-red-600">{erro}</p>}

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {dados.map((unidade, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={unidade.imagem}
              alt={unidade.tipo}
              className="rounded-md w-full h-auto max-w-[200px] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {unidade.tipo}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}




