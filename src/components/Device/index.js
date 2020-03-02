import React from "react"
import styled from "styled-components/macro"
import Draggable from "react-draggable"

import MenuBar from "./components/MenuBar"

const Container = styled.div`
  height: 50%;
  width: 50%;
  box-sizing: border-box;
  padding: 0;
  border: 4px solid black;
  background: white;

  @media screen and (max-width: 850px) {
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

export default function Device(props) {
  const { children } = props

  const draggableSettings = {
    handle: ".handle",
    bounds: "body"
  }

  return (
    <Draggable {...draggableSettings}>
      <Container>
        <MenuBar className="handle" />
        {children}
      </Container>
    </Draggable>
  )
}
