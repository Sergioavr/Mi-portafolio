"use client";

import { useState } from "react";
import { siteConfig } from "@/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-neutral-500 mb-4">Contact</p>
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Hablemos
        </h2>
        <p className="text-neutral-600 mb-10 max-w-md leading-relaxed">
          Abierto a oportunidades laborales y proyectos freelance. Si tienes algo en mente, escríbeme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={copyEmail}
            className="px-5 py-2.5 border border-neutral-200 rounded-full text-sm hover:bg-neutral-50 transition-colors"
          >
            {copied ? "Copiado ✓" : siteConfig.email}
          </button>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            className="px-5 py-2.5 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition-colors text-center"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}