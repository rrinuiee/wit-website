/**
 * Hand-drawn style SVG doodles and icons, all drawn for this project.
 * Usage: <Doodle name="sparkle" className="..." />
 * Doodles are decorative, so they're hidden from screen readers.
 */
const PATHS = {
  book: (
    <>
      <path d="M6 12c6-2.5 12-1.5 18 3v24c-6-4-12-5-18-3z" />
      <path d="M42 12c-6-2.5-12-1.5-18 3v24c6-4 12-5 18-3z" />
    </>
  ),
  laptop: (
    <>
      <rect x="10" y="9" width="28" height="20" rx="3" />
      <path d="M5 34h38l-3 5H8z" />
      <path d="M21 15l-4 4 4 4M27 15l4 4-4 4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M8 20v8h6l15 8V12L14 20z" />
      <path d="M34 18c2.5 3 2.5 9 0 12" />
      <path d="M14 28l3 9h5l-2-8" />
    </>
  ),
  sparkle: <path d="M24 4c2 10 6 14 16 16-10 2-14 6-16 16-2-10-6-14-16-16 10-2 14-6 16-16z" />,
  flower: (
    <>
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="24" cy="13" rx="6" ry="9" transform={`rotate(${r} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="4.5" />
    </>
  ),
  heart: <path d="M24 40S7 30 7 18a8.5 8.5 0 0 1 17-2 8.5 8.5 0 0 1 17 2c0 12-17 22-17 22z" />,
  calendar: (
    <>
      <rect x="7" y="10" width="34" height="30" rx="5" />
      <path d="M7 19h34M16 6v8M32 6v8" />
    </>
  ),
  pin: (
    <>
      <path d="M24 43s13-12 13-23a13 13 0 0 0-26 0c0 11 13 23 13 23z" />
      <circle cx="24" cy="20" r="4.5" />
    </>
  ),
  github: (
    <path d="M24 5a19 19 0 0 0-6 37c1 .2 1.3-.4 1.3-1v-3.3c-5.3 1.2-6.4-2.5-6.4-2.5-.9-2.2-2.1-2.8-2.1-2.8-1.8-1.2.1-1.2.1-1.2 1.9.1 2.9 2 2.9 2 1.7 2.9 4.5 2 5.6 1.6.2-1.2.7-2 1.2-2.5-4.2-.5-8.7-2.1-8.7-9.4 0-2 .7-3.7 2-5.1-.2-.5-.8-2.4.2-5 0 0 1.6-.5 5.2 2a18 18 0 0 1 9.5 0c3.6-2.5 5.2-2 5.2-2 1 2.6.4 4.5.2 5 1.2 1.4 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.8 1.3 3.5v5.3c0 .6.3 1.2 1.3 1A19 19 0 0 0 24 5z" />
  ),
}

const FILLED = new Set(['sparkle', 'flower', 'heart', 'github'])

export default function Doodle({ name, className = '', title }) {
  const shape = PATHS[name]
  if (!shape) return null
  const filled = FILLED.has(name)
  return (
    <svg
      viewBox="0 0 48 48"
      className={`doodle doodle--${name} ${className}`}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {shape}
    </svg>
  )
}

/** A wavy underline you can place under a word. */
export function Squiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 120 14" className={`squiggle ${className}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        d="M2 8 C 12 1, 20 1, 30 8 S 48 15, 58 8 S 76 1, 86 8 S 104 15, 118 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Soft organic blob used behind illustrations. `variant` picks a shape. */
export function Blob({ variant = 1, className = '' }) {
  const shapes = {
    1: 'M421 316c-28 79-117 129-205 117S41 362 26 276 64 105 145 64s185-37 245 20 59 153 31 232z',
    2: 'M404 112c45 59 51 154 3 214s-147 103-227 79S28 302 30 214 103 50 190 32s169 21 214 80z',
    3: 'M381 89c49 47 66 129 38 196s-102 119-181 121S77 356 49 286 41 125 97 77 332 42 381 89z',
  }
  return (
    <svg viewBox="0 0 450 450" className={`blob ${className}`} aria-hidden="true" focusable="false">
      <path d={shapes[variant] ?? shapes[1]} fill="currentColor" />
    </svg>
  )
}
