'use client'

import React, { useEffect } from 'react'
import { Select, MenuItem, InputLabel, FormHelperText } from '@mui/material'
import './MyForm.css' // 导入自定义的 CSS 样式

const labelWidth = '120px'

interface FormSelectProps {
  title: string
  name: string
  list: { value: any; label: string }[]
  disabled: Boolean
  isrequired: Boolean
}

export function FormSelect({
  title,
  name,
  list,
  disabled,
  isrequired,
}: FormSelectProps) {
  useEffect(() => {
    console.log(list, 'list')
  }, [])
  return (
    <div className="input-wrapper">
      <InputLabel
        htmlFor={name}
        className="input-label"
        style={{ width: labelWidth }}
      >
        {isrequired ? <span className="required">*</span> : <span>&ensp;</span>}
        {title}
      </InputLabel>
      <div className="select-wrapper">
        <Select id={name} style={{ width: '90%' }} disabled={disabled}>
          {list && list.length > 0
            ? list.map((item) => (
                // <MenuItem key={item?.value}>{item.label}</MenuItem>
                <div key={item?.value}>{item.label}</div>
              ))
            : ''}
        </Select>
      </div>
    </div>
  )
}
