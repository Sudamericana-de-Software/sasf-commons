import type { Decorator, Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ToastContainer from '~/components/ui/Toast';
import { Button } from '~/form/fields';
import { useToast } from '~/hooks';

const dialogWrapper: Decorator = (Story) => (
  <div
    style={{
      width: '100%',
      minHeight: '40vh',
      padding: '2rem',
      backgroundColor: '#f9fafb',
    }}
  >
    <Story />
  </div>
);

const meta: Meta<typeof ToastContainer> = {
  title: 'components/ui/Toast',
  component: ToastContainer,
  tags: ['autodocs'],
  decorators: [dialogWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'Uso recomendado: dispara notificaciones con `useToast()` (el `ToastProvider` ya está montado en `preview`). No es necesario renderizar `ToastContainer` manualmente.',
      },
      source: {
        code: `
            import { useToast } from '~/hooks';

            const MiPantalla = () => {
              const { addToast } = useToast();

              const onOk = () => {
                addToast('Operación exitosa', 'success');
              };

              const onError = (msg: string) => {
                addToast(msg, 'danger');
              };

              return <button onClick={onOk}>Guardar</button>;
            };
        `.trim(),
      },
    },
    controls: { disable: true },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ToastContainer>;

const ToastPlayground: React.FC = () => {
  const { addToast } = useToast();

  const fire = (variant: 'success' | 'info' | 'warning' | 'danger', message: string) => {
    addToast(message, variant);
  };

  const stress = () => {
    const variants: Array<'success' | 'info' | 'warning' | 'danger'> = ['success', 'info', 'warning', 'danger'];
    for (let i = 0; i < 4; i += 1) {
      const v = variants[i % variants.length];
      fire(v, `Mensaje ${i + 1} (${v})`);
    }
  };

  return (
    <div className="p-4 space-y-3">
      <div className="flex gap-2 flex-wrap">
        <button type="button" className="px-3 py-2 rounded text-white bg-green-600" onClick={() => fire('success', 'Operación exitosa')} children="Success" />
        <button type="button" className="px-3 py-2 rounded text-white bg-blue-600" onClick={() => fire('info', 'Información relevante')} children="Info" />
        <button type="button" className="px-3 py-2 rounded text-white bg-yellow-500" onClick={() => fire('warning', 'Revisa este aviso')} children="Warning" />
        <button type="button" className="px-3 py-2 rounded text-white bg-red-600" onClick={() => fire('danger', 'Algo salió mal')} children="Error" />
      </div>

      <Button type="button" onClick={stress} children="Disparar 4 toasts" />
    </div>
  );
};

export const Interactivo: Story = {
  render: () => <ToastPlayground />,
  parameters: {
    docs: {
      description: {
        story: 'Dispara toasts usando `useToast().addToast(message, variant)`. El contenedor lo monta el `ToastProvider` del `preview`.',
      },
    },
  },
};
