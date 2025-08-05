import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SelectField } from '~/form/fields/SelectField';

const meta: Meta<typeof SelectField> = {
  title: 'Componentes/SelectField',
  component: SelectField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectField>;

type TemplateProps = React.ComponentProps<typeof SelectField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      seleccion: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <SelectField {...args} name="seleccion" />
    </FormProvider>
  );
};

export const ConOpciones: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'País',
    isRequired: true,
    options: [
      { label: 'Perú', value: 'pe' },
      { label: 'Argentina', value: 'ar' },
      { label: 'México', value: 'mx' },
    ],
  },
};

export const SinOpciones: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Opciones vacías',
    isRequired: true,
    options: [],
  },
};
