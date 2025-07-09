'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  servico: string;
};

type Unidade = {
  nome: string;
};

const servicosDisponiveis = [
  'Proteção Social Especial para famílias e indivíduos em situação de risco social',
  'Serviço Especializado para Pessoas em Situação de Rua',
];

export default function ServiceForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUnidades = async (servico: string) => {
    try {
      const response = await fetch(`/api/servicos/${encodeURIComponent(servico)}`);
      if (!response.ok) throw new Error('Erro na requisição');
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar unidades:', error);
      throw error;
    }
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setUnidades([]);

    try {
      const result = await fetchUnidades(data.servico);
      setUnidades(result);
    } catch {
      // Erro já tratado no console
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-between py-8 px-6 bg-white md:px-16">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Solicitação de Serviço</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="servico" className="block text-sm font-medium text-gray-700">
              Selecione o serviço desejado:
            </label>

            <select
              id="servico"
              {...register('servico', { required: true })}
              className="mt-1 w-full border border-gray-300 p-2 rounded"
            >
              <option value="">-- Selecione um serviço --</option>
              {servicosDisponiveis.map((servico, idx) => (
                <option key={idx} value={servico}>
                  {servico}
                </option>
              ))}
            </select>

            {errors.servico && (
              <p className="text-red-600 text-sm mt-1">Você precisa selecionar um serviço.</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>

        {loading && <p className="mt-4 text-gray-700">Carregando...</p>}

        {unidades.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900">Unidades que oferecem o serviço:</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {unidades.map((unidade, idx) => (
                <li key={idx}>{unidade.nome}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
