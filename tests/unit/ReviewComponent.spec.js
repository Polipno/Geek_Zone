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

describe('ReviewComponent - unit logic', () => {
  let vm;

  beforeEach(() => {
    vm = createVm();
  });

  it('initialises searchQuery to empty string', () => {
    // Arrange
    const state = createVm();

    // Act
    const result = state.searchQuery;

    // Assert
    expect(result).toBe('');
  });

  it('normalizedQuery trims and lowercases searchQuery', () => {
    // Arrange
    vm.searchQuery = '  MaRiO  ';

    // Act
    const result = vm.normalizedQuery;

    // Assert
    expect(result).toBe('mario');
  });

  it('normalizedQuery returns empty string when searchQuery is null', () => {
    // Arrange
    vm.searchQuery = null;

    // Act
    const result = vm.normalizedQuery;

    // Assert
    expect(result).toBe('');
  });

  it('showNoResults is false when query is empty', () => {
    // Arrange
    vm.searchQuery = '';
    vm.hasResults = false;

    // Act
    const result = vm.showNoResults;

    // Assert
    expect(result).toBe(false);
  });

  it('showNoResults is true when query is non-empty and hasResults is false', () => {
    // Arrange
    vm.searchQuery = 'zzz';
    vm.hasResults = false;

    // Act
    const result = vm.showNoResults;

    // Assert
    expect(result).toBe(true);
  });

  it('showNoResults is false when query is non-empty and hasResults is true', () => {
    // Arrange
    vm.searchQuery = 'mario';
    vm.hasResults = true;

    // Act
    const result = vm.showNoResults;

    // Assert
    expect(result).toBe(false);
  });

  it('matches returns true when query is empty', () => {
    // Arrange
    vm.searchQuery = '';

    // Act
    const result = vm.matches('Mario Kart World');

    // Assert
    expect(result).toBe(true);
  });

  it('matches returns true when query is whitespace', () => {
    // Arrange
    vm.searchQuery = '   ';

    // Act
    const result = vm.matches('Mario Kart World');

    // Assert
    expect(result).toBe(true);
  });

  it('matches returns true when query is null', () => {
    // Arrange
    vm.searchQuery = null;

    // Act
    const result = vm.matches('Mario Kart World');

    // Assert
    expect(result).toBe(true);
  });

  it('matches exact name', () => {
    // Arrange
    vm.searchQuery = 'Mario Kart World';

    // Act
    const result = vm.matches('Mario Kart World');

    // Assert
    expect(result).toBe(true);
  });

  it('matches partial name case-insensitive', () => {
    // Arrange
    vm.searchQuery = 'mArIo';

    // Act
    const result = vm.matches('Mario Kart World');

    // Assert
    expect(result).toBe(true);
  });

  it('returns false for non-matching name', () => {
    // Arrange
    vm.searchQuery = 'zelda';

    // Act
    const result = vm.matches('Mario Kart World');

    // Assert
    expect(result).toBe(false);
  });

  it('matches name with punctuation (vs.)', () => {
    // Arrange
    vm.searchQuery = 'vs.';

    // Act
    const result = vm.matches('Mario vs. Donkey Kong');

    // Assert
    expect(result).toBe(true);
  });

  it('matches name with ampersand', () => {
    // Arrange
    vm.searchQuery = '&';

    // Act
    const result = vm.matches('Mario & Luigi');

    // Assert
    expect(result).toBe(true);
  });

  it('matches name with plus sign', () => {
    // Arrange
    vm.searchQuery = '1 + 2';

    // Act
    const result = vm.matches('Super Mario Galaxy 1 + 2');

    // Assert
    expect(result).toBe(true);
  });

  it('matches name with number', () => {
    // Arrange
    vm.searchQuery = '2';

    // Act
    const result = vm.matches("Luigi's Mansion 2 HD");

    // Assert
    expect(result).toBe(true);
  });

  it('returns false when name is empty and query is not empty', () => {
    // Arrange
    vm.searchQuery = 'mario';

    // Act
    const result = vm.matches('');

    // Assert
    expect(result).toBe(false);
  });
});
