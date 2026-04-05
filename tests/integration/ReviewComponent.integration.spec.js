import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ReviewComponent from '../../src/components/ReviewComponent.vue';

describe('ReviewComponent - integration search', () => {
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

  it('filters UI when typing in search', async () => {
    const input = wrapper.find('input[type="text"]');
    await input.setValue('mario');

    const marioCard = wrapper
      .findAll('.bordure-texte')
      .find((card) => card.text().includes('Mario Kart World'));
    const splitCard = wrapper
      .findAll('.bordure-texte')
      .find((card) => card.text().includes('Split Fiction'));

    expect(marioCard.isVisible()).toBe(true);
    expect(splitCard.isVisible()).toBe(false);
  });

  it('shows items again when search is cleared', async () => {
    const input = wrapper.find('input[type="text"]');
    await input.setValue('mario');
    await input.setValue('');

    const splitCard = wrapper
      .findAll('.bordure-texte')
      .find((card) => card.text().includes('Split Fiction'));

    expect(splitCard.isVisible()).toBe(true);
  });
});
