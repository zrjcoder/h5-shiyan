import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

export function LinkWrapper({
  children,
  ...props
}: { children: ReactNode } & LinkProps) {
  return (
    <Link {...props} style={{ textDecoration: 'none', color: 'white' }}>
      {children}
    </Link>
  )
}
