import { describe, it, expect, beforeEach } from 'vitest';
import ReviewComponent from '../../src/components/ReviewComponent.vue';

function createVm(overrides = {}) {
  const data = ReviewComponent.data();
  const vm = {
    ...data,
    ...ReviewComponent.methods,
    ...overrides,
  };
  Object.keys(ReviewComponent.computed || {}).forEach((key) => {
    Object.defineProperty(vm, key, {
      get() {
        return ReviewComponent.computed[key].call(vm);
      },
      enumerable: true,
      configurable: true,
    });
  });
  return vm;
}

describe('ReviewComponent - Test Unitaire', () => {
  let vm;

  beforeEach(() => {
    vm = createVm();
  });

  it('Initialise searchQuery avec une chaîne vide', () => {
    expect(vm.searchQuery).toBe('');
  });

  it('normalizedQuery supprime les espaces et met en minuscule', () => {
    vm.searchQuery = '  MaRiO  ';
    const result = vm.normalizedQuery;
    expect(result).toBe('mario');
  });

  it('normalizedQuery retourne une chaîne vide si la requête est null', () => {
    vm.searchQuery = null;
    expect(vm.normalizedQuery).toBe('');
  });

  it('showNoResults est false quand la recherche est vide', () => {
    vm.searchQuery = '';
    vm.hasResults = false;
    const result = vm.showNoResults;
    expect(result).toBe(false);
  });

  it('showNoResults est true si la recherche n’est pas vide et qu’il n’y a aucun résultat', () => {
    vm.searchQuery = 'zzz';
    vm.hasResults = false;
    const result = vm.showNoResults;
    expect(result).toBe(true);
  });

  it('showNoResults est false si la recherche n’est pas vide mais qu’il y a des résultats', () => {
    vm.searchQuery = 'mario';
    vm.hasResults = true;
    const result = vm.showNoResults;
    expect(result).toBe(false);
  });

  it('matches retourne true si la recherche est vide', () => {
    vm.searchQuery = '';
    const result = vm.matches('Mario Kart World');
    expect(result).toBe(true);
  });

  it('matches retourne true si la recherche contient uniquement des espaces', () => {
    vm.searchQuery = '   ';
    const result = vm.matches('Mario Kart World');
    expect(result).toBe(true);
  });

  it('matches retourne true si la recherche est null', () => {
    vm.searchQuery = null;
    const result = vm.matches('Mario Kart World');
    expect(result).toBe(true);
  });

  it('matches retourne true pour une correspondance exacte', () => {
    vm.searchQuery = 'Mario Kart World';
    const result = vm.matches('Mario Kart World');
    expect(result).toBe(true);
  });

  it('matches retourne true pour une correspondance partielle insensible à la casse', () => {
    vm.searchQuery = 'mArIo';
    const result = vm.matches('Mario Kart World');
    expect(result).toBe(true);
  });

  it('matches retourne false si le nom ne correspond pas', () => {
    vm.searchQuery = 'zelda';
    const result = vm.matches('Mario Kart World');
    expect(result).toBe(false);
  });

  it('matches gère correctement la ponctuation', () => {
    vm.searchQuery = 'vs.';
    const result = vm.matches('Mario vs. Donkey Kong');
    expect(result).toBe(true);
  });

  it('matches gère le symbole "&"', () => {
    vm.searchQuery = '&';
    const result = vm.matches('Mario & Luigi');
    expect(result).toBe(true);
  });

  it('matches gère les expressions avec "+"', () => {
    vm.searchQuery = '1 + 2';
    const result = vm.matches('Super Mario Galaxy 1 + 2');
    expect(result).toBe(true);
  });

  it('matches gère les nombres dans les noms', () => {
    vm.searchQuery = '2';
    const result = vm.matches("Luigi's Mansion 2 HD");
    expect(result).toBe(true);
  });

  it('matches retourne false si le nom est vide et la recherche non vide', () => {
    vm.searchQuery = 'mario';
    const result = vm.matches('');
    expect(result).toBe(false);
  });
});
