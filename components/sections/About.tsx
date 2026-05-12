import { siteConfig, skills } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-neutral-500 mb-4">About</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-medium tracking-tight mb-6">
              Un poco sobre mí
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-widest">
              Skills
            </h3>
            <div className="flex flex-col gap-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-medium mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 border border-neutral-200 rounded-full text-neutral-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}