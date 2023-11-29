import { Box, BoxProps, Paper, Stack } from '@mui/material'
import React, { ReactNode } from 'react'

export function TCard({
  title = '',
  children,
  ...props
}: {
  title: string
  children: ReactNode
} & BoxProps) {
  return (
    <Box {...props}>
      <Paper
        elevation={5}
        sx={{
          padding: 3 / 2,
        }}
      >
        <Stack direction={'row'} position={'relative'} alignItems={'center'}>
          <Box
            bgcolor={'#266EFF'}
            height={'20px'}
            width={5}
            borderRadius={1}
            mr={1}
          />
          <Box fontWeight={'bold'}>{title}</Box>
        </Stack>
        {children}
      </Paper>
    </Box>
  )
}
