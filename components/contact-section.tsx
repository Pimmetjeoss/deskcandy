"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.15)
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.1)

  return (
    <section id="contact" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-[hsl(270,18%,90%)] text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <div
          ref={headRef}
          className={`transition-all duration-1000 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/40 mb-8">
            Blijf op de hoogte
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-light leading-[1.15] tracking-tight text-balance text-foreground">
            Schrijf je in voor
            <br />onze nieuwsbrief
          </h2>
          <p className="text-sm leading-[1.75] text-foreground/60 mt-6 max-w-md">
            Ontvang als eerste updates over nieuwe collecties, exclusieve aanbiedingen en
            selfcare tips. Geen spam, alleen mooie dingen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Je e-mailadres"
              className="flex-1 bg-background/60 border border-foreground/10 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors duration-300 rounded-sm"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors duration-300 rounded-sm">
              Aanmelden
            </button>
          </div>
        </div>

        <div
          ref={bodyRef}
          className={`flex flex-col justify-end transition-all duration-1000 delay-200 ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/35 mb-5">
                Contact
              </p>
              <a
                href="mailto:hello@deskcandy.nl"
                className="group inline-flex items-center gap-3 text-sm tracking-wide text-foreground/60 hover:text-foreground transition-colors duration-500"
              >
                <span className="border-b border-foreground/20 pb-0.5 group-hover:border-primary transition-colors duration-500">
                  hello@deskcandy.nl
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/35 mb-5">
                Volg Ons
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-sm text-foreground/55 hover:text-primary transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-foreground/55 hover:text-primary transition-colors duration-300"
                >
                  Pinterest
                </a>
                <a
                  href="#"
                  className="text-sm text-foreground/55 hover:text-primary transition-colors duration-300"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
