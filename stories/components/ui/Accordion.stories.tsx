import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from '~/components/ui';

const meta: Meta<typeof Accordion> = {
  title: 'components/ui/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    // Props
    title: {
      control: 'text',
      description: 'Título que se muestra en la cabecera',
      table: { category: 'Props' },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Abre el acordeón por defecto',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la interacción',
      table: { category: 'Props' },
    },
    disabledText: {
      control: 'text',
      description: 'Tooltip que aparece si está deshabilitado',
      table: { category: 'Props' },
    },
    children: {
      control: false,
      table: { category: 'Children' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Predeterminado: Story = {
  args: {
    title: 'Título del acordeón',
    defaultOpen: false,
    disabled: false,
    disabledText: 'Deshabilitado',
    children: <p>Este es el contenido del acordeón. Aquí puedes poner cualquier elemento React para que se muestre al expandir.</p>,
  },
};

export const Abierto: Story = {
  args: {
    ...Predeterminado.args,
    defaultOpen: true,
  },
};

export const Deshabilitado: Story = {
  args: {
    ...Predeterminado.args,
    disabled: true,
    disabledText: 'No puedes abrir este acordeón',
  },
};
