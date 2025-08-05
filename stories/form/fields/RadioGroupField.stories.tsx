import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroupField } from '~/form/fields/RadioGroupField';

const meta: Meta<typeof RadioGroupField> = {
  title: 'form/fields/RadioGroupField',
  component: RadioGroupField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    required: { control: 'boolean' },
    options: { control: 'object' },
    defaultCheckedValue: { control: 'text' },
    groupClassName: { control: 'text' },
    optionClassName: { control: 'text' },
    optionLabelClassName: { control: 'text' },
    errorClassName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroupField>;

export const ConOpciones: Story = {
  args: {
    name: 'genero',
    required: true,
    options: [
      { label: 'Masculino', value: 'M' },
      { label: 'Femenino', value: 'F' },
      { label: 'Otro', value: 'X' },
    ],
    defaultCheckedValue: 'F',
  },
};

export const SinSeleccion: Story = {
  args: {
    name: 'genero',
    required: true,
    options: [
      { label: 'Sí', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
};
