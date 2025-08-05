import type { Meta, StoryObj } from '@storybook/react';
import { SelectField } from '~/form/fields/SelectField';

const meta: Meta<typeof SelectField> = {
  title: 'form/fields/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    isRequired: { control: 'boolean' },
    options: { control: 'object' },
    labelClassName: { control: 'text' },
    selectClassName: { control: 'text' },
    errorClassName: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const ConOpciones: Story = {
  args: {
    name: 'seleccion',
    label: 'País',
    isRequired: true,
    options: [
      { label: 'Perú', value: 'pe' },
      { label: 'Argentina', value: 'ar' },
      { label: 'México', value: 'mx' },
    ],
  },
};

export const SinOpciones: Story = {
  args: {
    name: 'seleccion',
    label: 'Opciones vacías',
    isRequired: true,
    options: [],
  },
};
