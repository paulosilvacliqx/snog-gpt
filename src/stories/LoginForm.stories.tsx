import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <div className="absolute w-full max-w-xl h-[34rem] bg-white left-1/2 -translate-x-1/2">
            <h1 className="text-4xl text-P300 leading-tight font-bold text-center pt-6">
              Faça seu login
            </h1>

            <p className="w-110 text-xl text-P300 leading-tight font-light text-center pt-6">
              Insira abaixo seus dados de acesso para continuar com experiências incríveis
            </p>
            {Story()}
          </div>
        </MemoryRouter>
      );
    }
  ]
} as Meta

export const Default: StoryObj = {}