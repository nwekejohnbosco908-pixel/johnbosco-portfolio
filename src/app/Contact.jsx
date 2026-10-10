"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import Reveal from "./Reveal";

const email = "nwekejohnbosco908@gmail.com";
const socials = [
  { name: "GitHub", href: "https://github.com/nwekejohnbosco908-pixel", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nweke-johnbosco", icon: FaLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/Nweke.bosco", icon: FaFacebook },
];

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("idle");

  async function copyEmail() {
    setCopyStatus("copying");
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-[#352337] text-[#F8F4EE]"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-12">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2B5A2]">
                A conversation can be a beginning
              </p>
              <h2
                id="contact-heading"
                className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
              >
                Have a project in mind?
                <span className="mt-1 block font-serif font-normal italic text-[#F2B5A2]">
                  Let’s talk it through.
                </span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#E0D3E2] sm:text-base">
                I’m looking for frontend internships and junior roles,
                and I’m open to collaborating on web projects.
                Tell me what you’re building and where I could contribute.
              </p>
              <p className="mt-5 flex items-center gap-2 text-xs text-[#E0D3E2]">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#F2B5A2]" />
                Based in Enugu, Nigeria
              </p>
            </div>

            <div className="min-w-0 rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E0D3E2]">
                Reach me directly
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-3 block rounded-sm text-base font-medium leading-relaxed [overflow-wrap:anywhere] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2B5A2] sm:text-lg"
              >
                {email}
              </a>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#F2B5A2] px-4 py-3 text-sm font-semibold text-[#352337] transition-colors hover:bg-[#F7C7B8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2B5A2]"
                >
                  <FiMail aria-hidden="true" />
                  Send an email
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  disabled={copyStatus === "copying"}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/25 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2B5A2] disabled:cursor-wait disabled:opacity-70"
                >
                  {copyStatus === "copied" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                  {copyStatus === "copied" ? "Copied" : copyStatus === "copying" ? "Copying…" : "Copy email"}
                </button>
              </div>
              <p role="status" aria-live="polite" aria-atomic="true" className="mt-3 min-h-5 text-xs leading-relaxed text-[#E0D3E2]">
                {copyStatus === "copied"
                  ? "Email address copied to your clipboard."
                  : copyStatus === "error"
                    ? "Copy wasn’t available. Select the email address above to copy it manually."
                    : "Send an email opens your device’s email app."}
              </p>

              <nav aria-label="Contact social links" className="mt-5 border-t border-white/15 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E0D3E2]">
                  Find me online
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {socials.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium transition-colors hover:text-[#F2B5A2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F2B5A2]"
                    >
                      <Icon aria-hidden="true" />
                      {name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
