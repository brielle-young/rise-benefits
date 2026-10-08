

interface TeamMember {
  name: string;
  role: string;
  pfp?: string;
}

const TEAMS: { name: string; members: TeamMember[] }[] = [
  {
    name: "Leadership Team",
    members: [
      { name: "Brielle Young", role: "Team Lead", pfp: "/TeamPics/brielle_young.png" },
      { name: "Supriya Anand", role: "Team Lead", pfp: "/TeamPics/supriya_anand.jpg" },
      { name: "Mia Tarantini", role: "Team Lead", pfp: "/TeamPics/mia_tarantini.png" },
      { name: "Iris Ren", role: "Team Lead", pfp: "/TeamPics/touchdown.avif" },

    ],
  },
  {
    name: "Marketing Team",
    members: [
      { name: "Ianna Banfield", role: "Marketing", pfp: "/TeamPics/ianna_banfield.jpg" },
      { name: "Saanvi Mantha", role: "Marketing", pfp: "/TeamPics/saanvi_mantha.jpg" },
    ],
  },
  {
    name: "Web Development Team",
    members: [
      { name: "Venya Sharma", role: "Developer", pfp: "/TeamPics/venya_sharma.jpg" },
      { name: "Anna Kuang", role: "Developer", pfp: "/TeamPics/anna_kuang.png" },
      { name: "Mindi Hu", role: "Developer", pfp: "/TeamPics/mindi_hu.jpg" },
      { name: "Samantha Ahn", role: "Developer", pfp: "/TeamPics/samantha_ahn.png" },
    ],
  },
];


export default function AboutPage() {
  return (
    <div className="container about-page py-12 max-w-4xl">
      <h1 className="font-serif text-3xl md:text-4xl mb-6">About RISE</h1>

      <section className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">RISE (Residential Incentives for Sustainability and Environmentalism)</strong> is an initiative that makes it easier for people to find government and utility incentives, rebates, and programs they can actually use. We built a free, public platform that gathers residential sustainable programs from across all 50 states and U.S. territories and presents them in one searchable directory.
        </p>
        <p>
          Too often, valuable rebates and incentives go unclaimed because the information is hard to find, scattered across multiple agencies, or written in language that's difficult to understand. RISE organizes these programs by location and category so that anyone, regardless of policy knowledge or technical literacy, can see what is available, understand the requirements, and take the next step.
        </p>
      </section>

      <hr className="my-10 border-border" />

      <h2 className="font-serif text-2xl mb-4">Our Values</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {[
          { title: "Accessibility", desc: "Designed for users of all backgrounds, with mobile-first design and simple language." },
          { title: "Clarity", desc: "No jargon. Every program listing is easy to scan, understand, and act on." },
          { title: "Equity", desc: "Focused on supporting rural, low-income, and under-resourced communities." },
          { title: "Accuracy", desc: "Clear sources and official links." },
        ].map((v) => (
          <div key={v.title} className="value-item border-t py-5">
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
          <div
            key={team.name}
          >
            <h3 className="font-serif text-xl mb-4 text-foreground">{team.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.members.map((member) => (
                <div
                  key={member.name}
                  className="w-full team-member">
                  <div className="w-24 h-24 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3 text-lg font-semibold overflow-hidden">
                    {member.pfp ? ( //if pfp exisits
                      <img
                        src={member.pfp}
                        alt={member.name}
                        loading="lazy" width="96" height="96" className="w-full h-full object-cover"
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
          </div>
        ))}
      </div>

      <hr className="my-10 border-border" />

      <h2 className="font-serif text-2xl mb-4">What RISE Is Not</h2>
      <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-sm">
        <li>RISE does not determine eligibility or provide applications directly.</li>
        <li>RISE does not offer financial advice or guarantee program availability.</li>
        <li>RISE is an information and navigation tool, not a replacement for official agencies.</li>
      </ul>
    </div>
  );
}
