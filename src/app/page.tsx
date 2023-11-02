import { Box, Button, Paper, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const homeModules = [
  {
    title: '行业应用',
    type: 'container',
    children: [
      {
        title: '考勤打卡',
        href: '/clock',
        type: 'item',
        src: '/icons/clock.png'
      },
      {
        title: '市民评价',
        href: '/evaluation',
        type: 'item',
        src: '/icons/evaluation.png'
      }
    ]
  },
  {
    title: '问题上报',
    type: 'container',
    children: [
      {
        title: '公测问题',
        size: 45,
        href: '/toilet',
        type: 'item',
        src: '/icons/toilet.png'
      }
    ]
  }
]

export default function Home() {
  return (
    <Stack>
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
    </Stack>
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
