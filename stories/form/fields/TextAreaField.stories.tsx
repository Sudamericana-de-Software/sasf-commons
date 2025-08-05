import type { Meta, StoryObj } from '@storybook/react';
import { TextAreaField } from '~/form/fields/TextAreaField';

const meta: Meta<typeof TextAreaField> = {
  title: 'form/fields/TextAreaField',
  component: TextAreaField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    isRequired: { control: 'boolean' },
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
    maxLength: { control: 'number' },
    minLength: { control: 'number' },
    showCharacterIndicator: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextAreaField>;

export const Básico: Story = {
  args: {
    name: 'comentario',
    label: 'Comentario',
    placeholder: 'Escribe algo...',
    isRequired: true,
    maxLength: 150,
    rows: 4,
  },
};

export const ConError: Story = {
  args: {
    name: 'comentario',
    label: 'Descripción',
    isRequired: true,
    maxLength: 50,
    defaultValue: 'Este texto excede el límite de 50 caracteres para demostrar el manejo de errores y el contador vibrante.',
  },
};
