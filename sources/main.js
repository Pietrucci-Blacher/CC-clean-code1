const yamsGame = (diceRoll) => {
  const countsRecursivity = {};
  let sumDice = 0;

  const updateCountsAndSum = (numberOnDice) => {
    countsRecursivity[numberOnDice] =
      (countsRecursivity[numberOnDice] || 0) + 1;
    sumDice += numberOnDice;
  };

  const getMaxCountOccasion = () => {
    const countValues = Object.values(countsRecursivity);
    return Math.max(...countValues);
  };

  const isSuite = () => {
    return (
      new Set(diceRoll).size === 5 &&
      Math.max(...diceRoll) - Math.min(...diceRoll) === 4
    );
  };

  const checkMaxCountOccasion = () => {
    const countValues = Object.values(countsRecursivity);
    const maxCountOcassion = getMaxCountOccasion();
    if (maxCountOcassion === 5) return 50;
    if (maxCountOcassion === 4) return 35;
    if (isSuite()) return 40;
    if (maxCountOcassion === 3) return countValues.includes(2) ? 30 : 28;
    return sumDice;
  };

  for (const numberOnDice of diceRoll) {
    updateCountsAndSum(numberOnDice);
  }

  return checkMaxCountOccasion();
};

export default yamsGame;
