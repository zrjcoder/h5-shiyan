import { TCard, TContainer } from '@/components'
import { RowInput } from '@/components/Form'
import { Box, Container, Input } from '@mui/material'
import React from 'react'

export default function ToiletDetail() {
  return (
    <TContainer px={1} pt={4}>
      <TCard title="问题上报">
        <RowInput label={'公厕名称'} />
      </TCard>
    </TContainer>
  )
}
