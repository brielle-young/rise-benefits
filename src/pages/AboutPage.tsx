import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  pfp?: string;
}

const TEAMS: { name: string; members: TeamMember[] }[] = [
  {
    name: "Leadership Team",
    members: [
      { name: "Team Lead 1", role: "Project Director", pfp: "/TeamPics/11016948_media-01.avif" },
      { name: "Team Lead 2", role: "Operations Lead" },
      { name: "Team Lead 3", role: "Research Lead" },
      { name: "Team Lead 4", role: "IDK Lead" },
    ],
  },
  {
    name: "Marketing Team",
    members: [
      { name: "Marketing Member 1", role: "Communications" },
      { name: "Marketing Member 2", role: "Outreach" },
      { name: "Marketing Member 3", role: "Social Media" },
    ],
  },
  {
    name: "Web Development Team",
    members: [
      { name: "Dev Member 1", role: "Frontend Developer" },
      { name: "Dev Member 2", role: "UI/UX Designer" },
      { name: "Dev Member 3", role: "Content Developer" },
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

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

      <hr className="my-10 border-border" />

      {/* Team Profiles */}
      <h2 className="font-serif text-2xl mb-6">Our Team</h2>
      <div className="space-y-10 mb-10">
        {TEAMS.map((team, i) => (
          <motion.div
            key={team.name}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="font-serif text-xl mb-4 text-foreground">{team.name}</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {team.members.map((member) => (
                <div
                  key={member.name}
                  className="rounded-lg border bg-card p-4 text-center transition-shadow hover:shadow-md"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 text-lg font-semibold">
                    {member.pfp ? ( //if pfp exisits
                      <img
                        src={member.pfp}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      /> ) : ( //if pfp doesn't exist, use initials
                      <span className="text-lg font-semibold text-primary">
                        {member.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-card-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="my-10 border-border" />

      <h2 className="font-serif text-2xl mb-4">What RISE Is Not</h2>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
        <p>RISE does not determine eligibility or provide applications directly.</p>
        <p>RISE does not offer financial advice or guarantee program availability.</p>
        <p>RISE is an information and navigation tool — not a replacement for official agencies.</p>
      </ul>
    </div>
  );
}
