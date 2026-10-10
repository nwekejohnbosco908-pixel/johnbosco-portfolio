import Image from "next/image";
import Reveal from "./Reveal";

const resumeUrl = "/resume/Johnbosco-Nweke-Resume.pdf";
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-12 sm:py-16"
    >
      <div className="mb-8 flex items-center gap-4">
        <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em]">
          A little context
        </p>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-[#352337]/15"
        />
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
        <Reveal className="mx-auto w-full max-w-[280px] md:mx-0">
          <figure>
            <div className="relative h-[300px] overflow-hidden rounded-[4rem_1rem_1rem_1rem] bg-[#E8DEF0]">
              <Image
                src="/images/johnbosco.jpg"
                alt="Johnbosco Nweke in front of a floral backdrop"
                fill
                sizes="280px"
                className="object-cover object-[50%_65%]"
              />
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold">
                Johnbosco Nweke
              </span>
              <span className="font-serif text-sm italic text-[#68596B]">
                Still curious.
              </span>
            </figcaption>

            <p className="mt-3 border-t border-[#352337]/15 pt-3 text-xs leading-relaxed text-[#68596B]">
              Based in Enugu, Nigeria.
              <br />
              Open to internships and collaborations.
            </p>
          </figure>
        </Reveal>

        <Reveal className="min-w-0">
          <h2
            id="about-heading"
            className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl"
          >
            Curiosity gets me started.
            <br />
            <span className="font-serif font-normal italic">
              Building keeps me learning.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#68596B]">
            I’m Johnbosco, a Computer Science with Statistics student
            at the University of Nigeria, Nsukka. I’m developing my
            frontend skills by turning ideas into websites I can
            use, test, and improve.
          </p>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#68596B]">
            My projects give me practical questions to solve:
            how should a menu behave on a phone, how can someone
            find what they need, and what happens when an
            interaction goes wrong? That’s where much of my
            learning happens.
          </p>

          <dl className="mt-6 grid gap-4 border-y border-[#352337]/15 py-5 sm:grid-cols-3">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#68596B]">
                Studying
              </dt>
              <dd className="mt-2 text-sm font-medium">
                Computer Science
                <br />
                with Statistics
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#68596B]">
                Currently building
              </dt>
              <dd className="mt-2 text-sm font-medium">
                CHOPLY
                <br />
                & this portfolio
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#68596B]">
                Developing my skills
              </dt>
              <dd className="mt-2 text-sm font-medium">
                React · Next.js
                <br />
                Tailwind CSS
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={resumeUrl}
              download="Johnbosco-Nweke-Resume.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-xl bg-[#352337] px-5 py-3 text-sm font-semibold text-[#F8F4EE] transition-colors hover:bg-[#533957] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]"
            >
              Download résumé
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#352337]/25 px-5 py-3 text-sm font-medium transition-colors hover:bg-[#E8DEF0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]"
            >
              View PDF
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <p className="mt-3 text-xs text-[#68596B]">
            My education, projects, and contact details in one PDF.
          </p>
        </Reveal>
      </div>
    </section>
  );
}