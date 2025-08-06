import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Form } from '~/form/Form';
import { Button } from '~/form/fields';
import { ColorPickerField, DropdownField, NumberField, SelectField, TextAreaField, TextField, ToggleField } from '~/form/fields';

interface FormData {
  name: string;
  agree: boolean;
  description: string;
  selectOption: string;
  quantity: number;
  dropdown: string;
  color: string;
}

interface TemplateArgs {
  defaultValues: FormData;
  className?: string;
  onSubmit: (data: FormData) => void;
}

const meta: Meta<typeof Form> = {
  title: 'form/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    defaultValues: {
      control: 'object',
      description: 'Valores iniciales del formulario',
      table: {
        category: 'Props',
        type: { summary: 'FormData' },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el <form>',
      table: { category: 'Props' },
    },
    onSubmit: {
      action: 'submitted',
      description: 'Se dispara al hacer submit',
      table: { category: 'Events' },
    },
    // ocultamos props internas
    methods: { table: { disable: true } },
    children: { table: { disable: true } },
    mode: { table: { disable: true } },
    reValidateMode: { table: { disable: true } },
    resolver: { table: { disable: true } },
    criteriaMode: { table: { disable: true } },
    context: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<TemplateArgs>;

// Este componente agrupa *todos* los campos que quieres mostrar
const AllFieldsForm: React.FC = () => {
  useFormContext<FormData>();

  return (
    <div className="flex flex-col gap-4 m-4">
      <TextField name="name" placeholder="Nombre" />
      <ToggleField name="agree" label="Acepto términos" />
      <TextAreaField name="description" label="Descripción" rows={4} />
      <SelectField
        name="selectOption"
        label="Selecciona una opción"
        options={[
          { label: 'Una', value: '1' },
          { label: 'Dos', value: '2' },
        ]}
      />
      <NumberField name="quantity" label="Cantidad" />
      <DropdownField
        name="dropdown"
        label="Selecciona una opción"
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ]}
      />
      <ColorPickerField name="color" label="Color favorito" />
      <Button type="submit">Enviar</Button>
    </div>
  );
};

export const Básico: Story = {
  render: (args) => (
    <Form<FormData> {...args}>
      <AllFieldsForm />
    </Form>
  ),
  args: {
    defaultValues: {
      name: '',
      agree: false,
      description: '',
      selectOption: '',
      quantity: 0,
      dropdown: '',
      color: '#ffffff',
    },
    className: '',
    onSubmit: () => {
      alert('Formulario enviado');
    },
  },
};

export const ConValorInicialYTodosLosCampos: Story = {
  render: (args) => (
    <Form<FormData> {...args}>
      <AllFieldsForm />
    </Form>
  ),
  args: {
    defaultValues: {
      name: 'María',
      agree: true,
      description: 'Texto inicial',
      selectOption: '2',
      quantity: 7,
      dropdown: 'b',
      color: '#ff0000',
    },
    className: '',
    onSubmit: () => {
      alert('Formulario enviado');
    },
  },
};
