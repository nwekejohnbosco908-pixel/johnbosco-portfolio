"use client";
import { useRef, useState } from "react";
const links = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  function handleEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header
      className="border-b border-[#352337]/15"
      onKeyDown={handleEscape}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            aria-label="Johnbosco Nweke — home"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span className="text-2xl font-semibold tracking-[-0.06em]">
              Johnbosco<span className="text-[#D9674E]">.</span>
            </span>

            <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-[#68596B]">
              Frontend developer
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {name}
              </a>
            ))}

            <a
              href="mailto:nwekejohnbosco908@gmail.com"
              className="inline-flex min-h-11 items-center gap-3 rounded-full border border-[#352337]/25 px-5 text-sm transition-colors hover:bg-[#E8DEF0] focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="min-h-11 rounded-xl border border-[#352337]/25 px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 md:hidden"
          >
            {open ? "Close ×" : "Menu +"}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!open}
          className="border-t border-[#352337]/15 pb-4 md:hidden"
        >
          {links.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between rounded-lg px-3 text-sm font-medium hover:bg-[#E8DEF0] focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}