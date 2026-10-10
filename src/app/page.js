import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import Playground from "./Playground";
import About from "./About";
import ToolsMarquee from "./ToolsMarquee";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#F8F4EE] text-[#352337]">
      <navbar className="mx-auto flex max-w-6xl items-center justify-between border-b border-[#352337]/15 px-6 py-6">
      <a href="#top" aria-label="Johnbosco Nweke — home"
        className="inline-flex flex-col rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4">
        <span className="text-2xl font-semibold tracking-[-0.06em] sm:text-3xl">
          Johnbosco
       </span>

  <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-[#68596B]">
    Frontend developer
  </span>
</a>

        <a
          href="mailto:nwekejohnbosco908@gmail.com"
          className="rounded-full border border-[#352337]/30 px-5 py-3 text-sm transition-colors hover:bg-[#E8DEF0]"
        >
          Let’s talk ↗
        </a>
      </navbar>

      <section className="home-intro mx-auto grid max-w-6xl items-center gap-8 px-6 py-8 md:py-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Johnbosco Nweke · Frontend Developer
          </p>

          <h1 className="mt-6 text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl">
            A little curiosity.
            <br />
            A lot of{" "}
            <span className="font-serif font-normal italic">
              possibility.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#68596B]">
              I’m Johnbosco, a frontend developer studying Computer Science
              with Statistics at UNN. I build responsive web projects with
              JavaScript, React, and Next.js.
           </p>

           <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-4 rounded-xl bg-[#352337] px-6 py-3 text-sm font-semibold text-[#F8F4EE] transition-colors hover:bg-[#533957] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]">
                  View my work
                 <span aria-hidden="true">↗</span>
              </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-xl border border-[#352337]/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#E8DEF0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#352337]"
             >
              Get in touch
              <span aria-hidden="true">↗</span>
            </a>
         </div>

          <p className="mt-6 flex items-center gap-2 text-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#D9674E]"
            />
            Open to internships and collaborations
          </p>
          <nav
            aria-label="Social links"
            className="mt-6 flex flex-wrap items-center gap-3">
            <span className="mr-1 text-sm text-[#68596B]">
              ONLINE:
            </span>

          {[
              {
                name: "GitHub",
                href: "https://github.com/nwekejohnbosco908-pixel",
                icon: FaGithub,
                external: true,
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/nweke-johnbosco",
                icon: FaLinkedin,
                external: true,
              },
              {
                name: "Facebook",
                href: "https://www.facebook.com/Nweke.bosco",
                icon: FaFacebook,
                external: true,
              },
              {
                name: "Email",
                href: "mailto:nwekejohnbosco908@gmail.com",
                icon: FiMail,
                external: false,
              },
           ].map(({ name, href, icon: Icon, external }) => (
            <a
              key={name}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={
                external ? `${name} (opens in a new tab)` : "Send me an email"
              }
              title={name}
              className="
                inline-flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-xl border border-[#352337]/25
                bg-[#F8F4EE] text-xl text-[#352337]
                transition-colors duration-200
                hover:border-[#352337] hover:bg-[#E8DEF0]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#352337]
                active:bg-[#DED1E8]
              ">
              <Icon aria-hidden="true" />
            </a>
          ))}
       </nav>
      </div>
        <Playground />
        </section>
        <ToolsMarquee/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </main>
  );
}