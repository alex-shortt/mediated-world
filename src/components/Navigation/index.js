import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

import { NUM_PIECES, getPieceNeighborTitles } from "services/pieces"

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
  user-select: none;
  transition: fill 0.15s linear;
  cursor: pointer;

  &:hover {
    fill: black;
  }

  @media screen and (max-width: 850px) {
    width: 30px;
    height: 30px;
  }
`

const Position = styled.h1`
  font-family: Impact, sans-serif;
  margin: 0 20px;
  width: 100px;
  text-align: center;

  @media screen and (max-width: 850px) {
    width: 30vw;
    font-size: 1.8em;
  }
`

export default function Navigation(props) {
  const { pos } = props

  const { prev, next } = getPieceNeighborTitles(pos)

  return (
    <Container>
      <Link to={`/${prev}`}>
        <Triangle>
          <polygon points="4,50 96,4 96,96" />
        </Triangle>
      </Link>
      <Position>
        {pos + 1} of {NUM_PIECES}
      </Position>
      <Link to={`/${next}`}>
        <Triangle>
          <polygon points="96,50 4,4 4,96" />
        </Triangle>
      </Link>
    </Container>
  )
}
