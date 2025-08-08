import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Toggle } from '~/components/ui';

const meta: Meta<typeof Toggle> = {
  title: 'components/ui/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    isActive: { control: 'boolean', table: { category: 'Props' } },
    onToggle: { control: { disable: true }, table: { category: 'Events' } },
  },
  args: { isActive: false },
};
export default meta;

export const Básica: StoryFn<typeof Toggle> = (args) => {
  const [, updateArgs] = useArgs();
  const onToggle = React.useCallback(() => {
    updateArgs({ isActive: !args.isActive });
  }, [args.isActive, updateArgs]);

  return <Toggle {...args} onToggle={onToggle} />;
};
