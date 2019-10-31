import React, { useRef, useState } from "react"
import styled from "styled-components"

import { getPieceByIndex, NUM_PIECES } from "services/pieces"
import Helmet from "components/Helmet"
import Canvas from "components/Canvas"
import Placard from "components/Placard"
import Navigation from "components/Navigation"

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vh 5vw;
  box-sizing: border-box;
`

const ContentRow = styled.div`
  height: 50vh;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: 80vh;
    align-items: center;
  }
`

const NavigationRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 5vh auto 0;
  box-sizing: border-box;
  max-width: 900px;

  @media screen and (max-width: 850px) {
    margin: 2vh auto 0;
  }
`

export default function View(props) {
  const contentRowRef = useRef()

  const [index, setIndex] = useState(0)
  const [focusTop, setFocusTop] = useState("true")

  return (
    <Container>
      <Helmet title="Mediated World" />
      <ContentRow ref={contentRowRef}>
        <Canvas
          parentRef={contentRowRef}
          onClick={() => setFocusTop("false")}
          piece={getPieceByIndex(index)}
        />
        <Placard
          onClick={() => setFocusTop("true")}
          style={{ zIndex: focusTop === "true" ? 2 : 0 }}
          piece={getPieceByIndex(index)}
        />
      </ContentRow>
      <NavigationRow>
        <Navigation pos={index} setPos={setIndex} range={NUM_PIECES} />
      </NavigationRow>
    </Container>
  )
}
