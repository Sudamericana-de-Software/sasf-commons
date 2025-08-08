import type { Meta, StoryObj } from '@storybook/react';
import UnauthorizedScreen from '~/utils/UnauthorizedScreen';

const meta: Meta<typeof UnauthorizedScreen> = {
  title: 'utils/UnauthorizedScreen',
  component: UnauthorizedScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { source: { excludeDecorators: true } },
    controls: { disable: true },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Básica: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Pantalla de “Acceso no autorizado”. **Contacto** navega a `/contacto` dentro de Storybook. **Volver atrás** usa el historial del router de memoria.',
      },
    },
  },
};
