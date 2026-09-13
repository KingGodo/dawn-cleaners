import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { SocialIcon } from "@/components/social-icon"
import { site } from "@/lib/site"

function FooterLink({
  href,
  children,
}: {
  href: string
  children: string
}) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")

  if (external) {
    return (
      <a
        href={href}
        className="t-caption text-white/65 transition-colors duration-[var(--duration-ui)] hover:text-white"
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className="t-caption text-white/65 transition-colors duration-[var(--duration-ui)] hover:text-white"
    >
      {children}
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <Container
        width="frame"
        className="grid gap-12 pt-16 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,0.75fr))] lg:gap-16 lg:pt-20"
      >
        <div className="max-w-[22rem]">
          <Logo inverted />
          <p className="t-caption mt-5 text-white/55">
            Professional cleaning for homes, offices and hospitality spaces in
            Harare and across Zimbabwe.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex size-10 items-center justify-center rounded-full bg-white/8 text-white/80 transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)] hover:bg-white/14 hover:text-white motion-safe:active:scale-[0.97]"
              >
                <SocialIcon name={item.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="t-label mb-5 text-white/40">Navigate</p>
          <ul className="space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="t-label mb-5 text-white/40">Contact</p>
          <ul className="space-y-3">
            <li>
              <FooterLink href={site.contact.phoneHref}>
                {site.contact.phone}
              </FooterLink>
            </li>
            <li>
              <FooterLink href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </FooterLink>
            </li>
            <li className="t-caption text-white/65">{site.contact.location}</li>
            <li className="t-caption text-white/65">{site.contact.hours}</li>
          </ul>
        </div>

        <div>
          <p className="t-label mb-5 text-white/40">Legal</p>
          <ul className="space-y-3">
            {site.legal.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container
        width="frame"
        className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6"
      >
        <p className="t-caption text-white/40">
          © 2026 Dawn Cleaners. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex flex-wrap items-center gap-5">
          {site.legal.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </nav>
      </Container>
    </footer>
  )
}
