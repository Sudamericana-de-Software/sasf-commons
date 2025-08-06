import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextFieldUI, TextFieldUIProps } from '~/form/ui';

const meta: Meta<typeof TextFieldUI> = {
  title: 'form/ui/TextFieldUI',
  component: TextFieldUI,
  tags: ['autodocs'],
  argTypes: {
    // Props
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Tipo de input',
      table: { category: 'Props' },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
      table: { category: 'Props' },
    },
    inputClassName: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el input',
      table: { category: 'Props' },
    },
    value: {
      control: 'text',
      description: 'Valor actual del input',
      table: { category: 'Props' },
    },
    additionalInformation: {
      control: 'text',
      description: 'Contenido del tooltip adicional',
      table: { category: 'Props' },
    },

    // Events
    onChange: {
      action: 'changed',
      description: 'Se dispara al escribir',
      table: { category: 'Events' },
    },
  },
};
export default meta;

type Story = StoryObj<TextFieldUIProps>;

// Template controlado para manejar el valor y disparar onChange
const ControlledTemplate = (args: TextFieldUIProps) => {
  const [{ value }, updateArgs] = useArgs<TextFieldUIProps>();
  return <TextFieldUI {...args} value={value ?? ''} onChange={(v) => updateArgs({ value: v })} />;
};

const baseArgs: TextFieldUIProps = {
  type: 'text',
  placeholder: 'Escribe aquí…',
  inputClassName: '',
  disabled: false,
  value: '',
  additionalInformation: '',
};

export const Básico: Story = {
  render: ControlledTemplate,
  args: {
    ...baseArgs,
  },
};

export const ConTooltip: Story = {
  render: ControlledTemplate,
  args: {
    ...baseArgs,
    additionalInformation: 'Aquí puedes ver más detalles',
  },
};

export const Deshabilitado: Story = {
  render: ControlledTemplate,
  args: {
    ...baseArgs,
    placeholder: 'No editable',
    disabled: true,
  },
};
