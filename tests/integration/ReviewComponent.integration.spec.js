import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ReviewComponent from '../../src/components/ReviewComponent.vue';

describe('ReviewComponent - Test Integration', () => {
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

  it('filtre les éléments de l’interface lors de la saisie dans la recherche', async () => {
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

  it('réaffiche les éléments lorsque la recherche est effacée', async () => {
    const input = wrapper.find('input[type="text"]');
    await input.setValue('mario');
    await input.setValue('');

    const splitCard = wrapper
      .findAll('.bordure-texte')
      .find((card) => card.text().includes('Split Fiction'));

    expect(splitCard.isVisible()).toBe(true);
  });
});
