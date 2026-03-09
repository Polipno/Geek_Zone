import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import QuestionComponent from '../../src/components/QuestionComponent.vue';

describe('QuestionComponent - results popup', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(QuestionComponent);
  });

  it('starts with popup hidden', () => {
    expect(wrapper.vm.showPopup).toBe(false);
  });

  it('closePopup hides the popup', () => {
    wrapper.vm.showPopup = true;
    wrapper.vm.closePopup();
    expect(wrapper.vm.showPopup).toBe(false);
  });

  it('showResults shows the popup', () => {
    wrapper.vm.showResults();
    expect(wrapper.vm.showPopup).toBe(true);
  });

  it('showResults gives score 0 when all answers are wrong', () => {
    wrapper.vm.userAnswers = {
      q1: 'Space Invaders',
      q2: 'Sarasaland',
      q3: 'Court Vite',
      q4: 'Mico',
      q5: 'Link',
      q6: 'Samus',
    };
    wrapper.vm.showResults();
    expect(wrapper.vm.score).toBe(0);
  });

  it('showResults gives score 10 when all answers are correct', () => {
    wrapper.vm.userAnswers = {
      q1: 'Pong',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };
    wrapper.vm.showResults();
    expect(wrapper.vm.score).toBe(10);
    expect(wrapper.vm.incorrectAnswers.length).toBe(0);
  });

  it('adds one incorrect answer per wrong response', () => {
    wrapper.vm.userAnswers = {
      q1: 'Space Invaders',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };
    wrapper.vm.showResults();
    expect(wrapper.vm.incorrectAnswers.length).toBe(1);
  });

  it('uses "Aucun" when an answer is missing', () => {
    wrapper.vm.userAnswers = {};
    wrapper.vm.showResults();
    const hasAucun = wrapper.vm.incorrectAnswers.some((entry) => entry.userAnswer === 'Aucun');
    expect(hasAucun).toBe(true);
  });

  it('scores q6 with 3 points', () => {
    wrapper.vm.userAnswers = { q6: 'Pit' };
    wrapper.vm.showResults();
    expect(wrapper.vm.score).toBe(3);
  });

  it('scores q4 with 2 points', () => {
    wrapper.vm.userAnswers = { q4: 'Corbac' };
    wrapper.vm.showResults();
    expect(wrapper.vm.score).toBe(2);
  });

  it('scores q5 with 2 points', () => {
    wrapper.vm.userAnswers = { q5: 'Alex Kidd' };
    wrapper.vm.showResults();
    expect(wrapper.vm.score).toBe(2);
  });

  it('scores q1 with 1 point', () => {
    wrapper.vm.userAnswers = { q1: 'Pong' };
    wrapper.vm.showResults();
    expect(wrapper.vm.score).toBe(1);
  });

  it('stores correctAnswer in incorrectAnswers for wrong answer', () => {
    wrapper.vm.userAnswers = { q1: 'Space Invaders' };
    wrapper.vm.showResults();
    expect(wrapper.vm.incorrectAnswers[0].correctAnswer).toBe('Pong');
  });

  it('resets incorrectAnswers between runs', () => {
    wrapper.vm.userAnswers = {
      q1: 'Space Invaders',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };
    wrapper.vm.showResults();
    expect(wrapper.vm.incorrectAnswers.length).toBe(1);

    wrapper.vm.userAnswers = {
      q1: 'Pong',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };
    wrapper.vm.showResults();
    expect(wrapper.vm.incorrectAnswers.length).toBe(0);
  });

  it('does not mutate correctAnswers after showResults', () => {
    const before = JSON.stringify(wrapper.vm.correctAnswers);
    wrapper.vm.userAnswers = { q1: 'Pong' };
    wrapper.vm.showResults();
    const after = JSON.stringify(wrapper.vm.correctAnswers);
    expect(after).toBe(before);
  });
});
