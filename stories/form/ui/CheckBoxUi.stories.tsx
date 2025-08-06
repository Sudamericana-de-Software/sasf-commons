import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CheckBoxUi, CheckBoxUiProps } from '~/form/ui';

const meta: Meta<typeof CheckBoxUi> = {
  title: 'form/ui/CheckBoxUi',
  component: CheckBoxUi,
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: {
      control: 'boolean',
      description: 'Estado inicial del checkbox (no controlado)',
      table: { category: 'Props' },
    },
    checked: {
      control: 'boolean',
      description: 'Estado actual del checkbox (controlado)',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la interacción',
      table: { category: 'Props' },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: { category: 'Props' },
    },
    onChange: {
      action: 'changed',
      description: 'Se dispara al cambiar el estado',
      table: { category: 'Events' },
    },
  },
};
export default meta;
type Story = StoryObj<CheckBoxUiProps>;

const ControlledTemplate = (args: CheckBoxUiProps) => {
  const [{ checked }, updateArgs] = useArgs<CheckBoxUiProps>();
  return <CheckBoxUi {...args} checked={checked} onChange={(e) => updateArgs({ checked: e.target.checked })} />;
};

export const Predeterminado: Story = {
  render: ControlledTemplate,
  args: {
    defaultChecked: false,
    disabled: false,
    className: '',
  },
};

export const Marcado: Story = {
  render: ControlledTemplate,
  args: {
    defaultChecked: true,
    disabled: false,
    className: '',
  },
};

export const Deshabilitado: Story = {
  render: ControlledTemplate,
  args: {
    checked: false,
    disabled: true,
    className: '',
  },
};
