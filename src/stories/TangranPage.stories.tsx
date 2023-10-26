import { Meta, StoryObj } from '@storybook/react'
import { TangranPage } from '../pages/TangranPage/TangranPage';

export default {
  title: 'Pages/Tangran',
  component: TangranPage,
  decorators: [
    (Story) => {
      return (
        <div className="w-full">
          {Story()}
        </div>
      );
    }
  ]
} as Meta

export const Default: StoryObj = {}