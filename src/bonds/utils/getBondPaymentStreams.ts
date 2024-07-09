import { addDays, addHours, differenceInHours } from 'date-fns';

import { Bond } from '#/api/tinkoff/proto/instruments_pb';
import { getBondDateBorders } from '#/bonds/utils/getBondDateBorders';
import { getFloatMoney } from '#/utils/money';
import { getBondFullPrice } from '#/bonds/utils/getBondFullPrice';
import { getDateByTimestamp } from '#/utils/time';
import { getCoupons } from '#/api/tinkoff';

interface IBondPaymentSteam {
  date: Date;
  diffInHours: number;
  payment: number;
}

export const getBondCouponPaymentStreams = async (bond: Bond) => {
  const coupons = await getCoupons(bond);
  const { currentDate, maturityDate } = await getBondDateBorders(bond);
  const bondNominal = getFloatMoney(bond.getNominal());
  const fixTimeForBondPayment = (date: Date): Date => {
    return addHours(addDays(date, 0), 0);
  };

  const BondCouponPaymentStreams: IBondPaymentSteam[] = [];

  coupons.forEach((coupon) => {
    const couponDate = fixTimeForBondPayment(
      getDateByTimestamp(coupon.getCouponDate())
    );
    const payment = getFloatMoney(coupon.getPayOneBond());
    const diffInHours = differenceInHours(couponDate, currentDate);

    if (diffInHours > 0) {
      BondCouponPaymentStreams.push({
        payment,
        date: couponDate,
        diffInHours,
      });
    }
  });

  BondCouponPaymentStreams.push({
    payment: bondNominal,
    date: fixTimeForBondPayment(maturityDate),
    diffInHours: differenceInHours(
      fixTimeForBondPayment(maturityDate),
      currentDate
    ),
  });

  return BondCouponPaymentStreams;
};

export const getBondPaymentStreams = async (bond: Bond) => {
  const { currentDate } = await getBondDateBorders(bond);
  const bondFullPrice = await getBondFullPrice(bond);

  const BondPaymentStreams = await getBondCouponPaymentStreams(bond);

  BondPaymentStreams.unshift({
    payment: -bondFullPrice,
    date: currentDate,
    diffInHours: 0,
  });

  return BondPaymentStreams;
};
