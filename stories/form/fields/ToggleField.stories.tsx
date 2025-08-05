import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ToggleField } from '~/form/fields';

const meta: Meta<typeof ToggleField> = {
  title: 'Componentes/ToggleField',
  component: ToggleField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleField>;

type TemplateProps = React.ComponentProps<typeof ToggleField>;

const Template = (args: TemplateProps, defaultValue: boolean = false) => {
  const methods = useForm({
    defaultValues: {
      active: defaultValue,
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <ToggleField {...args} name="active" />
      </form>
    </FormProvider>
  );
};

export const Activado: Story = {
  render: (args) => Template(args, true),
  args: {
    label: 'Activo',
    variant: 'default',
  },
};

export const Deshabilitado: Story = {
  render: (args) => Template(args, false),
  args: {
    label: 'Modo lectura',
    variant: 'default',
    isDisabled: true,
  },
};
