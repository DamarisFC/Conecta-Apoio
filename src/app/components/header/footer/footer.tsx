'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] pt-10">
      {/* Grid com imagem e possivelmente mais conteúdo */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Ilustração */}
        <div className="flex justify-center items-center">
          <Image
            src="/img1.png"
            alt="Contato"
            width={400}
            height={300}
            className="rounded"
          />
        </div>

        {/* Conteúdo adicional do footer (ex: links, contatos) */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Sobre nós</h2>
          <p className="text-gray-600">
            Este projeto tem como objetivo conectar pessoas em situação de vulnerabilidade com os serviços de assistência social disponíveis na Zona Norte de São Paulo.
          </p>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center px-6 bg-[#003b3b] text-white">
        <span className="text-sm">© 2025 ConectaApoio. Todos os direitos reservados.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {/* Exemplos de ícones ou links sociais */}
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="Email">✉️</a>
          <a href="#" aria-label="Telefone">📞</a>
        </div>
      </div>
    </footer>
  );
}
