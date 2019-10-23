import React from "react"
import styled from "styled-components/macro"

import { useAspectRatio, useRefDimensions } from "services/dimensions"

const Container = styled.div`
  border: 4px solid black;
  background: white;
  box-sizing: border-box;
`

const percentageOfParent = 0.6

export default function Portal(props) {
  const { parentRef } = props

  const ratio = useAspectRatio()
  const parentDimensions = useRefDimensions(parentRef)

  let width = parentDimensions.height * ratio
  let height = parentDimensions.height + 1 - 1

  const widthRatio = width / parentDimensions.width
  if (widthRatio > percentageOfParent) {
    width = parentDimensions.width * percentageOfParent
    height = width / ratio
  }

  return <Container style={{ width: `${width}px`, height: `${height}px` }} />
}
