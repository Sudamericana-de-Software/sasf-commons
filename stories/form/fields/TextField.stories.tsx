import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '~/form/fields';

const meta: Meta<typeof TextField> = {
  title: 'Componentes/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

type TemplateProps = React.ComponentProps<typeof TextField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      input: args.defaultValue ?? '',
    },
  });

  return (
    <FormProvider {...methods}>
      <TextField {...args} name="input" />
    </FormProvider>
  );
};

export const Básico: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
    isRequired: true,
    maxLength: 20,
    showCharacterIndicator: true,
  },
};

export const EmailValido: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Correo electrónico',
    type: 'email',
    placeholder: 'usuario@ejemplo.com',
    isRequired: true,
    validateEmail: true,
  },
};

export const ContraseñaSegura: Story = {
  render: (args) => <Template {...args} />,
  args: {
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
  render: (args) => <Template {...args} />,
  args: {
    label: 'Solo letras mayúsculas',
    regexp: /^[A-Z]+$/,
    regexpErrorLabel: 'Solo se permiten letras mayúsculas',
    placeholder: 'EJEMPLO',
    isRequired: true,
  },
};
