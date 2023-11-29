'use client'

import React, { Fragment, useState, useEffect } from 'react'
import { FormInput, FormSelect, Header } from '@/components'
import {
  Card,
  Paper,
  List,
  ListItem,
  ListItemText,
  Link,
  Button,
  CircularProgress
} from '@mui/material'
import './MyForm.css' // 导入自定义的 CSS 样式

let pointList = [
  {
    value: '01',
    label: '环卫街道'
  },
  {
    value: '02',
    label: '五堰街道'
  },
  {
    value: '03',
    label: '江汉路街道'
  }
]

let list = [
  {
    id: 1,
    title: 11,
    street: '红卫街道',
    point: '湖北汽车工业学院',
    time: '2023-11-29'
  },
  {
    id: 2,
    title: 22,
    street: '红卫街道',
    point: '湖北汽车工业学院',
    time: '2023-11-29'
  },
  {
    id: 3,
    title: 33,
    street: '红卫街道',
    point: '湖北汽车工业学院',
    time: '2023-11-29'
  }
]

interface FormData {
  streetPointCode: any
  streetPointName: string
  envPointCode: any
  envPointName: string
}
export function TodoList() {
  const [formData, setFormData] = useState<FormData>({
    streetPointCode: undefined,
    streetPointName: '',
    envPointCode: undefined,
    envPointName: ''
  })
  const [taskList, setTaskList] = useState(list)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [taskList, isLoading])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
    console.log(formData, '待办任务filter')
  }
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      taskList.length >= 100
    )
      return
    setIsLoading(true) // 开始加载数据
    // 在这里执行加载更多数据的逻辑

    // 模拟异步加载数据的延迟
    setTimeout(() => {
      const newTaskList = [
        {
          id: 4,
          title: 44,
          street: '红卫街道',
          point: '湖北汽车工业学院',
          time: '2023-11-29'
        },
        {
          id: 5,
          title: 55,
          street: '红卫街道',
          point: '湖北汽车工业学院',
          time: '2023-11-29'
        },
        {
          id: 6,
          title: 66,
          street: '红卫街道',
          point: '湖北汽车工业学院',
          time: '2023-11-29'
        }
      ]
      setTaskList((prevItems) => [...prevItems, ...newTaskList])
      setIsLoading(false) // 数据加载完成
    }, 1000)
  }

  return (
    <Fragment>
      <Header title="待办任务" />
      <Card
        style={{ height: 'calc(100vh - 56px)', overflow: 'scroll' }}
        onScroll={handleScroll}
      >
        <div className="todoList_filter">
          <FormSelect
            title="街办点位"
            list={pointList}
            isrequired={false}
            value={formData.streetPointCode}
            onChange={handleChange}
          ></FormSelect>
          <FormSelect
            title="环卫所点位"
            list={pointList}
            isrequired={false}
            value={formData.envPointCode}
            onChange={handleChange}
          ></FormSelect>
        </div>
        <ul className="todoList_statistics">
          <li>
            <span>未完成:</span>
            <span>&ensp;3</span>
          </li>
          <li>
            <span>已完成:</span>
            <span>&ensp;7</span>
          </li>
          <li>
            <span>完成率:</span>
            <span>&ensp;48%</span>
          </li>
        </ul>
        <div className="todoList_contianer">
          {(taskList ?? []).map((item) => (
            <Paper key={item.id}>
              <List>
                <ListItem>
                  <ListItemText primary={`标题： ${item.title}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`所属街道： ${item.street}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`点位： ${item.point}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`考核时间： ${item.time}`} />
                </ListItem>
              </List>
            </Paper>
          ))}
          {isLoading && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <CircularProgress size={20} />
            </div>
          )}
        </div>
      </Card>
    </Fragment>
  )
}
