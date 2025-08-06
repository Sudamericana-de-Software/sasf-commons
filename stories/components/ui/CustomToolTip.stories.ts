import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomTooltip } from '~/components/ui';

const meta: Meta<typeof CustomTooltip> = {
  title: 'components/ui/CustomTooltip',
  component: CustomTooltip,
  tags: ['autodocs'],
  argTypes: {
    // Props
    text: {
      control: 'text',
      description: 'Contenido del tooltip',
      table: { category: 'Props' },
    },
    iconClassName: {
      control: 'text',
      description: 'Clases adicionales para el icono principal',
      table: { category: 'Props' },
    },
    bgColor: {
      control: 'text',
      description: 'Color de fondo personalizado (tailwind class sin prefix "bg-")',
      table: { category: 'Props' },
    },
    icon: {
      control: false,
      description: 'Icono a usar (FontAwesome)',
      table: { category: 'Props' },
    },
    toolTipClassName: {
      control: 'text',
      description: 'Clases adicionales para el contenedor del tooltip',
      table: { category: 'Props' },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['success', 'danger', 'warning', 'info'],
      },
      description: 'Variante para colores e icono',
      table: { category: 'Props' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof CustomTooltip>;

export const Info: Story = {
  args: {
    text: 'Este es un mensaje informativo.',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    text: 'Operación completada con éxito.',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    text: 'Se ha producido un error grave.',
    variant: 'danger',
    // No override de bgColor para usar el fondo y borde definidos en tooltipVariants.danger
  },
};

export const Warning: Story = {
  args: {
    text: 'Advertencia: revisa los datos.',
    variant: 'warning',
  },
};

export const CustomIconAndBg: Story = {
  args: {
    text: 'Mensaje con icono y fondo personalizados.',
    variant: 'info',
    icon: faExclamationTriangle,
    bgColor: 'purple-600',
    iconClassName: 'text-yellow-300',
    toolTipClassName: 'p-4',
  },
};
