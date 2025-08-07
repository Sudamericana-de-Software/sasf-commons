import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Tab, TabItem } from '~/components/ui';
import { NumberField, TextField } from '~/form/fields';

const meta: Meta<typeof Tab> = {
  title: 'components/ui/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text', table: { category: 'Props' } },
    tabContainerClassName: { control: 'text', table: { category: 'Props' } },
    contentClassName: { control: 'text', table: { category: 'Props' } },
    tabs: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Tab>;

export const Básico: Story = {
  args: {
    tabs: [
      { tabName: 'Primera', component: <p>Contenido de la primera pestaña</p> },
      { tabName: 'Segunda', component: <p>Contenido de la segunda pestaña</p> },
    ],
  },
};

const FormTabsDemo: React.FC = () => {
  const methods = useForm<{ email: string; password: string; numero: string }>({
    defaultValues: { email: '', password: '', numero: '' },
    mode: 'onChange',
  });

  useEffect(() => {
    // Forzamos un error inicial en 'password'
    methods.setError('password', { type: 'manual', message: 'La contraseña es obligatoria' });
  }, [methods]);

  const tabsWithFields: TabItem[] = [
    {
      tabName: 'Cuenta',
      component: (
        <div className="space-y-3">
          <NumberField name="numero" label="Número" numberType="integer" isRequired placeholder="Solo enteros" />
          <TextField<{ email: string }> name="email" type="email" label="Email" isRequired validateEmail placeholder="usuario@ejemplo.com" />
        </div>
      ),
      fields: ['numero', 'email'],
    },
    {
      tabName: 'Seguridad',
      component: (
        <TextField<{ password: string }> name="password" type="password" label="Contraseña" isRequired validatePassword placeholder="Mínimo 8 caracteres" />
      ),
      fields: ['password'],
    },
  ];

  return (
    <FormProvider {...methods}>
      <Tab tabs={tabsWithFields} />
    </FormProvider>
  );
};

export const ConErroresDeFormulario: Story = {
  render: () => <FormTabsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Esta story usa su propio FormProvider: forzamos un error en `password`, y Tab muestra el punto rojo en "Seguridad".',
      },
      source: {
        code: `
          <Tab
            tabs={[
              {
                tabName: 'Cuenta',
                fields: ['numero', 'email'],
                component: (
                  <>
                    <NumberField name="numero" label="Número" numberType="integer" isRequired />
                    <TextField name="email" type="email" label="Email" isRequired validateEmail />
                  </>
                ),
              },
              {
                tabName: 'Seguridad',
                fields: ['password'],
                component: (
                  <TextField name="password" type="password" label="Contraseña" isRequired validatePassword />
                ),
              },
            ]}
          />
        `.trim(),
      },
    },
  },
};
