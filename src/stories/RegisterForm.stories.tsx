import { Meta, StoryObj } from '@storybook/react'
import { RegisterForm } from '../components/RegisterUser/RegisterForm/RegisterForm'

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
  decorators: [
    (Story) => {
      return (
        <main className="w-full h-screen bg-P50">
          <div className="w-full bg-P50 flex flex-col items-center">
            {Story()}
          </div>
        </main>
      );
    }
  ]
} as Meta

export const Default: StoryObj = {}