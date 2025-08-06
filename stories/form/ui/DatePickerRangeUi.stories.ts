import type { Meta, StoryObj } from '@storybook/react';
import { DatePickerRangeUi } from '~/form/ui';

const meta: Meta<typeof DatePickerRangeUi> = {
  title: 'form/ui/DatePickerRangeUi',
  component: DatePickerRangeUi,
  tags: ['autodocs'],
  argTypes: {
    // Props
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
    yearUpRange: {
      control: 'number',
      description: 'Años futuros permitidos en el selector',
      table: { category: 'Props' },
    },
    yearDownRange: {
      control: 'number',
      description: 'Años pasados permitidos en el selector',
      table: { category: 'Props' },
    },
    defaultRange: {
      control: 'object',
      description: 'Rango inicial `{ startDate, endDate }`',
      table: {
        category: 'Props',
        type: { summary: '{ startDate: Date | null; endDate: Date | null }' },
      },
    },

    // Eventos
    onChangeRange: {
      action: 'rangeChanged',
      description: 'Se dispara al seleccionar un rango completo',
      table: { category: 'Events' },
    },

    // No usados
    selected: { table: { disable: true } },
    onChange: { table: { disable: true } },
    disabled: { table: { disable: true } },
    error: { table: { disable: true } },
    inputClassName: { table: { disable: true } },
    placeholderText: { table: { disable: true } },
  },
  parameters: {
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof DatePickerRangeUi>;

const today = new Date();
const diasAtras = new Date(today);
diasAtras.setDate(today.getDate() - 14);
const diasDespues = new Date(today);
diasDespues.setDate(today.getDate() + 14);

export const Básico: Story = {
  args: {
    minDate: diasAtras,
    maxDate: diasDespues,
    yearUpRange: 2,
    yearDownRange: 2,
    defaultRange: { startDate: null, endDate: null },
  },
};

export const ConRangoInicial: Story = {
  args: {
    minDate: diasAtras,
    maxDate: diasDespues,
    yearUpRange: 2,
    yearDownRange: 2,
    defaultRange: { startDate: diasAtras, endDate: today },
  },
};
