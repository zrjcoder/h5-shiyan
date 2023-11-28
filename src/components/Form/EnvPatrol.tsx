'use client'

import React, { useState } from 'react'
import { TextField, Button, Stack, Link, Card } from '@mui/material'
import { FormInput, FormSelect } from '@/components'

const labelWidth = '120px'

let list = [
  {
    value: 1,
    label: '茅箭区五堰街道',
  },
  {
    value: 2,
    label: '茅箭区二堰街办',
  },
]

let bigTitleList = [
  {
    value: '01',
    label: '督导专班',
  },
]

// interface FormData {
//   objectUnitId: string
//   assessmentTime: string
//   streetUnitId: string
//   pointName: string
//   address: string
//   bigTitleCode: string
//   titleCode: string
//   scoreTypeCode: string
//   score: string
//   remark: string
//   [key: string]: string // 添加索引签名
// }

export function EnvPatrol() {
  // const [formData, setFormData] = useState<FormData>({
  //   // 在这里定义表单的字段
  //   objectUnitId: '',
  //   assessmentTime: '',
  //   streetUnitId: '',
  //   pointName: '',
  //   address: '',
  //   bigTitleCode: '',
  //   titleCode: '',
  //   scoreTypeCode: '',
  //   score: '',
  //   remark: '',
  // })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }))
  // }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 在这里处理表单提交逻辑
    // console.log(formData, 'formData')
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mt={2}>
          <FormInput title="被考核单位" name="objectUnitId" isrequired={true} />
          <FormInput title="考核时间:" name="assessmentTime" disabled={true} />
          <FormSelect title="所属街道:" name="streetUnitId" list={list} />
          <FormSelect title="点位:" name="pointName" />
          <FormInput title="详细地址:" name="address" />
          <FormSelect
            title="大标题:"
            name="bigTitleCode"
            list={bigTitleList}
            disabled={true}
          />
          <FormSelect title="小标题:" name="titleCode" list={list} />
          <FormSelect title="评分标准:" name="scoreTypeCode" list={list} />
          <FormInput title="扣分:" name="score" />
          <FormInput title="备注:" name="remark" />
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
    </Card>
  )
}
