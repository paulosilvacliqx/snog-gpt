import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom';
import { Finalization } from '../components/Finalization/Finalization'

export default {
  title: 'Pages/Finalization',
  component: Finalization,
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