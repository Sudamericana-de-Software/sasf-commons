import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxField } from '~/form/fields';

const meta: Meta<typeof CheckboxField> = {
  title: 'form/fields/CheckboxField',
  component: CheckboxField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Clave del formulario' },
    label: { control: 'text', description: 'Texto de la etiqueta' },
    defaultChecked: { control: 'boolean', description: '¿Marcado por defecto?' },
    isDisabled: { control: 'boolean', description: '¿Deshabilitado?' },
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxField>;

export const Desmarcado: Story = {
  args: {
    name: 'accept',
    label: 'Acepto los términos y condiciones',
    defaultChecked: false,
  },
};

export const Marcado: Story = {
  args: {
    name: 'accept',
    label: 'Acepto los términos y condiciones',
    defaultChecked: true,
  },
};

export const Deshabilitado: Story = {
  args: {
    name: 'accept',
    label: 'Acepto los términos y condiciones',
    defaultChecked: false,
    isDisabled: true,
  },
};
