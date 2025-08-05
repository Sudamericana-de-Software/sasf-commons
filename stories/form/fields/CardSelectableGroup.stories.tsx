import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CardSelectableGroup, CardSelectableGroupProps } from '~/form/fields';

const tarjetas: CardSelectableGroupProps['options'] = [
  {
    value: 'opt1',
    label: 'Opción 1',
    content: <div>Contenido de la opción 1</div>,
  },
  {
    value: 'opt2',
    label: 'Opción 2',
    content: <div>Contenido de la opción 2 </div>,
  },
  {
    value: 'opt3',
    label: 'Opción 3',
    content: <div>Contenido de la opción 3 </div>,
  },
];

const meta: Meta<typeof CardSelectableGroup> = {
  title: 'form/fields/CardSelectableGroup',
  component: CardSelectableGroup,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Clave del campo en el formulario' },
    required: { control: 'boolean', description: '¿Es obligatorio?' },
    requiredMsg: { control: 'text', description: 'Mensaje de validación si es requerido' },
    cardSizeX: { control: 'number', description: 'Ancho de cada tarjeta (px)' },
    cardSizeY: { control: 'number', description: 'Alto de cada tarjeta (px)' },
  },
};
export default meta;
type Story = StoryObj<typeof CardSelectableGroup>;

export const PorDefecto: Story = {
  args: {
    name: 'seleccion',
    options: tarjetas,
    required: true,
    requiredMsg: 'Selecciona al menos una tarjeta',
    cardSizeX: 180,
    cardSizeY: 140,
  },
};

export const ConCarga: Story = {
  args: {
    name: 'seleccion',
    options: tarjetas.map((t, i) => (i === 1 ? { ...t, isLoadingContent: true } : t)),
    required: false,
    cardSizeX: 180,
    cardSizeY: 140,
  },
};
