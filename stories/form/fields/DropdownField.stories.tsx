import type { Meta, StoryObj } from '@storybook/react';
import { DropdownField } from '~/form/fields';
import type { Option } from '~/form/fields/types';

const meta: Meta<typeof DropdownField> = {
  title: 'form/fields/DropdownField',
  component: DropdownField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isRequired: { control: 'boolean' },
    isClearable: { control: 'boolean' },
    additionalInformation: { control: 'text' },
    options: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownField>;

const opciones: Option[] = [
  { label: 'Perú', value: 'pe' },
  { label: 'Chile', value: 'cl' },
  { label: 'Colombia', value: 'co' },
];

export const ConOpciones: Story = {
  args: {
    name: 'seleccion',
    label: 'País',
    options: opciones,
    isRequired: true,
    placeholder: 'Selecciona un país',
  },
};

export const SinOpciones: Story = {
  args: {
    name: 'seleccion',
    label: 'Sin datos disponibles',
    options: [],
    isRequired: false,
    placeholder: 'No hay opciones',
  },
};

export const Borrable: Story = {
  args: {
    name: 'seleccion',
    label: 'País (borrable)',
    options: opciones,
    isRequired: true,
    isClearable: true,
    placeholder: 'Selecciona y luego haz click en la X para borrar',
  },
};

export const ConInformaciónAdicional: Story = {
  args: {
    name: 'seleccion',
    label: 'País',
    options: opciones,
    isRequired: true,
    placeholder: 'Selecciona uno',
    additionalInformation: 'Selecciona tu país de residencia actual.',
  },
};
