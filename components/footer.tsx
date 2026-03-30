import Link from "next/link"

const footerLinks = [
  { label: "Collecties", href: "#collecties" },
  { label: "Over Ons", href: "#over-ons" },
  { label: "Waarom DeskCandy", href: "#waarom" },
  { label: "Nieuws", href: "#nieuws" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "TikTok", href: "#" },
]

export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
        <div className="md:col-span-5">
          <Link href="/" className="inline-block">
            <img
              src="/images/logo.png"
              alt="deskCANDY"
              className="h-7 w-auto"
            />
          </Link>
          <p className="text-sm leading-[1.75] text-muted-foreground mt-5 max-w-xs">
            Selfcare, stationery en cadeauboxen in zachte kleuren. Kleine momenten
            van geluk, verpakt met zorg en aandacht.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Navigatie
          </p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-11">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Sociaal
          </p>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          DeskCandy. Alle rechten voorbehouden.
        </p>
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          Nederland
        </p>
      </div>
    </footer>
  )
}
