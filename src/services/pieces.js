import children from "sketches/children"
import community from "sketches/community"

const pieces = {
  children,
  community
}

export function getPieceByIndex(i) {
  return Object.entries(pieces)[i][1]
}

export const NUM_PIECES = Object.entries(pieces).length

export default pieces
