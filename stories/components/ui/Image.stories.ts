import type { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from '~/components/ui';

const sampleSrc = 'https://via.placeholder.com/300x200.png?text=Imagen+Ejemplo';
const invalidSrc = 'https://no-existe/imagen.png';

const meta: Meta<typeof Image> = {
  title: 'components/ui/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    // Props
    src: {
      control: 'text',
      description: 'URL de la imagen',
      table: { category: 'Props' },
    },
    fallback: {
      control: 'text',
      description: 'URL de imagen fallback si src falla',
      table: { category: 'Props' },
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo de la imagen',
      table: { category: 'Props' },
    },
    width: {
      control: 'number',
      description: 'Ancho del elemento <img> en píxeles',
      table: { category: 'Props' },
    },
    height: {
      control: 'number',
      description: 'Alto del elemento <img> en píxeles',
      table: { category: 'Props' },
    },

    // Preview
    hasPreview: {
      control: 'boolean',
      description: 'Habilita clic para abrir previsualización',
      table: { category: 'Props' },
    },
    previewLabel: {
      control: 'text',
      description: 'Texto que aparece sobre la imagen al hacer hover para previsualizar',
      table: { category: 'Props' },
    },
    widthPreview: {
      control: 'number',
      description: 'Ancho de la imagen en el modal de previsualización',
      table: { category: 'Props' },
    },
    heightPreview: {
      control: 'number',
      description: 'Alto de la imagen en el modal de previsualización',
      table: { category: 'Props' },
    },

    // Estilos
    className: {
      control: 'text',
      description: 'Clases CSS para el <img>',
      table: { category: 'Props' },
    },
    containerClassName: {
      control: 'text',
      description: 'Clases CSS para el contenedor externo',
      table: { category: 'Props' },
    },

    // No usados
    onLoad: { table: { disable: true } },
    onError: { table: { disable: true } },
    decoding: { table: { disable: true } },
    loading: { table: { disable: true } },
    rel: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<ImageProps>;

export const Básico: Story = {
  args: {
    src: sampleSrc,
    alt: 'Ejemplo básico',
    width: 300,
    height: 200,
    hasPreview: false,
    className: '',
    containerClassName: '',
  },
};

export const ConFallback: Story = {
  args: {
    src: invalidSrc,
    fallback: sampleSrc,
    alt: 'Fallback al cargar',
    width: 300,
    height: 200,
    hasPreview: false,
  },
};

export const ConPreview: Story = {
  args: {
    src: sampleSrc,
    alt: 'Imagen con previsualización',
    width: 300,
    height: 200,
    hasPreview: true,
    previewLabel: 'Ver imagen',
    widthPreview: 500,
    heightPreview: 400,
  },
};
