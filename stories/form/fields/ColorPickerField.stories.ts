import type { Meta, StoryObj } from '@storybook/react';
import { ColorPickerField } from '~/form/fields';

const meta: Meta<typeof ColorPickerField> = {
  title: 'form/fields/ColorPickerField',
  component: ColorPickerField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    labelClassName: { control: 'text' },
    inputClassName: { control: 'text' },
    isRequired: { control: 'boolean' },
    defaultValue: {
      control: 'color',
      description: 'Valor inicial (sólo para form provider en preview)',
      table: { type: { summary: 'string' } },
    },
  },
};
export default meta;
type Story = StoryObj<typeof ColorPickerField>;

export const Básico: Story = {
  args: {
    name: 'color',
    label: 'Selecciona un color',
    defaultValue: '#ff0000',
  },
};

export const Requerido: Story = {
  args: {
    name: 'color',
    label: 'Color (requerido)',
    isRequired: true,
    defaultValue: '#00ff00',
  },
};
