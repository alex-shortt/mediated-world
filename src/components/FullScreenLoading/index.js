import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components/macro"

import { useMousePos } from "services/sensors"

const FullScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  background: white;
`

const shiftFactor = 10
const deltaTotal = 0
const background = "hsla(255, 255, 255, 100)"

export default function FullScreenLoading() {
  // TODO: react to network changes?

  // const { handleMouseMove, mouseDeltaTotal, mouseX, mouseY } = useMousePos()
  // const [counter, setCounter] = useState(0)
  //
  // const update = useCallback(
  //   deltaTotalState => {
  //     let moveDelta = 0
  //     if (mouseDeltaTotal > deltaTotalState) {
  //       moveDelta = Math.abs(mouseDeltaTotal - deltaTotalState) / shiftFactor
  //     }
  //
  //     const mouseAngle = Math.abs(Math.atan2(mouseY, mouseX)) / (Math.PI / 2)
  //
  //     const h = Math.floor(mouseAngle * 255)
  //     const s = Math.floor(moveDelta * 100)
  //     const l = 100 - Math.floor(moveDelta * 100)
  //
  //     background = `hsla(${h}, ${s}%, ${l}%, 1)`
  //     console.log(mouseDeltaTotal - deltaTotalState)
  //     if (moveDelta < 0.0005) {
  //       deltaTotal = mouseDeltaTotal
  //     } else {
  //       deltaTotal += 0.01
  //     }
  //   },
  //   [mouseDeltaTotal, mouseX, mouseY]
  // )
  //
  // useEffect(() => {
  //   update(deltaTotal)
  //   requestAnimationFrame(() => setCounter(counter + 1))
  // }, [counter, update])

  // return (
  //   <FullScreenWrapper style={{ background }} onMouseMove={handleMouseMove} />
  // )

  return <FullScreenWrapper />
}

/*
draw(mouseX, mouseY) {
      p.push()
      p.strokeWeight(p.map(moveDelta, 0, 1, 0, 4))

      const mouseAngle = Math.abs(Math.atan2(-mouseY, mouseX))



      p.fill(p.color(`hsla(${h}, ${s}%, ${l}%, 100)`))

      const yRot = Math.atan2(mouseX, z) // <-->
      const xRot = -Math.atan2(mouseY, z)

      p.rotateY(yRot)
      p.rotateX(xRot)
      p.box(Math.min(size + movedDelta / 8, size + size / 2))
      p.pop()
    }
 */
