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

describe('IndexComponent - like button', () => {
  let wrapper;

  beforeEach(() => {
    window.Cypress = true;
    localStorage.clear();
    wrapper = mount(IndexComponent);
  });

  afterEach(() => {
    wrapper.unmount();
    delete window.Cypress;
  });

  it('detects E2E mode when Cypress is present', () => {
    expect(wrapper.vm.isE2E()).toBe(true);
  });

  it('does not set userId in E2E mode', () => {
    expect(wrapper.vm.userId).toBe('');
  });

  it('shows empty heart by default', () => {
    expect(wrapper.find('button').text()).toBe('🤍');
  });

  it('adds liked class when liked', async () => {
    wrapper.vm.isLiked = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').classes()).toContain('liked');
  });

  it('adds disabled class when processing', async () => {
    wrapper.vm.isProcessing = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').classes()).toContain('disabled');
  });

  it('disables button when processing', async () => {
    wrapper.vm.isProcessing = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
  });

  it('increments likeCount when not liked', async () => {
    wrapper.vm.isLiked = false;
    wrapper.vm.likeCount = 0;
    await wrapper.vm.toggleLike();
    expect(wrapper.vm.likeCount).toBe(1);
  });

  it('sets isLiked true when liking', async () => {
    wrapper.vm.isLiked = false;
    await wrapper.vm.toggleLike();
    expect(wrapper.vm.isLiked).toBe(true);
  });

  it('decrements likeCount when already liked', async () => {
    wrapper.vm.isLiked = true;
    wrapper.vm.likeCount = 2;
    await wrapper.vm.toggleLike();
    expect(wrapper.vm.likeCount).toBe(1);
  });

  it('sets isLiked false when unliking', async () => {
    wrapper.vm.isLiked = true;
    await wrapper.vm.toggleLike();
    expect(wrapper.vm.isLiked).toBe(false);
  });

  it('ignores toggle when processing', async () => {
    wrapper.vm.isProcessing = true;
    wrapper.vm.likeCount = 1;
    await wrapper.vm.toggleLike();
    expect(wrapper.vm.likeCount).toBe(1);
  });

  it('toggles twice back to original', async () => {
    wrapper.vm.likeCount = 0;
    await wrapper.vm.toggleLike();
    await wrapper.vm.toggleLike();
    expect(wrapper.vm.likeCount).toBe(0);
    expect(wrapper.vm.isLiked).toBe(false);
  });

  it('shows initial like count in text', () => {
    expect(wrapper.text()).toContain('Nombre de likes : 0');
  });

  it('updates like count text after click', async () => {
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('Nombre de likes : 1');
  });

  it('handles negative likeCount by incrementing', async () => {
    wrapper.vm.likeCount = -1;
    wrapper.vm.isLiked = false;
    await wrapper.vm.toggleLike();
    expect(wrapper.vm.likeCount).toBe(0);
  });

  it('keeps NaN when likeCount is NaN', async () => {
    wrapper.vm.likeCount = Number.NaN;
    wrapper.vm.isLiked = false;
    await wrapper.vm.toggleLike();
    expect(Number.isNaN(wrapper.vm.likeCount)).toBe(true);
  });

  it('getUserId creates a stored id', () => {
    delete window.Cypress;
    const id = wrapper.vm.getUserId();
    const stored = localStorage.getItem('userId');
    expect(id).toBe(stored);
    expect(id.startsWith('user-')).toBe(true);
  });

  it('getUserId returns same id on second call', () => {
    delete window.Cypress;
    const first = wrapper.vm.getUserId();
    const second = wrapper.vm.getUserId();
    expect(second).toBe(first);
  });
});
