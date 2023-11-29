'use client'

import React, { useState, Fragment } from 'react'
import { TextField, Button, Stack, Link, Card } from '@mui/material'
import { FormInput, FormSelect, Header } from '@/components'

let areaList = [
  {
    value: '01',
    label: '张湾区',
  },
  {
    value: '02',
    label: '茅箭区',
  },
  {
    value: '03',
    label: '白浪',
  },
]

interface FormData {
  reportPerson: string
  phone: string
  districtUnitCode: any
  districtUnitName: string
  description: string
}

export function GardenReport() {
  const [flag, setFlag] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    // 在这里定义表单的字段
    reportPerson: '',
    phone: '',
    districtUnitCode: '',
    districtUnitName: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFlag(false)
    const selectdistrictUnitName = areaList.find(
      (item) => item.value === formData.districtUnitCode
    )

    formData.districtUnitName = selectdistrictUnitName
      ? selectdistrictUnitName.label
      : ''

    // 在这里处理表单提交逻辑
    console.log(formData, 'formData')
  }

  return (
    <Fragment>
      <Header title="园林问题上报"></Header>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mt={2}>
          <FormInput
            title="上报人:"
            name="reportPerson"
            isrequired={true}
            value={formData.reportPerson}
            onChange={handleChange}
            flag={flag || formData.reportPerson ? true : false}
          />
          <FormInput
            title="联系电话:"
            name="phone"
            isrequired={true}
            value={formData.phone}
            onChange={handleChange}
            flag={flag || formData.phone ? true : false}
          />
          <FormSelect
            title="行政区划:"
            name="districtUnitCode"
            list={areaList}
            isrequired={true}
            value={formData.districtUnitCode}
            onChange={handleChange}
            flag={flag || formData.districtUnitCode ? true : false}
          />

          <FormInput
            title="问题描述:"
            name="description"
            isrequired={true}
            rows={4}
            value={formData.description}
            onChange={handleChange}
            flag={flag || formData.description ? true : false}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href={'/'}>
              <Button
                variant="outlined"
                style={{ marginTop: '20px', marginRight: '20px' }}
              >
                返回
              </Button>
            </Link>
            <Button
              type="submit"
              variant="outlined"
              style={{ marginTop: '20px' }}
            >
              提交
            </Button>
          </div>
        </Stack>
      </form>
    </Fragment>
  )
}
