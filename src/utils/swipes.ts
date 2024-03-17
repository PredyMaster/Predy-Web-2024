// swipes.ts
type Direction = "left" | "right"

function detectSwipe(
  element: Element,
  callback: (direction: Direction) => void
): () => void {
  let touchstartX = 0
  let touchendX = 0

  const handleTouchStart = (e: Event) => {
    const touchEvent = e as TouchEvent
    touchstartX = touchEvent.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: Event) => {
    const touchEvent = e as TouchEvent
    touchendX = touchEvent.changedTouches[0].screenX
    if (touchendX < touchstartX) callback("left")
    if (touchendX > touchstartX) callback("right")
  }

  element.addEventListener("touchstart", handleTouchStart as EventListener)
  element.addEventListener("touchend", handleTouchEnd as EventListener)

  return () => {
    element.removeEventListener("touchstart", handleTouchStart as EventListener)
    element.removeEventListener("touchend", handleTouchEnd as EventListener)
  }
}

export default detectSwipe
