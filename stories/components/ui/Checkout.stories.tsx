import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkout } from '~/components/ui';
import { Button } from '~/form/fields';

const meta: Meta<typeof Checkout> = {
  title: 'components/ui/Checkout',
  component: Checkout,
  tags: ['autodocs'],
  argTypes: {
    // Props
    title: {
      control: 'text',
      description: 'Título principal del checkout',
      table: { category: 'Props' },
    },
    resoome: {
      control: 'object',
      description: 'Listado de items con clave, valor y opcional destacado',
      table: { category: 'Props' },
    },

    // Slots / Children
    children: {
      control: false,
      table: { category: 'Children' },
    },
    NextButtonSlot: {
      control: false,
      table: { category: 'Slots' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Checkout>;

const baseItems = [
  { clave: 'Subtotal', valor: 49.99 },
  { clave: 'Envío', valor: 5.0 },
  { clave: 'Descuento', valor: '-10.00' },
  { clave: 'Total', valor: 44.99, featured: true },
];

export const Básico: Story = {
  args: {
    title: 'Resumen de tu compra',
    resoome: baseItems,
    children: <p>Gracias por comprar con nosotros. A continuación verás el detalle de tu pedido.</p>,
    NextButtonSlot: <Button>Proceder al pago</Button>,
  },
};

export const SinChildren: Story = {
  args: {
    ...Básico.args!,
    children: undefined,
  },
};

export const DestacadoSoloTotal: Story = {
  args: {
    ...Básico.args!,
    resoome: baseItems.map((item) => (item.clave === 'Total' ? { ...item, featured: true } : { ...item, featured: false })),
  },
};

export const SoloItems: Story = {
  args: {
    title: 'Tu resumen',
    resoome: baseItems,
    NextButtonSlot: <Button>Continuar</Button>,
  },
};
