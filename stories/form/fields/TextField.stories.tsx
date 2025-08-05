import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '~/form/fields/TextField';

const meta: Meta<typeof TextField> = {
  title: 'form/fields/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'hidden'],
    },
    isRequired: { control: 'boolean' },
    validateEmail: { control: 'boolean' },
    validatePassword: { control: 'boolean' },
    regexp: { control: 'object' },
    regexpErrorLabel: { control: 'text' },
    minLength: { control: 'number' },
    maxLength: { control: 'number' },
    showCharacterIndicator: { control: 'boolean' },
    additionalInformation: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Básico: Story = {
  args: {
    name: 'input',
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
    isRequired: true,
    maxLength: 20,
    showCharacterIndicator: true,
  },
};

export const EmailValido: Story = {
  args: {
    name: 'input',
    label: 'Correo electrónico',
    type: 'email',
    placeholder: 'usuario@ejemplo.com',
    isRequired: true,
    validateEmail: true,
  },
};

export const ContraseñaSegura: Story = {
  args: {
    name: 'input',
    label: 'Contraseña',
    type: 'password',
    placeholder: '••••••••',
    isRequired: true,
    validatePassword: true,
    maxLength: 16,
    showCharacterIndicator: true,
  },
};

export const ConExpresiónRegular: Story = {
  args: {
    name: 'input',
    label: 'Solo letras mayúsculas',
    regexp: /^[A-Z]+$/,
    regexpErrorLabel: 'Solo se permiten letras mayúsculas',
    placeholder: 'EJEMPLO',
    isRequired: true,
  },
};
