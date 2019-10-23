import { useCallback, useState, useEffect } from "react"

export function useAspectRatio() {
  const [ratio, setRatio] = useState()

  const updateRatio = useCallback(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setRatio(width / height)
  }, [])

  useEffect(() => {
    if (!ratio) {
      updateRatio()
    }

    window.onresize = updateRatio
  }, [ratio, updateRatio])

  return ratio
}

export function useRefDimensions(ref) {
  const width = ref.current ? ref.current.offsetWidth : 0
  const height = ref.current ? ref.current.offsetHeight : 0

  return { width, height }
}
