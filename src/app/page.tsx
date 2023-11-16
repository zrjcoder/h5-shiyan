import { Box, Button, Paper, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { homeModules } from './config'
import { TContainer } from '@/components'

export default function Home() {
  return (
    <TContainer>
      <Box height={180} width={'100%'} position={'relative'}>
        <Image src="/images/home-bg.png" fill alt={'十堰美景'} />
      </Box>

      <Stack spacing={2} m={1}>
        {homeModules.map((module) => {
          return (
            <Paper key={module?.title} elevation={5}>
              <Stack p={2}>
                <Box fontWeight={500}>{module?.title}</Box>

                <Stack direction={'row'} mt={1} spacing={1}>
                  {module.children.map((item) => {
                    return <Module key={item?.title} data={item} />
                  })}
                </Stack>
              </Stack>
            </Paper>
          )
        })}
      </Stack>
    </TContainer>
  )

  function Module({ data }: { data: any }) {
    const size = data?.size ?? 30

    return (
      <Link href={data?.href}>
        <Button variant="text">
          <Stack alignItems={'center'}>
            <Image src={data?.src} width={size} height={size} alt={''} />
            <Box mt={1} fontSize={16} color={'#616161'}>
              {data?.title}
            </Box>
          </Stack>
        </Button>
      </Link>
    )
  }
}
