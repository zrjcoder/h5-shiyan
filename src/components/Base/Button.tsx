import { Button as BaseButton, ButtonProps } from '@mui/material'

export function Button(props: ButtonProps) {
  return <BaseButton variant="contained" {...props} />
}
