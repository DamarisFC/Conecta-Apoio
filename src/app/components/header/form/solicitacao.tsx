'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../lib/api';

type FormValues = {
  servico: string;
};

type Unidade = {
  nome: string;
};

const servicosDisponiveis = [
  'Proteção Social Especial para famílias e indivíduos em situação de risco social',
  'Serviço Especializado para Pessoas em Situação de Rua',
  'Cadastro Único para Programas Sociais',

];

export default function ServiceForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [unidades, setUnidades] = useState<Unidade[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const fetchUnidades = async (servico: string) => {
    try {
      const { data } = await api.get(`/servicos/${encodeURIComponent(servico)}`);
      return data;
    } catch (error) {
      console.error('Erro ao buscar unidades:', error);
      setErro('Erro ao buscar unidades. Tente novamente mais tarde.');
      throw error;
    }
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setUnidades([]);
    setErro('');

    try {
      const result = await fetchUnidades(data.servico);
      setUnidades(result);
    } catch {
      // Erro já tratado acima
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-between py-16 px-6 bg-green-50 md:px-16"
    id = 'solicitacao'>
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
        {erro && <p className="mt-4 text-red-600">{erro}</p>}

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
