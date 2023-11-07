import { describe, it, expect } from 'vitest';
import yamsGame from '../sources/main.js';

describe('Yams Game', () => {
  it('the dice suite is a Carré', () => {
    expect(yamsGame([4, 4, 2, 4, 4])).toEqual(35);
  });
  it('the dice suite is a Brelan', () => {
    expect(yamsGame([4, 2, 4, 5, 4])).toEqual(28);
  });
  it('the dice suite is a Full', () => {
    expect(yamsGame([3, 2, 3, 2, 3])).toEqual(30);
  });
  it('the dice suite is a Grande Suite', () => {
    expect(yamsGame([5, 4, 3, 2, 1])).toEqual(40);
  });
  it('the dice suite is a YAMS', () => {
    expect(yamsGame([5, 5, 5, 5, 5])).toEqual(50);
  });
  it('the dice suite is a YAMS', () => {
    expect(yamsGame([4, 4, 4, 4, 4])).toEqual(50);
  });
  it('the dice suite is Chance', () => {
    expect(yamsGame([2, 3, 5, 6, 1])).toEqual(17);
  });
  it('the roll dices are multiples', () => {
    expect(yamsGame([2, 3, 5, 6, 1], [2, 3, 5, 2, 1], [2, 3, 4, 6, 5])).toEqual(
      35
    );
  });
});
