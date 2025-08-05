import type { Meta, StoryObj } from '@storybook/react';
import { ToggleField } from '~/form/fields';

const meta: Meta<typeof ToggleField> = {
  title: 'form/fields/ToggleField',
  component: ToggleField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'enterprise'],
    },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleField>;

export const Básico: Story = {
  args: {
    name: 'toogle',
    label: 'Activar',
    variant: 'default',
  },
};

export const Deshabilitado: Story = {
  args: {
    name: 'active',
    label: 'Modo lectura',
    variant: 'default',
    isDisabled: true,
  },
};
