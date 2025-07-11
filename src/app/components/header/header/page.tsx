import Image from "next/image";

export default function Header() {
  return (
    <header className="top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex flex-col items-center justify-between py-4 px-6 md:flex-row md:px-16">
        <div className="flex items-center space-x-4">
          <Image src="/img3.png" alt="Logo" width={70} height={70} />
          <h1 className="text-xl font-bold text-gray-900">Conecta Apoio</h1>
        </div>

        <nav className="mt-4 md:mt-0">
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#solicitacao" className="hover:text-blue-600">Solicitação</a></li>
            <li><a href="#servicos" className="hover:text-blue-600">Serviços</a></li>
            <li><a href="#unidades" className="hover:text-blue-600">Unidades</a></li>
            <li><a href="#footer" className="hover:text-blue-600">Sobre</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}