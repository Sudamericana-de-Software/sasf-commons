import type { Meta, StoryObj } from '@storybook/react';
import LoginPageUi from '~/utils/LoginPageUi';

const meta: Meta<typeof LoginPageUi> = {
  title: 'utils/LoginPageUi',
  component: LoginPageUi,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Página de inicio de sesión con formulario y fondo opcional. Utiliza react-hook-form para manejar el estado del formulario.',
      },
    },
  },
  argTypes: {
    onSubmit: {
      description: 'Se ejecuta al enviar el formulario.',
      table: {
        category: 'Props',
        type: { summary: '(data: FormState) => void' },
      },
      control: false,
    },
    methods: {
      description: 'Instancia de react-hook-form (opcional).',
      table: {
        category: 'Props',
        type: { summary: 'UseFormReturn<FormState>' },
      },
      control: false,
    },
    imageUrl: {
      description: 'URL de la imagen de fondo (solo desktop).',
      table: { category: 'Props', type: { summary: 'string' } },
      control: 'text',
    },
    tittle: {
      description: 'Título mostrado en el encabezado.',
      table: { category: 'Props', type: { summary: 'string' } },
      control: 'text',
    },
    isLoading: {
      description: 'Muestra estado de carga en el botón.',
      table: { category: 'Props', type: { summary: 'boolean' } },
      control: 'boolean',
    },
  },
  args: {
    // onSubmit: fn(),
    imageUrl: 'https://img.freepik.com/foto-gratis/ejecutivos-gran-sonrisa_1098-3180.jpg?semt=ais_incoming',
    tittle: 'PROYECTO BASE',
    isLoading: false,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Básica: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto en desktop.',
      },
    },
  },
};

export const Cargando: Story = {
  args: { isLoading: true },
  parameters: {
    docs: {
      description: {
        story: 'Botón en estado de carga mientras se envía.',
      },
    },
  },
};

export const SinImagen: Story = {
  args: { imageUrl: '' },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo sin imagen de fondo (solo formulario).',
      },
    },
  },
};
