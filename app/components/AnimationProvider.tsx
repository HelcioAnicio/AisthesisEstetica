'use client';

import { useEffect } from 'react';

export default function AnimationProvider() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // ── Scroll reveal ──────────────────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');

    if (prefersReducedMotion) {
      // Show everything immediately
      revealEls.forEach((el) => el.classList.add('active'));
      document.querySelectorAll<HTMLElement>('.word-stagger').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );
      revealEls.forEach((el) => observer.observe(el));

      // Word stagger on hero H1
      const words = document.querySelectorAll<HTMLElement>('.word-stagger');
      words.forEach((word, i) => {
        setTimeout(() => {
          word.style.opacity = '1';
          word.style.transform = 'translateY(0)';
          word.style.transition =
            'opacity 0.5s ease-out, transform 0.5s ease-out';
        }, 200 + i * 80);
      });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // ── Nav scroll effect ──────────────────────────────────────────────
    const nav = document.getElementById('top-nav');
    const handleScroll = () => {
      if (!nav) return;
      nav.classList.toggle('nav-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── Treatment tabs ─────────────────────────────────────────────────
    const tabFacial = document.getElementById('tab-facial');
    const tabCorporal = document.getElementById('tab-corporal');
    const gridFacial = document.getElementById('grid-facial');
    const gridCorporal = document.getElementById('grid-corporal');

    if (!tabFacial || !tabCorporal) {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const setTab = (tab: 'facial' | 'corporal') => {
      const isFacial = tab === 'facial';

      tabFacial.classList.toggle('tab-active', isFacial);
      tabFacial.classList.toggle('tab-inactive', !isFacial);
      tabFacial.setAttribute('aria-selected', String(isFacial));

      tabCorporal.classList.toggle('tab-active', !isFacial);
      tabCorporal.classList.toggle('tab-inactive', isFacial);
      tabCorporal.setAttribute('aria-selected', String(!isFacial));

      gridFacial?.classList.toggle('hidden', !isFacial);
      gridCorporal?.classList.toggle('hidden', isFacial);
    };

    const onClickFacial = () => setTab('facial');
    const onClickCorporal = () => setTab('corporal');

    const onKeyFacial = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setTab('corporal');
        tabCorporal.focus();
      }
    };
    const onKeyCorporal = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setTab('facial');
        tabFacial.focus();
      }
    };

    tabFacial.addEventListener('click', onClickFacial);
    tabCorporal.addEventListener('click', onClickCorporal);
    tabFacial.addEventListener('keydown', onKeyFacial);
    tabCorporal.addEventListener('keydown', onKeyCorporal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      tabFacial.removeEventListener('click', onClickFacial);
      tabCorporal.removeEventListener('click', onClickCorporal);
      tabFacial.removeEventListener('keydown', onKeyFacial);
      tabCorporal.removeEventListener('keydown', onKeyCorporal);
    };
  }, []);

  return null;
}
