import { Box, createStandaloneToast } from "@chakra-ui/react"

const { toast } = createStandaloneToast()

export function ToastSuccess(message: string) {
  return (
    toast({
      title: `${message}`,
      position: 'top-right',
      isClosable: true,
      status: 'success',
      variant: 'left-accent',
      duration: 3000,
    })
  )
}

export function ToastError(message: string) {
  toast({
    title: `${message}`,
    position: 'top-right',
    isClosable: true,
    status: 'error',
    variant: 'left-accent',
    duration: 3000,
  })
}
