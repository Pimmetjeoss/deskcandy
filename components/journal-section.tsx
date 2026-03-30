"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const entries = [
  {
    date: "Binnenkort",
    title: "De eerste DeskCandy Cadeaubox — een sneak peek",
    tag: "Lancering",
  },
  {
    date: "Binnenkort",
    title: "5 manieren om je bureau te transformeren tot een oase van rust",
    tag: "Inspiratie",
  },
  {
    date: "Binnenkort",
    title: "Onze favoriete selfcare rituelen voor elke dag",
    tag: "Selfcare",
  },
  {
    date: "Binnenkort",
    title: "De kunst van cadeaus geven — hoe kies je het perfecte cadeau?",
    tag: "Gids",
  },
]

function NewsEntry({ entry, index }: { entry: typeof entries[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group flex items-start md:items-center justify-between py-7 md:py-8 gap-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 flex-1">
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 shrink-0 w-24 tabular-nums">
          {entry.date}
        </span>
        <h3 className="text-base md:text-lg font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {entry.title}
        </h3>
      </div>
      <div className="flex items-center gap-5 shrink-0">
        <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 hidden md:block">
          {entry.tag}
        </span>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>
    </div>
  )
}

export function JournalSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="nieuws" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Binnenkort op ons Blog
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-serif font-light tracking-tight text-foreground">
          Nieuws & Inspiratie
        </h2>
      </div>

      <div className="divide-y divide-border">
        {entries.map((entry, index) => (
          <NewsEntry key={entry.title} entry={entry} index={index} />
        ))}
      </div>
    </section>
  )
}
