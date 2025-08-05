import type { Meta, StoryObj } from '@storybook/react';
import { CreatableTagField } from '~/form/fields';

const meta: Meta<typeof CreatableTagField> = {
  title: 'form/fields/CreatableTagField',
  component: CreatableTagField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    additionalInformation: { control: 'text' },
    isRequired: { control: 'boolean' },
    requiredMsg: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CreatableTagField>;

export const Básico: Story = {
  args: {
    name: 'tags',
    label: 'Etiquetas',
    placeholder: 'Escribe y presiona Enter…',
    additionalInformation: 'Añade uno o más tags personalizados',
    isRequired: false,
    disabled: false,
  },
};
