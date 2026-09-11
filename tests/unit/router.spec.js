import { describe, it, expect, vi } from 'vitest';

// Le routeur importe la page d'accueil, qui initialise Firebase : on le remplace par un faux.
vi.mock('../../src/firebase', () => ({
  db: {},
  ref: vi.fn(),
  get: vi.fn(async () => ({ exists: () => false, val: () => 0 })),
  set: vi.fn(async () => {}),
  onValue: vi.fn(),
}));

import router, { applyPageMeta, formatTitle } from '../../src/router';

const routes = router.getRoutes();

describe('Routeur - Titres et descriptions de page', () => {
  it('Chaque route a un titre et une description', () => {
    routes.forEach((route) => {
      expect(route.meta.title, `titre manquant pour ${route.path}`).toBeTruthy();
      expect(route.meta.description, `description manquante pour ${route.path}`).toBeTruthy();
    });
  });

  it('Les titres de page sont uniques', () => {
    const titles = routes.map((route) => route.meta.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("Aucune adresse ne contient d'accent, d'espace ou de caractère spécial", () => {
    routes.forEach((route) => {
      expect(route.path, `adresse invalide : ${route.path}`).toMatch(/^\/[a-z0-9_/]*$/);
    });
  });

  it('formatTitle place le titre de la page avant le nom du site', () => {
    expect(formatTitle('Star Fox')).toBe('Star Fox – Geek Zone');
  });

  it("applyPageMeta met à jour le titre de l'onglet et la meta description", () => {
    document.head.innerHTML = '';
    const starFox = routes.find((route) => route.path === '/star_fox');

    applyPageMeta(starFox);

    expect(document.title).toBe('Star Fox – Geek Zone');
    const tag = document.querySelector('meta[name="description"]');
    expect(tag).not.toBeNull();
    expect(tag.getAttribute('content')).toContain('Star Fox');
  });

  it("applyPageMeta utilise le titre complet du site sur l'accueil", () => {
    const home = routes.find((route) => route.path === '/');

    applyPageMeta(home);

    expect(document.title).toMatch(/^Geek Zone – /);
  });
});
