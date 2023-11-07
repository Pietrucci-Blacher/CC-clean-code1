const yamsGame = (diceRoll) => {
  if (!Array.isArray(diceRoll) || diceRoll.length < 5) {
    throw new Error('diceRoll must be an array with at least 5 elements');
  }
};

export default yamsGame;
