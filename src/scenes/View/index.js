import React, { useRef } from "react"
import styled from "styled-components"

import Helmet from "components/Helmet"
import Portal from "components/Portal"

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
  background: rgba(245, 0, 0, 0.4);
`

export default function View(props) {
  const contentRowRef = useRef()

  return (
    <Container>
      <Helmet title="View" />
      <ContentRow ref={contentRowRef}>
        <Portal parentRef={contentRowRef} />
      </ContentRow>
    </Container>
  )
}
