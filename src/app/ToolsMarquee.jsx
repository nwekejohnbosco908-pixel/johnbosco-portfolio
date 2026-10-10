"use client";
import { useState } from "react";
import {
  FaYoutube,
  FaGithub,
  FaGitAlt,
  FaGoogle,
  FaChrome,
} from "react-icons/fa";
import {
  SiW3Schools,
  SiUdemy,
  SiCoursera,
  SiClaude,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiOpenaiFill } from "react-icons/ri";

const tools = [
  { name: "W3Schools", icon: SiW3Schools },
  { name: "VS Code", icon: VscVscode },
  { name: "ChatGPT", icon: RiOpenaiFill },
  { name: "YouTube", icon: FaYoutube },
  { name: "GitHub", icon: FaGithub },
  { name: "Git", icon: FaGitAlt },
  { name: "Udemy", icon: SiUdemy },
  { name: "Coursera", icon: SiCoursera },
  { name: "Google", icon: FaGoogle },
  { name: "Claude", icon: SiClaude },
  { name: "Chrome", icon: FaChrome },
];

export default function ToolsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-labelledby="tools-heading"
      className="tools-section"
    >
      <div className="tools-heading-row">
        <div>
          <p className="tools-eyebrow">Always learning. Always building.</p>
          <h2 id="tools-heading">Tools behind my journey.</h2>
        </div>

        <button
          type="button"
          className="tools-pause"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? "Resume movement" : "Pause movement"}
        </button>
      </div>

      <div className="tools-window">
        <div
          className="tools-track"
          style={{
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="tools-group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {tools.map(({ name, icon: Icon }) => (
                <li className="tool-card" key={name}>
                  <Icon aria-hidden="true" focusable="false" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <p className="tools-caption">
        From the first tutorial to the latest experiment.
      </p>
    </section>
  );
}