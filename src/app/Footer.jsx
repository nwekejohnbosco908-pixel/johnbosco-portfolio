export default function Footer() {
  return (
    <footer className="border-t border-[#352337]/15 bg-[#F8F4EE] text-[#352337]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-6">
        <div className="min-w-0">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Nweke Johnbosco Chiemerie
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-[#68596B]">
            Built with React, Next.js, and Tailwind CSS.
          </p>
        </div>

        <a
          href="#top"
          className="group inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full border border-[#352337]/20 px-4 py-2 text-sm font-medium transition-colors hover:border-[#352337]/40 hover:bg-[#E8DEF0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]"
        >
          Back to top
          <span
            aria-hidden="true"
            className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:-translate-y-0.5"
          >
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
