import type { Meta, StoryObj } from '@storybook/react';
import { NumberField } from '~/form/fields';

const meta: Meta<typeof NumberField> = {
  title: 'form/fields/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    numberType: {
      control: 'select',
      options: ['float', 'integer'],
    },
    isRequired: { control: 'boolean' },
    defaultValue: { control: 'number' },
    currency: { control: 'text' },
    additionalInformation: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const NúmeroDecimal: Story = {
  args: {
    name: 'amount',
    label: 'Monto',
    placeholder: 'Ingresa un número',
    numberType: 'float',
    isRequired: true,
    defaultValue: 123.45,
    currency: 'USD',
    additionalInformation: 'Solo números válidos',
  },
};

export const NúmeroEntero: Story = {
  args: {
    name: 'amount',
    label: 'Cantidad',
    placeholder: 'Solo enteros',
    numberType: 'integer',
    isRequired: true,
    defaultValue: 10,
  },
};
