"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const reasons = [
  {
    number: "01",
    title: "Met Liefde Gecureerd",
    description:
      "Elk product wordt zorgvuldig geselecteerd op kwaliteit, uitstraling en dat speciale gevoel. Alleen het mooiste en fijnste komt in onze collectie.",
  },
  {
    number: "02",
    title: "Zachte Kleuren, Warm Gevoel",
    description:
      "Onze pastel- en nude tinten creëren een rustgevende sfeer. DeskCandy producten brengen kalmte en schoonheid in je dagelijkse routine.",
  },
  {
    number: "03",
    title: "Het Perfecte Cadeau",
    description:
      "Op zoek naar een uniek cadeau? Onze cadeauboxen zijn prachtig samengesteld en verpakt — klaar om iemand blij te maken.",
  },
  {
    number: "04",
    title: "Selfcare Momenten",
    description:
      "Wij geloven in het belang van kleine momenten voor jezelf. DeskCandy helpt je om dagelijks even stil te staan en te genieten van het mooie.",
  },
]

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`bg-background p-8 md:p-12 group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <div className="flex items-start justify-between mb-10">
        <span className="text-[11px] tracking-[0.15em] text-primary/50">
          ({reason.number})
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-serif font-light tracking-tight mb-5 group-hover:translate-x-1 transition-transform duration-500">
        <span className="text-[hsl(340,25%,55%)] bg-[hsl(340,30%,90%)] px-1 box-decoration-clone">
          {reason.title}
        </span>
      </h3>
      <div className="w-8 h-px bg-primary/30 mb-5 group-hover:w-12 transition-all duration-500" />
      <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">
        {reason.description}
      </p>
    </div>
  )
}

export function ApproachSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="waarom" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Onze Belofte
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-serif font-light tracking-tight text-foreground">
          Waarom DeskCandy
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {reasons.map((reason, index) => (
          <ReasonCard key={reason.number} reason={reason} index={index} />
        ))}
      </div>
    </section>
  )
}
