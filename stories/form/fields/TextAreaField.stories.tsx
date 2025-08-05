import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TextAreaField } from '~/form/fields/TextAreaField';

const meta: Meta<typeof TextAreaField> = {
  title: 'Componentes/TextAreaField',
  component: TextAreaField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextAreaField>;

type TemplateProps = React.ComponentProps<typeof TextAreaField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      comentario: args.defaultValue ?? '',
    },
  });

  return (
    <FormProvider {...methods}>
      <TextAreaField {...args} name="comentario" />
    </FormProvider>
  );
};

export const Básico: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Comentario',
    placeholder: 'Escribe algo...',
    isRequired: true,
    maxLength: 150,
    rows: 4,
  },
};

export const ConError: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Descripción',
    isRequired: true,
    maxLength: 50,
    defaultValue: 'Texto muy largo que sobrepasa el límite permitido para mostrar el contador de caracteres',
  },
};
