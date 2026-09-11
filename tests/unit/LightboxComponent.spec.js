import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import LightboxComponent from '../../src/components/LightboxComponent.vue';

function buildPage() {
  document.body.innerHTML = `
    <a href="#/jeu"><img class="Image" src="/affiche.jpeg" alt="Affiche liée" /></a>
    <div class="image-gallery">
      <img class="Image" src="/capture-1.jpeg" alt="Capture 1" />
      <img class="Image" src="/capture-2.jpeg" alt="Capture 2" />
      <img class="Image" src="/capture-3.jpeg" alt="Capture 3" />
    </div>
    <img class="Image" src="/seule.jpeg" alt="Image seule" />
    <div id="lightbox-root"></div>
  `;
}

function clickOn(selector) {
  document.querySelector(selector).dispatchEvent(new MouseEvent('click', { bubbles: true }));
}

describe('LightboxComponent - Test Unitaire', () => {
  let wrapper;

  beforeEach(() => {
    buildPage();
    wrapper = mount(LightboxComponent, { attachTo: '#lightbox-root' });
  });

  afterEach(() => {
    wrapper.unmount();
    document.body.innerHTML = '';
    document.body.style.overflow = '';
  });

  it('Est fermée au départ', () => {
    expect(wrapper.vm.isOpen).toBe(false);
    expect(wrapper.find('.lightbox').exists()).toBe(false);
  });

  it("S'ouvre au clic sur une image de galerie avec toutes ses voisines", async () => {
    clickOn('.image-gallery img:nth-child(2)');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.vm.images).toHaveLength(3);
    expect(wrapper.vm.index).toBe(1);
    expect(wrapper.find('.lightbox__img').attributes('alt')).toBe('Capture 2');
    expect(wrapper.find('.lightbox__counter').text()).toBe('2 / 3');
    expect(document.body.style.overflow).toBe('hidden');
  });

  it("S'ouvre sur une image isolée sans navigation", async () => {
    clickOn('img[alt="Image seule"]');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.vm.images).toHaveLength(1);
    expect(wrapper.find('.lightbox__nav').exists()).toBe(false);
  });

  it("Ne s'ouvre pas sur une image qui est un lien", async () => {
    clickOn('a img');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('Navigue avec les flèches du clavier en boucle', async () => {
    clickOn('.image-gallery img:nth-child(3)');
    await wrapper.vm.$nextTick();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(wrapper.vm.index).toBe(0);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(wrapper.vm.index).toBe(2);
  });

  it('Se ferme avec Échap et libère le défilement', async () => {
    clickOn('.image-gallery img');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isOpen).toBe(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.isOpen).toBe(false);
    expect(document.body.style.overflow).toBe('');
  });

  it('Se ferme avec le bouton Fermer', async () => {
    clickOn('.image-gallery img');
    await wrapper.vm.$nextTick();

    await wrapper.find('.lightbox__close').trigger('click');

    expect(wrapper.vm.isOpen).toBe(false);
  });
});
