'use client'

import { useEffect, useRef } from 'react'
import { Html5Qrcode } from 'html5-qrcode'

interface QrScannerProps {
  onScan: (result: string) => void
}

export default function QrScanner({ onScan }: QrScannerProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null)
  const containerId = 'qr-reader'

  useEffect(() => {
    const scanner = new Html5Qrcode(containerId)
    scannerRef.current = scanner

    scanner.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        onScan(decodedText)
      },
      undefined
    ).catch((err) => {
      console.error('QR scanner failed to start:', err)
    })

    return () => {
      scanner.isScanning && scanner.stop().catch(() => {})
    }
  }, [onScan])

  return <div id={containerId} className="w-full h-full" />
}
