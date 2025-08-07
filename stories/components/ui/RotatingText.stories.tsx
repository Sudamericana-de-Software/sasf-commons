import type { Meta, StoryObj } from '@storybook/react';
import { RotatingText } from '~/components/ui';

const meta: Meta<typeof RotatingText> = {
  title: 'components/ui/RotatingText',
  component: RotatingText,
  tags: ['autodocs'],
  argTypes: {
    // Props
    texts: {
      control: 'object',
      description: 'Array de textos que va mostrando uno tras otro',
      table: { category: 'Props' },
    },
    interval: {
      control: { type: 'number', min: 100, max: 10000, step: 100 },
      description: 'Milisegundos entre cada rotación',
      table: { category: 'Props' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof RotatingText>;

export const Básico: Story = {
  args: {
    texts: ['Primero', 'Segundo', 'Tercero'],
    interval: 2000,
  },
};

export const Rápido: Story = {
  ...Básico,
  args: {
    texts: ['A', 'B', 'C', 'D'],
    interval: 500,
  },
};

export const Lento: Story = {
  ...Básico,
  args: {
    texts: ['Uno', 'Dos', 'Tres'],
    interval: 5000,
  },
};
