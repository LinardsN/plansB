// Reusable grain overlay used by ConceptAnomaly / Gallery / Photos pages.

export function GrainOverlay({ opacity = 0.18, blend = 'overlay', zIndex = 50 }) {
  if (!opacity) return null;
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      opacity, mixBlendMode: blend,
    }} />
  );
}
