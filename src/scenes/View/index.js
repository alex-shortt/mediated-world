import React, { useRef } from "react"
import styled, { keyframes } from "styled-components"

import { getPieceByIndex, getPieceIndexByTitle } from "services/pieces"
import { calcChildrenZIndex } from "services/zIndex"
import Helmet from "components/Helmet"
import Canvas from "components/Canvas"
import Placard from "components/Placard"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;

  animation: ease-in ${fadeIn} forwards 2s;
  animation-delay: 0.5s;
`

export default function View(props) {
  const {
    match: {
      params: { pieceId }
    }
  } = props

  // TODO: if not first or second option, redirect or 404!
  const index = parseInt(pieceId, 10) - 1 || getPieceIndexByTitle(pieceId) || 0

  const contentRowRef = useRef()

  return (
    <Container>
      <Helmet title="Mediated World" />
      <Canvas parentRef={contentRowRef} piece={getPieceByIndex(index)} />
      <Placard piece={getPieceByIndex(index)} />
    </Container>
  )
}
