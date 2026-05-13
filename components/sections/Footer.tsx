import { siteConfig } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © {year} {siteConfig.name}
        </p>
        <p className="text-xs text-neutral-400">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}