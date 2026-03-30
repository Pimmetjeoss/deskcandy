"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero.jpg"
          className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${
            visible ? "scale-100" : "scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-foreground/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20 md:pb-20">
        <div className="max-w-5xl">
          <div
            className={`overflow-hidden mb-6 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/50">
              Selfcare &middot; Stationery &middot; Cadeauboxen
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-serif text-[clamp(2.25rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-background text-balance">
              Verwennerij voor
              <br className="hidden md:block" />
              op je bureau
              <br className="hidden md:block" />
              en daarbuiten
            </h1>
          </div>
        </div>

        <div
          className={`mt-16 md:mt-20 flex items-center gap-6 transition-all duration-1000 delay-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-12 h-px bg-background/30" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-background/40">
            Scroll om te ontdekken
          </span>
        </div>
      </div>
    </section>
  )
}
