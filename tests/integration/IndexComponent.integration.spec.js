import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexComponent from '../../src/components/IndexComponent.vue';

vi.mock('../../src/firebase', () => {
  return {
    db: {},
    ref: vi.fn((db, path) => ({ db, path })),
    get: vi.fn(async () => ({ exists: () => false, val: () => 0 })),
    set: vi.fn(async () => {}),
    onValue: vi.fn((_, cb) => cb({ exists: () => false, val: () => 0 })),
  };
});

describe('IndexComponent - integration like', () => {
  let wrapper;

  beforeEach(() => {
    window.Cypress = true;
    wrapper = mount(IndexComponent);
  });

  afterEach(() => {
    wrapper.unmount();
    delete window.Cypress;
  });

  it('updates UI after a click', async () => {
    await wrapper.find('button').trigger('click');

    expect(wrapper.find('button').text()).toBe('❤️');
    expect(wrapper.text()).toContain('Nombre de likes : 1');
  });
});
