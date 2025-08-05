import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DatePickerField } from '~/form/fields/DatePickerField';

const meta: Meta<typeof DatePickerField> = {
  title: 'Componentes/DatePickerField',
  component: DatePickerField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePickerField>;

type TemplateProps = React.ComponentProps<typeof DatePickerField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      fecha: args.defaultValue ?? '',
    },
  });

  return (
    <FormProvider {...methods}>
      <DatePickerField {...args} name="fecha" />
    </FormProvider>
  );
};

const today = new Date();
const oneWeekAgo = new Date(today);
oneWeekAgo.setDate(today.getDate() - 7);

const oneWeekLater = new Date(today);
oneWeekLater.setDate(today.getDate() + 7);

export const Básico: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Fecha de nacimiento',
    isRequired: true,
    placeholderText: 'dd/mm/aaaa',
  },
};

export const ConRestriccionesDeRango: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Fecha entre límites',
    isRequired: true,
    placeholderText: 'Elija una fecha',
    minDate: oneWeekAgo,
    maxDate: oneWeekLater,
  },
};

export const Deshabilitado: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Fecha (lectura)',
    placeholderText: 'dd/mm/aaaa',
    disabled: true,
    defaultValue: today,
  },
};
