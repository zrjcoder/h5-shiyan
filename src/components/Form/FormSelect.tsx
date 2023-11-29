'use client'

import React, { useEffect, useState } from 'react'
import {
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl,
  SelectProps
} from '@mui/material'
import './MyForm.css' // 导入自定义的 CSS 样式

const labelWidth = '80px'

interface FormSelectProps {
  title: string
  name?: string
  list?: { value: any; label: string }[]
  disabled?: boolean
  isrequired?: boolean
  value?: any
  onChange?: (result: any) => void
  flag?: boolean
}

export function FormSelect({
  title,
  name,
  list,
  disabled = false,
  isrequired,
  value,
  onChange,
  flag,
  ...props
}: FormSelectProps) {
  useEffect(() => {}, [])
  return (
    <div className="input-wrapper">
      <InputLabel
        htmlFor={name}
        className="input-label"
        style={{ width: labelWidth, marginLeft: '10px' }}
      >
        {isrequired ? <span className="required">*</span> : <span>&ensp;</span>}
        {title}
      </InputLabel>
      <div className="select-wrapper">
        <Select
          id={name}
          style={{ width: '90%' }}
          disabled={disabled}
          value={value}
          MenuProps={{
            placeholder: '请选择' // 设置placeholder
          }}
          onChange={(result: any) => {
            if (onChange) {
              onChange({ target: { name, value: result?.target?.value } })
            }
          }}
        >
          {(list ?? []).map((item) => (
            <MenuItem key={item?.value} value={item?.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {isrequired ? flag ? '' : <FormHelperText>必填</FormHelperText> : ''}
      </div>
    </div>
  )
}
