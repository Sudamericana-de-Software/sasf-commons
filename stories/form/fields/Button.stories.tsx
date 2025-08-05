import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '~/form/fields';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Botón',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'danger'],
    },
    children: {
      control: 'text',
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primario: Story = {
  args: {
    variant: 'primary',
    children: 'Botón Primario',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Botón Outline',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Botón Peligro',
  },
};

export const Deshabilitado: Story = {
  args: {
    variant: 'primary',
    children: 'Deshabilitado',
    disabled: true,
  },
};

export const Cargando: Story = {
  args: {
    variant: 'primary',
    children: 'Cargando...',
    isLoading: true,
  },
};

export const ConNavegación: Story = {
  args: {
    variant: 'primary',
    children: 'Ir a otra ruta',
    href: '/otra-rutas',
  },
};
