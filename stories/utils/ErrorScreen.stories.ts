import type { Meta, StoryObj } from '@storybook/react';
import ErrorScreen from '~/utils/ErrorScreen';

const meta: Meta<typeof ErrorScreen> = {
  title: 'utils/ErrorScreen',
  component: ErrorScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pantalla de error genérico. **Volver atrás** usa el historial del router de memoria. **Reintentar** recarga la página.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ErrorScreen>;

export const Básica: Story = {};
