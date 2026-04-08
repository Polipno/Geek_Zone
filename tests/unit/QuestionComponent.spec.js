import { describe, it, expect, beforeEach } from 'vitest';
import QuestionComponent from '../../src/components/QuestionComponent.vue';

function createVm(overrides = {}) {
  return {
    ...QuestionComponent.data(),
    ...QuestionComponent.methods,
    ...overrides,
  };
}

describe('QuestionComponent - Test Unitaire', () => {
  let vm;

  beforeEach(() => {
    vm = createVm();
  });

  it('Initialise le composant avec le popup caché', () => {
    expect(vm.showPopup).toBe(false);
  });

  it('Initialise toutes les réponses utilisateur à null', () => {
    const answers = Object.values(vm.userAnswers);
    expect(answers).toHaveLength(6);
    expect(answers.every((a) => a === null)).toBe(true);
  });

  it('Initialise le score à 0 et le total de points à 10', () => {
    const result = { score: vm.score, totalPoints: vm.totalPoints };
    expect(result).toEqual({ score: 0, totalPoints: 10 });
  });

  it('closePopup ferme le popup', () => {
    vm.showPopup = true;
    vm.closePopup();
    expect(vm.showPopup).toBe(false);
  });

  it('showResults ouvre le popup', () => {
    vm.showPopup = false;
    vm.showResults();
    expect(vm.showPopup).toBe(true);
  });

  it('showResults donne un score de 0 si toutes les réponses sont fausses', () => {
    vm.userAnswers = {
      q1: 'Space Invaders',
      q2: 'Sarasaland',
      q3: 'Court Vite',
      q4: 'Mico',
      q5: 'Link',
      q6: 'Samus',
    };
    vm.showResults();
    expect(vm.score).toBe(0);
  });

  it('showResults donne un score de 10 si toutes les réponses sont correctes', () => {
    vm.userAnswers = {
      q1: 'Pong',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };
    vm.showResults();
    expect(vm.score).toBe(10);
    expect(vm.incorrectAnswers).toHaveLength(0);
  });

  it('showResults enregistre une erreur si une seule réponse est fausse', () => {
    vm.userAnswers = {
      q1: 'Space Invaders',
      q2: 'Le Royaume des Fleurs',
      q3: "Copie les capacités d'autrui",
      q4: 'Corbac',
      q5: 'Alex Kidd',
      q6: 'Pit',
    };
    vm.showResults();
    expect(vm.incorrectAnswers).toHaveLength(1);
    expect(vm.score).toBe(9);
  });

  it('showResults utilise "Aucun" quand une réponse est absente', () => {
    vm.userAnswers = { q1: null, q2: null, q3: null, q4: null, q5: null, q6: null };
    vm.showResults();
    const allAucun = vm.incorrectAnswers.every((entry) => entry.userAnswer === 'Aucun');
    expect(allAucun).toBe(true);
  });

  it('showResults attribue 1 point pour une question facile (q1)', () => {
    vm.userAnswers = { q1: 'Pong' };
    vm.showResults();
    expect(vm.score).toBe(1);
  });

  it('showResults attribue 2 points pour une question moyenne (q4)', () => {
    vm.userAnswers = { q4: 'Corbac' };
    vm.showResults();
    expect(vm.score).toBe(2);
  });

  it('showResults attribue 3 points pour une question difficile (q6)', () => {
    vm.userAnswers = { q6: 'Pit' };
    vm.showResults();
    expect(vm.score).toBe(3);
  });

  it('showResults stocke la bonne réponse en cas d’erreur', () => {
    vm.userAnswers = { q1: 'Space Invaders' };
    vm.showResults();
    const correction = vm.incorrectAnswers.find((c) => c.correctAnswer === 'Pong');
    expect(correction).toBeDefined();
    expect(correction.userAnswer).toBe('Space Invaders');
  });

  it('showResults stocke le texte de la question en cas d’erreur', () => {
    vm.userAnswers = { q2: 'Sarasaland' };
    vm.showResults();
    const correction = vm.incorrectAnswers.find((c) => c.correctAnswer === 'Le Royaume des Fleurs');
    expect(correction.questionText).toContain('Super Mario Bros. Wonder');
  });

  it('showResults réinitialise le score et les erreurs entre deux exécutions', () => {
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
    vm.showResults();
    expect(firstRunErrors).toBeGreaterThan(0);
    expect(vm.incorrectAnswers).toHaveLength(0);
  });

  it('showResults ne modifie pas les réponses correctes', () => {
    const before = JSON.parse(JSON.stringify(vm.correctAnswers));
    vm.userAnswers = { q1: 'Pong', q3: 'Court Vite' };
    vm.showResults();
    expect(vm.correctAnswers).toEqual(before);
  });
});
