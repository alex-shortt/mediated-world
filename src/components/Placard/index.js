import React from "react"
import styled from "styled-components/macro"

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const Container = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 0 25px;
`

const Title = styled.h1`
  font-family: Impact, sans-serif;
`
const Description = styled.p`
  font-family: "Times New Roman", serif;
`

export default function Placard(props) {
  const { title = "Ronda", description = loremIpsum } = props
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
