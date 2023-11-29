import React from 'react'
import { TextField, InputLabel, TextFieldProps } from '@mui/material'
import './MyForm.css' // 导入自定义的 CSS 样式

const labelWidth = '80px'
interface FormInputProps {
  title: string
  name: string
  isrequired?: boolean
  flag?: boolean
  inputtype?: string
}

export function FormInput({
  title,
  name,
  isrequired,
  flag,
  inputtype,
  ...props
}: FormInputProps & TextFieldProps) {
  return (
    <div className="input-wrapper">
      <InputLabel
        htmlFor={name}
        className="input-label"
        style={{ width: labelWidth, marginLeft: '10px' }}
      >
        {isrequired && <span className="required">*</span>}
        {title}
      </InputLabel>
      <div className="text-field-wrapper">
        <TextField
          type={inputtype ? inputtype : ''}
          style={{ width: '90%' }}
          helperText="必填"
          multiline
          {...props}
        />
      </div>
    </div>
  )
}
