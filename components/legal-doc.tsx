import { Container } from "@/components/container"

type LegalSection = {
  title: string
  body: string[]
}

export function LegalDoc({
  updated,
  sections,
}: {
  updated: string
  sections: LegalSection[]
}) {
  return (
    <section className="site-section pt-6">
      <Container width="frame">
        <article className="mx-auto max-w-[46rem] rounded-[var(--radius-frame)] bg-white p-6 shadow-[var(--inset-image)] sm:p-10 lg:p-12">
          <p className="t-caption">Updated {updated}</p>
          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="t-h3">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="t-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </Container>
    </section>
  )
}
