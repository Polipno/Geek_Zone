import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AudioPlayerComponent from '../../src/components/AudioPlayerComponent.vue';

// jsdom ne sait pas lire de l'audio : on simule play() et pause() en déclenchant les événements
// que le vrai navigateur émettrait.
function stubMediaElement() {
  Object.defineProperty(HTMLMediaElement.prototype, 'paused', {
    configurable: true,
    get() {
      return this._paused !== false;
    },
  });
  HTMLMediaElement.prototype.play = vi.fn(function play() {
    this._paused = false;
    this.dispatchEvent(new Event('play'));
    return Promise.resolve();
  });
  HTMLMediaElement.prototype.pause = vi.fn(function pause() {
    this._paused = true;
    this.dispatchEvent(new Event('pause'));
  });
}

describe('AudioPlayerComponent - Test Unitaire', () => {
  let wrapper;

  beforeEach(() => {
    stubMediaElement();
    localStorage.clear();
    wrapper = mount(AudioPlayerComponent, { props: { src: '/episode.mp3' } });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Affiche le bouton Lecture et des temps à zéro au départ', () => {
    expect(wrapper.find('.audio-player__play').attributes('aria-label')).toBe('Lecture');
    const times = wrapper.findAll('.audio-player__time').map((t) => t.text());
    expect(times).toEqual(['0:00', '0:00']);
    expect(wrapper.vm.isPlaying).toBe(false);
  });

  it('Bascule entre lecture et pause au clic', async () => {
    await wrapper.find('.audio-player__play').trigger('click');
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
    expect(wrapper.vm.isPlaying).toBe(true);
    expect(wrapper.find('.audio-player__play').attributes('aria-label')).toBe('Pause');

    await wrapper.find('.audio-player__play').trigger('click');
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
    expect(wrapper.vm.isPlaying).toBe(false);
  });

  it('Formate les durées en m:ss et h:mm:ss', () => {
    expect(wrapper.vm.formatTime(0)).toBe('0:00');
    expect(wrapper.vm.formatTime(65)).toBe('1:05');
    expect(wrapper.vm.formatTime(3725)).toBe('1:02:05');
    expect(wrapper.vm.formatTime(NaN)).toBe('0:00');
  });

  it('Lit la durée quand les métadonnées sont chargées', async () => {
    const audio = wrapper.find('audio').element;
    Object.defineProperty(audio, 'duration', { configurable: true, value: 1800 });
    await wrapper.find('audio').trigger('loadedmetadata');

    expect(wrapper.vm.duration).toBe(1800);
    expect(wrapper.findAll('.audio-player__time')[1].text()).toBe('30:00');
  });

  it('Avance et recule de 15 secondes sans sortir des bornes', async () => {
    wrapper.vm.duration = 100;
    const audio = wrapper.find('audio').element;

    wrapper.vm.skip(15);
    expect(audio.currentTime).toBe(15);

    wrapper.vm.skip(-30);
    expect(audio.currentTime).toBe(0);

    wrapper.vm.skip(500);
    expect(audio.currentTime).toBe(100);
  });

  it('Déplace la lecture quand on bouge la barre de progression', async () => {
    wrapper.vm.duration = 200;
    await wrapper.vm.$nextTick();
    const range = wrapper.find('.audio-player__progress');
    range.element.value = '42';
    await range.trigger('input');

    expect(wrapper.vm.currentTime).toBe(42);
    expect(wrapper.find('audio').element.currentTime).toBe(42);
  });

  it('Mémorise le volume choisi et le retrouve au prochain chargement', async () => {
    const range = wrapper.find('.audio-player__volume-range');
    range.element.value = '0.3';
    await range.trigger('input');

    expect(wrapper.vm.volume).toBe(0.3);
    expect(localStorage.getItem('geekzone-audio-volume')).toBe('0.3');

    const again = mount(AudioPlayerComponent, { props: { src: '/episode.mp3' } });
    expect(again.vm.volume).toBe(0.3);
    again.unmount();
  });

  it('Coupe et rétablit le son', async () => {
    await wrapper.find('.audio-player__mute').trigger('click');
    expect(wrapper.vm.isMuted).toBe(true);
    expect(wrapper.find('audio').element.muted).toBe(true);

    await wrapper.find('.audio-player__mute').trigger('click');
    expect(wrapper.vm.isMuted).toBe(false);
  });

  it('Revient au début quand la lecture se termine', async () => {
    wrapper.vm.isPlaying = true;
    wrapper.vm.currentTime = 50;
    await wrapper.find('audio').trigger('ended');

    expect(wrapper.vm.isPlaying).toBe(false);
    expect(wrapper.vm.currentTime).toBe(0);
  });

  it("Affiche un message si le fichier ne peut pas être chargé", async () => {
    await wrapper.find('audio').trigger('error');

    expect(wrapper.find('.audio-player__error').exists()).toBe(true);
    expect(wrapper.find('.audio-player__play').exists()).toBe(false);
  });
});
