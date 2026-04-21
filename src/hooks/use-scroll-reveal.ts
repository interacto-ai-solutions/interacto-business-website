import { useEffect, useRef } from "react";

/**
 * Adds .is-visible to any element with the .reveal class once it
 * scrolls into view. Lightweight, no deps. Mount once at app root.
 */
export const useScrollReveal = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) =>
        el.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    };

    observe();
    // Re-scan after a tick in case content mounted later
    const t = window.setTimeout(observe, 200);

    return () => {
      window.clearTimeout(t);
      observer.disconnect();
    };
  }, []);
};
