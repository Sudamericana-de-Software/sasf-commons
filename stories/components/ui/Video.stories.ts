import type { Meta, StoryObj } from '@storybook/react';
import { Video } from '~/components/ui';

type Story = StoryObj<typeof Video>;

const SAMPLE = {
  mp4: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  poster: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.jpg',
} as const;

const meta: Meta<typeof Video> = {
  title: 'components/ui/Video',
  component: Video,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de video con **skeleton**, **fallback** y **previsualización modal** (overlay + framer-motion). El modal se abre al hacer click cuando `hasPreview` está activo.',
      },
    },
    controls: {
      matchers: {},
    },
  },
  argTypes: {
    // Props
    src: { control: 'text', description: 'Fuente principal del video.', table: { category: 'Props' } },
    fallback: { control: 'text', description: 'Fuente alternativa si `src` falla.', table: { category: 'Props' } },
    width: { control: 'number', description: 'Ancho del contenedor (px).', table: { category: 'Props' } },
    height: { control: 'number', description: 'Alto del contenedor (px).', table: { category: 'Props' } },
    hasPreview: { control: 'boolean', description: 'Activa overlay para abrir el modal de preview.', table: { category: 'Props' } },
    widthPreview: { control: 'number', description: 'Ancho del video en el modal (px).', table: { category: 'Props' } },
    heightPreview: { control: 'number', description: 'Alto del video en el modal (px).', table: { category: 'Props' } },
    previewLabel: { control: 'text', description: 'Texto del overlay de previsualización.', table: { category: 'Props' } },
    // Props nativas de <video> (se pasan vía ...props)
    controls: { control: 'boolean', table: { category: 'HTMLVideo props' } },
    muted: { control: 'boolean', table: { category: 'HTMLVideo props' } },
    autoPlay: { control: 'boolean', table: { category: 'HTMLVideo props' } },
    loop: { control: 'boolean', table: { category: 'HTMLVideo props' } },
    playsInline: { control: 'boolean', table: { category: 'HTMLVideo props' } },
    poster: { control: 'text', table: { category: 'HTMLVideo props' } },
    preload: { control: { type: 'inline-radio' }, options: ['auto', 'metadata', 'none'], table: { category: 'HTMLVideo props' } },
    // Evitar mostrar className en controles (se maneja dentro)
    className: { control: false },
    // previewProps no es práctico en controles (objeto complejo)
    previewProps: { control: false },
  },
  args: {
    src: SAMPLE.mp4,
    poster: SAMPLE.poster,
    controls: true,
    width: 320,
    height: 180,
    hasPreview: false,
  },
};
export default meta;

export const Basico: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Versión básica con `controls`. Cambia dimensiones y props nativas del `<video>` desde los controles.',
      },
    },
  },
};

/** Demuestra fallback cuando `src` falla */
export const ConFallback: Story = {
  args: {
    src: 'https://example.invalid/nope.mp4',
    fallback: SAMPLE.mp4,
    poster: SAMPLE.poster,
  },
  parameters: {
    docs: {
      description: {
        story: 'Si `src` falla, el componente cambia a `fallback` y desactiva el skeleton. Útil para entornos con rutas variables.',
      },
    },
  },
};

export const ConPreviewModal: Story = {
  args: {
    hasPreview: true,
    previewLabel: 'Ver grande',
    widthPreview: 800,
    heightPreview: 450,
  },
  parameters: {
    docs: {
      description: {
        story: 'Activa el overlay con icono/label y abre un modal con el video a mayor tamaño. Cierra haciendo click afuera o en el botón de cierre.',
      },
    },
  },
};

export const AutoplaySilencioso: Story = {
  args: {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: 'auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Muchos navegadores solo permiten *autoplay* si el video está **muteado** (y `playsInline` en móvil).',
      },
    },
  },
};

export const PreloadNone: Story = {
  args: {
    preload: 'none',
  },
  parameters: {
    docs: {
      description: {
        story: 'Con `preload="none"` el navegador difiere la carga, por lo que el **skeleton** puede ser visible por más tiempo (depende del navegador).',
      },
    },
  },
};

export const ConPosterYDimensiones: Story = {
  args: {
    poster: SAMPLE.poster,
    width: 480,
    height: 270,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con `poster` y dimensiones 16:9. También puedes usar `hasPreview` si necesitas un modal.',
      },
    },
  },
};
