import children from "sketches/children"
import community from "sketches/community"
import plugged from "sketches/plugged"
import ergodic from "sketches/ergodic"
import source from "sketches/source"
import journey from "sketches/journey"

const pieces = {
  children,
  community,
  plugged,
  ergodic,
  source,
  journey
}

export function getPieceByIndex(i) {
  return Object.entries(pieces)[i][1]
}

export function getPieceIndexByTitle(title) {
  let num = 0

  for (const [key, value] of Object.entries(pieces)) {
    if (key === title) {
      return num
    }
    num += 1
  }
  return null
}

export function getPieceByTitle(title) {
  return pieces[title] && pieces[title][1]
}

export function getPieceNeighborTitles(index) {
  const prevInd = wrapIndex(index - 1)
  const nextInd = wrapIndex(index + 1)

  const prev = Object.entries(pieces)[prevInd][0]
  const next = Object.entries(pieces)[nextInd][0]

  return { prev, next }
}

export function normalizeIndex(passedIndex) {
  let index = passedIndex

  if (index > NUM_PIECES - 1) {
    index = NUM_PIECES - 1
  }
  if (index < 0) {
    index = 0
  }

  return index
}

export function wrapIndex(passedIndex) {
  let index = passedIndex

  if (index > NUM_PIECES - 1) {
    index = 0
  }
  if (index < 0) {
    index = NUM_PIECES - 1
  }

  return index
}

export const NUM_PIECES = Object.entries(pieces).length

export default pieces
