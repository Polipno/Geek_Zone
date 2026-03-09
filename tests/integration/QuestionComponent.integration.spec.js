/* eslint-env vitest */
import { mount } from '@vue/test-utils';
import QuestionComponent from '../../src/components/QuestionComponent.vue';

describe('QuestionComponent - integration popup', () => {
  it('shows popup after confirm', async () => {
    const wrapper = mount(QuestionComponent);

    expect(wrapper.find('.popup').exists()).toBe(false);

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('.popup').exists()).toBe(true);
    expect(wrapper.find('.popup h3').exists()).toBe(true);
  });

  it('hides popup after clicking close', async () => {
    const wrapper = mount(QuestionComponent);

    await wrapper.find('button').trigger('click');
    expect(wrapper.find('.popup').exists()).toBe(true);

    const closeButton = wrapper.find('.popup button');
    await closeButton.trigger('click');

    expect(wrapper.find('.popup').exists()).toBe(false);
  });
});
