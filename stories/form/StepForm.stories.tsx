import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Step, StepForm } from '~/form/StepForm';
import { ColorPickerField, DropdownField, NumberField, SelectField, TextAreaField, TextField, ToggleField } from '~/form/fields';

interface StepFormData {
  name: string;
  agree: boolean;
  description: string;
  selectOption: string;
  quantity: number;
  dropdown: string;
  color: string;
}
const makeSteps = (): Step[] => [
  {
    stepName: 'Datos básicos',
    component: (
      <>
        <TextField name="name" label="Nombre" placeholder="Nombre" />
        <ToggleField name="agree" label="Acepto términos" />
      </>
    ),
  },
  {
    stepName: 'Descripción',
    component: (
      <>
        <TextAreaField name="description" label="Descripción" rows={4} />
        <SelectField
          name="selectOption"
          label="Selecciona una opción"
          options={[
            { label: 'Una', value: '1' },
            { label: 'Dos', value: '2' },
          ]}
        />
      </>
    ),
    canNext: () => true,
    canNextMsg: 'Completa la descripción para continuar',
  },
  {
    stepName: 'Final',
    component: (
      <>
        <NumberField name="quantity" label="Cantidad" />
        <DropdownField
          name="dropdown"
          label="Dropdown"
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
        />
        <ColorPickerField name="color" label="Color favorito" />
      </>
    ),
  },
];

// --- Wrapper que Storybook va a documentar
interface ExampleProps {
  className?: string;
  canSave: boolean;
  onlySaveInLastStep: boolean;
  onSubmit: (data: StepFormData) => void;
}
const StepFormExample: React.FC<ExampleProps> = ({ className, canSave, onlySaveInLastStep, onSubmit }) => (
  <StepForm<StepFormData> steps={makeSteps()} className={className} canSave={canSave} onlySaveInLastStep={onlySaveInLastStep} onSubmit={onSubmit} />
);

// --- Meta y stories
const meta: Meta<typeof StepFormExample> = {
  title: 'form/StepForm',
  component: StepFormExample,
  tags: ['autodocs'],
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    // Props
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el contenedor',
      table: { category: 'Props' },
    },
    canSave: {
      control: 'boolean',
      description: 'Permite mostrar el botón Guardar',
      table: { category: 'Props' },
    },
    onlySaveInLastStep: {
      control: 'boolean',
      description: 'Sólo muestra el botón Guardar en el último paso',
      table: { category: 'Props' },
    },

    // Events
    onSubmit: {
      description: 'Se dispara al guardar cambios',
      table: { category: 'Events' },
    },
  },
};
export default meta;
type Story = StoryObj<ExampleProps>;

export const Básico: Story = {
  args: {
    className: '',
    canSave: true,
    onlySaveInLastStep: false,
    onSubmit: () => {},
  },
};

export const SóloGuardarAlFinal: Story = {
  args: {
    className: '',
    canSave: true,
    onlySaveInLastStep: true,
    onSubmit: () => {},
  },
};
