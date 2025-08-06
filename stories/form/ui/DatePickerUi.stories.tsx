import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatePickerUI, DatePickerUIProps } from '~/form/ui';

const meta: Meta<typeof DatePickerUI> = {
  title: 'form/ui/DatePickerUI',
  component: DatePickerUI,
  tags: ['autodocs'],
  argTypes: {
    // Props
    selected: {
      control: 'date',
      description: 'Fecha que aparece en el input',
      table: { category: 'Props' },
    },
    minDate: {
      control: 'date',
      description: 'Fecha mínima seleccionable',
      table: { category: 'Props' },
    },
    maxDate: {
      control: 'date',
      description: 'Fecha máxima seleccionable',
      table: { category: 'Props' },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el selector',
      table: { category: 'Props' },
    },
    error: {
      control: 'text',
      description: 'Mensaje de error que pinta el borde en rojo',
      table: { category: 'Props' },
    },
    inputClassName: {
      control: 'text',
      description: 'Clases CSS adicionales para el input',
      table: { category: 'Props' },
    },
    yearUpRange: {
      control: 'number',
      description: 'Cuántos años hacia adelante permitir',
      table: { category: 'Props' },
    },
    yearDownRange: {
      control: 'number',
      description: 'Cuántos años hacia atrás permitir',
      table: { category: 'Props' },
    },
    placeholderText: {
      control: 'text',
      description: 'Texto de placeholder',
      table: { category: 'Props' },
    },

    // Eventos
    onChange: {
      action: 'changed',
      description: 'Se dispara tras elegir una fecha',
      table: { category: 'Events' },
    },

    // No usados
    onChangeRange: { table: { disable: true } },
    defaultRange: { table: { disable: true } },
  },
  parameters: {
    controls: {
      matchers: { date: /Date$/ },
    },
  },
};
export default meta;

type Story = StoryObj<DatePickerUIProps>;

// Template controlado para poder ver la acción de onChange
const ControlledTemplate = (args: DatePickerUIProps) => {
  const [{ selected }, updateArgs] = useArgs<DatePickerUIProps>();
  return <DatePickerUI {...args} selected={selected} onChange={(date) => updateArgs({ selected: date ?? null })} />;
};

const today = new Date();
const lastWeek = new Date(today);
lastWeek.setDate(today.getDate() - 7);

export const Básico: Story = {
  render: ControlledTemplate,
  args: {
    selected: today,
    minDate: lastWeek,
    maxDate: today,
    placeholderText: 'dd/MM/yyyy',
  },
};

export const Deshabilitado: Story = {
  render: ControlledTemplate,
  args: {
    selected: today,
    placeholderText: 'dd/MM/yyyy',
    disabled: true,
  },
};
