import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'

export default {
  title: 'Pages/Register',
  component: RegisterPage,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          {Story()}
        </MemoryRouter>
      );
    }
  ]
} as Meta

export const Default: StoryObj = {}