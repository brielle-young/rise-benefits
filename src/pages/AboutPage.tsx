export default function AboutPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="font-serif text-3xl md:text-4xl mb-6">About RISE</h1>

      <section className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">Residential Incentives for Sustainability and Environmentalism (RISE)</strong> is a student-led initiative building a centralized, public-facing platform that compiles and clearly explains residential sustainability programs across all 50 states and U.S. territories.
        </p>
        <p>
          RISE organizes existing sustainability programs by location and category so that eligibility requirements, benefits, and next steps are transparent and accessible — without requiring prior policy knowledge or advanced online searches.
        </p>
      </section>

      <hr className="my-10 border-border" />

      <h2 className="font-serif text-2xl mb-4">Our Values</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {[
          { title: "Accessibility", desc: "Designed for users of all backgrounds, with mobile-first usability and plain language." },
          { title: "Clarity", desc: "No jargon. Every program listing is scannable, understandable, and actionable." },
          { title: "Equity", desc: "Particular attention to rural, low-income, and under-resourced communities." },
          { title: "Accuracy", desc: "Clear sourcing, official links, and transparent information." },
        ].map((v) => (
          <div key={v.title} className="rounded-lg border bg-card p-5">
            <h3 className="font-serif text-lg mb-1 text-card-foreground">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="font-serif text-2xl mb-4">What RISE Is Not</h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
        <li>RISE does not determine eligibility or provide applications directly.</li>
        <li>RISE does not offer financial advice or guarantee program availability.</li>
        <li>RISE is an information and navigation tool — not a replacement for official agencies.</li>
      </ul>
    </div>
  );
}
