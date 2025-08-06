import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioButtonUI, RadioButtonUIProps } from '~/form/ui';

const meta: Meta<typeof RadioButtonUI> = {
  title: 'form/ui/RadioButtonUI',
  component: RadioButtonUI,
  tags: ['autodocs'],
  argTypes: {
    // Props
    id: {
      control: 'text',
      description: 'ID único del input',
      table: { category: 'Props' },
    },
    name: {
      control: 'text',
      description: 'Nombre del grupo radio',
      table: { category: 'Props' },
    },
    value: {
      control: 'text',
      description: 'Valor del radio',
      table: { category: 'Props' },
    },
    label: {
      control: 'text',
      description: 'Texto visible junto al radio',
      table: { category: 'Props' },
    },
    checked: {
      control: 'boolean',
      description: 'Marcado o no',
      table: { category: 'Props' },
    },
    isRequired: {
      control: 'boolean',
      description: 'Añade `required` al input',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el radio',
      table: { category: 'Props' },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales en el input',
      table: { category: 'Props' },
    },
    labelClassName: {
      control: 'text',
      description: 'Clases CSS adicionales en la etiqueta',
      table: { category: 'Props' },
    },
    title: {
      control: 'text',
      description: 'Tooltip que aparece al pasar el mouse',
      table: { category: 'Props' },
    },

    // Events
    onChange: {
      action: 'changed',
      description: 'Se dispara al cambiar selección',
      table: { category: 'Events' },
    },
  },
};
export default meta;

type Story = StoryObj<RadioButtonUIProps>;

// Template controlado para poder interactuar con la prop `checked`
const ControlledTemplate = (args: RadioButtonUIProps) => {
  const [{ checked }, updateArgs] = useArgs<RadioButtonUIProps>();
  return <RadioButtonUI {...args} checked={checked} onChange={() => updateArgs({ checked: true })} />;
};

const baseArgs: RadioButtonUIProps = {
  id: 'radio-1',
  name: 'radioGroup',
  value: 'op1',
  label: 'Opción 1',
  checked: false,
  isRequired: false,
  disabled: false,
  title: 'Selecciona esta opción',
};

export const Predeterminado: Story = {
  render: ControlledTemplate,
  args: {
    ...baseArgs,
  },
};

export const Marcado: Story = {
  render: ControlledTemplate,
  args: {
    ...baseArgs,
    checked: true,
  },
};

export const Deshabilitado: Story = {
  render: ControlledTemplate,
  args: {
    ...baseArgs,
    disabled: true,
  },
};

export const Requerido: Story = {
  render: ControlledTemplate,
  args: {
    ...baseArgs,
    isRequired: true,
  },
};
