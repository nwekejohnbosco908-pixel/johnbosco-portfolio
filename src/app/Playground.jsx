"use client";

import { useState } from "react";

function Gear({ className }) {
  return (
    <g className={className}>
      {Array.from({ length: 12 }, (_, index) => (
        <rect
          key={index}
          x="-4"
          y="-37"
          width="8"
          height="12"
          rx="2"
          transform={`rotate(${index * 30})`}
          fill="currentColor"
        />
      ))}

      <circle r="30" fill="currentColor" />
      <circle r="20" fill="#F8F4EE" />
      <circle r="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle r="6" fill="currentColor" />

      <path
        d="M0 -20V-7 M0 7V20 M-20 0H-7 M7 0H20"
        stroke="currentColor"
        strokeWidth="3"
      />
    </g>
  );
}

export default function Playground() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="mechanism"
      data-paused={paused}
      role="group"
      aria-label="Animated gears representing ideas becoming interfaces"
    >
      <div className="mechanism-top">
        <span>Behind the interface</span>

        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? "Play ↗" : "Pause ⏸"}
        </button>
      </div>

      <svg
        viewBox="0 0 300 160"
        className="mechanism-drawing"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M20 80H70 M200 80H280"
          fill="none"
          stroke="#352337"
          strokeOpacity=".15"
          strokeWidth="2"
        />

        <path
          className="mechanism-signal"
          d="M20 80H70 M200 80H280"
          fill="none"
          stroke="#D9674E"
          strokeWidth="3"
          strokeDasharray="4 12"
        />

        <circle
          cx="135"
          cy="80"
          r="65"
          fill="none"
          stroke="#352337"
          strokeOpacity=".1"
          strokeDasharray="3 6"
        />

        <g transform="translate(100 80)">
          <Gear className="mechanism-gear mechanism-gear-one" />
        </g>

        <g transform="translate(170 80) rotate(15)">
          <Gear className="mechanism-gear mechanism-gear-two" />
        </g>

        <circle cx="20" cy="80" r="4" fill="#D9674E" />
        <circle cx="280" cy="80" r="4" fill="#352337" />
      </svg>

      <div className="mechanism-bottom">
        <span>Ideas</span>
        <span className="mechanism-caption">into interfaces</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}