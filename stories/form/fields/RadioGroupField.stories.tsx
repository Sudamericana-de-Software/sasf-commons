import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RadioGroupField } from '~/form/fields/RadioGroupField';

const meta: Meta<typeof RadioGroupField> = {
  title: 'Componentes/RadioGroupField',
  component: RadioGroupField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroupField>;

type TemplateProps = React.ComponentProps<typeof RadioGroupField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      genero: args.defaultCheckedValue ?? '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <RadioGroupField {...args} name="genero" />
      </form>
    </FormProvider>
  );
};

export const ConOpciones: Story = {
  render: (args) => <Template {...args} />,
  args: {
    required: true,
    options: [
      { label: 'Masculino', value: 'M' },
      { label: 'Femenino', value: 'F' },
      { label: 'Otro', value: 'X' },
    ],
    defaultCheckedValue: 'F',
  },
};

export const SinSeleccion: Story = {
  render: (args) => <Template {...args} />,
  args: {
    required: true,
    options: [
      { label: 'Sí', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
};
