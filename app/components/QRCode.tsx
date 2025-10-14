'use client'

import { useEffect, useRef } from 'react'

interface QRCodeProps {
  value: string
  size?: number
}

export default function QRCode({ value, size = 200 }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Simulación simple de QR code (en producción usarías una librería como qrcode)
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = size
    canvas.height = size

    // Fondo blanco
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, size, size)

    // Patrón de QR simulado
    ctx.fillStyle = '#000000'
    const moduleSize = size / 25

    // Crear patrón aleatorio pero consistente basado en el valor
    let seed = 0
    for (let i = 0; i < value.length; i++) {
      seed += value.charCodeAt(i)
    }

    const random = (seed: number) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }

    for (let row = 0; row < 25; row++) {
      for (let col = 0; col < 25; col++) {
        const currentSeed = seed + row * 25 + col
        if (random(currentSeed) > 0.5) {
          ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize)
        }
      }
    }

    // Esquinas de posicionamiento
    const drawPositionSquare = (x: number, y: number) => {
      ctx.fillStyle = '#000000'
      ctx.fillRect(x, y, moduleSize * 7, moduleSize * 7)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(x + moduleSize, y + moduleSize, moduleSize * 5, moduleSize * 5)
      ctx.fillStyle = '#000000'
      ctx.fillRect(x + moduleSize * 2, y + moduleSize * 2, moduleSize * 3, moduleSize * 3)
    }

    drawPositionSquare(0, 0)
    drawPositionSquare(18 * moduleSize, 0)
    drawPositionSquare(0, 18 * moduleSize)

  }, [value, size])

  return (
    <div className="flex justify-center">
      <div className="bg-white p-4 rounded-lg">
        <canvas 
          ref={canvasRef}
          className="block"
        />
      </div>
    </div>
  )
}