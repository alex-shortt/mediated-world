import React from "react"
import styled from "styled-components/macro"

import P5Wrapper from "components/P5Wrapper"
import Device from "components/Device"
import { useAspectRatio, useRefDimensions } from "services/dimensions"

const percentageOfParent = 0.6

export default function Canvas(props) {
  const { piece, parentRef, ...restProps } = props

  const ratio = useAspectRatio()
  const parentDimensions = useRefDimensions(parentRef)

  let width = parentDimensions.height * ratio
  let height = parentDimensions.height + 1 - 1

  const widthRatio = width / parentDimensions.width
  if (widthRatio > percentageOfParent) {
    width = parentDimensions.width * percentageOfParent
    height = width / ratio
  }

  if (window.innerWidth < 850) {
    width = window.innerWidth * 0.7
    height = width / ratio
  }

  const style = { width: `${width}px`, height: `${height}px` }

  if (piece.type === "p5") {
    return (
      <Device style={style} {...restProps}>
        <P5Wrapper sketch={piece.sketch} cover={piece.cover} />
      </Device>
    )
  }

  return <Device style={style} {...restProps} />
}
