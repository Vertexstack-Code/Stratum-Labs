type Section = { heading: string; body: string[] }

type Props = {
  title: string
  updated: string
  intro: string
  sections: Section[]
}

export function LegalPage({ title, updated, intro, sections }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl">
          <h1 className="heading-2">{title}</h1>
          <p className="mt-3 text-sm text-slate-500">{updated}</p>
          <p className="body-large mt-6">{intro}</p>

          <div className="mt-12 space-y-10 border-t border-slate-200 pt-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="heading-4">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
