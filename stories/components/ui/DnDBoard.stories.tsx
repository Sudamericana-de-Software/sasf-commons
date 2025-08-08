import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { DnDBoard, DnDBoardHandle, DnDSection, toDnDItem } from '~/components/ui';
import { Button } from '~/form/fields';

interface Person {
  id: string;
  name: string;
}

const initialSections: DnDSection<Person>[] = [
  {
    id: 'A',
    title: 'Sección A',
    items: [toDnDItem({ id: '1', name: 'Ana' }), toDnDItem({ id: '2', name: 'Luis' })],
  },
  {
    id: 'B',
    title: 'Sección B',
    items: [toDnDItem({ id: '3', name: 'María' })],
  },
];

const meta: Meta<typeof DnDBoard> = {
  title: 'components/ui/DnDBoard',
  component: DnDBoard,
  tags: ['autodocs'],
  argTypes: {
    canMoveSections: {
      control: 'boolean',
      description: 'Permite reordenar las secciones',
      table: { category: 'Props' },
    },
    sectionClassName: {
      control: 'text',
      description: 'Clases CSS para cada sección',
      table: { category: 'Props' },
    },
    containerClassName: {
      control: 'text',
      description: 'Clases CSS para el contenedor principal',
      table: { category: 'Props' },
    },
    onReOrder: {
      action: 'reorder',
      description: 'Se dispara tras cambiar el orden de ítems o secciones',
      table: { category: 'Events' },
    },
    sections: { table: { disable: true } },
    renderItem: { table: { disable: true } },
    getId: { table: { disable: true } },
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};
export default meta;

type Story = StoryObj<typeof DnDBoard>;

function BasicBoardExample(args: Story['args']) {
  const [sections, setSections] = useState(initialSections);
  const boardRef = useRef<DnDBoardHandle<Person>>(null);

  const handleReOrder = (newSections: DnDSection<Person>[]) => {
    setSections(newSections);
  };

  return (
    <DnDBoard<Person>
      {...args}
      ref={boardRef}
      sections={sections}
      onReOrder={handleReOrder}
      getId={(p) => p.id}
      renderItem={(item) => <div className="p-2">{item.data.name}</div>}
      sectionClassName="w-full h-[400px] overflow-y-auto"
    />
  );
}

export const Básico: Story = {
  render: BasicBoardExample,
  args: {
    canMoveSections: false,
    sectionClassName: '',
    containerClassName: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tablero básico con dos secciones. Arrastra los ítems o usa los controles para probar props.',
      },
    },
  },
};

export const ConSeccionesMovibles: Story = {
  ...Básico,
  args: {
    ...Básico.args!,
    canMoveSections: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Habilita `canMoveSections` para permitir reordenar las secciones arrastrándolas.',
      },
    },
  },
};

function ProgrammaticBoardExample(args: Story['args']) {
  const [sections, setSections] = useState(initialSections);
  const boardRef = useRef<DnDBoardHandle<Person>>(null);

  const handleReOrder = (newSections: DnDSection<Person>[]) => {
    setSections(newSections);
  };

  return (
    <>
      <Button onClick={() => boardRef.current?.moveToSection({ id: '2', name: 'Luis' }, 'B')} children="Mover 'Luis' a Sección B" />
      <DnDBoard<Person>
        {...args}
        ref={boardRef}
        sections={sections}
        onReOrder={handleReOrder}
        getId={(p) => p.id}
        renderItem={(item) => <div className="p-2">{item.data.name}</div>}
        sectionClassName="w-full h-[400px] overflow-y-auto"
      />
    </>
  );
}

export const ConMoveProgramático: Story = {
  render: ProgrammaticBoardExample,
  args: {
    canMoveSections: false,
    sectionClassName: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Ejemplo con botón que usa el método `onReOrder` para mover un ítem programáticamente. Haz click para mover "Luis" programáticamente a la Sección B.',
      },
    },
  },
};
