import type { Meta, StoryObj } from '@storybook/react';
import { DatePickerField } from '~/form/fields/DatePickerField';

const meta: Meta<typeof DatePickerField> = {
  title: 'form/fields/DatePickerField',
  component: DatePickerField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePickerField>;

export const Básico: Story = {
  args: {
    name: 'fecha',
    label: 'Fecha de nacimiento',
    isRequired: true,
    placeholderText: 'dd/mm/aaaa',
  },
};

export const ConRestriccionesDeRango: Story = {
  args: {
    name: 'fecha',
    label: 'Fecha entre límites',
    isRequired: true,
    placeholderText: 'Elija una fecha',
    minDate: new Date(Date.now() - 7 * 864e5),
    maxDate: new Date(Date.now() + 7 * 864e5),
  },
};

export const Deshabilitado: Story = {
  args: {
    name: 'fecha',
    label: 'Fecha (lectura)',
    placeholderText: 'dd/mm/aaaa',
    disabled: true,
    defaultValue: new Date(),
  },
};
