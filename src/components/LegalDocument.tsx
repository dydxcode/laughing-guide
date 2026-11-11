import { SITE } from "@/lib/site";

export interface LegalSection {
  heading: string;
  body: string;
}

export default function LegalDocument({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: readonly LegalSection[];
}) {
  return (
    <main id="konten" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted">
        Diperbarui: {SITE.legalUpdated}
      </p>
      <p className="mt-6 leading-relaxed text-muted">{intro}</p>
      {sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-xl font-bold">{section.heading}</h2>
          <p className="mt-2 leading-relaxed text-muted">{section.body}</p>
        </section>
      ))}
    </main>
  );
}
