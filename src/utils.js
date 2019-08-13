
import { useEffect, useState } from "react"

export function useTooltip({
  container,
  width = 140,
}) {

  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState([0,0])
  const [caretPosition, setCaretPosition] = useState([0,0])
  const [item, setItem] = useState()

  const show = (evt, subItem) => {
    const containerBox = container.current.getBoundingClientRect()
    const targetBox = evt.target.getBoundingClientRect()
    const extent = [containerBox.left + width/2, containerBox.right - width/2]
    const extent2 = [containerBox.left + 8, containerBox.right - 8]
    setVisible(true)
    setItem(subItem)
    setPosition([
      clamp(targetBox.left + targetBox.width/2, extent),
      targetBox.top,
    ])
    setCaretPosition([
      clamp(targetBox.left + targetBox.width/2, extent2),
      targetBox.top,
    ])
  }

  const hide = () => {
    setVisible(false)
  }

  return { visible, position, caretPosition, item, width, show, hide }
}

export const useResize = (viz, width, setWidth) => {
  useEffect(() => {
    const handleResize = () => {
      const bbox = viz.current.getBoundingClientRect()
      if (bbox.width === width) return
      setWidth(bbox.width)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
}

export const defaultColors = {
  text: "#333333",
  textTree: "#FFFFFF",
  primary: "#ff9800",
  disaggregations: ["#f57c00", "#ffcc80", "#ddd"],
  notWorking: "#ff5722",
  unemployed: "#f44336",
  inEducation: "#ff9800",
  selfEmployed: "#ff9800",
  other: "#9e9e9e",
}

export const getColor = (id, colors) => {
  if (!id) {
    return colors.other
  }
  else if (id.indexOf("9999") !== -1) {
    return colors.selfEmployed
  }
  else if (id.indexOf("9998") !== -1) {
    return colors.unemployed
  }
  else if (id.indexOf("9997") !== -1) {
    return colors.inEducation
  }
  else if (id.indexOf("9996") !== -1) {
    return colors.notWorking
  }
  else {
    return colors.primary
  }
}

export function clamp(num, extent) {
  return Math.min(Math.max(num, extent[0]), extent[1])
}
