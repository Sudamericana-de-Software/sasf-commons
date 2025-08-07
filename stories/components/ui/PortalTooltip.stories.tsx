import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PortalTooltip } from '~/components/ui';

const meta: Meta<typeof PortalTooltip> = {
  title: 'components/ui/PortalTooltip',
  component: PortalTooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Contenido que se muestra dentro del tooltip',
      table: { category: 'Props' },
    },
    children: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof PortalTooltip>;

export const Básico: Story = {
  render: (args) => (
    <div className="p-16 flex justify-center">
      <PortalTooltip {...args}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Pasa el cursor</button>
      </PortalTooltip>
    </div>
  ),
  args: {
    content: 'Este es un tooltip sencillo.',
  },
};

export const ConTextoLargo: Story = {
  ...Básico,
  args: {
    content: 'Este tooltip contiene un texto más largo para demostrar que el ancho máximo se aplica y el contenido se adapta en varias líneas si es necesario.',
  },
};
