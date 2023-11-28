import React from 'react'
import { TextField, InputLabel } from '@mui/material'
import './MyForm.css' // 导入自定义的 CSS 样式

const labelWidth = '120px'
interface FormInputProps {
  title: string
  name: string
  isrequired: Boolean
  disabled: Boolean
  multiline: Boolean
  rows: Number
}

export function FormInput({ ...props }: FormInputProps) {
  return (
    <div className="input-wrapper">
      <InputLabel
        htmlFor={props.name}
        className="input-label"
        style={{ width: labelWidth }}
      >
        {props.isrequired ? (
          <span className="required">*</span>
        ) : (
          <span>&ensp;</span>
        )}
        {props.title}
      </InputLabel>
      <div className="text-field-wrapper">
        <TextField {...props} style={{ width: '90%' }} />
      </div>
    </div>
  )
}
