import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ReviewComponent from '../../src/components/ReviewComponent.vue';

describe('ReviewComponent - matches()', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ReviewComponent, {
      global: {
        stubs: {
          'router-link': { template: '<a><slot /></a>' },
        },
      },
    });
  });

  it('returns true when query is empty', () => {
    wrapper.vm.searchQuery = '';
    expect(wrapper.vm.matches('Mario Kart World')).toBe(true);
  });

  it('returns true when query is whitespace', () => {
    wrapper.vm.searchQuery = '   ';
    expect(wrapper.vm.matches('Mario Kart World')).toBe(true);
  });

  it('returns true when query is null', () => {
    wrapper.vm.searchQuery = null;
    expect(wrapper.vm.matches('Mario Kart World')).toBe(true);
  });

  it('matches exact name', () => {
    wrapper.vm.searchQuery = 'Mario Kart World';
    expect(wrapper.vm.matches('Mario Kart World')).toBe(true);
  });

  it('matches partial name case-insensitive', () => {
    wrapper.vm.searchQuery = 'mArIo';
    expect(wrapper.vm.matches('Mario Kart World')).toBe(true);
  });

  it('returns false for non-matching name', () => {
    wrapper.vm.searchQuery = 'zelda';
    expect(wrapper.vm.matches('Mario Kart World')).toBe(false);
  });

  it('matches name with punctuation', () => {
    wrapper.vm.searchQuery = 'donkey';
    expect(wrapper.vm.matches('Mario vs. Donkey Kong')).toBe(true);
  });

  it('matches name with apostrophe', () => {
    wrapper.vm.searchQuery = 'luigi';
    expect(wrapper.vm.matches("Luigi's Mansion 2 HD")).toBe(true);
  });

  it('matches name with ampersand', () => {
    wrapper.vm.searchQuery = 'luigi';
    expect(wrapper.vm.matches('Mario & Luigi')).toBe(true);
  });

  it('matches name with plus sign', () => {
    wrapper.vm.searchQuery = '1 + 2';
    expect(wrapper.vm.matches('Super Mario Galaxy 1 + 2')).toBe(true);
  });

  it('matches name with number', () => {
    wrapper.vm.searchQuery = '2';
    expect(wrapper.vm.matches("Luigi's Mansion 2 HD")).toBe(true);
  });

  it('trims query before matching', () => {
    wrapper.vm.searchQuery = '  mario  ';
    expect(wrapper.vm.matches('Mario Kart World')).toBe(true);
  });

  it('matches query with dot', () => {
    wrapper.vm.searchQuery = 'vs.';
    expect(wrapper.vm.matches('Mario vs. Donkey Kong')).toBe(true);
  });

  it('matches partial word', () => {
    wrapper.vm.searchQuery = 'evil';
    expect(wrapper.vm.matches('Resident Evil Requiem')).toBe(true);
  });

  it('matches short query', () => {
    wrapper.vm.searchQuery = 're';
    expect(wrapper.vm.matches('Resident Evil Requiem')).toBe(true);
  });

  it('matches case-insensitive for last word', () => {
    wrapper.vm.searchQuery = 'rEqUiEm';
    expect(wrapper.vm.matches('Resident Evil Requiem')).toBe(true);
  });

  it('returns false for unknown query', () => {
    wrapper.vm.searchQuery = 'zzz';
    expect(wrapper.vm.matches('Mario Kart World')).toBe(false);
  });

  it('returns false when name is empty and query is not empty', () => {
    wrapper.vm.searchQuery = 'mario';
    expect(wrapper.vm.matches('')).toBe(false);
  });
});
