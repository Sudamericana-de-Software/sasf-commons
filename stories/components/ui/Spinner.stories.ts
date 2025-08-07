import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '~/components/ui';

const meta: Meta<typeof Spinner> = {
  title: 'components/ui/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    // Props
    className: {
      control: 'text',
      description: 'Clases Tailwind CSS adicionales para ajustar tamaño, grosor, color, etc.',
      table: { category: 'Props' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    className: 'h-4 w-4',
  },
};

export const Large: Story = {
  args: {
    className: 'h-24 w-24 border-t-8',
  },
};

export const CustomColor: Story = {
  args: {
    className: 'h-16 w-16 border-t-4 border-blue-500',
  },
};
