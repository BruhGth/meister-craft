import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  initial?: number;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  initial = 50,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(initial);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [updateFromClientX]);

  const startDrag = (e: React.PointerEvent) => {
    draggingRef.current = true;
    updateFromClientX(e.clientX);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={startDrag}
      className="group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-soft)] ring-1 ring-border touch-none cursor-ew-resize"
    >
      {/* After (base) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        width={1280}
        height={896}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Before (clipped via clip-path so image keeps natural cover sizing) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        width={1280}
        height={896}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background backdrop-blur">
        Vorher
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-foreground)] backdrop-blur">
        Nachher
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-[2px] bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <button
          type="button"
          aria-label="Vergleichsregler"
          tabIndex={0}
          onKeyDown={onKey}
          onPointerDown={(e) => {
            e.stopPropagation();
            draggingRef.current = true;
          }}
          className="pointer-events-auto absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-black/10 transition-transform group-hover:scale-105"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
