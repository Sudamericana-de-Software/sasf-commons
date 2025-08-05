import type { Meta, StoryObj } from '@storybook/react';
import { ImageUploadField } from '~/form/fields';

const meta: Meta<typeof ImageUploadField> = {
  title: 'form/fields/ImageUploadField',
  component: ImageUploadField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageUploadField>;

export const Básico: Story = {
  args: {
    name: 'imagen',
    label: 'Sube tu foto',
    isRequired: true,
    placeholder: 'Haz clic o arrastra una imagen',
    cropLabel: 'Recorta tu imagen',
    cancelLabel: 'Cancelar',
    saveLabel: 'Guardar',
    sizeX: 300,
    sizeY: 200,
  },
};

export const ConImagenPredefinida: Story = {
  args: {
    name: 'imagen',
    label: 'Logo actual',
    isRequired: false,
    defaultSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    placeholder: 'Haz clic o arrastra una imagen',
    sizeX: 300,
    sizeY: 200,
  },
};
