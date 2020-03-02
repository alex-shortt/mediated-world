import React from "react"
import styled from "styled-components/macro"

import Device from "components/Device"

import Menu from "./components/Menu"

const Text = styled.p`
  font-family: "Times New Roman", serif;
  padding: 0 10px;

  @media screen and (max-width: 850px) {
    font-size: 0.9em;
  }
`

export default function Placard(props) {
  const { piece, ...restProps } = props

  const { description = "" } = piece

  return (
    <Device {...restProps}>
      <Menu {...props} />
      <Text>{description}</Text>
    </Device>
  )
}
