export function calcChildrenZIndex(parentRef, target) {
  const parent = parentRef.current

  if (parent === target) {
    // click on parent
  } else {
    for (const child of parent.children) {
      child.style.zIndex = 1
      if (isDistantChild(child, target)) {
        child.style.zIndex = 2
      }
    }
    // eslint-disable-next-line no-param-reassign
  }
}

function isDistantChild(parent, target) {
  let isChild = false

  if (parent.children && parent.children.length > 0) {
    for (const child of parent.children) {
      if (child === target) {
        isChild = true
      }

      if (!isChild && isDistantChild(child, target)) {
        isChild = true
      }
    }
  }

  return isChild
}
