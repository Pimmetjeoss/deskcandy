"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EditorialBreak() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.15)
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.2)

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <div
          ref={imgRef}
          className={`lg:col-span-7 overflow-hidden transition-all duration-1000 ${
            imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="/images/editorial-break.jpg"
            alt="Roze selfcare flat lay met notebook, rozenkwarts en beauty producten"
            className="w-full aspect-[16/10] object-cover hover:scale-[1.02] transition-all duration-1000 rounded-sm"
          />
        </div>
        <div
          ref={quoteRef}
          className={`lg:col-span-4 lg:col-start-9 transition-all duration-1000 delay-200 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-10 h-px bg-primary/40 mb-8" />
          <blockquote className="text-xl md:text-2xl lg:text-[1.65rem] font-serif font-light leading-[1.35] tracking-tight text-[hsl(340,25%,55%)] text-balance italic">
            <span className="bg-[hsl(340,30%,90%)] px-1 box-decoration-clone">
              {'"'}Soms is het de kleinste verwennerij die je dag helemaal maakt.{'"'}
            </span>
          </blockquote>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-8">
            DeskCandy Filosofie
          </p>
        </div>
      </div>
    </section>
  )
}
