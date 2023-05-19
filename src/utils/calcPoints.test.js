import { calcPointsPerPurchase, calcTotalPoints } from './calcPoints';

describe('calcPointsPerPurchase() should calculate points per purchase', () => {
  test('purchase above > 100', () => {
    const res = calcPointsPerPurchase(120);
    expect(res).toEqual(90);
  });
  test('purchase in range: 50 - 100', () => {
    const res = calcPointsPerPurchase(76);
    expect(res).toEqual(26);
  });
  test('purchase below 50', () => {
    const res = calcPointsPerPurchase(46);
    expect(res).toEqual(0);
  });
});

describe('calcTotalPoints() should calculate points per purchase', () => {
  test('one transaction', () => {
    const res = calcTotalPoints([120]);
    expect(res).toEqual(90);
  });
  test('few transactions', () => {
    const res = calcTotalPoints([120, 20, 51]);
    expect(res).toEqual(91);
  });
});
