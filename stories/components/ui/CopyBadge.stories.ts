import type { Meta, StoryObj } from '@storybook/react';
import { CopyBadge } from '~/components/ui/CopyBadge';

const meta: Meta<typeof CopyBadge> = {
  title: 'components/ui/CopyBadge',
  component: CopyBadge,
  tags: ['autodocs'],
  argTypes: {
    // Props
    textToCopy: {
      control: 'text',
      description: 'Texto que se copiará al portapapeles',
      table: { category: 'Props' },
    },
    timeout: {
      control: 'number',
      description: 'Duración (ms) del estado "copiado" antes de volver al icono original',
      table: { category: 'Props' },
    },
    size: {
      control: 'number',
      description: 'Tamaño (px) de los iconos',
      table: { category: 'Props' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof CopyBadge>;

export const Predeterminado: Story = {
  args: {
    textToCopy: '¡Hola Mundo!',
    timeout: 2000,
    size: 20,
  },
};

export const TamañoGrande: Story = {
  args: {
    textToCopy: 'https://example.com',
    timeout: 2000,
    size: 32,
  },
};

export const TimeoutLargo: Story = {
  args: {
    textToCopy: 'Lorem ipsum dolor sit amet',
    timeout: 5000,
    size: 20,
  },
};
