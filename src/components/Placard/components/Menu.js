import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  padding: 0.75rem 1rem;
  background: black;
  color: white;
`

const Title = styled.h1`
  font-family: Impact, sans-serif;
  margin: 0 0 0.5rem;

  @media screen and (max-width: 850px) {
    font-size: 1.3em;
  }
`

const Subtitle = styled.p`
  font-family: Impact, sans-serif;
  font-size: 0.9em;
  padding: 0 0.25em;
  margin: 0;

  @media screen and (max-width: 850px) {
    font-size: 1.1em;
  }
`

export default function Menu(props) {
  const { piece, ...restProps } = props

  const { title = "Untitled", description = "", date } = piece

  return (
    <Container {...restProps}>
      <Title>{title}</Title>
      <Subtitle>{date}</Subtitle>
    </Container>
  )
}
