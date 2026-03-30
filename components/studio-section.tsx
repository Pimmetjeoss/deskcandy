"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: "100+", label: "Unieke Producten" },
  { value: "500+", label: "Blije Klanten" },
  { value: "♡", label: "Met Liefde Gemaakt" },
]

export function StudioSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.15)
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.1)

  return (
    <section id="over-ons" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-[hsl(340,25%,88%)] text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <div
          ref={headRef}
          className={`transition-all duration-1000 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/40 mb-8">
            Over DeskCandy
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-light leading-[1.15] tracking-tight text-balance text-foreground">
            Kleine momenten van geluk, verpakt met zorg en aandacht
          </h2>
        </div>

        <div
          ref={bodyRef}
          className={`flex flex-col justify-end gap-10 transition-all duration-1000 delay-200 ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="text-sm leading-[1.75] text-foreground/65">
              DeskCandy is geboren uit een liefde voor mooie dingen. Wij geloven dat je bureau
              meer is dan alleen een werkplek — het is jouw persoonlijke hoekje waar creativiteit
              en rust samenkomen. Daarom cureren wij de fijnste selfcare producten, stationery en
              cadeauboxen in zachte, warme kleuren.
            </p>
            <p className="text-sm leading-[1.75] text-foreground/65">
              Elk product wordt met zorg geselecteerd op kwaliteit, uitstraling en dat speciale
              gevoel. Of je nu jezelf wilt verwennen of iemand anders blij wilt maken — bij
              DeskCandy vind je altijd iets bijzonders.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-foreground/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-serif font-light text-foreground tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[11px] tracking-[0.1em] uppercase text-foreground/40 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
