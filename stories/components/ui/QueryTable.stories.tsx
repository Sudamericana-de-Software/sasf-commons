import type { Meta, StoryObj } from '@storybook/react';
import type { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { QueryTable, QueryTableProps } from '~/components/ui';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface Pokemon {
  name: string;
  url: string;
}

const personColumns: ColumnDef<Person>[] = [
  { header: 'ID', accessorKey: 'id' },
  { header: 'First Name', accessorKey: 'firstName' },
  { header: 'Last Name', accessorKey: 'lastName' },
  { header: 'Age', accessorKey: 'age' },
];

const pokemonColumns: ColumnDef<Pokemon>[] = [
  { header: 'Nombre', accessorKey: 'name' },
  { header: 'URL', accessorKey: 'url' },
];

// Parcheamos fetch en módulo para simulación de /api/people
const _origFetch = window.fetch;
window.fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : input instanceof Request ? input.url : String(input);
  if (url.includes('/api/people')) {
    const u = new URL(url, window.location.origin);
    const page = Number(u.searchParams.get('page') ?? '0');
    const size = Number(u.searchParams.get('size') ?? '5');
    const filter = u.searchParams.get('filter') ?? '';

    let data: Person[] = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      firstName: `First ${i + 1}`,
      lastName: `Last ${i + 1}`,
      age: 20 + (i % 30),
    }));
    if (filter) {
      data = data.filter((p) => p.firstName.toLowerCase().includes(filter.toLowerCase()) || p.lastName.toLowerCase().includes(filter.toLowerCase()));
    }
    const totalElements = data.length;
    const content = data.slice(page * size, page * size + size);
    return new Response(JSON.stringify({ content, totalElements }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
  return _origFetch(input, init);
};

const meta: Meta = {
  title: 'components/ui/QueryTable',
  component: QueryTable as React.ComponentType<unknown>,
  tags: ['autodocs'],
  argTypes: {
    // Props
    title: { control: 'text', table: { category: 'Props' } },
    searchable: { control: 'boolean', table: { category: 'Props' } },
    searchPlaceholder: { control: 'text', table: { category: 'Props' } },
    defaultPage: { control: 'number', table: { category: 'Props' } },
    defaultSize: { control: 'number', table: { category: 'Props' } },

    // Events
    onSelectAction: { action: 'select', table: { category: 'Events' } },
    onVisualizeAction: { action: 'visualize', table: { category: 'Events' } },
    onDeleteAction: { action: 'delete', table: { category: 'Events' } },
    onNewAction: { action: 'new', table: { category: 'Events' } },

    // No usados
    columns: { table: { disable: true } },
    fetchUrl: { table: { disable: true } },
    queryParams: { table: { disable: true } },
    filterKey: { table: { disable: true } },
    pageKey: { table: { disable: true } },
    sizeKey: { table: { disable: true } },
    sortKey: { table: { disable: true } },
    responseDataKey: { table: { disable: true } },
    responseTotalCount: { table: { disable: true } },
    debounceDelay: { table: { disable: true } },
    showOptions: { table: { disable: true } },
    statusAccessor: { table: { disable: true } },
    onStatusChange: { table: { disable: true } },
    onDeleteMassiveAction: { table: { disable: true } },
    defaultSortQuery: { table: { disable: true } },
    sorteable: { table: { disable: true } },
    pagesToShow: { table: { disable: true } },
    tableClassName: { table: { disable: true } },
    rowExpand: { table: { disable: true } },
    disableRowExpand: { table: { disable: true } },
    notFoundLabel: { table: { disable: true } },
    refreshEvent: { table: { disable: true } },
    autoFetch: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    errorClassName: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente para mostrar datos en tabla con paginación y búsqueda, obtenidos de una API REST que soporte paginación.',
      },
    },
  },
};
export default meta;

type PersonStory = StoryObj<QueryTableProps<Person>>;
type PokeStory = StoryObj<QueryTableProps<Pokemon>>;

export const Básico: PersonStory = {
  args: {
    title: 'Personas (simuladas)',
    columns: personColumns,
    fetchUrl: '/api/people',
    searchable: true,
    searchPlaceholder: 'Filtrar…',
    defaultPage: 0,
    defaultSize: 5,
  },
};

export const PokéAPI: PokeStory = {
  args: {
    title: 'Listado de Pokémon',
    columns: pokemonColumns,
    fetchUrl: 'https://pokeapi.co/api/v2/pokemon',
    responseDataKey: 'results',
    responseTotalCount: 'count',
    pageKey: 'offset',
    sizeKey: 'limit',
    filterKey: '',
    searchable: false,
    showOptions: true,
    defaultPage: 0,
    defaultSize: 10,
    onVisualizeAction: () => {},
    onSelectAction: () => {},
    onDeleteAction: () => {},
  },
};
