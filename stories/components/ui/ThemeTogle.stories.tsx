import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '~/components/ui';

const meta: Meta<typeof ThemeToggle> = {
  title: 'components/ui/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Básico: Story = {};
