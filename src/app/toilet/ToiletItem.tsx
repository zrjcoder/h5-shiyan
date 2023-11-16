import { Badge, Box, Chip, Paper, Stack } from '@mui/material'
import React from 'react'

export default function ToiletItem({ data }: { data: any }) {
  return (
    <Paper sx={{ width: '100%', p: 2 }} elevation={5}>
      <Stack
        flexWrap="wrap"
        mb={1}
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
      >
        <Box
          bgcolor={'#266EFF'}
          borderRadius={1}
          fontSize={12}
          px={1}
          color={'white'}
        >{`公厕编号：${data?.toiletNumber}`}</Box>
        <Box fontSize={12} color={'#999999'}>
          {' '}
          {`开放时间：${data?.openTime ?? '09:00'}-${data?.endTime ?? '21:00'}`}
        </Box>
      </Stack>

      <Stack
        flexWrap="wrap"
        justifyContent={'space-between'}
        direction={'row'}
        mb={1}
      >
        <Box fontWeight={'bold'}>{data?.toiletName ?? '暂无'}</Box>
        <Box color={data?.enabledFacility === 1 ? 'green' : 'red'}>
          {data?.enabledFacility === 1 ? '启用' : '关闭'}
        </Box>
      </Stack>

      <Stack flexWrap="wrap" direction={'row'}>
        <Box fontSize={14} color={'#999999'} mr={2}>
          公厕位置
        </Box>
        <Box fontSize={14}>{data?.address ?? '暂无'}</Box>
      </Stack>
    </Paper>
  )
}
