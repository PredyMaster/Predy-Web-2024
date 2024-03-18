"use client"

interface ConsoleProps {
  info: any
}

export default function ConsoleLogger({ info }: ConsoleProps) {
  console.log(info, " -- La info ⭐⭐⭐")
}
