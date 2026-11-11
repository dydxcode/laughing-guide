import type { LegalDoc } from "@/lib/i18n";

export default function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {doc.title}
      </h1>
      <p className="mt-2 text-sm text-muted">{doc.updated}</p>

      {doc.sections.map((section) => (
        <section key={section.title} className="mt-8">
          <h2 className="text-xl font-bold">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
