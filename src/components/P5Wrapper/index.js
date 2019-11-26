import React from "react"
import "p5"
import P5WrapperBase from "react-p5-wrapper"
import styled from "styled-components/macro"

const Container = styled.div`
  height: 100%;
  width: 100%;

  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;

    & > canvas {
      width: 100% !important;
      height: 100% !important;
      max-height: 100%;
      max-width: 100%;
      object-fit: ${props => (props.cover ? "cover" : "contain")};
    }
  }
`

export default function P5Wrapper(props) {
  const { sketch, cover, ...restProps } = props

  return (
    <Container cover={cover} {...restProps}>
      <P5WrapperBase sketch={sketch} />
    </Container>
  )
}
