import Link from "next/link"
import { Container } from "@/components/container"
import { Logo } from "@/components/logo"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline pb-10 pt-16">
      <Container width="frame" className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_0.8fr]">
        <div>
          <Logo />
          <p className="t-caption mt-4 max-w-[28ch]">
            Professional cleaning for homes, offices and hospitality spaces.
          </p>
        </div>

        <div>
          <p className="t-label mb-4">Navigate</p>
          <ul className="space-y-2.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="t-caption text-lead transition-colors duration-[var(--duration-ui)] hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="t-label mb-4">Contact</p>
          <ul className="space-y-2.5 t-caption">
            <li>
              <a href={site.contact.phoneHref} className="hover:text-ink">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-ink">
                {site.contact.email}
              </a>
            </li>
            <li>{site.contact.location}</li>
            <li>{site.contact.hours}</li>
          </ul>
        </div>

        <div>
          <p className="t-label mb-4">Connect</p>
          <ul className="space-y-2.5">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="t-caption text-lead transition-colors duration-[var(--duration-ui)] hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6">
        <p className="t-caption">© 2026 Dawn Cleaners. All rights reserved.</p>
        <p className="t-caption">{site.contact.region}</p>
      </Container>
    </footer>
  )
}
