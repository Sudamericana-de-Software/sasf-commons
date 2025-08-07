import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Screen } from '~/components/ui';

const meta: Meta<typeof Screen> = {
  title: 'components/ui/Screen',
  component: Screen,
  tags: ['autodocs'],
  argTypes: {
    // Props
    title: {
      control: 'text',
      description: 'Título en el encabezado',
      table: { category: 'Props' },
    },
    showGoBackButton: {
      control: 'boolean',
      description: 'Muestra u oculta el botón de volver atrás',
      table: { category: 'Props' },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: { category: 'Props' },
    },
    children: {
      control: false,
      table: { disable: true },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Screen>;

export const Básico: Story = {
  args: {
    title: 'Página de ejemplo',
    showGoBackButton: true,
    className: '',
    children: (
      <div>
        <p>Este es el contenido principal de la pantalla.</p>
        <p>
          Añade aquí lo que quieras renderizar dentro de <code>&lt;Screen&gt;</code>.
        </p>
      </div>
    ),
  },
};

export const SinBotonRegreso: Story = {
  ...Básico,
  args: {
    ...Básico.args!,
    showGoBackButton: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
            <Screen
              title="Página de ejemplo"
              showGoBackButton={false}
            >
              {/* ...tu contenido aquí */}
            </Screen>
        `.trim(),
      },
    },
  },
};

export const CustomPadding: Story = {
  ...Básico,
  args: {
    ...Básico.args!,
    className: 'bg-blue-50 border border-blue-200',
    title: 'Con padding y borde personalizados',
  },
};
