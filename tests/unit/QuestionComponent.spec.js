import { describe, it, expect, beforeEach } from 'vitest';
import QuestionComponent from '../../src/components/QuestionComponent.vue';

function createVm(overrides = {}) {
  return {
    ...QuestionComponent.data(),
    ...QuestionComponent.methods,
    ...overrides,
  };
}

describe('QuestionComponent - unit logic', () => {
  let vm;

  beforeEach(() => {
    vm = createVm();
  });

  it('initialises with popup hidden', () => {
    // Arrange
    const state = createVm();

    // Act
    const result = state.showPopup;

    // Assert
    expect(result).toBe(false);
  });

  it('initialises all user answers to null', () => {
    // Arrange
    const state = createVm();

    // Act
    const answers = Object.values(state.userAnswers);

    // Assert
    expect(answers).toHaveLength(6);
    expect(answers.every((a) => a === null)).toBe(true);
  });

  it('initialises score to 0 and totalPoints to 10', () => {
    // Arrange
    const state = createVm();

    // Act
    const result = { score: state.score, totalPoints: state.totalPoints };

    // Assert
    expect(result).toEqual({ score: 0, totalPoints: 10 });
  });

  it('closePopup sets showPopup to false', () => {
    // Arrange
    vm.showPopup = true;

    // Act
    vm.closePopup();

    // Assert
    expect(vm.showPopup).toBe(false);
  });

  it('showResults sets showPopup to true', () => {
    // Arrange
    vm.showPopup = false;

    // Act
    vm.showResults();

    // Assert
    expect(vm.showPopup).toBe(true);
  });

  it('showResults gives score 0 when all answers are wrong', () => {
    // Arrange
    vm.userAnswers = {
      q1: 'Space Invaders',
      q2: 'Sarasaland',
      q3: 'Court Vite',
      q4: 'Mico',
      q5: 'Link',
      q6: 'Samus',
    };

    // Act
    vm.showResults();

    // Assert
    expect(vm.score).toBe(0);
  });

  it('showResults gives score 10 when all answers are correct', () => {
    // Arrange
    vm.userAnswers = {
      q1: 'Pong',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };

    // Act
    vm.showResults();

    // Assert
    expect(vm.score).toBe(10);
    expect(vm.incorrectAnswers).toHaveLength(0);
  });

  it('showResults collects one incorrect answer when one is wrong', () => {
    // Arrange
    vm.userAnswers = {
      q1: 'Space Invaders',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };

    // Act
    vm.showResults();

    // Assert
    expect(vm.incorrectAnswers).toHaveLength(1);
    expect(vm.score).toBe(9);
  });

  it('uses "Aucun" when an answer is missing (null)', () => {
    // Arrange
    vm.userAnswers = { q1: null, q2: null, q3: null, q4: null, q5: null, q6: null };

    // Act
    vm.showResults();

    // Assert
    const allAucun = vm.incorrectAnswers.every((entry) => entry.userAnswer === 'Aucun');
    expect(allAucun).toBe(true);
  });

  it('scores q1 with 1 point (simple question)', () => {
    // Arrange
    vm.userAnswers = { q1: 'Pong' };

    // Act
    vm.showResults();

    // Assert
    expect(vm.score).toBe(1);
  });

  it('scores q4 with 2 points (medium question)', () => {
    // Arrange
    vm.userAnswers = { q4: 'Corbac' };

    // Act
    vm.showResults();

    // Assert
    expect(vm.score).toBe(2);
  });

  it('scores q5 with 2 points (medium question)', () => {
    // Arrange
    vm.userAnswers = { q5: 'Alex Kidd' };

    // Act
    vm.showResults();

    // Assert
    expect(vm.score).toBe(2);
  });

  it('scores q6 with 3 points (hard question)', () => {
    // Arrange
    vm.userAnswers = { q6: 'Pit' };

    // Act
    vm.showResults();

    // Assert
    expect(vm.score).toBe(3);
  });

  it('stores correctAnswer in incorrectAnswers for a wrong answer', () => {
    // Arrange
    vm.userAnswers = { q1: 'Space Invaders' };

    // Act
    vm.showResults();

    // Assert
    const correction = vm.incorrectAnswers.find(
      (c) => c.correctAnswer === 'Pong'
    );
    expect(correction).toBeDefined();
    expect(correction.userAnswer).toBe('Space Invaders');
  });

  it('stores questionText in incorrectAnswers for a wrong answer', () => {
    // Arrange
    vm.userAnswers = { q2: 'Sarasaland' };

    // Act
    vm.showResults();

    // Assert
    const correction = vm.incorrectAnswers.find(
      (c) => c.correctAnswer === 'Le Royaume des Fleurs'
    );
    expect(correction.questionText).toContain('Super Mario Bros. Wonder');
  });

  it('resets score and incorrectAnswers between consecutive runs', () => {
    // Arrange
    vm.userAnswers = { q1: 'Space Invaders' };
    vm.showResults();
    const firstRunErrors = vm.incorrectAnswers.length;

    vm.userAnswers = {
      q1: 'Pong',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };

    // Act
    vm.showResults();

    // Assert
    expect(firstRunErrors).toBeGreaterThan(0);
    expect(vm.incorrectAnswers).toHaveLength(0);
    expect(vm.score).toBe(10);
  });

  it('does not mutate correctAnswers after showResults', () => {
    // Arrange
    const before = JSON.parse(JSON.stringify(vm.correctAnswers));
    vm.userAnswers = { q1: 'Pong', q3: 'Court Vite' };

    // Act
    vm.showResults();

    // Assert
    expect(vm.correctAnswers).toEqual(before);
  });

});
