'use client'

import React, { useState, useEffect, Fragment } from 'react'
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
    belongToName: '50元/花池',
  },
]

interface FormData {
  districtUnitCode: any
  districtUnitName: string
  objectUnitId: any
  objectUnitName: string
  assessmentTime: string
  sectionName: string
  address: string
  scoreTypeCode: any
  scoreTypeName: string
  scoreName: string
  score: string
  remark: string
  photo: string
}

export function GardenPatrol() {
  const [flag, setFlag] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    // 在这里定义表单的字段
    districtUnitCode: '',
    districtUnitName: '',
    objectUnitId: undefined,
    objectUnitName: '',
    assessmentTime: new Date().toLocaleDateString().replace(/\//g, '-'), // 将默认值设置为当前时间,
    sectionName: '',
    address: '',
    scoreTypeCode: '',
    scoreTypeName: '',
    scoreName: '',
    score: '',
    remark: '',
    photo: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => {
      let selectBelongToName = bigTitleList.find((item) => value === item.value)
      return {
        ...prevData,
        [name]: value,
        scoreName:
          name === 'scoreTypeCode'
            ? selectBelongToName
              ? selectBelongToName.belongToName
              : prevData.scoreName
            : prevData.scoreName,
      }
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFlag(false)
    const selectdistrictUnitName = bigTitleList.find(
      (item) => item.value === formData.districtUnitCode
    )
    const selectObjectUnitName = list.find(
      (item) => item.value === formData.objectUnitId
    )
    const selectScoreTypeName = bigTitleList.find(
      (item) => item.value === formData.objectUnitId
    )

    formData.districtUnitName = selectdistrictUnitName
      ? selectdistrictUnitName.label
      : ''
    formData.objectUnitName = selectObjectUnitName
      ? selectObjectUnitName.label
      : ''
    formData.scoreTypeName = selectScoreTypeName
      ? selectScoreTypeName.label
      : ''
    // 在这里处理表单提交逻辑
    console.log(formData, 'formData')
  }

  return (
    <Fragment>
      <Header title="日常巡查" />
      <Card style={{ height: 'calc(100vh - 56px)', overflow: 'scroll' }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={2}>
            <FormSelect
              title="区划单位:"
              name="districtUnitCode"
              list={list}
              isrequired={true}
              value={formData.districtUnitCode}
              onChange={handleChange}
              flag={flag || formData.districtUnitCode ? true : false}
            />
            <FormSelect
              title="养护单位:"
              name="objectUnitId"
              list={list}
              isrequired={true}
              value={formData.objectUnitId}
              onChange={handleChange}
              flag={flag || formData.objectUnitId ? true : false}
            />
            <FormInput
              title="巡查时间:"
              name="assessmentTime"
              disabled={true}
              isrequired={true}
              value={formData.assessmentTime}
              onChange={handleChange}
              flag={flag || formData.assessmentTime ? true : false}
            />
            <FormInput
              title="标段:"
              name="sectionName"
              isrequired={true}
              value={formData.sectionName}
              onChange={handleChange}
              flag={flag || formData.sectionName ? true : false}
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
              title="评分标准:"
              name="scoreTypeCode"
              list={bigTitleList}
              isrequired={true}
              value={formData.scoreTypeCode}
              onChange={handleChange}
              flag={flag || formData.scoreTypeCode ? true : false}
            />
            <FormInput
              title="扣款标准:"
              name="scoreName"
              isrequired={true}
              disabled={true}
              value={formData.scoreName}
              onChange={handleChange}
              flag={flag || formData.scoreName ? true : false}
            />
            <FormInput
              title="巡查扣款:"
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
