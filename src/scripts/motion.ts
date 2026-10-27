import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Active nav chip follows the section in view (runs even with reduced motion).
const chips = new Map(
  [...document.querySelectorAll<HTMLAnchorElement>('[data-chip]')].map((a) => [a.hash.slice(1), a]),
);
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      chips.forEach((a, id) => a.setAttribute('aria-current', String(id === e.target.id)));
      // Scroll only the chip bar; scrollIntoView would also nudge the page and kill the user's fling.
      const chip = chips.get(e.target.id);
      const bar = chip?.parentElement;
      if (chip && bar) {
        const offset = chip.getBoundingClientRect().left - bar.getBoundingClientRect().left;
        bar.scrollTo({ left: bar.scrollLeft + offset - (bar.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
      }
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
chips.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ lerp: 0.12 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      lenis.scrollTo(a.hash, { offset: -64 });
      history.replaceState(null, '', a.hash);
    }),
  );

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) =>
    gsap.from(el, { y: 32, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }),
  );
  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) =>
    gsap.from(group.children, { y: 36, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: group, start: 'top 85%', once: true } }),
  );
  gsap.utils.toArray<HTMLElement>('[data-parallax] img').forEach((img) =>
    gsap.fromTo(img, { yPercent: -8, scale: 1.18 }, { yPercent: 8, scale: 1.18, ease: 'none', scrollTrigger: { trigger: img.closest('[data-parallax]'), scrub: true } }),
  );
}
