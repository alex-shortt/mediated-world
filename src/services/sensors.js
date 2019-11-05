import React, { useState, useCallback, useEffect } from "react"

export function useMousePos() {
  const [mouseX, setMouseX] = useState()
  const [mouseY, setMouseY] = useState()
  const [mouseDeltaTotal, setMouseDeltaTotal] = useState(0)

  const handleMouseMove = useCallback(
    e => {
      if (mouseX && mouseY) {
        const deltaX = (e.clientX - mouseX) / window.innerWidth
        const deltaY = (e.clientY - mouseY) / window.innerHeight
        const deltaDist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
        setMouseDeltaTotal(mouseDeltaTotal + deltaDist)
      }

      setMouseX(e.clientX)
      setMouseY(e.clientY)
    },
    [mouseDeltaTotal, mouseX, mouseY]
  )

  return { handleMouseMove, mouseDeltaTotal, mouseX, mouseY }
}

// TODO: finish implementing device orientation!

// export function useDeviceOrientation() {
//   const [listening, setListening] = useState("false")
//   const [alpha, setAlpha] = useState()
//   const [beta, setBeta] = useState()
//   const [gamma, setGamma] = useState()
//   const [rotationDeltaTotal, setRotationDeltaTotal] = useState(0)
//
//   const handleOrientationChange = useCallback(
//     e => {
//       if (alpha && beta && gamma) {
//         const deltaAlpha = (Math.abs(e.alpha) - alpha) / 180
//         const deltaBeta = (Math.abs(e.beta) - beta) / 180
//         const deltaGama = (Math.abs(e.gamma) - gamma) / 180
//         const deltaDist = Math.sqrt(
//           Math.pow(deltaAlpha, 2) +
//             Math.pow(deltaBeta, 2) +
//             Math.pow(deltaGama, 2)
//         )
//         console.log(deltaAlpha)
//         setRotationDeltaTotal(rotationDeltaTotal + deltaDist)
//       }
//
//       setAlpha(e.alpha)
//       setBeta(e.beta)
//       setGamma(e.gamma)
//     },
//     [alpha, beta, gamma, rotationDeltaTotal]
//   )
//
//   useEffect(() => {
//     if (listening === "false") {
//       window.addEventListener("deviceorientation", handleOrientationChange)
//       setListening("true")
//     }
//   }, [listening, handleOrientationChange])
//
//   return {}
// }
