import React from "react"
import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.div`
  padding: 0.75rem 1rem;
  background: black;
  color: white;
  display: flex;
  align-items: flex-end;
`

const Info = styled.div`
  flex: 1;
`

const Actions = styled.div`
  height: 100%;
  user-select: none;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const RefreshIcon = styled(FontAwesomeIcon).attrs({ icon: "sync-alt" })`
  color: white;
  font-size: 0.8rem;
  opacity: 0.8;
  cursor: pointer;
  transition: 0.15s opacity linear;

  &:hover {
    opacity: 1;
  }
`

export default function Menu(props) {
  const { piece, ...restProps } = props

  const { title = "Untitled", date } = piece

  return (
    <Container {...restProps}>
      <Info>
        <Title>{title}</Title>
        <Subtitle>{date}</Subtitle>
      </Info>
      <Actions>
        <RefreshIcon />
      </Actions>
    </Container>
  )
}
