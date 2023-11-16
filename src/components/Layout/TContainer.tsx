import { Box, BoxProps, Container } from '@mui/material'
import React, { ReactNode } from 'react'

export function TContainer({
  children,
  ...props
}: { children: ReactNode } & BoxProps) {
  return (
    <Container
      sx={{
        padding: 0
      }}
      maxWidth={'xs'}
    >
      <Box
        minWidth={'375px'}
        maxHeight={'100vh'}
        sx={{
          height: '100vh',
          backgroundColor: '#F7F8FA'
        }}
        {...props}
      >
        {children}
      </Box>
    </Container>
  )
}
