import React from "react"
import styled from "styled-components/macro"

import Menu from "./components/Menu"

const Container = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  margin: 0 25px;
  padding: 0;
  border: 4px solid black;

  @media screen and (max-width: 850px) {
    padding: 0 4vw;
    position: absolute;
    background: white;
    width: 60vw;
    border: 4px solid black;
    bottom: 17vh;
    left: 33vw;
    overflow-y: auto;
    max-height: 60vh;
    height: auto;
  }
`

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
    <Container {...restProps}>
      <Menu {...props} />
      <Text>{description}</Text>
    </Container>
  )
}
