import { Coupon } from '#/api/tinkoff/proto/instruments_pb';
import { getDateByTimestamp } from '#/utils/time';
import { getFloatMoney } from '#/utils/money';

export const getCouponPaymentByDate = (coupons: Coupon[]) => {
  const couponsPaymentMap = Object.fromEntries(
    coupons.map((coupon) => [
      getDateByTimestamp(coupon.getCouponDate()).toDateString(),
      getFloatMoney(coupon.getPayOneBond()),
    ])
  );

  return (date: Date): number => {
    const payment = couponsPaymentMap[date.toDateString()];

    if (!payment) {
      return 0;
    }

    return payment;
  };
};
