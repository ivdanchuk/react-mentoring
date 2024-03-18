import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {SortControl} from "../components/SortControl/sort-control";
import {  } from './Header';

const meta = {
  title: 'Netflix/SortControl',
  component: SortControl,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    sortedBy: "Title",
    onSelectChange: fn(),
  },
} satisfies Meta<typeof SortControl>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SortingOption: Story = {
  args: {
    sortedBy: "Title",
    onSelectChange: fn()
  },
};

