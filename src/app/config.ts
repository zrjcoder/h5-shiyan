export const homeModules = [
  {
    title: '环卫巡查',
    type: 'container',
    children: [
      {
        title: '日常检查',
        href: '/sanitation/daily',
        type: 'item',
        src: '/icons/clock.png'
      },
      {
        title: '待办事项',
        href: '/sanitation/todo',
        type: 'item',
        src: '/icons/clock.png'
      }
    ]
  },
  {
    title: '园林巡查',
    type: 'container',
    children: [
      {
        title: '日常巡查',
        href: '/gardens/daily',
        type: 'item',
        src: '/icons/clock.png'
      }
    ]
  },
  {
    title: '问题上报',
    type: 'container',
    children: [
      {
        title: '公厕问题上报',
        href: '/problemReport/toliet',
        // href: '/toilet',
        type: 'item',
        src: '/icons/toilet.png'
      },
      {
        title: '园林问题上报',
        href: '/problemReport/garden',
        type: 'item',
        src: '/icons/evaluation.png'
      }
    ]
  },
  {
    title: '市民评价',
    type: 'container',
    children: [
      {
        title: '市民评价',
        href: '/evaluation',
        type: 'item',
        src: '/icons/evaluation.png'
      }
    ]
  }
  // {
  //   title: '行业应用',
  //   type: 'container',
  //   children: [
  //     {
  //       title: '考勤打卡',
  //       href: '/clock',
  //       type: 'item',
  //       src: '/icons/clock.png',
  //     },
  //   ],
  // },
  // {
  //   title: '问题上报',
  //   type: 'container',
  //   children: [
  //     {
  //       title: '公厕问题',
  //       href: '/toilet',
  //       type: 'item',
  //       src: '/icons/toilet.png',
  //     },
  //     {
  //       title: '市民评价',
  //       href: '/evaluation',
  //       type: 'item',
  //       src: '/icons/evaluation.png',
  //     },
  //   ],
  // },
]
