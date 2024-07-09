import { MoneyValue, Quotation } from '#/api/tinkoff/proto/common_pb';

export const getFloatMoney = (
  moneyValue: MoneyValue | Quotation | undefined
): number => {
  if (moneyValue === undefined) {
    throw new Error('Money values is undefined');
  }

  return Number(`${moneyValue.getUnits()}.${moneyValue.getNano()}`);
};
