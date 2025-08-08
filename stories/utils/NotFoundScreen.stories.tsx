import type { Meta, StoryObj } from '@storybook/react';
import NotFoundScreen from '~/utils/NotFoundScreen';

const meta: Meta<typeof NotFoundScreen> = {
  title: 'utils/NotFoundScreen',
  component: NotFoundScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pantalla de “Página no encontrada”. **Volver atrás** usa el historial del router de memoria.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NotFoundScreen>;

export const Básica: Story = {};
