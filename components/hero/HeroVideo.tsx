'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = 0.75
  }, [reduce])

  if (reduce) {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Afbeelding-challenge-tafel-v1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 hero-video-wrap" aria-hidden="true">
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/Afbeelding-challenge-tafel-v1.png"
        className="w-full h-full object-cover"
      >
        <source src="/Video-challenge-table.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
