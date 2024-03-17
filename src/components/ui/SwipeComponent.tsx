// SwipeComponent.tsx
import React, { useEffect } from "react"
import detectSwipe from "@/utils/swipes"

const SwipeComponent: React.FC = () => {
  useEffect(() => {
    // Asume que tienes un elemento con id='swipe-area' en tu DOM
    const swipeArea = document.getElementById("swipe-area")

    // Asegúrate de que el elemento existe
    if (swipeArea) {
      const cleanup = detectSwipe(swipeArea, (direction) => {
        if (direction === "left") {
          // Manejar swipe izquierda
          window.location.href = "/next-page"
        } else if (direction === "right") {
          // Manejar swipe derecha
          window.location.href = "/previous-page"
        }
      })

      // Limpiar listeners al desmontar el componente
      return cleanup
    }
  }, [])

  return <div id="swipe-area">{/* Contenido de tu componente */}</div>
}

export default SwipeComponent
