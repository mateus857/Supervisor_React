// app/home/page.js
"use client"; // Isso permite o uso de hooks no cliente

import SidebarComponent from "../sidebar/page"; // Importando o componente Sidebar corretamente

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarComponent /> {/* Renderizando a sidebar aqui */}
      <div className="flex-1 ml-64 py-10"> {/* Adicionei ml-64 para margem lateral */}

<div class="px-4 mx-auto max-w-screen-2xl lg:px-12">

<div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">    
      <main className="p-4">
        <h1 className="text-2xl font-bold">Teste Supervisor</h1>
        {/* O conteúdo da página 'Home' pode ser adicionado aqui */}
      </main>
    </div>
    </div>
    </div>
    </div>
  );
}
