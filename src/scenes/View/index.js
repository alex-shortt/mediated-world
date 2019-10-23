import React, { useRef, useState, useCallback } from "react"
import styled from "styled-components"

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

const pieces = [1, 2, 3, 4, 5, 6, 7, 8]

export default function View(props) {
  const contentRowRef = useRef()

  const [piece, setPiece] = useState(0)

  const changePiece = useCallback(
    diff => {
      let newPiece = piece + diff

      if (newPiece > pieces.length - 1) {
        newPiece = 0
      }
      if (newPiece < 0) {
        newPiece = pieces.length - 1
      }

      setPiece(newPiece)
    },
    [piece]
  )

  return (
    <Container>
      <Helmet title="View" />
      <ContentRow ref={contentRowRef}>
        <Canvas parentRef={contentRowRef} />
        <Placard />
      </ContentRow>
      <NavigationRow>
        <Navigation pos={piece} changePos={changePiece} range={pieces.length} />
      </NavigationRow>
    </Container>
  )
}
