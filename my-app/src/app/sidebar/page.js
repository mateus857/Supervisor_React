// app/sidebar/page.js
"use client";
import { ClipboardIcon, CogIcon, DocumentReportIcon, LogoutIcon, HomeIcon } from '@heroicons/react/outline';
import { Sidebar } from "flowbite-react";
import { usePathname } from 'next/navigation'; // Hook para obter a rota no novo sistema de roteamento

export default function SidebarComponent() {
  const pathname = usePathname(); // Hook para obter a rota atual

  const isActive = (href) => pathname === href; // Função para verificar se a rota é ativa

  return (
    <Sidebar aria-label="Sidebar with modern styling" className="fixed top-0 left-0 h-screen bg-white shadow-lg">
         <Sidebar.Logo href="/home">
        Unity Sistemas
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/home"
            icon={HomeIcon}
            className={`${isActive('/home') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Home
          </Sidebar.Item>
{/* teste */}

<Sidebar.Collapse icon={ClipboardIcon} label="Cadastros">
<Sidebar.Item
            href="/cadastros/produtos"
            icon={HomeIcon}
            className={`${isActive('/cadastros/produtos') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Produtos
          </Sidebar.Item>  <Sidebar.Item href="#">Entidades</Sidebar.Item>
  <Sidebar.Item href="#">Grupo Usuários</Sidebar.Item>
  <Sidebar.Item href="#">Usuários</Sidebar.Item>
  <Sidebar.Item href="#">Empresas</Sidebar.Item>
  <Sidebar.Item href="#">Impressoras</Sidebar.Item>
  <Sidebar.Item href="#">Teclados</Sidebar.Item>
  <Sidebar.Item href="#">Telas</Sidebar.Item>
  <Sidebar.Item href="#">PDVs</Sidebar.Item>
  <Sidebar.Item href="#">Tributações</Sidebar.Item>
  <Sidebar.Item href="#">Menus de Códigos</Sidebar.Item>
  <Sidebar.Item href="#">Menus Operacionais</Sidebar.Item>
  <Sidebar.Item href="#">Promoções</Sidebar.Item>
  <Sidebar.Item href="#">Meios de Pagamentos</Sidebar.Item>
  <Sidebar.Item href="#">Planos de Pagamentos</Sidebar.Item>
  <Sidebar.Item href="#">Comunicadores</Sidebar.Item>
  <Sidebar.Item href="#">Vasilhames</Sidebar.Item>
  <Sidebar.Item href="#">Bandeiras</Sidebar.Item>
  <Sidebar.Item href="#">Bins</Sidebar.Item>
  <Sidebar.Item href="#">Questionário</Sidebar.Item>
</Sidebar.Collapse>

{/* <Sidebar.Collapse icon={ClipboardIcon} label="Processos"> */}
  {/* Grupo 1: Comunicação */}
  {/* <h3 className="px-4 py-2 font-semibold text-gray-600">Comunicação</h3>
  <Sidebar.Item href="#">Enviar Configuração</Sidebar.Item>
  <Sidebar.Item href="#">Enviar Produtos Geral</Sidebar.Item>
  <Sidebar.Item href="#">Enviar Produtos Alterados</Sidebar.Item>
  <Sidebar.Item href="#">Enviar Dados Entidades</Sidebar.Item>
  <Sidebar.Item href="#">Painel de Avisos</Sidebar.Item>
  <Sidebar.Item href="#">Enviar Última Configuração Válida</Sidebar.Item>
  <Sidebar.Item href="#">Enviar Versão PDVs Para o Servidor</Sidebar.Item> */}

  {/* Grupo 2: Vasilhames */}
  {/* <h3 className="px-4 py-2 font-semibold text-gray-600">Vasilhames</h3>
  <Sidebar.Item href="#">Gerar Cupom de Vasilhames</Sidebar.Item> */}

  {/* Grupo 3: Processamentos */}
  {/* <h3 className="px-4 py-2 font-semibold text-gray-600">Processamentos</h3>
  <Sidebar.Item href="#">Processamento de Cupons</Sidebar.Item>
  <Sidebar.Item href="#">Processamento de PDV Logs</Sidebar.Item>
  <Sidebar.Item href="#">Processamento de PDV</Sidebar.Item>
  <Sidebar.Item href="#">Central de Contingência</Sidebar.Item> */}

  {/* Grupo 4: Pedidos */}
  {/* <h3 className="px-4 py-2 font-semibold text-gray-600">Pedidos</h3>
  <Sidebar.Item href="#">Gerar Pedidos de Venda</Sidebar.Item>
</Sidebar.Collapse> */}


{/* fim */}



          {/* <Sidebar.Item
            href="/pages"
            icon={ClipboardIcon}
            className={`${isActive('/cadastros') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Cadastros
          </Sidebar.Item> */}
          <Sidebar.Item
            href="/processos"
            icon={CogIcon}
            className={`${isActive('/processos') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Processos
          </Sidebar.Item>
          <Sidebar.Item
            href="/relatorios"
            icon={DocumentReportIcon}
            className={`${isActive('/relatorios') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Relatórios
          </Sidebar.Item>
          {/* <Sidebar.Item
            href="/#"
            icon={CogIcon}
            className={`${isActive('/#') ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Parâmetros
          </Sidebar.Item> */}
          <Sidebar.Collapse icon={CogIcon} label="Parâmetros">
          <Sidebar.Item href="#">Configuração Geral</Sidebar.Item>
          <Sidebar.Item href="#">Configuração Empresa</Sidebar.Item>
          <Sidebar.Item href="#">Processa Excepcionais</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item
            href="/#"
            icon={LogoutIcon}
            className="text-gray-600 hover:bg-gray-100"
          >
            Sair
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
