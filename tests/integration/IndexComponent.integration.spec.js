import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexComponent from '../../src/components/IndexComponent.vue';
import { set, ref } from '../../src/firebase';

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
    localStorage.clear();
    wrapper = mount(IndexComponent);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('saves like to Firebase when button is clicked', async () => {
    vi.clearAllMocks();

    await wrapper.find('button').trigger('click');

    expect(set).toHaveBeenCalledWith(expect.anything(), true);
    expect(set).toHaveBeenCalledWith(expect.anything(), 1);
    expect(ref).toHaveBeenCalledWith(expect.anything(), 'likes/global');
  });
});
