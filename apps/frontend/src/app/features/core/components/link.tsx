import NextLink from "next/link"
import React from "react"

export type LinkProps = {
  id?: string
  name?: string
  href?: string
  target?: "_self" | "_blank" | "_parent" | "_top"
  children?: React.ReactNode
}

const Link = ({
  id,
  name,
  target = "_self",
  href = "",
  children
}: LinkProps) => {
  return (
    <NextLink href={href} target={target} id={id}>
      {children}
    </NextLink>
  )
}

export default Link
