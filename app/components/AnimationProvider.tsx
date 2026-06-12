'use client';

import { useEffect } from 'react';

export default function AnimationProvider() {
  useEffect(() => {
    // Scroll reveal
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
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Word stagger on hero
    const words = document.querySelectorAll<HTMLElement>('.word-stagger');
    words.forEach((word, i) => {
      setTimeout(() => {
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
        word.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      }, 200 + i * 80);
    });

    // Nav scroll effect
    const nav = document.getElementById('top-nav');
    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > 40) {
          nav.classList.add('nav-scrolled');
        } else {
          nav.classList.remove('nav-scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Treatment tabs
    const tabFacial = document.getElementById('tab-facial');
    const tabCorporal = document.getElementById('tab-corporal');
    const gridFacial = document.getElementById('grid-facial');
    const gridCorporal = document.getElementById('grid-corporal');

    const setTab = (tab: 'facial' | 'corporal') => {
      if (tab === 'facial') {
        tabFacial?.classList.replace('tab-inactive', 'tab-active');
        tabCorporal?.classList.replace('tab-active', 'tab-inactive');
        gridFacial?.classList.remove('hidden');
        gridCorporal?.classList.add('hidden');
      } else {
        tabCorporal?.classList.replace('tab-inactive', 'tab-active');
        tabFacial?.classList.replace('tab-active', 'tab-inactive');
        gridCorporal?.classList.remove('hidden');
        gridFacial?.classList.add('hidden');
      }
    };

    tabFacial?.addEventListener('click', () => setTab('facial'));
    tabCorporal?.addEventListener('click', () => setTab('corporal'));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
