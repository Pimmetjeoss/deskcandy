"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const collections = [
  {
    title: "Selfcare Essentials",
    category: "Selfcare",
    description: "Rustgevend & verwennend",
    image: "/images/selfcare-essentials.jpg",
  },
  {
    title: "Pastel Stationery",
    category: "Stationery",
    description: "Schrijfplezier in zachte kleuren",
    image: "/images/pastel-stationery.jpg",
  },
  {
    title: "Cadeauboxen",
    category: "Gifting",
    description: "Het perfecte cadeau",
    image: "/images/cadeauboxen.jpg",
  },
  {
    title: "Bureau Styling",
    category: "Desk Decor",
    description: "Maak je werkplek mooi",
    image: "/images/bureau-styling.jpg",
  },
]

function CollectionCard({ collection, index }: { collection: typeof collections[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`bg-background group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(index % 2) * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden">
        <img
          src={collection.image}
          alt={`${collection.title} — ${collection.description}`}
          className={`w-full aspect-[4/3] object-cover transition-all duration-[800ms] ease-out ${
            hovered ? "scale-[1.04]" : "scale-100"
          }`}
        />
      </div>
      <div className="p-6 md:p-8 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-1.5 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg md:text-xl font-serif font-light tracking-tight text-foreground mb-1.5">
              {collection.title}
            </h3>
            <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
              {collection.category} / {collection.description}
            </p>
          </div>
        </div>
        <ArrowUpRight
          className={`h-4 w-4 text-muted-foreground/40 transition-all duration-300 mt-1.5 ${
            hovered ? "translate-x-0.5 -translate-y-0.5 text-primary" : ""
          }`}
        />
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="collecties" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Onze Wereld
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-serif font-light tracking-tight text-foreground">
            Collecties
          </h2>
        </div>
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-4 md:mt-0">
          ({String(collections.length).padStart(2, "0")}) Categorieën
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {collections.map((collection, index) => (
          <CollectionCard key={collection.title} collection={collection} index={index} />
        ))}
      </div>
    </section>
  )
}
