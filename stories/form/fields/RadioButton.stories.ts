import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from '~/form/fields/RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'form/fields/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    isRequired: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Predeterminado: Story = {
  args: {
    name: 'eleccion',
    value: 'opcion1',
    label: 'Opción 1',
  },
};

export const RequeridoYSinSeleccion: Story = {
  args: {
    name: 'eleccion',
    value: 'opcion2',
    label: 'Opción 2',
    isRequired: true,
  },
};
