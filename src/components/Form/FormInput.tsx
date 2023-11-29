import React from 'react'
import { TextField, InputLabel, FormControl, useEffect } from '@mui/material'
import './MyForm.css' // 导入自定义的 CSS 样式

const labelWidth = '80px'
interface FormInputProps {
  title: string
  name: string
  isrequired: Boolean
  disabled: Boolean
  multiline: Boolean
  rows: Number
  value: any
  flag: boolean
  placeholder: string
  inputtype: string
}

export function FormInput({ ...props }: FormInputProps) {
  return (
    <div className="input-wrapper">
      <InputLabel
        htmlFor={props.name}
        className="input-label"
        style={{ width: labelWidth, marginLeft: '10px' }}
      >
        {props.isrequired ? (
          <span className="required">*</span>
        ) : (
          <span>&ensp;</span>
        )}
        {props.title}
      </InputLabel>
      <div className="text-field-wrapper">
        {props.isrequired ? (
          props.flag ? (
            <TextField
              type={props.inputtype ? props.inputtype : ''}
              placeholder={props.placeholder}
              {...props}
              style={{ width: '90%' }}
              multiline
              rows={props.rows}
            />
          ) : (
            <TextField
              type={props.inputtype ? props.inputtype : ''}
              placeholder={props.placeholder}
              {...props}
              style={{ width: '90%' }}
              helperText="必填"
              multiline
              rows={props.rows}
            />
          )
        ) : (
          <TextField
            type={props.inputtype ? props.inputtype : ''}
            placeholder={props.placeholder}
            {...props}
            style={{ width: '90%' }}
            multiline
            rows={props.rows}
          />
        )}
      </div>
    </div>
  )
}
