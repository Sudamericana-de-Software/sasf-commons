import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Control, FieldValues, FormProvider, useForm } from 'react-hook-form';
import { Option } from '~/form/fields';
import { DropdownField } from '~/form/fields/DropdownField';

const meta: Meta<typeof DropdownField> = {
  title: 'Componentes/DropdownField',
  component: DropdownField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownField>;

type TemplateProps = React.ComponentProps<typeof DropdownField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      seleccion: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <DropdownField {...args} name="seleccion" control={methods.control as unknown as Control<FieldValues>} />
    </FormProvider>
  );
};

const opciones: Option[] = [
  { label: 'Perú', value: 'pe' },
  { label: 'Chile', value: 'cl' },
  { label: 'Colombia', value: 'co' },
];

export const ConOpciones: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'País',
    options: opciones,
    isRequired: true,
    placeholder: 'Selecciona un país',
  },
};

export const SinOpciones: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Sin datos disponibles',
    options: [],
    placeholder: 'No hay opciones',
    isRequired: false,
  },
};

export const Borrable: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'País',
    options: opciones,
    isRequired: true,
    isClearable: true,
    placeholder: 'Selecciona una opción y luego de click en la X para borrar',
  },
};

export const ConInformaciónAdicional: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'País',
    options: opciones,
    isRequired: true,
    placeholder: 'Selecciona uno',
    additionalInformation: 'Seleccione su país de residencia actual.',
  },
};
