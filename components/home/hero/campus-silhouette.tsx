/**
 * Stylised silhouette of a neoclassical institute building — colonnade,
 * pediment, dome and entrance steps — standing in for real campus
 * photography (none supplied yet; see public/images/README.md).
 *
 * Swap-out path: once a real photograph of the GEC Ajmer campus is
 * available, replace <CampusSilhouette /> inside <HeroBackground /> with
 * `<Image src="/images/campus-hero.jpg" fill priority className="object-cover" />`
 * — the gradient overlay and particle layers sit above it either way and
 * need no changes.
 */
export function CampusSilhouette() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="building-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(212 55% 14%)" />
          <stop offset="100%" stopColor="hsl(215 45% 7%)" />
        </linearGradient>
        <linearGradient id="rim-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(38 75% 60%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(38 75% 60%)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* base plaza */}
      <rect x="0" y="760" width="1600" height="140" fill="url(#building-fill)" />

      {/* dome */}
      <circle cx="800" cy="430" r="150" fill="url(#building-fill)" />
      <rect x="770" y="300" width="60" height="70" fill="url(#building-fill)" />
      <circle cx="800" cy="300" r="10" fill="hsl(38 75% 60%)" fillOpacity="0.7" />
      <path d="M650 470 A150 150 0 0 1 950 470" fill="none" stroke="url(#rim-light)" strokeWidth="6" />

      {/* pediment (triangular roof over entrance) */}
      <polygon points="500,470 800,340 1100,470" fill="url(#building-fill)" />
      <polygon points="500,470 800,340 1100,470" fill="none" stroke="url(#rim-light)" strokeWidth="4" />

      {/* main portico block */}
      <rect x="480" y="470" width="640" height="290" fill="url(#building-fill)" />

      {/* colonnade — repeated columns */}
      {Array.from({ length: 11 }).map((_, i) => (
        <rect
          key={i}
          x={520 + i * 56}
          y={490}
          width="22"
          height="270"
          fill="hsl(215 45% 6%)"
          fillOpacity="0.9"
        />
      ))}

      {/* entrance steps */}
      <rect x="440" y="760" width="720" height="14" fill="url(#building-fill)" />
      <rect x="410" y="774" width="780" height="14" fill="url(#building-fill)" />
      <rect x="380" y="788" width="840" height="14" fill="url(#building-fill)" />

      {/* left wing */}
      <rect x="120" y="560" width="360" height="200" fill="url(#building-fill)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={`lw-${i}`} x={150 + i * 55} y={590} width="16" height="170" fill="hsl(215 45% 6%)" fillOpacity="0.85" />
      ))}

      {/* right wing */}
      <rect x="1120" y="560" width="360" height="200" fill="url(#building-fill)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={`rw-${i}`} x={1150 + i * 55} y={590} width="16" height="170" fill="hsl(215 45% 6%)" fillOpacity="0.85" />
      ))}
    </svg>
  );
}
