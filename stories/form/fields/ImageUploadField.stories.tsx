import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ImageUploadField } from '~/form/fields/ImageUploadField';

const meta: Meta<typeof ImageUploadField> = {
  title: 'Componentes/ImageUploadField',
  component: ImageUploadField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageUploadField>;

type TemplateProps = React.ComponentProps<typeof ImageUploadField>;

const Template = (args: TemplateProps) => {
  const methods = useForm({
    defaultValues: {
      imagen: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <ImageUploadField {...args} name="imagen" />
      </form>
    </FormProvider>
  );
};

export const Básico: Story = {
  render: (args) => <Template {...args} />,
  args: {
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
  render: (args) => <Template {...args} />,
  args: {
    label: 'Logo actual',
    isRequired: false,
    defaultSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    placeholder: 'Haz clic o arrastra una imagen',
    sizeX: 300,
    sizeY: 200,
  },
};
