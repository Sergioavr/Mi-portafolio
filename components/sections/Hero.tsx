import Link from "next/link";
import { siteConfig } from "@/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-sm text-neutral-500 mb-4">
          {siteConfig.location}
        </p>
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight mb-6">
          {siteConfig.name}
        </h1>
        <p className="text-xl sm:text-2xl text-neutral-500 font-light mb-4">
          {siteConfig.role}
        </p>
        <p className="text-base text-neutral-600 max-w-xl mb-10 leading-relaxed">
          {siteConfig.bio}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#projects"
            className="px-5 py-2.5 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors"
          >
            Ver proyectos
          </Link>
          <Link
            href={siteConfig.social.github}
            target="_blank"
            className="px-5 py-2.5 text-sm border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}