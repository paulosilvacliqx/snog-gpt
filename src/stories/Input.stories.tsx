import { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from '../components/Input/Input'
import { EyeSlash } from 'phosphor-react'

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    className: 'w-105 h-14 bg-white font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none',
    type: 'text',
    placeholder: 'Text',
    onChange: (e) => e.target.value
  },
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {

}

export const InputFill: StoryObj<InputProps> = {
  args: {
    className: 'w-105 h-14 bg-P300 text-white font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none',
    type: 'text',
    placeholder: 'Text Fill',
    onChange: (e) => e.target.value
  }
}

export const InputPasswordDefault: StoryObj<InputProps> = {
  args: {
    className: 'w-105 h-14 bg-white font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none',
    type: 'password',
    placeholder: 'Password Default',
    onChange: (e) => e.target.value
  }
}

export const InputPasswordFill: StoryObj<InputProps> = {
  args: {
    className: 'w-105 h-14 bg-P300 text-white font-normal text-lg caret-P300 border transition-colors duration-700 border-P300 rounded-xl pl-4 outline-none',
    type: 'password',
    placeholder: 'Password Default',
    onChange: (e) => e.target.value
  }
}