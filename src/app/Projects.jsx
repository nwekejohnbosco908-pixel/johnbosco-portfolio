import Image from "next/image";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-6 sm:py-16"
    >
      <Reveal>
        <div className="mb-7 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Selected work · 01
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Ideas turned into{" "}
            <span className="font-serif font-normal italic">experiences.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#68596B] sm:text-base">
            What I built, the decisions behind it, and what I’m learning.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <article
          aria-labelledby="choply-title"
          className="group overflow-hidden rounded-3xl border border-[#352337]/15 bg-[#FFFDF9] motion-safe:transition-[border-color,box-shadow] motion-safe:duration-300 hover:border-[#D9674E]/40 hover:shadow-lg hover:shadow-[#352337]/5"
        >
          <div className="bg-[#F3DED1] p-3 sm:p-5">
            <div className="mx-auto max-w-[760px] overflow-hidden rounded-xl border border-black/10 bg-[#FFF8F2] shadow-lg shadow-[#352337]/10">
              <div
                aria-hidden="true"
                className="flex items-center gap-1.5 border-b border-black/10 px-3 py-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#D9674E]" />
                <span className="h-2 w-2 rounded-full bg-[#D9B66F]" />
                <span className="h-2 w-2 rounded-full bg-[#9BA98D]" />
                <span className="ml-2 text-[10px] text-[#68596B] sm:text-xs">
                  CHOPLY · Homepage preview
                </span>
              </div>
              <Image
                src="/images/Choply.png"
                alt="CHOPLY food-ordering homepage with orange typography and a photograph of jollof rice and chicken"
                width={1899}
                height={876}
                sizes="(max-width: 639px) calc(100vw - 66px), (max-width: 847px) calc(100vw - 90px), 760px"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-8">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D9674E]/30 bg-[#D9674E]/10 px-3 py-1 text-[11px] font-semibold text-[#873E2D]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#D9674E]" />
                  Live frontend demo
                </span>
                <span className="text-xs text-[#68596B]">Personal project</span>
              </div>
              <h3 id="choply-title" className="mt-3 text-3xl font-semibold tracking-tight">
                CHOPLY<span className="text-[#D9674E]">.</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#68596B]">
                From discovering a meal to building an order.
              </p>
              <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript"].map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-[#352337]/15 px-3 py-1 text-xs font-medium"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-[#68596B]">
                Deployed on Vercel · Started June 2026
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://choply-blue.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CHOPLY live demo (opens in a new tab)"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#352337] px-4 py-3 text-sm font-semibold text-[#FFFDF9] motion-safe:transition-colors hover:bg-[#503653] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]"
                >
                  View live demo
                </a>
                <a
                  href="https://github.com/nwekejohnbosco908-pixel/choply"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CHOPLY source code on GitHub (opens in a new tab)"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#352337]/20 px-4 py-3 text-sm font-semibold motion-safe:transition-colors hover:bg-[#352337]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]"
                >
                  View code
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-[#68596B] sm:text-base">
                A responsive food-ordering Project with a searchable menu,
                category filters, favourites, automatic cart totals, and
                simulated order tracking. I shaped the visual direction
                and refined the cards and layouts for phones and larger screens.
              </p>

              <details className="mt-4 border-t border-[#352337]/15 pt-2">
                <summary className="min-h-11 cursor-pointer rounded-sm py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]">
                  Behind the project
                </summary>
                <dl className="mt-1 space-y-4 pb-2 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold">The challenge</dt>
                    <dd className="mt-1 text-[#68596B]">
                      Connecting sign-in and ordering interactions while
                      keeping the cards, navigation, and page layouts
                      usable across screen sizes.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">What I built</dt>
                    <dd className="mt-1 text-[#68596B]">
                      A shared dish catalogue, search and category filters,
                      saved favourites, cart calculations, and unique order
                      IDs, alongside responsive layouts and a client-side sign-in flow.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Current scope</dt>
                    <dd className="mt-1 text-[#68596B]">
                      CHOPLY is live on Vercel as a frontend Project. Account,
                      cart, and order data stay in the browser. Sign-in and
                      tracking are demonstrations; there is no backend
                      authentication, payment processing, or real delivery.
                    </dd>
                  </div>
                </dl>
              </details>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
