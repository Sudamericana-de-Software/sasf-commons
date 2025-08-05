import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { NumberField } from '~/form/fields';

const meta: Meta<typeof NumberField> = {
  title: 'Componentes/NumberField',
  component: NumberField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberField>;

type TemplateProps = React.ComponentProps<typeof NumberField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      amount: args.defaultValue ?? '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <NumberField {...args} name="amount" />
      </form>
    </FormProvider>
  );
};

export const NúmeroDecimal: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Monto',
    placeholder: 'Ingresa un número',
    numberType: 'float',
    isRequired: true,
    defaultValue: 123.45,
    currency: 'USD',
    additionalInformation: 'Solo números válidos',
  },
};

export const NúmeroEntero: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Cantidad',
    placeholder: 'Solo enteros',
    numberType: 'integer',
    isRequired: true,
    defaultValue: 10,
  },
};
