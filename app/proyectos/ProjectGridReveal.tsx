"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ProjectGridRevealProps = {
  children: ReactNode;
  className: string;
};

export default function ProjectGridReveal({
  children,
  className,
}: ProjectGridRevealProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !("IntersectionObserver" in window)) {
      return;
    }

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>(".portfolio-card"),
    );
    if (cards.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.remove("is-reveal-pending");
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => {
      if (card.getBoundingClientRect().bottom <= 0) {
        card.classList.add("is-revealed");
        return;
      }

      card.classList.add("is-reveal-pending");
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
}
