import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-neutral-500 mb-4">Projects</p>
        <h2 className="text-2xl font-medium tracking-tight mb-16">
          Lo que he construido
        </h2>
        {projects.length === 0 ? (
          <p className="text-neutral-500 text-sm">
            Proyectos en camino — este portafolio es el primero.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div>
                  <h3 className="font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-neutral-100 rounded-full text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.repo && (<a
                    
                      href={project.repo}
                      target="_blank"
                      className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      Repositorio →
                    </a>
                  )}
                  {project.live && (<a
                    
                      href={project.live}
                      target="_blank"
                      className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      Ver en vivo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}