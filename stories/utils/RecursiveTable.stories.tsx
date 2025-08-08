import type { Meta, StoryObj } from '@storybook/react';
import type { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { RecursiveTable, type RecursiveTableProps } from '~/utils/RecursiveTable';

type Node = {
  id: string;
  name: string;
  size: number;
  children: Node[];
};

const columns: ColumnDef<Node>[] = [
  { header: 'Nombre', accessorKey: 'name' },
  {
    header: 'Tamaño',
    accessorKey: 'size',
    cell: (info) => `${info.getValue<number>()} KB`,
  },
  {
    header: 'Hijos',
    cell: ({ row }) => row.original.children?.length ?? 0,
  },
];

const data: Node[] = [
  {
    id: '1',
    name: 'Carpeta A',
    size: 120,
    children: [
      { id: '1.1', name: 'archivo-a1.txt', size: 10, children: [] },
      {
        id: '1.2',
        name: 'Carpeta A2',
        size: 25,
        children: [
          { id: '1.2.1', name: 'imagen.png', size: 12, children: [] },
          { id: '1.2.2', name: 'doc.pdf', size: 13, children: [] },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Carpeta B',
    size: 80,
    children: [
      { id: '2.1', name: 'presentacion.pptx', size: 40, children: [] },
      { id: '2.2', name: 'Carpeta B2', size: 15, children: [] },
    ],
  },
  { id: '3', name: 'archivo-sueltito.md', size: 5, children: [] },
];

const meta: Meta<React.ComponentType<RecursiveTableProps<Node>>> = {
  title: 'utils/RecursiveTable',
  component: RecursiveTable as unknown as React.ComponentType<RecursiveTableProps<Node>>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: { source: { excludeDecorators: true } },
    controls: { disable: true }, // si luego quieres habilitar otros props, quita esto
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    data: {
      description: 'Arreglo de nodos en el nivel raíz.',
      table: { category: 'Props', type: { summary: 'Node[]' } },
      control: { disable: true },
    },
    columns: {
      description: 'Columnas de TanStack Table para `Node`.',
      table: { category: 'Props', type: { summary: 'ColumnDef<Node>[]' } },
      control: { disable: true },
    },
    childKey: {
      description: 'Clave del campo que contiene los hijos recursivos.',
      table: { category: 'Props', type: { summary: '"children"' } },
      control: { disable: true }, // 🔒 NO editable en Controls
    },
    disableRowExpand: {
      description: 'Función para deshabilitar expand en filas específicas. Si no se provee, se deshabilita cuando no hay hijos.',
      table: { category: 'Props', type: { summary: '(row: Node) => boolean' } },
      control: { disable: true },
    },
  },
  args: {
    data,
    columns,
    childKey: 'children', // 🔒 valor fijo
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Básica: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Uso básico de `RecursiveTable` con jerarquía `Node`. ' + 'El `childKey` está fijado a `"children"` para evitar errores al modificarlo.',
      },
    },
  },
};
