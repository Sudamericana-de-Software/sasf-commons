import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '~/components/ui';

const meta: Meta<typeof Loader> = {
  title: 'components/ui/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el SVG (color, tamaño…) ',
      table: { category: 'Props' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Básico: Story = {
  args: {
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader por defecto, con tamaño y color según la clase interna.',
      },
    },
  },
};

export const ConColorYTamaño: Story = {
  args: {
    className: 'text-red-500 h-6 w-6',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader con color rojo y tamaño 1.5rem (h-6, w-6).',
      },
    },
  },
};
