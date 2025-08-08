import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from '~/components/ui';

const meta: Meta<typeof Tooltip> = {
  title: 'components/ui/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', table: { category: 'Props' } },
    variant: {
      control: { type: 'inline-radio' },
      options: ['info', 'success', 'warning', 'danger'],
      table: { category: 'Props' },
    },
    duration: { control: { type: 'number' }, table: { category: 'Props' } },
  },
  args: {
    message: 'Información de ejemplo',
    variant: 'info',
    duration: 4000,
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;
type TooltipProps = React.ComponentProps<typeof Tooltip>;

/** Componente que incluye el botón y remonta el Tooltip al hacer click */
const TooltipPlay: React.FC<TooltipProps> = ({ message, variant, duration }) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [seed, setSeed] = React.useState<number>(0);

  const play = () => {
    setShow(true);
    setSeed((s) => s + 1); // fuerza remount para reiniciar visibilidad/timer
  };

  return (
    <div className="p-6">
      <div className="relative inline-block">
        <button type="button" className="px-3 py-2 rounded bg-gray-900 text-white" onClick={play}>
          Mostrar tooltip
        </button>

        <div className="mt-2">{show && <Tooltip key={seed} message={message} variant={variant} duration={duration} />}</div>
      </div>
    </div>
  );
};

export const VarianteInfo: Story = {
  args: { variant: 'info', message: 'Mensaje informativo' },
  render: (args) => <TooltipPlay {...args} />,
};

export const VarianteSuccess: Story = {
  args: { variant: 'success', message: 'Operación exitosa' },
  render: (args) => <TooltipPlay {...args} />,
};

export const VarianteWarning: Story = {
  args: { variant: 'warning', message: 'Revisa este aviso' },
  render: (args) => <TooltipPlay {...args} />,
};

export const VarianteDanger: Story = {
  args: { variant: 'danger', message: 'Algo salió mal' },
  render: (args) => <TooltipPlay {...args} />,
};

/** Comparativa de duraciones sin decorators ni hooks en render */
const TooltipDurationsDemo: React.FC = () => {
  const [seed, setSeed] = React.useState<number>(0);
  const replay = () => setSeed((s) => s + 1);

  return (
    <div className="p-6 space-y-6">
      <button type="button" className="px-3 py-2 rounded border" onClick={replay}>
        Reproducir todos
      </button>

      <div className="relative inline-block mr-6">
        <span className="mr-2 text-sm text-gray-600">1s</span>
        <Tooltip key={`a-${seed}`} message="Rápido" variant="warning" duration={1000} />
      </div>

      <div className="relative inline-block mr-6">
        <span className="mr-2 text-sm text-gray-600">4s</span>
        <Tooltip key={`b-${seed}`} message="Por defecto" variant="info" duration={4000} />
      </div>

      <div className="relative inline-block">
        <span className="mr-2 text-sm text-gray-600">8s</span>
        <Tooltip key={`c-${seed}`} message="Largo" variant="danger" duration={8000} />
      </div>
    </div>
  );
};

export const DiferentesDuraciones: Story = {
  render: () => <TooltipDurationsDemo />,
  parameters: {
    docs: {
      description: { story: 'Comparativa de tiempos de ocultado con un botón para remontear todos.' },
    },
    controls: { disable: true },
  },
};
