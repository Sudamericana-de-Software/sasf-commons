import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Popover } from '~/components/ui';

const meta: Meta<typeof Popover> = {
  title: 'components/ui/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    // Props
    width: {
      control: 'text',
      description: 'Ancho del popover (CSS)',
      table: { category: 'Props' },
    },
    height: {
      control: 'text',
      description: 'Alto del popover (CSS)',
      table: { category: 'Props' },
    },
    position: {
      control: {
        type: 'inline-radio',
        options: ['top', 'bottom', 'left', 'right'],
      },
      description: 'Posición relativa al trigger',
      table: { category: 'Props' },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: { category: 'Props' },
    },

    // No usados
    trigger: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Básico: Story = {
  render: (args) => (
    <Popover {...args} trigger={<button className="px-3 py-1 bg-blue-600 text-white rounded"> Click para abrir</button>}>
      <div>Este es el contenido del popover.</div>
    </Popover>
  ),
  args: {
    width: '200px',
    height: '100px',
    position: 'bottom',
    className: '',
  },
};

export const Arriba: Story = {
  ...Básico,
  args: {
    ...Básico.args!,
    position: 'top',
  },
};

export const Izquierda: Story = {
  ...Básico,
  args: {
    ...Básico.args!,
    position: 'left',
  },
};

export const Derecha: Story = {
  ...Básico,
  args: {
    ...Básico.args!,
    position: 'right',
  },
};

export const TamañoPersonalizado: Story = {
  ...Básico,
  args: {
    width: '300px',
    height: '150px',
    position: 'bottom',
  },
};
