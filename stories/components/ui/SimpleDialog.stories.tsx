import type { Decorator, Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SimpleDialog } from '~/components/ui';
import { Button } from '~/form/fields';

const dialogWrapper: Decorator = (Story) => (
  <div
    style={{
      width: '100%',
      minHeight: '50vh',
      padding: '2rem',
      backgroundColor: '#f9fafb',
    }}
  >
    <Story />
  </div>
);

const meta: Meta<typeof SimpleDialog> = {
  title: 'components/ui/SimpleDialog',
  component: SimpleDialog,
  tags: ['autodocs'],
  decorators: [dialogWrapper],
  argTypes: {
    isOpen: { control: 'boolean', description: 'Controla la visibilidad del diálogo', table: { category: 'Props' } },
    onClose: { action: 'closed', table: { category: 'Events' } },
    title: { control: 'text', description: 'Título que aparece en la cabecera', table: { category: 'Props' } },
    closeable: { control: 'boolean', description: 'Si es `false`, oculta el botón de cerrar', table: { category: 'Props' } },
    className: { control: 'text', description: 'Clases CSS adicionales para el panel', table: { category: 'Props' } },
    children: { control: false, table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof SimpleDialog>;

export const Open: Story = {
  args: {
    isOpen: true,
    title: 'Título del diálogo',
    closeable: true,
    children: (
      <div>
        <p>Este es el contenido dentro del diálogo.</p>
        <p>Puedes cerrar con la “X” o pulsando Escape.</p>
      </div>
    ),
  },
};

export const NoCloseButton: Story = {
  args: {
    ...Open.args!,
    closeable: false,
  },
};

type SimpleDialogProps = React.ComponentProps<typeof SimpleDialog>;
const ControlledExample: React.FC<SimpleDialogProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} children="Abrir diálogo" />
      <SimpleDialog
        {...args}
        isOpen={open}
        onClose={() => {
          setOpen(false);
          args.onClose?.();
        }}
      />
    </>
  );
};

export const Controlled: Story = {
  // 👇 En la story ya NO usamos hooks; solo renderizamos el componente de arriba
  render: (args) => <ControlledExample {...args} />,
  args: {
    title: 'Diálogo controlado',
    closeable: true,
    children: <p>Contenido dinámico dentro del diálogo controlado.</p>,
  },
};

export const CustomStyles: Story = {
  args: {
    ...Open.args!,
    className: 'max-w-lg border-red-500 ring-2 ring-red-400',
    title: 'Diálogo con estilos',
    children: <p>Este diálogo tiene un borde y sombra personalizados.</p>,
  },
};
