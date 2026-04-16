import { useRef, useEffect, useState, useCallback } from 'react';

/* ─────────────────────────────────────────────────────────
   Variable Proximity – React Bits
   Animates font-variation-settings "wght" (and any other
   axis) based on cursor distance from each character.
   Requires a variable font that exposes the axes you pass.
──────────────────────────────────────────────────────────── */

function parseFVS(settings) {
  const map = {};
  for (const [, axis, val] of settings.matchAll(/"([^"]+)"\s+([\d.e+-]+)/g)) {
    map[axis] = parseFloat(val);
  }
  return map;
}

function buildFVS(map) {
  return Object.entries(map)
    .map(([axis, v]) => `"${axis}" ${v.toFixed(2)}`)
    .join(', ');
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function VariableProximity({
  label,
  className = '',
  style = {},
  /* font-variation-settings when cursor is far away */
  fromFontVariationSettings = '"wght" 400',
  /* font-variation-settings when cursor is directly over */
  toFontVariationSettings   = '"wght" 900',
  /* ref of the element whose mousemove events are tracked */
  containerRef,
  /* px radius of influence */
  radius  = 120,
  /* 'linear' | 'exponential' | 'gaussian' */
  falloff = 'linear',
}) {
  const chars      = label.split('');
  const letterRefs = useRef([]);

  const [fvs, setFvs] = useState(() =>
    chars.map(() => fromFontVariationSettings)
  );

  // keep parsed refs up-to-date if props change
  const fromParsed = useRef(parseFVS(fromFontVariationSettings));
  const toParsed   = useRef(parseFVS(toFontVariationSettings));

  useEffect(() => {
    fromParsed.current = parseFVS(fromFontVariationSettings);
    toParsed.current   = parseFVS(toFontVariationSettings);
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const proximity = useCallback(
    (dist) => {
      const t = Math.max(0, 1 - dist / radius);
      if (falloff === 'exponential') return t * t * t;
      if (falloff === 'gaussian')
        return Math.exp(-((dist / radius) ** 2) * 4);
      return t; // linear
    },
    [radius, falloff]
  );

  useEffect(() => {
    const el = containerRef?.current ?? document.body;

    const onMove = (e) => {
      setFvs(
        letterRefs.current.map((ref) => {
          if (!ref) return fromFontVariationSettings;
          const { left, top, width, height } = ref.getBoundingClientRect();
          const dist = Math.hypot(
            e.clientX - (left + width  / 2),
            e.clientY - (top  + height / 2)
          );
          const t   = proximity(dist);
          const out = {};
          for (const axis in fromParsed.current) {
            if (axis in toParsed.current) {
              out[axis] = lerp(fromParsed.current[axis], toParsed.current[axis], t);
            }
          }
          return buildFVS(out);
        })
      );
    };

    const onLeave = () =>
      setFvs(chars.map(() => fromFontVariationSettings));

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, fromFontVariationSettings, proximity]);

  return (
    <span className={className} style={style} aria-label={label}>
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => { letterRefs.current[i] = el; }}
          style={{ fontVariationSettings: fvs[i], display: 'inline-block' }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
