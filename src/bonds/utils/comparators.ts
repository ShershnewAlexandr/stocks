import { isAfter } from 'date-fns';

import { Bond, Coupon } from '#/api/tinkoff/proto/instruments_pb';
import { getFloatMoney } from '#/utils/money';

export enum EComparatorDirection {
  ASK = 'ASK',
  DESK = 'DESK',
}

type TComparator<TArg> = (a: TArg, b: TArg) => number;

export const comparatorDirection =
  <TArg>(direction: EComparatorDirection, comparator: TComparator<TArg>) =>
  (a: TArg, b: TArg): number => {
    const comparatorResult = comparator(a, b);

    return direction === EComparatorDirection.DESK
      ? comparatorResult * -1
      : comparatorResult;
  };

export const nominalComparator = (a: Bond, b: Bond) => {
  const aNominal = a.getNominal();
  const bNominal = b.getNominal();

  if (aNominal === undefined || bNominal === undefined) {
    return 0;
  }

  return getFloatMoney(aNominal) > getFloatMoney(bNominal) ? 1 : -1;
};

export const couponByDateComparator = (a: Coupon, b: Coupon) => {
  const aDate = a.getCouponDate()?.toDate();
  const bDate = b.getCouponDate()?.toDate();

  if (aDate === undefined || bDate === undefined) {
    return 0;
  }

  return isAfter(aDate, bDate) ? 1 : -1;
};
