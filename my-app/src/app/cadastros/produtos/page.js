"use client";

import { Table } from "flowbite-react";
import SidebarComponent from "../../sidebar/page"; // Importando o componente Sidebar corretamente

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarComponent /> {/* Renderizando a sidebar */}
      <div className="flex-1 ml-64 py-10"> {/* Adicionei ml-64 para margem lateral */}
        {/* Header */}
        <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Cadastro de Produtos
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gerencie e visualize os produtos cadastrados no sistema.
          </p>
        </header>
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <div className="flex flex-col justify-center w-full py-8"> 
          {/* Contêiner da tabela com overflow e rolagem apenas nela */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[500px]"> 
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Código</Table.HeadCell>
                <Table.HeadCell>Emp</Table.HeadCell>
                <Table.HeadCell>Descrição</Table.HeadCell>
                <Table.HeadCell>Descrição Reduzida</Table.HeadCell>
                <Table.HeadCell>Diretiva</Table.HeadCell>
                <Table.HeadCell>Bal.</Table.HeadCell>
                <Table.HeadCell>Código Barras</Table.HeadCell>
                <Table.HeadCell>Código NCM</Table.HeadCell>
                <Table.HeadCell>Vasilh.</Table.HeadCell>
                <Table.HeadCell>CST</Table.HeadCell>
                <Table.HeadCell>CST Pis</Table.HeadCell>
                <Table.HeadCell>Pis</Table.HeadCell>
                <Table.HeadCell>CST Cofins</Table.HeadCell>
                <Table.HeadCell>Cofins</Table.HeadCell>
                <Table.HeadCell>Cest</Table.HeadCell>
                <Table.HeadCell>CTS</Table.HeadCell>
                <Table.HeadCell>Ativo</Table.HeadCell>
                <Table.HeadCell>Pr.Venda</Table.HeadCell>
                <Table.HeadCell>Pr.Venda 1</Table.HeadCell>
                <Table.HeadCell>Pr.Venda 2</Table.HeadCell>
                <Table.HeadCell>Pr.Venda 3</Table.HeadCell>
                <Table.HeadCell>Pr.Venda 4</Table.HeadCell>
                <Table.HeadCell>Pr.Venda 5</Table.HeadCell>
                <Table.HeadCell>Oferta</Table.HeadCell>
                <Table.HeadCell>Pr.Normal</Table.HeadCell>
                <Table.HeadCell>Cod Tiaa</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Apple MacBook Pro 17"'}
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>Macbook Pro</Table.Cell>
                  <Table.Cell>12345</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                  <Table.Cell>123456789012</Table.Cell>
                  <Table.Cell>12345678</Table.Cell>
                  <Table.Cell>Vasilh Info</Table.Cell>
                  <Table.Cell>01</Table.Cell>
                  <Table.Cell>05</Table.Cell>
                  <Table.Cell>1.65%</Table.Cell>
                  <Table.Cell>07</Table.Cell>
                  <Table.Cell>3.00%</Table.Cell>
                  <Table.Cell>12345</Table.Cell>
                  <Table.Cell>98765</Table.Cell>
                  <Table.Cell>Ativo</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>$2899</Table.Cell>
                  <Table.Cell>$2799</Table.Cell>
                  <Table.Cell>$2699</Table.Cell>
                  <Table.Cell>$2599</Table.Cell>
                  <Table.Cell>Sim</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>001234</Table.Cell>
                  <Table.Cell>
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
                {/* Repita este padrão para outras linhas da tabela */}
              </Table.Body>
            </Table>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
