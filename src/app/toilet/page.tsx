import { Button, TContainer } from '@/components'

export const revalidate = 60

import { fetchToiletList } from '@/libs'
import { Box, List, ListItem } from '@mui/material'

import React from 'react'
import ToiletItem from './ToiletItem'

import { LinkWrapper } from '@/components'

export default async function Toilet() {
  // const { records } = await fetchToiletList()
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const list = await res.json()

  return (
    <Box>
      {list.map((item: any) => {
        return <Box key={item.userId}>{item?.title}</Box>
      })}
    </Box>
  )

  // return (
  //   <TContainer>
  //     <List>
  //       {(records ?? []).map((item: any) => {
  //         return (
  //           <LinkWrapper href={'/toilet/detail'} key={item.toiletNumber}>
  //             <ListItem>
  //               <ToiletItem data={item} />
  //             </ListItem>
  //           </LinkWrapper>
  //         )
  //       })}
  //     </List>
  //   </TContainer>
  // )
}
