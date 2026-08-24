import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { referenceProjects } from "@/lib/references";

const SLIDE_WIDTH = "58%";
const SIDE_PADDING = "21%";

export function ReferenceCarousel() {
  const [index, setIndex] = useState(0);
  const total = referenceProjects.length;
  const active = referenceProjects[index];

  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[i];
    if (!track || !slide) return;
    const target = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2;
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToIndex(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    const onResize = () => scrollToIndex(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={trackRef}
          className="relative flex overflow-x-hidden scroll-smooth"
          style={{ paddingLeft: SIDE_PADDING, paddingRight: SIDE_PADDING }}
        >
          {referenceProjects.map((p, i) => (
            <div
              key={p.title}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="shrink-0 px-1.5 sm:px-2"
              style={{ width: SLIDE_WIDTH }}
            >
              <div
                role={i === index ? undefined : "button"}
                tabIndex={i === index ? undefined : 0}
                onClick={() => i !== index && setIndex(i)}
                onKeyDown={(e) => {
                  if (i !== index && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setIndex(i);
                  }
                }}
                aria-label={i === index ? undefined : `Projekt anzeigen: ${p.title}`}
                className={`transition-opacity duration-500 ease-out ${
                  i === index ? "opacity-100" : "cursor-pointer opacity-40 hover:opacity-70"
                }`}
              >
                <div className={i === index ? undefined : "pointer-events-none"}>
                  <BeforeAfterSlider
                    beforeSrc={p.before}
                    afterSrc={p.after}
                    beforeAlt={p.beforeAlt}
                    afterAlt={p.afterAlt}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Vorheriges Projekt"
          className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-[var(--shadow-soft)] ring-1 ring-border transition hover:bg-secondary sm:left-1"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Nächstes Projekt"
          className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-[var(--shadow-soft)] ring-1 ring-border transition hover:bg-secondary sm:right-1"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mx-auto mt-6 max-w-xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{active.category}</span>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-foreground">{active.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{active.desc}</p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {referenceProjects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Projekt ${i + 1} anzeigen`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-5 bg-[var(--accent)]" : "w-2 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
