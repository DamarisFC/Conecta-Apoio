'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-blue-100"
    id='footer'>
      {/* Grid com imagem e possivelmente mais conteúdo */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Ilustração */}
        <div className="flex justify-center items-center">
          <Image
            src="/img4.png"
            alt="Contato"
            width={400}
            height={300}
            className="rounded"
          />
        </div>


        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Sobre nós</h2>
          <p className="text-gray-600">
            Este projeto tem como objetivo conectar pessoas em situação de vulnerabilidade com os serviços de assistência social disponíveis na Zona Norte de São Paulo.
          </p>
        </div>
      </div>


      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center px-6 bg-[#3B82F6] text-white">
        <span className="text-sm">© 2025 ConectaApoio. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

