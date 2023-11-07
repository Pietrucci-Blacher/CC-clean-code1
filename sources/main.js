const yamsGame = (...diceRolls) => {
  const countsRecursivity = {};
  let sumDice = 0;
  let maxDiceRoll = 0;

  const updateCountsAndSum = (numberOnDice) => {
    countsRecursivity[numberOnDice] =
      (countsRecursivity[numberOnDice] || 0) + 1;
    sumDice += numberOnDice;
    if (numberOnDice > maxDiceRoll) {
      maxDiceRoll = numberOnDice;
    }
  };

  const getMaxCountOccasion = () => {
    const countValues = Object.values(countsRecursivity);
    return Math.max(...countValues);
  };

  const isSuite = () => {
    return (
      new Set(diceRolls.flat()).size === 5 &&
      Math.max(...diceRolls.flat()) - Math.min(...diceRolls.flat()) === 4
    );
  };

  const checkMaxCountOccasion = () => {
    const counts = Object.values(countsRecursivity);
    const maxCount = getMaxCountOccasion();
    if (maxCount === 5) {
      return 50;
    }
    if (maxCount === 4) {
      return 35;
    }
    if (isSuite()) {
      return 40;
    }
    if (maxCount === 3) {
      const hasPair = counts.includes(2);
      if (hasPair) {
        return 30;
      } else {
        return 28;
      }
    }
    return sumDice;
  };

  for (const diceRoll of diceRolls) {
    for (const numberOnDice of diceRoll) {
      updateCountsAndSum(numberOnDice);
    }
  }

  return checkMaxCountOccasion(maxDiceRoll);
};

export default yamsGame;
