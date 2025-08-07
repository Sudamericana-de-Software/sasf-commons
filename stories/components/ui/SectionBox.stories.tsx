import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SectionBox } from '~/components/ui';

const meta: Meta<typeof SectionBox> = {
  title: 'components/ui/SectionBox',
  component: SectionBox,
  tags: ['autodocs'],
  argTypes: {
    // Props
    label: {
      control: 'text',
      description: 'Texto o nodo que aparece flotando sobre el borde',
      table: { category: 'Props' },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el contenedor',
      table: { category: 'Props' },
    },
    children: {
      control: false,
      table: { disable: true },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SectionBox>;

export const Default: Story = {
  args: {
    label: 'Encabezado',
    className: '',
    children: (
      <div>
        <p>Este es el contenido de la sección.</p>
        <p>Puedes colocar aquí cualquier ReactNode.</p>
      </div>
    ),
  },
};

export const CustomClass: Story = {
  args: {
    label: 'Sección Destacada',
    className: 'bg-yellow-50 border-yellow-400',
    children: <p>Contenido con fondo y borde personalizados.</p>,
  },
};
