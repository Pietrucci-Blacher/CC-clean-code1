const yamsGame = (diceRoll) => {
  const counts = {};
  let sumDice = 0;

  for (const numberOnDice of diceRoll) {
    counts[numberOnDice] = (counts[numberOnDice] || 0) + 1;
    sumDice += numberOnDice;
  }

  const countValues = Object.values(counts);
  const maxCountOcassion = Math.max(...countValues);
  const isSuite =
    new Set(diceRoll).size === 5 &&
    Math.max(...diceRoll) - Math.min(...diceRoll) === 4;

  if (maxCountOcassion === 5) return 50;
  if (maxCountOcassion === 4) return 35;
  if (isSuite) return 40;
  if (maxCountOcassion === 3) return countValues.includes(2) ? 30 : 28;

  return sumDice;
};

export default yamsGame;
