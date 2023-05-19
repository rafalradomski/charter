export const calcPointsPerPurchase = (transactionAmount) => {
  let res = 0;

  if (transactionAmount > 100) {
    const diffAbove100 = (transactionAmount - 100) * 2;
    res += diffAbove100;
    res += 50;
  }

  if (transactionAmount >= 50 && transactionAmount <= 100) {
    const diffBelow100 = (transactionAmount - 50) * 1;
    res += diffBelow100;
  }

  return res;
};

export const calcTotalPoints = (transactions) => {
  let res = 0;
  transactions.forEach((transactionValue) => {
    res += calcPointsPerPurchase(transactionValue);
  });
  return res;
};
