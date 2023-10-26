import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '../components/Button/Button'

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    title: 'Button',
    className: 'w-40 h-12 font-medium text-base text-white flex items-center justify-center rounded-full bg-P300 cursor-pointer hover:opacity-90 transition-all duration-300',
    disabled: false
  },
  argTypes: {
    iconProfile: {
      control: {
        disable: true
      }
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    className: 'w-40 h-12 font-medium text-base text-P200 flex items-center justify-center rounded-full bg-P10 cursor-not-allowed',
    disabled: true
  },
}