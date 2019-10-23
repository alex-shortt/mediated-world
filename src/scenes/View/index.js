import React, { useRef } from "react"
import styled from "styled-components"

import Helmet from "components/Helmet"
import Canvas from "components/Canvas"
import Placard from "components/Placard"

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
`

const ContentRow = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
`

export default function View(props) {
  const contentRowRef = useRef()

  return (
    <Container>
      <Helmet title="View" />
      <ContentRow ref={contentRowRef}>
        <Canvas parentRef={contentRowRef} />
        <Placard />
      </ContentRow>
    </Container>
  )
}
