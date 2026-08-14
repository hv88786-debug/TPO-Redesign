/**
 * Shared "background depth" primitives — extremely subtle grain texture +
 * soft radial glows used to lift flat institutional surfaces (Section,
 * PageHero) off the page without introducing any AI/SaaS-style visual
 * noise (no colour, no motion, no gradients loud enough to be noticed
 * consciously).
 *
 * Kept in one file so every surface pulls from the same texture/opacity
 * instead of each component re-deriving its own "how subtle is subtle"
 * judgment call.
 */

/**
 * A tiny (180×180) tileable fractal-noise SVG, alpha-only (no colour
 * channel), so it can be laid over any surface colour via `opacity` alone.
 * Generated once and inlined as a data URI — no network request, no extra
 * asset to ship.
 */
export const GRAIN_TEXTURE_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgcmVzdWx0PSJ0Ii8+PGZlQ29sb3JNYXRyaXggaW49InQiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgIDAgMCAwIDAgMCAgMCAwIDAgMCAwICAwIDAgMCAwLjkgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==";

/** Inline style object for the grain layer — `opacity` is set per-usage. */
export const grainStyle = {
  backgroundImage: `url("${GRAIN_TEXTURE_URL}")`,
  backgroundRepeat: "repeat" as const,
};
