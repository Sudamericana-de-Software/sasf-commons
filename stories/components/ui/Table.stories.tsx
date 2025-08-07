import type { Meta, StoryObj } from '@storybook/react';
import type { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { Table, TableProps } from '~/components/ui';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

const people: Person[] = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  firstName: `First${i + 1}`,
  lastName: `Last${i + 1}`,
  age: 18 + ((i + 3) % 40),
}));

const personColumns: ColumnDef<Person>[] = [
  { header: 'ID', accessorKey: 'id' },
  { header: 'Nombre', accessorKey: 'firstName' },
  { header: 'Apellido', accessorKey: 'lastName' },
  { header: 'Edad', accessorKey: 'age' },
];

// Wrapper tipado para fijar T=Person
const PersonTable: React.FC<TableProps<Person>> = (props) => <Table<Person> {...props} />;
PersonTable.displayName = 'Table';

const meta: Meta<typeof PersonTable> = {
  title: 'components/ui/Table',
  component: PersonTable,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true, sort: 'alpha' },
    docs: {
      description: {
        component:
          'Tabla paginada/filtrable basada en TanStack Table. Esta demo fija el tipo `Person` y oculta props internos que no se tocan desde los controles.',
      },
    },
  },
  argTypes: {
    // Props
    title: {
      control: 'text',
      description: 'Título mostrado en el header.',
      table: { category: 'Props' },
    },
    searchable: {
      control: 'boolean',
      description: 'Muestra el buscador global.',
      table: { category: 'Búsqueda' },
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder del buscador.',
      table: { category: 'Búsqueda' },
    },
    showOptions: {
      control: 'boolean',
      description: 'Muestra los controles de paginación.',
      table: { category: 'Paginación' },
    },
    defaultPage: {
      control: { type: 'number', min: 0 },
      description: 'Página inicial (0-index).',
      table: { category: 'Paginación' },
    },
    defaultSize: {
      control: { type: 'number', min: 1 },
      description: 'Tamaño de página inicial.',
      table: { category: 'Paginación' },
    },
    loading: {
      control: 'boolean',
      description: 'Muestra estado de carga.',
      table: { category: 'Estado' },
    },

    // Events
    onSelectAction: {
      action: 'select',
      description: 'Click en “Editar” de una fila.',
      table: { category: 'Events' },
    },
    onDeleteAction: {
      action: 'delete',
      description: 'Click en “Eliminar” de una fila.',
      table: { category: 'Events' },
    },
    onNewAction: {
      action: 'new',
      description: 'Click en botón “Nuevo”.',
      table: { category: 'Events' },
    },

    // No usados
    data: { table: { disable: true } },
    columns: { table: { disable: true } },
    rowExpand: { table: { disable: true } },
    disableRowExpand: { table: { disable: true } },
    tableClassName: { table: { disable: true } },
    noRegistersText: { table: { disable: true } },
  },
  args: {
    title: 'Personas',
    data: people,
    columns: personColumns,
    searchable: true,
    searchPlaceholder: 'Buscar…',
    showOptions: true,
    defaultPage: 0,
    defaultSize: 5,
    loading: false,
  },
};
export default meta;

type Story = StoryObj<typeof PersonTable>;

export const Básica: Story = {};

export const ConFilasExpandibles: Story = {
  args: {
    rowExpand: (row) => (
      <div className="text-left">
        <strong>Detalle:</strong> #{row.id} — {row.firstName} {row.lastName} ({row.age})
      </div>
    ),
    disableRowExpand: (row) => row.age < 23,
  },
  // Si quisieras re-exponer estos props SOLO en esta story:
  // argTypes: {
  //   rowExpand: { table: { disable: false } },
  //   disableRowExpand: { table: { disable: false } },
  // },
};

export const Cargando: Story = { args: { loading: true } };

export const Vacia: Story = {
  args: {
    data: [],
    noRegistersText: 'No hay datos para mostrar.',
  },
  // Si necesitas que el texto sea editable desde Controls solo en esta story:
  // argTypes: { noRegistersText: { table: { disable: false }, control: 'text' } },
};

export const PaginaciónDe10: Story = { args: { defaultSize: 10 } };
