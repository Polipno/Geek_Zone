import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import IndexComponent from '../../src/components/IndexComponent.vue';
import { get, onValue, ref, set } from '../../src/firebase';

vi.mock('../../src/firebase', () => ({
  db: {},
  ref: vi.fn((database, path) => ({ database, path })),
  get: vi.fn(async () => ({ exists: () => false, val: () => 0 })),
  set: vi.fn(async () => {}),
  onValue: vi.fn(),
}));

function createVm(overrides = {}) {
  return {
    ...IndexComponent.data(),
    ...IndexComponent.methods,
    ...overrides,
  };
}

describe('IndexComponent - Test Unitaire', () => {
  beforeEach(() => {
    localStorage.clear();
    delete window.Cypress;
    vi.clearAllMocks();
  });

  afterEach(() => {
    delete window.Cypress;
  });

  it('Vérifie les valeurs initiales du composant', () => {
    const vm = createVm();

    const result = {
      likeCount: vm.likeCount,
      isLiked: vm.isLiked,
      userId: vm.userId,
      isProcessing: vm.isProcessing,
    };

    expect(result).toEqual({
      likeCount: 0,
      isLiked: false,
      userId: '',
      isProcessing: false,
    });
  });

  it('isE2E retourne true si Cypress est présent', () => {
    const vm = createVm();
    window.Cypress = true;

    const isE2E = vm.isE2E();

    expect(isE2E).toBe(true);
  });

  it('isE2E retourne false si Cypress est absent', () => {
    const vm = createVm();
    delete window.Cypress;

    const isE2E = vm.isE2E();

    expect(isE2E).toBeFalsy();
  });

  it('getUserId crée et stocke un nouvel id', () => {
    const vm = createVm();
    localStorage.removeItem('userId');
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.123456789);

    const userId = vm.getUserId();

    expect(userId).toMatch(/^user-/);
    expect(localStorage.getItem('userId')).toBe(userId);
    randomSpy.mockRestore();
  });

  it('getUserId retourne l’identifiant existant si il est déjà stocké', () => {
    const vm = createVm();
    localStorage.setItem('userId', 'user-existing-id');

    const userId = vm.getUserId();

    expect(userId).toBe('user-existing-id');
  });

  it('created en mode E2E n’appelle aucune logique distante', async () => {
    window.Cypress = true;
    const vm = createVm({
      getUserId: vi.fn(),
      listenLikes: vi.fn(),
      fetchLikes: vi.fn(),
    });

    await IndexComponent.created.call(vm);

    expect(vm.likeCount).toBe(0);
    expect(vm.isLiked).toBe(false);
    expect(vm.getUserId).not.toHaveBeenCalled();
    expect(vm.listenLikes).not.toHaveBeenCalled();
    expect(vm.fetchLikes).not.toHaveBeenCalled();
  });

  it('created en mode normal initialise l’utilisateur et les données', async () => {
    const vm = createVm({
      isE2E: vi.fn(() => false),
      getUserId: vi.fn(() => 'user-abc'),
      listenLikes: vi.fn(),
      fetchLikes: vi.fn(async () => {}),
    });

    await IndexComponent.created.call(vm);

    expect(vm.userId).toBe('user-abc');
    expect(vm.getUserId).toHaveBeenCalledTimes(1);
    expect(vm.listenLikes).toHaveBeenCalledTimes(1);
    expect(vm.fetchLikes).toHaveBeenCalledTimes(1);
  });

  it('toggleLike en mode E2E ajoute un like si non liké', async () => {
    window.Cypress = true;
    const vm = createVm({ likeCount: 0, isLiked: false });

    await vm.toggleLike();

    expect(vm.likeCount).toBe(1);
    expect(vm.isLiked).toBe(true);
    expect(vm.isProcessing).toBe(false);
  });

  it('toggleLike en mode E2E retire un like si déjà liké', async () => {
    window.Cypress = true;
    const vm = createVm({ likeCount: 3, isLiked: true });

    await vm.toggleLike();

    expect(vm.likeCount).toBe(2);
    expect(vm.isLiked).toBe(false);
    expect(vm.isProcessing).toBe(false);
  });

  it('toggleLike ne like pas si isProcessing est à true', async () => {
    const vm = createVm({
      isProcessing: true,
      likeCount: 10,
      isLiked: false,
    });

    await vm.toggleLike();

    expect(vm.likeCount).toBe(10);
    expect(vm.isLiked).toBe(false);
    expect(set).not.toHaveBeenCalled();
  });

  it('toggleLike ajoute un like et le sauvegarde en mode normal', async () => {
    const vm = createVm({
      isE2E: () => false,
      userId: 'user-123',
      likeCount: 0,
      isLiked: false,
    });

    await vm.toggleLike();

    expect(vm.likeCount).toBe(1);
    expect(vm.isLiked).toBe(true);
    expect(vm.isProcessing).toBe(false);
    expect(set).toHaveBeenCalledWith(
      expect.objectContaining({ path: 'likes/users/user-123' }),
      true
    );
    expect(set).toHaveBeenCalledWith(expect.objectContaining({ path: 'likes/global' }), 1);
  });

  it('toggleLike retire un like et met à jour Firebase', async () => {
    const vm = createVm({
      isE2E: () => false,
      userId: 'user-123',
      likeCount: 5,
      isLiked: true,
    });

    await vm.toggleLike();

    expect(vm.likeCount).toBe(4);
    expect(vm.isLiked).toBe(false);
    expect(vm.isProcessing).toBe(false);
    expect(set).toHaveBeenCalledWith(
      expect.objectContaining({ path: 'likes/users/user-123' }),
      null
    );
    expect(set).toHaveBeenCalledWith(expect.objectContaining({ path: 'likes/global' }), 4);
  });

  it('toggleLike gère correctement une erreur lors de la sauvegarde', async () => {
    const vm = createVm({
      isE2E: () => false,
      userId: 'user-123',
      likeCount: 0,
      isLiked: false,
    });
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    set.mockRejectedValueOnce(new Error('network failure'));

    await vm.toggleLike();

    expect(vm.isProcessing).toBe(false);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    consoleErrorSpy.mockRestore();
  });

  it('listenLikes met à jour le compteur si des données existent', () => {
    const vm = createVm();

    onValue.mockImplementationOnce((_, callback) => {
      callback({ exists: () => true, val: () => 42 });
    });

    vm.listenLikes();

    expect(vm.likeCount).toBe(42);
    expect(onValue).toHaveBeenCalledTimes(1);
  });

  it('fetchLikes récupère le compteur global et le statut utilisateur', async () => {
    const vm = createVm({ userId: 'user-777' });

    get
      .mockResolvedValueOnce({ exists: () => true, val: () => 9 })
      .mockResolvedValueOnce({ exists: () => true, val: () => true });

    await vm.fetchLikes();

    expect(vm.likeCount).toBe(9);
    expect(vm.isLiked).toBe(true);
    expect(get).toHaveBeenCalledTimes(2);
  });

  it('listenLikes conserve la valeur actuelle si aucune donnée n’existe', () => {
    const vm = createVm({ likeCount: 7 });

    onValue.mockImplementationOnce((_, callback) => {
      callback({ exists: () => false, val: () => 999 });
    });

    vm.listenLikes();

    expect(vm.likeCount).toBe(7);
  });

  it('fetchLikes garde les valeurs par défaut si aucune donnée n’existe', async () => {
    const vm = createVm({ userId: 'user-777', likeCount: 0, isLiked: false });

    get
      .mockResolvedValueOnce({ exists: () => false, val: () => 9 })
      .mockResolvedValueOnce({ exists: () => false, val: () => true });

    await vm.fetchLikes();

    expect(vm.likeCount).toBe(0);
    expect(vm.isLiked).toBe(false);
  });
});
