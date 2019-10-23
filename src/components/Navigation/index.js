import React, { useCallback } from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Triangle = styled.svg.attrs({
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none",
  vectorEffect: "non-scaling-stroke"
})`
  width: 50px;
  height: 50px;
  stroke-width: 4px;
  stroke: black;
  fill: white;

  transition: fill 0.15s linear;
  cursor: pointer;

  &:hover {
    fill: black;
  }
`

const Position = styled.h1`
  font-family: Impact, sans-serif;
  margin: 0 30px;
  width: 100px;
`

export default function Navigation(props) {
  const { pos, range, changePos } = props

  return (
    <Container>
      <Triangle onClick={() => changePos(-1)}>
        <polygon points="4,50 96,4 96,96" />
      </Triangle>
      <Position>
        {pos + 1} of {range}
      </Position>
      <Triangle onClick={() => changePos(1)}>
        <polygon points="96,50 4,4 4,96" />
      </Triangle>
    </Container>
  )
}
