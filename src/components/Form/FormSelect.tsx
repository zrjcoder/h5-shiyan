'use client'

import React, { useEffect, useState } from 'react'
import {
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl,
} from '@mui/material'
import './MyForm.css' // 导入自定义的 CSS 样式

const labelWidth = '120px'

interface FormSelectProps {
  title: string
  name: string
  list: { value: any; label: string }[]
  disabled: boolean
  isrequired: boolean
  value: any
  onChange: any
  flag: boolean
}

export function FormSelect({
  title,
  name,
  list,
  disabled,
  isrequired,
  value,
  onChange,
  flag,
}: FormSelectProps) {
  const handleSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    onChange({ target: { name, value: e.target.value } })
  }
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
          onChange={handleSelectChange}
          MenuProps={{
            placeholder: '请选择', // 设置placeholder
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
