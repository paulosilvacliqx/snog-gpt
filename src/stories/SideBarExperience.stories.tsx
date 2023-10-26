import { Meta, StoryObj } from '@storybook/react'
import { SideBar } from '../components/SelectionExperiences/SideBar/SideBar'

export default {
  title: 'Components/SideBarExperiences',
  component: SideBar,
  decorators: [
    (Story) => {
      return (
        <div className="w-100 h-105 bg-white">
          {Story()}
        </div>
      );
    }
  ]
} as Meta

export const Default: StoryObj = {}