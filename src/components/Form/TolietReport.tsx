'use client'

import React, { useState } from 'react'
import { TextField, Button, Stack, Link, Card } from '@mui/material'
import { FormInput, FormSelect } from '@/components'

let tolietList = [
  {
    value: '01',
    label: '公厕1',
    community: '所属社区1',
    tolietType: '公厕类型1',
  },
  {
    value: '02',
    label: '公厕2',
    community: '所属社区2',
    tolietType: '公厕类型2',
  },
  {
    value: '03',
    label: '公厕3',
    community: '所属社区3',
    tolietType: '公厕类型3',
  },
]

interface FormData {
  reportPerson: string
  phone: string
  tolietCode: any
  tolietName: string
  community: string
  tolietType: string
  description: string
}

export function TolietReport() {
  const [flag, setFlag] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    // 在这里定义表单的字段
    reportPerson: '',
    phone: '',
    tolietCode: '',
    tolietName: '',
    community: '',
    tolietType: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => {
      let selectCommunity = tolietList.find((item) => value === item.value)
      return {
        ...prevData,
        [name]: value,
        community:
          name === 'tolietCode'
            ? selectCommunity
              ? selectCommunity.community
              : prevData.community
            : prevData.community,
        tolietType:
          name === 'tolietCode'
            ? selectCommunity
              ? selectCommunity.tolietType
              : prevData.tolietType
            : prevData.tolietType,
      }
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFlag(false)
    const selectTolietName = tolietList.find(
      (item) => item.value === formData.tolietCode
    )

    formData.tolietName = selectTolietName ? selectTolietName.label : ''

    // 在这里处理表单提交逻辑
    console.log(formData, 'formData')
  }

  return (
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
          title="公厕名称:"
          name="tolietCode"
          list={tolietList}
          isrequired={true}
          value={formData.tolietCode}
          onChange={handleChange}
          flag={flag || formData.tolietCode ? true : false}
        />
        <FormInput
          title="所属社区:"
          name="community"
          isrequired={false}
          disabled={true}
          value={formData.community}
          onChange={handleChange}
          flag={flag || formData.community ? true : false}
        />
        <FormInput
          title="公厕类型:"
          name="tolietType"
          isrequired={false}
          disabled={true}
          value={formData.tolietType}
          onChange={handleChange}
          flag={flag || formData.tolietType ? true : false}
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
  )
}
