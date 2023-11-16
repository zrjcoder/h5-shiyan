import { Input, InputProps, TextField, TextFieldProps } from '@mui/material'
import React from 'react'

export function RowInput(props: TextFieldProps) {
  return <TextField fullWidth variant="standard" {...props} />
}
