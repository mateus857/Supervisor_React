import { Card } from 'flowbite-react';
import Link from 'next/link';
import SidebarComponent from "../sidebar/page";
import {
  CogIcon,
  DocumentDuplicateIcon,
  DatabaseIcon,
  ClipboardListIcon,
  TruckIcon,
  TicketIcon,
} from '@heroicons/react/outline';

function RelatoriosPage() {
  // Separar os itens por categorias
  const relatorios_cadastros = [
    { name: 'Enviar Configuração', icon: CogIcon },
    { name: 'Enviar Produtos Geral', icon: DocumentDuplicateIcon },
    { name: 'Enviar Produtos Alterados', icon: DatabaseIcon },
    { name: 'Enviar Dados Entidades', icon: ClipboardListIcon },
    { name: 'Painel de Avisos', icon: TicketIcon },
    { name: 'Enviar Última Configuração Válida', icon: TruckIcon },
    { name: 'Enviar Versão PDVs Para o Servidor', icon: TicketIcon },
  ];

  const relatorios_vendas = [
    { name: 'Gerar Cupom de Vasilhames', icon: ClipboardListIcon },
  ];

  const relatorios_financas = [
    { name: 'Processamento de Cupons', icon: ClipboardListIcon },
    { name: 'Processamento de PDV Logs', icon: ClipboardListIcon },
    { name: 'Processamento de PDV', icon: ClipboardListIcon },
    { name: 'Central de Contingência', icon: ClipboardListIcon },
  ];

  const relatorios_pdvs = [
    { name: 'Gerar Pedidos de Venda', icon: ClipboardListIcon },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarComponent />
      <div className="flex-1 ml-64 py-10">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col justify-center w-full py-8">
              <div className="px-4 mx-auto max-w-screen-lg lg:px-8">

                {/* Seção de R_cadastros */}
                <h2 className="text-lg font-bold mb-4">Relatórios Cadastros</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_cadastros.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Seção de r_vendas */}
                <h2 className="text-lg font-bold mb-4">Relatórios Vendas</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_vendas.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Seção de r_financas */}
                <h2 className="text-lg font-bold mb-4">Relatórios Finanças</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_financas.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Seção de r_pdvs */}
                <h2 className="text-lg font-bold mb-4">Relatórios PDVs</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mb-8">
                  {relatorios_pdvs.map((item, index) => (
                    <Link key={index} href={`/processos/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                      <Card className="cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200 bg-white p-3 rounded-lg shadow-md">
                        <item.icon className="w-6 h-6 mx-auto text-blue-500" />
                        <h3 className="text-center text-sm font-semibold text-gray-700">{item.name}</h3>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatoriosPage;
