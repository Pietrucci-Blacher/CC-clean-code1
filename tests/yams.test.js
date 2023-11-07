import { describe, it, expect } from 'vitest';
import yamsGame from '../sources/main.js';

describe('Yams Game', () => {
  it('the dice suite is a Carré', () => {
    expect(yamsGame([4, 4, 4, 4, 2])).toEqual(35);
  });
  it('the dice suite is a Brelan', () => {
    expect(yamsGame([2, 2, 2, 5, 6])).toEqual(28);
  });
});
