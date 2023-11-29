'use client'

import React, { useState, Fragment } from 'react'
import { TextField, Button, Stack, Link, Card } from '@mui/material'
import { FormInput, FormSelect, Header } from '@/components'

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

interface FormData {
  objectUnitId: any
  objectUnitName: string
  assessmentTime: string
  streetUnitId: any
  streetUnitName: string
  pointName: string
  address: string
  bigTitleCode: string
  bigTitleName: string
  titleCode: any
  titleName: string
  scoreTypeCode: any
  scoreTypeName: string
  score: string
  remark: string
  photo: string
}

export function EnvPatrol() {
  const [flag, setFlag] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    // 在这里定义表单的字段
    objectUnitId: undefined,
    objectUnitName: '',
    assessmentTime: new Date().toLocaleDateString().replace(/\//g, '-'), // 将默认值设置为当前时间,
    streetUnitId: undefined,
    streetUnitName: '',
    pointName: '',
    address: '',
    bigTitleCode: '01',
    bigTitleName: '',
    titleCode: undefined,
    titleName: '',
    scoreTypeCode: undefined,
    scoreTypeName: '',
    score: '',
    remark: '',
    photo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFlag(false)
    const selectObjectUnitName = list.find(
      (item) => item.value === formData.objectUnitId
    )
    const selectStreetUnitName = list.find(
      (item) => item.value === formData.streetUnitId
    )
    const selectBigTitleName = bigTitleList.find(
      (item) => item.value === formData.bigTitleName
    )
    const selectTitleName = list.find(
      (item) => item.value === formData.objectUnitId
    )
    const selectScoreTypeName = list.find(
      (item) => item.value === formData.objectUnitId
    )

    formData.objectUnitName = selectObjectUnitName
      ? selectObjectUnitName.label
      : ''

    formData.streetUnitName = selectStreetUnitName
      ? selectStreetUnitName.label
      : ''
    formData.bigTitleName = selectBigTitleName ? selectBigTitleName.label : ''
    formData.titleName = selectTitleName ? selectTitleName.label : ''
    formData.scoreTypeName = selectScoreTypeName
      ? selectScoreTypeName.label
      : ''
    // 在这里处理表单提交逻辑
    console.log(formData, 'formData')
  }

  return (
    <Fragment>
      <Header title="日常检查"></Header>
      <Card style={{ height: 'calc(100vh - 56px)', overflow: 'scroll' }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={2}>
            <FormSelect
              title="被考核单位:"
              name="objectUnitId"
              list={list}
              isrequired={true}
              value={formData.objectUnitId}
              onChange={handleChange}
              flag={flag || formData.objectUnitId ? true : false}
            />
            <FormInput
              title="考核时间:"
              name="assessmentTime"
              disabled={true}
              isrequired={true}
              value={formData.assessmentTime}
              onChange={handleChange}
              flag={flag || formData.assessmentTime ? true : false}
            />
            <FormSelect
              title="所属街道:"
              name="streetUnitId"
              list={list}
              isrequired={true}
              value={formData.streetUnitId}
              onChange={handleChange}
              flag={flag || formData.streetUnitId ? true : false}
            />
            <FormInput
              title="点位:"
              name="pointName"
              isrequired={true}
              value={formData.pointName}
              onChange={handleChange}
              flag={flag || formData.pointName ? true : false}
            />
            <FormInput
              title="详细地址:"
              name="address"
              isrequired={true}
              value={formData.address}
              onChange={handleChange}
              flag={flag || formData.address ? true : false}
            />
            <FormSelect
              title="大标题:"
              name="bigTitleCode"
              list={bigTitleList}
              isrequired={true}
              disabled={true}
              value={formData.bigTitleCode}
              onChange={handleChange}
              flag={flag || formData.bigTitleCode ? true : false}
            />
            <FormSelect
              title="小标题:"
              name="titleCode"
              list={list}
              isrequired={true}
              value={formData.titleCode}
              onChange={handleChange}
              flag={flag || formData.titleCode ? true : false}
            />
            <FormSelect
              title="评分标准:"
              name="scoreTypeCode"
              list={list}
              isrequired={true}
              value={formData.scoreTypeCode}
              onChange={handleChange}
              flag={flag || formData.scoreTypeCode ? true : false}
            />
            <FormInput
              title="扣分:"
              name="score"
              isrequired={true}
              value={formData.score}
              onChange={handleChange}
              flag={flag || formData.score ? true : false}
            />
            <FormInput
              title="备注:"
              name="remark"
              rows={4}
              value={formData.remark}
              onChange={handleChange}
            />
            <FormInput
              title="照片:"
              name="photo"
              isrequired={true}
              value={formData.photo}
              onChange={handleChange}
              flag={flag || formData.photo ? true : false}
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
      </Card>
    </Fragment>
  )
}
