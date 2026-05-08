export const siteConfig = {
  name: "Sergio Vargas",
  role: "Software Developer",
  location: "Xalapa, México",
  bio: "Apasionado por el desarrollo de software, con experiencia en frontend y un interés creciente en DevOps y la nube. Siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.",
  email: "seranvr@gmail.com",
  social: {
    github: "https://github.com/Seranvr",
    linkedin: "https://linkedin.com/in/sergioavr/",
  },
};

export const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
  { category: "DevOps & Cloud", items: ["Linux", "Git", "Docker"] },
  { category: "En aprendizaje", items: ["TypeScript", "Tailwind CSS"] },
];

export const projects: Project[] = [];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
};