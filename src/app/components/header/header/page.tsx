import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between py-8 px-6 bg-white md:flex-row md:px-16">
      <div className="flex items-center space-x-4">
        <Image src="/img1.png" alt="Logo" width={50} height={50} />
        <h1 className="text-2xl font-bold text-gray-900">YourAppName</h1>
      </div>

      <nav className="mt-4 md:mt-0">
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li><a href="#notes" className="hover:text-blue-600">Notes</a></li>
          <li><a href="#knowledge" className="hover:text-blue-600">Knowledge</a></li>
          <li><a href="#tasks" className="hover:text-blue-600">Tasks</a></li>
          <li><a href="#spreadsheets" className="hover:text-blue-600">Database</a></li>
        </ul>
      </nav>
    </header>
  );
}